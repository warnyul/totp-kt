package dev.robinohs.totpkt.otp.totp

import dev.robinohs.totpkt.otp.hotp.HotpGenerator
import dev.robinohs.totpkt.random.RandomGenerator
import java.time.Clock
import java.time.Duration
import java.time.Instant

/**
 * @author : Robin Ohs
 * @created : 24.06.2022
 * @since : 0.0.1
 */
class TotpGenerator(
    override var randomGenerator: RandomGenerator = RandomGenerator(),
    var timePeriod: Duration = Duration.ofSeconds(30),
    var tolerance: Duration = Duration.ofSeconds(5),
    var clock: Clock = Clock.systemUTC()
) : HotpGenerator(randomGenerator) {

    override fun generateCode(secret: ByteArray, counter: Long): String {
        val currentCounter = computeCounterForMillis(counter)
        return super.generateCode(secret, currentCounter)
    }

    override fun isCodeValid(secret: ByteArray, counter: Long, givenCode: String): Boolean {
        val code = generateCode(secret, counter)
        return code == givenCode
    }

    /**
     * Checks a generated code against a given code with a counter derived from the actual timestamp and given secret.
     * Furthermore, the method considers a tolerance and also checks the given code against previous tokens generated
     * within in a specified tolerance duration (Class property). Returns true if given code matches any of these tokens.
     *
     * @param secret the secret that will be used as hashing key.
     * @param millis the timestamp as millis.
     * @param givenCode the code that should be validated against the generated code.
     * @return a boolean indicating if the generated and given code are equal.
     */
    fun isCodeValidWithTolerance(secret: ByteArray, millis: Long, givenCode: String): Boolean {
        val timestamp = Instant.ofEpochMilli(millis)
        val toleranceLowerBound = timestamp.minus(tolerance)
        val validToken = getCodesInInterval(secret, toleranceLowerBound.toEpochMilli(), timestamp.toEpochMilli())
        return givenCode in validToken
    }

    private fun getCodesInInterval(secret: ByteArray, start: Long, end: Long): Set<String> {
        val validToken = mutableSetOf<String>()
        var iteratingTimestamp = computeTimeslotBeginning(start)
        val endSlotBeginning = computeTimeslotBeginning(end)
        while (iteratingTimestamp <= endSlotBeginning) {
            validToken.add(generateCode(secret, iteratingTimestamp))
            iteratingTimestamp += timePeriod.toMillis()
        }
        return validToken
    }

    private fun computeCounterForMillis(millis: Long): Long = Math.floorDiv(millis, timePeriod.toMillis())

    private fun computeTimeslotBeginning(millis: Long): Long {
        val counter = computeCounterForMillis(millis)
        return timePeriod.toMillis() * counter
    }
}
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":"unreleased","badge":true,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting Started","href":"/totp-kt/docs/next/intro","docId":"intro"},{"type":"category","label":"Time-Based One-Time Password","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Initialize Generator","href":"/totp-kt/docs/next/totp/initialize-generator","docId":"totp/initialize-generator"},{"type":"link","label":"Code Generation","href":"/totp-kt/docs/next/totp/code-generation","docId":"totp/code-generation"},{"type":"link","label":"Code Validation","href":"/totp-kt/docs/next/totp/code-validation","docId":"totp/code-validation"},{"type":"link","label":"Timeslot Calculations","href":"/totp-kt/docs/next/totp/timeslot-caluclations","docId":"totp/timeslot-caluclations"}],"href":"/totp-kt/docs/next/category/time-based-one-time-password"},{"type":"category","label":"HMAC-based One-Time Password","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Initialize Generator","href":"/totp-kt/docs/next/hotp/initialize-generator","docId":"hotp/initialize-generator"},{"type":"link","label":"Code Generation","href":"/totp-kt/docs/next/hotp/code-generation","docId":"hotp/code-generation"},{"type":"link","label":"Code Validation","href":"/totp-kt/docs/next/hotp/code-validation","docId":"hotp/code-validation"}],"href":"/totp-kt/docs/next/category/hmac-based-one-time-password"},{"type":"category","label":"Random Dependent Generators","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Random Generator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Initialize Generator","href":"/totp-kt/docs/next/secretgenerator/random/initialize-generator","docId":"secretgenerator/random/initialize-generator"},{"type":"link","label":"Generate Random Values","href":"/totp-kt/docs/next/secretgenerator/random/generate-random-values","docId":"secretgenerator/random/generate-random-values"}],"href":"/totp-kt/docs/next/category/random-generator"},{"type":"category","label":"Secret Generator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Initialize Generator","href":"/totp-kt/docs/next/secretgenerator/secret/initialize-generator","docId":"secretgenerator/secret/initialize-generator"},{"type":"link","label":"Generate Secrets","href":"/totp-kt/docs/next/secretgenerator/secret/generate-secret","docId":"secretgenerator/secret/generate-secret"},{"type":"link","label":"Base32Secret","href":"/totp-kt/docs/next/secretgenerator/secret/base32secret","docId":"secretgenerator/secret/base32secret"}],"href":"/totp-kt/docs/next/category/secret-generator"},{"type":"category","label":"Recovery-Code Generator","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Initialize Generator","href":"/totp-kt/docs/next/secretgenerator/recovery/initialize-generator","docId":"secretgenerator/recovery/initialize-generator"},{"type":"link","label":"Generate Recovery-Codes","href":"/totp-kt/docs/next/secretgenerator/recovery/generate-recovery-codes","docId":"secretgenerator/recovery/generate-recovery-codes"}],"href":"/totp-kt/docs/next/category/recovery-code-generator"}],"href":"/totp-kt/docs/next/category/random-dependent-generators"}]},"docs":{"hotp/code-generation":{"id":"hotp/code-generation","title":"Code Generation","description":"After you created the hotpGenerator instance you can generate a one-time password by calling the generatore code method with the secret and the counter as arguments.","sidebar":"tutorialSidebar"},"hotp/code-validation":{"id":"hotp/code-validation","title":"Code Validation","description":"This methods can be used to validate a token that was send from a client.","sidebar":"tutorialSidebar"},"hotp/initialize-generator":{"id":"hotp/initialize-generator","title":"Initialize Generator","description":"Documentation for creating an instance of the HMAC-Based One-Time Password Generator.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Getting Started","description":"Installation","sidebar":"tutorialSidebar"},"secretgenerator/random/generate-random-values":{"id":"secretgenerator/random/generate-random-values","title":"Generate Random Values","description":"This generator can be used to create random values. Other generators rely on the random generator methods to generate secrets.","sidebar":"tutorialSidebar"},"secretgenerator/random/initialize-generator":{"id":"secretgenerator/random/initialize-generator","title":"Initialize Generator","description":"The random generator is internally used by the secret generator and recovery-code generator to create randomly generated secure strings.","sidebar":"tutorialSidebar"},"secretgenerator/recovery/generate-recovery-codes":{"id":"secretgenerator/recovery/generate-recovery-codes","title":"Generate Recovery-Codes","description":"This generator can be used to create randomly generated strings in block form.","sidebar":"tutorialSidebar"},"secretgenerator/recovery/initialize-generator":{"id":"secretgenerator/recovery/initialize-generator","title":"Initialize Generator","description":"The recovery-code generator is used to generate recovery-codes, which are randomly generated strings in block form.","sidebar":"tutorialSidebar"},"secretgenerator/secret/base32secret":{"id":"secretgenerator/secret/base32secret","title":"Base32Secret","description":"This page explains the Base32Secret data class.","sidebar":"tutorialSidebar"},"secretgenerator/secret/generate-secret":{"id":"secretgenerator/secret/generate-secret","title":"Generate Secrets","description":"This generator can be used to create randomly generated secret.","sidebar":"tutorialSidebar"},"secretgenerator/secret/initialize-generator":{"id":"secretgenerator/secret/initialize-generator","title":"Initialize Generator","description":"The secret generator is used to generate secrets in Base32 encoding that can be used with the various OTP (One-Time Password) generators.","sidebar":"tutorialSidebar"},"totp/code-generation":{"id":"totp/code-generation","title":"Code Generation","description":"This methods can be used to generate a TOTP (Time-Based One-Time Password) code.","sidebar":"tutorialSidebar"},"totp/code-validation":{"id":"totp/code-validation","title":"Code Validation","description":"This methods can be used to validate a token that was send from a client.","sidebar":"tutorialSidebar"},"totp/initialize-generator":{"id":"totp/initialize-generator","title":"Initialize Generator","description":"Documentation for creating an instance of the Time-Based One-Time Password Generator.","sidebar":"tutorialSidebar"},"totp/timeslot-caluclations":{"id":"totp/timeslot-caluclations","title":"Timeslot Calculations","description":"The methods described on this page can be used to calculate time slot informations like the beginning or remaining time of a timeslot.","sidebar":"tutorialSidebar"}}}')}}]);
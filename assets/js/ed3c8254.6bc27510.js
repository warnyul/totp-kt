"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[468],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=c(n),g=l,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||r;return n?a.createElement(d,i(i({ref:e},u),{},{components:n})):a.createElement(d,i({ref:e},u))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9407:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:4},i="Timeslot Calculations",o={unversionedId:"totp/timeslot-caluclations",id:"totp/timeslot-caluclations",title:"Timeslot Calculations",description:"The methods described on this page can be used to calculate time slot informations like the beginning or remaining time of a timeslot.",source:"@site/docs/totp/timeslot-caluclations.mdx",sourceDirName:"totp",slug:"/totp/timeslot-caluclations",permalink:"/totp-kt/docs/next/totp/timeslot-caluclations",draft:!1,editUrl:"https://github.com/robinohs/totp-kt/docs/totp/timeslot-caluclations.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Code Validation",permalink:"/totp-kt/docs/next/totp/code-validation"},next:{title:"HMAC-based One-Time Password",permalink:"/totp-kt/docs/next/category/hmac-based-one-time-password"}},s={},c=[{value:"calculateTimeslotBeginning",id:"calculatetimeslotbeginning",level:2},{value:"Info",id:"info",level:3},{value:"Usage",id:"usage",level:3},{value:"Arguments",id:"arguments",level:3},{value:"calculateRemainingTime",id:"calculateremainingtime",level:2},{value:"Info",id:"info-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Arguments",id:"arguments-1",level:3}],u={toc:c};function m(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"timeslot-calculations"},"Timeslot Calculations"),(0,l.kt)("p",null,"The methods described on this page can be used to calculate time slot informations like the beginning or remaining time of a timeslot."),(0,l.kt)("h2",{id:"calculatetimeslotbeginning"},"calculateTimeslotBeginning"),(0,l.kt)("h3",{id:"info"},"Info"),(0,l.kt)("p",null,"Calculates the start timestamp of the time slot in which the actual or given timestamp lies."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// measures current time of the clock, returns millis\ntotpGenerator.calculateTimeslotBeginning()\n")),(0,l.kt)("p",null,"With a specific timestamp:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// with millis, returns millis\ntotpGenerator.calculateTimeslotBeginning(1656459878681)\n// with Instant, returns Instant\ntotpGenerator.calculateTimeslotBeginning(Instant())\n// with Date, returns Date\ntotpGenerator.calculateTimeslotBeginning(Date())\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Constraint"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"Long, Instant, Date"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"calculateremainingtime"},"calculateRemainingTime"),(0,l.kt)("h3",{id:"info-1"},"Info"),(0,l.kt)("p",null,"Calculates the remaining time as a Duration of the time slot in which the actual or given timestamp lies."),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// measures current time of the clock, returns millis\ntotpGenerator.calculateRemainingTime()\n")),(0,l.kt)("p",null,"With a specific timestamp:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// with millis\ntotpGenerator.calculateRemainingTime(1656459878681)\n// with Instant\ntotpGenerator.calculateRemainingTime(Instant())\n// with Date\ntotpGenerator.calculateRemainingTime(Date())\n")),(0,l.kt)("h3",{id:"arguments-1"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Constraint"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"Long, Instant, Date"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional")))))}m.isMDXComponent=!0}}]);
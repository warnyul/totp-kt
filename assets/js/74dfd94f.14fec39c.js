"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4358],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,v=p["".concat(i,".").concat(g)]||p[g]||u[g]||a;return t?n.createElement(v,l(l({ref:r},d),{},{components:t})):n.createElement(v,l({ref:r},d))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4458:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},l="Generate Recovery-Codes",c={unversionedId:"secretgenerator/recovery/generate-recovery-codes",id:"version-1.0.0/secretgenerator/recovery/generate-recovery-codes",title:"Generate Recovery-Codes",description:"This generator can be used to create randomly generated strings in block form.",source:"@site/versioned_docs/version-1.0.0/secretgenerator/recovery/generate-recovery-codes.mdx",sourceDirName:"secretgenerator/recovery",slug:"/secretgenerator/recovery/generate-recovery-codes",permalink:"/totp-kt/docs/secretgenerator/recovery/generate-recovery-codes",draft:!1,editUrl:"https://github.com/robinohs/totp-kt/versioned_docs/version-1.0.0/secretgenerator/recovery/generate-recovery-codes.mdx",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Initialize Generator",permalink:"/totp-kt/docs/secretgenerator/recovery/initialize-generator"}},i={},s=[{value:"generateRecoveryCode",id:"generaterecoverycode",level:2},{value:"Info",id:"info",level:3},{value:"Usage",id:"usage",level:3},{value:"generateRecoveryCodes",id:"generaterecoverycodes",level:2},{value:"Info",id:"info-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Arguments",id:"arguments",level:3}],d={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-recovery-codes"},"Generate Recovery-Codes"),(0,o.kt)("p",null,"This generator can be used to create randomly generated strings in block form."),(0,o.kt)("h2",{id:"generaterecoverycode"},"generateRecoveryCode"),(0,o.kt)("h3",{id:"info"},"Info"),(0,o.kt)("p",null,"You can create a recovery-code with the this method. Typically, recovery-codes are used to authenticate when a user loses access to their second factor device."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"recoveryCodeGenerator.generateRecoveryCode()\n")),(0,o.kt)("p",null,"This will generate a recovery code similar to the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'> "AAAA-BBBB-CCCC-DDDD"\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"generaterecoverycodes"},"generateRecoveryCodes"),(0,o.kt)("h3",{id:"info-1"},"Info"),(0,o.kt)("p",null,"Usually a user receives multiple recovery-codes. You can use the following helper method to generate a list of\nrecovery-codes instead of calling the single method multiple times."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"recoveryCodeGenerator.generateRecoveryCodes(number = 3)\n")),(0,o.kt)("p",null,"The generated list looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'> ["AAAA-BBBB-CCCC-DDDD", "BBBB-AAAA-CCCC-DDDD", "BBBB-AAAA-DDDD-CCCC"]\n')),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Constraint"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"Int"),(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},">= 0")))))}u.isMDXComponent=!0}}]);
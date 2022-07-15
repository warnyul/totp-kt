"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,y=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},l="Generate Recovery-Codes",c={unversionedId:"secretgenerator/recovery/generate-recovery-codes",id:"secretgenerator/recovery/generate-recovery-codes",title:"Generate Recovery-Codes",description:"This generator can be used to create randomly generated strings in block form.",source:"@site/docs/secretgenerator/recovery/generate-recovery-codes.mdx",sourceDirName:"secretgenerator/recovery",slug:"/secretgenerator/recovery/generate-recovery-codes",permalink:"/totp-kt/docs/next/secretgenerator/recovery/generate-recovery-codes",draft:!1,editUrl:"https://github.com/robinohs/totp-kt/docs/secretgenerator/recovery/generate-recovery-codes.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Initialize Generator",permalink:"/totp-kt/docs/next/secretgenerator/recovery/initialize-generator"}},i={},s=[{value:"generateRecoveryCode",id:"generaterecoverycode",level:2},{value:"Info",id:"info",level:3},{value:"Usage",id:"usage",level:3},{value:"generateRecoveryCodes",id:"generaterecoverycodes",level:2},{value:"Info",id:"info-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Arguments",id:"arguments",level:3}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-recovery-codes"},"Generate Recovery-Codes"),(0,o.kt)("p",null,"This generator can be used to create randomly generated strings in block form."),(0,o.kt)("h2",{id:"generaterecoverycode"},"generateRecoveryCode"),(0,o.kt)("h3",{id:"info"},"Info"),(0,o.kt)("p",null,"You can create a recovery-code with the this method. Typically, recovery-codes are used to authenticate when a user loses access to their second factor device."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"recoveryCodeGenerator.generateRecoveryCode()\n")),(0,o.kt)("p",null,"This will generate a recovery code similar to the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'> "AAAA-BBBB-CCCC-DDDD"\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"generaterecoverycodes"},"generateRecoveryCodes"),(0,o.kt)("h3",{id:"info-1"},"Info"),(0,o.kt)("p",null,"Usually a user receives multiple recovery-codes. You can use the following helper method to generate a list of\nrecovery-codes instead of calling the single method multiple times."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"recoveryCodeGenerator.generateRecoveryCodes(number = 3)\n")),(0,o.kt)("p",null,"The generated list looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'> ["AAAA-BBBB-CCCC-DDDD", "BBBB-AAAA-CCCC-DDDD", "BBBB-AAAA-DDDD-CCCC"]\n')),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Constraint"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"Int"),(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},">= 0")))))}d.isMDXComponent=!0}}]);
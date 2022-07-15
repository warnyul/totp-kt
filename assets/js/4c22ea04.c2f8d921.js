"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:2},o="Generate Secrets",i={unversionedId:"secretgenerator/secret/generate-secret",id:"version-1.0.0/secretgenerator/secret/generate-secret",title:"Generate Secrets",description:"This generator can be used to create randomly generated secret.",source:"@site/versioned_docs/version-1.0.0/secretgenerator/secret/generate-secret.mdx",sourceDirName:"secretgenerator/secret",slug:"/secretgenerator/secret/generate-secret",permalink:"/totp-kt/docs/secretgenerator/secret/generate-secret",draft:!1,editUrl:"https://github.com/robinohs/totp-kt/versioned_docs/version-1.0.0/secretgenerator/secret/generate-secret.mdx",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Initialize Generator",permalink:"/totp-kt/docs/secretgenerator/secret/initialize-generator"},next:{title:"Base32Secret",permalink:"/totp-kt/docs/secretgenerator/secret/base32secret"}},s={},c=[{value:"Method: generateSecret(length: Int)",id:"method-generatesecretlength-int",level:2},{value:"Info",id:"info",level:3},{value:"Usage",id:"usage",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Method: generateSecret(algorithm: HashAlgorithm)",id:"method-generatesecretalgorithm-hashalgorithm",level:2},{value:"Info",id:"info-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Arguments",id:"arguments-1",level:3}],u={toc:c};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generate-secrets"},"Generate Secrets"),(0,a.kt)("p",null,"This generator can be used to create randomly generated secret."),(0,a.kt)("h2",{id:"method-generatesecretlength-int"},"Method: generateSecret(length: Int)"),(0,a.kt)("h3",{id:"info"},"Info"),(0,a.kt)("p",null,"If you want to generate a secret that can be used as a shared secret between the client and the server, there is the generateSecret function.\nThe default behavior of the function is to generate a 10 character long secret and convert it to a Base32Secret instance.\nOptionally you can specify the length of the plain input to the base32 encoding secret."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"secretGenerator.generateSecret(length = 3)\n")),(0,a.kt)("p",null,"The generated secret will be returned as a Base32Secret object, similar to this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'Base32Secret(\n    secretAsString = "IJAUCQSBIJAUEQKBIJBECQKCIJAUCQSCIJAUCQKCIFAUCQKC",\n    secretAsByteArray = [B@372f7a8d\n)\n')),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Constraint"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"Int"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},">= 0")))),(0,a.kt)("h2",{id:"method-generatesecretalgorithm-hashalgorithm"},"Method: generateSecret(algorithm: HashAlgorithm)"),(0,a.kt)("h3",{id:"info-1"},"Info"),(0,a.kt)("p",null,"If you want to generate a secret that can be used as a shared secret between client and server, there is the function generateSecret.\nYou can pass a supported HMAC algorithm as input to the function to generate a secret with the recommended length of the algorithm."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Length"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SHA1"),(0,a.kt)("td",{parentName:"tr",align:null},"20")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SHA256"),(0,a.kt)("td",{parentName:"tr",align:null},"32")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SHA512"),(0,a.kt)("td",{parentName:"tr",align:null},"64")))),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"secretGenerator.generateSecret(HashAlgorithm.SHA1)\n")),(0,a.kt)("p",null,"The generated secret will be returned as a Base32Secret object, similar to this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'Base32Secret(\n    secretAsString = "IJAUCQSBIJAUEQKBIJBECQKCIJAUCQSCIJAUCQKCIFAUCQKC",\n    secretAsByteArray = [B@372f7a8d\n)\n')),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Constraint"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,a.kt)("td",{parentName:"tr",align:null},"HashAlgorithm"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))))}g.isMDXComponent=!0}}]);
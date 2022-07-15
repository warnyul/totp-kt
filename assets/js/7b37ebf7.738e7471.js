"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,y=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:3},o="Base32Secret",c={unversionedId:"secretgenerator/secret/base32secret",id:"secretgenerator/secret/base32secret",title:"Base32Secret",description:"This page explains the Base32Secret data class.",source:"@site/docs/secretgenerator/secret/base32secret.mdx",sourceDirName:"secretgenerator/secret",slug:"/secretgenerator/secret/base32secret",permalink:"/totp-kt/docs/next/secretgenerator/secret/base32secret",draft:!1,editUrl:"https://github.com/robinohs/totp-kt/docs/secretgenerator/secret/base32secret.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Generate Secrets",permalink:"/totp-kt/docs/next/secretgenerator/secret/generate-secret"},next:{title:"Recovery-Code Generator",permalink:"/totp-kt/docs/next/category/recovery-code-generator"}},i={},l=[{value:"Info",id:"info",level:2},{value:"Consume",id:"consume",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"base32secret"},"Base32Secret"),(0,a.kt)("p",null,"This page explains the Base32Secret data class."),(0,a.kt)("h2",{id:"info"},"Info"),(0,a.kt)("p",null,"This data class is used as the return value for generated secrets and contains the generated secret as string and as bytearray.\nAs a Kotlin data class it supports destructuring of the values."),(0,a.kt)("h2",{id:"consume"},"Consume"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val (secretAsString, secretAsByteArray) = Base32Secret(\n    secretAsString = "IJAUCQSBIJAUEQKBIJBECQKCIJAUCQSCIJAUCQKCIFAUCQKC",\n    secretAsByteArray = [B@372f7a8d\n)\n')))}u.isMDXComponent=!0}}]);
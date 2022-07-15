"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Initialize Generator",s={unversionedId:"secretgenerator/secret/initialize-generator",id:"version-1.0.0/secretgenerator/secret/initialize-generator",title:"Initialize Generator",description:"The secret generator is used to generate secrets in Base32 encoding that can be used with the various OTP (One-Time Password) generators.",source:"@site/versioned_docs/version-1.0.0/secretgenerator/secret/initialize-generator.mdx",sourceDirName:"secretgenerator/secret",slug:"/secretgenerator/secret/initialize-generator",permalink:"/totp-kt/docs/secretgenerator/secret/initialize-generator",draft:!1,editUrl:"https://github.com/robinohs/totp-kt/versioned_docs/version-1.0.0/secretgenerator/secret/initialize-generator.mdx",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Secret Generator",permalink:"/totp-kt/docs/category/secret-generator"},next:{title:"Generate Secrets",permalink:"/totp-kt/docs/secretgenerator/secret/generate-secret"}},c={},l=[{value:"Create secret generator",id:"create-secret-generator",level:2},{value:"Spring Boot",id:"spring-boot",level:2},{value:"Customize properties",id:"customize-properties",level:2},{value:"Code length",id:"code-length",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"initialize-generator"},"Initialize Generator"),(0,o.kt)("p",null,"The secret generator is used to generate secrets in Base32 encoding that can be used with the various OTP (One-Time Password) generators."),(0,o.kt)("h2",{id:"create-secret-generator"},"Create secret generator"),(0,o.kt)("p",null,"You can create an instance of the SecretGenerator in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val base32Secret: Base32Secret = secretGenerator.generateSecret()\n")),(0,o.kt)("h2",{id:"spring-boot"},"Spring Boot"),(0,o.kt)("p",null,"Instead of creating a new instance of a generator each time a token is checked, it is also possible to create a bean within Spring.\nThis allows to configure the generator once and this configuration is maintained each time the bean is injected into a component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun secretGenerator(): SecretGenerator {\n    val generator = SecretGenerator()\n    generator.randomGenerator = RandomGenerator(charPool = listOf('B', 'C', 'D'))\n    return generator\n}\n")),(0,o.kt)("p",null,"This bean can then be injected in the constructor of any class marked with @Component (@Service, ...)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass CustomComponent(private val secretGenerator: SecretGenerator) {\n    //...\n}\n")),(0,o.kt)("h2",{id:"customize-properties"},"Customize properties"),(0,o.kt)("p",null,"It is possible to customize the properties of the generator, either by setters or applying them in the constructor."),(0,o.kt)("h3",{id:"code-length"},"Code length"),(0,o.kt)("p",null,"The code length specifies how long a generated code will be. If the code length is changed, it is necessary that the user's authenticator app supports this as well."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Could break logic")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Most authenticator apps, such as those from Microsoft or Google, use a length of 6 digits. If you change this number, they are no longer usable.\nHowever, remember that that they are widely used before you drop support for them."))))}d.isMDXComponent=!0}}]);
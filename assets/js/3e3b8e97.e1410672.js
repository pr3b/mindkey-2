"use strict";(self.webpackChunkmindkey_2=self.webpackChunkmindkey_2||[]).push([[954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(y,o(o({ref:t},p),{},{components:n})):i.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"Mindkey Recruiting API",sidebar_position:3},o="Recruiting API",c={unversionedId:"recruiting",id:"recruiting",title:"Mindkey Recruiting API",description:"\ud83d\udcdcRetrieves vacancies and data for application forms, and can also receive submitted applications from candidates.",source:"@site/docs/recruiting.md",sourceDirName:".",slug:"/recruiting",permalink:"/mindkey-2/docs/recruiting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/recruiting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Mindkey Recruiting API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Mindkey Integrations API",permalink:"/mindkey-2/docs/integration"},next:{title:"Mindkey System API",permalink:"/mindkey-2/docs/system-api"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recruiting-api"},"Recruiting API"),(0,r.kt)("p",null,"\ud83d\udcdcRetrieves vacancies and data for application forms, and can also receive submitted applications from candidates."),(0,r.kt)("h1",{id:"api-client--javascript-wrapper-for-the-recruiting-api"},"API Client / JavaScript Wrapper for the Recruiting API"),(0,r.kt)("p",null,"The API Client is a JavaScript Wrapper for the Recruiting API, providing a convenient way to communicate with the API using promises. This user guide will walk you through the process of using the API Client and provide examples of its usage."),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can include the API Client in your application by adding the following script tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<script src="https://recruiting.mindkey.com/api-client/api-client-global.js"><\/script>\n')),(0,r.kt)("h1",{id:"ecmascript-module-version-recommended"},"ECMAScript module version (recommended)"),(0,r.kt)("p",null,"The ECMAScript module version of the API Client is recommended for usage. You can include it in your application using the following script tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<script type="module" src="https://recruiting.mindkey.com/api-client/api-client-module.js"><\/script>\n')),(0,r.kt)("p",null,"Once included, you can construct one of the clients and make requests to the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { VacancyClient } from 'https://recruiting.mindkey.com/api-client/api-client-module.js';\n\nconst vacancyClient = new VacancyClient('https://recruiting.mindkey.com/api');\nconst vacancies = await vacancyClient.getVacancies('<insert-your-customer-id-here>', 'en-US');\n")),(0,r.kt)("h1",{id:"global-version"},"Global version"),(0,r.kt)("p",null,"The global version of the API Client can be included in your application using the script tag mentioned earlier. Instead of directly constructing one of the clients, you can find them on window.mindkey.apiClient."),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const vacancyClient = new window.mindkey.apiClient.VacancyClient('https://recruiting.mindkey.com/api');\nconst vacancies = await vacancyClient.getVacancies('<insert-your-customer-id-here>', 'en-US');\n")),(0,r.kt)("h1",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"For more details on the available clients, methods, and their responses, refer to the code documentation by clicking ",(0,r.kt)("a",{parentName:"p",href:"https://apidocs-dev.mindkey.com/recruiting-typedoc/index.html"},"here.")),(0,r.kt)("p",null,"It provides comprehensive information about the API Client and its usage."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 Note:"),(0,r.kt)("p",{parentName:"blockquote"},"Please note that the API Client is specifically designed for the Recruiting API and may not be suitable for other APIs or use cases.")))}d.isMDXComponent=!0}}]);
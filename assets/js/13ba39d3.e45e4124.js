"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[881],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),y=o,f=m["".concat(u,".").concat(y)]||m[y]||p[y]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1644:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a={id:"Security",title:"Security"},c=void 0,u={unversionedId:"Security",id:"Security",isDocsHomePage:!1,title:"Security",description:"As a quickly-evolving, open project you may think that security might not feature high on our priority list. This is not the case. We are aware of the data, security and privacy concerns within our community, and are making an active effort to make sure we also do our part.",source:"@site/docs/Security.md",sourceDirName:".",slug:"/Security",permalink:"/community-platform/Security",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Security.md",tags:[],version:"current",frontMatter:{id:"Security",title:"Security"},sidebar:"mainSidebar",previous:{title:"Manual Backups",permalink:"/community-platform/Server Maintenance/manualBackups"}},s=[],l={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As a quickly-evolving, open project you may think that security might not feature high on our priority list. This is not the case. We are aware of the data, security and privacy concerns within our community, and are making an active effort to make sure we also do our part."),(0,i.kt)("p",null,"To keep the platform easy to work on for developers, we essentially have two entirely separate projects in place:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dev platform - this is completely open so anybody can access and use the server and database for development purposes. This site is not for use by the general public however, and as such we aim to not capture any sensitive information. Any code contributed to the site must be approved by an admin, and all source code is fully open with full history visible for scrutiny.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Live site - this is the locked down version. All server configuration is encrypted, and access only provided to a select group of admins (currently 2 people). The code that runs on this site is the same as the dev site, and has an additional approval step before going live."))),(0,i.kt)("p",null,"As the platform grows we would also hope to take additional external review steps, so if you are interested in supporting this please feel free to get in touch."),(0,i.kt)("p",null,"Looking to disclose a security issue? Read more on our GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/onearmy/community-platform/blob/master/SECURITY.md"},"security policy")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[347],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8412:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],c={id:"firestore-backup",title:"Firestore DB Backup"},s=void 0,p={unversionedId:"Backend Development/firestore-backup",id:"Backend Development/firestore-backup",title:"Firestore DB Backup",description:"Automated Backups",source:"@site/docs/Backend Development/firestore-backup.md",sourceDirName:"Backend Development",slug:"/Backend Development/firestore-backup",permalink:"/community-platform/Backend Development/firestore-backup",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Backend Development/firestore-backup.md",tags:[],version:"current",frontMatter:{id:"firestore-backup",title:"Firestore DB Backup"},sidebar:"mainSidebar",previous:{title:"Firestore Emulators",permalink:"/community-platform/Backend Development/firebase-emulators-docker"},next:{title:"Integrations",permalink:"/community-platform/Backend Development/integrations"}},u={},l=[{value:"Automated Backups",id:"automated-backups",level:2},{value:"Configuring Permissions",id:"configuring-permissions",level:3},{value:"Manual Backup",id:"manual-backup",level:2},{value:"Restoring Backups",id:"restoring-backups",level:2}],m={toc:l};function d(e){var t=e.components,c=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"automated-backups"},"Automated Backups"),(0,o.kt)("p",null,"The platform includes a firebase function to automatically create a database backup on a schedule.\nCurrently a backup is created as part of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/blob/49fa7433cf4a9e348a4436d55fd3313daa70edda/functions/src/scheduled/tasks.ts"},"weeklyTasks")," schedule, triggered every Sunday at 2am"),(0,o.kt)("p",null,"The backup only takes an export of database tables currently in use. For backups of the entire database see ",(0,o.kt)("a",{parentName:"p",href:"#manual-backup"},"Manual Backup")," below"),(0,o.kt)("p",null,"The export will automatically be populated into the default storage bucket, in an ",(0,o.kt)("em",{parentName:"p"},"backups")," folder"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(966).Z,width:"791",height:"482"})),(0,o.kt)("h3",{id:"configuring-permissions"},"Configuring Permissions"),(0,o.kt)("p",null,"In order to allow automated backups, additional permissions likely be required on the service account that firebase uses. By default this should be the account named"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_ID@appspot.gserviceaccount.com")),(0,o.kt)("p",null,"Permissions can be configured on the ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/iam-admin/iam"},"Google Cloud IAM")," page. As a minimum, ",(0,o.kt)("strong",{parentName:"p"},"Cloud Datastore")," access will be required"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6251).Z,width:"336",height:"279"})),(0,o.kt)("p",null,"See more info at:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/firestore/docs/manage-data/export-import"},"https://cloud.google.com/firestore/docs/manage-data/export-import")),(0,o.kt)("h2",{id:"manual-backup"},"Manual Backup"),(0,o.kt)("p",null,"Full or custom backups of the database can be created from the ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/firestore/import-export"},"Firestore Import Export")," page on Google Cloud console"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5513).Z,width:"1123",height:"842"})),(0,o.kt)("h2",{id:"restoring-backups"},"Restoring Backups"),(0,o.kt)("p",null,"Backups can also be restored from the Firestore Import Export page"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any existing data may be replaced and lost during restore operations"))),(0,o.kt)("p",null,"Alternatively the backup could be loaded into the emulator and data queried from there as required.",(0,o.kt)("br",{parentName:"p"}),"\n","See the ",(0,o.kt)("a",{parentName:"p",href:"/community-platform/Backend%20Development/firebase-emulators-docker"},"Firebase Emulators")," for more information"))}d.isMDXComponent=!0},5513:function(e,t,a){t.Z=a.p+"assets/images/firestore-backup-console-4e3f46b40731ed9b60b82addbaa21061.png"},966:function(e,t,a){t.Z=a.p+"assets/images/firestore-backup-folder-5346018e0f40e7a76ea030f6d4ca6904.png"},6251:function(e,t,a){t.Z=a.p+"assets/images/firestore-backup-permissions-411088a5bdef07da6a48a81e9f43c963.png"}}]);
"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[692],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},A=Object.keys(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,A=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||A;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var A=n.length,o=new Array(A);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<A;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),A=(n(7294),n(3905)),o=["components"],i={id:"firebase-emulators-docker",title:"Firestore Emulators"},l=void 0,s={unversionedId:"Backend Development/firebase-emulators-docker",id:"Backend Development/firebase-emulators-docker",title:"Firestore Emulators",description:"In order to test backend functions locally, firebase provides a suite of emulators to mimic most functionality seen online (e.g firestore, storage, functions, triggers etc.)",source:"@site/docs/Backend Development/firebase-emulators-docker.md",sourceDirName:"Backend Development",slug:"/Backend Development/firebase-emulators-docker",permalink:"/community-platform/Backend Development/firebase-emulators-docker",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Backend Development/firebase-emulators-docker.md",tags:[],version:"current",frontMatter:{id:"firebase-emulators-docker",title:"Firestore Emulators"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/community-platform/Backend Development/BackendOverview"},next:{title:"Firestore DB Backup",permalink:"/community-platform/Backend Development/firestore-backup"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Emulator Dashboard",id:"emulator-dashboard",level:2},{value:"Resetting seed data",id:"resetting-seed-data",level:2},{value:"Frontend",id:"frontend",level:2},{value:"User Login",id:"user-login",level:3},{value:"Function Development",id:"function-development",level:2},{value:"Writing functions code",id:"writing-functions-code",level:3},{value:"Invoking functions",id:"invoking-functions",level:3},{value:"Accessing Logs",id:"accessing-logs",level:3},{value:"Extending the image",id:"extending-the-image",level:2},{value:"Updating seed data",id:"updating-seed-data",level:3},{value:"Custom Image",id:"custom-image",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Known Issues",id:"known-issues",level:3}],c={toc:p};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,A.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"In order to test backend functions locally, firebase provides a suite of emulators to mimic most functionality seen online (e.g firestore, storage, functions, triggers etc.)"),(0,A.kt)("p",null,"The emulators can be a bit tricky to setup and populate with seed data, and so instead an image has been created in docker that contains all the code to run the emulators and functions code"),(0,A.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,A.kt)("p",null,"You will need to be able to run ",(0,A.kt)("inlineCode",{parentName:"p"},"docker")," commands locally, the easiest way is to install ",(0,A.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/"},"Docker Desktop")),(0,A.kt)("p",null,"You can ensure it is running with the command ",(0,A.kt)("inlineCode",{parentName:"p"},"docker -v")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-sh"},"docker -v\n# Docker version 20.10.14, build a224086\n")),(0,A.kt)("h2",{id:"getting-started"},"Getting Started"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"yarn start:emulated:docker\n")),(0,A.kt)("p",null,"This will start the following:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},(0,A.kt)("strong",{parentName:"p"},"Docker emulator"),(0,A.kt)("br",{parentName:"p"}),"\n","May take a few minutes to download the required image")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},(0,A.kt)("strong",{parentName:"p"},"Functions src watcher"),(0,A.kt)("br",{parentName:"p"}),"\n","To recompile functions on update")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},(0,A.kt)("strong",{parentName:"p"},"Platform server"),(0,A.kt)("br",{parentName:"p"}),"\n","On port 4000 to indicate that it should communicate with emulators instead of live site)"))),(0,A.kt)("h2",{id:"emulator-dashboard"},"Emulator Dashboard"),(0,A.kt)("p",null,"The emulator should start at http://localhost:4001. Follow the link to see an overview of the available services"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Dashboard",src:n(6823).Z,width:"850",height:"712"})),(0,A.kt)("p",null,"Clicking on individual tabs will take you to a page similar to the firebase console, from where you can interact with services."),(0,A.kt)("p",null,"Note - any data populated into the emulator will be deleted after the emulator has closed (restoring to original state). See the section below about persistent and seed data"),(0,A.kt)("h2",{id:"resetting-seed-data"},"Resetting seed data"),(0,A.kt)("p",null,"When the emulator is stopped the image is destroyed, so each time the emulators are restarted a clean set of data will be available."),(0,A.kt)("p",null,"If using the frontend data changes may still persist due to the browser's own caching mechanisms. In this case the browser indexeddb cache will need to be manually cleared"),(0,A.kt)("h2",{id:"frontend"},"Frontend"),(0,A.kt)("p",null,"The frontend should start on http://localhost:4000\nYou should see a small banner at the bottom of the page that informs emulators are in use."),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(56).Z,width:"1049",height:"793"})),(0,A.kt)("p",null,"The data that appears will have been exported at the time the image was made, and so may be slightly outdated when compared to the live site. You can see the time the data was last exported."),(0,A.kt)("p",null,"You can see the version of data used in the command line output, e.g. data exported from precious plastic"),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(379).Z,width:"340",height:"141"})),(0,A.kt)("h3",{id:"user-login"},"User Login"),(0,A.kt)("p",null,"By default the image comes preloaded with user auth accounts as found in ",(0,A.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/tree/master/shared/mocks/authUsers.ts"},"shared\\mocks\\authUsers.ts"),". This means you can login as any of these users, e.g."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"email: 'demo_admin@example.com',\npassword: 'demo_admin',\n")),(0,A.kt)("h2",{id:"function-development"},"Function Development"),(0,A.kt)("h3",{id:"writing-functions-code"},"Writing functions code"),(0,A.kt)("p",null,"The emulators bind to the ",(0,A.kt)("inlineCode",{parentName:"p"},"functions/dist")," folder so that changes made will be reflected in the emulators. On linux these changes should be picked up immediately, and so live-reload can be added for functions development via ",(0,A.kt)("inlineCode",{parentName:"p"},"yarn workspace functions watch")),(0,A.kt)("p",null,"If running on windows the changes are not always detected, and may require spinning the emulators down and then starting back up"),(0,A.kt)("h3",{id:"invoking-functions"},"Invoking functions"),(0,A.kt)("p",null,"Functions can be invoked in different ways depending on their trigger type."),(0,A.kt)("p",null,"For functions triggered by storage or database changes, making changes directly on the dashboard or from the frontend should trigger the corresponding function.\nSimilarly callable functions should be called triggered from frontend code."),(0,A.kt)("p",null,"For functions triggered by http request you can call directly either from command line, a web browser or REST client such as ",(0,A.kt)("a",{parentName:"p",href:"https://insomnia.rest/"},"Insomnia")),(0,A.kt)("p",null,"E.g. calling the emulator ",(0,A.kt)("inlineCode",{parentName:"p"},"seed-users-create")," function via a GET request:"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"http://localhost:4002/community-platform-emulated/us-central1/emulator/seed-users-create\n")),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(5485).Z,width:"484",height:"91"})),(0,A.kt)("h3",{id:"accessing-logs"},"Accessing Logs"),(0,A.kt)("p",null,"If the emulator throws an error you may want to check generated debug.log files. These will exist in the container in the root ",(0,A.kt)("inlineCode",{parentName:"p"},"/app")," folder."),(0,A.kt)("p",null,"You can access the file system within the docker container directly using the\n",(0,A.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers"},"Remote-Containers")," extension for vscode, and running the command to ",(0,A.kt)("inlineCode",{parentName:"p"},"attach to running container")),(0,A.kt)("p",null,(0,A.kt)("img",{src:n(3565).Z,width:"753",height:"166"})),(0,A.kt)("p",null,"Once running in the container you can open the ",(0,A.kt)("inlineCode",{parentName:"p"},"/app")," folder to view files\n",(0,A.kt)("img",{src:n(2676).Z,width:"1154",height:"593"})),(0,A.kt)("p",null,"Alternatively you can request docker to execute commands directly on the container, e.g."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"docker exec -it community-platform-emulator ls\ndocker exec -it community-platform-emulator cat /app/firestore-debug.log\n")),(0,A.kt)("h2",{id:"extending-the-image"},"Extending the image"),(0,A.kt)("p",null,"The code used to build the docker image can all be found in the ",(0,A.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/tree/master/packages/emulators-docker"},"packages/emulators-docker")," workspace."),(0,A.kt)("h3",{id:"updating-seed-data"},"Updating seed data"),(0,A.kt)("p",null,"Admins can export data online via google cloud console. Once exported it should be formatted in a namespaced way (e.g. ",(0,A.kt)("inlineCode",{parentName:"p"},"pp-yyyy-mm-dd")," for data exported from precious-plastic) and placed in the seed_data folder for the emulators-docker workspace."),(0,A.kt)("p",null,"Additionally any references to the previous data should be replaced with the updated (e.g. github action, gitignore and default config defined in workspace common.ts file)"),(0,A.kt)("h3",{id:"custom-image"},"Custom Image"),(0,A.kt)("p",null,"A custom image can be built and run by passing custom repo or tag args to the build script, e.g."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"yarn workspace oa-emulators-docker build --repo=my_custom_repo --tag=my_custom_tag\n")),(0,A.kt)("p",null,"If just intending to test locally a blank ",(0,A.kt)("inlineCode",{parentName:"p"},"--repo=")," can be provided to avoid trying to pull an image from dockerhub"),(0,A.kt)("p",null,"That specific image can then either be uploaded to dockerhub (assuming the repo name provided matches a personal repo configured locally) and/or run directly with the start command"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre"},"yarn workspace oa-emulators-docker start --repo=my_custom_repo --tag=my_custom_tag\n")),(0,A.kt)("p",null,"Note - this will only start the emulators, to run the frontend you will also need to run the rest of the scripts found in the src package.json ",(0,A.kt)("inlineCode",{parentName:"p"},"start:emulated:docker")," script separately as required"),(0,A.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,A.kt)("h3",{id:"known-issues"},"Known Issues"),(0,A.kt)("p",null,"See list of known issues in the workspace ",(0,A.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/tree/master/packages/emulators-docker"},"README")))}d.isMDXComponent=!0},2676:function(e,t,n){t.Z=n.p+"assets/images/emulator-docker-remote-files-5d18118a974c9353f0cf82e02340862c.png"},56:function(e,t,n){t.Z=n.p+"assets/images/emulators-docker-frontend-713eacde3fbe11bdad1eb78ac322a173.png"},5485:function(e,t){t.Z="data:image/png;base64,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"},3565:function(e,t){t.Z="data:image/png;base64,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"},6823:function(e,t,n){t.Z=n.p+"assets/images/firebase-emulators-dashboard-44f579db6b1b1e3a1f0ea524d6c2ef1e.png"},379:function(e,t){t.Z="data:image/png;base64,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"}}]);
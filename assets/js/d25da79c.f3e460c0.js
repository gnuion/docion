"use strict";(self.webpackChunkdocion=self.webpackChunkdocion||[]).push([[9028],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(u,".").concat(g)]||d[g]||s[g]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={slug:"angular-in-docker",title:"Angular in Docker",authors:["gnuion"],tags:["angular"]},i=void 0,l={permalink:"/docion/blog/angular-in-docker",editUrl:"https://github.com/gnuion/docion/tree/gh-edits/blog/2022-10-25-angular-in-docker/index.mdx",source:"@site/blog/2022-10-25-angular-in-docker/index.mdx",title:"Angular in Docker",description:"Angular not always supports the latest node.js version. Docker can help keep our system clean.",date:"2022-10-25T00:00:00.000Z",formattedDate:"October 25, 2022",tags:[{label:"angular",permalink:"/docion/blog/tags/angular"}],readingTime:.795,hasTruncateMarker:!1,authors:[{name:"Jon Zuka",title:"Blog owner",url:"https://github.com/gnuion",imageURL:"https://github.com/gnuion.png",key:"gnuion"}],frontMatter:{slug:"angular-in-docker",title:"Angular in Docker",authors:["gnuion"],tags:["angular"]},prevItem:{title:"Minikube",permalink:"/docion/blog/minikube"},nextItem:{title:"Make RAID0 array using MDADM",permalink:"/docion/blog/raid0-with-mdadm"}},u={authorsImageUrls:[void 0]},p=[{value:"Create node user",id:"create-node-user",level:2},{value:"Build Angular image:",id:"build-angular-image",level:2},{value:"Using the Angular CLI within Docker",id:"using-the-angular-cli-within-docker",level:2}],c={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Angular not always supports the latest node.js version. Docker can help keep our system clean."),(0,a.kt)("h2",{id:"create-node-user"},"Create node user"),(0,a.kt)("p",null,"For best practice, create node user and append node group to current user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo useradd node\nsudo usermod --append --groups node $USER\n")),(0,a.kt)("h2",{id:"build-angular-image"},"Build Angular image:"),(0,a.kt)("p",null,"Use the node version Angular supports. At the time of this writing it is version 14."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM node:14-alpine\nRUN npm install -g @angular/cli\nUSER node\nWORKDIR /app\nEXPOSE 4200 49153\nCMD npm start\n")),(0,a.kt)("p",null,"Build the image. In this example it is tagged ",(0,a.kt)("inlineCode",{parentName:"p"},"ng"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build --tag ng .\n")),(0,a.kt)("h2",{id:"using-the-angular-cli-within-docker"},"Using the Angular CLI within Docker"),(0,a.kt)("p",null,"Run the development container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it -v $(pwd):/app -p 4200:4200 -p 49153:49153 --name ng ng sh\n")),(0,a.kt)("p",null,"Create a new project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ng new --skip-git\n")),(0,a.kt)("p",null,"Adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," script in package.json to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' start": "ng serve --host 0.0.0.0 --poll"\n')),(0,a.kt)("p",null,"Otherwise the port would not be accessible from outside the container."))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocion=self.webpackChunkdocion||[]).push([[3945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={slug:"minikube",title:"Minikube",authors:["gnuion"],tags:["angular"]},o=void 0,u={permalink:"/docion/blog/minikube",editUrl:"https://github.com/gnuion/docion/tree/gh-edits/blog/2022-10-28-minikube/index.mdx",source:"@site/blog/2022-10-28-minikube/index.mdx",title:"Minikube",description:"Kubernetes is a enterprise application and is designed to run across multiple machines. Each machine is called a node.",date:"2022-10-28T00:00:00.000Z",formattedDate:"October 28, 2022",tags:[{label:"angular",permalink:"/docion/blog/tags/angular"}],readingTime:.785,hasTruncateMarker:!1,authors:[{name:"Jon Zuka",title:"Blog owner",url:"https://github.com/gnuion",imageURL:"https://github.com/gnuion.png",key:"gnuion"}],frontMatter:{slug:"minikube",title:"Minikube",authors:["gnuion"],tags:["angular"]},prevItem:{title:"Kubernetes",permalink:"/docion/blog/kubernetes"},nextItem:{title:"Angular in Docker",permalink:"/docion/blog/angular-in-docker"}},l={authorsImageUrls:[void 0]},c=[{value:"Setting up a learning environment",id:"setting-up-a-learning-environment",level:2},{value:"Interact with your cluster",id:"interact-with-your-cluster",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kubernetes is a enterprise application and is designed to run across multiple machines. Each machine is called a node. "),(0,i.kt)("h2",{id:"setting-up-a-learning-environment"},"Setting up a learning environment"),(0,i.kt)("p",null,"When learning, we might have only one machine available. In that case we can create a single node setup using ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),". Here we assume we already know basics of docker. Continue buy installing minikube following the documentation for your specific OS. In ArchLinux type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo pacman -Sy minikube\n")),(0,i.kt)("p",null,"To start a single node cluster run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"minikube start\n")),(0,i.kt)("p",null,"Select docker as the execution engine. VMs are also an option, but consume more resources. You can check the newly created cluster using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"minikube status\n")),(0,i.kt)("p",null,"To stop the cluster run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"minikube stop\n")),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"documentation")," for more minikube commands."),(0,i.kt)("h2",{id:"interact-with-your-cluster"},"Interact with your cluster"),(0,i.kt)("p",null,"If you already have kubectl installed, you can now use it to access your shiny new cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get po -A\n")))}p.isMDXComponent=!0}}]);
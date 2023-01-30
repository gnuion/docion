"use strict";(self.webpackChunkdocion=self.webpackChunkdocion||[]).push([[8623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"linux-tricks",title:"Linux Tricks",authors:["gnuion"],tags:["linux","devops"]},i=void 0,l={permalink:"/docion/blog/linux-tricks",editUrl:"https://github.com/gnuion/docion/tree/gh-edits/blog/2022-11-28-linux-tricks/index.mdx",source:"@site/blog/2022-11-28-linux-tricks/index.mdx",title:"Linux Tricks",description:"Here we document some handy linux tips and tricks.",date:"2022-11-28T00:00:00.000Z",formattedDate:"November 28, 2022",tags:[{label:"linux",permalink:"/docion/blog/tags/linux"},{label:"devops",permalink:"/docion/blog/tags/devops"}],readingTime:.305,hasTruncateMarker:!0,authors:[{name:"Jon Zuka",title:"Blog owner",url:"https://github.com/gnuion",imageURL:"https://github.com/gnuion.png",key:"gnuion"}],frontMatter:{slug:"linux-tricks",title:"Linux Tricks",authors:["gnuion"],tags:["linux","devops"]},prevItem:{title:"Kubernetes",permalink:"/docion/blog/kubernetes"},nextItem:{title:"Install custom image on Contabo",permalink:"/docion/blog/install-custom-image-on-contabo"}},s={authorsImageUrls:[void 0]},c=[{value:"Command aliases",id:"command-aliases",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here we document some handy linux tips and tricks."),(0,a.kt)("h3",{id:"command-aliases"},"Command aliases"),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},".bash_aliases")," in your home directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch ~/.bash_aliases\n")),(0,a.kt)("p",null,"Write the following inside ",(0,a.kt)("inlineCode",{parentName:"p"},".bash_aliases"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.bash_aliases\nalias l='ls -lah'\n")),(0,a.kt)("p",null,"Now source ",(0,a.kt)("inlineCode",{parentName:"p"},".bash_aliases")," from inside ",(0,a.kt)("inlineCode",{parentName:"p"},".bashrc"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# ~/.bashrc\n...\nsource ~/.bash_aliases\n")),(0,a.kt)("p",null,"Restart terminal. Now you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"l")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -lah"),"."))}p.isMDXComponent=!0}}]);
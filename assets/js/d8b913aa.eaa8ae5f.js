"use strict";(self.webpackChunkdocion=self.webpackChunkdocion||[]).push([[9763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={slug:"scaffolding-react-app",title:"Scaffolding React App",authors:["gnuion"],tags:["web"]},i=void 0,p={permalink:"/docion/blog/scaffolding-react-app",editUrl:"https://github.com/gnuion/docion/tree/gh-edits/blog/2022-10-10-react-app-scaffold/index.mdx",source:"@site/blog/2022-10-10-react-app-scaffold/index.mdx",title:"Scaffolding React App",description:"React is a library it doesn't care about project structure. You have to manage it instead.",date:"2022-10-10T00:00:00.000Z",formattedDate:"October 10, 2022",tags:[{label:"web",permalink:"/docion/blog/tags/web"}],readingTime:.385,hasTruncateMarker:!0,authors:[{name:"Jon Zuka",title:"Blog owner",url:"https://github.com/gnuion",imageURL:"https://github.com/gnuion.png",key:"gnuion"}],frontMatter:{slug:"scaffolding-react-app",title:"Scaffolding React App",authors:["gnuion"],tags:["web"]},prevItem:{title:"Virtualization with QEMU",permalink:"/docion/blog/virtualization-with-qemu"},nextItem:{title:"Make RAID0 array using MDADM",permalink:"/docion/blog/raid0-with-mdadm"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React is a library it doesn't care about project structure. You have to manage it instead."),(0,a.kt)("p",null,"Scaffolding using ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/"},"vite"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create vite\n")),(0,a.kt)("p",null,"Then follow the prompts!"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check out Awesome Vite for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vitejs/awesome-vite#templates"},"community maintained templates")," that include other tools or target different frameworks. You can use a tool like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rich-Harris/degit"},"degit")," to scaffold your project with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wtchnm/Vitamin"},"Vitamin")," template."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"npx degit wtchnm/Vitamin#main my-app\ncd my-project\n\npnpm install\npnpm run dev\n"))))}s.isMDXComponent=!0}}]);
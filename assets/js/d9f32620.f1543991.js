"use strict";(self.webpackChunkdocion=self.webpackChunkdocion||[]).push([[1914],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(o),d=r,m=g["".concat(i,".").concat(d)]||g[d]||p[d]||a;return o?n.createElement(m,l(l({ref:t},c),{},{components:o})):n.createElement(m,l({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=g;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2900:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},l=void 0,u={permalink:"/docion/blog/welcome",editUrl:"https://github.com/gnuion/docion/tree/gh-edits/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/docion/blog/tags/facebook"},{label:"hello",permalink:"/docion/blog/tags/hello"},{label:"docusaurus",permalink:"/docion/blog/tags/docusaurus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},prevItem:{title:"React App Scaffold",permalink:"/docion/blog/react-app-scaffold"},nextItem:{title:"MDX Blog Post",permalink:"/docion/blog/mdx-blog-post"}},i={authorsImageUrls:[void 0,void 0]},s=[],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,r.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,r.kt)("p",null,"Regular blog authors can be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,r.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,r.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus Plushie",src:o(8586).Z,width:"1500",height:"500"})),(0,r.kt)("p",null,"The blog supports tags as well!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}p.isMDXComponent=!0},8586:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);
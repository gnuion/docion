"use strict";(self.webpackChunkdocion=self.webpackChunkdocion||[]).push([[144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"redux-toolkit-template",title:"Redux Toolkit Template",authors:["gnuion"],tags:["react","redux toolkit","frontend"]},i=void 0,l={permalink:"/docion/blog/redux-toolkit-template",editUrl:"https://github.com/gnuion/docion/tree/gh-edits/blog/2022-11-15-redux-toolkit-template/index.mdx",source:"@site/blog/2022-11-15-redux-toolkit-template/index.mdx",title:"Redux Toolkit Template",description:"Redux toolkit (RTK) offers a great solution for state management and caching data. Let's get started!",date:"2022-11-15T00:00:00.000Z",formattedDate:"November 15, 2022",tags:[{label:"react",permalink:"/docion/blog/tags/react"},{label:"redux toolkit",permalink:"/docion/blog/tags/redux-toolkit"},{label:"frontend",permalink:"/docion/blog/tags/frontend"}],readingTime:2.655,hasTruncateMarker:!0,authors:[{name:"Jon Zuka",title:"Blog owner",url:"https://github.com/gnuion",imageURL:"https://github.com/gnuion.png",key:"gnuion"}],frontMatter:{slug:"redux-toolkit-template",title:"Redux Toolkit Template",authors:["gnuion"],tags:["react","redux toolkit","frontend"]},nextItem:{title:"Vite Import Alias",permalink:"/docion/blog/vite-import-alias"}},p={authorsImageUrls:[void 0]},c=[{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Create redux slice",id:"create-redux-slice",level:2},{value:"Configure redux store",id:"configure-redux-store",level:2},{value:"Using the store",id:"using-the-store",level:2},{value:"Using RTK Query",id:"using-rtk-query",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Redux toolkit (RTK) offers a great solution for state management and caching data. Let's get started!"),(0,o.kt)("h2",{id:"create-a-new-project"},"Create a new project"),(0,o.kt)("p",null,"Follow the prompts. Use react and typescript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create vite\n")),(0,o.kt)("p",null,"Install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn i @reduxjs/toolkit react-redux axios\n")),(0,o.kt)("h2",{id:"create-redux-slice"},"Create redux slice"),(0,o.kt)("p",null,"Create a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ./src/features/counter\n")),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," folder, create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"counterSlice.ts"),". It should have the following content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// counterSlice.ts\n\nimport { createSlice, PayloadAction } from '@reduxjs/toolkit'\n\ninterface CounterState {\n  value: number\n}\n\nconst initialState: CounterState = {\n  value: 0\n}\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState,\n  reducers: {\n    incremented(state) {\n      state.value++;\n    },\n      amountAdded(state, action: PayloadAction<number>) {\n      state.value += action.payload\n    }\n  }\n});\n\n\nexport const { incremented, amountAdded } = counterSlice.actions\nexport default counterSlice.reducer\n")),(0,o.kt)("h2",{id:"configure-redux-store"},"Configure redux store"),(0,o.kt)("p",null,"Make a new folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"app")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ./src/app\n")),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," folder, create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"store.ts"),". It should have the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { configureStore } from \"@reduxjs/toolkit\";\nimport counterReducer from '../features/counter/counterSlice'\n\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer\n  }\n})\n\nexport type AppDispatch = typeof store.dispatch;\nexport type RootState = ReturnType<typeof store.getState>;\n")),(0,o.kt)("p",null,"Setup the redux react provider so the application can access the store. Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts")," file, make adjustments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provider } from 'react-redux'\nimport { store } from './app/store'\n...\n  <Provider store={store}>\n    <App />\n  </Provider>\n...\n")),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/app")," folder, let's make a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks.ts"),". It should have the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'\nimport { RootState, AppDispatch } from './store'\n\nexport const useAppDispatch = () => useDispatch<AppDispatch>()\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n")),(0,o.kt)("h2",{id:"using-the-store"},"Using the store"),(0,o.kt)("p",null,"Inside ",(0,o.kt)("inlineCode",{parentName:"p"},"App.ts"),", import those hooks and the ",(0,o.kt)("inlineCode",{parentName:"p"},"incremented")," action creator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useAppDispatch, useAppSelector } from './app/hooks'\nimport { incremented } from './features/counter/counterSlice'\n")),(0,o.kt)("p",null,"Now read the count value using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const count = useAppSelector((state) => state.counter.value)\n")),(0,o.kt)("p",null,"Dispatch action using: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const dispatch = useAppDispatch()\n...\n  // onClick={() => dispatch(incremented())}\n  onClick={() => dispatch(amountAdded(5))}\n...\n")),(0,o.kt)("h2",{id:"using-rtk-query"},"Using RTK Query"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"./src/feature/dogs/")," folder, create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"dogsApiSlice.ts"),". It should have the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nconst DOGS_API_KEY = 'your_dog_api_key_here'\n\ninterface Breed {\n  id: string;\n  name: string;\n  image: {\n    url: string;\n  }\n}\n\nexport const dogsApiSlice = createApi({\n  reducerPath: 'api',\n  baseQuery: fetchBaseQuery({\n    baseUrl: 'https://api.thedogapi.com/v1',\n    prepareHeaders(headers) {\n      headers.set('x-api-key', DOGS_API_KEY);\n      return headers\n    }\n  }),\n  endpoints(builder) {\n    return {\n      fetchBreeds: builder.query<Breed[], number | void>({\n        query(limit = 10) {\n          return `/breeds?limit=${limit}`\n        }\n      })\n    }\n  }\n})\n\nexport const { useFetchBreedsQuery } = dogsApiSlice\n")),(0,o.kt)("p",null,"Let's go back to our ",(0,o.kt)("inlineCode",{parentName:"p"},"store.ts")," file. After importing, adding the reducer and the middleware, it should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { configureStore } from "@reduxjs/toolkit";\nimport counterReducer from \'../features/counter/counterSlice\'\nimport { dogsApiSlice } from "../features/dogs/dogsApiSlice";\n\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer,\n    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer\n  },\n  middleware: (getDefaultMiddleware) => {\n    return getDefaultMiddleware().concat(dogsApiSlice.middleware)\n  }\n})\n\nexport type AppDispatch = typeof store.dispatch;\nexport type RootState = ReturnType<typeof store.getState>;\n')),(0,o.kt)("p",null,"Now, to fetch, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"App.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice'\n\nfunction App() {\n  const { data = [], isFetching } = useFetchBreedsQuery();\n  ...\n}\n")))}u.isMDXComponent=!0}}]);
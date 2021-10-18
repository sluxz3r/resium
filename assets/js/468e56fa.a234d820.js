"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[3693],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6521:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"SkyAtmosphere"},p="SkyAtmosphere",s={unversionedId:"components/SkyAtmosphere",id:"components/SkyAtmosphere",isDocsHomePage:!1,title:"SkyAtmosphere",description:"SkyAtmosphere can operate the SkyAtmosphere in the scene.",source:"@site/docs/components/SkyAtmosphere.mdx",sourceDirName:"components",slug:"/components/SkyAtmosphere",permalink:"/components/SkyAtmosphere",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/SkyAtmosphere.mdx",tags:[],version:"current",frontMatter:{title:"SkyAtmosphere"},sidebar:"docs",previous:{title:"ShadowMap",permalink:"/components/ShadowMap"},next:{title:"SkyBox",permalink:"/components/SkyBox"}},m=[{value:"Availability",id:"availability",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[],level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[],level:3},{value:"Cesium events",id:"cesium-events",children:[],level:3},{value:"Other properties",id:"other-properties",children:[],level:3}],level:2}],u={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"skyatmosphere"},"SkyAtmosphere"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SkyAtmosphere")," can operate the SkyAtmosphere in the scene.\nAll properties are applied to single SkyAtmosphere in the scene."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,o.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/SkyAtmosphere.html"},"SkyAtmosphere")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Example"),": ",(0,o.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/skyatmosphere--basic%22"},"SkyAtmosphere"))),(0,o.kt)("h2",{id:"availability"},"Availability"),(0,o.kt)("p",null,"SkyAtmosphere can be mounted inside",(0,o.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,o.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components.\nIt can not be mounted more than once for each Viewer or CesiumWidget."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"show"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"brightnessShift"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hueShift"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"saturationShift"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"perFragmentAtmosphere"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"other-properties"},"Other properties"),(0,o.kt)("p",null,"N/A"))}c.isMDXComponent=!0}}]);
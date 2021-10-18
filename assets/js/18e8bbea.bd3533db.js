"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[8609],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),y=a,d=s["".concat(p,".").concat(y)]||s[y]||u[y]||o;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5798:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"ImageryLayerCollection"},p="ImageryLayerCollection",c={unversionedId:"components/ImageryLayerCollection",id:"components/ImageryLayerCollection",isDocsHomePage:!1,title:"ImageryLayerCollection",description:"ImageryLayerCollection is a collection of imagery layers of the globe.",source:"@site/docs/components/ImageryLayerCollection.mdx",sourceDirName:"components",slug:"/components/ImageryLayerCollection",permalink:"/components/ImageryLayerCollection",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/ImageryLayerCollection.mdx",tags:[],version:"current",frontMatter:{title:"ImageryLayerCollection"},sidebar:"docs",previous:{title:"ImageryLayer",permalink:"/components/ImageryLayer"},next:{title:"KmlDataSource",permalink:"/components/KmlDataSource"}},m=[{value:"Availability",id:"availability",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[],level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[],level:3},{value:"Cesium events",id:"cesium-events",children:[],level:3},{value:"Other properties",id:"other-properties",children:[],level:3}],level:2}],u={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"imagerylayercollection"},"ImageryLayerCollection"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ImageryLayerCollection")," is a collection of imagery layers of the globe.\nIt can have some ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageryLayer")," components as children."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,o.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayerCollection.html"},"ImageryLayerCollection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Example"),": ",(0,o.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/imagerylayercollection--basic%22"},"ImageryLayerCollection"))),(0,o.kt)("h2",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Available inside ",(0,o.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,o.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components.\nThis component refers to the single ImageryLayerCollection of them, so can not be mounted more than once for each Viewer or CesiumWidget."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onLayerAdd"),(0,o.kt)("td",{parentName:"tr",align:null},"(layer: ImageryLayer, index: number) =",">"," void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onLayerMove"),(0,o.kt)("td",{parentName:"tr",align:null},"(layer: ImageryLayer, index: number) =",">"," void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onLayerRemove"),(0,o.kt)("td",{parentName:"tr",align:null},"(layer: ImageryLayer, index: number) =",">"," void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onLayerShowOrHide"),(0,o.kt)("td",{parentName:"tr",align:null},"(layer: ImageryLayer, index: number) =",">"," void"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"other-properties"},"Other properties"),(0,o.kt)("p",null,"N/A"))}s.isMDXComponent=!0}}]);
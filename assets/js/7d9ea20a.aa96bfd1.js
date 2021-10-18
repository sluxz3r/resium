"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[5665],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),d=l,y=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6090:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],a={title:"PolylineCollection"},p="PolylineCollection",c={unversionedId:"components/PolylineCollection",id:"components/PolylineCollection",isDocsHomePage:!1,title:"PolylineCollection",description:"PolylineCollection is a collection of polyline primitives.",source:"@site/docs/components/PolylineCollection.mdx",sourceDirName:"components",slug:"/components/PolylineCollection",permalink:"/components/PolylineCollection",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/PolylineCollection.mdx",tags:[],version:"current",frontMatter:{title:"PolylineCollection"},sidebar:"docs",previous:{title:"Polyline",permalink:"/components/Polyline"},next:{title:"PolylineGraphics",permalink:"/components/PolylineGraphics"}},u=[{value:"Availability",id:"availability",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[],level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[],level:3},{value:"Cesium events",id:"cesium-events",children:[],level:3},{value:"Other properties",id:"other-properties",children:[],level:3}],level:2}],m={toc:u};function s(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polylinecollection"},"PolylineCollection"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PolylineCollection")," is a collection of polyline primitives.\nIt can have some ",(0,i.kt)("inlineCode",{parentName:"p"},"Polyline")," components as children."),(0,i.kt)("p",null,"Primitive is a low layer API for geographical visualization.\n",(0,i.kt)("a",{parentName:"p",href:"/components/entity"},"Entity")," is more recommended unless performance issues."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,i.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html"},"PolylineCollection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Example"),": ",(0,i.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/polylinecollection--basic%22"},"PolylineCollection"))),(0,i.kt)("h2",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Inside ",(0,i.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,i.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," component.\nA PolylineCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"debugShowBoundingVolume"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"modelMatrix"),(0,i.kt)("td",{parentName:"tr",align:null},"Matrix4"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"length"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,i.kt)("p",null,"N/A"),(0,i.kt)("h3",{id:"other-properties"},"Other properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"children"),(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);
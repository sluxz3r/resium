"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[6200],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(c,i(i({ref:e},s),{},{components:n})):r.createElement(c,i({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1057:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"PostProcessStage"},p="PostProcessStage",m={unversionedId:"components/PostProcessStage",id:"components/PostProcessStage",isDocsHomePage:!1,title:"PostProcessStage",description:"PostProcessStage can add a post processing stage to the scene.",source:"@site/docs/components/PostProcessStage.mdx",sourceDirName:"components",slug:"/components/PostProcessStage",permalink:"/components/PostProcessStage",editUrl:"https://github.com/reearth/resium/edit/master/docs/docs/components/PostProcessStage.mdx",tags:[],version:"current",frontMatter:{title:"PostProcessStage"},sidebar:"docs",previous:{title:"PolylineVolumeGraphics",permalink:"/components/PolylineVolumeGraphics"},next:{title:"PostProcessStageComposite",permalink:"/components/PostProcessStageComposite"}},s=[{value:"Availability",id:"availability",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Cesium properties",id:"cesium-properties",children:[],level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",children:[],level:3},{value:"Cesium events",id:"cesium-events",children:[],level:3},{value:"Other properties",id:"other-properties",children:[],level:3}],level:2}],u={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postprocessstage"},"PostProcessStage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PostProcessStage")," can add a post processing stage to the scene."),(0,l.kt)("p",null,"Bult-in PostProcessStage components are available with additional Cesium properties:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlackAndWhiteStage"),(0,l.kt)("td",{parentName:"tr",align:null},"gradations"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"delta"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"sigma"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"stepSize"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BrightnessStage"),(0,l.kt)("td",{parentName:"tr",align:null},"brightness"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LensFlareStage"),(0,l.kt)("td",{parentName:"tr",align:null},"dirtTexture"),(0,l.kt)("td",{parentName:"tr",align:null},"any")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"starTexture"),(0,l.kt)("td",{parentName:"tr",align:null},"any")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"intensity"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"distortion"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ghostDispersal"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"haloWidth"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"earthRadius"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"dirtTexture"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"dirtTexture"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fxaa"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("p",null,"Note: ",(0,l.kt)("inlineCode",{parentName:"p"},"Fxaa")," component can not be used multi time, as it refers to the single post process stage of the scene."),(0,l.kt)("p",null,"They can be imported and used normally:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { LensFlareStage } from "resium";\n\n<Viewer>\n  <LensFlareStage intensity={5} />\n</Viewer>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,l.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStage.html"},"PostProcessStage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Example"),": ",(0,l.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/postprocessstage--basic%22"},"PostProcessStage"))),(0,l.kt)("h2",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Inside ",(0,l.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,l.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selected"),(0,l.kt)("td",{parentName:"tr",align:null},"any[]"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fragmentShader"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uniforms"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"textureScale"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forcePowerOfTwo"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sampleMode"),(0,l.kt)("td",{parentName:"tr",align:null},"PostProcessStageSampleMode"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pixelFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"PixelFormat"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pixelDatatype"),(0,l.kt)("td",{parentName:"tr",align:null},"PixelDatatype"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clearColor"),(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scissorRectangle"),(0,l.kt)("td",{parentName:"tr",align:null},"BoundingRectangle"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,l.kt)("p",null,"N/A"),(0,l.kt)("h3",{id:"other-properties"},"Other properties"),(0,l.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);
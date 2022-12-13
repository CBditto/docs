"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5750],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},99587:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],l={title:"Webhooks",sidebar_position:1},c=void 0,p={unversionedId:"guides/livequery-webhook",id:"guides/livequery-webhook",isDocsHomePage:!1,title:"Webhooks",description:"A Live Query Webhook allows you to respond to changes to data in real-time. It",source:"@site/docs/common/guides/livequery-webhook.mdx",sourceDirName:"guides",slug:"/guides/livequery-webhook",permalink:"/common/guides/livequery-webhook",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/guides/livequery-webhook.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Webhooks",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Schemas",permalink:"/common/datamodel/schemas"},next:{title:"1 - Enabling Kafka",permalink:"/common/guides/kafka/intro"}},u=[{value:"Creating a LiveQuery Webhook",id:"creating-a-livequery-webhook",children:[],level:2},{value:"Configure the webhook",id:"configure-the-webhook",children:[],level:2},{value:"New document created",id:"new-document-created",children:[],level:2},{value:"Update",id:"update",children:[],level:2},{value:"Remove",id:"remove",children:[],level:2}],d={toc:u};function s(e){var n=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Live Query Webhook allows you to respond to changes to data in real-time. It\nis one way to implement CDC (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Change_data_capture"},"Change Data\nCapture"),") and is free for all\nDitto apps. For a more robust method, contact us to upgrade your organization for access to\n",(0,r.kt)("a",{parentName:"p",href:"../guides/kafka/intro"},"Kafka"),"."),(0,r.kt)("h2",{id:"creating-a-livequery-webhook"},"Creating a LiveQuery Webhook"),(0,r.kt)("p",null,"First, you'll need a publicly accessible HTTPS route deployed on a domain of\nyour choice. For testing, you can use a service like\n",(0,r.kt)("a",{parentName:"p",href:"http://glitch.com"},"Glitch"),". Your webhook will receive an HTTP POST request from the Ditto Big Peer."),(0,r.kt)("h2",{id:"configure-the-webhook"},"Configure the webhook"),(0,r.kt)("p",null,"Login to the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.ditto.live/"},"Ditto Portal")," and choose your app. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"My App > Live Query Settings > Live Query Webhooks")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of configured live query webhook",src:t(95675).Z})),(0,r.kt)("p",null,"Type the name of the collection as well as the ",(0,r.kt)("a",{parentName:"p",href:"../concepts/querying"},"query")," you\nwant to monitor. If you want to be notified of all changes to documents, ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," is a valid query which will match all documents\nin the given collection. "),(0,r.kt)("h2",{id:"new-document-created"},"New document created"),(0,r.kt)("p",null,"When a new document is created, ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert")," and the property ",(0,r.kt)("inlineCode",{parentName:"p"},"change.oldValue")," will always be null."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please take note of the ",(0,r.kt)("inlineCode",{parentName:"p"},"txnID")," field which describes a timestamp of when the big peer internally replicated data modifications from small peers. This number is an always increasing value."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txnId": 552789,\n  "type": "documentChanged",\n  "collection": "people",\n  "change": {\n    "method": "upsert",\n    "oldValue": null,\n    "newValue": {\n      "_id": "6213e9c90012e4af0017cb9f",\n      "date": 1645472201,\n      "name": "Susan",\n      "age": 31\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"When a document was updated, ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"upsert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"change.oldValue")," will contain the old version of the document and ",(0,r.kt)("inlineCode",{parentName:"p"},"change.newValue")," contains the full document after the upsert was complete. ",(0,r.kt)("inlineCode",{parentName:"p"},"newValue"),' also includes all properties that did not change as a result of this operation. For example, even though we do not change "age" in the following example, we still see ',(0,r.kt)("inlineCode",{parentName:"p"},"age"),". "),(0,r.kt)("p",null,"After updating the document ",(0,r.kt)("inlineCode",{parentName:"p"},"6213e9c90012e4af0017cb9f")," with the properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  ownedCars: 0, \n  friends: [], \n  name: "Frank"\n}\n')),(0,r.kt)("p",null,"We will see the following JSON event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txnId": 553358,\n  "type": "documentChanged",\n  "collection": "people",\n  "change": {\n    "method": "upsert",\n    "oldValue": {\n      "_id": "6213e9c90012e4af0017cb9f",\n      "date": 1645472312,\n      "name": "Susan",\n      "age": 31\n    },\n    "newValue": {\n      "_id": "6213e9c90012e4af0017cb9f",\n      "date": 1645472312,\n      "name": "Frank",\n      "age": 31,\n      "ownedCars": 0,\n      "friends": []\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"remove"},"Remove"),(0,r.kt)("p",null,"When a document was removed, ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"remove"),", and the property ",(0,r.kt)("inlineCode",{parentName:"p"},"change.value")," contains the full document at the time it was removed. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txnId": 701251,\n  "type": "documentChanged",\n  "collection": "people",\n  "change": {\n    "method": "remove",\n    "value": {\n      "_id": "6213e9c90012e4af0017cb9f",\n      "date": 1645468039,\n      "name": "Susan",\n      "age": 31 \n    }\n  }\n}\n')))}s.isMDXComponent=!0},95675:function(e,n,t){n.Z=t.p+"assets/images/livequery-fce806ebce87bb666902bff1e21728af.png"}}]);
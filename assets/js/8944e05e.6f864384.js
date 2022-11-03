"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6762],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return t?o.createElement(h,s(s({ref:n},u),{},{components:t})):o.createElement(h,s({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77610:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var o=t(87462),i=t(63366),a=(t(67294),t(3905)),s=["components"],r={title:"Avoiding Excessive Memory Consumption"},l=void 0,c={unversionedId:"quick-tips/avoiding-excessive-memory-consumption",id:"quick-tips/avoiding-excessive-memory-consumption",isDocsHomePage:!1,title:"Avoiding Excessive Memory Consumption",description:"Ditto's documents have value semantics by design. This means that whenever you",source:"@site/docs/ios/quick-tips/avoiding-excessive-memory-consumption.md",sourceDirName:"quick-tips",slug:"/quick-tips/avoiding-excessive-memory-consumption",permalink:"/ios/quick-tips/avoiding-excessive-memory-consumption",editUrl:"https://github.com/getditto/docs/tree/main/docs/ios/quick-tips/avoiding-excessive-memory-consumption.md",tags:[],version:"current",frontMatter:{title:"Avoiding Excessive Memory Consumption"},sidebar:"docs",previous:{title:"DittoSwiftTools",permalink:"/ios/quick-tips/DittoSwiftTools"},next:{title:"Preventing SwiftUI Previews from Syncing",permalink:"/ios/quick-tips/preventing-swiftui-previews-from-syncing"}},u=[{value:"Live Queries",id:"live-queries",children:[],level:2},{value:"Back Pressure",id:"back-pressure",children:[],level:2},{value:"Rule of Thumb",id:"rule-of-thumb",children:[],level:2},{value:"Implementation Details",id:"implementation-details",children:[],level:2}],m={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ditto's documents have value semantics by design. This means that whenever you\nget a ",(0,a.kt)("inlineCode",{parentName:"p"},"DittoDocument")," from the Ditto API, it's referencing an individual ",(0,a.kt)("em",{parentName:"p"},"copy"),"\nof the corresponding document data in-memory, plus quite a bit of book-keeping.\nTo keep the memory footprint low, it is therefore crucial to ",(0,a.kt)("em",{parentName:"p"},"release those\nblobs of data as early as possible"),", freeing the claimed memory space."),(0,a.kt)("p",null,"Special care needs to be taken whenever you spread the work across multiple\nqueues or async APIs. It is very easy to end up with a lot of work items on a\nqueue, each holding on to large amounts of data, such as big arrays of Ditto\ndocuments. This isn't always obvious, leads to mysterious excessive memory\nconsumption, eventually resulting in an out-of memory crash, especially on\nmobile devices."),(0,a.kt)("h2",{id:"live-queries"},"Live Queries"),(0,a.kt)("p",null,"Live queries are particularly prone to this problem. Consider the following\ntypical example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'// BAD:\nself.liveQuery = ditto.store.collection("A").find("store_id == \'abc123\'").observe { [weak self] documents, event in\n    self?.documentProcessingQueue.async {\n        print("[INFO] Processing \\(documents.count) changed documents...")\n        // Inspect the changed documents, update UI state, etc.\n    }\n}\n')),(0,a.kt)("p",null,"Depending on the amount of documents in the store and especially the rate at\nwhich those are updated, that observation callback might be called many times,\neach time with a fresh copy of the documents data (because value semantics) held\nin-memory. Each of those dispatches will hold on to these document copies until\nthe work item had a chance to run. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"documentProcessingQueue")," can't keep\nup processing those documents and releasing them fast enough, more and more\ndocuments are accumulated in memory waiting to be processed, resulting in\nexcessive memory use."),(0,a.kt)("h2",{id:"back-pressure"},"Back Pressure"),(0,a.kt)("p",null,"To deal with these situations, all of our APIs prone to this problem have more\nadvanced variants allowing you to control the rate at which those callbacks are\ncalled. This mechanism is commonly referred to as ",(0,a.kt)("em",{parentName:"p"},"Back Pressure")," (see for example\n",(0,a.kt)("a",{parentName:"p",href:"https://tanaschita.com/20211205-back-pressure-in-combine"},"here")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7"},"here"),").\nHere is a much safer and more efficient way to implement the example above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'// BETTER:\nself.liveQuery = ditto.store.collection("A").find("store_id == \'abc123\'").observeLocalWithNextSignal { [weak self] documents, event, signalNext in\n    self?.documentProcessingQueue.async {\n        print("[INFO] Processing \\(documents.count) changed documents...")\n        // Inspect the changed documents, update UI state, etc.\n        \n        // Tell Ditto we are done and ready to process the next batch:\n        signalNext()\n    }\n}\n')),(0,a.kt)("p",null,"Since this particular pattern is so common, Ditto offers a convenience variant.\nBut it requires ",(0,a.kt)("em",{parentName:"p"},"all work to be performed within the callback")," without\ndispatching onto different queues or using any async API that would hold on to\nthe documents."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'// CONVENIENT:\nself.liveQuery = ditto.store.collection("A").find("store_id == \'abc123\'").observeLocal(deliverOn: self.documentProcessingQueue) { [weak self] documents, event in\n        print("[INFO] Processing \\(documents.count) changed documents...")\n        // Inspect the changed documents, update UI state, etc.\n\n        // IMPORTANT: all work needs to be performed within this block without\n        // dispatching onto different queues or using any async APIs.\n        \n        // In this case, Ditto will internally call `signalNext` for us when\n        // this block finishes.\n    }\n}\n')),(0,a.kt)("p",null,"Sometimes you do need to use async APIs or dispatch onto more queues (including\nthe main queue), in which case the following, most versatile, variant should be\nused:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// VERSATILE:\nself.liveQuery = ditto.store.collection(\"A\").find(\"store_id == 'abc123'\").observeLocalWithNextSignal(deliverOn: self.liveQueryQueue) { [weak self] documents, event, signalNext in\n    // Whenever we have to use asynchronous API that will hold on to the\n    // documents, Ditto won't know when it's safe to deliver the next batch of\n    // changes, so we have to tell it explicitly by calling `signalNext()`.    \n    self?.processDocumentsAsynchronously(documents) {\n        signalNext()\n    }\n}\n")),(0,a.kt)("h2",{id:"rule-of-thumb"},"Rule of Thumb"),(0,a.kt)("p",null,"All of this boils down to the following rule of thumb:"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"observeLocal(deliverOn:)")," ",(0,a.kt)("em",{parentName:"p"},"only")," if the received ",(0,a.kt)("inlineCode",{parentName:"p"},"documents")," including the\n",(0,a.kt)("inlineCode",{parentName:"p"},"event")," are processed and can be released within that callback without\ndispatching onto other queues or using any async APIs. Otherwise, use\n",(0,a.kt)("inlineCode",{parentName:"p"},"observeLocalWithNextSignal(deliverOn:)")," and call the ",(0,a.kt)("inlineCode",{parentName:"p"},"DittoSignalNext")," block after\nthe received documents are fully processed and can be released."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This of course doesn't mean that you can never keep a reference to the\ndocuments and use or operate on them later on. In fact, a typical use-case\nwould be to always keep the latest set of documents returned by a (live) query\nto display them in the UI or use otherwise. The important thing is to control\nthe rate at which those are delivered and let Ditto know when you are ready to\nreceive the next batch. This rule of thumb can help with that."),(0,a.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"The four variants shown in this article are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"- observeLocal(handler:)\n- observeLocal(deliverOn:handler:)\n- observeLocalWithNextSignal(handler:)\n- observeLocalWithNextSignal(deliverOn:handler:)\n")),(0,a.kt)("p",null,"The former three are convenience methods and are implemented in terms of the\nlatter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},".observeLocal() { documents, event in\n    // Process documents.\n}\n\n// Equivalent to and implemented as:\n.observeLocalWithNextSignal(deliverOn: .main) { documents, event, signalNext in\n    // Process documents.\n    signalNext()\n}\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},".observeLocal(deliverOn: .someQueue) { documents, event, in\n    // Process documents.\n}\n\n// Equivalent to and implemented as:\n.observeLocalWithNextSignal(deliverOn: .someQueue) { documents, event, signalNext in\n    // Process documents.\n    signalNext()\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},".observeLocalWithNextSignal() { documents, event, signalNext in\n    // Process documents.\n    signalNext()\n}\n\n// Equivalent to and implemented as:\n.observeLocalWithNextSignal(deliverOn: .main) { documents, event, signalNext in\n    // Process documents.\n    signalNext()\n}\n")))}d.isMDXComponent=!0}}]);
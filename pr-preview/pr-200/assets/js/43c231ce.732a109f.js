"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5967],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10496:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"1 - Setup"},p=void 0,c={unversionedId:"tutorials/swiftui/setup",id:"tutorials/swiftui/setup",isDocsHomePage:!1,title:"1 - Setup",description:"The following guide will show you how to build a task list application for iOS using SwiftUI.",source:"@site/docs/tutorials/swiftui/1-setup.md",sourceDirName:"tutorials/swiftui",slug:"/tutorials/swiftui/setup",permalink:"/pr-preview/pr-200/tutorials/swiftui/setup",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/swiftui/1-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1 - Setup"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pr-preview/pr-200/tutorials/index"},next:{title:"2 - Configure Ditto",permalink:"/pr-preview/pr-200/tutorials/swiftui/configure-ditto"}},u=[{value:"1-1 Create the App",id:"1-1-create-the-app",children:[],level:2},{value:"1-2 Add dependencies (Cocoapods or Swift Package Manager)",id:"1-2-add-dependencies-cocoapods-or-swift-package-manager",children:[],level:2}],s={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following guide will show you how to build a task list application for iOS using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/"},"SwiftUI"),"."),(0,i.kt)("p",null,"Before getting started, you will need the latest version of ",(0,i.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/xcode/id497799835"},"Xcode"),". This tutorial was written with Xcode 12.5.1. In addition, you should have a decent familiarity with Swift."),(0,i.kt)("h2",{id:"1-1-create-the-app"},"1-1 Create the App"),(0,i.kt)("p",null,"Once you've installed the latest version of Xcode installed, Click ",(0,i.kt)("strong",{parentName:"p"},"File > New Project")," and select ",(0,i.kt)("inlineCode",{parentName:"p"},"App")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7847).Z})),(0,i.kt)("p",null,"Fill out the information on the form similar to the screenshot below. These are recommended values however they are not crucial to complete this tutorial:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Tasks"')),(0,i.kt)("li",{parentName:"ul"},"Organization Identifier: ",(0,i.kt)("inlineCode",{parentName:"li"},'"live.ditto"'),". However, feel free to use your own value here."),(0,i.kt)("li",{parentName:"ul"},"Interface: SwiftUI"),(0,i.kt)("li",{parentName:"ul"},'Life Cycle: "UIKit App Delegate"'),(0,i.kt)("li",{parentName:"ul"},"Language: Swift")),(0,i.kt)("p",null,'And finally click "Next" and select a directory to create the application.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(98951).Z})),(0,i.kt)("h2",{id:"1-2-add-dependencies-cocoapods-or-swift-package-manager"},"1-2 Add dependencies (Cocoapods or Swift Package Manager)"),(0,i.kt)("p",null,"Follow the instructions on the ",(0,i.kt)("a",{parentName:"p",href:"/installation/ios"},"Installation page for iOS")," to use CocoaPods or Swift Package Manager."),(0,i.kt)("p",null,"Now open ",(0,i.kt)("strong",{parentName:"p"},"Tasks.xcworkspace"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From now on open up Tasks.xcworkspace and ",(0,i.kt)("em",{parentName:"p"},"not")," Tasks.xcproj or else you will not be able to compile references to Ditto")))}d.isMDXComponent=!0},7847:function(e,t,n){t.Z=n.p+"assets/images/xcode-app-type-selection-49a7962e3ed8213fafe0ac0ea1869f0d.png"},98951:function(e,t,n){t.Z=n.p+"assets/images/xcode-project-form-fill-ba7334a9a7a4b5c5d9638870cf16cfd0.png"}}]);
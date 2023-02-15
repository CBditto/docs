"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,p=u["".concat(c,".").concat(h)]||u[h]||b[h]||o;return n?i.createElement(p,a(a({ref:t},d),{},{components:n})):i.createElement(p,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46431:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={title:"@StateObject vs. @ObservedObject",sidebar_position:7},a=void 0,s={unversionedId:"quick-tips/StateObject-vs-ObservedObject",id:"quick-tips/StateObject-vs-ObservedObject",isDocsHomePage:!1,title:"@StateObject vs. @ObservedObject",description:"_Note: This is a general concept that isn't specific to Ditto.",source:"@site/docs/ios/quick-tips/StateObject-vs-ObservedObject.md",sourceDirName:"quick-tips",slug:"/quick-tips/StateObject-vs-ObservedObject",permalink:"/ios/quick-tips/StateObject-vs-ObservedObject",editUrl:"https://github.com/getditto/docs/tree/main/docs/ios/quick-tips/StateObject-vs-ObservedObject.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"@StateObject vs. @ObservedObject",sidebar_position:7},sidebar:"docs",previous:{title:"Preventing Accumulating Combine Publishers",permalink:"/ios/quick-tips/prevent-accumulating-publishers"},next:{title:"DittoSwiftTools",permalink:"/ios/quick-tips/DittoSwiftTools"}},c=[{value:"@ObservedObject",id:"observedobject",children:[],level:2},{value:"@StateObject",id:"stateobject",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Avoiding side effects when using Ditto",id:"avoiding-side-effects-when-using-ditto",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[{value:"Additional Information",id:"additional-information",children:[],level:3}],level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"_Note: This is a general concept that isn't specific to Ditto."),(0,r.kt)("p",null,"Views in SwiftUI can be redrawn frequently. Therefore, it\u2019s important to understand why and when to use the @StateObject and the @ObservedObject property wrappers when observing an observed object. Both property wrappers tell a SwiftUI View to redraw when the object they are observing updates. The difference between them can be seen when a View is redrawn."),(0,r.kt)("h2",{id:"observedobject"},"@ObservedObject"),(0,r.kt)("p",null,"When a View is redrawn the entire View struct is initialized all over again. This means that all of the variables that were created in the View that are not marked with the @State property wrapper also get initialized all over again and set to their default values, including objects marked with @ObservedObject."),(0,r.kt)("h2",{id:"stateobject"},"@StateObject"),(0,r.kt)("p",null,"When a View is redrawn objects marked with the @StateObject property wrapper do not get re-instantiated. This means that an object marked with @StateObject, the first instance of this object that we create will persist and be used each time the View is redrawn. "),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"To better understand the difference between these two property wrappers try running the code below. We have two counters, the first is created in the ContentView View and the second is created in the CounterTwoViewModel class which is being observed by the CounterTwoView View. The ContentView is calling to the CounterTwoView to display the second counter on the screen. "),(0,r.kt)("p",null,"Watch what happens to the second counter value when you increment the first counter and note the difference when you change the viewModel object in the CounterTwoView to use @StateObject rather than @ObservedObject"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct ContentView: View {\n    @State var counter = 0\n\n    var body: some View {\n        VStack {\n            Text("Counter One is: \\(counter)")\n            Button("Increment Counter") {\n                counter += 1\n            }\n        }.padding(.bottom)\n        \n        CounterTwoView()\n    }\n}\n\nstruct CounterTwoView: View {\n    // Change between @ObservedObject and @StateObject\n    @ObservedObject var viewModel = CounterTwoViewModel()\n\n    var body: some View {\n        VStack {\n            Text("Counter Two is: \\(viewModel.count)")\n            Button("Increment Counter") {\n                viewModel.incrementCounter()\n            }\n        }\n    }\n}\n\nfinal class CounterTwoViewModel: ObservableObject {\n    @Published var count = 0\n\n    func incrementCounter() {\n        count += 1\n    }\n}\n')),(0,r.kt)("p",null,"When using @ObservedObject on the viewModel you will notice the second counter resets to 0 every time the first counter is incremented. This is because the ContentView gets redrawn when you increment the first counter causing the CounterTwoView to be re-initialized; which means, the counter in the viewModel gets re-initialized and set to its default value of 0. When using @StateObject on the viewModel object the viewModel object does not get re-initialized every time the View is redrawn; therefore, our counter does not reset to it\u2019s default value of 0."),(0,r.kt)("h2",{id:"avoiding-side-effects-when-using-ditto"},"Avoiding side effects when using Ditto"),(0,r.kt)("p",null,"A common issue we see in reactive apps is a failure to dispose of resources as the view is re-drawn. If you use an ObservableObject for your ditto live queries, please call ",(0,r.kt)("inlineCode",{parentName:"p"},"liveQuery.stop()")," to cancel them. Otherwise, your app may see a large accumulation of publishers that infinitely grow."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In general, if your View has a high redraw rate or when an observable object is being used in the same View that initialized that object then you should use @StateObject. If the observable object is initialized outside of the view that is using it, use @ObservedObject, and clean up any long-running tasks when the view is disposed."),(0,r.kt)("h3",{id:"additional-information"},"Additional Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.donnywals.com/whats-the-difference-between-stateobject-and-observedobject/"},"https://www.donnywals.com/whats-the-difference-between-stateobject-and-observedobject/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.avanderlee.com/swiftui/stateobject-observedobject-differences/"},"https://www.avanderlee.com/swiftui/stateobject-observedobject-differences/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"At time of writing this")," There is no official documentation on how to pass parameters into the initialization of a @StateObject property, but here is a possible example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://swiftui-lab.com/random-lessons/#data-10"},"https://swiftui-lab.com/random-lessons/#data-10"))))))}u.isMDXComponent=!0}}]);
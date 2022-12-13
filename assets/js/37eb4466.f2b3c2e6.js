"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79443:function(e,t,n){var i=(0,n(67294).createContext)(void 0);t.Z=i},80944:function(e,t,n){var i=n(67294),r=n(79443);t.Z=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},49366:function(e,t,n){var i=n(67294),r=n(80944),o=n(86010);t.Z=function(e){var t,n=e.lazy,a=e.platform,l=(e.block,e.defaultValue),c=e.values,s=e.groupId,u=(e.className,i.Children.toArray(e.children)),d=null!=c?c:u.map((function(e){return{value:e.props.value,label:e.props.label}})),p=null!=l?l:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,f=(0,r.Z)(),m=f.tabGroupChoices,y=f.setTabGroupChoices,h=(0,i.useState)(p),v=h[0],b=h[1];(0,i.useEffect)((function(){if(null!=s){var e=m[s];null!=e&&e!==v&&(d.some((function(t){return t.value===e}))?b(e):b(p))}}),[a,m[s]]);var g=function(e){b(e),null!=s&&y(s,e)},w=d.length>1;return i.createElement("div",{className:"tabs-container"},w&&i.createElement(i.Fragment,null,i.createElement("div",{className:"sm:hidden"},i.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),i.createElement("select",{id:"tabs",name:"tabs",value:v,onChange:function(e){return g(e.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},d.map((function(e){var t=e.value,n=e.label;return i.createElement("option",{value:t,key:t},null!=n?n:t)})))),i.createElement("div",{className:"hidden sm:block"},i.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},d.map((function(e){var t=e.value,n=e.label;return i.createElement("button",{key:t,onClick:function(){return g(t)},className:(0,o.Z)(v===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":v===t?"page":void 0},null!=n?n:t)}))))),n?(0,i.cloneElement)(u.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},86315:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=(n(49366),n(30547),["components"]),l={title:"Identities",sidebar_position:1},c=void 0,s={unversionedId:"security/overview",id:"security/overview",isDocsHomePage:!1,title:"Identities",description:'Most applications need a way to control which users can write or read certain data. For example, you might build an application where senior staff members can READ and WRITE documents in the "menuItems" collection while junior staff members can only READ. Ditto\'s security is controlled by identities. Each Ditto instance must identify itself to other peers in order to syncronize with them.',source:"@site/docs/common/security/overview.mdx",sourceDirName:"security",slug:"/security/overview",permalink:"/common/security/overview",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/security/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Identities",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"3 - Node.js Example",permalink:"/common/guides/kafka/nodejs"},next:{title:"Overview",permalink:"/common/security/authentication/overview"}},u=[{value:"Get started",id:"get-started",children:[{value:"Development identities",id:"development-identities",children:[],level:3},{value:"Production identities",id:"production-identities",children:[],level:3},{value:"Parts of a Ditto Identity",id:"parts-of-a-ditto-identity",children:[],level:3}],level:2},{value:"Ditto Identity Lifecycle",id:"ditto-identity-lifecycle",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most applications need a way to control which users can write or read certain data. For example, you might build an application where senior staff members can ",(0,o.kt)("inlineCode",{parentName:"p"},"READ")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WRITE")," documents in the ",(0,o.kt)("inlineCode",{parentName:"p"},'"menuItems"')," collection while junior staff members can only ",(0,o.kt)("inlineCode",{parentName:"p"},"READ"),". Ditto's security is controlled by ",(0,o.kt)("strong",{parentName:"p"},"identities"),". Each Ditto instance must identify itself to other peers in order to syncronize with them. "),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"These sections will describe how you can:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify users "),(0,o.kt)("li",{parentName:"ol"},"Give users read or write control "),(0,o.kt)("li",{parentName:"ol"},"Integrate with your existing authentication systems")),(0,o.kt)("p",null,"There are several types of identities.  Every installation of an app that uses\nDitto has its own identity. This identity is used to identify each unique peer\nin the mesh network. Each Ditto Identity is associated to a single Ditto client\nvia a globally unique AppId and may not be used across multiple Ditto apps. Each identity has an ",(0,o.kt)("inlineCode",{parentName:"p"},"appID"),", an authentication certificate, and a set of ",(0,o.kt)("a",{parentName:"p",href:"../concepts/designing-permissions"},"access control permissions")," which you specify. This information is used\nto accept or reject syncronization with peers. "),(0,o.kt)("h3",{id:"development-identities"},"Development identities"),(0,o.kt)("p",null,'When you start prototyping with Ditto you can use a "playground" identity.\nPlayground identities contain default settings and offer no real security.\nPlayground certificates should absolutely not be deployed to any production\nenvironments.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../mesh-network/online-playground"},"Online Playground")," - for prototyping with Ditto for hybrid/offline online synchornization. Start here!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../mesh-network/offline-license"},"Offline Playground")," - a low level of security for applications that never connect to the Internet.")),(0,o.kt)("h3",{id:"production-identities"},"Production identities"),(0,o.kt)("p",null,"Once you are ready to deploy, this can be swapped for a production identity where security is\nenforced."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../security/authentication/overview"},"Online With Authentication")," - for hybrid offline/online synchronization with customized permissioning."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../security/shared-key"},"Shared Key")," - an intermediate level of security for offline-only applications where all devices are trusted.")),(0,o.kt)("h3",{id:"parts-of-a-ditto-identity"},"Parts of a Ditto Identity"),(0,o.kt)("p",null,"For more detailed information on what is contained within Ditto Identity certificates, see ",(0,o.kt)("a",{parentName:"p",href:"../how-it-works/certificate-security"},"Certificate Security"),"."),(0,o.kt)("h2",{id:"ditto-identity-lifecycle"},"Ditto Identity Lifecycle"),(0,o.kt)("p",null,"While highly configurable, each Ditto Identity has a typical life cycle. First,\nthe Ditto Identity is constructed. Typically the only prerequisites are a Ditto\npersistence root (working directory for local data storage, where configured)\nand a globally unique Ditto AppId. In order to sync, all app instances,\nregardless of SDK language, ",(0,o.kt)("em",{parentName:"p"},"must"),' have the same globally unique Ditto AppId.\nTherefore this value will typically be incorporated in the App\'s bundle or\nprovided to the App when it starts. The Ditto Big Peer can create AppIds for\nyou, but it is not the authentication provider. Ditto Cloud is a proxy to your\nown "source of truth" for identities, credential validation, and permissions.'),(0,o.kt)("p",null,"Next the Ditto Identity is consumed by the Ditto constructor, yielding a\nconfigured ",(0,o.kt)("inlineCode",{parentName:"p"},"Ditto")," instance. The Ditto instance will contain a Ditto\nAuthenticator and your own implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DittoAuthEventHandler"),"\ninterface, which can provide login credentials. Ditto will then contact the\nconfigured Auth Url and supply the login credentials to an Authentication\nProvider. If the credentials are valid, then the Authentication Provider will\nreturn to Ditto an Authentication Token, validating its credentials and granting\nthe Ditto instance individualized permissions. The Ditto instance can now sync\nwith other peers."))}p.isMDXComponent=!0},86010:function(e,t,n){function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);
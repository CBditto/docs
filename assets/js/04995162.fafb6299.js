"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2017],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79443:function(e,t,n){var i=(0,n(67294).createContext)(void 0);t.Z=i},80944:function(e,t,n){var i=n(67294),a=n(79443);t.Z=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},49366:function(e,t,n){var i=n(67294),a=n(80944),r=n(86010);t.Z=function(e){var t,n=e.lazy,o=e.platform,l=(e.block,e.defaultValue),s=e.values,c=e.groupId,d=(e.className,i.Children.toArray(e.children)),u=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=l?l:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,p=(0,a.Z)(),m=p.tabGroupChoices,f=p.setTabGroupChoices,y=(0,i.useState)(h),v=y[0],k=y[1];(0,i.useEffect)((function(){if(null!=c){var e=m[c];null!=e&&e!==v&&(u.some((function(t){return t.value===e}))?k(e):k(h))}}),[o,m[c]]);var g=function(e){k(e),null!=c&&f(c,e)},b=u.length>1;return i.createElement("div",{className:"tabs-container"},b&&i.createElement(i.Fragment,null,i.createElement("div",{className:"sm:hidden"},i.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),i.createElement("select",{id:"tabs",name:"tabs",value:v,onChange:function(e){return g(e.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},u.map((function(e){var t=e.value,n=e.label;return i.createElement("option",{value:t,key:t},null!=n?n:t)})))),i.createElement("div",{className:"hidden sm:block"},i.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},u.map((function(e){var t=e.value,n=e.label;return i.createElement("button",{key:t,onClick:function(){return g(t)},className:(0,r.Z)(v===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":v===t?"page":void 0},null!=n?n:t)}))))),n?(0,i.cloneElement)(d.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},34968:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=(n(49366),n(30547),["components"]),l={title:"Certificate-Based Security",sidebar_position:10},s=void 0,c={unversionedId:"how-it-works/certificate-security",id:"how-it-works/certificate-security",isDocsHomePage:!1,title:"Certificate-Based Security",description:"This section contains an advanced discussion of Ditto's underlying certificate, identity, and",source:"@site/docs/common/how-it-works/certificate-security.mdx",sourceDirName:"how-it-works",slug:"/how-it-works/certificate-security",permalink:"/common/how-it-works/certificate-security",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/how-it-works/certificate-security.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Certificate-Based Security",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Mesh Network",permalink:"/common/how-it-works/mesh-network"},next:{title:"Big Peer",permalink:"/common/how-it-works/big-peer"}},d=[{value:"Identities",id:"identities",children:[],level:2},{value:"Certificates",id:"certificates",children:[],level:2},{value:"Discovering peers",id:"discovering-peers",children:[],level:2},{value:"Synchronizing with the Big Peer",id:"synchronizing-with-the-big-peer",children:[{value:"Overview",id:"overview",children:[],level:3},{value:"Step 1: Complete a Peer Key Challenge",id:"step-1-complete-a-peer-key-challenge",children:[],level:3},{value:"Step 2: Log in with Credentials",id:"step-2-log-in-with-credentials",children:[],level:3},{value:"Step 3: Upgrade to an X.509 Certificate",id:"step-3-upgrade-to-an-x509-certificate",children:[],level:3},{value:"Rationale",id:"rationale",children:[],level:3}],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This section contains an advanced discussion of Ditto's underlying certificate, identity, and\nencryption implementation. Most readers can skip this section.  However, if you are deploying an enterprise\non-premises deployment of Ditto, you may be required to reference the following\nmaterial.  "))),(0,r.kt)("p",null,"All communications are consistently protected by modern and robust encryption\nfor all of Ditto's communication methods. Cryptographically-signed business\nrules ensure users can only sync data that they are permitted to access. The app\ndeveloper is in complete control of the keys, certificates, and rules."),(0,r.kt)("p",null,"The Ditto Big Peer provisions a signed x509 certificate. This certificate may\nthen be presented to other Ditto peers to mutually establish trust and create\nencrypted communications channels. "),(0,r.kt)("p",null,"The following details information about the certificates used to encrypt the\ncommunication channels."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Capability"),(0,r.kt)("th",null,"Type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Encryption"),(0,r.kt)("td",null,"TLS 1.3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Authentication"),(0,r.kt)("td",null,"EC keypairs with signed certificates")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Trust infrastructure"),(0,r.kt)("td",null,"X.509 with a developer-controlled certificate authority")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Access Rules"),(0,r.kt)("td",null,"Query patterns on Document _id's describing read and or write access"))),(0,r.kt)("h2",{id:"identities"},"Identities"),(0,r.kt)("p",null,"An identity is a bundle of the device and app-specific information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Site ID - A number unique to this device."),(0,r.kt)("li",{parentName:"ul"},"App Name - A name identifying the application. This avoids different Ditto-enabled apps trying to sync with each other. These are unique identifiers, for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"5322afcd-5a70-43a3-bc2d-85d98ccf5ac0")),(0,r.kt)("li",{parentName:"ul"},"Access Rules - Define which documents this device is allowed to read or write during sync."),(0,r.kt)("li",{parentName:"ul"},"Private Key - A secret for authenticating as this identity."),(0,r.kt)("li",{parentName:"ul"},"Identity Certificate - A certificate verifying the particulars of this device, signed by the CA."),(0,r.kt)("li",{parentName:"ul"},"CA Certificate - Used to verify certificates presented by other devices with the same app.")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null,"Production"),(0,r.kt)("th",null,"Development")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Site ID"),(0,r.kt)("td",null,"Allocated by central authority"),(0,r.kt)("td",null,"Defaults to a random number; can be customized")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"App ID"),(0,r.kt)("td",null,"Set by central authority"),(0,r.kt)("td",null,'For example, "5322afcd-5a70-43a3-bc2d-85d98ccf5ac0"')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Access Rules"),(0,r.kt)("td",null,"Set by central authority"),(0,r.kt)("td",null,"All devices may read/write all documents")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Private Key"),(0,r.kt)("td",null,"Either generated on device or distributed by central authority"),(0,r.kt)("td",null,"Hard-coded and shared by all devices")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Identity Certificate"),(0,r.kt)("td",null,"Unique and signed by a central authority; contains this device's public key"),(0,r.kt)("td",null,"Hard-coded and shared by all devices")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"CA Certificate"),(0,r.kt)("td",null,"Shared by all users of the same app"),(0,r.kt)("td",null,"Hard-coded and shared by all devices")),(0,r.kt)("table",null)),(0,r.kt)("h2",{id:"certificates"},"Certificates"),(0,r.kt)("p",null,"Ditto identities and public keys are distributed in the standard X.509\ncertificate format. They do not directly contain potentially sensitive data such as access rules,\nbut these can be defined by the app's authentication webhook with the\n",(0,r.kt)("a",{parentName:"p",href:"../security/designing-permissions"},"OnlineWithAuthentication identity"),", or by the\ndeveloper through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Manual")," identity."),(0,r.kt)("p",null,"When you are ready to use production identities, feel free to contact\nus through the Ditto Portal and we will help you set up the right CA\ntooling for your use case - or provide specifications so you can build your own."),(0,r.kt)("h2",{id:"discovering-peers"},"Discovering peers"),(0,r.kt)("p",null,"Devices need to have the same AppID to discover other peers on the network, as\nwell as matching certificates to connect over TLS 1.3. Peer-to-peer connections use mTLS (client certificates) with TLS 1.3. Connections to the Big Peer use a TLS-secured WebSocket connection, with authentication by JWT. Once the certificates match,\nthen the embedded authorization information inside each certificate is used to\nauthorize any incoming requests by that peer. This ensures that those access\ncontrol rules are enforced. "),(0,r.kt)("h2",{id:"synchronizing-with-the-big-peer"},"Synchronizing with the Big Peer"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The description below covers internal details of the Big Peer implementation.  Ditto\u2019s authentication module handles this\nimplementation for you under the hood as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnlineWithAuthentication")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OnlinePlayground"),"\nidentities. "))),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Online Authentication can be used when a Ditto application is hosted on a Big Peer. The Big Peer hosts an HTTPS identity service, which handles login requests. In Online Authentication mode, a Small Peer must log in with credentials before it can communicate with any peers. The login flow populates the Small Peer with valid authentication material that identifies the user and defines their level of access. Once the Small Peer receives this data after a successful login, the transports which depend on it will start automatically."),(0,r.kt)("h3",{id:"step-1-complete-a-peer-key-challenge"},"Step 1: Complete a Peer Key Challenge"),(0,r.kt)("p",null,"The peer\u2019s public key will be included in the certificates returned by the identity service. The identity service needs proof that the authenticating Small Peer actually holds the corresponding private key."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Small Peer downloads a challenge token from ",(0,r.kt)("inlineCode",{parentName:"li"},"/_ditto/auth/cert")," - this is a time-limited JWT which the client treats as opaque data."),(0,r.kt)("li",{parentName:"ol"},"Small Peer uses their Peer Key to sign it with the context ",(0,r.kt)("inlineCode",{parentName:"li"},"LoginKeyVerification"),".")),(0,r.kt)("h3",{id:"step-2-log-in-with-credentials"},"Step 2: Log in with Credentials"),(0,r.kt)("p",null,"When a client attempts to authenticate, it will make an HTTPS request to the identity service containing the following payload:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Signed challenge,"),(0,r.kt)("li",{parentName:"ul"},"App ID,"),(0,r.kt)("li",{parentName:"ul"},"Provider name, and"),(0,r.kt)("li",{parentName:"ul"},"Credentials to be forwarded to the app's ",(0,r.kt)("a",{parentName:"li",href:"../security/online-with-authentication"},"authentication webhook"),".")),(0,r.kt)("p",null,"Once the identity service has a response from the auth webhook, it will build and sign a JWT. In addition to the information we would expect to find in a JWT (issuer, issued at, expiry, etc), we also include an encoded representation of the Ditto Identity.\nThe Ditto Identity is built from the information provided by the app's authentication webhook response."),(0,r.kt)("h3",{id:"step-3-upgrade-to-an-x509-certificate"},"Step 3: Upgrade to an X.509 Certificate"),(0,r.kt)("p",null,"Once a peer has a JWT, it will want to use this to get a device certificate.\xa0 The\npeer will now make an HTTPS certificate request to the identity service.\nThe \u201crequest certificate\u201d endpoint requires a valid JWT.\xa0 The contents of the\nnew certificate is closely tied to the JWT.\xa0 The certificate expiration time is the same as the JWT, and the ditto identity embedded in the\ncertificate is pulled from the JWT.\xa0 The identity service generates a\nprivate key for the device.\xa0 It uses this private key to generate a CSR on\nbehalf of the client and then the identity service\u2019s CA keys to sign it."),(0,r.kt)("p",null,"Once this information is prepared, the identity service is ready to respond to the request.\nThe response will include the client's generated certificate and private key, a list of CA certificates the client should trust, and a DateTime for\nexpiration.\xa0The client will persist the JWT, device private key, device\ncertificate, and CA certificates on disk and only update them when they get near\nexpiration."),(0,r.kt)("p",null,"When two peers authenticate with each other, they can use either\nthe JWT or the device certificate via MTLS. The decision depends on the client's\ncapabilities and connection type."),(0,r.kt)("h3",{id:"rationale"},"Rationale"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why does X.509 return both a key and a certificate instead of locally generating a key and sending a CSR?")),(0,r.kt)("p",null,"It would be possible to use a standard CSR flow. It was chosen to issue keys directly for a few reasons."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is no security benefit as our certificate request is in a secured tunnel, and the identity service is presumed to be completely trustworthy."),(0,r.kt)("li",{parentName:"ul"},"Validating and signing CSRs is more complex than simply creating one with the correct format and fields."),(0,r.kt)("li",{parentName:"ul"},"This is a convenient workflow if using Hashicorp Vault or similar to manage your PKI and issue certificates on demand.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why is X.509 a separate request?")),(0,r.kt)("p",null,"The idea is that JWTs could be quite short-lived but the X.509 certs could be long-lived to permit long periods of working offline, so the Small Peer could call them to refresh at different intervals. Different expiry periods between JWT and X.509 isn\u2019t implemented yet."),(0,r.kt)("p",null,"Additionally, browser peers have no use for X.509 certificates so they don\u2019t request them."),(0,r.kt)("p",null,"Of course, the Small Peer could have a single request that lets you request some combination of identities at once. There is no reason this couldn\u2019t be added in the future to reduce latency."))}h.isMDXComponent=!0},86010:function(e,t,n){function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);
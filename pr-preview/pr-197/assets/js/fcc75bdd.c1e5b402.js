"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7269],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10841:function(e,t,n){n.r(t),n.d(t,{ImageHolder:function(){return h},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"Mesh Network",sidebar_position:2},l=void 0,c={unversionedId:"how-it-works/mesh-network",id:"how-it-works/mesh-network",isDocsHomePage:!1,title:"Mesh Network",description:"export function ImageHolder(props) {",source:"@site/docs/how-it-works/mesh-network.md",sourceDirName:"how-it-works",slug:"/how-it-works/mesh-network",permalink:"/pr-preview/pr-197/how-it-works/mesh-network",editUrl:"https://github.com/getditto/docs/edit/master/docs/how-it-works/mesh-network.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Mesh Network",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Conflict-Free Replicated Data Types (CRDTs)",permalink:"/pr-preview/pr-197/how-it-works/crdt"},next:{title:"Certificate Based Security",permalink:"/pr-preview/pr-197/how-it-works/certificate-security"}},p=[{value:"Types of Transports",id:"types-of-transports",children:[],level:2},{value:"Discovering Peers",id:"discovering-peers",children:[],level:2},{value:"Making and Breaking Connections",id:"making-and-breaking-connections",children:[],level:2},{value:"Using Bandwidth Intelligently",id:"using-bandwidth-intelligently",children:[],level:2},{value:"Servers and the Big Peer",id:"servers-and-the-big-peer",children:[],level:2},{value:"Configuring the Mesh",id:"configuring-the-mesh",children:[],level:2}];function h(e){return(0,r.kt)("div",{style:{padding:"2rem",margin:"2rem",borderRadius:"8px",background:"white"}},e.children)}var u={toc:p,ImageHolder:h};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you use Ditto in your app you don\u2019t have to think about how your devices will connect to each other. A device like an iPhone will build an interconnected mesh all on its own. As soon as you call ",(0,r.kt)("inlineCode",{parentName:"p"},"tryStartSync()")," it fires up Bluetooth LE, scans for peers on the WiFi, and activates AWDL to create high-speed connections with nearby Apple devices\u2014all this with one line of code."),(0,r.kt)("img",{src:n(72571).Z,className:"max-h-72 m-auto py-4"}),(0,r.kt)("p",null,"The mesh is an underlay for data sync. It operates independently of your queries and subscriptions. Data updates will propagate through the mesh automatically, ",(0,r.kt)("a",{parentName:"p",href:"/concepts/syncing-data"},"provided your subscriptions match"),"."),(0,r.kt)("p",null,"Ditto contains a number of algorithms to maintain an optimal mesh automatically, whether you have two devices or two thousand."),(0,r.kt)("p",null,"Many applications need to sync data with the Big Peer or an on-premises server. The Ditto SDK uses peer-to-peer and Big Peer connections simultaneously, turning your mesh global. This is as easy as setting your server\u2019s URL."),(0,r.kt)("h2",{id:"types-of-transports"},"Types of Transports"),(0,r.kt)("p",null,"Ditto uses as many technologies as possible to communicate with other devices running your app. These different modes, such as Bluetooth Low Energy and LAN, are called ",(0,r.kt)("em",{parentName:"p"},"transports"),"."),(0,r.kt)("p",null,"Where possible Ditto will create a mesh using a mixture of transports. They offer different advantages and disadvantages. For example Bluetooth LE generally has a longer range but much lower bandwidth than WiFi. Therefore Ditto uses WiFi when it's available, and falls back to Bluetooth when it isn\u2019t."),(0,r.kt)("p",null,"Which transports are supported depends on what kind of device or SDK you are using. Some examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A mobile phone can use ",(0,r.kt)("strong",{parentName:"li"},"Bluetooth LE"),", ",(0,r.kt)("strong",{parentName:"li"},"LAN"),", ",(0,r.kt)("strong",{parentName:"li"},"P2P WiFi"),", or a ",(0,r.kt)("strong",{parentName:"li"},"WebSocket")," connection to a Big Peer server."),(0,r.kt)("li",{parentName:"ul"},"A web application running in a browser can use ",(0,r.kt)("strong",{parentName:"li"},"WebSocket"),"."),(0,r.kt)("li",{parentName:"ul"},"A Raspberry Pi can use ",(0,r.kt)("strong",{parentName:"li"},"Bluetooth LE"),", ",(0,r.kt)("strong",{parentName:"li"},"LAN"),", or ",(0,r.kt)("strong",{parentName:"li"},"WebSocket"),".")),(0,r.kt)("p",null,"Many transports will work automatically. Others like WebSocket require configuration. ",(0,r.kt)("a",{parentName:"p",href:"https://www.ditto.live/docs/references/network-transport-support"},"You can learn more about the supported transports and upcoming transports here")),(0,r.kt)("h2",{id:"discovering-peers"},"Discovering Peers"),(0,r.kt)("p",null,"When Ditto starts syncing it advertises itself on all enabled peer-to-peer transports. This advertisement is transmitted in different ways depending on the transport but it always involves two small pieces of information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App ID Hash")," - A 32-bit hash of the app\u2019s id."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Announce")," - An encoded piece of text identifying an app session.")),(0,r.kt)("p",null,"All devices running the same app will have the same ",(0,r.kt)("em",{parentName:"p"},"App ID Hash")," so they know they should connect to each other. In the rare event of a hash collision, Ditto may try to connect to a different app, but verification will fail and the connection will be cancelled immediately."),(0,r.kt)("p",null,"If you are monitoring network traffic you might come across a Ditto Announce. This is a Ditto-specific advertisement format which contains basic information about the device. This provides hints to Ditto so that it can construct a good mesh quickly and efficiently."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Q1RACGXmbwOgjGSGP771\nQ1                      Major protocol version: 1\n  RA                    Platform: Android\n    CGXmbwOg            32-bit Network ID\n            jGSGP771    Device name \u201cSGP771\u201d\n")),(0,r.kt)("p",null,"The Network ID is randomised each time Ditto starts up. It enables peers to identify each other with high probability across all transports. If Peer A connects to Peer B over WiFi they know each other\u2019s Network IDs, so Peer B can avoid creating a duplicate connection in the reverse direction."),(0,r.kt)("h2",{id:"making-and-breaking-connections"},"Making and Breaking Connections"),(0,r.kt)("img",{src:n(6214).Z,className:"max-h-72 m-auto"}),(0,r.kt)("p",null,"When a user opens your app the first thing they will see is how quickly it syncs the latest information. Ditto understands this. When sync begins it uses all the transports aggressively to locate and connect to multiple potential peers concurrently. At the same time the existing peers will notice the newcomer\u2019s arrival. If they have capacity they will also establish connections to the new device. Together, these processes ensure that a new peer is integrated into the mesh as quickly as possible."),(0,r.kt)("p",null,"After this initial burst Ditto must become more efficient. A mobile phone has a finite battery. Each extra LAN connection consumes more CPU time and more radio energy. Bluetooth is particularly constrained: devices can manage only a handful of concurrent connections and each connection can take several seconds to initiate. Therefore in larger meshes Ditto must limit the number of interconnections, and choose wisely."),(0,r.kt)("img",{src:n(87254).Z,className:"max-h-72 m-auto"}),(0,r.kt)("p",null,"At the same time Ditto must not have too ",(0,r.kt)("em",{parentName:"p"},"few")," connections: otherwise islanding can occur, where different groups of devices in the same room are connected in individual clusters. If there is no connection between those groups they will not sync data with each other."),(0,r.kt)("p",null,"Ditto avoids islanding using two techniques, neither of which require central coordination. First, a reasonably dense mesh is preferred so that islanding is improbable. Second, a random churn means that devices will slowly change which peers they are connected to. This ensures that even if an island did form, it will likely only last a few seconds."),(0,r.kt)("img",{src:n(37498).Z,className:"max-h-72 m-auto"}),(0,r.kt)("p",null,"Next, certain optimisations are possible. Imagine there are two candidate peers for a Bluetooth connection but you only have capacity for one. If you are already connected to one of those peers via WiFi, then we should spend our Bluetooth connection on the other peer, to improve the diversity of the mesh."),(0,r.kt)("img",{src:n(54490).Z,className:"max-h-72 m-auto"}),(0,r.kt)("p",null,"Now, imagine the same scenario except we have capacity for two Bluetooth connections. This time we should connect to ",(0,r.kt)("em",{parentName:"p"},"both")," of them. The Bluetooth connection where we have WiFi will sit idle for now, but if that WiFi connection goes away in the future then we can immediately failover to the pre-established Bluetooth connection. The user won't even notice that anything happened."),(0,r.kt)("p",null,"Sounds complicated? Don\u2019t worry about it. Everything described here is built into Ditto and your app will do this completely automatically. All you need to do is enable your transports and Ditto will make the best possible use of them."),(0,r.kt)("h2",{id:"using-bandwidth-intelligently"},"Using Bandwidth Intelligently"),(0,r.kt)("p",null,"In smaller meshes Ditto will often create multiple connections to the same peer using different transports. This might look wasteful but it provides important performance benefits."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The transports race against each other to establish a connection. As soon as we get the first one, data sync can begin. This means lower latency for initial sync."),(0,r.kt)("li",{parentName:"ol"},"The fastest connection is preferred to transfer data, so large updates sync as quickly as possible."),(0,r.kt)("li",{parentName:"ol"},"Unneeded slower connections like Bluetooth are left idle, which means the limited radio bandwidth is reserved for those peers that really need it."),(0,r.kt)("li",{parentName:"ol"},"If the fastest connection is lost, the next-best option is ready to go, reducing or eliminating the gap when no sync is possible.")),(0,r.kt)("p",null,"The seamless switching between transports relies on a Ditto component called the Multiplexer, which is described in detail in a ",(0,r.kt)("a",{href:"https://www.ditto.live/blog/the-new-network-multiplexer"},"blog post"),"."),(0,r.kt)("p",null,"As of Ditto v1.0 the Multiplexer uses one transport at a time with failover. In future versions this feature will enable more complex scenarios such as load-balancing across multiple routes and lossy transports."),(0,r.kt)("h2",{id:"servers-and-the-big-peer"},"Servers and the Big Peer"),(0,r.kt)("p",null,"In addition to peer-to-peer transports like Bluetooth, a cloud or on-prem server can be configured by specifying its URL. At Ditto we call a server like this a ",(0,r.kt)("em",{parentName:"p"},"Big Peer"),", while regular SDKs are ",(0,r.kt)("em",{parentName:"p"},"Small Peers"),"."),(0,r.kt)("p",null,"Big Peers are especially important for users who want to use Ditto in a web browser, since web browsers have very limited peer-to-peer capabilities. The JavaScript SDK can be configured with the Big Peer that should be used for sync."),(0,r.kt)("p",null,"An SDK can sync directly with a Big Peer, or locally with Small Peers, or with both at the same time, acting as a bridge for devices that don\u2019t have an internet connection."),(0,r.kt)("h2",{id:"configuring-the-mesh"},"Configuring the Mesh"),(0,r.kt)("p",null,"Every Ditto SDK has a configuration structure called ",(0,r.kt)("inlineCode",{parentName:"p"},"TransportConfig"),", which lives in the main ",(0,r.kt)("inlineCode",{parentName:"p"},"Ditto")," object. If you don\u2019t change the default configuration Ditto will enable all available peer-to-peer transports."),(0,r.kt)("p",null,"If you create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"TransportConfig")," it has three main sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"peerToPeer"))," - Contains properties for each type of transport. Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"isEnabled")," flag to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," for each one that you want to use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"connect"))," - Servers to connect to: a list of WebSocket URLs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"listen"))," - Specialised configuration for making a Small Peer listen on a predictable port or act as a WebSocket server.")),(0,r.kt)("p",null,"Most apps will only need to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"peerToPeer")," and WebSocket settings."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," parameters provide support for unusual scenarios such as web browser clients on fully offline networks. Please use these only as directed by Ditto. If misconfigured, the listener features could circumvent Ditto\u2019s usual encryption and access control."))}d.isMDXComponent=!0},72571:function(e,t,n){t.Z=n.p+"assets/images/diagram1_basic_sync-8000016d6b736a478de6c3da9ac530df.png"},6214:function(e,t,n){t.Z=n.p+"assets/images/diagram2_new_peer-1399152e752298682b4b822e1f6ff3bc.png"},87254:function(e,t,n){t.Z=n.p+"assets/images/diagram3_two_islands-2109c0c708eec9eb676a7b501c308372.png"},37498:function(e,t,n){t.Z=n.p+"assets/images/diagram4_bluetooth_case1-fd0ec465a95b74205e6b0677228697c6.png"},54490:function(e,t,n){t.Z=n.p+"assets/images/diagram5_bluetooth_case2-265525efee87f06bb33b128db69450e5.png"}}]);
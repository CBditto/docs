"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2653],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38896:function(e,t,n){n.r(t),n.d(t,{Check:function(){return k},Clock:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=n(14653),l=n(67804),s=["components"],c={title:"Overview",sidebar_position:1},p=void 0,d={unversionedId:"mesh-network/supported-transports",id:"mesh-network/supported-transports",isDocsHomePage:!1,title:"Overview",description:"export function Check() {",source:"@site/docs/common/mesh-network/supported-transports.mdx",sourceDirName:"mesh-network",slug:"/mesh-network/supported-transports",permalink:"/common/mesh-network/supported-transports",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/mesh-network/supported-transports.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Removing",permalink:"/common/concepts/remove"},next:{title:"Online Playground",permalink:"/common/mesh-network/online-playground"}},u=[{value:"About the network transports",id:"about-the-network-transports",children:[{value:"Bluetooth Low Energy",id:"bluetooth-low-energy",children:[],level:3},{value:"Apple Wireless Direct Link (AWDL)",id:"apple-wireless-direct-link-awdl",children:[],level:3},{value:"Wi-Fi Direct",id:"wi-fi-direct",children:[],level:3},{value:"Wi-Fi Aware",id:"wi-fi-aware",children:[],level:3},{value:"Local Area Network",id:"local-area-network",children:[],level:3},{value:"WebSockets",id:"websockets",children:[],level:3},{value:"Universal Serial Bus (USB)",id:"universal-serial-bus-usb",children:[],level:3}],level:2}];function k(){return(0,i.kt)(a.nQG,{style:{width:20,height:20,margin:"auto",display:"block"},mdxType:"CheckIcon"})}function m(){return(0,i.kt)(l.T39,{style:{width:20,height:20,margin:"auto",display:"block"},mdxType:"ClockIcon"})}var h={toc:u,Check:k,Clock:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following are the network transports supported by Ditto. By default Ditto will attempt to use all available transports if permissions are given."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(a.nQG,{style:{width:18,height:18},mdxType:"CheckIcon"})," Already supported in our current releases."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(l.T39,{style:{width:18,height:18},mdxType:"ClockIcon"})," Under development and will be released soon.")),(0,i.kt)("table",{class:"table table-bordered reference-document-table"},(0,i.kt)("thead",{class:"thead-dark"},(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"col"},"Transport"),(0,i.kt)("th",{scope:"col"},"iOS"),(0,i.kt)("th",{scope:"col"},"Android"),(0,i.kt)("th",{scope:"col"},"macOS"),(0,i.kt)("th",{scope:"col"},"Windows"),(0,i.kt)("th",{scope:"col"},"Linux"),(0,i.kt)("th",{scope:"col"},"Web Browser"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Bluetooth Low Energy (BLE)"),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Apple Wireless Direct Link (AWDL)"),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Wi-Fi Aware"),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Wi-Fi Direct"),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Local Area Network (LAN)"),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"WebSockets"),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Check"}))),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Universal Serial Bus (USB)"),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(m,{mdxType:"Clock"}))))),(0,i.kt)("h2",{id:"about-the-network-transports"},"About the network transports"),(0,i.kt)("p",null,"The following details specific information about each transport. Please read to fully understand how each platform behaves to align your expectations. We provide some ",(0,i.kt)("em",{parentName:"p"},"estimates")," of distances and bandwidth however the environment and hardware can greatly affect these numbers."),(0,i.kt)("h3",{id:"bluetooth-low-energy"},"Bluetooth Low Energy"),(0,i.kt)("p",null,"Ditto will use Bluetooth Low Energy (BLE) to form ",(0,i.kt)("strong",{parentName:"p"},"low-powered")," and ",(0,i.kt)("strong",{parentName:"p"},"high distance")," connections between devices. Depending on your device's chip, you may see some variation of distance and bandwidth. All devices that support Bluetooth Low Energy are fully capable of communicating with each other."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Devices can ",(0,i.kt)("em",{parentName:"li"},"discover")," each other at about 30m-60m away from each other but the connections can be sustained for further distances."),(0,i.kt)("li",{parentName:"ul"},"If your device is using a Bluetooth 4.0 chip, expect distances of 80 meters from point to point."),(0,i.kt)("li",{parentName:"ul"},"If your device i using a Bluetooth 5.x chip, expect impressive distances up to 130 meters from point to point.")),(0,i.kt)("p",null,"Most devices will have a Bluetooth 5.x chip if it was made during or after 2017. Bluetooth Low Energy is great for structured documents but performs poorly for large file sizes."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you intend to run Ditto on a Raspberry Pi or Linux device, ",(0,i.kt)("a",{parentName:"p",href:"/raspberrypi/installation"},"please follow the instructions to enable Bluetooth Low Energy support")))),(0,i.kt)("h3",{id:"apple-wireless-direct-link-awdl"},"Apple Wireless Direct Link (AWDL)"),(0,i.kt)("p",null,"Apple Wireless Direct Link (AWDL) is most known for powering ",(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT204144"},"AirDrop")," and is only supported on iOS and macOS devices. Apple Wireless Direct Link does not require an internet connection and is capable of communicating as long as the device Wi-Fi settings are turned on."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances are shorter than Bluetooth Low Energy with an average maximum of 35 meters from point-to-point."),(0,i.kt)("li",{parentName:"ul"},"However, the bandwidth is tremendously more powerful: capable of syncing 1 gigabyte of data in times as low as 8 seconds.")),(0,i.kt)("h3",{id:"wi-fi-direct"},"Wi-Fi Direct"),(0,i.kt)("p",null,"Wi-Fi Direct is supported on almost all Android (4.0 or higher, API Level 14 or higher) but only on some Windows 10 devices. P2P Wi-Fi Direct can achieve speeds as a fast as Apple Wireless Direct Link but unfortunately makes connections by requiring a permission alert to every new peer."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances can be achieved as far as 80 meters"),(0,i.kt)("li",{parentName:"ul"},"Can send 1 gigabyte of data in times as low as 8 seconds.")),(0,i.kt)("h3",{id:"wi-fi-aware"},"Wi-Fi Aware"),(0,i.kt)("p",null,"Wi-Fi aware is a new open standard introduced to Android devices that closely resembles Apple Wireless Direct Link in terms of distance and bandwidth. It is supported at the operating system level since Android 8, however not all Android manufacturers have enabled it at the hardware level."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances from point to point are approximately 40 meters"),(0,i.kt)("li",{parentName:"ul"},"It can sync 1 gigabyte files in as little as 8 seconds.")),(0,i.kt)("p",null,"In general most Google Pixel, Samsung, and LG phones built after 2018 can support Wi-Fi Aware. Other devices are being updated to include support. To check if your device can support Wi-Fi aware, ",(0,i.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=live.ditto.wifiawarechecker"},"download this app"),"."),(0,i.kt)("h3",{id:"local-area-network"},"Local Area Network"),(0,i.kt)("p",null,"If devices are connected over the same Wi-Fi access point or via some other means like an ethernet cable, they can take advantage of communicating over the LAN or Local Area Network."),(0,i.kt)("p",null,"Many enterprise or educational networks may have Client Isolation Mode turned ",(0,i.kt)("strong",{parentName:"p"},"ON"),". If the network has this setting ",(0,i.kt)("strong",{parentName:"p"},"ON"),' then devices are unable to discover each other and form a connection. Almost all "home" settings have this setting turned ',(0,i.kt)("strong",{parentName:"p"},"OFF"),'. Different router manufacturers refer to this feature in a wide variety of different ways, but it generally has "isolation" in its name.'),(0,i.kt)("p",null,"Ditto's discovery protocol also uses ",(0,i.kt)("strong",{parentName:"p"},"UDP multicasting"),", which needs to be enabled if you want devices to automatically discover each other. If you don't enable multicasting, you will need to ",(0,i.kt)("a",{parentName:"p",href:"./manual#connecting-to-a-remote-ditto-instance"},"manually configure the connections")," between peers."),(0,i.kt)("p",null,"There are some limitations affecting LAN sync on ",(0,i.kt)("strong",{parentName:"p"},"iOS devices"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS devices and desktop platforms like Windows will only sync if you have ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/forums/thread/663858"},"requested the multicast entitlement from Apple and applied it to your iOS app"),". Work is on the roadmap which will allow iOS devices to sync with all platforms, even without this entitlement."),(0,i.kt)("li",{parentName:"ul"},"iOS can always sync with other mobile devices like iOS and Android.")),(0,i.kt)("h3",{id:"websockets"},"WebSockets"),(0,i.kt)("p",null,"All devices support WebSocket connections. It is by far the most easily available network transports which require no permissions to work. In general, WebSockets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Require an internet connection for devices to communicate"),(0,i.kt)("li",{parentName:"ul"},"Cannot automatically discover each other like the other peer to peer transports.")),(0,i.kt)("p",null,"Devices need to specify an IP/PORT for a connection to be established. While most use cases require an internet connection. WebSockets can also work over the Local Area Network."),(0,i.kt)("h3",{id:"universal-serial-bus-usb"},"Universal Serial Bus (USB)"),(0,i.kt)("p",null,"If Ditto devices are active and share permissions for USB communication, Ditto will be able to form a wired connection between the two devices."))}f.isMDXComponent=!0}}]);
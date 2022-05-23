"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9957],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},230:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"1 - Enabling Kafka"},l="Enabling Kafka",p={unversionedId:"guides/kafka/intro",id:"guides/kafka/intro",isDocsHomePage:!1,title:"1 - Enabling Kafka",description:"The document change stream is a coarse user-consumable Kafka queue that allows you to react to changes made as documents are inserted, updated, or deleted from Ditto's Big Peer. You should use this in conjunction with the HTTP API.  Ditto supports connecting to Kafka and retrieving updates and events for your data through a Kafka topic.",source:"@site/docs/guides/kafka/1-intro.md",sourceDirName:"guides/kafka",slug:"/guides/kafka/intro",permalink:"/pr-preview/pr-202/guides/kafka/intro",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/kafka/1-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1 - Enabling Kafka"},sidebar:"tutorialSidebar",previous:{title:"Preventing SwiftUI Previews from Syncing",permalink:"/pr-preview/pr-202/guides/ios/preventing-swiftui-previews-from-syncing"},next:{title:"2 - Ditto events",permalink:"/pr-preview/pr-202/guides/kafka/consumer"}},c=[{value:"Installing Kafka",id:"installing-kafka",children:[],level:2},{value:"Handling credentials",id:"handling-credentials",children:[],level:2},{value:"Simple test",id:"simple-test",children:[],level:2}],u={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enabling-kafka"},"Enabling Kafka"),(0,i.kt)("p",null,"The document change stream is a coarse user-consumable Kafka queue that allows you to react to changes made as documents are inserted, updated, or deleted from Ditto's Big Peer. You should use this in conjunction with the HTTP API.  Ditto supports connecting to Kafka and retrieving updates and events for your data through a Kafka topic. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Kafka settings are only enabled if your Organization is on a dedicated cluster. Contact us if you are interested in this feature."))),(0,i.kt)("h2",{id:"installing-kafka"},"Installing Kafka"),(0,i.kt)("p",null,"If you aren't familiar with Kafka, first follow the instructions on ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/quickstart"},"Kafka Quickstart")," to try out basic Kafka locally. In this tutorial, we used scripts in the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory of ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka_2.13-3.1.0"),"."),(0,i.kt)("h2",{id:"handling-credentials"},"Handling credentials"),(0,i.kt)("p",null,'To connect to your Kafka instance, you need to have an SSL connection. In your organization page, click "Live Query Settings" and you will see the credentials for your cluster. Download the Cluster Certificate and User Certificate. Keep these files safe!'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Organization Apps > Your App Name > Live Query Settings > Kafka Connection Data")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kafka credentials",src:n(44021).Z})),(0,i.kt)("p",null,"Here is how these authentication tokens match to the Kafka configuration:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Ditto Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ssl.truststore.location")),(0,i.kt)("td",{parentName:"tr",align:null},"Cluster Certificate"),(0,i.kt)("td",{parentName:"tr",align:null},"The CA cert in PKCS12 format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ssl.truststore.password")),(0,i.kt)("td",{parentName:"tr",align:null},"Cluster certificate password"),(0,i.kt)("td",{parentName:"tr",align:null},"The password used to decrypt the CA Cert value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ssl.keystore.location")),(0,i.kt)("td",{parentName:"tr",align:null},"User Certificate"),(0,i.kt)("td",{parentName:"tr",align:null},"User cert in PKCS12 format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ssl.keystore.password")),(0,i.kt)("td",{parentName:"tr",align:null},"User certificate password"),(0,i.kt)("td",{parentName:"tr",align:null},"The password used to decrypt the user cert.")))),(0,i.kt)("h2",{id:"simple-test"},"Simple test"),(0,i.kt)("p",null,"You can use the following bash script to test out your cluster. Replace each variable with the corresponding information displayed in your app's live query settings."),(0,i.kt)("p",null,"If it's working, you won't see any errors and the script will not shut down. Leave this script running in a terminal, and open a new terminal for the next section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"CLUSTER_CERT_LOCATION=/path/to/cluster.p12\nCLUSTER_CERT_PW=<YOUR_CLUSTER_CERT_PASSWORD>\n\nUSER_CERT_LOCATION=/path/to/user.p12\nUSER_CERT_PW=<YOUR_USER_CERT_PASSWORD>\n\nCLOUD_ENDPOINT=<YOUR_ENDPOINT>\nTOPIC=<YOUR_TOPIC>\n\nKAFKA=/path/to/kafka_2.13-3.1.0\n\n$KAFKA/bin/kafka-console-consumer.sh \\\n --bootstrap-server $CLOUD_ENDPOINT \\\n --consumer-property security.protocol=SSL \\\n --consumer-property ssl.truststore.password=$CLUSTER_CERT_PW \\\n --consumer-property ssl.truststore.location=$CLUSTER_CERT_LOCATION \\\n --consumer-property ssl.keystore.password=$USER_CERT_PW \\\n --consumer-property ssl.keystore.location=$USER_CERT_LOCATION \\\n --group $TOPIC \\\n --topic $TOPIC \n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Kafka ",(0,i.kt)("inlineCode",{parentName:"p"},"Group")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Topic")," should both be set to the same string displayed in the Ditto portal."))))}d.isMDXComponent=!0},44021:function(e,t,n){t.Z=n.p+"assets/images/kafka-browser-fc06d4e4570b17e09d3b114112159160.png"}}]);
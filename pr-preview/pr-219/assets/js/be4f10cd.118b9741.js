"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9387],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12395:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],d={title:"Using Ditto with Codable Support",sidebar_position:1},l=void 0,s={unversionedId:"guides/ios/codables",id:"guides/ios/codables",isDocsHomePage:!1,title:"Using Ditto with Codable Support",description:"This section requires DittoSwift version 1.0.14 or higher. To install a higher version use the following line in your Podfile",source:"@site/docs/guides/ios/codables.md",sourceDirName:"guides/ios",slug:"/guides/ios/codables",permalink:"/pr-preview/pr-219/guides/ios/codables",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/ios/codables.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using Ditto with Codable Support",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Schemas",permalink:"/pr-preview/pr-219/datamodel/schemas"},next:{title:"Animating UITableView with the Observe API",permalink:"/pr-preview/pr-219/guides/ios/uitableview-animations-with-observe"}},p=[{value:"Decoding <code>DittoDocument</code> into <code>Codable</code>",id:"decoding-dittodocument-into-codable",children:[],level:3},{value:"Inserting a <code>DittoDocument</code> via <code>Codable</code>",id:"inserting-a-dittodocument-via-codable",children:[],level:3},{value:"Inserting a Document via <code>Codable</code> with an autogenerated <code>_id</code>",id:"inserting-a-document-via-codable-with-an-autogenerated-_id",children:[],level:3},{value:"Inserting a Document with a <code>Codable</code> <code>_id</code> property (composite key)",id:"inserting-a-document-with-a-codable-_id-property-composite-key",children:[],level:3},{value:"Querying with <code>Codable</code> query parameters (<code>findByID</code> and <code>find</code>)",id:"querying-with-codable-query-parameters-findbyid-and-find",children:[],level:3},{value:"Updating",id:"updating",children:[],level:3},{value:"Deleting and Evicting",id:"deleting-and-evicting",children:[],level:3},{value:"Dealing with mismatched, missing, or defaulting to certain values.",id:"dealing-with-mismatched-missing-or-defaulting-to-certain-values",children:[{value:"Example with BetterCodable library.",id:"example-with-bettercodable-library",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This section requires DittoSwift version 1.0.14 or higher. To install a higher version use the following line in your Podfile"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="Podfile"',title:'"Podfile"'},"pod 'DittoSwift', '>=1.0.14'\n")))),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"DittoSwift")," adds support for Foundaton Framework's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/archives_and_serialization/encoding_and_decoding_custom_types"},(0,r.kt)("inlineCode",{parentName:"a"},"Codable"))," types. This means that it's extremely easy to use static typed structs and classes to serialize and deserialized ",(0,r.kt)("inlineCode",{parentName:"p"},"DittoDocument")," types in your Swift application."),(0,r.kt)("p",null,"For example, let's say we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," struct that represents a ",(0,r.kt)("inlineCode",{parentName:"p"},"DittoDocument")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cars")," collection. First, ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"struct Car")," adheres to ",(0,r.kt)("inlineCode",{parentName:"p"},"Codable"),". Then add your properties that you know you'll use throughout your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=Car.swift",title:"Car.swift"},"import Foundation\n\nstruct Car: Codable {\n  var _id: String\n  var name: String\n  var mileage: Double\n  var tags: [String]\n}\n")),(0,r.kt)("h3",{id:"decoding-dittodocument-into-codable"},"Decoding ",(0,r.kt)("inlineCode",{parentName:"h3"},"DittoDocument")," into ",(0,r.kt)("inlineCode",{parentName:"h3"},"Codable")),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"DittoDocument")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DittoMutableDocument")," types can be decoded to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Codable")," type using the: ",(0,r.kt)("inlineCode",{parentName:"p"},"typed(as: Codable.self).value"),". This method ",(0,r.kt)("em",{parentName:"p"},"can throw an error")," if decoding failed for some reason. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let documents: [DittoDocument] = ditto.store["cars"].findAll().exec()\ndo {\n  let cars: [Car] = try collection.findAll().exec().map({ try $0.typed(as: Car.self).value })\n} catch(let err) {\n  print(err.localizedDescription)\n}\n')),(0,r.kt)("h3",{id:"inserting-a-dittodocument-via-codable"},"Inserting a ",(0,r.kt)("inlineCode",{parentName:"h3"},"DittoDocument")," via ",(0,r.kt)("inlineCode",{parentName:"h3"},"Codable")),(0,r.kt)("p",null,"Once your ",(0,r.kt)("inlineCode",{parentName:"p"},"Car: Codable")," type is defined, you can construct an instance an ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," the document value "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let car = Car(_id: "123abc", name: "Ford", mileage: 45000, tags: ["A", "B", "C"])\nlet insertedId = try! ditto.store["cars"].insert(car)\nprint(insertedId.value) // "616f529700a262fb00b88425"\n\n// We can retrieve our car object by decoding it with `.typed`\nlet foundCar: Car? = try! collection.findByID(insertedId).exec()?.typed(as: Car.self).value\n')),(0,r.kt)("h3",{id:"inserting-a-document-via-codable-with-an-autogenerated-_id"},"Inserting a Document via ",(0,r.kt)("inlineCode",{parentName:"h3"},"Codable")," with an autogenerated ",(0,r.kt)("inlineCode",{parentName:"h3"},"_id")),(0,r.kt)("p",null,"If you want to rely on ",(0,r.kt)("inlineCode",{parentName:"p"},"Ditto")," to generate an ",(0,r.kt)("inlineCode",{parentName:"p"},"_id"),", ensure that your ",(0,r.kt)("inlineCode",{parentName:"p"},"Codable")," type as ",(0,r.kt)("inlineCode",{parentName:"p"},"String!")," type for the ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import Foundation\n\nstruct Car: Codable {\n  var _id: String! // or you can use String? \n  var name: String\n  var mileage: Double\n  var tags: [String]\n}\n")),(0,r.kt)("p",null,"Now you can insert a document by omitting the ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," parameter while filling out the other properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let car = Car(name: "Ford", mileage: 45000, tags: ["A", "B", "C"])\nlet insertedId = try! ditto.store["cars"].insert(car)\nprint(insertedId.value) // "616f529700a262fb00b88425"\n')),(0,r.kt)("h3",{id:"inserting-a-document-with-a-codable-_id-property-composite-key"},"Inserting a Document with a ",(0,r.kt)("inlineCode",{parentName:"h3"},"Codable")," ",(0,r.kt)("inlineCode",{parentName:"h3"},"_id")," property (composite key)"),(0,r.kt)("p",null,"The great thing about Ditto's ",(0,r.kt)("inlineCode",{parentName:"p"},"Codable")," support is that we get composite keys support out of the box. Composite keys are ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," types which have multiple values that define it's uniqueness. For example let's say we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderLineItem: Codable"),". This represents a line item in a receipt. It's uniqueness of an ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderLineItem")," is on a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"orderId: String")," and a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"productId: String"),". "),(0,r.kt)("p",null,"We can now define our structs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"struct OrderLineItem: Codable {\n  \n  struct OrderLineItemId: Codable {\n    var orderId: String\n    var productId: Int\n  }\n  \n  var _id: OrderLineItemId\n  var quantity: Int\n  var price: Double\n}\n")),(0,r.kt)("p",null,"Now you can insert a document with your strongly typed structs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let _id = OrderLineItem.OrderLineItemId(orderId: "456abc", productId: 56)\nlet orderLineItem = OrderLineItem(_id: _id, quantity: 5, price: 12)\ntry! ditto.store["orderLineItems"].insert(orderLineItem)\n')),(0,r.kt)("h3",{id:"querying-with-codable-query-parameters-findbyid-and-find"},"Querying with ",(0,r.kt)("inlineCode",{parentName:"h3"},"Codable")," query parameters (",(0,r.kt)("inlineCode",{parentName:"h3"},"findByID")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"find"),")"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Codable")," support also exists in our ",(0,r.kt)("inlineCode",{parentName:"p"},"findByID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," APIs."),(0,r.kt)("p",null,"Like our example above, you can pass in an ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderLineItemId: Codable")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"findByID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let _id = OrderLineItem.OrderLineItemId(orderId: "456abc", productId: 56)\nlet orderLineItem: OrderLineItem? = ditto.store["orderLineItems"].findByID(_id).exec()\n')),(0,r.kt)("p",null,"In version v1.0.14, we've also added support for ",(0,r.kt)("inlineCode",{parentName:"p"},"Codable")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"find(args:)")," parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let _idA = OrderLineItem.OrderLineItemId(orderId: "456abc", productId: 56)\nlet _idB = OrderLineItem.OrderLineItemId(orderId: "456abc", productId: 56)\nditto.store["orderLineItems"].find("contains(args._ids, _id)", args: [\n  "_ids": [_idA, _idB]\n])\n')),(0,r.kt)("h3",{id:"updating"},"Updating"),(0,r.kt)("p",null,"We have yet to add the ability to update a document via a ",(0,r.kt)("inlineCode",{parentName:"p"},"Codable")," type. For now your application must use the standard ",(0,r.kt)("inlineCode",{parentName:"p"},".update")," APIs like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.store["cars"].findByID("123abc").update({ mutableDoc in \n   mutableDoc?["mileage"] = 6000\n})\n')),(0,r.kt)("h3",{id:"deleting-and-evicting"},"Deleting and Evicting"),(0,r.kt)("p",null,"Since querying with codables is supported, delete and eviction support comes for free. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let _id = OrderLineItem.OrderLineItemId(orderId: "456abc", productId: 56)\nditto.store["orderLineItems"].findByID(_id).remove()\n// or \nditto.store["orderLineItems"].findByID(_id).evict()\n')),(0,r.kt)("h2",{id:"dealing-with-mismatched-missing-or-defaulting-to-certain-values"},"Dealing with mismatched, missing, or defaulting to certain values."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/datamodel/schemas"},"guide for data modeling schemas")," for more ideas on how to approach this problem."))),(0,r.kt)("p",null,"Since Ditto is an eventually consistent database, keys may or may not exist since multiple peers can edit the data over the lifetime of a Document's existence. This can cause throw errors with decoding values in Swift. ",(0,r.kt)("inlineCode",{parentName:"p"},"DittoSwift")," uses the default ",(0,r.kt)("inlineCode",{parentName:"p"},"Foundation")," API's Decoding behavior which will fail if any keys are mismatched on type or existence."),(0,r.kt)("p",null,"For example it's very possible that ",(0,r.kt)("strong",{parentName:"p"},"peer A creates a document like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=Peer A insertion",title:"Peer",A:!0,insertion:!0},'try! ditto.store["cars"].insert([\n  "_id": "123abc",\n  "name": "Honda",\n  "mileage": 4500,\n  "tags": ["a", "z", "g"]\n])\n')),(0,r.kt)("p",null,"And ",(0,r.kt)("strong",{parentName:"p"},"peer B creates a document without the mileage key:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=Peer B insertion",title:"Peer",B:!0,insertion:!0},'try! ditto.store["cars"].insert([\n  "_id": "123abc",\n  "name": "Honda",\n  "tags": ["a", "z", "g"]\n])\n')),(0,r.kt)("p",null,"In order to handle this situation, we recommend that you use ",(0,r.kt)("strong",{parentName:"p"},"an additional library")," to handle key mismatches. Some of these libraries are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/marksands/BetterCodable"},"BetterCodable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gonzalezreal/DefaultCodable"},"DefaultCodable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GottaGetSwifty/CodableWrappers"},"CodableWrappers"))),(0,r.kt)("h3",{id:"example-with-bettercodable-library"},"Example with ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/marksands/BetterCodable"},(0,r.kt)("inlineCode",{parentName:"a"},"BetterCodable"))," library."),(0,r.kt)("p",null,"Our favorite library to help prevent runtime errors of mismatched keys and values is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marksands/BetterCodable"},"BetterCodable"),". "),(0,r.kt)("p",null,"You can install ",(0,r.kt)("inlineCode",{parentName:"p"},"BetterCodable")," along ",(0,r.kt)("inlineCode",{parentName:"p"},"DittoSwift")," by adding the dependency in your Podfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="Podfile"',title:'"Podfile"'},"pod 'DittoSwift', '>=1.0.14'\npod 'BetterCodable'\n")),(0,r.kt)("p",null,"To prevent a runtime error with a missing ",(0,r.kt)("inlineCode",{parentName:"p"},"mileage")," key, we can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultCodableStrategy")," and attach it as an annotation to the mileage property. The strategy will default to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Double")," value of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," if the key is either missing or mismatched."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import BetterCodable\n\nstruct NoMileage: DefaultCodableStrategy {\n    static var defaultValue: Double { return 0 }\n}\n\nstruct Car: Codable {\n  var _id: String\n  var name: String\n  @DefaultCodable<NoMileage> var mileage: Double\n  var tags: [String]\n}\n")),(0,r.kt)("p",null,"For more information visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marksands/BetterCodable"},"https://github.com/marksands/BetterCodable")," and read the documentation for more functionality."))}m.isMDXComponent=!0}}]);
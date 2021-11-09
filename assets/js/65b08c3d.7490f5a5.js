"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1608],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},49366:function(e,t,a){var n=a(67294),r=a(80944),o=a(86010);t.Z=function(e){var t,a=e.lazy,l=(e.block,e.defaultValue),i=e.values,s=e.groupId,c=(e.className,n.Children.toArray(e.children)),p=null!=i?i:c.map((function(e){return{value:e.props.value,label:e.props.label}})),u=null!=l?l:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,d=(0,r.Z)(),m=d.tabGroupChoices,g=d.setTabGroupChoices,k=(0,n.useState)(u),f=k[0],v=k[1];if(null!=s){var h=m[s];null!=h&&h!==f&&p.some((function(e){return e.value===h}))&&v(h)}var y=function(e){v(e),null!=s&&g(s,e)};return n.createElement("div",{className:"tabs-container"},n.createElement("div",{className:"sm:hidden"},n.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),n.createElement("select",{id:"tabs",name:"tabs",value:f,onChange:function(e){return y(e.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},p.map((function(e){var t=e.value,a=e.label;return n.createElement("option",{value:t,key:t},null!=a?a:t)})))),n.createElement("div",{className:"hidden sm:block"},n.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},p.map((function(e){var t=e.value,a=e.label;return n.createElement("button",{key:t,onClick:function(){return y(t)},className:(0,o.Z)(f===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":f===t?"page":void 0},null!=a?a:t)})))),a?(0,n.cloneElement)(c.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},47839:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return g}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=a(49366),i=a(30547),s=["components"],c={title:"Querying",sidebar_position:3},p=void 0,u={unversionedId:"concepts/querying",id:"concepts/querying",isDocsHomePage:!1,title:"Querying",description:"Ditto provides a robust query engine that supports different filter operations. At a high-level, all queries work on a specific collection and are used to filter the collection. In addition, since Ditto works with data represented in JSON-compatible documents, the query syntax offers dot notation to reference keys within the document tree as shown below:",source:"@site/docs/concepts/querying.md",sourceDirName:"concepts",slug:"/concepts/querying",permalink:"/concepts/querying",editUrl:"https://github.com/getditto/docs/edit/master/docs/concepts/querying.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Querying",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Insert, Update and Remove",permalink:"/concepts/insert-update-remove"},next:{title:"Syncing Data (Live Queries)",permalink:"/concepts/syncing-data"}},d=[{value:"Navigating Document Properties",id:"navigating-document-properties",children:[],level:2},{value:"Using query variables with <code>$args</code>",id:"using-query-variables-with-args",children:[],level:2},{value:"Query Conditions",id:"query-conditions",children:[{value:"Equality <code>==</code>, Inequality",id:"equality--inequality",children:[],level:3},{value:"Comparisons - Greater Or Less Than <code>&gt;=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&lt;=</code>",id:"comparisons---greater-or-less-than----",children:[],level:3},{value:"Compound - And <code>&amp;&amp;</code>, Or <code>||</code>, Not <code>!</code>, Contains <code>contains</code>",id:"compound---and--or--not--contains-contains",children:[],level:3},{value:"Array Operations",id:"array-operations",children:[],level:3},{value:"String Operations",id:"string-operations",children:[],level:3}],level:2},{value:"Sort",id:"sort",children:[],level:2},{value:"Limit",id:"limit",children:[],level:2}],m={toc:d};function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ditto provides a robust query engine that supports different filter operations. At a high-level, all queries work on a specific collection and are used to filter the collection. In addition, since Ditto works with data represented in JSON-compatible documents, the query syntax offers dot notation to reference keys within the document tree as shown below:"),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const collection = await ditto.store.collection('people')\n    .find(\"favoriteBooks[0].title == 'The Great Gatsby'\")\n\n"))),(0,o.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let collection = ditto.store.collection("people")\n    .find("favoriteBooks[0].title == \'The Great Gatsby\'")\n    .exec()\n\n'))),(0,o.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'NSArray *docs = [[[ditto.store collection:@"people"]\n                    find:@"favoriteBooks[0].title == \'The Great Gatsby\'"] exec];\n\n'))),(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val results = ditto.store.collection("people")\n    .find("favoriteBooks[0].title == \'The Great Gatsby\'")\n    .exec()\n\n'))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<DittoDocument> results = ditto.store.collection("people")\n    .find("favoriteBooks[0].title == \'The Great Gatsby\'")\n    .exec();\n\n'))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var results = ditto.Store.Collection("people")\n    .Find("favoriteBooks[0].title == \'The Great Gatsby\'")\n    .Exec();\n\n'))),(0,o.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'std::vector<Document> results = ditto.store.collection("people")\n    .find("favoriteBooks[0].title == \'The Great Gatsby\'")\n    .exec();\n\n'))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let docs = ditto.store().collection("people")\n.find("favoriteBooks[0].title == \\\'The Great Gatsby\\\'")\n.exec()?;\n')))),(0,o.kt)("h2",{id:"navigating-document-properties"},"Navigating Document Properties"),(0,o.kt)("p",null,"To refer to keys within the document's property tree, Ditto uses dot notation that should be familiar to most developers. Let's say we have a document like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "_id": "123abc",\n   "name": { "first": "Alan", "last": "Turing" },\n   "contact": { "phone": { "type": "cell", "number": "111-222-3333" } },\n   "work": { "street-line": "678 Johnson Street"}\n}\n')),(0,o.kt)("p",null,"If you wanted to query for the ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName")," property nested in ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," with the following document contents"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"find(\"name.last == 'Turing'\")\n")),(0,o.kt)("p",null,"Keys in the query syntax by default must be alphanumeric or include underscore (a-zA-Z0-9",(0,o.kt)("em",{parentName:"p"},"). In addition, the key must start with an alpha characters first (a-zA-Z"),"). If your key uses another character, such as a hyphen, you must use a ",(0,o.kt)("strong",{parentName:"p"},"brack syntax"),". To query for th ",(0,o.kt)("inlineCode",{parentName:"p"},'"street-line"')," property underneath ",(0,o.kt)("inlineCode",{parentName:"p"},'"work"'),", you will need to do the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"find(\"work['street-line'] == '678 Johnson Street'\")\n")),(0,o.kt)("h2",{id:"using-query-variables-with-args"},"Using query variables with ",(0,o.kt)("inlineCode",{parentName:"h2"},"$args")),(0,o.kt)("p",null,"Often, you will query with runtime variables. Instead of building or interpolating query strings, the query system will accept variables through an ",(0,o.kt)("inlineCode",{parentName:"p"},"$args")," dictionary object. "),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const documents = await ditto.store.collection(\'users\').find("name == $args.name && age <= $args.age", {\n  age: 32,\n  name: "Max"\n})\n'))),(0,o.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let documents = ditto.store["users"].find("name == $args.name && age <= $args.age", [\n  "age": 32,\n  "name": "Max"\n]).exec()\n'))),(0,o.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'let documents = ditto.store["users"].find("name == $args.name && age <= $args.age", [\n  "age": 32,\n  "name": "Max"\n]).exec()\n'))),(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val foundDocs = ditto.store.collection("users")\n    .find("name == $args.name && age <= $args.age", mapOf("name" to "max", "age" to 32))\n'))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> queryArgs = new HashMap<>();\n        queryArgs.put("name", "max");\n        queryArgs.put("age", 32);\n\nList<DittoDocument> foundDocs = ditto.store.collection("users")\n        .find("name == $args.name && age <= $args.age", queryArgs)\n        .exec();\n'))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var docs = ditto.store\n  .collection("users")\n  .Find(\n    "name == $args.name && age <= $args.age", \n    new Dictionary<string, object> { { "name", "max"}, {"age", 32 } })\n  .Exec();\n'))),(0,o.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'std::vector<json> big_c_values =\n      ditto.store.collection.find("name == $args.name && age <= $args.age", json({{"age", 32}, {"name", "max"}}))\n          .exec();\n'))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let query_args = QueryArgs{...};\nlet docs = ditto.store().collection("people")?\n  .find_with_args("name == $args.name && arg <= $args.age", &args)\n  .exec()?;\n')))),(0,o.kt)("h2",{id:"query-conditions"},"Query Conditions"),(0,o.kt)("p",null,"The Ditto query language is very similar to what you'd write in most ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statements. In addition, we offer standard, easy-to-understand query condition operators that most developers should understand."),(0,o.kt)("h3",{id:"equality--inequality"},"Equality ",(0,o.kt)("inlineCode",{parentName:"h3"},"=="),", Inequality"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// finds documents which have a title equal to Harry Potter.\nfind(\"title == $args.title\", { title: 'Harry Potter' })\n\n// finds documents which that are not of the title Lord of the Rings\nfind(\"title != $args.title\", { title: 'Lord of the rings' })\n")),(0,o.kt)("h3",{id:"comparisons---greater-or-less-than----"},"Comparisons - Greater Or Less Than ",(0,o.kt)("inlineCode",{parentName:"h3"},">="),", ",(0,o.kt)("inlineCode",{parentName:"h3"},">"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"<"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"<=")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds documents where the age is less than or equal to 18\nfind("age <= $args.age", { age: 18})\n// finds documents where the age is less than to 18\nfind("age < $args.age", { age: 18})\n// finds documents where the age is greater than or equal to 18\nfind("age >= $args.age", { age: 18})\n// finds documents where the age is greater than to 18\nfind("age > $args.age", { age: 18})\n')),(0,o.kt)("h3",{id:"compound---and--or--not--contains-contains"},"Compound - And ",(0,o.kt)("inlineCode",{parentName:"h3"},"&&"),", Or ",(0,o.kt)("inlineCode",{parentName:"h3"},"||"),", Not ",(0,o.kt)("inlineCode",{parentName:"h3"},"!"),", Contains ",(0,o.kt)("inlineCode",{parentName:"h3"},"contains")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," for a logical ",(0,o.kt)("strong",{parentName:"p"},"and")," Predicate; similar to SQLite's AND"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds documents that have a theme property equal to "Dark" and a name property equaly to "Light"\nfind("theme == \'Dark\' && name == \'Light\'")\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"||")," for a logical ",(0,o.kt)("strong",{parentName:"p"},"or")," predicate; similar to SQL OR statements"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds documents that are "Tom" or not "Arthur"\nfind("name == \'Tom\' || name == \'Arthur\'")\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"!")," for a logical ",(0,o.kt)("strong",{parentName:"p"},"not")," predicate; similar to SQL NOT statements"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds documents that are not "Hamilton" or not "Morten"\nfind("!(name == \'Hamilton\' || name == \'Morten\')")\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"contains(array, value)")," to check an if an array contains a value. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// finds documents who have a `connectionType` property and checks if it equals any of the values in a defined array\nfind(\"contains(['bluetooth', 'wifidirect'], connectionType)\")\n")),(0,o.kt)("h3",{id:"array-operations"},"Array Operations"),(0,o.kt)("p",null,"For the following examples assume a document structure like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": "123abc",\n  "books": [\n    { "title": "Harry Potter" },\n    { "title": "Lord of the Rings" },\n    { "title": "Game of Thrones" }\n  ],\n  "tags": ["fantasy", "novel"],\n  "scores": [12, 14]\n}\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"array[index]")," to access a specific index of an array property. Let's say we have a document that looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds the first book property under "books" and checks for the "title" property\nfind("books[0].title == \'Harry Potter\'")\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"length(propertyPath)")," to return an integer value that represents the size of the array"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds books that have at least 2 tags\nfind("length(tags) >= 2")\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"sum(propertyPath)")," to return a summation float that represents the sum of the array values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds documents who have a sum of all their scores to be less than 10\nfind("sum(scores) < 10")\n')),(0,o.kt)("h3",{id:"string-operations"},"String Operations"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"beginsWith(property, test)")," to test if a property with a string value ",(0,o.kt)("strong",{parentName:"p"},"begins")," with a test string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds documents with a title property that begins with "Lord"\nfind("beginsWith(title, \'Lord\')")\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"endsWith(property, test)")," to test if a property with a string value ",(0,o.kt)("strong",{parentName:"p"},"ends")," with a test string"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds documents with a title property that begins with "Lord"\nfind("endsWith(title, \'Rings\')")\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"regex(property, test)")," to see if a property with a string value passes a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"Regular Expression. Click here for a reference"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// finds documents which has a title property that only comprises of upper and lowercase letters, numbers, and underscores. \nfind("regex(title, \'^([A-Za-z]|[0-9]|_)+$\')")\n\n// A title property of "abc129_24A" will pass\n// A title property of "abc129_24A  3" will not pass\n')),(0,o.kt)("h2",{id:"sort"},"Sort"),(0,o.kt)("p",null,"Before executing a query, you can specify to sort on a specific property. Call ",(0,o.kt)("inlineCode",{parentName:"p"},"sort")," before a query is executed by specifying a specific property and a sort direction. "),(0,o.kt)("p",null,"Note: Queries that do not specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"sort")," will assume to sort on the ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," property."),(0,o.kt)("p",null,"The following example will sort on documents that have a mileage property"),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const sortedRedCars = await ditto.store.collection('cars')\n    .find(\"color == 'red'\")\n    .sort('miles', 'ascending')\n"))),(0,o.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let sortedRedCars = ditto.store.collection("cars")\n    .find("color == \'red\'")\n    .sort("miles", direction: .ascending)\n    .exec()\n'))),(0,o.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'NSArray *sortedRedCars = [[[[ditto.store collection:@"cars"]\n                  find:@"color == \'red\'"]\n                  sort:@"miles" direction:DITSortDirectionAscending] exec];\n'))),(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val sortedRedCars = ditto.store.collection("cars")\n    .find("color == \'red\'")\n    .sort("miles", DittoSortDirection.Ascending)\n    .exec()\n'))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<DittoDocument> sortedRedCars = ditto.store.collection("cars")\n    .find("color == \'red\'")\n    .sort("miles", DittoSortDirection.Ascending)\n    .exec();\n'))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var sortedCars = ditto.Store.Collection("cars")\n    .Find("color == \'red\'")\n    .Sort("miles", direction: DittoSortDirection.Ascending)\n    .Exec();\n'))),(0,o.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'std::vector<Document> sorted_and_limited_red_cars = ditto.store.collection("cars")\n    .find("color == \'red\'")\n    .sort("miles", SortDirection::ascending)\n    .limit(100)\n    .exec();\n'))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let results = ditto.store().collection("cars").find("color == \\\'red\\\'")\n  .sort("miles", SortDirection::Ascending)\n  .limit(100)\n  .exec()?;\n')))),(0,o.kt)("h2",{id:"limit"},"Limit"),(0,o.kt)("p",null,"There are times where you need to limit the number of results that a query. Call ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," before the query is executed to trim the number of results. This is best used with ",(0,o.kt)("inlineCode",{parentName:"p"},"sort"),"."),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const sortedAndLimitedRedCars = await ditto.store.collection('cars')\n    .find(\"color == 'red'\")\n    .sort('miles', 'ascending')\n    .limit(100)\n"))),(0,o.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let sortedAndLimitedRedCars = ditto.store.collection("cars")\n    .find("color == \'red\'")\n    .sort("miles", direction: .ascending)\n    .limit(100)\n    .exec()\n'))),(0,o.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'NSArray *sortedAndLimitedRedCars = [[[[[ditto.store collection:@"cars"]\n                  find:@"color == \'red\'"]\n                  sort:@"miles" direction:DITSortDirectionAscending]\n                  limit:100] exec];\n'))),(0,o.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val sortedAndLimitedRedCars = ditto.store.collection("cars")\n    .find("color == \'red\'")\n    .sort("miles", DittoSortDirection.Ascending)\n    .limit(100)\n    .exec()\n'))),(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'List<DittoDocument> sortedAndLimitedRedCars = ditto.store.collection("cars")\n    .find("color == \'red\'")\n    .sort("miles", DittoSortDirection.Ascending)\n    .limit(100)\n    .exec();\n'))),(0,o.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var sortedAndLimitedRedCars = ditto.Store.Collection("cars")\n    .Find("color == \'red\'")\n    .Sort("miles", direction: DittoSortDirection.Ascending)\n    .Limit(100).Exec();\n'))),(0,o.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'std::vector<Document> sorted_and_limited_red_cars = ditto.store.collection("cars")\n    .find("color == \'red\'")\n    .sort("miles", SortDirection::ascending)\n    .limit(100)\n    .exec();\n'))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let results = ditto.store().collection("cars").find("color == \\\'red\\\'")\n  .sort("miles", SortDirection::Ascending)\n  .limit(100)\n  .exec()?;\n')))))}g.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);
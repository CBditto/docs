"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7071],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58386:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"Android Kotlin",sidebar_position:2},l=void 0,c={unversionedId:"guides/testing/kotlin",id:"guides/testing/kotlin",isDocsHomePage:!1,title:"Android Kotlin",description:"To test Ditto using kotlin, we provide you with some basic convenience functions",source:"@site/docs/guides/testing/kotlin.mdx",sourceDirName:"guides/testing",slug:"/guides/testing/kotlin",permalink:"/pr-preview/pr-219/guides/testing/kotlin",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/testing/kotlin.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Android Kotlin",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/pr-preview/pr-219/guides/testing/overview"},next:{title:"SwiftUI",permalink:"/pr-preview/pr-219/guides/testing/iOS"}},d=[{value:"Create custom directories",id:"create-custom-directories",children:[],level:3},{value:"Provide the context from the <code>InstrumentationRegistry</code>",id:"provide-the-context-from-the-instrumentationregistry",children:[],level:3},{value:"Initialize ditto",id:"initialize-ditto",children:[],level:3},{value:"Create your test file",id:"create-your-test-file",children:[],level:3},{value:"Listen for changes to data",id:"listen-for-changes-to-data",children:[],level:3},{value:"Clean up",id:"clean-up",children:[],level:3},{value:"Full example",id:"full-example",children:[],level:3}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To test Ditto using kotlin, we provide you with some basic convenience functions\nyou can use to get started."),(0,r.kt)("p",null,"For code that you can use in your project, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/testing/android/"},"see the example on GitHub"),"."),(0,r.kt)("h3",{id:"create-custom-directories"},"Create custom directories"),(0,r.kt)("p",null,"Each instance of Ditto should use a different directoriy. You can extend\n",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultAndroidDittoDependencies")," to provide a custom directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Implementation of `AndroidDittoDependencies` which uses a custom `persistenceDirectory`.\n */\ndata class CustomDirectoryAndroidDittoDependencies constructor(\n    private val androidDittoDependencies: DefaultAndroidDittoDependencies,\n    private val customDir: File\n): AndroidDittoDependencies {\n\n    override fun persistenceDirectory(): String {\n        return customDir.path\n    }\n\n    override fun ensureDirectoryExists(path: String) {\n        androidDittoDependencies.ensureDirectoryExists(path)\n    }\n\n    override fun context(): Context {\n        return androidDittoDependencies.context()\n    }\n\n}\n")),(0,r.kt)("h3",{id:"provide-the-context-from-the-instrumentationregistry"},"Provide the context from the ",(0,r.kt)("inlineCode",{parentName:"h3"},"InstrumentationRegistry")),(0,r.kt)("p",null,"Ditto needs the current context, which can be retrieved as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nimport androidx.test.platform.app.InstrumentationRegistry\nimport java.io.File\n\n/**\n  * Creates a set of Android dependencies combining defaults with a custom directory.\n  */\nfun dependenciesWithCustomDirectory(customDir: File): DittoDependencies {\n    val context: Context = InstrumentationRegistry.getInstrumentation().targetContext\n    val dependencies = DefaultAndroidDittoDependencies(context)\n    return CustomDirectoryAndroidDittoDependencies(dependencies, customDir)\n}\n")),(0,r.kt)("h3",{id:"initialize-ditto"},"Initialize ditto"),(0,r.kt)("p",null,"You can create a default identity -- we use ",(0,r.kt)("inlineCode",{parentName:"p"},"offlinePlayground")," here, but you\nshould test with whatever identity you are using in production."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val const testLicense = "YOUR_LICENSE_HERE"\n\n@JvmOverloads\nfun getDitto(\n    dependencies: DittoDependencies,\n    identity: DittoIdentity = DittoIdentity.OfflinePlayground(dependencies),\n    offlineLicense: String? = testLicense,\n): Ditto {\n    val ditto = Ditto(dependencies, identity)\n    offlineLicense?.let {\n        ditto.setOfflineOnlyLicenseToken(it)\n    }\n    return ditto\n}\n\n')),(0,r.kt)("h3",{id:"create-your-test-file"},"Create your test file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize two ditto instances with different directories."),(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"tryStartSync()")," on both instances.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'package live.ditto.dittotesting\n\nimport org.junit.Assert.assertEquals\nimport org.junit.Test\nimport java.io.File\n\n\nclass ExampleDittoTest () {\n    @Test\n    fun twoDittos() {\n        val ditto1 = getDitto(dependenciesWithCustomDirectory(File(getWorkDir(), "ditto1")))\n        val ditto2 = getDitto(dependenciesWithCustomDirectory(File(getWorkDir(), "ditto2")))\n\n        ditto1.tryStartSync()\n        ditto2.tryStartSync()\n    }\n}\n')),(0,r.kt)("h3",{id:"listen-for-changes-to-data"},"Listen for changes to data"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"observe()"),", we listen to changes to data. We write tests as a response to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"observe()")," function based on what we expect to happen."),(0,r.kt)("p",null,"The tests should reside within the callback so that they properly test the\nstate of the database ",(0,r.kt)("strong",{parentName:"p"},"after")," syncronization has completed. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'...\nval coll1 = ditto1.store.collection("cars")\nval coll2 = ditto2.store.collection("cars")\nval docId = coll1.upsert(mapOf(\n    "make" to "toyota",\n    "mileage" to 160000\n))\nval liveQuery = coll2.findById(docId).observe { doc, event ->\n    if (!event.isInitial) {\n        assertEquals(doc["make"], "toyota")\n    }\n}\n')),(0,r.kt)("h3",{id:"clean-up"},"Clean up"),(0,r.kt)("p",null,"Don't forget to clean up between tests. This can also be implemented as part of a base test class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'//highlight-start\n@JvmOverloads\nfun clearUpDittoDirectories(context: Context, customDir: String) {\n    val dittoDir = File(customDir)\n    dittoDir.deleteRecursively()\n}\n//highlight-end\n\n\n@Test\nfun twoDittos() {\n    val ditto1 = getDitto(dependenciesWithCustomDirectory(File(getWorkDir(), "ditto1")))\n    val ditto2 = getDitto(dependenciesWithCustomDirectory(File(getWorkDir(), "ditto2")))\n\n    ditto1.tryStartSync()\n    ditto2.tryStartSync()\n\n    val coll1 = ditto1.store.collection("cars")\n    val coll2 = ditto2.store.collection("cars")\n    val docId = coll1.upsert(mapOf(\n        "make" to "toyota",\n        "mileage" to 160000\n    ))\n    val liveQuery = coll2.findByID(docId).observe { doc, event ->\n        if (!event.isInitial) {\n            assertEquals(doc!!["make"], "toyota")\n            //highlight-start\n            ditto1.stopSync()\n            ditto2.stopSync()\n            //highlight-end\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"full-example"},"Full example"),(0,r.kt)("p",null,"For the full example that you can use in your project, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/testing/android/app/src/androidTest/java/live/ditto/dittotesting"},"see the open source testing library on GitHub"),"."))}p.isMDXComponent=!0}}]);
(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6868],{79443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)(void 0)},80944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(79443);const i=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(67294);const o=function(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},49366:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(67294),o=n(80944),i=n(86010);const r=function(e){const{lazy:t,platform:n,block:r,defaultValue:l,values:s,groupId:u,className:c}=e,d=a.Children.toArray(e.children),p=s??d.map((e=>({value:e.props.value,label:e.props.label}))),h=l??d.find((e=>e.props.default))?.props.value,{tabGroupChoices:m,setTabGroupChoices:g}=(0,o.Z)(),[k,f]=(0,a.useState)(h);(0,a.useEffect)((()=>{if(null!=u){const e=m[u];null!=e&&e!==k&&(p.some((t=>t.value===e))?f(e):f(h))}}),[n,m[u]]);const v=e=>{f(e),null!=u&&g(u,e)},y=p.length>1;return a.createElement("div",{className:"tabs-container"},y&&a.createElement(a.Fragment,null,a.createElement("div",{className:"sm:hidden"},a.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),a.createElement("select",{id:"tabs",name:"tabs",value:k,onChange:e=>v(e.currentTarget.value),className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},p.map((e=>{let{value:t,label:n}=e;return a.createElement("option",{value:t,key:t},n??t)})))),a.createElement("div",{className:"hidden sm:block"},a.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},p.map((e=>{let{value:t,label:n}=e;return a.createElement("button",{key:t,onClick:()=>v(t),className:(0,i.Z)(k===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":k===t?"page":void 0},n??t)}))))),t?(0,a.cloneElement)(d.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}},61501:(e,t,n)=>{"use strict";n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),i=(n(78561),n(49366)),r=n(30547);const l={title:"Tutorial",sidebar_position:2},s=void 0,u={unversionedId:"security/authentication/tutorial",id:"security/authentication/tutorial",isDocsHomePage:!1,title:"Tutorial",description:"* This section will require knowledge of writing server side HTTP endpoints and handlers. The server side sample code is written in JavaScript (NodeJS with an Express-like API), however you can use any framework or language of your choosing.",source:"@site/docs/common/security/authentication/tutorial.mdx",sourceDirName:"security/authentication",slug:"/security/authentication/tutorial",permalink:"/common/security/authentication/tutorial",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/security/authentication/tutorial.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Tutorial",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/common/security/authentication/overview"},next:{title:"Shared Key",permalink:"/common/security/shared-key"}},c=[{value:"Server",id:"server",children:[{value:"Incoming POST body",id:"incoming-post-body",children:[],level:3},{value:"Deploy your server",id:"deploy-your-server",children:[],level:3},{value:"Configure your Portal App",id:"configure-your-portal-app",children:[],level:3}],level:2},{value:"Client",id:"client",children:[{value:"Login",id:"login",children:[],level:3},{value:"Logout",id:"logout",children:[],level:3}],level:2}],d={toc:c};function p(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"This section will require knowledge of writing server side HTTP endpoints and handlers.")," The server side sample code is written in JavaScript (NodeJS with an ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express"),"-like API), however you can use any framework or language of your choosing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"We will use Auth0 in this tutorial.")," But you can use any third-party identity provider. Each app can use multiple identity providers. Identity providers can be: ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In this tutorial, you'll build a simple application so users can log in with a\na third-party provider using ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0"),". We assume that you\nhave already completed the Auth0 tutorial on their documentation before starting\nthis tutorial. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the full application code in JavaScript and Swift, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/authentication"},"code samples on\nGitHub"),"."))),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("p",null,"The authentication webhook needs to handle an ",(0,o.kt)("strong",{parentName:"p"},"HTTP POST")," request. Each client\nthat will need to authenticate will send a payload to this webhook. The\nfollowing section requires that you have knowledge of writing server side HTTP\nendpoints and responding with a JSON payload. Code samples of server side code\nare written with a NodeJS / Express syntax. You can use any language or\nframework on the server side. "),(0,o.kt)("h3",{id:"incoming-post-body"},"Incoming POST body"),(0,o.kt)("p",null,"When your client device wants to authenticate using your webhook, your server will\nreceive an HTTP post with a JSON payload that looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "appID": "YOUR_APP_ID_HERE", // the appID\n  "provider": "my-auth", // this is the "Name" of the "Authentication Webhook"\n  "token": "eyJhbGciOiJI..." // this is what each device will send to authenticate\n}\n')),(0,o.kt)("p",null,"Your can introspect these values by parsing out the request body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let express = require('express')\nlet cors = require('cors')\nlet body = require('body-parser')\nlet app = express()\n\napp.use(cors())\napp.use(body.json())\n\nlet app = express()\n\napp.post('/', (req, res) => {\n  const appID = req.body.appID\n  const provider = req.body.provider\n  const token = req.body.token\n})\n")),(0,o.kt)("p",null,"Generally, you will want to check the token for some sort of validity. Let's\nassume you have some sort of library or logic to parse and validate the token is\nfor a specific user. "),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," key in your JSON response to\npass information back to client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'app.post(\'/\', async (req, res) => {\n  const token = req.body.token;\n  try {\n    const { userId } = await checkToken(token)\n    // payload = getDittoPermissions(userId)\n    res.json(payload)\n  } catch (err) {\n    res.json({\n      "authenticate": err,\n      "userInfo": err.message\n    }) \n  }\n})\n')),(0,o.kt)("p",null,"As a simple example, let's grant full ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," permissions to ",(0,o.kt)("em",{parentName:"p"},"all\ncollections")," and ",(0,o.kt)("em",{parentName:"p"},"all documents"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'app.post(\'/\', async (req, res) => {\n  const token = req.body.token;\n  try {\n    let payload = {\n      "authenticate": true,\n      "expirationSeconds": 28800,\n      "userID": "123abc",\n      "permissions": {\n        "read": {\n          "everything": true,\n          "queriesByCollection": {}\n        },\n        "write": {\n          "everything": true,\n          "queriesByCollection": {}\n        }\n      }\n    }\n    res.json(payload)\n  } catch (err) {\n    res.json({\n      "authenticate": err,\n      "userInfo": err.message\n    }) \n  }\n})\n\n')),(0,o.kt)("p",null,"For more information on how to design your app's permissions, see ",(0,o.kt)("a",{parentName:"p",href:"../../concepts/designing-permissions"},"Access Control\nPermissions"),"."),(0,o.kt)("h3",{id:"deploy-your-server"},"Deploy your server"),(0,o.kt)("p",null,"Now, the portal will attempt to reach this server. That means you must deploy it\nsomewhere that this HTTP request is accessible. For testing, you\ncan use a quick-deploy service such as ",(0,o.kt)("a",{parentName:"p",href:"https://glitch.com/"},"Glitch"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please be sure that this endpoint is not behind a firewall or VPN.  If you\ncannot get around this requirement ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@ditto.live"},"contact us"),". "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.listen(process.env.PORT, () => {\n  console.log('server listening on ', process.env.PORT)\n})\n")),(0,o.kt)("h3",{id:"configure-your-portal-app"},"Configure your Portal App"),(0,o.kt)("p",null,'To use an "Online With Authentication" identity, go to your app in the ',(0,o.kt)("a",{parentName:"p",href:"https://portal.ditto.live/"},"portal")," and find the ",(0,o.kt)("strong",{parentName:"p"},"Authentication Mode & Webhook Settings")," section. Ensure that ",(0,o.kt)("strong",{parentName:"p"},'"With Authentication"')," is selected like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Online With Authentication setting in Portal",src:n(10484).Z})),(0,o.kt)("p",null,"Below, a section called ",(0,o.kt)("strong",{parentName:"p"},"Authentication Webhooks")," will be editable. Once your Authentication Webhook Endpoint(s) is deployed and ready, you can register it in the portal. Add a ",(0,o.kt)("strong",{parentName:"p"},"Name")," and ",(0,o.kt)("strong",{parentName:"p"},"URL"),". "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Name")," is used the differentiate between multiple authentication. Most applications will have one authentication webhook, however the ",(0,o.kt)("strong",{parentName:"li"},"Name")," parameter is still required. This name value is important for the next section."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"URL")," parameter is the fully qualified URL of the webhook that you deployed in the section above. Please include the protocol (",(0,o.kt)("em",{parentName:"li"},"https:// or http://")," though we highly discourage\n",(0,o.kt)("em",{parentName:"li"},"http://"),").")),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("p",null,"To configure your client application, you must first add URL of the POST\nendpoint you created in the previous section."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample Authentication Webhook Endpoint in the Portal",src:n(7675).Z})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The provider name given to the Ditto Client must match a provider name in the Portal (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"my-auth"),")."))),(0,o.kt)("p",null,"This tutorial assumes you've already configured your ",(0,o.kt)("inlineCode",{parentName:"p"},"auth0")," client from the\nofficial ",(0,o.kt)("a",{parentName:"p",href:"https://auth0.com/docs/"},"Auth0 documentation"),"."),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)(i.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("p",null,"Assuming you have a login button in the HTML:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<button onClick={login}>Login</button>\n")),(0,o.kt)("p",null,"We attach a ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," function to the button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import createAuth0Client from '@auth0/auth0-spa-js';\n// OR for React\nimport { useAuth0 } from '@auth0/auth0-react';\n\n// configure your auth0 client...\n\nasync function login () {\n  await auth0.loginWithRedirect({\n    redirect_uri: window.location.origin\n  });\n  startDitto()\n}\n")),(0,o.kt)("p",null,"We can then create a ",(0,o.kt)("inlineCode",{parentName:"p"},"startDitto")," function that gets the access token and starts a\nnew Ditto instance, and passes the token to your server route you created in the previous section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import createAuth0Client from '@auth0/auth0-spa-js';\n// OR for React\nimport { useAuth0 } from '@auth0/auth0-react';\nimport { init, Ditto } from \"@dittolive/ditto\"\n\n// configure your auth0 client...\n\nlet ditto\n\n(async () => {\n  await init() // you need to call this at least once before using any of the Ditto API\n\n  function startDitto () {\n    let token = await auth0.getAccessTokenSilently();\n\n    const authHandler = {\n      authenticationRequired: async function(authenticator) {\n        await authenticator.loginWithToken(token, \"my-auth\");\n        console.log(\"Login request completed.\");\n      },\n      authenticationExpiringSoon: function(authenticator, secondsRemaining) {\n        console.log(`Auth token expiring in ${secondsRemaining} seconds`)\n        await authenticator.loginWithToken(token, \"my-auth\");\n        console.log(\"Login request completed.\");\n      }\n    }\n\n    const identity = {\n      type: 'onlineWithAuthentication',\n      appID: 'REPLACE_ME_WITH_YOUR_APP_ID',\n      authHandler\n    }\n\n    ditto = new Ditto(identity, '/persistence/file/path')\n    ditto.startSync()\n  }\n\n  async function login () {\n    await auth0.loginWithRedirect({\n      redirect_uri: window.location.origin\n    });\n    startDitto()\n  }\n})()\n")),(0,o.kt)("p",null,"To demonstrate that this Ditto client has been authenticated, let's display the\nnumber of cars in the collection, and a button to add one item to it: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <h1>Cars: {numberOfCars}</h1>\n  <button onClick={addItem}>+1</button>\n</div>\n")),(0,o.kt)("p",null,"Once we start the ditto instance, we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"liveQuery")," and create a\nbutton that adds items to a collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let subscription = ditto.store.collection('cars').find(\"state == 'FOR_SALE'\").subscribe()\nlet liveQuery = ditto.store.collection('cars').find(\"name == 'Toyota'\").observeLocal((cars) => {\n  numberOfCars = cars.length\n})\n\nfunction addItem () {\n  ditto.store.collection('cars').upsert({\n    \"name\": 'Toyota',\n    \"state\": 'FOR_SALE'\n  })\n}\n"))),(0,o.kt)(r.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("p",null,"Assuming you have a login button in your SwiftUI ContentView, we want to create\na new ",(0,o.kt)("inlineCode",{parentName:"p"},"ObservedObject")," that we can subscribe to for updates to the\nauthentication status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class ProfileViewModel: ObservableObject {\n  // your authentication code will go here\n}\n\nstruct ContentView: View {\n    @ObservedObject var viewModel: ProfileViewModel = ProfileViewModel()\n\n    var body: some View {\n      Button("Login").padding()\n    }\n}\n')),(0,o.kt)("p",null,"We attach a login function to the button"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class ProfileViewModel: ObservableObject {\n  // highlight-start\n  let credentialsManager = CredentialsManager(authentication: Auth0.authentication())\n\n  func login () {\n      Auth0\n          .webAuth()\n          .scope("openid profile")\n          .audience("https://ENTER_YOUR_SCOPE_URL_HERE.auth0.com/userinfo")\n          .start { result in\n              switch result {\n              case .success(let credentials):\n                  print("Obtained credentials: \\(credentials)")\n                  self.credentialsManager.store(credentials: credentials)\n                  self.startDitto()\n              case .failure(let error):\n                  print("Failed with: \\(error)")\n                  // Handle Error\n              }\n          }\n  }\n  // highlight-end\n}\n\nstruct ContentView: View {\n    @ObservedObject var viewModel: ProfileViewModel = ProfileViewModel()\n\n    var body: some View {\n      Button("Login", action: viewModel.login).padding()\n    }\n}\n')),(0,o.kt)("p",null,"We can then create a startDitto function that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Gets the access token from Auth0;"),(0,o.kt)("li",{parentName:"ol"},"Starts the Ditto instance; and "),(0,o.kt)("li",{parentName:"ol"},"Creates a liveQuery")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class ProfileViewModel: ObservableObject {\n  // highlight-next-line\n    @Published var ditto: Ditto?\n  // highlight-next-line\n    @Published var docs: [DittoDocument] = []\n    ....\n\n    func startDitto () {\n      // 1. Get the access token from Auth0\n      // highlight-start\n        credentialsManager.credentials { error, credentials in\n            guard error == nil, let credentials = credentials else {\n                // Handle error\n                return\n            }\n            \n            guard let accessToken = credentials.accessToken else {\n                // Handle Error\n                return\n            }\n            self.authDelegate = AuthDelegate(token: accessToken)\n          // highlight-end\n        \n            // 2. Start the Ditto instance \n            // highlight-start\n            let identity = DittoIdentity.onlineWithAuthentication(\n                appID: "YOUR_APP_ID_HERE",\n                authenticationDelegate: self.authDelegate\n            )\n\n            let ditto = Ditto(identity: identity)\n            try! ditto.startSync()\n            // highlight-end\n\n            // 3. Create a liveQuery \n            // highlight-start\n            self.ditto = ditto\n            let subscription = ditto.store.collection("cars").find("state == \'FOR_SALE\'").subscribe()\n            let liveQuery = ditto.store.collection("cars").find("name == \'Toyota\'").observeLocal { docs, event in\n                self.docs = docs\n            }\n            // highlight-end\n            \n        }\n    }\n}\n        \n')),(0,o.kt)("p",null,"To pass the token to your server route you created in the previous section, you\nneed to create an ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthDelegate")," class that is passed to the Ditto constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class AuthDelegate: DittoAuthenticationDelegate {\n    var token: String\n    \n    init (token: String) {\n        self.token = token\n    }\n\n    func authenticationRequired(authenticator: DittoAuthenticator) {\n        authenticator.loginWithToken(self.token, provider: "my-auth") { err in\n            print("Login request completed. Error? \\(err)")\n        }\n    }\n\n    func authenticationExpiringSoon(authenticator: DittoAuthenticator, secondsRemaining: Int64) {\n        print("Auth token expiring in \\(secondsRemaining)")\n        authenticator.loginWithToken(self.token, provider: "my-auth") { err in\n            print("Login request completed. Error? \\(err)")\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Our ContentView can now display the number of cars, and you can add a button for\nadding an item to the database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'\nstruct ContentView: View {\n    @ObservedObject var viewModel: ProfileViewModel = ProfileViewModel()\n    \n    var body: some View {\n          Button("Login", action: viewModel.login)\n              .padding()\n        }\n    \n        Text("Cars:" + String(viewModel.docs.count))\n        // Bonus points: implement addItem button using Ditto\'s `upsert`\n        Button("+1", viewModel.addItem)\n        \n    }\n}\n\n')))),(0,o.kt)("p",null,"To make this usable for real-world applications, you can retreieve the user's\nprofile details such as email, username, and full name. See the official Auth0\ndocumentation for your platform to add that functionality to your application"),(0,o.kt)("h3",{id:"logout"},"Logout"),(0,o.kt)("p",null,"First, we need some sort of way to monitor the state of the login flow. This\nallows us to display a Logout button when the user has already logged in."),(0,o.kt)(i.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let loggedIn = false\nif (auth0.isAuthenticated()) {\n  loggedIn = true\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"if (loggedIn) {\n  // render the logout button\n  <button onClick={onLogoutClick}>Logout</button>\n} else {\n  <button onClick={login}>Login</button>\n}\n")),(0,o.kt)("p",null,"And then we can write the logout function and attach it to the button."),(0,o.kt)("p",null,"We also recommend calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ditto.auth.logout")," with a callback function that\nevicts any data from the local database. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function onLogoutClick() {\n  ditto.auth.logout(() => {\n    ditto.store.collection('cars').findAll().evict()\n  })\n  await auth0.logout({ returnTo: window.location.origin })\n}\n"))),(0,o.kt)(r.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class ProfileViewModel: ObservableObject {\n  //highlight-start\n  @Published private(set) var state = State.isLoading\n\n  enum State {\n      case isLoading\n      case loaded(UserInfo)\n  }\n  //highlight-end\n\n}\n\nstruct ContentView: View {\n    @ObservedObject var viewModel: ProfileViewModel = ProfileViewModel()\n    \n    var body: some View {\n       \n        switch viewModel.state {\n          case .isLoading:\n              Button("Login", action: viewModel.login)\n          case .loaded(let user):\n              Text(user.name ?? "Anonymous Ditto User")\n              Button("Logout", action: viewModel.logout)\n          }\n    \n        Text("Cars:" + String(viewModel.docs.count))\n        \n    }\n}\n')),(0,o.kt)("p",null,"And then we can write the logout function and attach it to the button."),(0,o.kt)("p",null,"We also recommend calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ditto.auth.logout")," with a callback function that\nevicts any data from the local database. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class ProfileViewModel: ObservableObject {\n  ...\n  \n  func logout () {\n      Auth0\n          .webAuth()\n          .clearSession(federated: false) { result in\n              if result {\n                  if (self.ditto != nil) {\n                    // Clean up the cars collection after logout\n                    // highlight-start\n                      self.ditto!.auth?.logout(cleanup: { ditto in\n                          ditto.store.collection("cars").findAll().evict()\n                      })\n                    // highlight-end\n                  }\n                  self.state = State.isLoading\n              }\n          }\n  }\n  \n}\n\n')))),(0,o.kt)("p",null,"\ud83c\udf89 You now have a fully functioning ",(0,o.kt)("inlineCode",{parentName:"p"},"onlineWithAuthentication")," app. Build and\nrun it on a device."),(0,o.kt)("p",null,"For the full application code in React and iOS, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/authentication"},"code samples on GitHub"),"."))}p.isMDXComponent=!0},86010:(e,t,n)=>{"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},11748:(e,t,n)=>{var a={"./locale":89234,"./locale.js":89234};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id=11748},10484:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/portal-with-authentication-setting-db905a14e187f9e15d460735da4712ad.png"},7675:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/sample-authentication-webhook-endpoint-bcf6ba631bbd3e5b7a4d7f9fc802d2dc.png"}}]);
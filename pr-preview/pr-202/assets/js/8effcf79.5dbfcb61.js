(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[937],{79443:function(t,e,n){"use strict";var i=(0,n(67294).createContext)(void 0);e.Z=i},80944:function(t,e,n){"use strict";var i=n(67294),a=n(79443);e.Z=function(){var t=(0,i.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t}},30547:function(t,e,n){"use strict";var i=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},49366:function(t,e,n){"use strict";var i=n(67294),a=n(80944),o=n(86010);e.Z=function(t){var e,n=t.lazy,r=(t.block,t.defaultValue),l=t.values,s=t.groupId,c=(t.className,i.Children.toArray(t.children)),u=null!=l?l:c.map((function(t){return{value:t.props.value,label:t.props.label}})),d=null!=r?r:null==(e=c.find((function(t){return t.props.default})))?void 0:e.props.value,p=(0,a.Z)(),h=p.tabGroupChoices,m=p.setTabGroupChoices,g=(0,i.useState)(d),k=g[0],v=g[1];if(null!=s){var y=h[s];null!=y&&y!==k&&u.some((function(t){return t.value===y}))&&v(y)}var b=function(t){v(t),null!=s&&m(s,t)};return i.createElement("div",{className:"tabs-container"},i.createElement("div",{className:"sm:hidden"},i.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),i.createElement("select",{id:"tabs",name:"tabs",value:k,onChange:function(t){return b(t.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},u.map((function(t){var e=t.value,n=t.label;return i.createElement("option",{value:e,key:e},null!=n?n:e)})))),i.createElement("div",{className:"hidden sm:block"},i.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},u.map((function(t){var e=t.value,n=t.label;return i.createElement("button",{key:e,onClick:function(){return b(e)},className:(0,o.Z)(k===e?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":k===e?"page":void 0},null!=n?n:e)})))),n?(0,i.cloneElement)(c.filter((function(t){return t.props.value===k}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},c.map((function(t,e){return(0,i.cloneElement)(t,{key:e,hidden:t.props.value!==k})}))))}},84888:function(t,e,n){"use strict";n.r(e),n.d(e,{contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(93456),l=n(49366),s=n(30547),c=["components"],u={title:"Online with Authentication",sidebar_position:3},d=void 0,p={unversionedId:"security/online-with-authentication",id:"security/online-with-authentication",isDocsHomePage:!1,title:"Online with Authentication",description:'The "Online With Authentication" identity type is geared towards apps will be deployed in real world settings. "Online With Authentication" identity types are:',source:"@site/docs/security/online-with-authentication.mdx",sourceDirName:"security",slug:"/security/online-with-authentication",permalink:"/pr-preview/pr-202/security/online-with-authentication",editUrl:"https://github.com/getditto/docs/edit/master/docs/security/online-with-authentication.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Online with Authentication",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Designing Permissions",permalink:"/pr-preview/pr-202/security/designing-permissions"},next:{title:"Shared Key",permalink:"/pr-preview/pr-202/security/shared-key"}},h=[{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Example of authentication with Facebook and an iOS app with Ditto",id:"example-of-authentication-with-facebook-and-an-ios-app-with-ditto",children:[],level:2},{value:"Creating your client",id:"creating-your-client",children:[],level:2},{value:"Login",id:"login",children:[],level:2},{value:"Logout",id:"logout",children:[],level:2}],m={toc:h};function g(t){var e=t.components,u=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,i.Z)({},m,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'The "Online With Authentication" identity type is geared towards apps will be deployed in real world settings. "Online With Authentication" identity types are: '),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for apps that need to integrate with existing permissions"),(0,o.kt)("li",{parentName:"ul"},"for apps that need to integrate with existing authentication systems")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"The Ditto platform ",(0,o.kt)("strong",{parentName:"li"},"does not come with an identity provider"),'. Using "Online With Authentication" requires that that you have your own identity provider already set up. Each app can use multiple identity providers. Identity providers can be:',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your own service"),(0,o.kt)("li",{parentName:"ul"},"Facebook, Twitter, GitHub, etc..."),(0,o.kt)("li",{parentName:"ul"},"Okta, Auth0, Stytch, etc...")))))),(0,o.kt)("p",null,"For a more thorough walkthrough, see the ",(0,o.kt)("a",{parentName:"p",href:"/guides/authentication/intro"},"tutorial"),".  "),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Devices using Online with Authentication need to connect to the Internet and\nauthenticate at least once before syncronizing with other peers. This is\nrequired so devices can get a valid certificate before going offline.  "))),(0,o.kt)("p",null,'To use the "Online With Authentication" system, your client application is expected to authenticate with your identity system and retrieve some sort of token ',(0,o.kt)("em",{parentName:"p"},"prior")," to syncing with Ditto. Often times this token is some sort of identity token, access token, commonly in the format of a JWT (JSON Web Token)."),(0,o.kt)("p",null,"Once your client application successfully has retrieved this token, it should pass it to the Ditto ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticator")," which will pass it to an authentication webhook. As the developer, you are responsible for writing code and deploying the this webhook to an accessible URL. The authentication webhook will validate and decode the token from the client side and return identity and access control information back to your Ditto instance. "),(0,o.kt)("p",null,"The full flow is detailed in the diagram below:"),(0,o.kt)(r.Mermaid,{chart:"sequenceDiagram\n    Client App->>Your Authentication Mechanism: Send Credentials\n    Your Authentication Mechanism->>Client App: Return JWT\n    Client App->>Ditto Big Peer: JWT\n    Ditto Big Peer->>Auth Webhook: JWT \n    Auth Webhook->>Ditto Big Peer: Formatted Ditto Auth Response\n    Ditto Big Peer->>Client App: Ditto Credentials\n    rect rgba(0, 0, 255, .1)\n      Client App->Ditto Big Peer: Ditto Sync\n    end",config:{mermaid:{themeVariables:{fontFamily:"Helvetica"},sequence:{actorFontFamily:"Helvetica",noteFontFamily:"Helvetica",messageFontFamily:"Helvetica"},journey:{taskFontFamily:"Helvetica"}}},mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"example-of-authentication-with-facebook-and-an-ios-app-with-ditto"},"Example of authentication with Facebook and an iOS app with Ditto"),(0,o.kt)("p",null,"Let's say you're using something like Facebook authentication to identity users in ",(0,o.kt)("strong",{parentName:"p"},"Your App"),"."),(0,o.kt)("p",null,"Typically, an iOS application would use the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/ios/"},"Facebook SDK")," to login and retrieve a Facebook\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/access-tokens/#ios"},"access token"),". When the Facebook SDK logs in it'll retrieve this access token which you can pass to the Ditto flow. Ditto's Big Peer will forward it to an ",(0,o.kt)("strong",{parentName:"p"},"Auth WebHook")," which is ",(0,o.kt)("em",{parentName:"p"},"an HTTP endpoint where you can write your own logic"),". This Auth WebHook HTTP endpoint needs to respond with JSON that describe the user's identity and the permissions."),(0,o.kt)(r.Mermaid,{chart:"sequenceDiagram\n    Your App->>Facebook SDK: Send Credentials\n    Facebook SDK->>Your App: Return Facebook Access Token\n    Your App->>Ditto Big Peer: Send Facebook Access Token\n    Note over Ditto Big Peer,Auth Webhook: Ditto Big Peer simply forwards the Facebook Access Token from your app to a registered webhook\n    Ditto Big Peer->>Auth Webhook: Forwards Facebook Access Token \n    Note over Auth Webhook,Ditto Big Peer: Your auth webhook logic is code that you write and can decide to give \n    Auth Webhook->>Ditto Big Peer: Auth webhook validates and returns a formatted Ditto Auth Response\n    Ditto Big Peer->>Your App: Ditto Credentials\n    Your App->Ditto Big Peer: Ditto can begin sync with Ditto Big Peer",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"creating-your-client"},"Creating your client"),(0,o.kt)("p",null,"Create the ditto client with the ",(0,o.kt)("inlineCode",{parentName:"p"},"onlineWithAuthentication")," identity. This\nidentity requires an authentication handler ",(0,o.kt)("inlineCode",{parentName:"p"},"authHandler"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must refresh the auth token when it expires. You can do that by implementing\n",(0,o.kt)("inlineCode",{parentName:"p"},"authenticationExpiringSoon"),". If you do not implement this, then sync will stop when the token\nexpires. "))),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { init, Ditto } from \"@dittolive/ditto\"\n(async () => {\n  await init() // you need to call this at least once before using any of the Ditto API\n\n  const authHandler = {\n    authenticationRequired: async function(authenticator) {\n      console.log(\"Login request.\");\n    },\n    authenticationExpiringSoon: function(authenticator, secondsRemaining) {\n      console.log(`Auth token expiring in ${secondsRemaining} seconds`)\n    }\n  }\n\n  const identity = {\n    type: 'onlineWithAuthentication',\n    appID: 'REPLACE_ME_WITH_YOUR_APP_ID',\n    authHandler\n  }\n\n  const ditto = new Ditto(identity, '/persistence/file/path')\n  ditto.tryStartSync()\n})()\n"))),(0,o.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'struct AuthDelegate: DittoAuthenticationDelegate {\n    func authenticationRequired(authenticator: DittoAuthenticator) {\n        print("Login request.)\n    }\n\n    func authenticationExpiringSoon(authenticator: DittoAuthenticator, secondsRemaining: Int64) {\n        print("Auth token expiring in \\(secondsRemaining)")\n    }\n}\n\nlet identity = DittoIdentity.onlineWithAuthentication(\n    appID: "REPLACE_ME_WITH_YOUR_APP_ID",\n    authenticationDelegate: AuthDelegate()\n)\n\nlet ditto = Ditto(identity: identity)\ntry! ditto.tryStartSync()\n'))),(0,o.kt)(s.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'@interface AuthDelegate : NSObject <DITAuthenticationDelegate>\n@end\n\n@implementation AuthDelegate\n- (void)authenticationRequired:(nonnull DITAuthenticator *)authenticator {\n      NSLog(@"Login request.");\n}\n\n- (void)authenticationExpiringSoon:(nonnull DITAuthenticator *)authenticator\n                  secondsRemaining:(int64_t)secondsRemaining {\n    NSLog(@"Auth token expiring in %lld seconds", secondsRemaining);\n}\n@end\n\nDITIdentity *identity = [[DITIdentity alloc] initOnlineWithAuthenticationWithAppID:@"REPLACE_ME_WITH_YOUR_APP_ID"\n                                                            authenticationDelegate:[[AuthDelegate alloc] init];\nDITDitto *ditto = [[DITDitto alloc] initWithIdentity:identity];\nNSError *error = nil;\n[ditto tryStartSync:&error];\n'))),(0,o.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class AuthCallback: DittoAuthenticationCallback {\n    override fun authenticationRequired(authenticator: DittoAuthenticator) {\n        println("Login request.")\n    }\n\n    override fun authenticationExpiringSoon(\n        authenticator: DittoAuthenticator,\n        secondsRemaining: Long\n    ) {\n        println("Auth token expiring in $secondsRemaining seconds")\n    }\n}\n\nval androidDependencies = AndroidDittoDependencies(context)\nval identity = DittoIdentity.OnlineWithAuthentication(\n    androidDependencies,\n    "REPLACE_ME_WITH_YOUR_APP_ID",\n    AuthCallback()\n)\nval ditto = Ditto(androidDependencies, identity)\ntry {\n  ditto.tryStartSync()\n} catch(e: DittoError) {\n  Log.e("Ditto error", e.message!!)\n}\n'))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nclass AuthCallback implements DittoAuthenticationCallback {\n    @Override\n    public void authenticationRequired(@NonNull DittoAuthenticator authenticator) {\n        System.out.println("Login request.");\n    }\n\n    @Override\n    public void authenticationExpiringSoon(@NonNull DittoAuthenticator authenticator, long secondsRemaining) {\n        System.out.println("Auth token expiring in " + secondsRemaining + " seconds");\n    }\n}\n\nDittoDependencies androidDependencies = new DefaultAndroidDittoDependencies(this.context);\nDittoIdentity identity = new DittoIdentity.OnlineWithAuthentication(\n    customDirDependencies,\n    "REPLACE_ME_WITH_YOUR_APP_ID",\n    new AuthCallback()\n);\nDitto ditto = new Ditto(androidDependencies);\n\ntry {\n  ditto.tryStartSync();\n} catch(DittoError e) {\n  Log.e("Ditto Error", e.getMessage())\n}\n'))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'class AuthDelegate : IDittoAuthenticationDelegate\n{\n    public async void AuthenticationRequired(DittoAuthenticator authenticator)\n    {\n        System.Console.WriteLine($"Login request");\n    }\n\n    public async void AuthenticationExpiringSoon(DittoAuthenticator authenticator, long secondsRemaining)\n    {\n        System.Console.WriteLine($"Auth token expiring in {secondsRemaining} seconds");\n    }\n}\n\nvar identity = DittoIdentity.OnlineWithAuthentication(\n    "REPLACE_ME_WITH_YOUR_APP_ID",\n    new AuthDelegate());\n\ntry\n{\n    var ditto = new Ditto(identity);\n    ditto.TryStartSync();\n}\ncatch (DittoException ex)\n{\n    System.Console.WriteLine($"Ditto Error {ex.Message}");\n}\n'))),(0,o.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'class AuthCallback: public AuthenticationCallback {\npublic:\n  void authentication_required(std::shared_ptr<Authenticator> authenticator) {\n      std::cout << "Login request" << std::endl;\n  }\n\n  void authentication_expiring_soon(std::shared_ptr<Authenticator> authenticator,\n                                    std::int64_t seconds_remaining) {\n    std::cout << "Auth token expiring in " << seconds_remaining << " seconds" << std::endl;\n  }\n};\n\nIdentity identity = Identity::OnlineWithAuthentication(\n  "REPLACE_ME_WITH_YOUR_APP_ID",\n  std::make_shared<AuthCallback>()\n);\ntry {\n  Ditto ditto = Ditto(identity, "/your-persistence-path");\n  ditto.try_start_sync();\n} catch (const DittoError &err) {\n  std::cout << err.what() << std::endl;\n}\n'))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use dittolive_ditto::prelude::*;\nuse std::sync::Arc;\nuse std::time::Duration;\n\nstruct AuthHandler {\n    token: String,\n    provider: String,\n}\n\nimpl DittoAuthenticationEventHandler for AuthHandler {\n    fn authentication_required(&self, auth: dittolive_ditto::auth::DittoAuthenticator) {\n        ::log::info!("Login request.");\n    }\n\n    fn authentication_expiring_soon(\n        &self,\n        _auth: dittolive_ditto::auth::DittoAuthenticator,\n        seconds_remaining: std::time::Duration,\n    ) {\n        ::log::info!(\n            "Auth token expiring in {} seconds",\n            seconds_remaining.as_secs()\n        );\n    }\n}\n\nimpl Default for AuthHandler {\n    fn default() -> Self {\n        AuthHandler {\n            token: ThirdPartyAuth::get_token(),\n            provider: String::from("my-auth"),\n        }\n    }\n}\n\nlet mut ditto = Ditto::builder()\n    // creates a `ditto_data` folder in the directory containing the executing process\n    .with_root(Arc::new(PersistentRoot::current_exe()?))\n    .with_identity(|ditto_root| {\n      // Provided as an env var, may also be provided as hardcoded string\n      let app_id = AppId::from_env("DITTO_APP_ID")?;\n      let auth_event_handler = AuthHandler::default();\n      let enable_cloud_sync = true;\n      let custom_auth_url = None;\n      // return the Result<Identity, _> at the end of this closure\n      OnlineWithAuthentication::new(\n          ditto_root,\n          app_id,\n          auth_event_handler,\n          enable_cloud_sync,\n          custom_auth_url,\n      )\n    })\n    .with_transport_config(|_identity| {\n        let mut config = TransportConfig::enable_all_peer_to_peer()\n    })\n    .build()?;\n\nditto.try_start_sync()?;\n')))),(0,o.kt)("h2",{id:"login"},"Login"),(0,o.kt)("p",null,"Login takes two paramters: the first is ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),", which should be a JSON web\ntoken (JWT). The second paramter is the name of the provider which you must add\nthrough the Ditto portal."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample Authentication Webhook Endpoint in the Portal",src:n(83921).Z})),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let accessToken = await ThirdPartyAuth.getToken()\nawait ditto.auth.loginWithToken(accessToken, 'my-auth')\n"))),(0,o.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.auth.loginWithToken(ThirdPartyAuth.getToken(), provider: "my-auth") { err in\n    print("Login request completed. Error? \\(err)")\n}\n'))),(0,o.kt)(s.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'[ditto auth loginWithToken:[ThirdPartyAuth getToken] provider:@"my-auth" completion:^(NSError * _Nullable err) {\n    NSLog(@"Login request completed. Error? %@", err);\n}];\n'))),(0,o.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ditto.auth.loginWithToken(ThirdPartyAuth.getToken(), "my-auth") { err ->\n    println("Login request completed. Error? $err")\n}\n'))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ditto.auth.loginWithToken(credentials.accessToken, "my-auth", err -> {\n    System.out.println("Login request completed. Error? " + err.toString());\n});\n'))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var res = await authenticator.LoginWithToken(ThirdPartyAuth.GetToken(), "my-auth");\nSystem.Console.WriteLine($"Login request completed. Error? {res}");\n'))),(0,o.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'authenticator->login_with_token("123", "my-auth", [](std::unique_ptr<DittoError> err) {\n  std::cout << "Login request completed. Error?" << err->what() << std::endl;\n});\n'))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'auth.login_with_token(&self.token, &self.provider) {\n    ::log::info!("Login request completed. Error? {:?}", &e);\n}\n'))),(0,o.kt)(s.Z,{value:"http",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://<CLOUD_ENDPOINT>/api/v1/collections/people/documents/<doc_id>' \\\n  --header 'X-HYDRA-CLIENT-ID: AAAAAAAAAAAAAAAAAAAABQ==' \\\n  --header 'Content-Type: application/json' \n")))),(0,o.kt)("h2",{id:"logout"},"Logout"),(0,o.kt)("p",null,"Logout will stop sync, shut down all replication sessions, and remove any cached\nauthentication credentials. Note that this does not remove any data from the\nstore. If you wish to delete data from the store then use the optional\n",(0,o.kt)("inlineCode",{parentName:"p"},"cleanupFn")," parameter to perform any required cleanup."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanupFn")," is an optional function that will be called with the relevant Ditto\ninstance as the sole argument that allows you to perform any required cleanup of\nthe store as part of the logout process."),(0,o.kt)(l.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function cleanupFn (ditto) {\n  await ditto.store.collection('cars').findAll().evict()\n}\nawait ditto.auth.logout(cleanupFn)\n"))),(0,o.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.auth.logout(cleanup: { ditto in\n    ditto.store.collection("cars").findAll().evict()\n})\n'))),(0,o.kt)(s.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'[ditto.auth logout:^(DITDitto *ditto) {\n  DITCollection *collection = [ditto.store collection:@"cars"];\n  [[collection findAll] evict];\n}];\n'))),(0,o.kt)(s.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ditto.auth.logout {\n  ditto.store["cars"].findAll().evict()\n}\n'))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' ditto.auth.logout(ditto -> {\n  ditto.store.collection("cars").findAll().evict();\n })\n'))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'ditto.Auth.Logout((Ditto ditto) =>\n{\n  ditto.Store.Collection("cars").FindAll().evict();\n});\n'))),(0,o.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'ditto.auth.logout({\n  ditto.store.collection("cars").findAll().evict();\n})\n'))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'ditto.auth.logout(|ditto| {\n  ditto.store().collection("cars")?.find_all().evict()?;\n});\n')))))}g.isMDXComponent=!0},86010:function(t,e,n){"use strict";function i(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=i(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=i(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})},11748:function(t,e,n){var i={"./locale":89234,"./locale.js":89234};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id=11748},83921:function(t,e,n){"use strict";e.Z=n.p+"assets/images/sample-authentication-webhook-endpoint-bcf6ba631bbd3e5b7a4d7f9fc802d2dc.png"}}]);
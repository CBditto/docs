"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5927],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return t?i.createElement(h,r(r({ref:n},d),{},{components:t})):i.createElement(h,r({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34010:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var i=t(87462),o=t(63366),a=(t(67294),t(3905)),r=["components"],s={title:"3 - Assigning Commands"},l=void 0,c={unversionedId:"tutorial/console/assigning-commands",id:"tutorial/console/assigning-commands",isDocsHomePage:!1,title:"3 - Assigning Commands",description:"3.1 Setting up the while loop",source:"@site/docs/csharp/tutorial/console/3-assigning-commands.md",sourceDirName:"tutorial/console",slug:"/tutorial/console/assigning-commands",permalink:"/csharp/tutorial/console/assigning-commands",editUrl:"https://github.com/getditto/docs/tree/main/docs/csharp/tutorial/console/3-assigning-commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3 - Assigning Commands"},sidebar:"docs",previous:{title:"2 - Configuring Commands",permalink:"/csharp/tutorial/console/configuring-commands"},next:{title:"Overview",permalink:"/csharp/common/concepts/overview"}},d=[{value:"3.1 Setting up the <code>while</code> loop",id:"31-setting-up-the-while-loop",children:[],level:2},{value:"3.2 Final application",id:"32-final-application",children:[],level:2}],m={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"31-setting-up-the-while-loop"},"3.1 Setting up the ",(0,a.kt)("inlineCode",{parentName:"h2"},"while")," loop"),(0,a.kt)("p",null,"Our application will continually ask for commands that we setup in the last section. For a console application, this is generally a ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To determine whether or not the while loop should run, we need an addition ",(0,a.kt)("inlineCode",{parentName:"li"},"static bool isAskedToExit = false"),". If the user turns this to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," via the ",(0,a.kt)("inlineCode",{parentName:"li"},"--exit")," command, the while loop will stop and the application will exit."),(0,a.kt)("li",{parentName:"ol"},"In each iteration of the while loop, we will need read the command from the user. In C#, we can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"Console.ReadLine")," API, which will prompt the user for a string entry. We can store this into ",(0,a.kt)("inlineCode",{parentName:"li"},"string command"),"."),(0,a.kt)("li",{parentName:"ol"},"We can add a ",(0,a.kt)("inlineCode",{parentName:"li"},"switch")," statement which will parse the correct command and react to the command."),(0,a.kt)("li",{parentName:"ol"},"If the user types in ",(0,a.kt)("inlineCode",{parentName:"li"},"--insert"),", we will parse out the string without the ",(0,a.kt)("inlineCode",{parentName:"li"},"--insert")," command. We assume this string is the ",(0,a.kt)("inlineCode",{parentName:"li"},"body")," for a new document. So we will call the ",(0,a.kt)("inlineCode",{parentName:"li"},".upsert")," command with ditto via:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string taskBody = s.Replace("--insert ", "");\nditto.Store["tasks"].Upsert(new Task(taskBody, false).ToDictionary());\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Check for a switch case for ",(0,a.kt)("inlineCode",{parentName:"li"},"--toggle"),". We will parse out the string without ",(0,a.kt)("inlineCode",{parentName:"li"},"--toggle")," and assume the user's input is a Task document's ",(0,a.kt)("inlineCode",{parentName:"li"},"_id"),". We can then find the document by it's ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")," and call ",(0,a.kt)("inlineCode",{parentName:"li"},".update")),(0,a.kt)("li",{parentName:"ol"},"Check for a switch case for ",(0,a.kt)("inlineCode",{parentName:"li"},"--delete"),". We will parse out the string without ",(0,a.kt)("inlineCode",{parentName:"li"},"--delete")," and assume the user's input is a Task document's ",(0,a.kt)("inlineCode",{parentName:"li"},"_id"),". We can then find the document by it's ",(0,a.kt)("inlineCode",{parentName:"li"},"_id")," and call ",(0,a.kt)("inlineCode",{parentName:"li"},".update")),(0,a.kt)("li",{parentName:"ol"},"Finally we will add a command to look for ",(0,a.kt)("inlineCode",{parentName:"li"},"--list"),", which will print out all the tasks that we've synced.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n\nnamespace Tasks\n{\n    class Program\n    {\n        static Ditto ditto;\n        // 1.\n        // highlight-next-line\n        static bool isAskedToExit = false;\n        static List<Task> tasks = new List<Task>();\n        static DittoLiveQuery liveQuery;\n\n\n        public static void Main(params string[] args)\n        {\n            ditto = new Ditto(DittoIdentity.OnlinePlayground("REPLACE_ME_WITH_YOUR_APP_ID", "REPLACE_ME_WITH_YOUR_PLAYGROUND_TOKEN"), path);\n\n            /**\n            * Omitted for brevity\n            */\n\n            liveQuery = ditto.Store["tasks"].Find("!isDeleted").Observe((docs, _event) => {\n                tasks = docs.ConvertAll(d => new Task(d));\n            });\n\n            ListCommands();\n\n            while (!isAskedToExit)\n            {\n\n                // 2.\n                // highlight-start\n                Console.Write("\\nYour command: ");\n                string command = Console.ReadLine();\n                // highlight-end\n\n                switch (command)\n                {\n\n                    // 3. 4.\n                    // highlight-start\n                    case string s when command.StartsWith("--insert"):\n                        string taskBody = s.Replace("--insert ", "");\n                        ditto.Store["tasks"].Upsert(new Task(taskBody, false).ToDictionary());\n                        break;\n                        // highlight-end\n                    // 5.\n                    // highlight-start\n                    case string s when command.StartsWith("--toggle"):\n                        string _idToToggle = s.Replace("--toggle ", "");\n                        ditto.Store["tasks"]\n                            .FindById(new DittoDocumentID(_idToToggle))\n                            .Update((mutableDoc) => {\n                                if (mutableDoc == null) return;\n                                mutableDoc["isCompleted"].Set(!mutableDoc["isCompleted"].BooleanValue);\n                            });\n                        break;\n                    // highlight-end\n                    // 6.\n                    // highlight-start\n                    case string s when command.StartsWith("--delete"):\n                        string _idToDelete = s.Replace("--delete ", "");\n                        ditto.Store["tasks"]\n                            .FindById(new DittoDocumentID(_idToDelete))\n                            .Update((mutableDoc) => {\n                                if (mutableDoc == null) return;\n                                mutableDoc["isDeleted"].Set(true);\n                            });\n                        break;\n                    case { } when command.StartsWith("--list"):\n                        tasks.ForEach(task =>\n                        {\n                            Console.WriteLine(task.ToString());\n                        });\n                        break;\n                    // highlight-end\n                    // 1.\n                    // highlight-start\n                    case { } when command.StartsWith("--exit"):\n                        Console.WriteLine("Good bye!");\n                        isAskedToExit = true;\n                        break;\n                    // highlight-end\n                    default:\n                        Console.WriteLine("Unknown command");\n                        ListCommands();\n                        break;\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"32-final-application"},"3.2 Final application"),(0,a.kt)("p",null,"Our application is complete! Our ",(0,a.kt)("strong",{parentName:"p"},"Program.cs")," file should look like the following. Now you can run the example in your terminal, command line or right within the run command in Visual Studio."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n\nnamespace Tasks\n{\n    class Program\n    {\n        static Ditto ditto;\n        static bool isAskedToExit = false;\n        static List<Task> tasks = new List<Task>();\n        static DittoLiveQuery liveQuery;\n\n\n        public static void Main(params string[] args)\n        {\n            ditto = new Ditto(identity: DittoIdentity.Development(appName: "live.ditto.tasks"));\n\n            try\n            {\n                ditto.SetLicenseToken("<REPlACE_ME>");\n                ditto.StartSync();\n            }\n            catch (DittoException ex)\n            {\n                Console.WriteLine("There was an error starting Ditto.");\n                Console.WriteLine("Here\'s the following error");\n                Console.WriteLine(ex.ToString());\n                Console.WriteLine("Ditto cannot start sync but don\'t worry.");\n                Console.WriteLine("Ditto will still work as a local database.");\n            }\n\n            Console.WriteLine("Welcome to Ditto\'s Task App");\n\n            liveQuery = ditto.Store["tasks"].Find("!isDeleted").Observe((docs, _event) => {\n                tasks = docs.ConvertAll(d => new Task(d));\n            });\n\n            ListCommands();\n\n            while (!isAskedToExit)\n            {\n\n                Console.Write("\\nYour command: ");\n                string command = Console.ReadLine();\n\n                switch (command)\n                {\n\n                    case string s when command.StartsWith("--insert"):\n                        string taskBody = s.Replace("--insert ", "");\n                        ditto.Store["tasks"].Upsert(new Task(taskBody, false).ToDictionary());\n                        break;\n                    case string s when command.StartsWith("--toggle"):\n                        string _idToToggle = s.Replace("--toggle ", "");\n                        ditto.Store["tasks"]\n                            .FindById(new DittoDocumentID(_idToToggle))\n                            .Update((mutableDoc) => {\n                                if (mutableDoc == null) return;\n                                mutableDoc["isCompleted"].Set(!mutableDoc["isCompleted"].BooleanValue);\n                            });\n                        break;\n                    case string s when command.StartsWith("--delete"):\n                        string _idToDelete = s.Replace("--delete ", "");\n                        ditto.Store["tasks"]\n                            .FindById(new DittoDocumentID(_idToDelete))\n                            .Update((mutableDoc) => {\n                                if (mutableDoc == null) return;\n                                mutableDoc["isDeleted"].Set(true);\n                            });;\n                        break;\n                    case { } when command.StartsWith("--list"):\n                        tasks.ForEach(task =>\n                        {\n                            Console.WriteLine(task.ToString());\n                        });\n                        break;\n                    case { } when command.StartsWith("--exit"):\n                        Console.WriteLine("Good bye!");\n                        isAskedToExit = true;\n                        break;\n                    default:\n                        Console.WriteLine("Unknown command");\n                        ListCommands();\n                        break;\n                }\n            }\n        }\n\n        public static void ListCommands()\n        {\n            Console.WriteLine("************* Commands *************");\n            Console.WriteLine("--insert my new task");\n            Console.WriteLine("   Inserts a task");\n            Console.WriteLine("   Example: \\"--insert Get Milk\\"");\n            Console.WriteLine("--toggle myTaskTd");\n            Console.WriteLine("   Toggles the isComplete property to the opposite value");\n            Console.WriteLine("   Example: \\"--toggle 1234abc\\"");\n            Console.WriteLine("--delete myTaskTd");\n            Console.WriteLine("   Deletes a task");\n            Console.WriteLine("   Example: \\"--delete 1234abc\\"");\n            Console.WriteLine("--list");\n            Console.WriteLine("   List the current tasks");\n            Console.WriteLine("--exit");\n            Console.WriteLine("   Exits the program");\n            Console.WriteLine("************* Commands *************");\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8125],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,u=c["".concat(r,".").concat(m)]||c[m]||k[m]||o;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82514:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"4 - Showing the List of Tasks"},r=void 0,d={unversionedId:"tutorials/jetpack-compose/tasks-list-screen",id:"tutorials/jetpack-compose/tasks-list-screen",isDocsHomePage:!1,title:"4 - Showing the List of Tasks",description:"In the last part of the tutorial we referenced a class called TasksListScreen. This screen will show a List using a JetPack Compose Column.",source:"@site/docs/tutorials/jetpack-compose/4-tasks-list-screen.md",sourceDirName:"tutorials/jetpack-compose",slug:"/tutorials/jetpack-compose/tasks-list-screen",permalink:"/tutorials/jetpack-compose/tasks-list-screen",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/jetpack-compose/4-tasks-list-screen.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4 - Showing the List of Tasks"},sidebar:"tutorialSidebar",previous:{title:"3 - Navigation",permalink:"/tutorials/jetpack-compose/navigation"},next:{title:"5 - Editing Tasks",permalink:"/tutorials/jetpack-compose/edit-screen"}},p=[{value:"4-1 Create a <code>TaskRow</code> views",id:"4-1-create-a-taskrow-views",children:[],level:2},{value:"4-2 Create a <code>@Composable</code> <code>TaskList</code>",id:"4-2-create-a-composable-tasklist",children:[],level:2},{value:"4-3 Create a <code>@Composable</code> <code>TasksListScreenViewModel</code>",id:"4-3-create-a-composable-taskslistscreenviewmodel",children:[],level:2},{value:"4-4 Creating the <code>TasksListScreen</code>",id:"4-4-creating-the-taskslistscreen",children:[],level:2}],k={toc:p};function c(e){var t=e.components,s=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the last part of the tutorial we referenced a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksListScreen"),". This screen will show a ",(0,o.kt)("inlineCode",{parentName:"p"},"List<Task>")," using a JetPack Compose Column."),(0,o.kt)("h2",{id:"4-1-create-a-taskrow-views"},"4-1 Create a ",(0,o.kt)("inlineCode",{parentName:"h2"},"TaskRow")," views"),(0,o.kt)("p",null,"Each row of the tasks will be represented by a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Composable")," ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskRow")," which takes in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Task")," and two callbacks which we will use later."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"task.isCompleted")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", we will show a filled circle icon and a\nstrike through style for the ",(0,o.kt)("inlineCode",{parentName:"li"},"body"),"."),(0,o.kt)("li",{parentName:"ol"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"task.isCompleted")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", we will show a filled circle icon and a strike through style for the ",(0,o.kt)("inlineCode",{parentName:"li"},"body"),"."),(0,o.kt)("li",{parentName:"ol"},"If the user taps the ",(0,o.kt)("inlineCode",{parentName:"li"},"Icon"),", we will call a ",(0,o.kt)("inlineCode",{parentName:"li"},"onToggle: ((task: Task) -> Unit)?"),", we will reverse the ",(0,o.kt)("inlineCode",{parentName:"li"},"isCompleted")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ol"},"If the user taps the ",(0,o.kt)("inlineCode",{parentName:"li"},"Text"),", we will call a ",(0,o.kt)("inlineCode",{parentName:"li"},"onClickBody: ((task: Task) -> Unit)?"),". We will use this to navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreen"))),(0,o.kt)("p",null,"For brevity, we will skip discussions on styling as it's best to see the code snippet below:"),(0,o.kt)("p",null,"We've also included included a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Preview")," ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskRowPreview")," which allows you to quickly see the end result with some test data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TaskRowPreview",src:n(88593).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TaskRow.kt"',title:'"TaskRow.kt"'},'@Composable\nfun TaskRow(\n    task: Task,\n    onToggle: ((task: Task) -> Unit)? = null,\n    onClickBody: ((task: Task) -> Unit)? = null) {\n\n    val iconId =\n        if (task.isCompleted) R.drawable.ic_baseline_circle_24 else R.drawable.ic_outline_circle_24\n    val color = if (task.isCompleted) R.color.purple_200 else R.color.gray\n    var textDecoration = if (task.isCompleted) TextDecoration.LineThrough else\n        TextDecoration.None\n    Row(\n        Modifier\n            .fillMaxWidth()\n            .padding(12.dp)\n\n    ) {\n        Image(\n            ImageVector.vectorResource(\n                id = iconId\n            ),\n            "Localized description",\n            colorFilter = ColorFilter.tint(colorResource(id = color)),\n            modifier = Modifier\n                .padding(end = 16.dp)\n                .size(24.dp, 24.dp)\n                .clickable { onToggleButton?.invoke(task) },\n            alignment = Alignment.CenterEnd\n        )\n        Text(\n            text = task.body,\n            textDecoration = textDecoration,\n            fontSize = 16.sp,\n            modifier = Modifier\n                .alignByBaseline()\n                .fillMaxWidth()\n                .clickable { onClickBody?.invoke(task) })\n    }\n}\n\n/**\n * Used to preview the code:\n */\n@Preview(showBackground = true)\n@Composable\nfun TaskRowPreview() {\n    Column() {\n        TaskRow(task = Task(UUID.randomUUID().toString(), "Get Milk", true))\n        TaskRow(task = Task(UUID.randomUUID().toString(), "Do Homework", false))\n        TaskRow(task = Task(UUID.randomUUID().toString(), "Take out trash", true))\n    }\n}\n')),(0,o.kt)("h2",{id:"4-2-create-a-composable-tasklist"},"4-2 Create a ",(0,o.kt)("inlineCode",{parentName:"h2"},"@Composable")," ",(0,o.kt)("inlineCode",{parentName:"h2"},"TaskList")),(0,o.kt)("p",null,"Next we will need to show a ",(0,o.kt)("inlineCode",{parentName:"p"},"List<Task>")," by looping over it and creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskRow")," for each element. This gives us a scrollable list behavior."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskList")," takes in a ",(0,o.kt)("inlineCode",{parentName:"li"},"List<Task>")," and loops over it in a ",(0,o.kt)("inlineCode",{parentName:"li"},"Column")," with a ",(0,o.kt)("inlineCode",{parentName:"li"},".forEach")," loop."),(0,o.kt)("li",{parentName:"ol"},"Each iteration of the loop will render a ",(0,o.kt)("inlineCode",{parentName:"li"},"Task(task)")),(0,o.kt)("li",{parentName:"ol"},"We've also added ",(0,o.kt)("inlineCode",{parentName:"li"},"onClickBody")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"onToggle")," callback that matches the ",(0,o.kt)("inlineCode",{parentName:"li"},"Task.onClickBody")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Task.onToggle")," functions.")),(0,o.kt)("p",null,"We've also included a ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskListPreview")," so that you can add some test data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TaskRowPreview",src:n(48188).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TaskList.kt"',title:'"TaskList.kt"'},'@Composable\nfun TasksList(\n    tasks: List<Task>,\n    onToggle: ((taskId: String) -> Unit)? = null,\n    onSelectedTask: ((taskId: String) -> Unit)? = null\n) {\n    Column() {\n        tasks.forEach { task ->\n            TaskRow(\n                task = task,\n                onClickBody = { onSelectedTask?.invoke(it._id) },\n                onToggle = { onToggle?.invoke(it._id) }\n            )\n        }\n    }\n}\n\n@Preview(\n    showBackground = true,\n    showSystemUi = true,\n    device = Devices.PIXEL_3\n)\n@Composable\nfun TaskListPreview() {\n    TasksList(\n        tasks = listOf(\n            Task(UUID.randomUUID().toString(), "Get Milk", true),\n            Task(UUID.randomUUID().toString(), "Get Oats", false),\n            Task(UUID.randomUUID().toString(), "Get Berries", true),\n        )\n    )\n}\n')),(0,o.kt)("h2",{id:"4-3-create-a-composable-taskslistscreenviewmodel"},"4-3 Create a ",(0,o.kt)("inlineCode",{parentName:"h2"},"@Composable")," ",(0,o.kt)("inlineCode",{parentName:"h2"},"TasksListScreenViewModel")),(0,o.kt)("p",null,"The entire screen's data will be completely controlled by a Jetpack Compose ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewModel"),". The use of ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewModel")," is a design pattern called ",(0,o.kt)("a",{parentName:"p",href:"https://proandroiddev.com/architecture-in-jetpack-compose-mvp-mvvm-mvi-17d8170a13fd"},"MVVM or Model View ViewModel")," which strives to separate all data manipulation (Model and ViewModel) and data presentation (UI or View) into distinct areas of concern. When it comes to Ditto, we recommend that you never include references to ",(0,o.kt)("inlineCode",{parentName:"p"},"ditto")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"@Composable")," types. All interactions with ",(0,o.kt)("inlineCode",{parentName:"p"},"ditto")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"insert"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"find"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"observe")," should be within a ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewModel"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Now create a new file called ",(0,o.kt)("strong",{parentName:"li"},"TasksListScreenViewModel.kt")),(0,o.kt)("li",{parentName:"ol"},"Add a property called ",(0,o.kt)("inlineCode",{parentName:"li"},"val tasks: MutableLiveData<List<Task>> = MutableLiveData(emptyList())"),". This will house all of our tasks that the ",(0,o.kt)("inlineCode",{parentName:"li"},"TasksListScreen")," can observe for changes. When any ",(0,o.kt)("inlineCode",{parentName:"li"},"MutableLiveData")," type changes, Jetpack Compose will intelligently tell ",(0,o.kt)("inlineCode",{parentName:"li"},"@Composable")," types to reload with the necessary changes."),(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"liveQuery")," by observing all the tasks documents. Remember our ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")," data class that we created? We will now map all the ",(0,o.kt)("inlineCode",{parentName:"li"},"DittoDocument")," to a ",(0,o.kt)("inlineCode",{parentName:"li"},"List<Task>")," and set them to the tasks."),(0,o.kt)("li",{parentName:"ol"},"Ditto's ",(0,o.kt)("inlineCode",{parentName:"li"},"DittoLiveQuery")," types should be disposed by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"stop()")," once the ",(0,o.kt)("inlineCode",{parentName:"li"},"ViewModel")," is no longer necessary. For a simple application, this isn't necessary but it's always good practice once you start building more complex applications.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TasksListScreenViewModel.kt"',title:'"TasksListScreenViewModel.kt"'},'class TasksListScreenViewModel: ViewModel() {\n    val tasks: MutableLiveData<List<Task>> = MutableLiveData(emptyList())\n\n    val liveQuery = TasksApplication.ditto!!.store["tasks"]\n        .findAll().observe { docs, _ ->\n            tasks.postValue(docs.map { Task(it) })\n        }\n\n    fun toggle(taskId: String) {\n        TasksApplication.ditto!!.store["tasks"]\n            .findByID(DittoDocumentID(taskId))\n            .update { mutableDoc ->\n                val mutableDoc = mutableDoc?.let { it } ?: return@update\n                mutableDoc["isCompleted"].set(!mutableDoc["isCompleted"].booleanValue)\n            }\n    }\n\n    override fun onCleared() {\n        super.onCleared()\n        liveQuery.stop()\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose/state#viewmodel-state"},"You can learn more about ViewModels on the official Android Documentation.")),(0,o.kt)("p",null,"One of the features that we added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskRow")," is to toggle the ",(0,o.kt)("inlineCode",{parentName:"p"},"isCompleted")," flag of the document once a user clicks on the circle ",(0,o.kt)("inlineCode",{parentName:"p"},"Icon"),". We will need to hook this functionality up to edit the Ditto document."),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"toggle")," function will take the ",(0,o.kt)("inlineCode",{parentName:"p"},"task"),", find it by it's ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," and switch it's ",(0,o.kt)("inlineCode",{parentName:"p"},"isCompleted")," value to the opposite value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TasksListScreenViewModel.kt"',title:'"TasksListScreenViewModel.kt"'},'// ***\nfun toggle(taskId: String) {\n    TasksApplication.ditto!!.store["tasks"]\n        .findByID(DittoDocumentID(taskId))\n        .update { mutableDoc ->\n            val mutableDoc = mutableDoc?.let { it } ?: return@update\n            mutableDoc["isCompleted"].set(!mutableDoc["isCompleted"].booleanValue)\n        }\n}\n')),(0,o.kt)("p",null,"Notice that we ",(0,o.kt)("em",{parentName:"p"},"DO NOT HAVE TO")," manipulate the ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks")," value. Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," will automatically fire the liveQuery to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks"),". You can always trust the liveQuery to immediately update the ",(0,o.kt)("inlineCode",{parentName:"p"},"val tasks: MutableLiveData<List<Task>>"),". There is no reason to poll or force reload. Ditto will automatically handle the state changes."),(0,o.kt)("h2",{id:"4-4-creating-the-taskslistscreen"},"4-4 Creating the ",(0,o.kt)("inlineCode",{parentName:"h2"},"TasksListScreen")),(0,o.kt)("p",null,"Finally let's create the ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksListScreen"),". This ",(0,o.kt)("inlineCode",{parentName:"p"},"@Composable")," is where the ",(0,o.kt)("inlineCode",{parentName:"p"},"navController"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksListScreenViewModel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TaskList")," all come together."),(0,o.kt)("p",null,"The following code for ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksListScreen")," is rather small but a lot of things are happening. Follow the steps and look for the appropriate comments that line up to the numbers below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"TasksListScreen")," takes a ",(0,o.kt)("inlineCode",{parentName:"li"},"navController")," as a parameter. This variable is used to navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreen")," depending on if the user clicks a ",(0,o.kt)("inlineCode",{parentName:"li"},"floatingActionButton")," or a ",(0,o.kt)("inlineCode",{parentName:"li"},"TasksListScreen.onClickBody"),". See the ",(0,o.kt)("a",{parentName:"li",href:"./navigation"},"navigation section for more information on the routes")),(0,o.kt)("li",{parentName:"ol"},"Create reference to the ",(0,o.kt)("inlineCode",{parentName:"li"},"TasksListScreenViewModel")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"val tasksListViewModel: TasksListScreenViewModel = viewModel();")),(0,o.kt)("li",{parentName:"ol"},"Now let's tell the ",(0,o.kt)("inlineCode",{parentName:"li"},"@Composable")," to observe the ",(0,o.kt)("inlineCode",{parentName:"li"},"viewModel.tasks")," as State object with ",(0,o.kt)("inlineCode",{parentName:"li"},"val tasks: List<Task> by tasksListViewModel.tasks.observeAsState(emptyList())"),". The syntax ",(0,o.kt)("inlineCode",{parentName:"li"},"by")," and function ",(0,o.kt)("inlineCode",{parentName:"li"},"observeAsState(emptyList())")," will tell the ",(0,o.kt)("inlineCode",{parentName:"li"},"@Composable")," to subscribe to changes. For more ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/jetpack/compose/state#viewmodel-state"},"information about ",(0,o.kt)("inlineCode",{parentName:"a"},"observeAsState")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"ViewModel"),", click here.")),(0,o.kt)("li",{parentName:"ol"},"We'll add a ",(0,o.kt)("inlineCode",{parentName:"li"},"TopAppBar")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ExtendedFloatingActionButton")," along with our ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskList")," all wrapped in a ",(0,o.kt)("inlineCode",{parentName:"li"},"Scaffold")," view. ",(0,o.kt)("inlineCode",{parentName:"li"},"Scaffold"),' are handy ways to layout a more "standard" Android screen. ',(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Scaffold(androidx.compose.ui.Modifier,androidx.compose.material.ScaffoldState,kotlin.Function0,kotlin.Function0,kotlin.Function1,kotlin.Function0,androidx.compose.material.FabPosition,kotlin.Boolean,kotlin.Function1,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.ui.unit.Dp,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1)"},"Learn more about ",(0,o.kt)("inlineCode",{parentName:"a"},"Scaffold"),"s here")),(0,o.kt)("li",{parentName:"ol"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"ExtendedFloatingActionButton.onClick")," handler to navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"task/edit")," route of the ",(0,o.kt)("inlineCode",{parentName:"li"},"navController")),(0,o.kt)("li",{parentName:"ol"},"Use our ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskList")," inside of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Scaffold.content"),". Pass the ",(0,o.kt)("inlineCode",{parentName:"li"},"tasks")," from step 2. into the ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskList")),(0,o.kt)("li",{parentName:"ol"},"Bind the ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskList.onToggle")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"tasksListViewModel.toggle")),(0,o.kt)("li",{parentName:"ol"},"Bind the ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskList.onClickBody")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},'navController.navigate("tasks/edit/${task._id}")'),". This will tell the ",(0,o.kt)("inlineCode",{parentName:"li"},"navController")," to go the ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreen")," (we will create this in the next section)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TasksListScreen.kt"',title:'"TasksListScreen.kt"'},'@Composable\nfun TasksListScreen(navController: NavController) {\n    // 2.\n    val tasksListViewModel: TasksListScreenViewModel = viewModel();\n    // 3.\n    val tasks: List<Task> by tasksListViewModel.tasks.observeAsState(emptyList())\n\n    // 4.\n    Scaffold(\n        topBar = {\n            TopAppBar(\n                title = { Text("Tasks Jetpack Compose") },\n                backgroundColor = colorResource(id = R.color.purple_700)\n            )\n        },\n        floatingActionButton = {\n            ExtendedFloatingActionButton(\n                icon = { Icon(Icons.Filled.Add, "") },\n                text = { Text(text = "New Task") },\n                // 5.\n                onClick = { navController.navigate("tasks/edit") },\n                elevation = FloatingActionButtonDefaults.elevation(8.dp)\n            )\n        },\n        floatingActionButtonPosition = FabPosition.End,\n        scaffoldState = scaffoldState,\n        content = {\n            TasksList(\n                // 6\n                tasks = tasks,\n                // 7.\n                onToggle = { tasksListViewModel.toggle(it) },\n                // 8.\n                onClickBody = { task ->\n                    navController.navigate("tasks/edit/${task._id}")\n                }\n            )\n        }\n    )\n}\n')))}c.isMDXComponent=!0},48188:function(e,t,n){t.Z=n.p+"assets/images/TaskRowPreview-0445fa4c600397ab89c97d9bab6f8415.png"},88593:function(e,t,n){t.Z=n.p+"assets/images/task-row-preview-af8072ce125f00667db08e23fa27be28.png"}}]);
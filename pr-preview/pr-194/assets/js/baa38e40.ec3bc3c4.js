"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[174],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,k=p["".concat(s,".").concat(f)]||p[f]||c[f]||a;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},32389:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"4 - Editing Tasks"},s=void 0,u={unversionedId:"tutorials/uikit/edit-tasks",id:"tutorials/uikit/edit-tasks",isDocsHomePage:!1,title:"4 - Editing Tasks",description:"4-1 Select Task To Complete",source:"@site/docs/tutorials/uikit/4-edit-tasks.md",sourceDirName:"tutorials/uikit",slug:"/tutorials/uikit/edit-tasks",permalink:"/pr-preview/pr-194/tutorials/uikit/edit-tasks",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/uikit/4-edit-tasks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4 - Editing Tasks"},sidebar:"tutorialSidebar",previous:{title:"3 - Showing the List of Tasks",permalink:"/pr-preview/pr-194/tutorials/uikit/tasks-list-screen"},next:{title:"1 - Setup",permalink:"/pr-preview/pr-194/tutorials/android-kotlin/setup"}},d=[{value:"4-1 Select Task To Complete",id:"4-1-select-task-to-complete",children:[],level:2},{value:"4-2 Swipe To Delete Task",id:"4-2-swipe-to-delete-task",children:[],level:2},{value:"4-3 Build and Run!",id:"4-3-build-and-run",children:[],level:2}],c={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"4-1-select-task-to-complete"},"4-1 Select Task To Complete"),(0,a.kt)("p",null,"When the user selects the task in the table view, we want to mark the task completed. Adjust your ",(0,a.kt)("inlineCode",{parentName:"p"},"TasksTableViewController")," to include the following code (these functions were already created when the file was generated by Xcode):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},' override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {\n    // Deselect the row so it is not highlighted\n    tableView.deselectRow(at: indexPath, animated: true)\n    // Retrieve the task at the row selected\n    let task = tasks[indexPath.row]\n    // Update the task to mark completed\n    collection.findByID(task.id).update({ (newTask) in\n        newTask?["isCompleted"].set(!task["isCompleted"].boolValue)\n    })\n}\n\noverride func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {\n    // Return false if you do not want the specified item to be editable.\n    return true\n}\n')),(0,a.kt)("p",null,"This action makes use of Ditto's ",(0,a.kt)("inlineCode",{parentName:"p"},"update()")," API where we are able to find the existing task and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"isCompleted")," value to the opposite of its current value."),(0,a.kt)("h2",{id:"4-2-swipe-to-delete-task"},"4-2 Swipe To Delete Task"),(0,a.kt)("p",null,"Finally, we want to allow the user to delete a task by swiping the row in the table view. Adjust your ",(0,a.kt)("inlineCode",{parentName:"p"},"TasksTableViewController")," to include the following code (this function was already created when the file was generated by Xcode):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// Override to support editing the table view.\noverride func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {\n    if editingStyle == .delete {\n        // Retrieve the task at the row swiped\n        let task = tasks[indexPath.row]\n        // Delete the task from Ditto\n        collection.findByID(task.id).remove()\n    }\n}\n")),(0,a.kt)("p",null,"This action makes use of Ditto's ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," API which will delete it."),(0,a.kt)("h2",{id:"4-3-build-and-run"},"4-3 Build and Run!"),(0,a.kt)("p",null,"\ud83c\udf89 You now have a fully functioning ToDo app. Build and run it on the simulator or devices and observe the automatic data sync provided by Ditto:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(61757).Z})))}p.isMDXComponent=!0},61757:function(e,t,n){t.Z=n.p+"assets/images/ios-sync-fd18edfe757e4e6090f03dc59a1b664e.gif"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports={filterActive:"TodoListFooter_filterActive__3_4K7",footerWrapper:"TodoListFooter_footerWrapper__b6yeT",footerBtns:"TodoListFooter_footerBtns__1iAmK",deleteTodo:"TodoListFooter_deleteTodo__eiVAW"}},22:function(e,t,a){e.exports={appHeader:"App_appHeader__2PTwP",appError:"App_appError__3edhq",appBtnComeBack:"App_appBtnComeBack__HMfwm",appTodoWrapper:"App_appTodoWrapper__7cxLj"}},23:function(e,t,a){e.exports={addNewTask:"AddNewItemForm_addNewTask__3ay4J",addNewTodo:"AddNewItemForm_addNewTodo__1V9og",error:"AddNewItemForm_error__1nkfx"}},29:function(e,t,a){e.exports={todoWrapper:"TodoList_todoWrapper__rWz_v",todoMain:"TodoList_todoMain__1AnzC"}},30:function(e,t,a){e.exports={titleSize:"TodoListTitle_titleSize__s_EM8",titleElement:"TodoListTitle_titleElement__3j0C5",deleteBtn:"TodoListTitle_deleteBtn__eulOG"}},44:function(e,t,a){e.exports={tasksBlock:"TodoListTasks_tasksBlock__1dY2O"}},47:function(e,t,a){e.exports=a(76)},52:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),s=a.n(o);a(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(19),i=a(40),l=a(10),d=a.n(l),p=a(16),u=a(21),h=a(2),T=a(41),m=a.n(T).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"d9c16d66-ba42-42bd-b62f-4ee659edaf4c"}}),f=function(e){return m.post("",{title:e})},k=function(){return m.get("")},v=function(e){return m.get("/".concat(e,"/tasks"))},g=function(e,t){return m.post("/".concat(e,"/tasks"),{title:t})},E=function(e,t,a){return m.put("/".concat(e,"/tasks/").concat(t),a)},C=function(e){return m.delete("/".concat(e))},_=function(e,t){return m.delete("".concat(e,"/tasks/").concat(t))},O=function(e,t){return m.put("/".concat(e),{title:t})};function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var y="Todolist/reducer/ADD_TASK",S={todolists:[],error:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Todolist/reducer/SET_TODOLISTS":return w({},e,{todolists:t.todolists.map(function(e){return w({},e,{tasks:[]})})});case"Todolist/reducer/ADD_TODOLIST":return w({},e,{todolists:[t.newTodolist].concat(Object(u.a)(e.todolists))});case"Todolist/reducer/SET_TASKS":return w({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?w({},e,{tasks:t.tasks}):e})});case y:return w({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?w({},e,{tasks:[t.newTask].concat(Object(u.a)(e.tasks))}):e})});case"Todolist/reducer/CHANGE_TASK":return w({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?w({},e,{tasks:e.tasks.map(function(e){return e.id===t.taskId?w({},e,{},t.obj):e})}):e})});case"Todolist/reducer/CHANGE_HEADER":return w({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?w({},e,{},t.title):e})});case"Todolist/reducer/DETELE_TODOLIST":return w({},e,{todolists:e.todolists.filter(function(e){return e.id!==t.todolistId})});case"Todolist/reducer/DELETE_TASK":return w({},e,{todolists:e.todolists.map(function(e){return e.id===t.todolistId?w({},e,{tasks:e.tasks.filter(function(e){return e.id!==t.taskId})}):e})});case"Todolist/reducer/SHOW_ERROR":return w({},e,{error:!0});case"Todolist/reducer/SHOW_TODOLISTS":return w({},e,{error:!1})}return e},j=function(e){return{type:"Todolist/reducer/ADD_TODOLIST",newTodolist:e}},A=function(e,t){return{type:"Todolist/reducer/SET_TASKS",tasks:e,todolistId:t}},N=function(e,t){return{type:y,newTask:e,todolistId:t}},x=function(e,t,a){return{type:"Todolist/reducer/CHANGE_TASK",taskId:e,obj:t,todolistId:a}},I=function(e,t){return{type:"Todolist/reducer/CHANGE_HEADER",todolistId:e,title:t}},L=function(e){return{type:"Todolist/reducer/DETELE_TODOLIST",todolistId:e}},B=function(e,t){return{type:"Todolist/reducer/DELETE_TASK",taskId:e,todolistId:t}},M=a(42),W=Object(c.createStore)(D,Object(M.composeWithDevTools)(Object(c.applyMiddleware)(i.a))),H=a(20),P=a(4),F=a(8),V=a(5),z=a(6),K=a(7),R=a(22),G=a.n(R),J=a(29),U=a.n(J),Y=a(30),Z=a.n(Y),q=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).state={editMode:!1,title:a.props.title,error:!1},a.activateEditMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){var e=a.state.title;""===e?a.setState({error:!0}):(a.setState({error:!1,title:"",editMode:!1}),a.props.changeHeaderTitleTC(e))},a.changeHeader=function(e){e.currentTarget.value.length>55?a.setState({error:!0}):a.setState({title:e.currentTarget.value,error:!1})},a.render=function(){return r.a.createElement("div",null,r.a.createElement("div",null,a.state.editMode?r.a.createElement("input",{onChange:a.changeHeader,autoFocus:!0,onBlur:a.deactivateEditMode,value:a.state.title,className:Z.a.titleElement}):r.a.createElement("h3",{onDoubleClick:a.activateEditMode,className:Z.a.titleSize},a.props.title)))},a}return Object(K.a)(t,e),t}(r.a.Component),Q=a(23),X=a.n(Q),$=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).state={error:!1,title:""},a.onAddItemButtonClick=function(){var e=a.state.title;""===e?a.setState({error:!0}):(a.setState({error:!1,title:""}),a.props.addItem(e))},a.changeOnKeyPress=function(e){"Enter"===e.key&&a.onAddItemButtonClick()},a.changeValueTitle=function(e){e.currentTarget.value.length>100?a.setState({error:!0}):a.setState({title:e.currentTarget.value,error:!1})},a.render=function(){var e="addNewTask"===a.props.style?"".concat(X.a.addNewTask):"addNewTodo"===a.props.style?"".concat(X.a.addNewTodo):"",t=!0===a.state.error?"".concat(X.a.error," ").concat(e):"".concat(e);return r.a.createElement("div",{className:t},r.a.createElement("div",{className:e},r.a.createElement("input",{type:"text",placeholder:a.props.placeholder,onKeyPress:a.changeOnKeyPress,className:e,value:a.state.title,onChange:a.changeValueTitle}),r.a.createElement("button",{onClick:a.onAddItemButtonClick},"ADD")))},a}return Object(K.a)(t,e),t}(r.a.Component),ee=a(44),te=a.n(ee),ae=a(9),ne=a.n(ae),re=a(46),oe=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",null,"Task name:"),r.a.createElement("input",{className:ne.a.taskChangeElement,onChange:a.props.onTitleChanged,autoFocus:!0,value:a.props.title})),r.a.createElement("div",null,r.a.createElement("span",null,"Description:"),r.a.createElement("textarea",{className:ne.a.taskChangeElement,onChange:a.props.onDescriptionChanged,value:a.props.description})),r.a.createElement("div",null,r.a.createElement("span",null,"Priority:"),r.a.createElement(re.a,{options:[{value:0,label:"Low"},{value:1,label:"Middle"},{value:2,label:"Hight"},{value:3,label:"Urgently"},{value:4,label:"Later"}],onChange:a.props.handleChange,className:ne.a.taskSelectPriority,value:a.props.selectedOption,onBlur:a.props.deactivateEditMode})),r.a.createElement("div",null,r.a.createElement("span",null,"Created by: "),r.a.createElement("input",{className:ne.a.taskChangeElement,type:"date",onChange:a.props.changeStartDate})),r.a.createElement("div",null,r.a.createElement("span",null,"Deadline: "),r.a.createElement("input",{className:ne.a.taskChangeElement,type:"date",onChange:a.props.changeDeadline})),r.a.createElement("button",{className:ne.a.taskInfoBtnSave,onClick:a.props.deactivateEditMode},"Save"))},a}return Object(K.a)(t,e),t}(r.a.Component),se=a(24),ce=a.n(se),ie=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=a.props.task.startDate?ce()(a.props.task.startDate,"longDate"):"set start date",t=a.props.task.deadline?ce()(a.props.task.deadline,"longDate"):"set deadline",n=ce()(a.props.task.addedDate,"longDate"),o="";switch(a.props.task.priority){case 0:o="Low";break;case 1:o="Middle";break;case 2:o="Hight";break;case 3:o="Urgently";break;case 4:o="Later"}return r.a.createElement("div",{className:ne.a.taskWrapperWord},r.a.createElement("div",{className:ne.a.taskButtons},r.a.createElement("a",{onClick:a.props.deleteTask},r.a.createElement("div",{className:ne.a.taskSVG},r.a.createElement("svg",{height:"15px",viewBox:"0 0 512 512",width:"15px",fill:"#c30202",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m176.8125 351.1875c-4.097656 0-8.195312-1.554688-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.632813l158.378906-158.402343c6.25-6.25 16.382813-6.25 22.632813 0 6.253906 6.25 6.253906 16.382812 0 22.636718l-158.378906 158.398438c-3.132813 3.136718-7.230469 4.691406-11.324219 4.691406zm0 0"}),r.a.createElement("path",{d:"m335.1875 351.1875c-4.09375 0-8.191406-1.554688-11.304688-4.691406l-158.378906-158.378906c-6.25-6.25-6.25-16.382813 0-22.632813 6.25-6.253906 16.382813-6.253906 22.632813 0l158.378906 158.398437c6.253906 6.25 6.253906 16.382813 0 22.632813-3.132813 3.117187-7.230469 4.671875-11.328125 4.671875zm0 0"}),r.a.createElement("path",{d:"m453.332031 512h-394.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-394.664062c0-32.363281 26.304688-58.667969 58.667969-58.667969h394.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969v394.664062c0 32.363281-26.304688 58.667969-58.667969 58.667969zm-394.664062-480c-14.699219 0-26.667969 11.96875-26.667969 26.667969v394.664062c0 14.699219 11.96875 26.667969 26.667969 26.667969h394.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-394.664062c0-14.699219-11.96875-26.667969-26.667969-26.667969zm0 0"})))),r.a.createElement("a",{onClick:a.props.activateEditMode},r.a.createElement("div",{className:ne.a.taskSVG},r.a.createElement("svg",{height:"15px",viewBox:"0 -1 401.52289 401",width:"15px",fill:"blue",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"}),r.a.createElement("path",{d:"m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"}))))),r.a.createElement("span",{className:ne.a.taskTitle},a.props.task.title),r.a.createElement("p",null,"Description: ",r.a.createElement("span",null,a.props.task.description?a.props.task.description:"set description")),r.a.createElement("p",null,"Priority: ",r.a.createElement("span",null,o||"set priority")),r.a.createElement("p",null,"Added date: ",r.a.createElement("span",null,n||"no date added")),r.a.createElement("p",null,"Start date: ",r.a.createElement("span",null,e||"set start date")),r.a.createElement("p",null,"Deadline: ",r.a.createElement("span",null,t||"set deadline")),r.a.createElement("p",null,"Done: ",r.a.createElement("input",{onChange:a.props.onChangeStatus,type:"checkbox",checked:a.props.task.status,className:ne.a.taskCheckbox})))},a}return Object(K.a)(t,e),t}(r.a.Component),le=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).state={editMode:!1,title:a.props.task.title,description:a.props.task.description,error:!1,selectedOption:null},a.onChangeStatus=function(e){var t=e.currentTarget.checked?2:0;a.props.changeStatus(a.props.task.id,t)},a.activateEditMode=function(){a.setState({editMode:!0})},a.deactivateEditMode=function(){a.props.changeTitle(a.props.task.id,a.state.title),a.props.changeDescription(a.props.task.id,a.state.description),a.setState({editMode:!1})},a.onTitleChanged=function(e){a.setState({title:e.currentTarget.value})},a.onDescriptionChanged=function(e){a.setState({description:e.currentTarget.value})},a.changeStartDate=function(e){a.props.changeStartDate(a.props.task.id,e.currentTarget.value)},a.changeDeadline=function(e){a.props.changeDeadline(a.props.task.id,e.currentTarget.value)},a.deleteTask=function(){a.props.deleteTask(a.props.task.id)},a.handleChange=function(e){a.setState({selectedOption:e},function(){return a.props.changePriority(a.props.task.id,e.value)})},a.render=function(){var e=a.props.task.status?"".concat(ne.a.taskBlock," ").concat(ne.a.done):"".concat(ne.a.taskBlock);return r.a.createElement("div",{className:ne.a.taskWrapper},r.a.createElement("div",{className:e},a.state.editMode?r.a.createElement(oe,{onTitleChanged:a.onTitleChanged,onDescriptionChanged:a.onDescriptionChanged,title:a.state.title,description:a.state.description,handleChange:a.handleChange,selectedOption:a.state.selectedOption,deactivateEditMode:a.deactivateEditMode,changeStartDate:a.changeStartDate,changeDeadline:a.changeDeadline}):r.a.createElement(ie,{deleteTask:a.deleteTask,activateEditMode:a.activateEditMode,task:a.props.task,onChangeStatus:a.onChangeStatus})))},a}return Object(K.a)(t,e),t}(r.a.Component),de=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=a.props.tasks.map(function(e){return r.a.createElement(le,{key:e.id,task:e,changeStatus:a.props.changeStatus,changeTitle:a.props.changeTitle,deleteTask:a.props.deleteTask,changePriority:a.props.changePriority,changeDescription:a.props.changeDescription,changeStartDate:a.props.changeStartDate,changeDeadline:a.props.changeDeadline})});return r.a.createElement("div",{className:te.a.tasksBlock},e)},a}return Object(K.a)(t,e),t}(r.a.Component),pe=a(17),ue=a.n(pe),he=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).onAllFilterClick=function(){a.props.changeFilter("All")},a.onCompletedFilterClick=function(){a.props.changeFilter("Completed")},a.onActiveFilterClick=function(){a.props.changeFilter("Active")},a.render=function(){var e="All"===a.props.filterValue?"".concat(ue.a.filterActive):"".concat(ue.a.footerBtns),t="Completed"===a.props.filterValue?"".concat(ue.a.filterActive):"".concat(ue.a.footerBtns),n="Active"===a.props.filterValue?"".concat(ue.a.filterActive):"".concat(ue.a.footerBtns);return r.a.createElement("div",{className:ue.a.footerWrapper},r.a.createElement("div",{onClick:a.onAllFilterClick,className:e},"All"),r.a.createElement("div",{onClick:a.onCompletedFilterClick,className:t},"Completed"),r.a.createElement("div",{onClick:a.onActiveFilterClick,className:n},"Active"),r.a.createElement("div",{onClick:a.props.deleteTodolist,className:ue.a.deleteTodo},"Delete"))},a}return Object(K.a)(t,e),t}(r.a.Component),Te=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).state={filterValue:"All"},a.addItem=function(e){a.props.addTaskTC(a.props.id,e)},a.changeFilter=function(e){a.setState({filterValue:e})},a.changeTaskTC=function(e,t){a.props.changeTaskTC(e,t,a.props.id)},a.changeStatus=function(e,t){a.changeTaskTC(e,{status:t})},a.changeTitle=function(e,t){a.changeTaskTC(e,{title:t})},a.changePriority=function(e,t){a.changeTaskTC(e,{priority:t})},a.changeDescription=function(e,t){a.changeTaskTC(e,{description:t})},a.changeStartDate=function(e,t){a.changeTaskTC(e,{startDate:t})},a.changeDeadline=function(e,t){a.changeTaskTC(e,{deadline:t})},a.changeHeaderTitleTC=function(e){a.props.changeHeaderTC(a.props.id,e)},a.deleteTodolist=function(){a.props.deleteTodolistTC(a.props.id)},a.deleteTaskTC=function(e){a.props.deleteTaskTC(e,a.props.id)},a.render=function(){var e=a.props.tasks,t=void 0===e?[]:e;return r.a.createElement("div",{className:U.a.todoWrapper},r.a.createElement("div",null,r.a.createElement(q,{title:a.props.title,changeHeaderTitleTC:a.changeHeaderTitleTC,id:a.props.id}),r.a.createElement($,{addItem:a.addItem,style:"addNewTask",placeholder:"new task"})),r.a.createElement("div",{className:U.a.todoMain},r.a.createElement(de,{changeStatus:a.changeStatus,changeTitle:a.changeTitle,changePriority:a.changePriority,changeDescription:a.changeDescription,changeStartDate:a.changeStartDate,changeDeadline:a.changeDeadline,deleteTask:a.deleteTaskTC,tasks:t.filter(function(e){return"All"===a.state.filterValue||("Active"===a.state.filterValue?0===e.status:"Completed"===a.state.filterValue?2===e.status:void 0)})}),r.a.createElement(he,{changeFilter:a.changeFilter,filterValue:a.state.filterValue,deleteTodolist:a.deleteTodolist})))},a}return Object(K.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){this.props.getTasksTC(this.props.id)}}]),t}(r.a.Component),me=Object(H.b)(null,{getTasksTC:function(e){return function(){var t=Object(p.a)(d.a.mark(function t(a){var n,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:n=t.sent,r=n.data.items,a(A(r,e));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},addTaskTC:function(e,t){return function(){var a=Object(p.a)(d.a.mark(function a(n){var r,o;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(e,t);case 2:r=a.sent,o=r.data.data.item,1===r.data.resultCode?n({type:"Todolist/reducer/SHOW_ERROR"}):n(N(o,e));case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},changeTaskTC:function(e,t,a){return function(n,r){r().todolists.find(function(e){return e.id===a}).tasks.forEach(function(){var r=Object(p.a)(d.a.mark(function r(o){var s;return d.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o.id!==e){r.next=6;break}return s=w({},o,{},t),r.next=4,E(a,e,s);case 4:r.sent,n(x(e,t,a));case 6:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}())}},deleteTodolistTC:function(e){return function(){var t=Object(p.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:t.sent,a(L(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteTaskTC:function(e,t){return function(){var a=Object(p.a)(d.a.mark(function a(n){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_(t,e);case 2:a.sent,n(B(e,t));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},changeHeaderTC:function(e,t){return function(){var a=Object(p.a)(d.a.mark(function a(n){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(e,t);case 2:a.sent,n(I(e,{title:t}));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(Te),fe=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(V.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).nextTodoListId=0,a.state={todolists:[]},a.onAddTodoListClick=function(e){a.props.addTodolistTC(e)},a.showTodolists=function(){a.props.showTodolistsAC()},a.render=function(){return r.a.createElement("div",{className:G.a.appWrapper},a.props.error?r.a.createElement("div",{className:G.a.appError},"The maximum number of to-do lists is not more than 10, and tasks in the to-do list are not more than 100",r.a.createElement("button",{className:G.a.appBtnComeBack,onClick:a.showTodolists},"Come back")):r.a.createElement("div",null,r.a.createElement("div",{className:G.a.appHeader},r.a.createElement("h1",null,"To-do list app"),r.a.createElement($,{addItem:a.onAddTodoListClick,style:"addNewTodo",placeholder:"new to-do list"})),r.a.createElement("div",{className:G.a.appTodoWrapper},a.props.todolists.map(function(e){return r.a.createElement(me,{key:e.id,id:e.id,title:e.title,tasks:e.tasks})}))))},a}return Object(K.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){this.props.getTodolistsTC()}}]),t}(r.a.Component),ke=Object(H.b)(function(e){return{todolists:e.todolists,error:e.error}},{getTodolistsTC:function(){return function(){var e=Object(p.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:a=e.sent,t({type:"Todolist/reducer/SET_TODOLISTS",todolists:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},addTodolistTC:function(e){return function(){var t=Object(p.a)(d.a.mark(function t(a){var n,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:n=t.sent,r=n.data.data.item,1===n.data.resultCode?a({type:"Todolist/reducer/SHOW_ERROR"}):a(j(r));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},showTodolistsAC:function(){return{type:"Todolist/reducer/SHOW_TODOLISTS"}}})(fe);s.a.render(r.a.createElement(H.a,{store:W},r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports={taskWrapper:"TodoListTask_taskWrapper__2GXDY",taskBlock:"TodoListTask_taskBlock__3b92N",done:"TodoListTask_done__26FiC",taskTitle:"TodoListTask_taskTitle__FJzZV",taskButtons:"TodoListTask_taskButtons__2uWoT",taskCheckbox:"TodoListTask_taskCheckbox__3vuCh",taskChangeElement:"TodoListTask_taskChangeElement__doRB8",taskSelectPriority:"TodoListTask_taskSelectPriority__1VHIW",taskInfoBtnSave:"TodoListTask_taskInfoBtnSave__3gkdP",deleteBtn:"TodoListTask_deleteBtn__2Fw0I",taskWrapperWord:"TodoListTask_taskWrapperWord__oNMO-",taskSVG:"TodoListTask_taskSVG__34QxZ"}}},[[47,1,2]]]);
//# sourceMappingURL=main.bf31bcd0.chunk.js.map
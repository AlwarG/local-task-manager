(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+1Jk":function(e,t,a){"use strict";a.r(t),function(e){function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=a("hosL"),s=a("FA6U"),o=a.n(s),r=a("31U8"),l=a("xN/h");t.default=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).state={canCloseTaskCreation:!0,isFinishedSelected:!1,searchText:"",isEdit:!1,editableIndex:"",task:{},date:"",isAsc:!0},e.monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e.switchStates=function(t){e.setState({isFinishedSelected:t})},e.openNewTask=function(){e.setState({isEdit:!1,canCloseTaskCreation:!1})},e.editTask=function(t){e.setState({date:t.date,editableIndex:t.index,canCloseTaskCreation:!1,isEdit:!0})},e.closeNewTask=function(t){e.setState({canCloseTaskCreation:!0}),t&&alert(t)},e.getFormattedDates=function(t){return t.map((function(t){var a=new Date(t),n=e.monthNames[a.getMonth()];return(1==a.getDate().toString().length?"0":"")+a.getDate()+" "+n+" "+a.getFullYear()}))},e.initiateSearch=function(t){e.setState({searchText:t.currentTarget.value})},e.changeSortOrder=function(t){console.log("kdkd",t),e.setState({isAsc:t})},e}var i,s;return s=t,(i=a).prototype=Object.create(s.prototype),i.prototype.constructor=i,n(i,s),a.prototype.render=function(t,a){var n=this,i=a.isFinishedSelected,s=a.canCloseTaskCreation,c=a.searchText,d=a.isEdit,u=a.editableIndex,h=a.date,p=a.isAsc;if("undefined"!=typeof window){var g=window.localStorage.getItem("dates");g=(g=(g=JSON.parse(g))||[]).sort(p?function(e,t){return new Date(e)-new Date(t)}:function(e,t){return new Date(t)-new Date(e)});var f=this.getFormattedDates(g);return e("div",null,e("div",{class:"columns "+o.a.home+" is-align-items-center"},e("div",{class:"dropdown is-hoverable column"},e("b",{class:"is-size-1",style:{color:"#0c1be2"}},"LTM")),e("input",{class:"column input is-rounded is-medium is-three-quarters",type:"text",placeholder:"Search your task...",value:c,onchange:this.initiateSearch}),e("div",{class:"column has-text-centered"},e("button",{class:"button is-link",onclick:this.openNewTask},"New Task"))),e("div",{class:"tabs is-large is-boxed",style:"width: 74%; margin: 0px auto;"},e("ul",null,e("li",{class:i?"":"is-active",onclick:function(){return n.switchStates(!1)}},e("a",null,"Unfinished")),e("li",{class:i?"is-active":"",onclick:function(){return n.switchStates(!0)}},e("a",null,"Finished"))),p?e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48px",height:"48px",viewBox:"0 0 24 24",stroke:"#2329D6","stroke-width":"1","stroke-linecap":"square","stroke-linejoin":"miter",fill:"none",color:"#2329D6",class:"cursor-pointer "+o.a.sortIcon,onclick:function(){return n.changeSortOrder(!1)}},e("path",{d:"M11 9H17"}),e("path",{d:"M11 5H19"}),e("path",{d:"M11 13H15"}),e("path",{d:"M10 17L7 20L4 17"}),e("path",{d:"M7 5V19"})):e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48px",height:"48px",viewBox:"0 0 24 24",stroke:"#2329D6","stroke-width":"1","stroke-linecap":"square","stroke-linejoin":"miter",fill:"none",color:"#2329D6",class:"cursor-pointer "+o.a.sortIcon,onclick:function(){return n.changeSortOrder(!0)}},e("path",{d:"M11 16H17"}),e("path",{d:"M11 20H19"}),e("path",{d:"M11 12H15"}),e("path",{d:"M4 8L7 5L10 8"}),e("path",{d:"M7 20L7 6"}))),e(l.a,{dates:g,formattedDates:f,isFinishedSelected:i,searchText:c,editTask:this.editTask}),s?"":e(r.a,{closeNewTask:this.closeNewTask,isEdit:d,editableIndex:u,date:h}))}},a}(i.Component)}.call(this,a("hosL").h)},"31U8":function(e,t,a){"use strict";(function(e){function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a("QJoO");var s=a("hosL");t.a=function(t){function a(){for(var a,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(a=t.call.apply(t,[this].concat(s))||this).state={error:"",task:"",description:"",date:(new Date).getFullYear()+"-"+(1==((new Date).getMonth()+1).toString().length?"0":"")+((new Date).getMonth()+1)+"-"+(1==(new Date).getDate().toString().length?"0":"")+(new Date).getDate()},a.changeValue=function(e,t){var n={};n[t]=e,a.setState(n)},a.createNewTask=function(e){var t=e.resultObj,i=e.closeNewTask,s=e.msg,o=n(a).state,r=window.localStorage,l=r.getItem(o.date);if(l)return(l=JSON.parse(l)).map((function(e){return e.task})).includes(o.task)?void a.setState({error:"Task Name already exists"}):(l.push(t),r.setItem(o.date,JSON.stringify(l)),a.addDates(),void i(s||"Your Task added successfully"));r.setItem(o.date,JSON.stringify([t])),a.addDates(),i(s||"Your Task added successfully")},a.createTask=function(e){var t=e.closeNewTask,i=e.date,s=e.editableIndex,o=e.isEdit,r=n(a).state;if(a.setState({error:""}),r.task)if(r.date&&NaN!==!new Date(r.date).getTime()){var l={task:r.task};if(r.description&&(l.description=r.description),o){var c=window.localStorage,d=c.getItem(i);return d=JSON.parse(d)||[],l.isFinished=!!d[s].isFinished,i===r.date?(d[s]=l,c.setItem(r.date,JSON.stringify(d)),void t("Your Task Edited successfully")):(delete d[s],(d=d.filter((function(e){return e}))).length?c.setItem(i,JSON.stringify(d)):c.removeItem(i),void a.createNewTask({resultObj:l,closeNewTask:t,msg:"Your Task Edited successfully"}))}a.createNewTask({resultObj:l,closeNewTask:t})}else a.setState({error:"Kindly select the date"});else a.setState({error:"Kindly fill the task"})},a.addDates=function(){var e=window.localStorage,t=e.getItem("dates"),n=a.state.date;t?(t=JSON.parse(t)).includes(n)||(t.push(n),e.setItem("dates",JSON.stringify(t))):e.setItem("dates",JSON.stringify([n]))},a.errorBlock=function(){if(a.state.error)return e("article",{class:"message is-danger"},e("div",{class:"message-body p-3"},a.state.error))},a.componentDidMount=function(){var e=a.props,t=e.date,n=e.editableIndex;if(e.isEdit&&t){var i=localStorage.getItem(t),s=(i=JSON.parse(i)||[])[n]||{},o=s.task;o&&a.setState({task:o,description:s.description,date:t})}},a}var s,o;return o=t,(s=a).prototype=Object.create(o.prototype),s.prototype.constructor=s,i(s,o),a.prototype.render=function(t,a){var n=this,i=t.closeNewTask,s=t.isEdit;return e("div",{class:"modal is-active"},e("div",{class:"modal-background"}),e("div",{class:"modal-card"},e("header",{class:"modal-card-head"},e("p",{class:"modal-card-title"},s?"Edit":"New"," Task"),e("button",{class:"delete","aria-label":"close",onclick:function(){i()}})),e("section",{class:"modal-card-body"},this.errorBlock(),e("div",{class:"field"},e("label",{class:"label"},"Task"),e("div",{class:"control"},e("input",{class:"input",type:"text",placeholder:"Type your Task",value:a.task,onchange:function(e){return n.changeValue(e.target.value,"task")}}))),e("div",{class:"field"},e("label",{class:"label"},"Description"),e("div",{class:"control"},e("textarea",{class:"textarea",placeholder:"Type your description",value:a.description,onchange:function(e){return n.changeValue(e.target.value,"description")}}))),e("div",{class:"field"},e("label",{class:"label"},"Date"),e("div",{class:"control"},e("input",{type:"date",name:"dateofbirth",id:"dateofbirth",value:a.date,onchange:function(e){return n.changeValue(e.target.value,"date")}})))),e("footer",{class:"modal-card-foot"},e("button",{class:"button is-link",onclick:function(){n.createTask(t)}},s?"Edit":"Create"),e("button",{class:"button is-link is-light is-outlined",onclick:function(){i()}},"Cancel"))))},a}(s.Component)}).call(this,a("hosL").h)},FA6U:function(e){e.exports={home:"home__MseGd",notificationBanner:"notificationBanner__GnNPS",sortIcon:"sortIcon__1UakV"}},QJoO:function(){},ggAE:function(e){e.exports={dateHeading:"dateHeading__D9mbW",accordion:"accordion__3LOg6",active:"active__1GYBM",panel:"panel__ZwcEE",finishedSvg:"finishedSvg__3oOmi",deleteSvg:"deleteSvg__3F8zA",tooltip:"tooltip__wg2gI",tooltiptext:"tooltiptext__2KLF9",overflowAnyware:"overflowAnyware__p9LXI"}},"xN/h":function(e,t,a){"use strict";(function(e){function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i=a("hosL"),s=a("ggAE"),o=a.n(s);t.a=function(t){function a(){for(var a,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=t.call.apply(t,[this].concat(s))||this).getTaskArr=function(e,t,n){var i=a.getDBTasks(e).map((function(e,t){var a=JSON.parse(JSON.stringify(e));return a.originalIndex=t,a}));return i=i.filter(t?function(e){return e.isFinished}:function(e){return!e.isFinished}),n?i.filter((function(e){var t=e.description;return e.task.includes(n)||t.includes(n)})):i},a.dateSection=function(t,n,i,s){return a.getTaskArr(t,i,s).length?e("h1",{class:"is-size-5 "+o.a.dateHeading+" mb-4"},n):""},a.markFinished=function(e,t){var n=t.date,i=t.index,s=t.isFinishedSelected,o=t.searchText;e.stopPropagation();var r=a.getTaskArr(n,s,o)[i].originalIndex,l=a.getDBTasks(n),c=window.localStorage;l[r].isFinished=!s,c.setItem(n,JSON.stringify(l)),alert(s?"Your Task is marked as Unfinished":"Your Task is marked as finished"),window.location.reload()},a.deleteTask=function(e,t){var n=t.date,i=t.index,s=t.isFinishedSelected;e.stopPropagation();var o=a.getTaskArr(n,s)[i].originalIndex,r=a.getDBTasks(n);delete r[o],r=r.filter((function(e){return e}));var l=window.localStorage;r.length?l.setItem(n,JSON.stringify(r)):l.removeItem(n),alert("Your task is deleted Successfully"),window.location.reload()},a.editTask=function(e,t){var n=t.date,i=t.index,s=t.isFinishedSelected,o=t.editTask;e.stopPropagation(),o({index:a.getTaskArr(n,s)[i].originalIndex,date:n})},a.getThumbsIcon=function(t){var n=t.index,i=t.date,s=t.isFinishedSelected,r=t.searchText;return s?e("div",{class:o.a.tooltip},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",class:o.a.deleteSvg,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",onclick:function(e){return a.markFinished(e,{index:n,date:i,isFinishedSelected:s,searchText:r})}},e("path",{d:"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"})),e("span",{class:o.a.tooltiptext},"Mark as Unfinished")):e("div",{class:o.a.tooltip},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",class:""+o.a.finishedSvg,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",onclick:function(e){return a.markFinished(e,{index:n,date:i,isFinishedSelected:s,searchText:r})}},e("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})),e("span",{class:o.a.tooltiptext},"Mark as finished"))},a.getTasks=function(t,n,s,r){return a.getTaskArr(t,n,s).map((function(l,c){var d=l.description;return e(i.Fragment,null,e("button",{class:o.a.accordion+" notification is-link is-light columns is-align-items-center m-0 is-size-4",onclick:a.toggleSlide},e("div",{class:"column is-four-fifths p-0 "+o.a.overflowAnyware},l.task),e("div",{class:"column has-text-right p-0"},a.getThumbsIcon({index:c,date:t,isFinishedSelected:n,searchText:s}),e("div",{class:o.a.tooltip},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"ml-2",onclick:function(e){return a.editTask(e,{index:c,date:t,isFinishedSelected:n,searchText:s,editTask:r})}},e("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})),e("span",{class:o.a.tooltiptext},"Edit")),e("div",{class:o.a.tooltip},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"ml-2 "+o.a.deleteSvg,onclick:function(e){return a.deleteTask(e,{index:c,date:t,isFinishedSelected:n,searchText:s})}},e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e("line",{x1:"14",y1:"11",x2:"14",y2:"17"})),e("span",{class:o.a.tooltiptext},"Delete")))),e("div",{class:""+o.a.panel},d))}))},a}var s,r;r=t,(s=a).prototype=Object.create(r.prototype),s.prototype.constructor=s,n(s,r);var l=a.prototype;return l.getDBTasks=function(e){var t=window.localStorage.getItem(e);return JSON.parse(t)||[]},l.toggleSlide=function(e){var t=e.currentTarget;t.classList.toggle(o.a.active);var a=t.nextElementSibling;a.style.maxHeight=a.style.maxHeight?null:a.scrollHeight+"px"},l.render=function(t){var a=this,n=t.dates,i=t.isFinishedSelected,s=t.searchText,o=t.editTask;return e("div",{style:{width:"74%",margin:"0 auto"}},t.formattedDates.map((function(t,r){return e("div",null,a.dateSection(n[r],t,i,s),a.getTasks(n[r],i,s,o))})))},a}(i.Component)}).call(this,a("hosL").h)}}]);
//# sourceMappingURL=route-home.chunk.2474b.js.map
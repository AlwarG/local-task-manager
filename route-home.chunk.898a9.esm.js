(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+1Jk":function(e,t,s){"use strict";s.r(t),function(e){var i=s("hosL"),a=s("FA6U"),l=s.n(a),o=s("31U8"),n=s("xN/h");t.default=class extends i.Component{constructor(...e){super(...e),this.state={canCloseTaskCreation:!0,isFinishedSelected:!1,searchText:"",isEdit:!1,editableIndex:"",task:{},date:"",isAsc:!0},this.monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.switchStates=e=>{this.setState({isFinishedSelected:e})},this.openNewTask=()=>{this.setState({isEdit:!1,canCloseTaskCreation:!1})},this.editTask=({index:e,date:t})=>{this.setState({date:t,editableIndex:e,canCloseTaskCreation:!1,isEdit:!0})},this.closeNewTask=e=>{this.setState({canCloseTaskCreation:!0}),e&&alert(e)},this.getFormattedDates=e=>e.map(e=>{let t=new Date(e),s=this.monthNames[t.getMonth()];return`${1==t.getDate().toString().length?"0":""}${t.getDate()} ${s} ${t.getFullYear()}`}),this.initiateSearch=({currentTarget:e})=>{this.setState({searchText:e.value})},this.changeSortOrder=e=>{console.log("kdkd",e),this.setState({isAsc:e})}}render(t,{isFinishedSelected:s,canCloseTaskCreation:i,searchText:a,isEdit:r,editableIndex:d,date:c,isAsc:h}){if("undefined"!=typeof window){let{localStorage:t}=window,g=t.getItem("dates");g=JSON.parse(g),g=g||[],g=g.sort(h?(e,t)=>new Date(e)-new Date(t):(e,t)=>new Date(t)-new Date(e));let u=this.getFormattedDates(g);return e("div",null,e("div",{class:`columns ${l.a.home} is-align-items-center`},e("div",{class:"dropdown is-hoverable column"},e("b",{class:"is-size-1",style:{color:"#0c1be2"}},"LTM")),e("input",{class:"column input is-rounded is-medium is-three-quarters",type:"text",placeholder:"Search your task...",value:a,onchange:this.initiateSearch}),e("div",{class:"column has-text-centered"},e("button",{class:"button is-link",onclick:this.openNewTask},"New Task"))),e("div",{class:"tabs is-large is-boxed",style:"width: 74%; margin: 0px auto;"},e("ul",null,e("li",{class:s?"":"is-active",onclick:()=>this.switchStates(!1)},e("a",null,"Unfinished")),e("li",{class:s?"is-active":"",onclick:()=>this.switchStates(!0)},e("a",null,"Finished"))),h?e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48px",height:"48px",viewBox:"0 0 24 24",stroke:"#2329D6","stroke-width":"1","stroke-linecap":"square","stroke-linejoin":"miter",fill:"none",color:"#2329D6",class:"cursor-pointer "+l.a.sortIcon,onclick:()=>this.changeSortOrder(!1)},e("path",{d:"M11 9H17"}),e("path",{d:"M11 5H19"}),e("path",{d:"M11 13H15"}),e("path",{d:"M10 17L7 20L4 17"}),e("path",{d:"M7 5V19"})):e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48px",height:"48px",viewBox:"0 0 24 24",stroke:"#2329D6","stroke-width":"1","stroke-linecap":"square","stroke-linejoin":"miter",fill:"none",color:"#2329D6",class:"cursor-pointer "+l.a.sortIcon,onclick:()=>this.changeSortOrder(!0)},e("path",{d:"M11 16H17"}),e("path",{d:"M11 20H19"}),e("path",{d:"M11 12H15"}),e("path",{d:"M4 8L7 5L10 8"}),e("path",{d:"M7 20L7 6"}))),e(n.a,{dates:g,formattedDates:u,isFinishedSelected:s,searchText:a,editTask:this.editTask}),i?"":e(o.a,{closeNewTask:this.closeNewTask,isEdit:r,editableIndex:d,date:c}))}}}}.call(this,s("hosL").h)},"31U8":function(e,t,s){"use strict";(function(e){s("QJoO");var i=s("hosL");t.a=class extends i.Component{constructor(...t){super(...t),this.state={error:"",task:"",description:"",date:`${(new Date).getFullYear()}-${1==((new Date).getMonth()+1).toString().length?"0":""}${(new Date).getMonth()+1}-${1==(new Date).getDate().toString().length?"0":""}${(new Date).getDate()}`},this.changeValue=(e,t)=>{let s={};s[t]=e,this.setState(s)},this.createNewTask=({resultObj:e,closeNewTask:t,msg:s})=>{let{state:i}=this,{localStorage:a}=window,l=a.getItem(i.date);if(l){return l=JSON.parse(l),l.map(({task:e})=>e).includes(i.task)?void this.setState({error:"Task Name already exists"}):(l.push(e),a.setItem(i.date,JSON.stringify(l)),this.addDates(),void t(s||"Your Task added successfully"))}a.setItem(i.date,JSON.stringify([e])),this.addDates(),t(s||"Your Task added successfully")},this.createTask=({closeNewTask:e,date:t,editableIndex:s,isEdit:i})=>{let{state:a}=this;if(this.setState({error:""}),!a.task)return void this.setState({error:"Kindly fill the task"});if(!a.date||NaN===!new Date(a.date).getTime())return void this.setState({error:"Kindly select the date"});let l={task:a.task};if(a.description&&(l.description=a.description),i){let{localStorage:i}=window,o=i.getItem(t);return o=JSON.parse(o)||[],l.isFinished=!!o[s].isFinished,t===a.date?(o[s]=l,i.setItem(a.date,JSON.stringify(o)),void e("Your Task Edited successfully")):(delete o[s],o=o.filter(e=>e),o.length?i.setItem(t,JSON.stringify(o)):i.removeItem(t),void this.createNewTask({resultObj:l,closeNewTask:e,msg:"Your Task Edited successfully"}))}this.createNewTask({resultObj:l,closeNewTask:e})},this.addDates=()=>{let{localStorage:e}=window,t=e.getItem("dates"),{date:s}=this.state;if(t)return t=JSON.parse(t),void(t.includes(s)||(t.push(s),e.setItem("dates",JSON.stringify(t))));e.setItem("dates",JSON.stringify([s]))},this.errorBlock=()=>{if(this.state.error)return e("article",{class:"message is-danger"},e("div",{class:"message-body p-3"},this.state.error))},this.componentDidMount=()=>{let{date:e,editableIndex:t,isEdit:s}=this.props;if(s&&e){let s=localStorage.getItem(e);s=JSON.parse(s)||[];let{task:i,description:a}=s[t]||{};i&&this.setState({task:i,description:a,date:e})}}}render(t,s){let{closeNewTask:i,isEdit:a}=t;return e("div",{class:"modal is-active"},e("div",{class:"modal-background"}),e("div",{class:"modal-card"},e("header",{class:"modal-card-head"},e("p",{class:"modal-card-title"},a?"Edit":"New"," Task"),e("button",{class:"delete","aria-label":"close",onclick:()=>{i()}})),e("section",{class:"modal-card-body"},this.errorBlock(),e("div",{class:"field"},e("label",{class:"label"},"Task"),e("div",{class:"control"},e("input",{class:"input",type:"text",placeholder:"Type your Task",value:s.task,onchange:({target:e})=>this.changeValue(e.value,"task")}))),e("div",{class:"field"},e("label",{class:"label"},"Description"),e("div",{class:"control"},e("textarea",{class:"textarea",placeholder:"Type your description",value:s.description,onchange:({target:e})=>this.changeValue(e.value,"description")}))),e("div",{class:"field"},e("label",{class:"label"},"Date"),e("div",{class:"control"},e("input",{type:"date",name:"dateofbirth",id:"dateofbirth",value:s.date,onchange:({target:e})=>this.changeValue(e.value,"date")})))),e("footer",{class:"modal-card-foot"},e("button",{class:"button is-link",onclick:()=>{this.createTask(t)}},a?"Edit":"Create"),e("button",{class:"button is-link is-light is-outlined",onclick:()=>{i()}},"Cancel"))))}}}).call(this,s("hosL").h)},FA6U:function(e){e.exports={home:"home__MseGd",notificationBanner:"notificationBanner__GnNPS",sortIcon:"sortIcon__1UakV"}},QJoO:function(){},ggAE:function(e){e.exports={dateHeading:"dateHeading__D9mbW",accordion:"accordion__3LOg6",active:"active__1GYBM",panel:"panel__ZwcEE",finishedSvg:"finishedSvg__3oOmi",deleteSvg:"deleteSvg__3F8zA",tooltip:"tooltip__wg2gI",tooltiptext:"tooltiptext__2KLF9",overflowAnyware:"overflowAnyware__p9LXI"}},"xN/h":function(e,t,s){"use strict";(function(e){var i=s("hosL"),a=s("ggAE"),l=s.n(a);t.a=class extends i.Component{constructor(...t){super(...t),this.getTaskArr=(e,t,s)=>{let i=this.getDBTasks(e).map((e,t)=>{let s=JSON.parse(JSON.stringify(e));return s.originalIndex=t,s});return i=i.filter(t?({isFinished:e})=>e:({isFinished:e})=>!e),s?i.filter(({task:e,description:t})=>e.includes(s)||t.includes(s)):i},this.dateSection=(t,s,i,a)=>this.getTaskArr(t,i,a).length?e("h1",{class:`is-size-5 ${l.a.dateHeading} mb-4`},s):"",this.markFinished=(e,{date:t,index:s,isFinishedSelected:i,searchText:a})=>{e.stopPropagation();let l=this.getTaskArr(t,i,a),{originalIndex:o}=l[s],n=this.getDBTasks(t),{localStorage:r}=window;n[o].isFinished=!i,r.setItem(t,JSON.stringify(n)),alert(i?"Your Task is marked as Unfinished":"Your Task is marked as finished"),window.location.reload()},this.deleteTask=(e,{date:t,index:s,isFinishedSelected:i})=>{e.stopPropagation();let a=this.getTaskArr(t,i),{originalIndex:l}=a[s],o=this.getDBTasks(t);delete o[l],o=o.filter(e=>e);let{localStorage:n}=window;o.length?n.setItem(t,JSON.stringify(o)):n.removeItem(t),alert("Your task is deleted Successfully"),window.location.reload()},this.editTask=(e,{date:t,index:s,isFinishedSelected:i,editTask:a})=>{e.stopPropagation();let l=this.getTaskArr(t,i),{originalIndex:o}=l[s];a({index:o,date:t})},this.getThumbsIcon=({index:t,date:s,isFinishedSelected:i,searchText:a})=>i?e("div",{class:l.a.tooltip},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",class:l.a.deleteSvg,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",onclick:e=>this.markFinished(e,{index:t,date:s,isFinishedSelected:i,searchText:a})},e("path",{d:"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"})),e("span",{class:l.a.tooltiptext},"Mark as Unfinished")):e("div",{class:l.a.tooltip},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",class:""+l.a.finishedSvg,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",onclick:e=>this.markFinished(e,{index:t,date:s,isFinishedSelected:i,searchText:a})},e("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})),e("span",{class:l.a.tooltiptext},"Mark as finished")),this.getTasks=(t,s,a,o)=>this.getTaskArr(t,s,a).map(({task:n,description:r},d)=>e(i.Fragment,null,e("button",{class:l.a.accordion+" notification is-link is-light columns is-align-items-center m-0 is-size-4",onclick:this.toggleSlide},e("div",{class:"column is-four-fifths p-0 "+l.a.overflowAnyware},n),e("div",{class:"column has-text-right p-0"},this.getThumbsIcon({index:d,date:t,isFinishedSelected:s,searchText:a}),e("div",{class:l.a.tooltip},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"ml-2",onclick:e=>this.editTask(e,{index:d,date:t,isFinishedSelected:s,searchText:a,editTask:o})},e("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})),e("span",{class:l.a.tooltiptext},"Edit")),e("div",{class:l.a.tooltip},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"ml-2 "+l.a.deleteSvg,onclick:e=>this.deleteTask(e,{index:d,date:t,isFinishedSelected:s,searchText:a})},e("polyline",{points:"3 6 5 6 21 6"}),e("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e("line",{x1:"14",y1:"11",x2:"14",y2:"17"})),e("span",{class:l.a.tooltiptext},"Delete")))),e("div",{class:""+l.a.panel},r)))}getDBTasks(e){let{localStorage:t}=window,s=t.getItem(e);return JSON.parse(s)||[]}toggleSlide({currentTarget:e}){e.classList.toggle(l.a.active);let{nextElementSibling:t}=e;t.style.maxHeight=t.style.maxHeight?null:t.scrollHeight+"px"}render({dates:t,formattedDates:s,isFinishedSelected:i,searchText:a,editTask:l}){return e("div",{style:{width:"74%",margin:"0 auto"}},s.map((s,o)=>e("div",null,this.dateSection(t[o],s,i,a),this.getTasks(t[o],i,a,l))))}}}).call(this,s("hosL").h)}}]);
//# sourceMappingURL=route-home.chunk.898a9.esm.js.map
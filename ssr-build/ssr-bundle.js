module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="QfWi")}({"31U8":function(t,e,n){"use strict";(function(t){n("QJoO");var i=n("HteQ");function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var o=function(e){var n,i;function o(){for(var n,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=e.call.apply(e,[this].concat(a))||this).state={error:"",task:"",description:"",date:(new Date).getFullYear()+"-"+(1==((new Date).getMonth()+1).toString().length?"0":"")+((new Date).getMonth()+1)+"-"+(1==(new Date).getDate().toString().length?"0":"")+(new Date).getDate()},n.changeValue=function(t,e){var i={};i[e]=t,n.setState(i)},n.createNewTask=function(t){var e=t.resultObj,i=t.closeNewTask,a=t.msg,o=r(n).state,s=window.localStorage,c=s.getItem(o.date);if(c)return(c=JSON.parse(c)).map((function(t){return t.task})).includes(o.task)?void n.setState({error:"Task Name already exists"}):(c.push(e),s.setItem(o.date,JSON.stringify(c)),n.addDates(),void i(a||"Your Task added successfully"));s.setItem(o.date,JSON.stringify([e])),n.addDates(),i(a||"Your Task added successfully")},n.createTask=function(t){var e=t.closeNewTask,i=t.date,a=t.editableIndex,o=t.isEdit,s=r(n).state;if(n.setState({error:""}),s.task)if(s.date&&NaN!==!new Date(s.date).getTime()){var c={task:s.task};if(s.description&&(c.description=s.description),o){var l=window.localStorage,u=l.getItem(i);return u=JSON.parse(u)||[],c.isFinished=!!u[a].isFinished,i===s.date?(u[a]=c,l.setItem(s.date,JSON.stringify(u)),void e("Your Task Edited successfully")):(delete u[a],(u=u.filter((function(t){return t}))).length?l.setItem(i,JSON.stringify(u)):l.removeItem(i),void n.createNewTask({resultObj:c,closeNewTask:e,msg:"Your Task Edited successfully"}))}n.createNewTask({resultObj:c,closeNewTask:e})}else n.setState({error:"Kindly select the date"});else n.setState({error:"Kindly fill the task"})},n.addDates=function(){var t=window.localStorage,e=t.getItem("dates"),i=n.state.date;e?(e=JSON.parse(e)).includes(i)||(e.push(i),t.setItem("dates",JSON.stringify(e))):t.setItem("dates",JSON.stringify([i]))},n.errorBlock=function(){if(n.state.error)return t("article",{class:"message is-danger"},t("div",{class:"message-body p-3"},n.state.error))},n}i=e,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,a(n,i);var s=o.prototype;return s.componentDidUpdate=function(t){var e=t.date,n=this.props,i=n.date,r=n.editableIndex;if(n.isEdit&&e!==i&&i){var a=localStorage.getItem(i),o=(a=JSON.parse(a)||[])[r]||{},s=o.task,c=o.description;s&&this.setState({task:s,description:c,date:i})}},s.render=function(e,n){var i=this,r=e.canCloseTaskCreation,a=e.closeNewTask,o=e.isDirectCreate,s=e.isEdit;return t("div",{class:"modal "+(r?"":"is-active")},t("div",{class:"modal-background"}),t("div",{class:"modal-card"},t("header",{class:"modal-card-head"},t("p",{class:"modal-card-title"},s?"Edit":"New"," Task"),o?"":t("button",{class:"delete","aria-label":"close",onclick:function(){a()}})),t("section",{class:"modal-card-body"},this.errorBlock(),t("div",{class:"field"},t("label",{class:"label"},"Task"),t("div",{class:"control"},t("input",{class:"input",type:"text",placeholder:"Type your Task",value:n.task,onchange:function(t){var e=t.target;return i.changeValue(e.value,"task")}}))),t("div",{class:"field"},t("label",{class:"label"},"Description"),t("div",{class:"control"},t("textarea",{class:"textarea",placeholder:"Type your description",value:n.description,onchange:function(t){var e=t.target;return i.changeValue(e.value,"description")}}))),t("div",{class:"field"},t("label",{class:"label"},"Date"),t("div",{class:"control"},t("input",{type:"date",name:"dateofbirth",id:"dateofbirth",value:n.date,onchange:function(t){var e=t.target;return i.changeValue(e.value,"date")}})))),t("footer",{class:"modal-card-foot"},t("button",{class:"button is-link",onclick:function(){i.createTask(e)}},s?"Edit":"Create"),o?"":t("button",{class:"button is-link is-light is-outlined",onclick:function(){a()}},"Cancel"))))},o}(i.Component);e.a=o}).call(this,n("HteQ").h)},"3br2":function(t,e,n){"use strict";(function(t){var i=n("HteQ"),r=n("FA6U"),a=n.n(r),o=n("31U8"),s=n("xN/h");function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(e){var n,i;function r(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={canCloseTaskCreation:!0,isFinishedSelected:!1,searchText:"",isEdit:!1,editableIndex:"",task:{},date:""},t.monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t.switchStates=function(e){t.setState({isFinishedSelected:e})},t.openNewTask=function(){t.setState({isEdit:!1,canCloseTaskCreation:!1})},t.editTask=function(e){var n=e.index,i=e.date;t.setState({date:i,editableIndex:n,canCloseTaskCreation:!1,isEdit:!0})},t.closeNewTask=function(e){t.setState({canCloseTaskCreation:!0}),e&&alert(e)},t.getFormattedDates=function(e){return e.map((function(e){var n=new Date(e),i=t.monthNames[n.getMonth()];return(1==n.getDate().toString().length?"0":"")+n.getDate()+" "+i+" "+n.getFullYear()}))},t.initiateSearch=function(e){var n=e.currentTarget;t.setState({searchText:n.value})},t}i=e,(n=r).prototype=Object.create(i.prototype),n.prototype.constructor=n,c(n,i);var l=r.prototype;return l.render=function(e,n){var i=this,r=n.isFinishedSelected,c=n.canCloseTaskCreation,l=n.searchText,u=n.isEdit,d=n.editableIndex,p=n.date;if("undefined"!=typeof window){var f=window.localStorage.getItem("dates");if(!f)return t("div",null,t(o.a,{canCloseTaskCreation:!1,closeNewTask:this.closeNewTask,isDirectCreate:!0}));f=(f=JSON.parse(f))||[];var h=this.getFormattedDates(f);return t("div",null,t("div",{class:"columns "+a.a.home+" is-align-items-center"},t("div",{class:"dropdown is-hoverable column"},t("b",{class:"is-size-1",style:{color:"#0c1be2"}},"LTM")),t("input",{class:"column input is-rounded is-medium is-three-quarters",type:"text",placeholder:"Search your task...",value:l,onchange:this.initiateSearch}),t("div",{class:"column has-text-centered"},t("button",{class:"button is-link",onclick:this.openNewTask},"New Task"))),t("div",{class:"tabs is-large is-boxed",style:"width: 74%; margin: 0px auto;"},t("ul",null,t("li",{class:r?"":"is-active",onclick:function(){return i.switchStates(!1)}},t("a",null,"Unfinished")),t("li",{class:r?"is-active":"",onclick:function(){return i.switchStates(!0)}},t("a",null,"Finished")))),t(s.a,{dates:f,formattedDates:h,isFinishedSelected:r,searchText:l,editTask:this.editTask}),t(o.a,{canCloseTaskCreation:c,closeNewTask:this.closeNewTask,isEdit:u,editableIndex:d,date:p}))}},l.componentDidMount=function(){var t=window.localStorage,e=t.getItem("dates");if(e){var n=new Date,i=(e=JSON.parse(e)||[]).filter((function(t){var e=new Date(t),i=Math.abs(e-n);return Math.ceil(i/864e5)<30}));t.setItem("dates",JSON.stringify(i)),e.filter((function(t){var e=new Date(t),i=Math.abs(e-n);return Math.ceil(i/864e5)>30})).forEach((function(e){t.removeItem(e)}))}},r}(i.Component);e.a=l}).call(this,n("HteQ").h)},FA6U:function(t,e,n){t.exports={home:"home__MseGd",notificationBanner:"notificationBanner__GnNPS"}},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},QJoO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var i=n("HteQ"),r={};function a(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var i,a=/(?:\?([^#]*))?(#.*)?$/,o=t.match(a),s={};if(o&&o[1])for(var c=o[1].split("&"),u=0;u<c.length;u++){var d=c[u].split("=");s[decodeURIComponent(d[0])]=decodeURIComponent(d.slice(1).join("="))}t=l(t.replace(a,"")),e=l(e||"");for(var p=Math.max(t.length,e.length),f=0;f<p;f++)if(e[f]&&":"===e[f].charAt(0)){var h=e[f].replace(/(^:|[+*?]+$)/g,""),g=(e[f].match(/[+*?]+$/)||r)[0]||"",v=~g.indexOf("+"),m=~g.indexOf("*"),k=t[f]||"";if(!k&&!m&&(g.indexOf("?")<0||v)){i=!1;break}if(s[h]=decodeURIComponent(k),v||m){s[h]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){i=!1;break}return(!0===n.default||!1!==i)&&s}function s(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(u).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function u(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var d=null,p=[],f=[],h={};function g(){var t;return""+((t=d&&d.location?d.location:d&&d.getCurrentLocation?d.getCurrentLocation():"undefined"!=typeof location?location:h).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=p.length;e--;)if(p[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),d&&d[e]?d[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),m(t)}function m(t){for(var e=!1,n=0;n<p.length;n++)!0===p[n].routeTo(t)&&(e=!0);for(var i=f.length;i--;)f[i](t);return e}function k(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(e)}}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return k(t.currentTarget||t.target||this),w(t)}function w(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function b(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(k(e))return w(t)}}while(e=e.parentNode)}}var x=!1;var S=function(t){function e(e){t.call(this,e),e.history&&(d=e.history),this.state={url:e.url||g()},x||("function"==typeof addEventListener&&(d||addEventListener("popstate",(function(){m(g())})),addEventListener("click",b)),x=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(i.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){p.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;d&&(this.unlisten=d.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(s).map((function(t){var r=o(e,t.props.path,t.props);if(r){if(!1!==n){var s={url:e,matches:r};return a(s,r),delete s.ref,delete s.key,Object(i.cloneElement)(t,s)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,a=e.url,o=this.getMatchingChildren(Object(i.toChildArray)(n),a,!0),s=o[0]||null,c=this.previousUrl;return a!==c&&(this.previousUrl=a,"function"==typeof r&&r({router:this,url:a,previous:c,active:o,current:s})),s},e}(i.Component);S.subscribers=f,S.getCurrentUrl=g,S.route=v,S.Router=S,S.Route=function(t){return Object(i.createElement)(t.component,t)},S.Link=function(t){return Object(i.createElement)("a",a({onClick:y},t))},S.exec=o;var T=n("3br2"),O=function(){return Object(i.h)("div",{id:"app"},Object(i.h)(S,null,Object(i.h)(T.a,{path:"/"})))};e.default=O},ggAE:function(t,e,n){t.exports={dateHeading:"dateHeading__D9mbW",accordion:"accordion__3LOg6",active:"active__1GYBM",panel:"panel__ZwcEE",finishedSvg:"finishedSvg__3oOmi",deleteSvg:"deleteSvg__3F8zA",tooltip:"tooltip__wg2gI",tooltiptext:"tooltiptext__2KLF9",overflowAnyware:"overflowAnyware__p9LXI"}},"xN/h":function(t,e,n){"use strict";(function(t){var i=n("HteQ"),r=n("ggAE"),a=n.n(r);function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(e){var n,r;function s(){for(var n,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=e.call.apply(e,[this].concat(o))||this).getTaskArr=function(t,e,i){var r=n.getDBTasks(t).map((function(t,e){var n=JSON.parse(JSON.stringify(t));return n.originalIndex=e,n}));return r=e?r.filter((function(t){return t.isFinished})):r.filter((function(t){return!t.isFinished})),i?r.filter((function(t){var e=t.task,n=t.description;return e.includes(i)||n.includes(i)})):r},n.dateSection=function(e,i,r,o){return n.getTaskArr(e,r,o).length?t("h1",{class:"is-size-5 "+a.a.dateHeading+" mb-4"},i):""},n.markFinished=function(t,e){var i=e.date,r=e.index,a=e.isFinishedSelected,o=e.searchText;t.stopPropagation();var s=n.getTaskArr(i,a,o)[r].originalIndex,c=n.getDBTasks(i),l=window.localStorage;c[s].isFinished=!a,l.setItem(i,JSON.stringify(c)),alert(a?"Your Task is marked as Unfinished":"Your Task is marked as finished"),window.location.reload()},n.deleteTask=function(t,e){var i=e.date,r=e.index,a=e.isFinishedSelected;t.stopPropagation();var o=n.getTaskArr(i,a)[r].originalIndex,s=n.getDBTasks(i);delete s[o],s=s.filter((function(t){return t}));var c=window.localStorage;s.length?c.setItem(i,JSON.stringify(s)):c.removeItem(i),alert("Your task is deleted Successfully"),window.location.reload()},n.editTask=function(t,e){var i=e.date,r=e.index,a=e.isFinishedSelected,o=e.editTask;t.stopPropagation(),o({index:n.getTaskArr(i,a)[r].originalIndex,date:i})},n.getThumbsIcon=function(e){var i=e.index,r=e.date,o=e.isFinishedSelected,s=e.searchText;return o?t("div",{class:a.a.tooltip},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",class:a.a.deleteSvg,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",onclick:function(t){return n.markFinished(t,{index:i,date:r,isFinishedSelected:o,searchText:s})}},t("path",{d:"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"})),t("span",{class:a.a.tooltiptext},"Mark as Unfinished")):t("div",{class:a.a.tooltip},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",class:""+a.a.finishedSvg,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",onclick:function(t){return n.markFinished(t,{index:i,date:r,isFinishedSelected:o,searchText:s})}},t("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})),t("span",{class:a.a.tooltiptext},"Mark as finished"))},n.getTasks=function(e,r,o,s){return n.getTaskArr(e,r,o).map((function(c,l){var u=c.task,d=c.description;return t(i.Fragment,null,t("button",{class:a.a.accordion+" notification is-link is-light columns is-align-items-center m-0 is-size-4",onclick:n.toggleSlide},t("div",{class:"column is-four-fifths p-0 "+a.a.overflowAnyware},u),t("div",{class:"column has-text-right p-0"},n.getThumbsIcon({index:l,date:e,isFinishedSelected:r,searchText:o}),t("div",{class:a.a.tooltip},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"ml-2",onclick:function(t){return n.editTask(t,{index:l,date:e,isFinishedSelected:r,searchText:o,editTask:s})}},t("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),t("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})),t("span",{class:a.a.tooltiptext},"Edit")),t("div",{class:a.a.tooltip},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"ml-2 "+a.a.deleteSvg,onclick:function(t){return n.deleteTask(t,{index:l,date:e,isFinishedSelected:r,searchText:o})}},t("polyline",{points:"3 6 5 6 21 6"}),t("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),t("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),t("line",{x1:"14",y1:"11",x2:"14",y2:"17"})),t("span",{class:a.a.tooltiptext},"Delete")))),t("div",{class:""+a.a.panel},d))}))},n}r=e,(n=s).prototype=Object.create(r.prototype),n.prototype.constructor=n,o(n,r);var c=s.prototype;return c.getDBTasks=function(t){var e=window.localStorage.getItem(t);return JSON.parse(e)||[]},c.toggleSlide=function(t){var e=t.currentTarget;e.classList.toggle(a.a.active);var n=e.nextElementSibling;n.style.maxHeight?n.style.maxHeight=null:n.style.maxHeight=n.scrollHeight+"px"},c.render=function(e){var n=this,i=e.dates,r=e.formattedDates,a=e.isFinishedSelected,o=e.searchText,s=e.editTask;return t("div",{style:{width:"74%",margin:"0 auto"}},r.map((function(e,r){return t("div",null,n.dateSection(i[r],e,a,o),n.getTasks(i[r],a,o,s))})))},s}(i.Component);e.a=s}).call(this,n("HteQ").h)}});
//# sourceMappingURL=ssr-bundle.js.map
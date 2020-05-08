(this["webpackJsonptaskmanager-reactjs"]=this["webpackJsonptaskmanager-reactjs"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),s=(a(12),a(6)),i=a(2),u=Object(n.createContext)(),m=function(e){var t=JSON.parse(localStorage.getItem("tasks"))||[],a=Object(n.useState)(t),l=Object(i.a)(a,2),r=l[0],m=l[1],o=Object(n.useState)(null),d=Object(i.a)(o,2),f=d[0],b=d[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r),[r])}));return c.a.createElement(u.Provider,{value:{tasks:r,addTask:function(e){m([].concat(Object(s.a)(r),[{title:e,id:Date.now()}]))},removeTask:function(e){m(r.filter((function(t){return t.id!==e})))},clearList:function(){m([])},findItem:function(e){var t=r.find((function(t){return t.id===e}));b(t)},editTask:function(e,t){var a=r.map((function(a){return a.id===t?{title:e,id:t}:a}));m(a),b(null)},editItem:f}},e.children)},o=function(e){var t=e.task,a=Object(n.useContext)(u),l=a.removeTask,r=a.findItem;return c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,t.title),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return l(t.id)},className:"btn-delete task-btn"},c.a.createElement("i",{className:"fas fa-trash-alt"})),c.a.createElement("button",{onClick:function(){return r(t.id)},className:"btn-edit task-btn"},c.a.createElement("i",{className:"fas fa-pen"}))))},d=function(){var e=Object(n.useContext)(u).tasks;return c.a.createElement("div",null,e.length?c.a.createElement("ul",{className:"list"},e.map((function(e){return c.a.createElement(o,{task:e,key:e.id})}))):c.a.createElement("div",{className:"no-tasks"},"No Tasks"))},f=function(){var e=Object(n.useContext)(u),t=e.addTask,a=e.clearList,l=e.editItem,r=e.editTask,s=Object(n.useState)(""),m=Object(i.a)(s,2),o=m[0],d=m[1];return Object(n.useEffect)((function(){d(l?l.title:"")}),[l]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l?r(o,l.id):(t(o),d(""))},className:"form"},c.a.createElement("input",{type:"text",className:"task-input",placeholder:"Add A Task...",onChange:function(e){d(e.target.value)},value:o,required:!0}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"submit",className:"btn add-task-btn"},l?"Update Task":"Add Task"),c.a.createElement("button",{onClick:a,className:"btn clear-btn"},"Clear")))},b=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Task Manager"))},k=function(){return c.a.createElement(m,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("div",{className:"main"},c.a.createElement(b,null),c.a.createElement(f,null),c.a.createElement(d,null)))))};r.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.8989d725.chunk.js.map
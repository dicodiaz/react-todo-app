(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{14:function(t,e,n){t.exports={item:"TodoItem_item__1A9TN",checkbox:"TodoItem_checkbox__1i2Ua",textInput:"TodoItem_textInput__1IdQl"}},55:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);n(28),n(29);var c=n(2),o=n.n(c),a=n(22),i=n.n(a),r=n(7),s=(n(55),n(27)),l=n(8),u=n(6),d=n(3),j=n(67),b=n(1),h=function(){var t=Object(d.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(e){return e.slug===t})),n=e.title,c=e.description;return Object(b.jsxs)("div",{className:"main__content",children:[Object(b.jsx)("h1",{children:n}),Object(b.jsx)("p",{children:c})]})},p=function(){var t=Object(d.g)(),e=t.url,n=t.path;return Object(b.jsxs)("div",{className:"about__content",children:[Object(b.jsxs)("ul",{className:"about__list",children:[Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(b.jsx)(d.a,{path:"".concat(n,"/:slug"),children:Object(b.jsx)(h,{})})]})},x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"No match for this page"})})},O=function(t){var e=["alert","alert-warning","text-center"];return t.hidden&&e.push("d-none"),Object(b.jsx)("div",{className:e.join(" "),role:"alert",children:"Please write item"})},m=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},f=n(12),g=n(13),y=function(t){var e=t.addTodoItemProps,n=t.showAlert,o=Object(c.useState)({title:""}),a=Object(u.a)(o,2),i=a[0],r=a[1];return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i.title.trim()?(e(i.title),r({title:""})):n()},className:"form-container",children:[Object(b.jsx)("input",{type:"text",name:"title",className:"form-control input-text",placeholder:"Add Todo...",value:i.title,onChange:function(t){r((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(f.a)({},t.target.name,t.target.value))}))}}),Object(b.jsx)("button",{type:"submit",className:"btn input-submit",children:Object(b.jsx)(g.a,{className:"text-dark",style:{fontSize:"25px",marginTop:"2px"}})})]})},v=n(26),N=n(25),w=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],o=e[1],a=function(){o(!1)};return Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsx)("button",{type:"button",onClick:function(){o((function(t){return!t}))},children:n?Object(b.jsx)(N.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(b.jsx)(v.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(b.jsx)("ul",{className:"menuNav ".concat(n?"showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(t){return Object(b.jsx)("li",{children:Object(b.jsx)(r.c,{to:t.path,activeClassName:"active-link",onClick:a,exact:!0,children:t.text})},t.id)}))})]})},T=n(14),k=n.n(T),S=function(t){var e=t.todo,n=t.handleChangeProps,o=t.deleteTodoProps,a=t.setUpdate,i=e.completed,r=e.id,s=e.title,l=Object(c.useState)(!1),d=Object(u.a)(l,2),j=d[0],h=d[1],p=Object(c.useState)(""),x=Object(u.a)(p,2),O=x[0],m=x[1],f=Object(c.createRef)();Object(c.useEffect)((function(){j&&f.current.focus()}),[j,f]);var y={},v={};j?y.display="none":v.display="none";var N=function(){h(!1)};return Object(b.jsxs)("li",{className:k.a.item,children:[Object(b.jsxs)("div",{onDoubleClick:function(){h(!0),m(s)},style:y,children:[Object(b.jsx)("input",{type:"checkbox",className:k.a.checkbox&&"form-check-input me-2",checked:i,onChange:function(){return n(r)}}),Object(b.jsx)("button",{type:"button",onClick:function(){return o(r)},children:Object(b.jsx)(g.b,{style:{color:"orangered",fontSize:"20.5px"}})}),Object(b.jsx)("span",{style:i?{fontStyle:"italic",color:"antiquewhite",opacity:.4,textDecoration:"line-through"}:null,children:s})]}),Object(b.jsx)("input",{type:"text",ref:f,className:k.a.textInput,style:v,value:s,onChange:function(t){return a(t.target.value,r)},onKeyDown:function(t){"Enter"===t.key?N():"Escape"===t.key&&(a(O,r),N())},onBlur:N})]})},C=function(t){var e=t.todos,n=t.handleChangeProps,c=t.deleteTodoProps,o=t.setUpdate;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(S,{todo:t,handleChangeProps:n,deleteTodoProps:c,setUpdate:o},t.id)}))})},I=function(){var t=Object(c.useState)(JSON.parse(localStorage.getItem("todos"))||[]),e=Object(u.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)(!0),i=Object(u.a)(a,2),r=i[0],h=i[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",children:Object(b.jsx)("main",{className:"bg-dark text-white min-vh-100 pt-5",children:Object(b.jsx)("div",{className:"container-md pt-4",children:Object(b.jsx)("div",{className:"row mx-0 justify-content-end justify-content-md-center",children:Object(b.jsxs)("div",{className:"col-11 col-md-9",children:[Object(b.jsx)(m,{}),Object(b.jsx)(y,{addTodoItemProps:function(t){var e={id:Object(j.a)(),title:t,completed:!1};o((function(t){return[].concat(Object(s.a)(t),[e])}))},showAlert:function(){h(!1),setTimeout((function(){h(!0)}),2e3)}}),Object(b.jsx)(C,{todos:n,handleChangeProps:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProps:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))},setUpdate:function(t,e){o((function(n){return n.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{title:t}):n}))}))}}),Object(b.jsx)(O,{hidden:r})]})})})})}),Object(b.jsx)(d.a,{path:"/about",children:Object(b.jsx)(p,{})}),Object(b.jsx)(d.a,{path:"*",children:Object(b.jsx)(x,{})})]})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(r.a,{basename:"/react-todo-app",children:Object(b.jsx)(I,{})})}),document.getElementById("root")),_()}},[[65,1,2]]]);
//# sourceMappingURL=main.1e21f241.chunk.js.map
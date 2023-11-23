(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),l=c(3),n=c(12),d=c(4),o=c(10),i=c(11);const r=e=>({type:"currentTodo/SET",payload:e}),j=()=>({type:"currentTodo/REMOVE"});var b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}};const h=e=>({type:"filterQuery/SET",payload:e}),u=e=>({type:"filterStatus/SET",payload:e});var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:"all"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filterQuery/SET":return{...e,query:t.payload};case"filterStatus/SET":return{...e,status:t.payload};default:return e}};const O=e=>({type:"todos/SET",payload:e});var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?[...e,...t.payload]:[...e]};const p=Object(d.combineReducers)({currentTodo:b,filter:m,todos:x}),v=Object(d.createStore)(p,Object(o.composeWithDevTools)(Object(d.applyMiddleware)(i.a)));var f=c(0);c(20),c(21);l.b;const y=l.c;var N=c(8),g=c.n(N),T=c(1);const S=e=>{let{todos:t,loading:c}=e;const s=Object(l.b)(),a=y((e=>e.currentTodo));return Object(T.jsx)(T.Fragment,{children:null!==t&&void 0!==t&&t.length||c?Object(T.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"#"}),Object(T.jsx)("th",{children:Object(T.jsx)("span",{className:"icon",children:Object(T.jsx)("i",{className:"fas fa-check"})})}),Object(T.jsx)("th",{children:"Title"}),Object(T.jsx)("th",{children:" "})]})}),Object(T.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((e=>Object(T.jsxs)("tr",{"data-cy":"todo",className:g()({"has-background-info-light":a}),children:[Object(T.jsx)("td",{className:"is-vcentered",children:e.id}),Object(T.jsx)("td",{className:"is-vcentered",children:Object(T.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:e.completed&&Object(T.jsx)("i",{className:"fas fa-check"})})}),Object(T.jsx)("td",{className:"is-vcentered is-expanded",children:Object(T.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(T.jsx)("td",{className:"has-text-right is-vcentered",children:Object(T.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:()=>(e=>{s(r(e))})(e),children:Object(T.jsx)("span",{className:"icon",children:Object(T.jsx)("i",{className:g()("far",{"fa-eye-slash":(null===a||void 0===a?void 0:a.id)===e.id,"far fa-eye":a!==e})})})})})]},e.id)))})]}):Object(T.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},E=()=>{const e=Object(l.b)(),t=y((e=>e.filter.query)),c=y((e=>e.filter.status));return Object(T.jsxs)("form",{className:"field has-addons",onSubmit:e=>{e.preventDefault()},children:[Object(T.jsx)("p",{className:"control",children:Object(T.jsx)("span",{className:"select",children:Object(T.jsxs)("select",{"data-cy":"statusSelect",onChange:t=>{const c=t.target.value;e(u(c))},value:c,children:[Object(T.jsx)("option",{value:"all",children:"All"}),Object(T.jsx)("option",{value:"active",children:"Active"}),Object(T.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(T.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(T.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:t=>{e(h(t.target.value))}}),Object(T.jsx)("span",{className:"icon is-left",children:Object(T.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(T.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(T.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:()=>{e(h("")),e(u("all"))}})})]})]})};c(23);const k=()=>Object(T.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(T.jsx)("div",{className:"Loader__content"})});function w(e){const t="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(c=300,new Promise((e=>{setTimeout(e,c)}))).then((()=>fetch(t))).then((e=>e.json()));var c}const C=()=>{const e=Object(l.b)(),t=y((e=>e.currentTodo)),[c,s]=Object(f.useState)(!1),[a,n]=Object(f.useState)(null),[d,o]=Object(f.useState)("");Object(f.useEffect)((()=>{var e;s(!0),o(""),t&&(e=t.userId,w("/users/".concat(e))).then(n).catch((()=>o("Smt went wrong"))).finally((()=>s(!1)))}),[t,null===t||void 0===t?void 0:t.userId]);return Object(T.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(T.jsx)("div",{className:"modal-background"}),c&&Object(T.jsx)(k,{}),!!a&&!c&&!d&&Object(T.jsxs)("div",{className:"modal-card",children:[Object(T.jsxs)("header",{className:"modal-card-head",children:[Object(T.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:t?"Todo #".concat(t.id):""}),Object(T.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:()=>{e(j())}})]}),Object(T.jsxs)("div",{className:"modal-card-body",children:[Object(T.jsx)("p",{className:"block","data-cy":"modal-title",children:(null===t||void 0===t?void 0:t.title)||""}),Object(T.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t?Object(T.jsx)("strong",{className:t.completed?"has-text-success":"has-text-danger",children:t.completed?"Done":"Planned"}):null,a?Object(T.jsxs)(T.Fragment,{children:[" by ",Object(T.jsx)("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),children:a.name})]}):null]})]})]}),d&&Object(T.jsx)("p",{className:"notification is-danger",children:d})]})};const _=()=>{const e=Object(l.b)(),t=y((e=>e.todos)),c=y((e=>e.currentTodo)),{query:s,status:a}=y((e=>e.filter)),[n,d]=Object(f.useState)(!1),[o,i]=Object(f.useState)(""),[r,j]=Object(f.useState)([]);return Object(f.useEffect)((()=>{d(!0),i(""),w("/todos").then((t=>{e(O(t))})).catch((()=>i("Try again later"))).finally((()=>d(!1)))}),[]),Object(f.useEffect)((()=>{j(function(e,t,c){return c.filter((e=>"active"===t?!e.completed:"completed"!==t||e.completed)).filter((t=>t.title.toUpperCase().includes(e.toUpperCase().trim())))}(s,a,t))}),[s,a,t]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"section",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"box",children:[Object(T.jsx)("h1",{className:"title",children:"Todos:"}),Object(T.jsx)("div",{className:"block",children:Object(T.jsx)(E,{})}),Object(T.jsxs)("div",{className:"block",children:[n&&Object(T.jsx)(k,{}),!n&&!o&&Object(T.jsx)(S,{todos:r,loading:n}),!!o&&Object(T.jsx)("p",{className:"notification is-danger",children:o})]})]})})}),c&&Object(T.jsx)(C,{})]})},q=()=>Object(T.jsx)(l.a,{store:v,children:Object(T.jsx)(n.a,{children:Object(T.jsx)(_,{})})});a.a.render(Object(T.jsx)(q,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3445c84c.chunk.js.map
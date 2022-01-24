(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{52:function(n,e,t){"use strict";t.r(e);var r,c,o,i,a,s,l,d,u,b,j,h,f,x,p,O,g,m,v,k,w,y,S,T,D,C,E,R=t(0),M=t.n(R),A=t(20),G=t.n(A),L=t(4),I=t(8),N=t(5),z=Object(L.b)(r||(r=Object(N.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  .body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.lightGrey})),F=t(22),U=t(18),P=L.d.form(c||(c=Object(N.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: ","px) {\n      grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.breakpoint.mobileMax414})),H=L.d.button(o||(o=Object(N.a)(["\n  padding: 20px; \n  color: ","; \n  background-color: ","; \n  border: none;\n  transition: color 0.3s;\n\n  @media (max-width: ","px) {\n      width: 75vw;\n      font-size: 20px;\n      text-align: center;\n  }\n\n  &:hover {\n    filter: brightness(110%);\n    transform: scale(1.1);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.lightSlateGrey}),(function(n){return n.theme.color.yellow}),(function(n){return n.theme.mobileMax360})),J=t(32),B="tasks",Y=function(n){return localStorage.setItem(B,JSON.stringify(n))},q=Object(U.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(B))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(J.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,e){var t=e.payload;n.tasks=t,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1}}}),W=q.actions,K=W.addTask,Q=W.toggleHideDone,V=W.toggleTaskDone,X=W.removeTask,Z=W.setAllDone,$=W.fetchExampleTasks,_=W.fetchExampleTasksSuccess,nn=W.fetchExampleTasksError,en=function(n){return n.tasks},tn=function(n){return en(n).tasks},rn=function(n){return en(n).hideDone},cn=function(n){return 0===tn(n).length},on=function(n){return tn(n).every((function(n){return n.done}))},an=q.reducer,sn=L.d.input(i||(i=Object(N.a)(["\n  padding: 20px; \n  border: 1px solid ",";\n\n  @media (max-width: ","px) {\n    width: 75vw;\n    font-size: 14px;\n    text-align: center;\n  }\n"])),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.breakpoint.mobileMax360})),ln=t(2),dn=function(){var n=Object(R.useState)(""),e=Object(F.a)(n,2),t=e[0],r=e[1],c=Object(R.useRef)(null),o=Object(I.b)();return Object(ln.jsxs)(P,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(o(K({content:e,done:!1,id:Object(U.c)()})),r(""),c.current.focus())},children:[Object(ln.jsx)(sn,{ref:c,value:t,type:"text",placeholder:"What is there to do?",onChange:function(n){var e=n.target;return r(e.value)},required:!0}),Object(ln.jsx)(H,{children:"Add new task"})]})},un=L.d.ul(a||(a=Object(N.a)(["\n  list-style: none;\n  margin: 0; \n  padding: 0; \n"]))),bn=L.d.li(s||(s=Object(N.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  align-items: center;\n  padding: 10px; \n  border-bottom: 1px solid ","; \n\n  ","\n"])),(function(n){return n.theme.color.lightGrey}),(function(n){return n.hidden&&Object(L.c)(l||(l=Object(N.a)(["\n    display: none;\n  "])))})),jn=L.d.button(d||(d=Object(N.a)(["\n  border: none; \n  color: ","; \n  font-size: 22px;\n  width: 30px; \n  height: 30px; \n  padding: 0; \n  transition: filter 0.3s;\n\n   "," \n\n  ","\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(L.c)(u||(u=Object(N.a)(["\n    color: ",";\n    background-color: ","; \n  "])),(function(n){return n.theme.color.yellow}),(function(n){return n.theme.color.teal}))}),(function(n){return n.remove&&Object(L.c)(b||(b=Object(N.a)(["\n    color: ",";\n    background-color: ",";\n  "])),(function(n){return n.theme.color.lightSlateGrey}),(function(n){return n.theme.color.yellow}))})),hn=L.d.span(j||(j=Object(N.a)(["\n  ","\n"])),(function(n){return n.done&&Object(L.c)(h||(h=Object(N.a)(["\n    text-decoration: line-through;\n  "])))})),fn=L.d.a(f||(f=Object(N.a)(["\n  color: ",";\n  text-decoration: none;\n  \n  &:hover {\n    border-bottom: 1px solid;\n  }\n  "])),(function(n){return n.theme.color.white})),xn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},e=n.id;return"/tasks/".concat(e)},pn="search",On=t(7),gn=function(n){var e=Object(On.h)();return new URLSearchParams(e.search).get(n)},mn=function(){var n=gn(pn),e=Object(I.c)((function(e){return function(n,e){var t=tn(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(e,n)})),t=Object(I.c)(rn),r=Object(I.b)();return Object(ln.jsx)(un,{children:e.map((function(n){return Object(ln.jsxs)(bn,{hidden:n.done&&t,children:[Object(ln.jsx)(jn,{toggleDone:!0,onClick:function(){return r(V(n.id))},children:n.done?"\u2714":""}),Object(ln.jsx)(hn,{done:n.done,children:Object(ln.jsx)(fn,{to:xn({id:n.id}),children:n.content})}),Object(ln.jsx)(jn,{remove:!0,onClick:function(){return r(X(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},vn=L.d.div(x||(x=Object(N.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),kn=L.d.button(p||(p=Object(N.a)(["\n  background-color: transparent;\n  color: ",";\n  border: none;\n  margin: 0 0 0 20px;\n  border-bottom: 1px solid transparent;\n  transition: filter 0.3s;\n\n  @media (max-width: ","px) {\n      flex-basis: 100%;\n      margin: 10px;\n  }\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n\n  &:disabled {\n    color: ","\n  }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.breakpoint.mobileMax414}),(function(n){return n.theme.color.lightSlateGrey})),wn=function(){var n=Object(I.c)(cn),e=Object(I.c)(on),t=Object(I.c)(rn),r=Object(I.b)();return Object(ln.jsxs)(vn,{children:[Object(ln.jsx)(kn,{onClick:function(){return r($())},children:"Download sample tasks"}),!n&&Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsxs)(kn,{onClick:function(){return r(Q())},children:[t?"Show":"Hide"," completed tasks"]}),Object(ln.jsx)(kn,{onClick:function(){return r(Z())},disabled:e,children:"Complete all tasks"})]})]})},yn=L.d.div(O||(O=Object(N.a)(["\n  text-align: right;\n  font-family: monospace;\n  color:",";\n  background-color: ",";\n  font-size: 16px;\n  padding: 20px;\n"])),(function(n){return n.theme.color.lightSlateGrey}),(function(n){return n.theme.color.white})),Sn=function(n){return n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})},Tn=function(){var n=Object(R.useState)(new Date),e=Object(F.a)(n,2),t=e[0],r=e[1];return Object(R.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),Object(ln.jsxs)(yn,{children:["Today is"," ",Sn(t)]})},Dn=L.d.section(g||(g=Object(N.a)(["\n  background-color: ",";\n  padding: 20px;\n  cursor: context-menu;\n"])),(function(n){return n.theme.color.white})),Cn=L.d.a(m||(m=Object(N.a)(["\n  cursor: context-menu;\n"]))),En=L.d.button(v||(v=Object(N.a)(["\n  margin: 5px;\n  padding: 8px;\n  cursor: context-menu;\n  border-style: none;\n  background-color: ",";\n  color: ",";\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n\n  ","\n\n  &:hover {\n    filter: brightness(110%);\n  }\n\n  &:active {\n    filter: brightness(120%);\n  }\n"])),(function(n){return n.theme.color.yellow}),(function(n){return n.theme.color.lightSlateGrey}),(function(n){return n.teal&&Object(L.c)(k||(k=Object(N.a)(["\n    background-color: ",";\n    color: ",";\n  "])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white}))})),Rn=function(){return Object(ln.jsxs)(Dn,{children:[Object(ln.jsx)(Tn,{}),Object(ln.jsx)(Cn,{href:"ToDo-List--DE-CRMS--ReactApp",children:Object(ln.jsx)(En,{children:"DE"})}),Object(ln.jsx)(Cn,{href:"ToDo-List--ES-CRMS--ReactApp",children:Object(ln.jsx)(En,{children:"ES"})}),Object(ln.jsx)(Cn,{href:"ToDo-List--RU-CRMS--ReactApp",children:Object(ln.jsx)(En,{children:"RU"})}),Object(ln.jsx)(Cn,{href:"ToDo-List--PL-CRMS--ReactApp",children:Object(ln.jsx)(En,{children:"PL"})}),Object(ln.jsx)(Cn,{href:"ToDo-List--UA-CRMS--ReactApp",children:Object(ln.jsx)(En,{children:"UA"})}),Object(ln.jsx)(Cn,{href:"ToDo-List--EN-TEYE--ReactApp",children:Object(ln.jsx)(En,{teal:!0,children:"\ud83c\udf13"})})]})},Mn=L.d.section(w||(w=Object(N.a)(["\n  margin: 10px 0;\n  background: ",";  \n  box-shadow: 0 0 30px ","; \n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.lightGrey})),An=L.d.header(y||(y=Object(N.a)(["\n  border-bottom: 1px solid ","; \n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px; \n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.breakpoint.mobileMax414})),Gn=L.d.h2(S||(S=Object(N.a)(["\n  padding: 10px;\n  color: ",";\n  font-size: 30px;\n  margin: 0;\n  text-align: left;\n"])),(function(n){return n.theme.color.teal})),Ln=L.d.div(T||(T=Object(N.a)(["\n  padding: 20px;\n  background-color: ",";\n\n  @media (max-width: ","px) {\n    padding: 15px;\n  }\n"])),(function(n){return n.theme.color.lightSlateGrey}),(function(n){return n.theme.breakpoint.mobileMax360})),In=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(ln.jsxs)(Mn,{children:[Object(ln.jsxs)(An,{children:[Object(ln.jsx)(Gn,{children:e}),r]}),Object(ln.jsx)(Ln,{children:t})]})},Nn=L.d.h2(D||(D=Object(N.a)(["\n  padding: 10px;\n  color: ",";\n  font-size: 30px;\n  margin: 0;\n  text-align: left;\n"])),(function(n){return n.theme.color.teal})),zn=function(n){var e=n.title;return Object(ln.jsx)("header",{children:Object(ln.jsx)(Nn,{children:e})})},Fn=L.d.div(C||(C=Object(N.a)(["\n  max-width: 900px;\n  padding: 20px; \n  margin: 0 auto; \n"]))),Un=function(n){var e=n.children;return Object(ln.jsx)(Fn,{children:e})},Pn=L.d.div(E||(E=Object(N.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n"]))),Hn=function(){var n=gn(pn),e=function(){var n=Object(On.h)(),e=Object(On.g)();return function(t){var r=t.key,c=t.value,o=new URLSearchParams(n.search);void 0===c?o.delete(r):o.set(r,c);var i=o.toString();e.push("".concat(n.pathname,"?").concat(i))}}();return Object(ln.jsx)(Pn,{children:Object(ln.jsx)(sn,{placeholder:"Filter tasks",value:n||"",onChange:function(n){var t=n.target;e({key:pn,value:""!==t.value.trim()?t.value:void 0})}})})};var Jn=function(){return Object(ln.jsxs)(Un,{children:[Object(ln.jsx)(Rn,{}),Object(ln.jsx)(zn,{title:"ToDo list"}),Object(ln.jsx)(In,{title:"Add new task",body:Object(ln.jsx)(dn,{})}),Object(ln.jsx)(In,{title:"Search engine",body:Object(ln.jsx)(Hn,{})}),Object(ln.jsx)(In,{title:"ToDo list",body:Object(ln.jsx)(mn,{}),extraHeaderContent:Object(ln.jsx)(wn,{})})]})};var Bn,Yn,qn,Wn=function(){var n=Object(On.i)().id,e=Object(I.c)((function(e){return function(n,e){return tn(n).find((function(n){return n.id===e}))}(e,n)}));return Object(ln.jsxs)(Un,{children:[Object(ln.jsx)(zn,{title:"Task details"}),Object(ln.jsx)(In,{title:e?e.content:"Not found the task \ud83d\ude22",body:!!e&&Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsx)("strong",{children:"Completed:"})," ",e.done?"Yes":"No"]})})]})},Kn=function(){return Object(ln.jsxs)(Un,{children:[Object(ln.jsx)(zn,{title:"About the author"}),Object(ln.jsx)(In,{title:"Nikita Rysiev",body:Object(ln.jsxs)("p",{contentEditable:!0,children:[Object(ln.jsx)("p",{children:"you can edit the text below"}),Object(ln.jsx)("p",{children:"Hej! My name a Nick, and I am a beginner Junior Front-End (React) Developer and \ud83d\udc76 Junior Manual Software Tester with introduction to automation. My native language is Russian, but I learn and practice more English language, Polish and some German."}),Object(ln.jsx)("p",{children:"Now I try to study software testing and some coding of simple web applications."}),Object(ln.jsx)("p",{children:"I want to know coding and speaking English very well to be useful in the labor market."})]})})]})},Qn=t(17),Vn="link-active",Xn=Object(L.d)(Qn.b).attrs((function(){return{activeClassName:Vn}}))(Bn||(Bn=Object(N.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &."," {\n    font-weight: bold;\n  }\n\n  &:hover {\n    border-bottom: 1px solid;\n  }\n"])),(function(n){return n.theme.color.white}),Vn),Zn=L.d.ul(Yn||(Yn=Object(N.a)(["\n  background: ",";\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  list-style: none;\n"])),(function(n){return n.theme.color.teal})),$n=L.d.li(qn||(qn=Object(N.a)(["\n  margin: 20px;\n"]))),_n=function(){return Object(ln.jsxs)("nav",{children:[Object(ln.jsx)(Zn,{children:Object(ln.jsx)($n,{children:Object(ln.jsx)(Xn,{to:"/tasks",children:"Tasks"})})}),Object(ln.jsx)(Zn,{children:Object(ln.jsx)($n,{children:Object(ln.jsx)(Xn,{to:"/author",children:"About the author"})})})]})},ne=function(){return Object(ln.jsxs)(Qn.a,{children:[Object(ln.jsx)(_n,{}),Object(ln.jsxs)(On.d,{children:[Object(ln.jsx)(On.b,{path:xn(),children:Object(ln.jsx)(Wn,{})}),Object(ln.jsx)(On.b,{path:"/tasks",children:Object(ln.jsx)(Jn,{})}),Object(ln.jsx)(On.b,{path:"/author",children:Object(ln.jsx)(Kn,{})}),Object(ln.jsx)(On.b,{children:Object(ln.jsx)(On.a,{to:"/tasks"})})]})]})},ee=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),o(n),i(n)}))},te=t(35),re=t(11),ce=t.n(re),oe=t(13),ie=t(34),ae=function(){var n=Object(ie.a)(ce.a.mark((function n(){var e;return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/ToDo-List--EN-CRMS--ReactApp/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),se=ce.a.mark(ue),le=ce.a.mark(be),de=ce.a.mark(je);function ue(){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(oe.c)(1e3);case 3:return e.next=5,Object(oe.b)(ae);case 5:return n=e.sent,e.next=8,Object(oe.d)(_(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(oe.d)(nn());case 14:return e.next=16,Object(oe.b)(alert,"Something went wrong!");case 16:case"end":return e.stop()}}),se,null,[[0,10]])}function be(){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.e)(tn);case 2:return n=e.sent,e.next=5,Object(oe.b)(Y,n);case 5:case"end":return e.stop()}}),le)}function je(){return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(oe.g)($.type,ue);case 2:return n.next=4,Object(oe.f)("*",be);case 4:case"end":return n.stop()}}),de)}var he=ce.a.mark(fe);function fe(){return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(oe.a)([je()]);case 2:case"end":return n.stop()}}),he)}var xe=Object(te.a)(),pe=Object(U.a)({reducer:{tasks:an},middleware:[xe]});xe.run(fe);var Oe=pe;G.a.render(Object(ln.jsx)(M.a.StrictMode,{children:Object(ln.jsx)(I.a,{store:Oe,children:Object(ln.jsxs)(L.a,{theme:{color:{white:"#fff",black:"#000",lightSlateGrey:"#778899",lightGrey:"#d3d3d3",teal:"#008080",yellow:"#ffff00"},breakpoint:{mobileMax360:360,mobileMax414:414}},children:[Object(ln.jsx)(z,{}),Object(ln.jsx)(ne,{})]})})}),document.getElementById("root")),ee()}},[[52,1,2]]]);
//# sourceMappingURL=main.d167dfee.chunk.js.map
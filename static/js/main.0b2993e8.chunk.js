(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(34),l=t.n(c),o=(t(72),t(17)),i=t(22),u=t(7),m=t(8),s=t(11),p=t(9),h=t(12),b=t(19),d=t(102),f=t(103),E=t(20),j=t(51),v=t.n(j);function O(){var e=Object(b.a)(["\n  .jumbo {\n    background: url(",") no-repeat fixed bottom;\n    background-size: cover;\n    height: 75vh;\n    position: relative;\n    z-index: -2;\n  }\n\n  .overlay {\n    background-color: #f1f1f1;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n  }\n\n  .h1,\n  h1 {\n    font-size: 3rem;\n  }\n\n  .p,\n  p {\n    font-size: 2rem;\n  }\n\n  .h1,\n  h1,\n  .p,\n  p {\n    color: #181818;\n    //text-shadow: 1px 1px white;\n  }\n"]);return O=function(){return e},e}var g=E.a.div(O(),v.a),k=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(d.a,{fluid:!0,className:"jumbo"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(f.a,null,r.a.createElement("h1",null,"Hi! I'm Share"),r.a.createElement("h1",null,"I'm a Front-end developer"),r.a.createElement("p",null,"I'm also a musician and dog behaviorist"))))}}]),n}(r.a.Component),y=t(42);y.initializeApp({apiKey:"AIzaSyCO01QU4U0ypV0EPJLkdBkpdOYHghHs1go",authDomain:"portfolio-37662.firebaseapp.com",databaseURL:"https://portfolio-37662.firebaseio.com",projectId:"portfolio-37662",storageBucket:"portfolio-37662.appspot.com",messagingSenderId:"60013903437",appId:"1:60013903437:web:5d5b1c148a9f1ebd"});var w=y,x=t(25),C=t.n(x),I=t(55),N=t.n(I);function z(){var e=Object(b.a)(["\n  .projectCard {\n    margin-bottom: 2rem;\n    display: flex;\n    flex-direction: row;\n    background-color: #f1f1f1;\n  }                   #f7f7f7\n\n  .thumbnail {\n    max-width: 100%;\n    height: auto;\n  }\n\n  .projectImage {\n    padding: 2rem;\n  }\n\n  .projectInfo {\n    padding: 20px;\n    align-content: center;\n    justify-content: center;\n  }\n\n  @media only screen and (max-width:425px) {\n    .projectCard {\n      display: block;\n    }\n\n    .content {\n      width: 100%;\n    }\n\n    .thumbnail {\n      max-width: 100%;\n    }\n  }\n"]);return z=function(){return e},e}var S=E.a.div(z()),B=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(s.a)(this,Object(p.a)(n).call(this,e))).state={projects:[]},t}return Object(h.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;w.database().ref().child("projects").on("value",function(n){var t=n.val(),a=[];for(var r in t)a.push({id:r,name:t[r].name,description:t[r].description,img:t[r].img,url:t[r].url});e.setState({projects:a})})}},{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(S,null,r.a.createElement("div",{className:"Projects"},r.a.createElement("h1",null,"See my work here"),r.a.createElement("br",null),this.state.projects.map(function(e){return r.a.createElement("div",{className:"projectCard"},r.a.createElement("div",{className:"content projectImage"},r.a.createElement("img",{src:e.img,className:"thumbnail",alt:""})),r.a.createElement("div",{className:"content projectInfo"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement(N.a,{variant:"link"},r.a.createElement(o.b,{to:e.url},"Read More"))))}))))}}]),n}(r.a.Component),L=t(30);function P(){var e=Object(b.a)(["\n    .footer {\n        background-color: #222222;\n        display: flex;\n        flex-direction: column;\n        height: 30vh;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .icons {\n        display: flex;\n        flex-direction: row;\n\n    }\n\n    p {\n        color: #bbb;\n    }\n\n    h3 {\n    color: #bbb;\n\n    &:hover {\n        color: white;\n        }\n    }\n\n    .middle {\n        width: 10vw;\n    }\n"]);return P=function(){return e},e}var A=E.a.div(P()),D=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("p",null,"Reach me on social media")),r.a.createElement("div",{className:"icons"},r.a.createElement("h3",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/shareni-azcarraga/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(L.c,null))),r.a.createElement("div",{className:"middle"}),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/shareazc",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(L.b,null))))))}}]),n}(r.a.Component),H=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(B,null),r.a.createElement(D,null))}}]),n}(r.a.Component),J=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement("h1",null,"About me page"))}}]),n}(r.a.Component),R=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement("h1",null,"Contact info"))}}]),n}(r.a.Component),U=t(58),F=t.n(U),M=t(104),Q=t(105);function W(){var e=Object(b.a)(["\n  .navbar {\n    background-color: #222;\n    height: 15%;\n  }\n\n  .navbar-brand,\n  .h6,\n  h6 {\n    color: #bbb;\n\n    &:hover {\n      color: white;\n    }\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  svg {\n    color: #32cd32;\n  }\n\n  }\n"]);return W=function(){return e},e}var _=E.a.div(W()),q=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(M.a,{variant:"dark",expand:"lg"},r.a.createElement(M.a.Brand,null,r.a.createElement(Q.a.Link,null,r.a.createElement(o.b,{to:"/"},r.a.createElement("h6",null,"Share Azc\xe1rraga")))),r.a.createElement(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(M.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Q.a,{className:"ml-auto"},r.a.createElement(Q.a.Item,null,r.a.createElement(Q.a.Link,null,r.a.createElement(o.b,{to:"/about"},r.a.createElement("h6",null,"Get to know me")))),r.a.createElement(Q.a.Item,null,r.a.createElement(Q.a.Link,null,r.a.createElement(o.b,{to:"/projects"},r.a.createElement("h6",null,"See my work")))),r.a.createElement(Q.a.Item,null,r.a.createElement(Q.a.Link,null,r.a.createElement(o.b,{to:"/contact",className:"hoverable"},r.a.createElement("h6",null,"Currently available for hiring ",r.a.createElement(L.a,null)))))))))}}]),n}(r.a.Component),G=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Organa Project")}}]),n}(r.a.Component),K=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Burger Queen Project")}}]),n}(r.a.Component),T=function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Pokedex Project")}}]),n}(r.a.Component);t(99);var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(q,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:H}),r.a.createElement(i.a,{path:"/about",component:J}),r.a.createElement(i.a,{path:"/projects",component:B}),r.a.createElement(i.a,{path:"/contact",component:R}),r.a.createElement(i.a,{path:"/organa",component:G}),r.a.createElement(i.a,{path:"/queen",component:K}),r.a.createElement(i.a,{path:"/pokedex",component:T}),r.a.createElement(i.a,{component:F.a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,n,t){e.exports=t.p+"static/media/DnD-Cropped.a7a97480.jpg"},58:function(e,n){},67:function(e,n,t){e.exports=t(100)},72:function(e,n,t){},99:function(e,n,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.0b2993e8.chunk.js.map
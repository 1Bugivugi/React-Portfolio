(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/headerIcon.cf5eb077.png"},34:function(e,t,a){e.exports=a.p+"static/media/placeholder1.79a5601d.jpg"},36:function(e,t,a){e.exports=a(78)},41:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(23),c=a.n(i),o=(a(41),a(2)),r=a(3),s=a(5),u=a(4),m=a(6),d=(a(43),a(44),a(15)),p=(a(46),a(32)),E=a.n(p),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleScroll=a.handleScroll.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleScroll",value:function(e){this.setState({scroll:window.scrollY})}},{key:"componentDidMount",value:function(){var e=document.querySelector("#navbar");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.state.scroll>this.state.top?document.body.style.paddingTop="".concat(this.state.height,"px"):document.body.style.paddingTop=0}},{key:"render",value:function(){return l.a.createElement("div",{id:"navbar",className:this.state.scroll>this.state.top?"sticky":""},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:E.a})),l.a.createElement("div",{className:"navContent"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#proj"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact")))))}}]),t}(n.Component),b=a(33),f=a.n(b),v=(a(48),a(80)),g=a(81),j=a(82),y=a(10),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"footer",className:"p-3"},l.a.createElement(v.a,null,l.a.createElement(g.a,null,l.a.createElement(j.a,{xs:1},l.a.createElement("a",{href:"https://github.com/"},l.a.createElement(y.a,{icon:["fab","github"],size:"lg"}))),l.a.createElement(j.a,{xs:1},l.a.createElement("a",{href:"https://www.linkedin.com/"},l.a.createElement(y.a,{icon:["fab","linkedin"],size:"lg"}))),l.a.createElement(j.a,{xs:1},l.a.createElement("a",{href:"https://twitter.com/"},l.a.createElement(y.a,{icon:["fab","twitter"],size:"lg"}))))),l.a.createElement("div",{className:"copyright"},l.a.createElement("a",null,"\xa9 2019 Gleb Rezoun")))}}]),t}(n.Component),O=(a(55),a(34)),w=a.n(O),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"img-with-text"},l.a.createElement("img",{src:w.a,alt:"Placeholder"}),l.a.createElement("p",null,"Some text"))}}]),t}(n.Component),k=(a(57),a(27),a(20)),S=a.n(k),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"callbackForm"},l.a.createElement("div",{className:"floatCenter p-3 rounded"},l.a.createElement("label",{className:"mb-3"},"Contact me"),l.a.createElement("input",{type:"text",placeholder:"Your Full Name",className:"w-100 rounded"}),l.a.createElement("input",{type:"text",placeholder:"Your Email",className:"w-100 rounded"}),l.a.createElement("input",{type:"text",placeholder:"Message",className:"w-100 rounded"}),l.a.createElement(S.a,{className:"submit rounded mx-auto",variant:"dark"},"Submit")))}}]),t}(n.Component),C=(a(63),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nameMe"},l.a.createElement("span",{className:"aboutHeader"},l.a.createElement("a",{name:"about"}),"About me"),l.a.createElement("hr",null),l.a.createElement("div",{className:"bio"},l.a.createElement("p",{className:"p1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement("p",{className:"p2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement("p",{className:"p3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}}]),t}(n.Component)),D=a(16),z=a(25),B=a(21),L=a(35),M=a.n(L);D.b.add(z.a,B.a,B.c,B.b,z.b);var U=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).changeButton=function(){return!0===n.state.open?l.a.createElement(y.a,{icon:["fas","angle-double-up"],size:"lg"}):l.a.createElement(y.a,{icon:["fas","angle-double-down"],size:"lg"})},n.state={open:!1},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e={strings:["Something Something Something Something Something Something Something"],typeSpeed:40,loop:!0,loopCount:1/0,backSpeed:60,backDelay:2e3};new f.a(".typed",e)}},{key:"render",value:function(){var e=this,t=this.state.open;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"container"},l.a.createElement("main",null,l.a.createElement("header",null),l.a.createElement("div",{className:"parallax"}),l.a.createElement("div",{className:"centered"},l.a.createElement("h1",null,"Who is this guy?"),l.a.createElement("hr",null),l.a.createElement("span",{className:"typed"})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(h,null)),l.a.createElement("div",{className:"aboutSection"},l.a.createElement("a",{name:"about",className:"about"}),l.a.createElement(C,null)),l.a.createElement("div",{className:"projectsSection"},l.a.createElement("a",{name:"proj",className:"proj"}),l.a.createElement("span",{className:"prHeader"},"Some of my latest work"),l.a.createElement("section",{className:"projects"},l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(M.a,{in:this.state.open},l.a.createElement("div",{className:"projects2"},l.a.createElement(x,null),l.a.createElement(x,null),l.a.createElement(x,null)))),l.a.createElement("div",{className:"expandBtn"},l.a.createElement(S.a,{variant:"white",onClick:function(){return e.setState({open:!t})},"aria-controls":"example-collapse-text","aria-expanded":t},this.changeButton())))),l.a.createElement("div",{className:"parallax2"},l.a.createElement("a",{name:"contact"}),l.a.createElement(q,null)))),l.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.93934db8.chunk.js.map
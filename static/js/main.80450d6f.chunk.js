(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(26),c=a.n(l),r=(a(49),a(3)),o=a(4),s=a(6),m=a(5),u=a(7),d=(a(51),a(52),a(17)),p=(a(54),a(41)),h=a.n(p),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a.handleScroll=a.handleScroll.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleScroll",value:function(e){this.setState({scroll:window.scrollY})}},{key:"componentDidMount",value:function(){var e=document.querySelector("#navbar");this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll)}},{key:"componentDidUpdate",value:function(){this.state.scroll>this.state.top?document.body.style.paddingTop="".concat(this.state.height,"px"):document.body.style.paddingTop=0}},{key:"render",value:function(){return i.a.createElement("div",{id:"navbar",className:this.state.scroll>this.state.top?"sticky":""},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:h.a})),i.a.createElement("div",{className:"navContent"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#proj"},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact"},"Contact")))))}}]),t}(n.Component),f=a(42),b=a.n(f),v=(a(56),a(105)),g=a(106),j=a(107),y=a(11),N=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"footer",className:"p-3"},i.a.createElement(v.a,null,i.a.createElement(g.a,null,i.a.createElement(j.a,{xs:1},i.a.createElement("a",{href:"https://github.com/"},i.a.createElement(y.a,{icon:["fab","github"],size:"lg"}))),i.a.createElement(j.a,{xs:1},i.a.createElement("a",{href:"https://www.linkedin.com/"},i.a.createElement(y.a,{icon:["fab","linkedin"],size:"lg"}))),i.a.createElement(j.a,{xs:1},i.a.createElement("a",{href:"https://twitter.com/"},i.a.createElement(y.a,{icon:["fab","twitter"],size:"lg"}))),i.a.createElement(j.a,{xs:1},i.a.createElement("a",{href:"mailto:deat_7@yahoo.com"},i.a.createElement(y.a,{icon:["fas","envelope"],size:"lg"}))))),i.a.createElement("div",{className:"copyright"},i.a.createElement("a",null,"\xa9 2019 Gleb Rezoun")))}}]),t}(n.Component),w=(a(62),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).getList=function(){return a.props.gitList?a.props.gitList:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){return i.a.createElement("div",{id:"img-with-text",className:"projContainer"},i.a.createElement("img",{src:this.props.gitList.img,alt:"Placeholder"}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"text"},i.a.createElement("a",{href:this.props.gitList.link},this.props.gitList.description))))}}]),t}(n.Component)),O=(a(64),a(31),a(15)),k=a.n(O),x=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"callbackForm"},i.a.createElement("div",{className:"floatCenter p-3 rounded"},i.a.createElement("label",{className:"mb-3"},"Hire me"),i.a.createElement("input",{type:"text",placeholder:"Your Full Name",className:"w-100 rounded"}),i.a.createElement("input",{type:"text",placeholder:"Your Email",className:"w-100 rounded"}),i.a.createElement("input",{type:"text",placeholder:"Message",className:"w-100 rounded"}),i.a.createElement(k.a,{className:"submit rounded mx-auto",variant:"dark"},"Submit")))}}]),t}(n.Component),L=(a(70),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"aboutContainer"},i.a.createElement("span",{className:"aboutHeader"},i.a.createElement("a",{name:"about"}),"About me"),i.a.createElement("hr",null),i.a.createElement("div",{className:"bio"},i.a.createElement("img",{className:"bio-photo",src:"bio-photo-placeholder.jpg"}),i.a.createElement("div",{className:"descSection"},i.a.createElement("p",{className:"p1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",{className:"p2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))}}]),t}(n.Component)),S=a(18),C=a(22),B=a(23),q=a(43),I=a.n(q),z=a(28),D=a.n(z);S.b.add(C.a,B.a,B.c,B.b,C.b,C.c);var F=function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).changeButton=function(){return!0===n.state.open?i.a.createElement(y.a,{icon:["fas","angle-double-up"],size:"lg"}):i.a.createElement(y.a,{icon:["fas","angle-double-down"],size:"lg"})},n.getFirstList=function(){D.a.get("gitProj1.json").then(function(e){n.setState({firstList:e.data})})},n.getSecondList=function(){D.a.get("gitProj2.json").then(function(e){n.setState({secondList:e.data})})},n.state={open:!1,firstList:[],secondList:[],color:"color:#FEEBB9"},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e={strings:["I'm a <span style='color:#FEEBB9'>Front-end Web Developer &amp; designer. </span> ^2000 I love what I do and I want the world to learn what <span style='color:#FEEBB9'>YOU</span> do!"],typeSpeed:40,loop:!1,loopCount:1/0,backSpeed:60,backDelay:2e3};new b.a(".typed",e);this.getFirstList(),this.getSecondList()}},{key:"render",value:function(){var e=this,t=this.state.open;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"container"},i.a.createElement("main",null,i.a.createElement("header",null),i.a.createElement("div",{className:"parallax"}),i.a.createElement("div",{className:"centered"},i.a.createElement("h1",null,"WHO IS THIS GUY?"),i.a.createElement("h2",null,"Hi, I'm ",i.a.createElement("span",{className:"colourful"},"Gleb Rezoun")),i.a.createElement("hr",null),i.a.createElement("span",{className:"typed"}),i.a.createElement("div",{className:"resumeButton"},i.a.createElement("a",{href:"https://drive.google.com/file/d/1dU45bEo12z8QI9kOypxJt5vf-8ipGNoJ/view?usp=sharing"},i.a.createElement(k.a,{variant:"outline-light"},"Get my resume")),i.a.createElement(k.a,{variant:"outline-light"},"Contact me"))),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(E,null)),i.a.createElement("div",{className:"aboutSection"},i.a.createElement("a",{name:"about",className:"about"}),i.a.createElement(L,null)),i.a.createElement("div",{className:"projectsSection"},i.a.createElement("a",{name:"proj",className:"proj"}),i.a.createElement("span",{className:"prHeader"},"Some of my latest work"),i.a.createElement("section",{className:"projects"},this.state.firstList.map(function(e){return i.a.createElement(w,{gitList:e,key:e.id})}),i.a.createElement(I.a,{in:this.state.open},i.a.createElement("div",{className:"projects2"},this.state.secondList.map(function(e){return i.a.createElement(w,{gitList:e,key:e.id})})))),i.a.createElement("div",{className:"expandBtn"},i.a.createElement(k.a,{variant:"white",onClick:function(){return e.setState({open:!t})},"aria-controls":"example-collapse-text","aria-expanded":t},this.changeButton())))),i.a.createElement("div",{className:"parallax2"},i.a.createElement("a",{name:"contact"}),i.a.createElement(x,null)))),i.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/headerIcon.cf5eb077.png"},44:function(e,t,a){e.exports=a(103)},49:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){}},[[44,2,1]]]);
//# sourceMappingURL=main.80450d6f.chunk.js.map
(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,a,t){e.exports=t(59)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){e.exports=t.p+"static/media/sitting.7e846d42.png"},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){e.exports=t.p+"static/media/night.75c9b4e2.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/resume.f80040d7.pdf"},50:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),s=(t(31),t(10)),i=t(12),o=t(3),m=(t(32),function(){return c.a.createElement("div",{className:"about"},c.a.createElement("span",{className:"heading"},c.a.createElement("span",{className:"about-me"},"ABOUT"),c.a.createElement("span",{className:"me"}," ME")),c.a.createElement("div",{className:"about-content"},c.a.createElement("div",{className:"about-sub-content"},"I'm a third year undergraduate student currently pursuing a bachelor's degree in Computer Science and Engineering from ABES Engineering College, Ghaziabad. I'm a proactive learner, enthusiastic about Web Design and Front-end Development. Currently, I am working with React JS and plan on working with complete MERN Stack in my future projects.")))}),d=(t(33),t(24)),u=t.n(d).a.initializeApp({apiKey:"AIzaSyB7ZRoWmMqSiwacRFpq3OPIdbda-r2mToA",authDomain:"contact-form-d3179.firebaseapp.com",projectId:"contact-form-d3179",storageBucket:"contact-form-d3179.appspot.com",messagingSenderId:"255331958825",appId:"1:255331958825:web:1c84cd5db1bdc59eaf9c38"}).firestore(),E=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),o=i[0],m=i[1],d=Object(n.useState)(""),E=Object(s.a)(d,2),v=E[0],h=E[1],f=Object(n.useState)(!1),p=Object(s.a)(f,2),N=(p[0],p[1]);return c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"heading"},c.a.createElement("span",{className:"contact-me"},"CONTACT"),c.a.createElement("span",{className:"me"}," ME")),c.a.createElement("div",{className:"contact-data"},c.a.createElement("div",{className:"contact-details"},c.a.createElement("div",{className:"contact-detail"},c.a.createElement("div",null,c.a.createElement("i",{className:"fa fa-phone icon"})),c.a.createElement("div",null,"+91 9211773639")),c.a.createElement("div",{className:"contact-detail"},c.a.createElement("i",{className:"fa fa-envelope icon"}),"aakum98@gmail.com"),c.a.createElement("div",{className:"contact-detail"},c.a.createElement("i",{className:"fa fa-map-marker icon"}),"Hapur, Uttar Pradesh")),c.a.createElement("div",{className:"send-message"},c.a.createElement("i",{className:"fa fa-paper-plane"}),"\xa0 Send a message \xa0",c.a.createElement("i",{className:"fa fa-paper-plane"})),c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),N(!0),u.collection("contacts").add({name:t,email:o,message:v}).then((function(){N(!1),alert("Your message has been submitted\ud83d\udc4d")})).catch((function(e){alert(e.message),N(!1)})),r(""),m(""),h("")}},c.a.createElement("label",null,"Name"),c.a.createElement("input",{required:!0,type:"text",placeholder:"e.g. Ashish Kumar",value:t,onChange:function(e){return r(e.target.value)}}),c.a.createElement("label",null,"Email"),c.a.createElement("input",{required:!0,placeholder:"e.g. xyz@gmail.com",value:o,pattern:"[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$",type:"email",onChange:function(e){return m(e.target.value)}}),c.a.createElement("label",null,"Message"),c.a.createElement("textarea",{required:!0,placeholder:"e.g. You are awesome",value:v,onChange:function(e){return h(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"button"},"Submit"))))},v=(t(44),function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"name"},"Ashish Kumar"),c.a.createElement("img",{src:t(45),alt:"boy"}),c.a.createElement("div",{className:"work"},"Frontend Web Developer"))}),h=(t(46),function(){return c.a.createElement("div",{className:"resume"},c.a.createElement("div",{className:"resume-heading"},c.a.createElement("span",{className:"my"},"MY"),c.a.createElement("span",{className:"resume-sub-heading"}," RESUME")),c.a.createElement("div",{className:"resume-content"},c.a.createElement("div",{className:"sub-heading first"},"EDUCATION"),c.a.createElement("div",{className:"education"},c.a.createElement("div",{className:"education-content"},c.a.createElement("div",{className:"sub-heading second"},"B.Tech (82.4 %)"),c.a.createElement("div",null,"ABES Engineering College, Ghaziabad"),c.a.createElement("div",null,"2018-2022")),c.a.createElement("div",{className:"border"}),c.a.createElement("div",{className:"education-content"},c.a.createElement("div",{className:"sub-heading second"},"Intermediate (86.4 %)"),c.a.createElement("div",null,"Saraswati Bal Mandir Senior Secondary School, Hapur"),c.a.createElement("div",null,"2015-2016")),c.a.createElement("div",{className:"border"}),c.a.createElement("div",{className:"education-content"},c.a.createElement("div",{className:"sub-heading second"},"High school (91.1%)"),c.a.createElement("div",null,"Saraswati Bal Mandir Senior Secondary School, Hapur"),c.a.createElement("div",null,"2013-2014"))),c.a.createElement("div",{className:"skills"},c.a.createElement("div",{className:"sub-heading first"},"TECHNICAL SKILLS"),c.a.createElement("div",{className:"sub-heading tech"},"C/C++"),c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"color zero"}),c.a.createElement("div",{className:"transparent"})),c.a.createElement("div",{className:"sub-heading tech"},"HTML"),c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"color one"}),c.a.createElement("div",{className:"transparent"})),c.a.createElement("div",{className:"sub-heading tech"},"CSS/SCSS"),c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"color two"}),c.a.createElement("div",{className:"transparent"})),c.a.createElement("div",{className:"sub-heading tech"},"JAVASCRIPT"),c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"color three"})),c.a.createElement("div",{className:"sub-heading tech"},c.a.createElement("div",null,"REACT JS")," "),c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"color four"}),c.a.createElement("div",{className:"transparent"}))),c.a.createElement("div",{className:"sub-heading first"}," EXPERIENCE"),c.a.createElement("div",{className:"experience"},c.a.createElement("div",{className:"sub-heading second"},"DevsLane(2019 - present)"),c.a.createElement("div",{className:"sub-heading third"},"Frontend web developer - Intern"),c.a.createElement("div",null,"I have an experience of more than one year in the field of frontend development. I have worked on many industrial level live projects during my internship which are based on React js."))))}),f=(t(47),function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement("img",{className:"image",src:t(48)}),c.a.createElement("div",{className:"data"},c.a.createElement("p",{className:"name"},"Ashish Kumar"),c.a.createElement("p",{className:"work"},"Frontend Web Developer"),c.a.createElement("div",{className:"icons"},c.a.createElement("a",{href:"https://github.com/AshishKumar64",target:"_blank"},c.a.createElement("i",{id:"github",className:"fa fa-github"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/ashish-kumar-b2909619b/",target:"_blank"},c.a.createElement("i",{id:"linkedin",className:"fa fa-linkedin"})),c.a.createElement("a",{href:"https://www.instagram.com/i_m_ashish24/",target:"_blank"},c.a.createElement("i",{id:"instagram",className:"fa fa-instagram"})),c.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100011646934403",target:"_blank"},c.a.createElement("i",{id:"facebook",className:"fa fa-facebook-square"})))),c.a.createElement("a",{href:t(49),download:"Ashish Kumar Resume"},c.a.createElement("button",{className:"resume-button"}," Download Resume")))}),p=(t(50),function(){var e=c.a.useState(window.innerWidth),a=Object(s.a)(e,2),t=a[0],n=a[1];return c.a.useEffect((function(){var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c.a.createElement(i.a,null,c.a.createElement("div",{className:"navigation"},c.a.createElement(i.b,{activeClassName:"active",className:"navlink",exact:!0,to:"/home"},c.a.createElement("i",{className:"fa fa-home"})),c.a.createElement(i.b,{activeClassName:"active",className:"navlink",to:"/about"},c.a.createElement("i",{className:"fa fa-user"})),c.a.createElement(i.b,{activeClassName:"active",className:"navlink",to:"/resume"},c.a.createElement("i",{className:"fa fa-book"})),c.a.createElement(i.b,{activeClassName:"active",className:"navlink",to:"/contact"},c.a.createElement("i",{className:"fa fa-phone"}))),c.a.createElement("div",{className:"content"},c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/home"},t>1024?c.a.createElement(v,null):c.a.createElement(f,null)),c.a.createElement(o.b,{path:"/about"},c.a.createElement(m,null)),c.a.createElement(o.b,{path:"/resume"},c.a.createElement(h,null)),c.a.createElement(o.b,{path:"/contact"},c.a.createElement(E,null)),c.a.createElement(o.a,{to:"/home"}))))}),N=(t(58),function(){var e=c.a.useState(window.innerWidth),a=Object(s.a)(e,2),t=a[0],n=a[1];return c.a.useEffect((function(){var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c.a.createElement("div",{className:"app"},t>1024?c.a.createElement(f,null):"",c.a.createElement(p,null))}),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement("head",null,c.a.createElement("title",null,"Ashish Kumar")),c.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),c.a.createElement(N,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/myPortfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/myPortfolio","/service-worker.js");b?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(a,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.9e5d4fc8.chunk.js.map
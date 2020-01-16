(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{29:function(e,t,a){e.exports=a(62)},34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),o=a.n(r),s=(a(34),a(11)),l=(a(35),a(8)),u=a.n(l),i=a(7),m=(a(37),a(26)),p=a.n(m),d=a(5),f=function(e){e.props;var t=Object(d.f)(),a=t.name,r=t.zip,o=Object(n.useState)(localStorage.getItem("name")||a),s=Object(i.a)(o,2),l=s[0],m=s[1],f=Object(n.useState)(localStorage.getItem("zip")||r),w=Object(i.a)(f,2),h=w[0],g=w[1],E=Object(n.useState)({}),b=Object(i.a)(E,2),v=b[0],N=b[1],y=Object(n.useState)([]),j=Object(i.a)(y,2),O=j[0],x=j[1],S=Object(n.useState)(""),D=Object(i.a)(S,2),H=D[0],k=D[1],z=Object(n.useState)("dawn"),I=Object(i.a)(z,2),M=I[0],C=I[1],F=function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.awrap(p.a.get("https://api.openweathermap.org/data/2.5/forecast?zip=".concat(h,"&units=imperial&appid=").concat("df675ade8bf894944f8af5da3e3a548e")));case 3:return e=t.sent,t.next=6,u.a.awrap(N(e));case 6:return t.next=8,u.a.awrap(k(e.data.city.name));case 8:return t.abrupt("return",e);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),null,null,[[0,11]])},W=function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||r==h){e.next=5;break}return e.next=3,u.a.awrap(g(r));case 3:return e.next=5,u.a.awrap(localStorage.setItem("zip",r));case 5:if(!(a&a!=l)){e.next=10;break}return e.next=8,u.a.awrap(m(a));case 8:return e.next=10,u.a.awrap(localStorage.setItem("name",a));case 10:case"end":return e.stop()}}))};Object(n.useEffect)((function(){console.log(r,a,h,l),W()}),[r,h,a,l,W,F]),Object(n.useEffect)((function(){F()}),[h,l]),Object(n.useEffect)((function(){var e=!1;if(!e){var t=new Date;t.getHours()<5?C("night"):t.getHours()<8?C("dawn"):t.getHours()<12?C("morning"):t.getHours()<17?C("daytime"):t.getHours()<20?C("sunset"):C("night")}return function(){e=!0}}),[]);return Object(n.useEffect)((function(){var e=!1;if(!e){if(v.data){var t=v.data.list.reduce((function(e,t){var a=new Date(1e3*t.dt).getDate();return e[a]||(e[a]=[]),e[a].push(t),e}),{});N(t),console.log(t)}v.data||function(){var e=[];for(var t in v)e.push(v[t]);x(e)}()}return function(){e=!0}}),[v]),c.a.createElement("div",{className:"main ".concat(M)},c.a.createElement("div",{className:"welcome-container"},c.a.createElement("div",{className:"welcome"},"Welcome, ",l||"Guest"),console.log(H),c.a.createElement("p",{className:"today"},"Here's your 5-day forecast",H&&" for ".concat(H))),O&&c.a.createElement("div",{className:"date-card-container"},O&&O.map((function(e){return c.a.createElement("div",{key:e[0].dt,className:"date-card"},c.a.createElement("span",{className:"main-date-title"},new Date(1e3*e[0].dt).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),c.a.createElement("div",{className:"weather-row ".concat(e.length>=4?"inset-shadow":"")},e.map((function(e){return c.a.createElement("div",{key:e.dt,className:"weather-block"},c.a.createElement("div",null,c.a.createElement("span",{className:"date-time"}," @ ".concat(new Date(1e3*e.dt).getHours()<12?new Date(1e3*e.dt).getHours():new Date(1e3*e.dt).getHours()-12,":").concat(new Date(1e3*e.dt).getMinutes()<10?"0":"").concat(new Date(1e3*e.dt).getMinutes()," ").concat(new Date(1e3*e.dt).getHours()<12?" AM":" PM"))),c.a.createElement("div",null,c.a.createElement("span",{className:"weather-title "},"Temperature:"),c.a.createElement("span",{className:"temp"},"".concat(e.main.temp.toFixed(0)," "))),c.a.createElement("div",null,c.a.createElement("span",{className:"weather-title"},"Weather:"),c.a.createElement("div",{className:"weather-description"},c.a.createElement("img",{className:"weather-icon",src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")}),c.a.createElement("span",null," ","".concat(e.weather[0].main," -  ").concat(e.weather[0].description)))))}))))}))))},w=(a(61),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],m=l[1];return c.a.createElement("div",{className:"main-container"},c.a.createElement("h2",{className:"heading"},"Welcome to your custom weather report!"),c.a.createElement("p",{className:"description"},"This app uses local storage in your browser to save your name and zip code to check the weather. If you clear your storage, you will need to re-enter your information for your forecast."),c.a.createElement("label",{className:"label",htmlFor:"name"},"Name:"),c.a.createElement("input",{className:"input",type:"text",value:u,id:"name",onChange:function(e){return m(e.target.value)}}),c.a.createElement("label",{className:"label",htmlFor:"zip"},"Zip Code:"),c.a.createElement("input",{className:"input",type:"text",value:a,id:"zip",onChange:function(e){return r(e.target.value)}}),c.a.createElement(s.b,{className:"button",to:{pathname:"/Home",name:u,zip:a}},"Save"))});var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",render:function(){return c.a.createElement(w,null)}}),c.a.createElement(d.a,{exact:!0,path:"/home",render:function(){return c.a.createElement(f,null)}})))};o.a.render(c.a.createElement(s.a,{basename:"".concat("/react-weather")},c.a.createElement(h,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ca8ce66e.chunk.js.map
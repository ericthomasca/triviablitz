(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,r){e.exports=r(58)},47:function(e,t,r){},49:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(34),c=r.n(o),l=(r(47),r(6)),i=(r(49),r(20)),u=r(1);var s=function(e){var t=e.username,r=e.setUsername,o=void 0===r?function(e){return e}:r,c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],m=i[1],f=Object(n.useState)(0),h=Object(l.a)(f,2),p=h[0],d=(h[1],Object(n.useState)((new Date).getTime())),v=Object(l.a)(d,2),E=v[0],y=(v[1],Object(u.f)());return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"TriviaBlitz!"),a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={user:s,score:p,timeLastPlayed:E};fetch("/api/addUser",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}},a.a.createElement("label",null,"Player name:"),a.a.createElement("input",{id:"name",type:"text"}),a.a.createElement("button",{required:!0,value:s,onClick:function(){""===document.getElementById("name").value?alert("Please enter a name"):(o(document.getElementById("name").value),alert(document.getElementById("name").value),console.log(t),y("/game"))},onChange:function(e){m(e.target.value),o(e.target.value)}},"Start Game")))},m=r(35),f=r(24);r(51);function h(){h=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function i(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var l=w(c,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var i=u(e,t,r);if("normal"===i.type){if(n=r.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n="completed",r.method="throw",r.arg=i.arg)}}}(e,r,c),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=i;var s={};function m(){}function f(){}function p(){}var d={};l(d,a,function(){return this});var v=Object.getPrototypeOf,E=v&&v(v(S([])));E&&E!==t&&r.call(E,a)&&(d=E);var y=p.prototype=m.prototype=Object.create(d);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(a,o){function c(){return new t(function(n,c){!function n(a,o,c,l){var i=u(e[a],e,o);if("throw"!==i.type){var s=i.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,c,l)},function(e){n("throw",e,c,l)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return n("throw",e,c,l)})}l(i.arg)}(a,o,n,c)})}return n=n?n.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,l(y,"constructor",p),l(p,"constructor",f),f.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new b(i(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then(function(e){return e.done?e.value:c.next()})},g(y),l(y,c,"Generator"),l(y,a,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),i=r.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var p=0;var d=function(){var e=Object(u.f)(),t=["easy","medium","hard"],r=Object(n.useState)(0),o=Object(l.a)(r,2),c=o[0],i=o[1],s=Object(n.useState)(""),d=Object(l.a)(s,2),v=d[0],E=d[1],y=Object(n.useState)(""),g=Object(l.a)(y,2),b=g[0],w=g[1],x=Object(n.useState)([]),O=Object(l.a)(x,2),j=O[0],S=O[1],L=[b,j[0],j[1],j[2]].map(function(e){return{value:e,sort:Math.random()}}).sort(function(e,t){return e.sort-t.sort}).map(function(e){return e.value}),k=function(e){return e.replace(/&quot;/g,'"').replace(/&eacute;/g,"\xe9").replace(/&rsquo;/g,"\u2019").replace(/&#039;/g,"'")};Object(n.useEffect)(function(){var e="https://opentdb.com/api.php?amount=1&type=multiple&difficulty="+t[c];console.log(e),function(){var t=Object(m.a)(h().mark(function t(){var r,n;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,E(k(n.results[0].question)),w(n.results[0].correct_answer),S(n.results[0].incorrect_answers),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("error",t.t0);case 15:case"end":return t.stop()}},t,null,[[0,12]])}));return function(){return t.apply(this,arguments)}}()()},[c,t]);var T=function(r){r===b?(alert("CORRECT"),"easy"===t[c]?(p+=1,console.log(p)):"medium"===t[c]?(p+=3,console.log(p)):"hard"===t[c]&&(p+=5,console.log(p),e("/gameover",{state:{id:1,score:p}})),i(c+1),console.log(t[c])):(alert("Answer Incorrect! Try again tomorrow!"),e("/gameover",{state:{id:1,score:p}}))},N=[0,1,2,3];return function(e){for(var t,r=e.length;0!==r;){t=Math.floor(Math.random()*r),r--;var n=[e[t],e[r]];e[r]=n[0],e[t]=n[1]}}(N),console.log(N),a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,v," - ",t[c].toUpperCase()),a.a.createElement("hr",null),a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{onClick:function(){return T(L[N[0]])}},k(L[N[0]])),a.a.createElement(f.a,{onClick:function(){return T(L[N[1]])}},k(L[N[1]])),a.a.createElement(f.a,{onClick:function(){return T(L[N[2]])}},k(L[N[2]])),a.a.createElement(f.a,{onClick:function(){return T(L[N[3]])}},k(L[N[3]]))))};var v=function(e){var t=Object(u.e)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Game Over!"),a.a.createElement("br",null),a.a.createElement("h3",null,"Your Score: ",t.state.score,"/9"),a.a.createElement("br",null),a.a.createElement("p",null,"Round 1 - EASY: 1 point "),a.a.createElement("p",null,"Round 2 - MEDIUM: 3 points "),a.a.createElement("p",null,"Round 3 - HARD: 5 points "))},E=r(36);var y=function(e){var t=e.expiryTimestamp,r=Object(E.useTimer)({expiryTimestamp:t,onExpire:function(){return console.warn("onExpire called")}}),n=r.seconds,o=r.minutes,c=r.hours,l=r.days,i=r.isRunning,u=r.start,s=r.pause,m=r.resume,f=r.restart;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("h1",null,"react-timer-hook "),a.a.createElement("p",null,"Timer Demo"),a.a.createElement("div",{style:{fontSize:"100px"}},a.a.createElement("span",null,l),":",a.a.createElement("span",null,c),":",a.a.createElement("span",null,o),":",a.a.createElement("span",null,n)),a.a.createElement("p",null,i?"Running":"Not running"),a.a.createElement("button",{onClick:u},"Start"),a.a.createElement("button",{onClick:s},"Pause"),a.a.createElement("button",{onClick:m},"Resume"),a.a.createElement("button",{onClick:function(){var e=new Date;e.setSeconds(e.getSeconds()+300),f(e)}},"Restart"))},g=r(37);var b=function(){return a.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Score"),a.a.createElement("th",null,"Time Last Played"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Mark"),a.a.createElement("td",null,"15"),a.a.createElement("td",null,"2022-06-22 14:55:55 NST")),a.a.createElement("tr",null,a.a.createElement("td",null,"Jacob"),a.a.createElement("td",null,"23"),a.a.createElement("td",null,"2022-06-21 08:23:44 NST")),a.a.createElement("tr",null,a.a.createElement("td",null,"Larry"),a.a.createElement("td",null,"16"),a.a.createElement("td",null,"2022-05-24 21:22:33 NST"))))};var w=function(e){var t=e.username,r=e.setUsername,n=new Date;return n.setSeconds(n.getSeconds()+600),a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",element:a.a.createElement(s,{username:t,setUsername:r})}),a.a.createElement(u.a,{exact:!0,path:"/game",element:a.a.createElement(d,null)}),a.a.createElement(u.a,{exact:!0,path:"/gameover",element:a.a.createElement(v,null)}),a.a.createElement(u.a,{exact:!0,path:"/timer",element:a.a.createElement(y,{expiryTimestamp:n})}),a.a.createElement(u.a,{exact:!0,path:"/scores",element:a.a.createElement(b,null)}))))},x=r(61),O=r(62),j=r(33);var S=function(e){var t=e.username;return a.a.createElement(j.a,{bg:"primary",variant:"dark"},a.a.createElement(x.a,null,a.a.createElement(j.a.Brand,{href:"#home"},"TriviaBlitz"),a.a.createElement(O.a,{className:"me-auto"},a.a.createElement(O.a.Link,{href:"/"},"Login"),a.a.createElement(O.a.Link,{href:"/scores"},"Scores"))),"Hello, ",t,"!")};var L=function(){var e=new Date;e.setSeconds(e.getSeconds()+600);var t=Object(n.useState)(""),r=Object(l.a)(t,2),o=r[0],c=r[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{userName:o,setUsername:c}),a.a.createElement(w,{userName:o,setUsername:c}))};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)))}},[[39,2,1]]]);
//# sourceMappingURL=main.5750668e.chunk.js.map
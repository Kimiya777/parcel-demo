var n,e,r=globalThis,t={},a={},o=r.parcelRequire94c2;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in a){var e=a[n];delete a[n];var r={id:n,exports:{}};return t[n]=r,e.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){a[n]=e},r.parcelRequire94c2=o),(0,o.register)("27Lyk",function(n,e){Object.defineProperty(n.exports,"register",{get:()=>r,set:n=>r=n,enumerable:!0,configurable:!0});var r,t=new Map;r=function(n,e){for(var r=0;r<e.length-1;r+=2)t.set(e[r],{baseUrl:n,path:e[r+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["jYEaB","index.f1226fa9.js","5CuNw","solar-flare.en.889f2034.jpg"]'));var i={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},u={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},s=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],c={CSS:{},springs:{}};function l(n,e,r){return Math.min(Math.max(n,e),r)}function f(n,e){return n.indexOf(e)>-1}function d(n,e){return n.apply(null,e)}var p={arr:function(n){return Array.isArray(n)},obj:function(n){return f(Object.prototype.toString.call(n),"Object")},pth:function(n){return p.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||p.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return p.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return p.hex(n)||p.rgb(n)||p.hsl(n)},key:function(n){return!i.hasOwnProperty(n)&&!u.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function g(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function h(n,e){var r=g(n),t=l(p.und(r[0])?1:r[0],.1,100),a=l(p.und(r[1])?100:r[1],.1,100),o=l(p.und(r[2])?10:r[2],.1,100),i=l(p.und(r[3])?0:r[3],.1,100),u=Math.sqrt(a/t),s=o/(2*Math.sqrt(a*t)),f=s<1?u*Math.sqrt(1-s*s):0,d=s<1?(s*u+-i)/f:-i+u;function h(n){var r=e?e*n/1e3:n;return(r=s<1?Math.exp(-r*s*u)*(+Math.cos(f*r)+d*Math.sin(f*r)):(1+d*r)*Math.exp(-r*u),0===n||1===n)?n:1-r}return e?h:function(){var e=c.springs[n];if(e)return e;for(var r=1/6,t=0,a=0;;)if(1===h(t+=r)){if(++a>=16)break}else a=0;var o=t*r*1e3;return c.springs[n]=o,o}}function v(n){return void 0===n&&(n=10),function(e){return Math.ceil(l(e,1e-6,1)*n)*(1/n)}}var m=function(){function n(n,e,r){return(((1-3*r+3*e)*n+(3*r-6*e))*n+3*e)*n}function e(n,e,r){return 3*(1-3*r+3*e)*n*n+2*(3*r-6*e)*n+3*e}return function(r,t,a,o){if(0<=r&&r<=1&&0<=a&&a<=1){var i=new Float32Array(11);if(r!==t||a!==o)for(var u=0;u<11;++u)i[u]=n(.1*u,r,a);return function(u){return r===t&&a===o||0===u||1===u?u:n(function(t){for(var o=0,u=1;10!==u&&i[u]<=t;++u)o+=.1;var s=o+(t-i[--u])/(i[u+1]-i[u])*.1,c=e(s,r,a);return c>=.001?function(r,t,a,o){for(var i=0;i<4;++i){var u=e(t,a,o);if(0===u)break;var s=n(t,a,o)-r;t-=s/u}return t}(t,s,r,a):0===c?s:function(e,r,t,a,o){var i,u,s=0;do(i=n(u=r+(t-r)/2,a,o)-e)>0?t=u:r=u;while(Math.abs(i)>1e-7&&++s<10)return u}(t,o,o+.1,r,a)}(u),t,o)}}}}(),y=(n={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Expo:function(){return function(n){return n?Math.pow(2,10*n-10):0}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,r=4;n<((e=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=l(n,1,10),t=l(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin(2*Math.PI*(n-1-t/(2*Math.PI)*Math.asin(1/r))/t)}}},["Quad","Cubic","Quart","Quint"].forEach(function(n,r){e[n]=function(){return function(n){return Math.pow(n,r+2)}}}),Object.keys(e).forEach(function(r){var t=e[r];n["easeIn"+r]=t,n["easeOut"+r]=function(n,e){return function(r){return 1-t(n,e)(1-r)}},n["easeInOut"+r]=function(n,e){return function(r){return r<.5?t(n,e)(2*r)/2:1-t(n,e)(-2*r+2)/2}},n["easeOutIn"+r]=function(n,e){return function(r){return r<.5?(1-t(n,e)(1-2*r))/2:(t(n,e)(2*r-1)+1)/2}}}),n);function b(n,e){if(p.fnc(n))return n;var r=n.split("(")[0],t=y[r],a=g(n);switch(r){case"spring":return h(n,e);case"cubicBezier":return d(m,a);case"steps":return d(v,a);default:return d(t,a)}}function x(n){try{return document.querySelectorAll(n)}catch(n){return}}function M(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<r;o++)if(o in n){var i=n[o];e.call(t,i,o,n)&&a.push(i)}return a}function w(n){return n.reduce(function(n,e){return n.concat(p.arr(e)?w(e):e)},[])}function O(n){return p.arr(n)?n:(p.str(n)&&(n=x(n)||n),n instanceof NodeList||n instanceof HTMLCollection)?[].slice.call(n):[n]}function k(n,e){return n.some(function(n){return n===e})}function C(n){var e={};for(var r in n)e[r]=n[r];return e}function P(n,e){var r=C(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function D(n,e){var r=C(n);for(var t in e)r[t]=p.und(n[t])?e[t]:n[t];return r}function E(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function I(n,e){return p.fnc(n)?n(e.target,e.id,e.total):n}function B(n,e){return n.getAttribute(e)}function T(n,e,r){if(k([r,"deg","rad","turn"],E(e)))return e;var t=c.CSS[e+r];if(!p.und(t))return t;var a=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+r;var i=100/a.offsetWidth;o.removeChild(a);var u=i*parseFloat(e);return c.CSS[e+r]=u,u}function F(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?T(n,a,r):a}}function S(n,e){return p.dom(n)&&!p.inp(n)&&(!p.nil(B(n,e))||p.svg(n)&&n[e])?"attribute":p.dom(n)&&k(s,e)?"transform":p.dom(n)&&"transform"!==e&&F(n,e)?"css":null!=n[e]?"object":void 0}function L(n){if(p.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function N(n,e,r,t){switch(S(n,e)){case"transform":var a,o;return a=f(e,"scale")?1:0+(f(e,"translate")||"perspective"===e?"px":f(e,"rotate")||f(e,"skew")?"deg":void 0),o=L(n).get(e)||a,t&&(t.transforms.list.set(e,o),t.transforms.last=e),r?T(n,o,r):o;case"css":return F(n,e,r);case"attribute":return B(n,e);default:return n[e]||0}}function A(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=E(n)||0,a=parseFloat(e),o=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function j(n,e){if(p.col(n)){var r,t,a,o;return r=n,p.rgb(r)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r))?"rgba("+t[1]+",1)":r:p.hex(r)?(a=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,r,t){return e+e+r+r+t+t}),"rgba("+parseInt((o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))[1],16)+","+parseInt(o[2],16)+","+parseInt(o[3],16)+",1)"):p.hsl(r)?function(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(n,e,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?n+(e-n)*6*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==i)e=r=t=u;else{var l=u<.5?u*(1+i):u+i-u*i,f=2*u-l;e=c(f,l,o+1/3),r=c(f,l,o),t=c(f,l,o-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+s+")"}(r):void 0}if(/\s/g.test(n))return n;var i=E(n),u=i?n.substr(0,n.length-i.length):n;return e?u+e:u}function H(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function q(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(t+=H(e,o)),e=o}return t}function _(n){var e;if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return 2*Math.PI*B(n,"r");case"rect":return 2*B(n,"width")+2*B(n,"height");case"line":return H({x:B(n,"x1"),y:B(n,"y1")},{x:B(n,"x2"),y:B(n,"y2")});case"polyline":return q(n);case"polygon":return e=n.points,q(n)+H(e.getItem(e.numberOfItems-1),e.getItem(0))}}function R(n,e){var r=e||{},t=r.el||function(n){for(var e=n.parentNode;p.svg(e)&&p.svg(e.parentNode);)e=e.parentNode;return e}(n),a=t.getBoundingClientRect(),o=B(t,"viewBox"),i=a.width,u=a.height,s=r.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:t,viewBox:s,x:s[0]/1,y:s[1]/1,w:i,h:u,vW:s[2],vH:s[3]}}function V(n,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=j(p.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:p.str(n)||e?t.split(r):[]}}function $(n){return M(n?w(p.arr(n)?n.map(O):O(n)):[],function(n,e,r){return r.indexOf(n)===e})}function U(n){var e=$(n);return e.map(function(n,r){return{target:n,id:r,total:e.length,transforms:{list:L(n)}}})}var W={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var o="";t.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function Y(n,e){U(n).forEach(function(n){for(var r in e){var t=I(e[r],n),a=n.target,o=E(t),i=N(a,r,o,n),u=A(j(t,o||E(i)),i);W[S(a,r)](a,r,u,n.transforms,!0)}})}function X(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map(function(n){return t(n)+n.duration})):e.duration,a.delay=r?Math.min.apply(Math,n.map(function(n){return t(n)+n.delay})):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map(function(n){return t(n)+n.duration-n.endDelay})):e.endDelay,a}var Z=0,G=[],Q=function(){var n;function e(r){for(var t=G.length,a=0;a<t;){var o=G[a];o.paused?(G.splice(a,1),t--):(o.tick(r),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){J.suspendWhenDocumentHidden&&(z()?n=cancelAnimationFrame(n):(G.forEach(function(n){return n._onDocumentVisibility()}),Q()))}),function(){n||z()&&J.suspendWhenDocumentHidden||!(G.length>0)||(n=requestAnimationFrame(e))}}();function z(){return!!document&&document.hidden}function J(n){void 0===n&&(n={});var e,r,t,a,o,s,c,f,d,g=0,v=0,m=0,y=0,x=null;function O(n){var e=window.Promise&&new Promise(function(n){return x=n});return n.finished=e,e}var k=(r=P(i,e=n),a=function(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=D(function(n){for(var e=M(w(n.map(function(n){return Object.keys(n)})),function(n){return p.key(n)}).reduce(function(n,e){return 0>n.indexOf(e)&&n.push(e),n},[]),r={},t=0;t<e.length;t++)!function(t){var a=e[t];r[a]=n.map(function(n){var e={};for(var r in n)p.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e})}(t);return r}(t),e)),e)p.key(a)&&r.push({name:a,tweens:function(n,e){var r=C(e);if(/^spring/.test(r.easing)&&(r.duration=h(r.easing)),p.arr(n)){var t=n.length;2!==t||p.obj(n[0])?p.fnc(e.duration)||(r.duration=e.duration/t):n={value:n}}var a=p.arr(n)?n:[n];return a.map(function(n,r){var t=p.obj(n)&&!p.pth(n)?n:{value:n};return p.und(t.delay)&&(t.delay=r?0:e.delay),p.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t}).map(function(n){return D(n,r)})}(e[a],n)});return r}(t=P(u,e),e),c=X(s=M(w((o=U(e.targets)).map(function(n){return a.map(function(e){return function(n,e){var r=S(n.target,e.name);if(r){var t,a=e.tweens.map(function(r){var a=function(n,e){var r={};for(var t in n){var a=I(n[t],e);p.arr(a)&&1===(a=a.map(function(n){return I(n,e)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,n),o=a.value,i=p.arr(o)?o[1]:o,u=E(i),s=N(n.target,e.name,u,n),c=t?t.to.original:s,l=p.arr(o)?o[0]:c,f=E(l)||E(s),d=u||f;return p.und(i)&&(i=c),a.from=V(l,d),a.to=V(A(i,l),d),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=b(a.easing,a.duration),a.isPath=p.pth(o),a.isPathTargetInsideSVG=a.isPath&&p.svg(n.target),a.isColor=p.col(a.from.original),a.isColor&&(a.round=1),t=a,a}),o=a[a.length-1];return{type:r,property:e.name,animatable:n,tweens:a,duration:o.end,delay:a[0].delay,endDelay:o.endDelay}}}(n,e)})})),function(n){return!p.und(n)}),t),f=Z,Z++,D(r,{id:f,children:[],animatables:o,animations:s,duration:c.duration,delay:c.delay,endDelay:c.endDelay}));function B(){var n=k.direction;"alternate"!==n&&(k.direction="normal"!==n?"normal":"reverse"),k.reversed=!k.reversed,d.forEach(function(n){return n.reversed=k.reversed})}function T(n){return k.reversed?k.duration-n:n}function F(){g=0,v=T(k.currentTime)*(1/J.speed)}function L(n,e){e&&e.seek(n-e.timelineOffset)}function j(n){for(var e=0,r=k.animations,t=r.length;e<t;){var a=r[e],o=a.animatable,i=a.tweens,u=i.length-1,s=i[u];u&&(s=M(i,function(e){return n<e.end})[0]||s);for(var c=l(n-s.start-s.delay,0,s.duration)/s.duration,f=isNaN(c)?1:s.easing(c),d=s.to.strings,p=s.round,g=[],h=s.to.numbers.length,v=void 0,m=0;m<h;m++){var y=void 0,b=s.to.numbers[m],x=s.from.numbers[m]||0;y=s.isPath?function(n,e,r){function t(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var a=R(n.el,n.svg),o=t(),i=t(-1),u=t(1),s=r?1:a.w/a.vW,c=r?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*s;case"y":return(o.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}(s.value,f*b,s.isPathTargetInsideSVG):x+f*(b-x),p&&!(s.isColor&&m>2)&&(y=Math.round(y*p)/p),g.push(y)}var w=d.length;if(w){v=d[0];for(var O=0;O<w;O++){d[O];var C=d[O+1],P=g[O];isNaN(P)||(C?v+=P+C:v+=P+" ")}}else v=g[0];W[a.type](o.target,a.property,v,o.transforms),a.currentValue=v,e++}}function H(n){k[n]&&!k.passThrough&&k[n](k)}function q(n){var e=k.duration,r=k.delay,t=e-k.endDelay,a=T(n);k.progress=l(a/e*100,0,100),k.reversePlayback=a<k.currentTime,d&&function(n){if(k.reversePlayback)for(var e=y;e--;)L(n,d[e]);else for(var r=0;r<y;r++)L(n,d[r])}(a),!k.began&&k.currentTime>0&&(k.began=!0,H("begin")),!k.loopBegan&&k.currentTime>0&&(k.loopBegan=!0,H("loopBegin")),a<=r&&0!==k.currentTime&&j(0),(a>=t&&k.currentTime!==e||!e)&&j(e),a>r&&a<t?(k.changeBegan||(k.changeBegan=!0,k.changeCompleted=!1,H("changeBegin")),H("change"),j(a)):k.changeBegan&&(k.changeCompleted=!0,k.changeBegan=!1,H("changeComplete")),k.currentTime=l(a,0,e),k.began&&H("update"),n>=e&&(v=0,k.remaining&&!0!==k.remaining&&k.remaining--,k.remaining?(g=m,H("loopComplete"),k.loopBegan=!1,"alternate"===k.direction&&B()):(k.paused=!0,!k.completed&&(k.completed=!0,H("loopComplete"),H("complete"),!k.passThrough&&"Promise"in window&&(x(),O(k)))))}return O(k),k.reset=function(){var n=k.direction;k.passThrough=!1,k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.loopBegan=!1,k.changeBegan=!1,k.completed=!1,k.changeCompleted=!1,k.reversePlayback=!1,k.reversed="reverse"===n,k.remaining=k.loop,y=(d=k.children).length;for(var e=y;e--;)k.children[e].reset();(k.reversed&&!0!==k.loop||"alternate"===n&&1===k.loop)&&k.remaining++,j(k.reversed?k.duration:0)},k._onDocumentVisibility=F,k.set=function(n,e){return Y(n,e),k},k.tick=function(n){m=n,g||(g=m),q((m+(v-g))*J.speed)},k.seek=function(n){q(T(n))},k.pause=function(){k.paused=!0,F()},k.play=function(){k.paused&&(k.completed&&k.reset(),k.paused=!1,G.push(k),F(),Q())},k.reverse=function(){B(),k.completed=!k.reversed,F()},k.restart=function(){k.reset(),k.play()},k.remove=function(n){nn($(n),k)},k.reset(),k.autoplay&&k.play(),k}function K(n,e){for(var r=e.length;r--;)k(n,e[r].animatable.target)&&e.splice(r,1)}function nn(n,e){var r=e.animations,t=e.children;K(n,r);for(var a=t.length;a--;){var o=t[a],i=o.animations;K(n,i),i.length||o.children.length||t.splice(a,1)}r.length||t.length||e.pause()}J.version="3.2.1",J.speed=1,J.suspendWhenDocumentHidden=!0,J.running=G,J.remove=function(n){for(var e=$(n),r=G.length;r--;)nn(e,G[r])},J.get=N,J.set=Y,J.convertPx=T,J.path=function(n,e){var r=p.str(n)?x(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:R(r),totalLength:_(r)*(t/100)}}},J.setDashoffset=function(n){var e=_(n);return n.setAttribute("stroke-dasharray",e),e},J.stagger=function(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?b(e.easing):null,a=e.grid,o=e.axis,i=e.from||0,u="first"===i,s="center"===i,c="last"===i,l=p.arr(n),f=l?parseFloat(n[0]):parseFloat(n),d=l?parseFloat(n[1]):0,g=E(l?n[1]:n)||0,h=e.start||0+(l?f:0),v=[],m=0;return function(n,e,p){if(u&&(i=0),s&&(i=(p-1)/2),c&&(i=p-1),!v.length){for(var y=0;y<p;y++){if(a){var b=s?(a[0]-1)/2:i%a[0],x=s?(a[1]-1)/2:Math.floor(i/a[0]),M=y%a[0],w=Math.floor(y/a[0]),O=b-M,k=x-w,C=Math.sqrt(O*O+k*k);"x"===o&&(C=-O),"y"===o&&(C=-k),v.push(C)}else v.push(Math.abs(i-y));m=Math.max.apply(Math,v)}t&&(v=v.map(function(n){return t(n/m)*m})),"reverse"===r&&(v=v.map(function(n){return o?n<0?-1*n:-n:Math.abs(m-n)}))}return h+(l?(d-f)/m:f)*(Math.round(100*v[e])/100)+g}},J.timeline=function(n){void 0===n&&(n={});var e=J(n);return e.duration=0,e.add=function(r,t){var a=G.indexOf(e),o=e.children;function i(n){n.passThrough=!0}a>-1&&G.splice(a,1);for(var s=0;s<o.length;s++)i(o[s]);var c=D(r,P(u,n));c.targets=c.targets||n.targets;var l=e.duration;c.autoplay=!1,c.direction=e.direction,c.timelineOffset=p.und(t)?l:A(t,l),i(e),e.seek(c.timelineOffset);var f=J(c);i(f),o.push(f);var d=X(o,n);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},J.easing=b,J.penner=y,J.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};const ne=document.createElement("img");document.body.append(ne);var nr={};nr=new URL("solar-flare.en.889f2034.jpg",import.meta.url).toString();const nt=new URL(nr);console.log(nt),ne.src=nt.href,console.log("file:///src/main.js"),J({targets:"img",rotate:360,duration:8e3,loop:!0});
//# sourceMappingURL=index.f1226fa9.js.map

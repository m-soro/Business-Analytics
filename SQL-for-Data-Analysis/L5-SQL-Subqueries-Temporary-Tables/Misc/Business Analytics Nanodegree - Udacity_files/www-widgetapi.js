(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function y(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.B=b.prototype}
function ma(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.u=this.l=0;this.j=null}
function na(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
ma.prototype.s=function(a){this.m=a};
function oa(a,b){a.j={X:b,ta:!0};a.h=a.l||a.u}
ma.prototype["return"]=function(a){this.j={"return":a};this.h=this.u};
function z(a,b,c){a.h=c;return{value:b}}
function pa(a){a.l=0;var b=a.j.X;a.j=null;return b}
function qa(a){this.h=new ma;this.i=a}
function ra(a,b){na(a.h);var c=a.h.i;if(c)return sa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ta(a)}
function sa(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,oa(a.h,g),ta(a)}a.h.i=null;d.call(a.h,f);return ta(a)}
function ta(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,oa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ta)throw b.X;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function ua(a){this.next=function(b){na(a.h);a.h.i?b=sa(a,a.h.i.next,b,a.h.s):(a.h.s(b),b=ta(a));return b};
this["throw"]=function(b){na(a.h);a.h.i?b=sa(a,a.h.i["throw"],b,a.h.s):(oa(a.h,b),b=ta(a));return b};
this["return"]=function(b){return ra(a,b)};
this[Symbol.iterator]=function(){return this}}
function va(a,b){var c=new ua(new qa(b));la&&a.prototype&&la(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||la});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var wa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||wa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ha),reject:g(this.m)}};
b.prototype.ha=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ja(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ga(g):this.o(g)}};
b.prototype.ga=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ka(h,g):this.o(g)};
b.prototype.m=function(g){this.u(2,g)};
b.prototype.o=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ia();this.F()};
b.prototype.ia=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.F=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ja=function(g){var h=this.l();g.N(h.resolve,h.reject)};
b.prototype.ka=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,q){return"function"==typeof p?function(u){try{l(p(u))}catch(v){m(v)}}:q}
var l,m,n=new b(function(p,q){l=p;m=q});
this.N(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.N=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).N(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(u){return function(v){p[u]=v;q--;0==q&&l(p)}}
var p=[],q=0;do p.push(void 0),q++,d(k.value).N(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
function xa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=xa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=xa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function ya(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return ya(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return ya(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return ya(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==xa(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&A(h.i,l))for(var n=0;n<m.length;n++){var p=m[n];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:n,v:p}}return{id:l,list:m,index:-1,v:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.v?l.v.value=k:(l.v={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.v),this.h.previous.next=l.v,this.h.previous=l.v,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.v&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.v.previous.next=h.v.next,h.v.next.previous=h.v.previous,h.v.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).v};
e.prototype.get=function(h){return(h=d(this,h).v)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function za(){}
function Aa(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function E(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ba(a){return Object.prototype.hasOwnProperty.call(a,Ca)&&a[Ca]||(a[Ca]=++Da)}
var Ca="closure_uid_"+(1E9*Math.random()>>>0),Da=0;function Ea(a,b,c){return a.call.apply(a.bind,arguments)}
function Fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ga(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ga=Ea:Ga=Fa;return Ga.apply(null,arguments)}
function F(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Na=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ha(a){return a}
;function Ia(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ja(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ja);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ja,Error);Ja.prototype.name="CustomError";var Ka=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},La=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ma(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Na(a,b){var c=Ka(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Oa(a){return Array.prototype.concat.apply([],arguments)}
function Pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Qa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Aa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ra(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Sa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ta(a){var b=Ua,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Va(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Wa(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Wa(a[c]);return b}
var Xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Xa.length;f++)c=Xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Za;var $a=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ab=/&/g,bb=/</g,cb=/>/g,db=/"/g,eb=/'/g,fb=/\x00/g,gb=/[\x00&<>"']/;
function hb(a,b){return a<b?-1:a>b?1:0}
;var J;a:{var jb=B.navigator;if(jb){var kb=jb.userAgent;if(kb){J=kb;break a}}J=""}function K(a){return-1!=J.indexOf(a)}
;function lb(){}
;function mb(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function nb(a){nb[" "](a);return a}
nb[" "]=za;var ob=K("Opera"),pb=K("Trident")||K("MSIE"),qb=K("Edge"),rb=K("Gecko")&&!(-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),sb=-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge");function tb(){var a=B.document;return a?a.documentMode:void 0}
var ub;a:{var vb="",wb=function(){var a=J;if(rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(qb)return/Edge\/([\d\.]+)/.exec(a);if(pb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sb)return/WebKit\/(\S+)/.exec(a);if(ob)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
wb&&(vb=wb?wb[1]:"");if(pb){var xb=tb();if(null!=xb&&xb>parseFloat(vb)){ub=String(xb);break a}}ub=vb}var yb=ub,zb={},Ab;if(B.document&&pb){var Bb=tb();Ab=Bb?Bb:parseInt(yb,10)||void 0}else Ab=void 0;var Cb=Ab;var Db=K("Firefox")||K("FxiOS"),Eb=mb()||K("iPod"),Fb=K("iPad"),Gb=K("Safari")&&!((K("Chrome")||K("CriOS"))&&!K("Edge")||K("Coast")||K("Opera")||K("Edge")||K("Edg/")||K("OPR")||K("Firefox")||K("FxiOS")||K("Silk")||K("Android"))&&!(mb()||K("iPad")||K("iPod"));var Hb={},Ib=null;var L=window;function Jb(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Kb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Lb[c])c=Lb[c];else{c=String(c);if(!Lb[c]){var f=/function\s+([^\(]+)/m.exec(c);Lb[c]=f?f[1]:"[Anonymous]"}c=Lb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Kb(a,b){b||(b={});b[Mb(a)]=!0;var c=a.stack||"",d=a.Oa;d&&!b[Mb(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Kb(d,b));return c}
function Mb(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Lb={};function Nb(a){this.h=a||{cookie:""}}
r=Nb.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Xa;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Y}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=$a(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Y:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.h.cookie};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=$a(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ob=new Nb("undefined"==typeof document?null:document);function Pb(a,b){this.width=a;this.height=b}
r=Pb.prototype;r.clone=function(){return new Pb(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Qb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Rb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Sb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Tb(a){return a?decodeURI(a):a}
function M(a){return Tb(a.match(Sb)[3]||null)}
function Ub(a){var b=a.match(Sb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
var Xb=/#|$/;function Yb(a){var b=Zb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function $b(){var a=[];Yb(function(b){a.push(b)});
return a}
var Zb={Aa:"allow-forms",Ba:"allow-modals",Ca:"allow-orientation-lock",Da:"allow-pointer-lock",Ea:"allow-popups",Fa:"allow-popups-to-escape-sandbox",Ga:"allow-presentation",Ha:"allow-same-origin",Ia:"allow-scripts",Ja:"allow-top-navigation",Ka:"allow-top-navigation-by-user-activation"},ac=Ra(function(){return $b()});
function bc(){var a=Qb(),b={};H(ac(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function cc(){this.j=this.j;this.m=this.m}
cc.prototype.j=!1;cc.prototype.dispose=function(){this.j||(this.j=!0,this.K())};
cc.prototype.K=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var dc={};function ec(a){if(a!==dc)throw Error("Bad secret");}
;function fc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var gc;function hc(){}
function ic(a,b){ec(b);this.h=a}
y(ic,hc);ic.prototype.toString=function(){return this.h.toString()};
var jc=null===(gc=fc())||void 0===gc?void 0:gc.emptyHTML;new ic(null!==jc&&void 0!==jc?jc:"",dc);var kc;function lc(){}
function mc(a,b){ec(b);this.h=a}
y(mc,lc);mc.prototype.toString=function(){return this.h.toString()};
var nc=null===(kc=fc())||void 0===kc?void 0:kc.emptyScript;new mc(null!==nc&&void 0!==nc?nc:"",dc);function oc(){}
function pc(a,b){ec(b);this.h=a}
y(pc,oc);pc.prototype.toString=function(){return this.h};new pc("about:blank",dc);new pc("about:invalid#zTSz",dc);var qc=(new Date).getTime();function rc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function sc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,q=0;64>q;q+=4)p[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=p[q-3]^p[q-8]^p[q-14]^p[q-16],p[q]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],v=e[2],x=e[3],D=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var I=x^u&(v^x);var ib=1518500249}else I=u^v^x,ib=1859775393;else 60>q?(I=u&v|x&(u|v),ib=2400959708):(I=u^v^x,ib=3395469782);I=((n<<5|n>>>27)&4294967295)+I+D+ib+p[q]&4294967295;D=x;x=v;v=(u<<30|u>>>2)&4294967295;u=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+v&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+D&4294967295}
function c(n,p){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],u=0,v=n.length;u<v;++u)q.push(n.charCodeAt(u));n=q}p||(p=n.length);q=0;if(0==l)for(;q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<p;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],p=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=p&255,p>>>=8;b(f);for(q=p=0;5>q;q++)for(var u=24;0<=u;u-=8)n[p++]=e[q]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,la:function(){for(var n=d(),p="",q=0;q<n.length;q++)p+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return p}}}
;function tc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),uc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=uc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function uc(a){var b=sc();b.update(a);return b.la().toLowerCase()}
;function vc(a){var b=rc(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new Nb(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new Nb(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,tc(rc(d),
c,a||null)].join(" "):null}return null}
;function wc(){this.i=[];this.h=-1}
wc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.h=-1)};
wc.prototype.get=function(a){return!!this.i[a]};
function xc(a){-1==a.h&&(a.h=La(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function yc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
yc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function zc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Ac(a){B.setTimeout(function(){throw a;},0)}
var Bc;function Cc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=Qb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ga(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.V;c.V=null;e()}};
return function(e){d.next={V:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Dc(){this.i=this.h=null}
Dc.prototype.add=function(a,b){var c=Ec.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Dc.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Ec=new yc(function(){return new Fc},function(a){return a.reset()});
function Fc(){this.next=this.scope=this.h=null}
Fc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Fc.prototype.reset=function(){this.next=this.scope=this.h=null};function Gc(a,b){Hc||Ic();Jc||(Hc(),Jc=!0);Kc.add(a,b)}
var Hc;function Ic(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Hc=function(){a.then(Lc)}}else Hc=function(){var b=Lc;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!K("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Bc||(Bc=Cc()),Bc(b)):B.setImmediate(b)}}
var Jc=!1,Kc=new Dc;function Lc(){for(var a;a=Kc.remove();){try{a.h.call(a.scope)}catch(b){Ac(b)}zc(Ec,a)}Jc=!1}
;function Mc(){this.i=-1}
;function Nc(){this.i=64;this.h=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
G(Nc,Mc);Nc.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Oc(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Nc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Oc(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Oc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Oc(this,e);f=0;break}}this.j=f;this.m+=b}};
Nc.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Oc(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var Pc="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Qc(){}
Qc.prototype.next=function(){throw Pc;};
Qc.prototype.C=function(){return this};
function Rc(a){if(a instanceof Qc)return a;if("function"==typeof a.C)return a.C(!1);if(Aa(a)){var b=0,c=new Qc;c.next=function(){for(;;){if(b>=a.length)throw Pc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Sc(a,b){if(Aa(a))try{H(a,b,void 0)}catch(c){if(c!==Pc)throw c;}else{a=Rc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Pc)throw c;}}}
function Tc(a){if(Aa(a))return Pa(a);a=Rc(a);var b=[];Sc(a,function(c){b.push(c)});
return b}
;function Uc(a,b){this.j={};this.h=[];this.l=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Uc)for(c=Vc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Vc(a){Wc(a);return a.h.concat()}
r=Uc.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||Xc;Wc(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Xc(a,b){return a===b}
r.isEmpty=function(){return 0==this.i};
r.clear=function(){this.j={};this.l=this.i=this.h.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.i--,this.l++,this.h.length>2*this.i&&Wc(this),!0):!1};
function Wc(a){if(a.i!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.i!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.i++,this.h.push(a),this.l++);this.j[a]=b};
r.forEach=function(a,b){for(var c=Vc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new Uc(this)};
r.C=function(a){Wc(this);var b=0,c=this.l,d=this,e=new Qc;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Pc;var f=d.h[b++];return a?f:d.j[f]};
return e};var Yc=!pb||9<=Number(Cb),Zc;
if(Zc=pb){var $c;if(Object.prototype.hasOwnProperty.call(zb,"9"))$c=zb["9"];else{for(var ad=0,bd=$a(String(yb)).split("."),cd=$a("9").split("."),dd=Math.max(bd.length,cd.length),ed=0;0==ad&&ed<dd;ed++){var fd=bd[ed]||"",gd=cd[ed]||"";do{var hd=/(\d*)(\D*)(.*)/.exec(fd)||["","","",""],id=/(\d*)(\D*)(.*)/.exec(gd)||["","","",""];if(0==hd[0].length&&0==id[0].length)break;ad=hb(0==hd[1].length?0:parseInt(hd[1],10),0==id[1].length?0:parseInt(id[1],10))||hb(0==hd[2].length,0==id[2].length)||hb(hd[2],id[2]);
fd=hd[3];gd=id[3]}while(0==ad)}$c=zb["9"]=0<=ad}Zc=!$c}var jd=Zc,kd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",za,b),B.removeEventListener("test",za,b)}catch(c){}return a}();function ld(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
ld.prototype.stopPropagation=function(){this.i=!0};
ld.prototype.preventDefault=function(){this.defaultPrevented=!0};function md(a,b){ld.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
G(md,ld);var nd={2:"touch",3:"pen",4:"mouse"};
md.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(rb){a:{try{nb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:nd[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&this.preventDefault()};
md.prototype.stopPropagation=function(){md.B.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
md.prototype.preventDefault=function(){md.B.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,jd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var od="closure_listenable_"+(1E6*Math.random()|0),pd=0;function qd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.O=e;this.key=++pd;this.J=this.M=!1}
function rd(a){a.J=!0;a.listener=null;a.h=null;a.src=null;a.O=null}
;function sd(a){this.src=a;this.listeners={};this.h=0}
sd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=td(a,b,d,e);-1<g?(b=a[g],c||(b.M=!1)):(b=new qd(b,this.src,f,!!d,e),b.M=c,a.push(b));return b};
sd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=td(e,b,c,d);return-1<b?(rd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ud(a,b){var c=b.type;c in a.listeners&&Na(a.listeners[c],b)&&(rd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function td(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.J&&f.listener==b&&f.capture==!!c&&f.O==d)return e}return-1}
;var vd="closure_lm_"+(1E6*Math.random()|0),wd={},xd=0;function yd(a,b,c,d,e){if(d&&d.once)zd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)yd(a,b[f],c,d,e);else c=Ad(c),a&&a[od]?Bd(a,b,c,E(d)?!!d.capture:!!d,e):Cd(a,b,c,!1,d,e)}
function Cd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=E(e)?!!e.capture:!!e,h=Dd(a);h||(a[vd]=h=new sd(a));c=h.add(b,c,d,g,f);if(!c.h){d=Ed();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)kd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Fd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xd++}}
function Ed(){var a=Gd,b=Yc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function zd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)zd(a,b[f],c,d,e);else c=Ad(c),a&&a[od]?a.h.add(String(b),c,!0,E(d)?!!d.capture:!!d,e):Cd(a,b,c,!0,d,e)}
function Hd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Hd(a,b[f],c,d,e);else(d=E(d)?!!d.capture:!!d,c=Ad(c),a&&a[od])?a.h.remove(String(b),c,d,e):a&&(a=Dd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=td(b,c,d,e)),(c=-1<a?b[a]:null)&&Id(c))}
function Id(a){if("number"!==typeof a&&a&&!a.J){var b=a.src;if(b&&b[od])ud(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xd--;(c=Dd(b))?(ud(c,a),0==c.h&&(c.src=null,b[vd]=null)):rd(a)}}}
function Fd(a){return a in wd?wd[a]:wd[a]="on"+a}
function Jd(a,b,c,d){var e=!0;if(a=Dd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.J&&(f=Kd(f,d),e=e&&!1!==f)}return e}
function Kd(a,b){var c=a.listener,d=a.O||a.src;a.M&&Id(a);return c.call(d,b)}
function Gd(a,b){if(a.J)return!0;if(!Yc){var c=b||C("window.event"),d=new md(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Jd(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Jd(c[g],f,!1,d),e=e&&h}return e}return Kd(a,new md(b,this))}
function Dd(a){a=a[vd];return a instanceof sd?a:null}
var Ld="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ad(a){if("function"===typeof a)return a;a[Ld]||(a[Ld]=function(b){return a.handleEvent(b)});
return a[Ld]}
;function N(){cc.call(this);this.h=new sd(this);this.F=this;this.o=null}
G(N,cc);N.prototype[od]=!0;N.prototype.addEventListener=function(a,b,c,d){yd(this,a,b,c,d)};
N.prototype.removeEventListener=function(a,b,c,d){Hd(this,a,b,c,d)};
N.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.F;d=a.type||a;if("string"===typeof a)a=new ld(a,b);else if(a instanceof ld)a.target=a.target||b;else{var e=a;a=new ld(d,b);Ya(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.h=c[f];e=Md(g,d,!0,a)&&e}a.i||(g=a.h=b,e=Md(g,d,!0,a)&&e,a.i||(e=Md(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.h=c[f],e=Md(g,d,!1,a)&&e;return e};
N.prototype.K=function(){N.B.K.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,rd(d[e]);delete a.listeners[c];a.h--}}this.o=null};
function Bd(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Md(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.J&&g.capture==c){var h=g.listener,k=g.O||g.src;g.M&&ud(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var Nd=B.JSON.stringify;function O(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=za)try{var b=this;a.call(void 0,function(c){Od(b,2,c)},function(c){Od(b,3,c)})}catch(c){Od(this,3,c)}}
function Pd(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Pd.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Qd=new yc(function(){return new Pd},function(a){a.reset()});
function Rd(a,b,c){var d=Qd.get();d.i=a;d.onRejected=b;d.context=c;return d}
O.prototype.then=function(a,b,c){return Sd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
O.prototype.$goog_Thenable=!0;O.prototype.cancel=function(a){if(0==this.h){var b=new Td(a);Gc(function(){Ud(this,b)},this)}};
function Ud(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Ud(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Vd(c),Wd(c,e,3,b)))}a.j=null}else Od(a,3,b)}
function Xd(a,b){a.i||2!=a.h&&3!=a.h||Yd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Sd(a,b,c,d){var e=Rd(null,null,null);e.h=new O(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Td?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Xd(a,e);return e.h}
O.prototype.F=function(a){this.h=0;Od(this,2,a)};
O.prototype.H=function(a){this.h=0;Od(this,3,a)};
function Od(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.F,f=a.H;if(d instanceof O){Xd(d,Rd(e||za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(E(d))try{var k=d.then;if("function"===typeof k){Zd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,Yd(a),3!=b||c instanceof Td||$d(a,c))}}
function Zd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Yd(a){a.o||(a.o=!0,Gc(a.u,a))}
function Vd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
O.prototype.u=function(){for(var a;a=Vd(this);)Wd(this,a,this.h,this.s);this.o=!1};
function Wd(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,ae(b,c,d);else try{b.j?b.i.call(b.context):ae(b,c,d)}catch(e){be.call(null,e)}zc(Qd,b)}
function ae(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function $d(a,b){a.m=!0;Gc(function(){a.m&&be.call(null,b)})}
var be=Ac;function Td(a){Ja.call(this,a)}
G(Td,Ja);Td.prototype.name="cancel";function P(a){cc.call(this);this.s=1;this.l=[];this.o=0;this.h=[];this.i={};this.u=!!a}
G(P,cc);r=P.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.s;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.s=e+3;d.push(e);return e};
function ce(a,b,c){var d=de;if(a=d.i[a]){var e=d.h;(a=Ma(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.L(a)}}
r.L=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.h[a+1]=za):(c&&Na(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.I=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];ee(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.L(c)}}return 0!=e}return!1};
function ee(a,b,c){Gc(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(H(b,this.L,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.K=function(){P.B.K.call(this);this.clear();this.l.length=0};function fe(a){this.h=a}
fe.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Nd(b))};
fe.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fe.prototype.remove=function(a){this.h.remove(a)};function ge(a){this.h=a}
G(ge,fe);function he(a){this.data=a}
function ie(a){return void 0===a||a instanceof he?a:new he(a)}
ge.prototype.set=function(a,b){ge.B.set.call(this,a,ie(b))};
ge.prototype.i=function(a){a=ge.B.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ge.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function je(a){this.h=a}
G(je,ge);je.prototype.set=function(a,b,c){if(b=ie(b)){if(c){if(c<Date.now()){je.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}je.B.set.call(this,a,b)};
je.prototype.i=function(a){var b=je.B.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())je.prototype.remove.call(this,a);else return b}};function ke(){}
;function le(){}
G(le,ke);le.prototype.clear=function(){var a=Tc(this.C(!0)),b=this;H(a,function(c){b.remove(c)})};function me(a){this.h=a}
G(me,le);r=me.prototype;r.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.h.removeItem(a)};
r.C=function(a){var b=0,c=this.h,d=new Qc;d.next=function(){if(b>=c.length)throw Pc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.h.clear()};
r.key=function(a){return this.h.key(a)};function ne(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
G(ne,me);function oe(a,b){this.i=a;this.h=null;if(pb&&!(9<=Number(Cb))){pe||(pe=new Uc);this.h=pe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),pe.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
G(oe,le);var qe={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},pe=null;function re(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return qe[b]})}
r=oe.prototype;r.isAvailable=function(){return!!this.h};
r.set=function(a,b){this.h.setAttribute(re(a),b);se(this)};
r.get=function(a){a=this.h.getAttribute(re(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.h.removeAttribute(re(a));se(this)};
r.C=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Qc;d.next=function(){if(b>=c.length)throw Pc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);se(this)};
function se(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function te(a,b){this.i=a;this.h=b+"::"}
G(te,le);te.prototype.set=function(a,b){this.i.set(this.h+a,b)};
te.prototype.get=function(a){return this.i.get(this.h+a)};
te.prototype.remove=function(a){this.i.remove(this.h+a)};
te.prototype.C=function(a){var b=this.i.C(!0),c=this,d=new Qc;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};var ue=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};F("yt.config_",ue);function ve(a){var b=arguments;1<b.length?ue[b[0]]=b[1]:1===b.length&&Object.assign(ue,b[0])}
function Q(a,b){return a in ue?ue[a]:b}
;var we=[];function xe(a){we.forEach(function(b){return b(a)})}
function ye(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ze(b),xe(b)}}:a}
function ze(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ve("ERRORS",b))}
function Ae(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ve("ERRORS",b))}
;var Be=0;F("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Be});var Ce={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function De(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ce||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
De.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
De.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
De.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ua=B.ytEventsEventsListeners||{};F("ytEventsEventsListeners",Ua);var Ee=B.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Ee);
function Fe(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ta(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=E(e[4])&&E(d)&&Va(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ge(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Ua){var c=Ua[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?He()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ua[b]}}))}
var He=Ra(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ie(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Fe(a,b,c,d);if(!e){e=++Ee.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new De(h);if(!Rb(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new De(h);
h.currentTarget=a;return c.call(a,h)};
g=ye(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),He()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ua[e]=[a,b,c,g,d]}}}
;function Je(a,b){"function"===typeof a&&(a=ye(a));return window.setTimeout(a,b)}
function Ke(a){"function"===typeof a&&(a=ye(a));return window.setInterval(a,250)}
;var Le={q:!0,search_query:!0};function Me(a){var b=[];Sa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ne(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?Qa(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){k.args=[{key:f[0],value:f[1],query:a}],Le.hasOwnProperty(f[0])||("ReferenceError"===k.name?Ae(k):ze(k))}}return c}
function Oe(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ne(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Wb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Pe={};function Qe(a){return Pe[a]||(Pe[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Re={},Se=[],de=new P,Te={};function Ue(){for(var a=w(Se),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Ve(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Qe(b)]:a.getAttribute("data-"+b):null;return c}
function We(a,b){de.I.apply(de,arguments)}
;function Xe(a){this.i=a||{};this.j=this.h=!1;a=document.getElementById("www-widgetapi-script");if(this.h=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function R(a,b){for(var c=[a.i,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Ye(a,b,c){Ze||(Ze={},Ie(window,"message",Ga(a.l,a)));Ze[c]=b}
Xe.prototype.l=function(a){if(a.origin==R(this,"host")||a.origin==R(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.j=!0;this.h||0!=a.origin.indexOf("https:")||(this.h=!0);if(a=Ze[b.id])a.u=!0,a.u&&(H(a.s,a.U,a),a.s.length=0),a.ea(b)}};
var Ze=null;function S(a){a=$e(a);return"string"===typeof a&&"false"===a?!1:!!a}
function af(a,b){var c=$e(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function $e(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;function bf(){}
function cf(a,b){return df(a,1,b)}
;function ef(){bf.apply(this,arguments)}
y(ef,bf);function df(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Je(a,c||0)}
function ff(a){if(!isNaN(a)){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
ef.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
ef.h=void 0;ef.i=function(){ef.h||(ef.h=new ef)};
ef.i();var gf=B.ytPubsubPubsubInstance||new P,hf=B.ytPubsubPubsubSubscribedKeys||{},jf=B.ytPubsubPubsubTopicToKeys||{},kf=B.ytPubsubPubsubIsSynchronous||{};P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.L;P.prototype.publish=P.prototype.I;P.prototype.clear=P.prototype.clear;F("ytPubsubPubsubInstance",gf);F("ytPubsubPubsubTopicToKeys",jf);F("ytPubsubPubsubIsSynchronous",kf);F("ytPubsubPubsubSubscribedKeys",hf);var lf=window,T=lf.ytcsi&&lf.ytcsi.now?lf.ytcsi.now:lf.performance&&lf.performance.timing&&lf.performance.now&&lf.performance.timing.navigationStart?function(){return lf.performance.timing.navigationStart+lf.performance.now()}:function(){return(new Date).getTime()};var mf=af("initial_gel_batch_timeout",1E3),nf=Math.pow(2,16)-1,of=null,pf=0,qf=void 0,rf=0,sf=0,tf=0,uf=!0,vf=B.ytLoggingTransportGELQueue_||new Map;F("ytLoggingTransportGELQueue_",vf);var wf=B.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",wf);function xf(a){a=void 0===a?!1:a;return new O(function(b){window.clearTimeout(rf);window.clearTimeout(sf);sf=0;qf&&qf.isReady()?(yf(b,a),vf.clear()):(zf(),b())})}
function zf(){S("web_gel_timeout_cap")&&!sf&&(sf=Je(xf,6E4));window.clearTimeout(rf);var a=Q("LOGGING_BATCH_TIMEOUT",af("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&uf&&(a=mf);rf=Je(xf,a)}
function yf(a,b){var c=qf;b=void 0===b?!1:b;for(var d=Math.round(T()),e=vf.size,f=w(vf),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;var k=h.next().value;h=Wa({context:Af(c.h||Bf())});h.events=k;(k=wf[g])&&Cf(h,g,k);delete wf[g];Df(h,d);Ef(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();pf=Math.round(T()-d)},
onError:function(){e--;e||a()},
za:b});uf=!1}}
function Df(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=Q("EVENT_ID",void 0);if(c){var d=Q("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*nf/2));d++;d>nf&&(d=1);ve("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;of&&pf&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:of,roundtripMs:String(pf)});of=c;pf=0}}
function Cf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Ff=B.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",Ff);function Gf(a){var b=Hf;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=qc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(D){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?L:g;try{var h=g.history.length}catch(D){h=0}e.u_his=h;e.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(e.u_h=L.screen.height,e.u_w=L.screen.width,
e.u_ah=L.screen.availHeight,e.u_aw=L.screen.availWidth,e.u_cd=L.screen.colorDepth);L.navigator&&L.navigator.plugins&&(e.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(e.u_nmime=L.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(D){}try{var m=h.outerWidth;var n=h.outerHeight}catch(D){}try{var p=h.innerWidth;var q=h.innerHeight}catch(D){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,n,p,q];
l=b.h.top;try{var u=(l||window).document,v="CSS1Compat"==u.compatMode?u.documentElement:u.body;var x=(new Pb(v.clientWidth,v.clientHeight)).round()}catch(D){x=new Pb(-12245933,-12245933)}u=x;x={};v=new wc;B.SVGElement&&B.document.createElementNS&&v.set(0);l=bc();l["allow-top-navigation-by-user-activation"]&&v.set(1);l["allow-popups-to-escape-sandbox"]&&v.set(2);B.crypto&&B.crypto.subtle&&v.set(3);B.TextDecoder&&B.TextEncoder&&v.set(4);v=xc(v);x.bc=v;x.bih=u.height;x.biw=u.width;x.brdim=k.join();b=
b.i;b=(x.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,x.wgl=!!L.WebGLRenderingContext,x);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Hf=new function(){var a=window.document;this.h=window;this.i=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return Me(Gf(a))});var If="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Jf(){if(!If)return null;var a=If();return"open"in a?a:null}
;var Kf={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Lf="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Mf=!1;
function Nf(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Sb)[1]||null,e=M(a);d&&e?(d=c,c=a.match(Sb),d=d.match(Sb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?M(c)==e&&(Number(c.match(Sb)[4]||null)||null)==(Number(a.match(Sb)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in Kf)e=Q(Kf[f]),!e||!c&&M(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!M(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!M(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!M(a))b["X-YouTube-Ad-Signals"]=Me(Gf(void 0));return b}
function Of(a){var b=window.location.search,c=M(a),d=Tb(a.match(Sb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ne(b),f={};H(Lf,function(g){e[g]&&(f[g]=e[g])});
return Oe(a,f||{},!1)}
function Pf(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Qf(a,b);var d=Rf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.S&&b.S.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ba&&0<b.timeout&&(f=Je(function(){e||(e=!0,window.clearTimeout(f),b.ba.call(b.context||B))},b.timeout))}else Sf(a,b)}
function Sf(a,b){var c=b.format||"JSON";a=Qf(a,b);var d=Rf(a,b),e=!1,f=Tf(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,p=500<=k.status&&600>k.status;if(l||n||p)m=Uf(a,c,k,b.Pa);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.S&&b.S.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.P&&0<b.timeout){var g=b.P;var h=Je(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function Qf(a,b){b.Ta&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.ya;d&&(d[c]&&delete d[c],a=Oe(a,d||{},!0));return a}
function Rf(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Sa||M(a)&&!b.withCredentials&&M(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ne(e),Ya(e,f),e=b.da&&"JSON"==b.da?JSON.stringify(e):Wb(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!Mf&&c&&"POST"!=b.method&&
(Mf=!0,ze(Error("AJAX request with postData should use POST")));return e}
function Uf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ae(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Vf(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Wf(g)})}d&&Xf(e);
return e}
function Xf(a){if(E(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===Za){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ha,createScript:Ha,createScriptURL:Ha})}catch(g){B.console&&B.console.error(g.message)}Za=e}else Za=e}(e=Za)&&e.createHTML(d);a[c]=new lb}else Xf(a[b])}}
function Vf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Wf(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Tf(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ye(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Jf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=Of(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Nf(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Yf(){return"INNERTUBE_API_KEY"in ue&&"INNERTUBE_API_VERSION"in ue}
function Bf(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),ma:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),na:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pa:Q("INNERTUBE_CONTEXT_HL",void 0),oa:Q("INNERTUBE_CONTEXT_GL",void 0),qa:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",sa:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ra:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Af(a){var b={client:{hl:a.pa,gl:a.oa,clientName:a.na,clientVersion:a.innertubeContextClientVersion,configInfo:a.ma}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=Q("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=Q("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=w(Object.entries(Ne(Q("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Zf(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ma||Q("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().La:b=vc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function $f(a){a=Object.assign({},a);delete a.Authorization;var b=vc();if(b){var c=new Nc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Aa(b);void 0===c&&(c=0);if(!Ib){Ib={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Hb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Ib[k]&&(Ib[k]=h)}}}c=Hb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function ag(a){var b=new ne;(b=b.isAvailable()?a?new te(b,a):b:null)||(a=new oe(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new je(a):null;this.i=document.domain||window.location.hostname}
ag.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Nd(b))}catch(f){return}else e=escape(b);b=this.i;Ob.set(""+a,e,{Y:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
ag.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ob.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ag.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Ob.remove(""+a,"/",void 0===b?"youtube.com":b)};var bg;function cg(){bg||(bg=new ag("yt.innertube"));return bg}
function dg(a,b,c,d){if(d)return null;d=cg().get("nextId",!0)||1;var e=cg().get("requests",!0)||{};e[d]={method:a,request:b,authState:$f(c),requestTime:Math.round(T())};cg().set("nextId",d+1,86400,!0);cg().set("requests",e,86400,!0);return d}
function eg(a){var b=cg().get("requests",!0)||{};delete b[a];cg().set("requests",b,86400,!0)}
function fg(a){var b=cg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=$f(Zf(!1));Va(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Ef(a,d.method,e,{}));delete b[c]}}cg().set("requests",b,86400,!0)}}
;var gg=C("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.L;P.prototype.publish=P.prototype.I;P.prototype.clear=P.prototype.clear;F("ytPubsub2Pubsub2Instance",gg);F("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);var hg=[],ig=!1;function jg(a,b){ig||(hg.push({type:"EVENT",eventType:a,payload:b}),10<hg.length&&hg.shift())}
;function kg(a){if(!a)throw Error();throw a;}
function lg(a){return a}
function U(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=w(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=w(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
U.all=function(a){return new U(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={G:0};f.G<a.length;f={G:f.G},++f.G)mg(U.resolve(a[f.G]).then(function(g){return function(h){d[g.G]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
U.resolve=function(a){return new U(function(b,c){a instanceof U?a.then(b,c):b(a)})};
U.reject=function(a){return new U(function(b,c){c(a)})};
U.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:lg,e=null!==b&&void 0!==b?b:kg;return new U(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ng(c,c,d,f,g)}),c.onRejected.push(function(){og(c,c,e,f,g)})):"FULFILLED"===c.state.status?ng(c,c,d,f,g):"REJECTED"===c.state.status&&og(c,c,e,f,g)})};
function mg(a,b){a.then(void 0,b)}
function ng(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?pg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function og(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?pg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function pg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?pg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function qg(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function rg(a){return new Promise(function(b,c){qg(a,b,c)})}
function V(a){return new U(function(b,c){qg(a,b,c)})}
;function sg(a,b){return new U(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;var tg=Eb||Fb;function W(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=w(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
y(W,Error);var ug={},vg=(ug.AUTH_INVALID="No user identifier specified.",ug.EXPLICIT_ABORT="Transaction was explicitly aborted.",ug.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ug.MISSING_OBJECT_STORE="Object store not created.",ug.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",ug.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ug.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ug);
function X(a,b,c){b=void 0===b?{}:b;c=void 0===c?vg[a]:c;W.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,X.prototype);ig||(hg.push({type:"ERROR",payload:this}),10<hg.length&&hg.shift())}
y(X,W);function wg(a){X.call(this,"MISSING_OBJECT_STORE",{Ua:a},vg.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,wg.prototype)}
y(wg,X);function xg(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
r=xg.prototype;r.add=function(a,b,c){return yg(this,[a],"readwrite",function(d){return zg(d,a).add(b,c)})};
r.clear=function(a){return yg(this,[a],"readwrite",function(b){return zg(b,a).clear()})};
r.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return yg(this,[a],"readonly",function(c){return zg(c,a).count(b)})};
r["delete"]=function(a,b){return yg(this,[a],"readwrite",function(c){return zg(c,a)["delete"](b)})};
r.get=function(a,b){return yg(this,[a],"readwrite",function(c){return zg(c,a).get(b)})};
function yg(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.h.transaction(b,c);d=Ag(e,d)["catch"](function(f){var g=a.h.name,h=b.join();f instanceof X||f instanceof W||("QuotaExceededError"===f.name?f=new X("QUOTA_EXCEEDED",{objectStoreNames:h,dbName:g}):Gb&&"UnknownError"===f.name?f=new X("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:h,dbName:g}):(Object.setPrototypeOf(f,W.prototype),f.args=[{name:"IdbError",Wa:f.name,dbName:g,objectStoreNames:h}]));throw f;});
Bg(a,d,b.join(),c);return d}
function Bg(a,b,c,d){Ia(a,function f(){var g,h,k=this,l,m,n;return va(f,function(p){if(1==p.h)return g=Math.round(T()),p.l=2,z(p,b,4);2!=p.h?(h=Math.round(T()),Cg(k,!0,c,h-g),p.h=0,p.l=0):(l=pa(p),m=Math.round(T()),n=m-g,l instanceof X&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&jg("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof X&&"UNKNOWN_ABORT"===l.type&&(jg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.j}),k.i=!0),Cg(k,!1,c,n),p.h=0)})})}
function Cg(a,b,c,d){jg("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function Dg(a){this.h=a}
r=Dg.prototype;r.add=function(a,b){return V(this.h.add(a,b))};
r.clear=function(){return V(this.h.clear()).then(function(){})};
r.count=function(a){return V(this.h.count(a))};
function Eg(a,b){return Fg(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?Eg(this,a):V(this.h["delete"](a))};
r.get=function(a){return V(this.h.get(a))};
r.index=function(a){return new Gg(this.h.index(a))};
r.getName=function(){return this.h.name};
function Fg(a,b,c){a=a.h.openCursor(b.query,b.direction);return Hg(a).then(function(d){return sg(d,c)})}
function Ig(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=X;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ag(a,b){var c=new Ig(a);return Jg(c,b)}
function Jg(a,b){var c=new Promise(function(d,e){mg(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Ig.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new X("EXPLICIT_ABORT");};
Ig.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function zg(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new Dg(c),a.i.set(c,d));return d}
function Gg(a){this.h=a}
Gg.prototype.count=function(a){return V(this.h.count(a))};
Gg.prototype["delete"]=function(a){return Kg(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Gg.prototype.get=function(a){return V(this.h.get(a))};
Gg.prototype.getKey=function(a){return V(this.h.getKey(a))};
function Kg(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Hg(a).then(function(d){return sg(d,c)})}
function Lg(a,b){this.request=a;this.cursor=b}
function Hg(a){return V(a).then(function(b){return null===b?null:new Lg(a,b)})}
r=Lg.prototype;r.advance=function(a){this.cursor.advance(a);return Hg(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return Hg(this.request)};
r["delete"]=function(){return V(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return V(this.cursor.update(a))};function Mg(a,b,c){return Ia(this,function e(){var f,g,h,k,l,m,n,p,q,u;return va(e,function(v){if(1==v.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.xa,m=g.upgrade,n=g.closed,q=function(){p||(p=new xg(f.result,{closed:n}));return p},f.addEventListener("upgradeneeded",function(x){if(null===x.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");x.dataLoss&&"none"!==x.dataLoss&&jg("IDB_DATA_CORRUPTED",{reason:x.dataLossMessage||"unknown reason",dbName:a});var D=q(),I=new Ig(f.transaction);m&&m(D,x.oldVersion,x.newVersion,I)}),h&&f.addEventListener("blocked",function(){h()}),z(v,rg(f),2);
u=v.m;k&&u.addEventListener("versionchange",function(){k(q())});
u.addEventListener("close",function(){jg("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:u.version});l&&l()});
return v["return"](q())})})}
function Ng(a,b){b=void 0===b?{}:b;return Ia(this,function d(){var e,f,g;return va(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return z(h,rg(e),0)})})}
;function Og(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Pg(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Mg(a,b,c)}
Og.prototype["delete"]=function(a){a=void 0===a?{}:a;return Ng(this.name,a)};
Og.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,xa:c,upgrade:this.options.upgrade},e=function(){return Ia(a,function g(){var h=this,k,l,m;return va(g,function(n){switch(n.h){case 1:return n.l=2,z(n,Pg(h.name,h.options.version,d),4);case 4:k=n.m;if(!Db){n.h=5;break}a:{var p=w(Object.keys(h.options.wa));for(var q=p.next();!q.done;q=p.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){p=q;break a}p=void 0}l=p;if(void 0===l){n.h=5;break}if(!Db||h.i){n.h=7;break}h.i=!0;return z(n,h["delete"](),8);case 8:return n["return"](e());case 7:throw new wg(l);
case 5:return n["return"](k);case 2:m=pa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](Pg(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Qg=new Og({wa:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Rg(a){return Ia(this,function c(){var d;return va(c,function(e){if(1==e.h)return z(e,Qg.open(),2);d=e.m;return e["return"](yg(d,["databases"],"readwrite",function(f){var g=zg(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return V(g.h.put(a,void 0)).then(function(){})})}))})})}
function Sg(){return Ia(this,function b(){var c;return va(b,function(d){if(1==d.h)return z(d,Qg.open(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Tg;
function Ug(){return Ia(this,function b(){var c,d;return va(b,function(e){switch(e.h){case 1:var f;if(f=tg)f=/WebKit\/([0-9]+)/.exec(J),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(J),f=!(f&&602<=parseInt(f[1],10)));if(f&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||qb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return z(e,Rg(d),4);case 4:return z(e,Sg(),5);case 5:return e["return"](!0);case 2:return pa(e),e["return"](!1)}})})}
function Vg(){if(void 0!==Tg)return Tg;ig=!0;return Tg=Ug().then(function(a){ig=!1;return a})}
;var Wg;function Xg(){Wg||(Wg=new ag("yt.offline"));return Wg}
;function Yg(){N.call(this);this.s=this.u=this.i=!1;this.l=Zg();$g(this);ah(this)}
y(Yg,N);function Zg(){var a=window.navigator.onLine;return void 0===a?!0:a}
function ah(a){window.addEventListener("online",function(){a.l=!0;a.i&&a.dispatchEvent("ytnetworkstatus-online");bh(a);if(a.s&&S("offline_error_handling")){var b=Xg().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new W(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;ze(d)}Xg().set("errors",{},2592E3,!0)}}})}
function $g(a){window.addEventListener("offline",function(){a.l=!1;a.i&&a.dispatchEvent("ytnetworkstatus-offline");bh(a)})}
function bh(a){a.u&&(Ae(new W("NetworkStatusManager state did not match poll",T()-0)),a.u=!1)}
;function ch(a){a=void 0===a?{}:a;N.call(this);var b=this;this.l=this.u=0;Yg.h||(Yg.h=new Yg);this.i=Yg.h;this.i.i=!0;a.ua&&(this.i.s=!0);a.R?(this.R=a.R,Bd(this.i,"ytnetworkstatus-online",function(){dh(b,"publicytnetworkstatus-online")}),Bd(this.i,"ytnetworkstatus-offline",function(){dh(b,"publicytnetworkstatus-offline")})):(Bd(this.i,"ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),Bd(this.i,"ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))}
y(ch,N);function dh(a,b){a.R?a.l?(ff(a.u),a.u=cf(function(){a.s!==b&&(a.dispatchEvent(b),a.s=b,a.l=T())},a.R-(T()-a.l))):(a.dispatchEvent(b),a.s=b,a.l=T()):a.dispatchEvent(b)}
;var eh;function fh(a,b){b=void 0===b?{}:b;Vg().then(function(){eh||(eh=new ch({ua:!0}));eh.i.l!==Zg()&&Ae(new W("NetworkStatusManager isOnline does not match window status"));Sf(a,b)})}
function gh(a,b){b=void 0===b?{}:b;Vg().then(function(){Sf(a,b)})}
;function hh(a){var b=this;this.h=null;a?this.h=a:Yf()&&(this.h=Bf());df(function(){fg(b)},0,5E3)}
hh.prototype.isReady=function(){!this.h&&Yf()&&(this.h=Bf());return!!this.h};
function Ef(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ae(new W("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new W("innertube xhrclient not ready",b,c,d);ze(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",A:c,da:"JSON",P:function(){d.P()},
ba:d.P,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
aa:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
Va:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.qa)&&(g=e);var h=a.h.sa||!1,k=Zf(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.ra&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var m=Oe(""+g+e,l||{},!0);Vg().then(function(n){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!n||!S("networkless_gel"))var p=dg(b,
c,k,h);if(p){var q=f.onSuccess,u=f.aa;f.onSuccess=function(v,x){eg(p);q(v,x)};
c.aa=function(v,x){eg(p);u(v,x)}}}try{S("use_fetch_for_op_xhr")?Pf(m,f):S("networkless_gel")&&d.retry?(f.method="POST",!d.za&&S("nwl_send_fast_on_unload")?gh(m,f):fh(m,f)):(f.method="POST",f.A||(f.A={}),Sf(m,f))}catch(v){if("InvalidAccessError"==v.name)p&&(eg(p),p=0),Ae(Error("An extension is blocking network request."));
else throw v;}p&&df(function(){fg(a)},0,5E3)})}
;function ih(a,b){var c=void 0===c?{}:c;var d=hh;Q("ytLoggingEventsDefaultDisabled",!1)&&hh==hh&&(d=null);var e=c;e=void 0===e?{}:e;c={};c.eventTimeMs=Math.round(e.timestamp||T());c[a]=b;var f=C("_lact",window);f=null==f?-1:Math.max(Date.now()-f,0);c.context={lastActivityMs:String(e.timestamp||!isFinite(f)?-1:f)};if(S("log_sequence_info_on_gel_web")&&e.fa){f=c.context;var g=e.fa;Ff[g]=g in Ff?Ff[g]+1:0;f.sequence={index:Ff[g],groupKey:g};e.Ra&&delete Ff[e.fa]}e=e.Qa;f="";e&&(f={},e.videoId?f.videoId=
e.videoId:e.playlistId&&(f.playlistId=e.playlistId),wf[e.token]=f,f=e.token);e=vf.get(f)||[];vf.set(f,e);e.push(c);d&&(qf=new d);d=af("web_logging_max_batch")||100;c=T();e.length>=d?xf(!0):10<=c-tf&&(zf(),tf=c)}
;var jh=[{Z:function(a){return"Cannot read property '"+a.key+"'"},
T:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Z:function(a){return"Cannot call '"+a.key+"'"},
T:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function kh(){this.h=[];this.i=[]}
var lh;var mh=new P;function nh(a,b,c,d){c+="."+a;a=oh(b);d[c]=a;return c.length+a.length}
function oh(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var ph=new Set,qh=0,rh=0,sh=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Y(a,b,c){this.o=this.h=this.i=null;this.m=Ba(this);this.j=0;this.u=!1;this.s=[];this.l=null;this.F=c;this.H={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?Ub(a.src):"https://www.youtube.com"),this.i=new Xe(b),c||(b=th(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ba(this.h)),Re[this.h.id]=this,window.postMessage){this.l=new P;uh(this);b=R(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Te)vh(this,e)}}
r=Y.prototype;r.setSize=function(a,b){this.h.width=a;this.h.height=b;return this};
r.va=function(){return this.h};
r.ea=function(a){wh(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);xh(this,a);return this};
function vh(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.F==c[0]&&xh(a,d)}}
r.destroy=function(){this.h.id&&(Re[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Ze&&(Ze[this.m]=null);this.i=null;a=this.h;for(var c in Ua)Ua[c][0]==a&&Ge(c);this.o=this.h=null};
r.W=function(){return{}};
function yh(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.U(b):a.s.push(b)}
function wh(a,b,c){a.l.j||(c={target:a,data:c},a.l.I(b,c),We(a.F+"."+b,c))}
function th(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+R(a.i,"title"));(d=R(a.i,"width"))&&c.setAttribute("width",d);(d=R(a.i,"height"))&&c.setAttribute("height",d);var h=
a.W();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.m;window.location.href&&H(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(Xb);b:{var n=0;for(var p=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+p),!q||61==q||38==q||35==q)break b;n+=p+1}n=-1}if(0>n)l=null;else{p=l.indexOf("&",n);if(0>p||p>m)p=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
p-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=R(a.i,"host")+("/embed/"+R(a.i,"videoId"))+"?"+Wb(h);return c}
r.ca=function(){this.h&&this.h.contentWindow?this.U({event:"listening"}):window.clearInterval(this.j)};
function uh(a){Ye(a.i,a,a.m);a.j=Ke(Ga(a.ca,a));Ie(a.h,"load",Ga(function(){window.clearInterval(this.j);this.j=Ke(Ga(this.ca,this))},a))}
function xh(a,b){a.H[b]||(a.H[b]=!0,yh(a,"addEventListener",[b]))}
r.U=function(a){a.id=this.m;a.channel="widget";a=Nd(a);var b=this.i;var c=Ub(this.h.src||"");b=0==c.indexOf("https:")?[c]:b.h?[c.replace("http:","https:")]:b.j?[c]:[c,c.replace("http:","https:")];if(this.h.contentWindow)for(c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(I){if(I.name&&"SyntaxError"==I.name){if(!(I.message&&0<I.message.indexOf("target origin ''"))){var d=void 0,e=void 0,f=I;e=void 0===e?{}:e;e.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var g=e||{};e="WARNING";e=void 0===e?"ERROR":e;d=void 0===d?!1:d;if(f){if(S("console_log_js_exceptions")){var h=f,k=[];k.push("Name: "+h.name);k.push("Message: "+h.message);h.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(h.params));k.push("File name: "+h.fileName);k.push("Stacktrace: "+h.stack);window.console.log(k.join("\n"),h)}if((!S("web_yterr_killswitch")||window&&window.yterr||d)&&!(5<=qh)&&0!==f.sampleWeight){d=f;var l=g;k=Jb(d);f=k.message||"Unknown Error";g=k.name||
"UnknownError";var m=k.stack||d.h||"Not available";m.startsWith(g+": "+f)&&(h=m.split("\n"),h.shift(),m=h.join("\n"));h=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=void 0,p=d;if(p.hasOwnProperty("args")&&p.args&&p.args.length){var q=0;for(n=0;n<p.args.length;n++){var u=p.args[n],v="params."+n;q+=v.length;if(u)if(Array.isArray(u))for(var x=l,D=0;D<u.length&&!(u[D]&&(q+=nh(D,u[D],v,x),500<q));D++);else if("object"===typeof u)for(x in x=void 0,D=l,u){if(u[x]&&(q+=nh(x,u[x],v,D),
500<q))break}else l[v]=oh(u),q+=l[v].length;else l[v]=oh(u),q+=l[v].length;if(500<=q)break}}else if(p.hasOwnProperty("params")&&p.params)if(u=p.params,"object"===typeof p.params)for(n in p=0,u){if(u[n]&&(v="params."+n,q=oh(u[n]),l[v]=q,p+=v.length+q.length,500<p))break}else l.params=oh(u);navigator.vendor&&!l.hasOwnProperty("vendor")&&(l.vendor=navigator.vendor);f={message:f,name:g,lineNumber:h,fileName:k,stack:m,params:l};d=Number(d.columnNumber);isNaN(d)||(f.lineNumber=f.lineNumber+":"+d);d=f;f=
w(jh);for(g=f.next();!g.done;g=f.next())if(g=g.value,g.T[d.name])for(k=w(g.T[d.name]),h=k.next();!h.done;h=k.next())if(m=h.value,h=d.message.match(m.regexp)){d.params["params.error.original"]=h[0];k=m.groups;m={};for(l=0;l<k.length;l++)m[k[l]]=h[l+1],d.params["params.error."+k[l]]=h[l+1];d.message=g.Z(m);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(d);if(!(ph.has(d.message)||0<=d.stack.indexOf("/YouTubeCenter.js")||0<=d.stack.indexOf("/mytube.js"))){"ERROR"===e?(mh.I("handleError",
d),S("record_app_crashed_web")&&0===rh&&ih("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"}),rh++):"WARNING"===e&&mh.I("handleWarning",d);if(S("kevlar_gel_error_routing")){g=e;f=d;a:{h=w(sh);for(k=h.next();!k.done;k=h.next())if((m=J)&&0<=m.toLowerCase().indexOf(k.value.toLowerCase())){h=!0;break a}h=!1}if(!h){k={stackTrace:f.stack};f.fileName&&(k.filename=f.fileName);h=f.lineNumber&&f.lineNumber.split?f.lineNumber.split(":"):[];0!==h.length&&(1!==h.length||isNaN(Number(h[0]))?2!==h.length||isNaN(Number(h[0]))||
isNaN(Number(h[1]))||(k.lineNumber=Number(h[0]),k.columnNumber=Number(h[1])):k.lineNumber=Number(h[0]));lh||(lh=new kh);h=lh;m=f.message;l=f.name;a:{p=w(h.i);for(n=p.next();!n.done;n=p.next())if(n=n.value,f.message&&f.message.match(n.h)){p=n.weight;break a}p=w(h.h);for(n=p.next();!n.done;n=p.next())if(n=n.value,n.h(f)){p=n.weight;break a}p=1}m={level:"ERROR_LEVEL_UNKNOWN",message:m,errorClassName:l,sampleWeight:p};"ERROR"===g?m.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(m.level="ERROR_LEVEL_WARNNING");
g={isObfuscated:!0,browserStackInfo:k};k={pageUrl:window.location.href};Q("FEXP_EXPERIMENTS")&&(k.experimentIds=Q("FEXP_EXPERIMENTS"));k.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+h.i.length+"&cb="+h.h.length},{key:"client.params.serviceWorker",value:"false"}];if(f=f.params)for(h=w(Object.keys(f)),l=h.next();!l.done;l=h.next())l=l.value,k.kvPairs.push({key:"client."+l,value:String(f[l])});f=Q("SERVER_NAME",void 0);h=Q("SERVER_VERSION",void 0);f&&h&&(k.kvPairs.push({key:"server.name",
value:f}),k.kvPairs.push({key:"server.version",value:h}));ih("clientError",{errorMetadata:k,stackTrace:g,logMessage:m});xf()}}if(!S("suppress_error_204_logging")){g=d;f=g.params||{};e={ya:{a:"logerror",t:"jserror",type:g.name,msg:g.message.substr(0,250),line:g.lineNumber,level:e,"client.name":f.name},A:{url:Q("PAGE_NAME",window.location.href),file:g.fileName},method:"POST"};f.version&&(e["client.version"]=f.version);if(e.A){g.stack&&(e.A.stack=g.stack);g=w(Object.keys(f));for(h=g.next();!h.done;h=
g.next())h=h.value,e.A["client."+h]=f[h];if(f=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=w(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.A[h]=f[h];f=Q("SERVER_NAME",void 0);g=Q("SERVER_VERSION",void 0);f&&g&&(e.A["server.name"]=f,e.A["server.version"]=g)}Sf(Q("ECATCHER_REPORT_HOST","")+"/error_204",e)}ph.add(d.message);qh++}}}}}else throw I;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function zh(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ah(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.D={};this.playerInfo={}}
y(Z,Y);r=Z.prototype;r.W=function(){var a=R(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=R(this.i,"embedConfig")){if(E(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.ea=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(E(a))for(var c in a)this.D[c]=a[c];break;case "infoDelivery":Bh(this,a);break;case "initialDelivery":window.clearInterval(this.j);this.playerInfo={};this.D={};Ch(this,a.apiInterface);Bh(this,a);break;default:wh(this,b,a)}};
function Bh(a,b){if(E(b))for(var c in b)a.playerInfo[c]=b[c]}
function Ch(a,b){H(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:zh(c)?this[c]=function(){this.playerInfo={};
this.D={};yh(this,c,arguments);return this}:Ah(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){yh(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=parseInt(R(this.i,"width"),10),b=parseInt(R(this.i,"height"),10),c=R(this.i,"host")+("/embed/"+R(this.i,"videoId"));gb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ab,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(bb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(cb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(db,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(eb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(fb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
r.getOptions=function(a){return this.D.namespaces?a?this.D[a].options||[]:this.D.namespaces||[]:[]};
r.getOption=function(a,b){if(this.D.namespaces&&a&&b)return this.D[a][b]};
function Dh(a){if("iframe"!=a.tagName.toLowerCase()){var b=Ve(a,"videoid");b&&(b={videoId:b,width:Ve(a,"width"),height:Ve(a,"height")},new Z(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return Re[a]});
F("YT.scan",Ue);F("YT.subscribe",function(a,b,c){de.subscribe(a,b,c);Te[a]=!0;for(var d in Re)vh(Re[d],a)});
F("YT.unsubscribe",function(a,b,c){ce(a,b,c)});
F("YT.Player",Z);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.va;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
Se.push(function(a){var b=a;b||(b=document);a=Pa(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Ka(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Pa(b);H(Oa(a,b),Dh)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ue();var Eh=B.onYTReady;Eh&&Eh();var Fh=B.onYouTubeIframeAPIReady;Fh&&Fh();var Gh=B.onYouTubePlayerAPIReady;Gh&&Gh();}).call(this);

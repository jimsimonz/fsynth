!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){otText=r(1)},function(e,t,r){var n=r(2);n.api=r(3),e.exports={type:n}},function(e,t){t.name="text",t.uri="http://sharejs.org/types/textv1",t.create=function(e){if(null!=e&&"string"!=typeof e)throw Error("Initial data must be a string");return e||""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},n=function(e){if(!r(e))throw Error("Op must be an array of components");for(var t=null,n=0;n<e.length;n++){var o=e[n];switch(typeof o){case"object":if(!("number"==typeof o.d&&o.d>0))throw Error("Object components must be deletes of size > 0");break;case"string":if(!(o.length>0))throw Error("Inserts cannot be empty");break;case"number":if(!(o>0))throw Error("Skip components must be >0");if("number"==typeof t)throw Error("Adjacent skip components should be combined")}t=o}if("number"==typeof t)throw Error("Op has a trailing skip")},o=function(e){return function(t){if(t&&0!==t.d)return 0===e.length?e.push(t):typeof t==typeof e[e.length-1]?"object"==typeof t?e[e.length-1].d+=t.d:e[e.length-1]+=t:e.push(t)}},i=function(e){var t=0,r=0,n=function(n,o){if(t===e.length)return n===-1?null:n;var i,s=e[t];return"number"==typeof s?n===-1||s-r<=n?(i=s-r,++t,r=0,i):(r+=n,n):"string"==typeof s?n===-1||"i"===o||s.length-r<=n?(i=s.slice(r),++t,r=0,i):(i=s.slice(r,r+n),r+=n,i):n===-1||"d"===o||s.d-r<=n?(i={d:s.d-r},++t,r=0,i):(r+=n,{d:n})},o=function(){return e[t]};return[n,o]},s=function(e){return"number"==typeof e?e:e.length||e.d},a=function(e){return e.length>0&&"number"==typeof e[e.length-1]&&e.pop(),e};t.normalize=function(e){for(var t=[],r=o(t),n=0;n<e.length;n++)r(e[n]);return a(t)},t.apply=function(e,t){if("string"!=typeof e)throw Error("Snapshot should be a string");n(t);for(var r=[],o=0;o<t.length;o++){var i=t[o];switch(typeof i){case"number":if(i>e.length)throw Error("The op is too long for this document");r.push(e.slice(0,i)),e=e.slice(i);break;case"string":r.push(i);break;case"object":e=e.slice(i.d)}}return r.join("")+e},t.transform=function(e,t,r){if("left"!=r&&"right"!=r)throw Error("side ("+r+") must be 'left' or 'right'");n(e),n(t);for(var c=[],f=o(c),u=i(e),h=u[0],l=u[1],p=0;p<t.length;p++){var b,g,m=t[p];switch(typeof m){case"number":for(b=m;b>0;)g=h(b,"i"),f(g),"string"!=typeof g&&(b-=s(g));break;case"string":"left"===r&&"string"==typeof l()&&f(h(-1)),f(m.length);break;case"object":for(b=m.d;b>0;)switch(g=h(b,"i"),typeof g){case"number":b-=g;break;case"string":f(g);break;case"object":b-=g.d}}}for(;m=h(-1);)f(m);return a(c)},t.compose=function(e,t){n(e),n(t);for(var r=[],c=o(r),f=i(e)[0],u=0;u<t.length;u++){var h,l,p=t[u];switch(typeof p){case"number":for(h=p;h>0;)l=f(h,"d"),c(l),"object"!=typeof l&&(h-=s(l));break;case"string":c(p);break;case"object":for(h=p.d;h>0;)switch(l=f(h,"d"),typeof l){case"number":c({d:l}),h-=l;break;case"string":h-=l.length;break;case"object":c(l)}}}for(;p=f(-1);)c(p);return a(r)};var c=function(e,t){for(var r=0,n=0;n<t.length;n++){var o=t[n];if(e<=r)break;switch(typeof o){case"number":if(e<=r+o)return e;r+=o;break;case"string":r+=o.length,e+=o.length;break;case"object":e-=Math.min(o.d,e-r)}}return e};t.transformSelection=function(e,t,r){var n=0;if(r){for(var o=0;o<t.length;o++){var i=t[o];switch(typeof i){case"number":n+=i;break;case"string":n+=i.length}}return n}return"number"==typeof e?c(e,t):[c(e[0],t),c(e[1],t)]},t.selectionEq=function(e,t){return null!=e[0]&&e[0]===e[1]&&(e=e[0]),null!=t[0]&&t[0]===t[1]&&(t=t[0]),e===t||null!=e[0]&&null!=t[0]&&e[0]===t[0]&&e[1]==t[1]}},function(e,t){function r(e,t){return{get:function(){return e()},getLength:function(){return e().length},insert:function(e,r,n){return t([e,r],n)},remove:function(e,r,n){return t([e,{d:r}],n)},_onOp:function(e){for(var t=0,r=0,n=0;n<e.length;n++){var o=e[n];switch(typeof o){case"number":t+=o,r+=o;break;case"string":this.onInsert&&this.onInsert(t,o),t+=o.length;break;case"object":this.onRemove&&this.onRemove(t,o.d),r+=o.d}}}}}e.exports=r,r.provides={text:!0}}]);
//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/vendor/modernizr.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Modernizr v2.8.3                                                                                                    // 2
 * www.modernizr.com                                                                                                   // 3
 *                                                                                                                     // 4
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton                                                                   // 5
 * Available under the BSD and MIT licenses: www.modernizr.com/license/                                                // 6
 */                                                                                                                    // 7
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/vendor/fastclick.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.                                    // 2
 *                                                                                                                     // 3
 * @version 1.0.3                                                                                                      // 4
 * @codingstandard ftlabs-jsv2                                                                                         // 5
 * @copyright The Financial Times Limited [All Rights Reserved]                                                        // 6
 * @license MIT License (see LICENSE.txt)                                                                              // 7
 */                                                                                                                    // 8
function FastClick(a,b){"use strict";function c(a,b){return function(){return a.apply(b,arguments)}}var d;if(b=b||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=b.touchBoundary||10,this.layer=a,this.tapDelay=b.tapDelay||200,!FastClick.notNeeded(a)){for(var e=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],f=this,g=0,h=e.length;h>g;g++)f[e[g]]=c(f[e[g]],f);deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(d=a.onclick,a.addEventListener("click",function(a){d(a)},!1),a.onclick=null)}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!deviceIsIOS4){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.sendClick(g,a),deviceIsIOS&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c,d;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(d=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),d[1]>=10&&d[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a,b){"use strict";return new FastClick(a,b)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
                                                                                                                       // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/vendor/jquery.cookie.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * jQuery Cookie Plugin v1.4.1                                                                                         // 2
 * https://github.com/carhartl/jquery-cookie                                                                           // 3
 *                                                                                                                     // 4
 * Copyright 2013 Klaus Hartl                                                                                          // 5
 * Released under the MIT license                                                                                      // 6
 */                                                                                                                    // 7
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/vendor/placeholder.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! http://mths.be/placeholder v2.0.8 by @mathias */                                                                   // 1
!function(a,b,c){function d(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function e(a,b){var d=this,e=c(d);if(d.value==e.attr("placeholder")&&e.hasClass("placeholder"))if(e.data("placeholder-password")){if(e=e.hide().next().show().attr("id",e.removeAttr("id").data("placeholder-id")),a===!0)return e[0].value=b;e.focus()}else d.value="",e.removeClass("placeholder"),d==g()&&d.select()}function f(){var a,b=this,f=c(b),g=this.id;if(""==b.value){if("password"==b.type){if(!f.data("placeholder-textinput")){try{a=f.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(d(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",e),f.data({"placeholder-textinput":a,"placeholder-id":g}).before(a)}f=f.removeAttr("id").hide().prev().attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}function g(){try{return b.activeElement}catch(a){}}var h,i,j="[object OperaMini]"==Object.prototype.toString.call(a.operamini),k="placeholder"in b.createElement("input")&&!j,l="placeholder"in b.createElement("textarea")&&!j,m=c.fn,n=c.valHooks,o=c.propHooks;k&&l?(i=m.placeholder=function(){return this},i.input=i.textarea=!0):(i=m.placeholder=function(){var a=this;return a.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":e,"blur.placeholder":f}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},i.input=k,i.textarea=l,h={get:function(a){var b=c(a),d=b.data("placeholder-password");return d?d[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var d=c(a),h=d.data("placeholder-password");return h?h[0].value=b:d.data("placeholder-enabled")?(""==b?(a.value=b,a!=g()&&f.call(a)):d.hasClass("placeholder")?e.call(a,!0,b)||(a.value=b):a.value=b,d):a.value=b}},k||(n.input=h,o.value=h),l||(n.textarea=h,o.value=h),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(e);setTimeout(function(){a.each(f)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);
                                                                                                                       // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/foundation.min.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Foundation Responsive Library                                                                                       // 2
 * http://foundation.zurb.com                                                                                          // 3
 * Copyright 2014, ZURB                                                                                                // 4
 * Free to use under the MIT license.                                                                                  // 5
 * http://www.opensource.org/licenses/mit-license.php                                                                  // 6
*/                                                                                                                     // 7
                                                                                                                       // 8
(function ($, window, document, undefined) {                                                                           // 9
  'use strict';                                                                                                        // 10
                                                                                                                       // 11
  var header_helpers = function (class_array) {                                                                        // 12
    var i = class_array.length;                                                                                        // 13
    var head = $('head');                                                                                              // 14
                                                                                                                       // 15
    while (i--) {                                                                                                      // 16
      if(head.has('.' + class_array[i]).length === 0) {                                                                // 17
        head.append('<meta class="' + class_array[i] + '" />');                                                        // 18
      }                                                                                                                // 19
    }                                                                                                                  // 20
  };                                                                                                                   // 21
                                                                                                                       // 22
  header_helpers([                                                                                                     // 23
    'foundation-mq-small',                                                                                             // 24
    'foundation-mq-small-only',                                                                                        // 25
    'foundation-mq-medium',                                                                                            // 26
    'foundation-mq-medium-only',                                                                                       // 27
    'foundation-mq-large',                                                                                             // 28
    'foundation-mq-large-only',                                                                                        // 29
    'foundation-mq-xlarge',                                                                                            // 30
    'foundation-mq-xlarge-only',                                                                                       // 31
    'foundation-mq-xxlarge',                                                                                           // 32
    'foundation-data-attribute-namespace']);                                                                           // 33
                                                                                                                       // 34
  // Enable FastClick if present                                                                                       // 35
                                                                                                                       // 36
  $(function() {                                                                                                       // 37
    if (typeof FastClick !== 'undefined') {                                                                            // 38
      // Don't attach to body if undefined                                                                             // 39
      if (typeof document.body !== 'undefined') {                                                                      // 40
        FastClick.attach(document.body);                                                                               // 41
      }                                                                                                                // 42
    }                                                                                                                  // 43
  });                                                                                                                  // 44
                                                                                                                       // 45
  // private Fast Selector wrapper,                                                                                    // 46
  // returns jQuery object. Only use where                                                                             // 47
  // getElementById is not available.                                                                                  // 48
  var S = function (selector, context) {                                                                               // 49
    if (typeof selector === 'string') {                                                                                // 50
      if (context) {                                                                                                   // 51
        var cont;                                                                                                      // 52
        if (context.jquery) {                                                                                          // 53
          cont = context[0];                                                                                           // 54
          if (!cont) return context;                                                                                   // 55
        } else {                                                                                                       // 56
          cont = context;                                                                                              // 57
        }                                                                                                              // 58
        return $(cont.querySelectorAll(selector));                                                                     // 59
      }                                                                                                                // 60
                                                                                                                       // 61
      return $(document.querySelectorAll(selector));                                                                   // 62
    }                                                                                                                  // 63
                                                                                                                       // 64
    return $(selector, context);                                                                                       // 65
  };                                                                                                                   // 66
                                                                                                                       // 67
  // Namespace functions.                                                                                              // 68
                                                                                                                       // 69
  var attr_name = function (init) {                                                                                    // 70
    var arr = [];                                                                                                      // 71
    if (!init) arr.push('data');                                                                                       // 72
    if (this.namespace.length > 0) arr.push(this.namespace);                                                           // 73
    arr.push(this.name);                                                                                               // 74
                                                                                                                       // 75
    return arr.join('-');                                                                                              // 76
  };                                                                                                                   // 77
                                                                                                                       // 78
  var add_namespace = function (str) {                                                                                 // 79
    var parts = str.split('-'),                                                                                        // 80
        i = parts.length,                                                                                              // 81
        arr = [];                                                                                                      // 82
                                                                                                                       // 83
    while (i--) {                                                                                                      // 84
      if (i !== 0) {                                                                                                   // 85
        arr.push(parts[i]);                                                                                            // 86
      } else {                                                                                                         // 87
        if (this.namespace.length > 0) {                                                                               // 88
          arr.push(this.namespace, parts[i]);                                                                          // 89
        } else {                                                                                                       // 90
          arr.push(parts[i]);                                                                                          // 91
        }                                                                                                              // 92
      }                                                                                                                // 93
    }                                                                                                                  // 94
                                                                                                                       // 95
    return arr.reverse().join('-');                                                                                    // 96
  };                                                                                                                   // 97
                                                                                                                       // 98
  // Event binding and data-options updating.                                                                          // 99
                                                                                                                       // 100
  var bindings = function (method, options) {                                                                          // 101
    var self = this,                                                                                                   // 102
        should_bind_events = !S(this).data(this.attr_name(true));                                                      // 103
                                                                                                                       // 104
    if (S(this.scope).is('[' + this.attr_name() +']')) {                                                               // 105
      S(this.scope).data(this.attr_name(true) + '-init', $.extend({}, this.settings, (options || method), this.data_options(S(this.scope))));
                                                                                                                       // 107
      if (should_bind_events) {                                                                                        // 108
        this.events(this.scope);                                                                                       // 109
      }                                                                                                                // 110
                                                                                                                       // 111
    } else {                                                                                                           // 112
      S('[' + this.attr_name() +']', this.scope).each(function () {                                                    // 113
        var should_bind_events = !S(this).data(self.attr_name(true) + '-init');                                        // 114
        S(this).data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options(S(this))));
                                                                                                                       // 116
        if (should_bind_events) {                                                                                      // 117
          self.events(this);                                                                                           // 118
        }                                                                                                              // 119
      });                                                                                                              // 120
    }                                                                                                                  // 121
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {                                                                                  // 123
      return this[method].call(this, options);                                                                         // 124
    }                                                                                                                  // 125
                                                                                                                       // 126
  };                                                                                                                   // 127
                                                                                                                       // 128
  var single_image_loaded = function (image, callback) {                                                               // 129
    function loaded () {                                                                                               // 130
      callback(image[0]);                                                                                              // 131
    }                                                                                                                  // 132
                                                                                                                       // 133
    function bindLoad () {                                                                                             // 134
      this.one('load', loaded);                                                                                        // 135
                                                                                                                       // 136
      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {                                                              // 137
        var src = this.attr( 'src' ),                                                                                  // 138
            param = src.match( /\?/ ) ? '&' : '?';                                                                     // 139
                                                                                                                       // 140
        param += 'random=' + (new Date()).getTime();                                                                   // 141
        this.attr('src', src + param);                                                                                 // 142
      }                                                                                                                // 143
    }                                                                                                                  // 144
                                                                                                                       // 145
    if (!image.attr('src')) {                                                                                          // 146
      loaded();                                                                                                        // 147
      return;                                                                                                          // 148
    }                                                                                                                  // 149
                                                                                                                       // 150
    if (image[0].complete || image[0].readyState === 4) {                                                              // 151
      loaded();                                                                                                        // 152
    } else {                                                                                                           // 153
      bindLoad.call(image);                                                                                            // 154
    }                                                                                                                  // 155
  };                                                                                                                   // 156
                                                                                                                       // 157
  /*                                                                                                                   // 158
    https://github.com/paulirish/matchMedia.js                                                                         // 159
  */                                                                                                                   // 160
                                                                                                                       // 161
  window.matchMedia = window.matchMedia || (function( doc ) {                                                          // 162
                                                                                                                       // 163
    'use strict';                                                                                                      // 164
                                                                                                                       // 165
    var bool,                                                                                                          // 166
        docElem = doc.documentElement,                                                                                 // 167
        refNode = docElem.firstElementChild || docElem.firstChild,                                                     // 168
        // fakeBody required for <FF4 when executed in <head>                                                          // 169
        fakeBody = doc.createElement( 'body' ),                                                                        // 170
        div = doc.createElement( 'div' );                                                                              // 171
                                                                                                                       // 172
    div.id = 'mq-test-1';                                                                                              // 173
    div.style.cssText = 'position:absolute;top:-100em';                                                                // 174
    fakeBody.style.background = 'none';                                                                                // 175
    fakeBody.appendChild(div);                                                                                         // 176
                                                                                                                       // 177
    return function (q) {                                                                                              // 178
                                                                                                                       // 179
      div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';                            // 180
                                                                                                                       // 181
      docElem.insertBefore( fakeBody, refNode );                                                                       // 182
      bool = div.offsetWidth === 42;                                                                                   // 183
      docElem.removeChild( fakeBody );                                                                                 // 184
                                                                                                                       // 185
      return {                                                                                                         // 186
        matches: bool,                                                                                                 // 187
        media: q                                                                                                       // 188
      };                                                                                                               // 189
                                                                                                                       // 190
    };                                                                                                                 // 191
                                                                                                                       // 192
  }( document ));                                                                                                      // 193
                                                                                                                       // 194
  /*                                                                                                                   // 195
   * jquery.requestAnimationFrame                                                                                      // 196
   * https://github.com/gnarf37/jquery-requestAnimationFrame                                                           // 197
   * Requires jQuery 1.8+                                                                                              // 198
   *                                                                                                                   // 199
   * Copyright (c) 2012 Corey Frang                                                                                    // 200
   * Licensed under the MIT license.                                                                                   // 201
   */                                                                                                                  // 202
                                                                                                                       // 203
  (function($) {                                                                                                       // 204
                                                                                                                       // 205
  // requestAnimationFrame polyfill adapted from Erik Möller                                                           // 206
  // fixes from Paul Irish and Tino Zijdel                                                                             // 207
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/                                              // 208
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating                          // 209
                                                                                                                       // 210
  var animating,                                                                                                       // 211
      lastTime = 0,                                                                                                    // 212
      vendors = ['webkit', 'moz'],                                                                                     // 213
      requestAnimationFrame = window.requestAnimationFrame,                                                            // 214
      cancelAnimationFrame = window.cancelAnimationFrame,                                                              // 215
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;                                                            // 216
                                                                                                                       // 217
  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {                                            // 218
    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];                                     // 219
    cancelAnimationFrame = cancelAnimationFrame ||                                                                     // 220
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||                                                          // 221
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];                                                     // 222
  }                                                                                                                    // 223
                                                                                                                       // 224
  function raf() {                                                                                                     // 225
    if (animating) {                                                                                                   // 226
      requestAnimationFrame(raf);                                                                                      // 227
                                                                                                                       // 228
      if (jqueryFxAvailable) {                                                                                         // 229
        jQuery.fx.tick();                                                                                              // 230
      }                                                                                                                // 231
    }                                                                                                                  // 232
  }                                                                                                                    // 233
                                                                                                                       // 234
  if (requestAnimationFrame) {                                                                                         // 235
    // use rAF                                                                                                         // 236
    window.requestAnimationFrame = requestAnimationFrame;                                                              // 237
    window.cancelAnimationFrame = cancelAnimationFrame;                                                                // 238
                                                                                                                       // 239
    if (jqueryFxAvailable) {                                                                                           // 240
      jQuery.fx.timer = function (timer) {                                                                             // 241
        if (timer() && jQuery.timers.push(timer) && !animating) {                                                      // 242
          animating = true;                                                                                            // 243
          raf();                                                                                                       // 244
        }                                                                                                              // 245
      };                                                                                                               // 246
                                                                                                                       // 247
      jQuery.fx.stop = function () {                                                                                   // 248
        animating = false;                                                                                             // 249
      };                                                                                                               // 250
    }                                                                                                                  // 251
  } else {                                                                                                             // 252
    // polyfill                                                                                                        // 253
    window.requestAnimationFrame = function (callback) {                                                               // 254
      var currTime = new Date().getTime(),                                                                             // 255
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),                                                          // 256
        id = window.setTimeout(function () {                                                                           // 257
          callback(currTime + timeToCall);                                                                             // 258
        }, timeToCall);                                                                                                // 259
      lastTime = currTime + timeToCall;                                                                                // 260
      return id;                                                                                                       // 261
    };                                                                                                                 // 262
                                                                                                                       // 263
    window.cancelAnimationFrame = function (id) {                                                                      // 264
      clearTimeout(id);                                                                                                // 265
    };                                                                                                                 // 266
                                                                                                                       // 267
  }                                                                                                                    // 268
                                                                                                                       // 269
  }( jQuery ));                                                                                                        // 270
                                                                                                                       // 271
                                                                                                                       // 272
  function removeQuotes (string) {                                                                                     // 273
    if (typeof string === 'string' || string instanceof String) {                                                      // 274
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');                                                    // 275
    }                                                                                                                  // 276
                                                                                                                       // 277
    return string;                                                                                                     // 278
  }                                                                                                                    // 279
                                                                                                                       // 280
  window.Foundation = {                                                                                                // 281
    name : 'Foundation',                                                                                               // 282
                                                                                                                       // 283
    version : '5.5.0',                                                                                                 // 284
                                                                                                                       // 285
    media_queries : {                                                                                                  // 286
      'small'       : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),     // 287
      'small-only'  : S('.foundation-mq-small-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium'      : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),    // 289
      'medium-only' : S('.foundation-mq-medium-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large'       : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),     // 291
      'large-only'  : S('.foundation-mq-large-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge'      : S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),    // 293
      'xlarge-only' : S('.foundation-mq-xlarge-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xxlarge'     : S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')    // 295
    },                                                                                                                 // 296
                                                                                                                       // 297
    stylesheet : $('<style></style>').appendTo('head')[0].sheet,                                                       // 298
                                                                                                                       // 299
    global: {                                                                                                          // 300
      namespace: undefined                                                                                             // 301
    },                                                                                                                 // 302
                                                                                                                       // 303
    init : function (scope, libraries, method, options, response) {                                                    // 304
      var args = [scope, method, options, response],                                                                   // 305
          responses = [];                                                                                              // 306
                                                                                                                       // 307
      // check RTL                                                                                                     // 308
      this.rtl = /rtl/i.test(S('html').attr('dir'));                                                                   // 309
                                                                                                                       // 310
      // set foundation global scope                                                                                   // 311
      this.scope = scope || this.scope;                                                                                // 312
                                                                                                                       // 313
      this.set_namespace();                                                                                            // 314
                                                                                                                       // 315
      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {                                  // 316
        if (this.libs.hasOwnProperty(libraries)) {                                                                     // 317
          responses.push(this.init_lib(libraries, args));                                                              // 318
        }                                                                                                              // 319
      } else {                                                                                                         // 320
        for (var lib in this.libs) {                                                                                   // 321
          responses.push(this.init_lib(lib, libraries));                                                               // 322
        }                                                                                                              // 323
      }                                                                                                                // 324
                                                                                                                       // 325
      S(window).load(function(){                                                                                       // 326
        S(window)                                                                                                      // 327
          .trigger('resize.fndtn.clearing')                                                                            // 328
          .trigger('resize.fndtn.dropdown')                                                                            // 329
          .trigger('resize.fndtn.equalizer')                                                                           // 330
          .trigger('resize.fndtn.interchange')                                                                         // 331
          .trigger('resize.fndtn.joyride')                                                                             // 332
          .trigger('resize.fndtn.magellan')                                                                            // 333
          .trigger('resize.fndtn.topbar')                                                                              // 334
          .trigger('resize.fndtn.slider');                                                                             // 335
      });                                                                                                              // 336
                                                                                                                       // 337
      return scope;                                                                                                    // 338
    },                                                                                                                 // 339
                                                                                                                       // 340
    init_lib : function (lib, args) {                                                                                  // 341
      if (this.libs.hasOwnProperty(lib)) {                                                                             // 342
        this.patch(this.libs[lib]);                                                                                    // 343
                                                                                                                       // 344
        if (args && args.hasOwnProperty(lib)) {                                                                        // 345
            if (typeof this.libs[lib].settings !== 'undefined') {                                                      // 346
              $.extend(true, this.libs[lib].settings, args[lib]);                                                      // 347
            }                                                                                                          // 348
            else if (typeof this.libs[lib].defaults !== 'undefined') {                                                 // 349
              $.extend(true, this.libs[lib].defaults, args[lib]);                                                      // 350
            }                                                                                                          // 351
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);                                   // 352
        }                                                                                                              // 353
                                                                                                                       // 354
        args = args instanceof Array ? args : new Array(args);                                                         // 355
        return this.libs[lib].init.apply(this.libs[lib], args);                                                        // 356
      }                                                                                                                // 357
                                                                                                                       // 358
      return function () {};                                                                                           // 359
    },                                                                                                                 // 360
                                                                                                                       // 361
    patch : function (lib) {                                                                                           // 362
      lib.scope = this.scope;                                                                                          // 363
      lib.namespace = this.global.namespace;                                                                           // 364
      lib.rtl = this.rtl;                                                                                              // 365
      lib['data_options'] = this.utils.data_options;                                                                   // 366
      lib['attr_name'] = attr_name;                                                                                    // 367
      lib['add_namespace'] = add_namespace;                                                                            // 368
      lib['bindings'] = bindings;                                                                                      // 369
      lib['S'] = this.utils.S;                                                                                         // 370
    },                                                                                                                 // 371
                                                                                                                       // 372
    inherit : function (scope, methods) {                                                                              // 373
      var methods_arr = methods.split(' '),                                                                            // 374
          i = methods_arr.length;                                                                                      // 375
                                                                                                                       // 376
      while (i--) {                                                                                                    // 377
        if (this.utils.hasOwnProperty(methods_arr[i])) {                                                               // 378
          scope[methods_arr[i]] = this.utils[methods_arr[i]];                                                          // 379
        }                                                                                                              // 380
      }                                                                                                                // 381
    },                                                                                                                 // 382
                                                                                                                       // 383
    set_namespace: function () {                                                                                       // 384
                                                                                                                       // 385
      // Description:                                                                                                  // 386
      //    Don't bother reading the namespace out of the meta tag                                                     // 387
      //    if the namespace has been set globally in javascript                                                       // 388
      //                                                                                                               // 389
      // Example:                                                                                                      // 390
      //    Foundation.global.namespace = 'my-namespace';                                                              // 391
      // or make it an empty string:                                                                                   // 392
      //    Foundation.global.namespace = '';                                                                          // 393
      //                                                                                                               // 394
      //                                                                                                               // 395
                                                                                                                       // 396
      // If the namespace has not been set (is undefined), try to read it out of the meta element.                     // 397
      // Otherwise use the globally defined namespace, even if it's empty ('')                                         // 398
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;
                                                                                                                       // 400
      // Finally, if the namsepace is either undefined or false, set it to an empty string.                            // 401
      // Otherwise use the namespace value.                                                                            // 402
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;                // 403
    },                                                                                                                 // 404
                                                                                                                       // 405
    libs : {},                                                                                                         // 406
                                                                                                                       // 407
    // methods that can be inherited in libraries                                                                      // 408
    utils : {                                                                                                          // 409
                                                                                                                       // 410
      // Description:                                                                                                  // 411
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById                                 // 412
      //    is not available.                                                                                          // 413
      //                                                                                                               // 414
      // Arguments:                                                                                                    // 415
      //    Selector (String): CSS selector describing the element(s) to be                                            // 416
      //    returned as a jQuery object.                                                                               // 417
      //                                                                                                               // 418
      //    Scope (String): CSS selector describing the area to be searched. Default                                   // 419
      //    is document.                                                                                               // 420
      //                                                                                                               // 421
      // Returns:                                                                                                      // 422
      //    Element (jQuery Object): jQuery object containing elements matching the                                    // 423
      //    selector within the scope.                                                                                 // 424
      S : S,                                                                                                           // 425
                                                                                                                       // 426
      // Description:                                                                                                  // 427
      //    Executes a function a max of once every n milliseconds                                                     // 428
      //                                                                                                               // 429
      // Arguments:                                                                                                    // 430
      //    Func (Function): Function to be throttled.                                                                 // 431
      //                                                                                                               // 432
      //    Delay (Integer): Function execution threshold in milliseconds.                                             // 433
      //                                                                                                               // 434
      // Returns:                                                                                                      // 435
      //    Lazy_function (Function): Function with throttling applied.                                                // 436
      throttle : function (func, delay) {                                                                              // 437
        var timer = null;                                                                                              // 438
                                                                                                                       // 439
        return function () {                                                                                           // 440
          var context = this, args = arguments;                                                                        // 441
                                                                                                                       // 442
          if (timer == null) {                                                                                         // 443
            timer = setTimeout(function () {                                                                           // 444
              func.apply(context, args);                                                                               // 445
              timer = null;                                                                                            // 446
            }, delay);                                                                                                 // 447
          }                                                                                                            // 448
        };                                                                                                             // 449
      },                                                                                                               // 450
                                                                                                                       // 451
      // Description:                                                                                                  // 452
      //    Executes a function when it stops being invoked for n seconds                                              // 453
      //    Modified version of _.debounce() http://underscorejs.org                                                   // 454
      //                                                                                                               // 455
      // Arguments:                                                                                                    // 456
      //    Func (Function): Function to be debounced.                                                                 // 457
      //                                                                                                               // 458
      //    Delay (Integer): Function execution threshold in milliseconds.                                             // 459
      //                                                                                                               // 460
      //    Immediate (Bool): Whether the function should be called at the beginning                                   // 461
      //    of the delay instead of the end. Default is false.                                                         // 462
      //                                                                                                               // 463
      // Returns:                                                                                                      // 464
      //    Lazy_function (Function): Function with debouncing applied.                                                // 465
      debounce : function (func, delay, immediate) {                                                                   // 466
        var timeout, result;                                                                                           // 467
        return function () {                                                                                           // 468
          var context = this, args = arguments;                                                                        // 469
          var later = function () {                                                                                    // 470
            timeout = null;                                                                                            // 471
            if (!immediate) result = func.apply(context, args);                                                        // 472
          };                                                                                                           // 473
          var callNow = immediate && !timeout;                                                                         // 474
          clearTimeout(timeout);                                                                                       // 475
          timeout = setTimeout(later, delay);                                                                          // 476
          if (callNow) result = func.apply(context, args);                                                             // 477
          return result;                                                                                               // 478
        };                                                                                                             // 479
      },                                                                                                               // 480
                                                                                                                       // 481
      // Description:                                                                                                  // 482
      //    Parses data-options attribute                                                                              // 483
      //                                                                                                               // 484
      // Arguments:                                                                                                    // 485
      //    El (jQuery Object): Element to be parsed.                                                                  // 486
      //                                                                                                               // 487
      // Returns:                                                                                                      // 488
      //    Options (Javascript Object): Contents of the element's data-options                                        // 489
      //    attribute.                                                                                                 // 490
      data_options : function (el, data_attr_name) {                                                                   // 491
        data_attr_name = data_attr_name || 'options';                                                                  // 492
        var opts = {}, ii, p, opts_arr,                                                                                // 493
            data_options = function (el) {                                                                             // 494
              var namespace = Foundation.global.namespace;                                                             // 495
                                                                                                                       // 496
              if (namespace.length > 0) {                                                                              // 497
                return el.data(namespace + '-' + data_attr_name);                                                      // 498
              }                                                                                                        // 499
                                                                                                                       // 500
              return el.data(data_attr_name);                                                                          // 501
            };                                                                                                         // 502
                                                                                                                       // 503
        var cached_options = data_options(el);                                                                         // 504
                                                                                                                       // 505
        if (typeof cached_options === 'object') {                                                                      // 506
          return cached_options;                                                                                       // 507
        }                                                                                                              // 508
                                                                                                                       // 509
        opts_arr = (cached_options || ':').split(';');                                                                 // 510
        ii = opts_arr.length;                                                                                          // 511
                                                                                                                       // 512
        function isNumber (o) {                                                                                        // 513
          return ! isNaN (o-0) && o !== null && o !== '' && o !== false && o !== true;                                 // 514
        }                                                                                                              // 515
                                                                                                                       // 516
        function trim (str) {                                                                                          // 517
          if (typeof str === 'string') return $.trim(str);                                                             // 518
          return str;                                                                                                  // 519
        }                                                                                                              // 520
                                                                                                                       // 521
        while (ii--) {                                                                                                 // 522
          p = opts_arr[ii].split(':');                                                                                 // 523
          p = [p[0], p.slice(1).join(':')];                                                                            // 524
                                                                                                                       // 525
          if (/true/i.test(p[1])) p[1] = true;                                                                         // 526
          if (/false/i.test(p[1])) p[1] = false;                                                                       // 527
          if (isNumber(p[1])) {                                                                                        // 528
            if (p[1].indexOf('.') === -1) {                                                                            // 529
              p[1] = parseInt(p[1], 10);                                                                               // 530
            } else {                                                                                                   // 531
              p[1] = parseFloat(p[1]);                                                                                 // 532
            }                                                                                                          // 533
          }                                                                                                            // 534
                                                                                                                       // 535
          if (p.length === 2 && p[0].length > 0) {                                                                     // 536
            opts[trim(p[0])] = trim(p[1]);                                                                             // 537
          }                                                                                                            // 538
        }                                                                                                              // 539
                                                                                                                       // 540
        return opts;                                                                                                   // 541
      },                                                                                                               // 542
                                                                                                                       // 543
      // Description:                                                                                                  // 544
      //    Adds JS-recognizable media queries                                                                         // 545
      //                                                                                                               // 546
      // Arguments:                                                                                                    // 547
      //    Media (String): Key string for the media query to be stored as in                                          // 548
      //    Foundation.media_queries                                                                                   // 549
      //                                                                                                               // 550
      //    Class (String): Class name for the generated <meta> tag                                                    // 551
      register_media : function (media, media_class) {                                                                 // 552
        if(Foundation.media_queries[media] === undefined) {                                                            // 553
          $('head').append('<meta class="' + media_class + '"/>');                                                     // 554
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));                     // 555
        }                                                                                                              // 556
      },                                                                                                               // 557
                                                                                                                       // 558
      // Description:                                                                                                  // 559
      //    Add custom CSS within a JS-defined media query                                                             // 560
      //                                                                                                               // 561
      // Arguments:                                                                                                    // 562
      //    Rule (String): CSS rule to be appended to the document.                                                    // 563
      //                                                                                                               // 564
      //    Media (String): Optional media query string for the CSS rule to be                                         // 565
      //    nested under.                                                                                              // 566
      add_custom_rule : function (rule, media) {                                                                       // 567
        if (media === undefined && Foundation.stylesheet) {                                                            // 568
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);                               // 569
        } else {                                                                                                       // 570
          var query = Foundation.media_queries[media];                                                                 // 571
                                                                                                                       // 572
          if (query !== undefined) {                                                                                   // 573
            Foundation.stylesheet.insertRule('@media ' +                                                               // 574
              Foundation.media_queries[media] + '{ ' + rule + ' }');                                                   // 575
          }                                                                                                            // 576
        }                                                                                                              // 577
      },                                                                                                               // 578
                                                                                                                       // 579
      // Description:                                                                                                  // 580
      //    Performs a callback function when an image is fully loaded                                                 // 581
      //                                                                                                               // 582
      // Arguments:                                                                                                    // 583
      //    Image (jQuery Object): Image(s) to check if loaded.                                                        // 584
      //                                                                                                               // 585
      //    Callback (Function): Function to execute when image is fully loaded.                                       // 586
      image_loaded : function (images, callback) {                                                                     // 587
        var self = this,                                                                                               // 588
            unloaded = images.length;                                                                                  // 589
                                                                                                                       // 590
        if (unloaded === 0) {                                                                                          // 591
          callback(images);                                                                                            // 592
        }                                                                                                              // 593
                                                                                                                       // 594
        images.each(function () {                                                                                      // 595
          single_image_loaded(self.S(this), function () {                                                              // 596
            unloaded -= 1;                                                                                             // 597
            if (unloaded === 0) {                                                                                      // 598
              callback(images);                                                                                        // 599
            }                                                                                                          // 600
          });                                                                                                          // 601
        });                                                                                                            // 602
      },                                                                                                               // 603
                                                                                                                       // 604
      // Description:                                                                                                  // 605
      //    Returns a random, alphanumeric string                                                                      // 606
      //                                                                                                               // 607
      // Arguments:                                                                                                    // 608
      //    Length (Integer): Length of string to be generated. Defaults to random                                     // 609
      //    integer.                                                                                                   // 610
      //                                                                                                               // 611
      // Returns:                                                                                                      // 612
      //    Rand (String): Pseudo-random, alphanumeric string.                                                         // 613
      random_str : function () {                                                                                       // 614
        if (!this.fidx) this.fidx = 0;                                                                                 // 615
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');                         // 616
                                                                                                                       // 617
        return this.prefix + (this.fidx++).toString(36);                                                               // 618
      },                                                                                                               // 619
                                                                                                                       // 620
      // Description:                                                                                                  // 621
      //    Helper for window.matchMedia                                                                               // 622
      //                                                                                                               // 623
      // Arguments:                                                                                                    // 624
      //    mq (String): Media query                                                                                   // 625
      //                                                                                                               // 626
      // Returns:                                                                                                      // 627
      //    (Boolean): Whether the media query passes or not                                                           // 628
      match : function (mq) {                                                                                          // 629
        return window.matchMedia(mq).matches;                                                                          // 630
      },                                                                                                               // 631
                                                                                                                       // 632
      // Description:                                                                                                  // 633
      //    Helpers for checking Foundation default media queries with JS                                              // 634
      //                                                                                                               // 635
      // Returns:                                                                                                      // 636
      //    (Boolean): Whether the media query passes or not                                                           // 637
                                                                                                                       // 638
      is_small_up : function () {                                                                                      // 639
        return this.match(Foundation.media_queries.small);                                                             // 640
      },                                                                                                               // 641
                                                                                                                       // 642
      is_medium_up : function () {                                                                                     // 643
        return this.match(Foundation.media_queries.medium);                                                            // 644
      },                                                                                                               // 645
                                                                                                                       // 646
      is_large_up : function () {                                                                                      // 647
        return this.match(Foundation.media_queries.large);                                                             // 648
      },                                                                                                               // 649
                                                                                                                       // 650
      is_xlarge_up : function () {                                                                                     // 651
        return this.match(Foundation.media_queries.xlarge);                                                            // 652
      },                                                                                                               // 653
                                                                                                                       // 654
      is_xxlarge_up : function () {                                                                                    // 655
        return this.match(Foundation.media_queries.xxlarge);                                                           // 656
      },                                                                                                               // 657
                                                                                                                       // 658
      is_small_only : function () {                                                                                    // 659
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();           // 660
      },                                                                                                               // 661
                                                                                                                       // 662
      is_medium_only : function () {                                                                                   // 663
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();            // 664
      },                                                                                                               // 665
                                                                                                                       // 666
      is_large_only : function () {                                                                                    // 667
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();             // 668
      },                                                                                                               // 669
                                                                                                                       // 670
      is_xlarge_only : function () {                                                                                   // 671
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();              // 672
      },                                                                                                               // 673
                                                                                                                       // 674
      is_xxlarge_only : function () {                                                                                  // 675
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();               // 676
      }                                                                                                                // 677
    }                                                                                                                  // 678
  };                                                                                                                   // 679
                                                                                                                       // 680
  $.fn.foundation = function () {                                                                                      // 681
    var args = Array.prototype.slice.call(arguments, 0);                                                               // 682
                                                                                                                       // 683
    return this.each(function () {                                                                                     // 684
      Foundation.init.apply(Foundation, [this].concat(args));                                                          // 685
      return this;                                                                                                     // 686
    });                                                                                                                // 687
  };                                                                                                                   // 688
                                                                                                                       // 689
}(jQuery, window, window.document));                                                                                   // 690
;(function ($, window, document, undefined) {                                                                          // 691
  'use strict';                                                                                                        // 692
                                                                                                                       // 693
  Foundation.libs.slider = {                                                                                           // 694
    name : 'slider',                                                                                                   // 695
                                                                                                                       // 696
    version : '5.5.0',                                                                                                 // 697
                                                                                                                       // 698
    settings: {                                                                                                        // 699
      start: 0,                                                                                                        // 700
      end: 100,                                                                                                        // 701
      step: 1,                                                                                                         // 702
      precision: null,                                                                                                 // 703
      initial: null,                                                                                                   // 704
      display_selector: '',                                                                                            // 705
      vertical: false,                                                                                                 // 706
      trigger_input_change: false,                                                                                     // 707
      on_change: function(){}                                                                                          // 708
    },                                                                                                                 // 709
                                                                                                                       // 710
    cache : {},                                                                                                        // 711
                                                                                                                       // 712
    init : function (scope, method, options) {                                                                         // 713
      Foundation.inherit(this,'throttle');                                                                             // 714
      this.bindings(method, options);                                                                                  // 715
      this.reflow();                                                                                                   // 716
    },                                                                                                                 // 717
                                                                                                                       // 718
    events : function() {                                                                                              // 719
      var self = this;                                                                                                 // 720
                                                                                                                       // 721
      $(this.scope)                                                                                                    // 722
        .off('.slider')                                                                                                // 723
        .on('mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider',                                 // 724
        '[' + self.attr_name() + ']:not(.disabled, [disabled]) .range-slider-handle', function(e) {                    // 725
          if (!self.cache.active) {                                                                                    // 726
            e.preventDefault();                                                                                        // 727
            self.set_active_slider($(e.target));                                                                       // 728
          }                                                                                                            // 729
        })                                                                                                             // 730
        .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function(e) {                    // 731
          if (!!self.cache.active) {                                                                                   // 732
            e.preventDefault();                                                                                        // 733
            if ($.data(self.cache.active[0], 'settings').vertical) {                                                   // 734
              var scroll_offset = 0;                                                                                   // 735
              if (!e.pageY) {                                                                                          // 736
                scroll_offset = window.scrollY;                                                                        // 737
              }                                                                                                        // 738
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'y') + scroll_offset);            // 739
            } else {                                                                                                   // 740
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'x'));                            // 741
            }                                                                                                          // 742
          }                                                                                                            // 743
        })                                                                                                             // 744
        .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function(e) {                         // 745
          self.remove_active_slider();                                                                                 // 746
        })                                                                                                             // 747
        .on('change.fndtn.slider', function(e) {                                                                       // 748
          self.settings.on_change();                                                                                   // 749
        });                                                                                                            // 750
                                                                                                                       // 751
      self.S(window)                                                                                                   // 752
        .on('resize.fndtn.slider', self.throttle(function(e) {                                                         // 753
          self.reflow();                                                                                               // 754
        }, 300));                                                                                                      // 755
    },                                                                                                                 // 756
                                                                                                                       // 757
    get_cursor_position : function(e, xy) {                                                                            // 758
      var pageXY = 'page' + xy.toUpperCase(),                                                                          // 759
          clientXY = 'client' + xy.toUpperCase(),                                                                      // 760
          position;                                                                                                    // 761
                                                                                                                       // 762
      if (typeof e[pageXY] !== 'undefined') {                                                                          // 763
        position = e[pageXY];                                                                                          // 764
      }                                                                                                                // 765
      else if (typeof e.originalEvent[clientXY] !== 'undefined') {                                                     // 766
        position = e.originalEvent[clientXY];                                                                          // 767
      }                                                                                                                // 768
      else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][clientXY] !== 'undefined') {
        position = e.originalEvent.touches[0][clientXY];                                                               // 770
      }                                                                                                                // 771
      else if(e.currentPoint && typeof e.currentPoint[xy] !== 'undefined') {                                           // 772
        position = e.currentPoint[xy];                                                                                 // 773
      }                                                                                                                // 774
      return position;                                                                                                 // 775
    },                                                                                                                 // 776
                                                                                                                       // 777
    set_active_slider : function($handle) {                                                                            // 778
      this.cache.active = $handle;                                                                                     // 779
    },                                                                                                                 // 780
                                                                                                                       // 781
    remove_active_slider : function() {                                                                                // 782
      this.cache.active = null;                                                                                        // 783
    },                                                                                                                 // 784
                                                                                                                       // 785
    calculate_position : function($handle, cursor_x) {                                                                 // 786
      var self = this,                                                                                                 // 787
          settings = $.data($handle[0], 'settings'),                                                                   // 788
          handle_l = $.data($handle[0], 'handle_l'),                                                                   // 789
          handle_o = $.data($handle[0], 'handle_o'),                                                                   // 790
          bar_l = $.data($handle[0], 'bar_l'),                                                                         // 791
          bar_o = $.data($handle[0], 'bar_o');                                                                         // 792
                                                                                                                       // 793
      requestAnimationFrame(function(){                                                                                // 794
        var pct;                                                                                                       // 795
                                                                                                                       // 796
        if (Foundation.rtl && !settings.vertical) {                                                                    // 797
          pct = self.limit_to(((bar_o+bar_l-cursor_x)/bar_l),0,1);                                                     // 798
        } else {                                                                                                       // 799
          pct = self.limit_to(((cursor_x-bar_o)/bar_l),0,1);                                                           // 800
        }                                                                                                              // 801
                                                                                                                       // 802
        pct = settings.vertical ? 1-pct : pct;                                                                         // 803
                                                                                                                       // 804
        var norm = self.normalized_value(pct, settings.start, settings.end, settings.step, settings.precision);        // 805
                                                                                                                       // 806
        self.set_ui($handle, norm);                                                                                    // 807
      });                                                                                                              // 808
    },                                                                                                                 // 809
                                                                                                                       // 810
    set_ui : function($handle, value) {                                                                                // 811
      var settings = $.data($handle[0], 'settings'),                                                                   // 812
          handle_l = $.data($handle[0], 'handle_l'),                                                                   // 813
          bar_l = $.data($handle[0], 'bar_l'),                                                                         // 814
          norm_pct = this.normalized_percentage(value, settings.start, settings.end),                                  // 815
          handle_offset = norm_pct*(bar_l-handle_l)-1,                                                                 // 816
          progress_bar_length = norm_pct*100,                                                                          // 817
          $handle_parent = $handle.parent(),                                                                           // 818
          $hidden_inputs = $handle.parent().children('input[type=hidden]');                                            // 819
                                                                                                                       // 820
      if (Foundation.rtl && !settings.vertical) {                                                                      // 821
        handle_offset = -handle_offset;                                                                                // 822
      }                                                                                                                // 823
                                                                                                                       // 824
      handle_offset = settings.vertical ? -handle_offset + bar_l - handle_l + 1 : handle_offset;                       // 825
      this.set_translate($handle, handle_offset, settings.vertical);                                                   // 826
                                                                                                                       // 827
      if (settings.vertical) {                                                                                         // 828
        $handle.siblings('.range-slider-active-segment').css('height', progress_bar_length + '%');                     // 829
      } else {                                                                                                         // 830
        $handle.siblings('.range-slider-active-segment').css('width', progress_bar_length + '%');                      // 831
      }                                                                                                                // 832
                                                                                                                       // 833
      $handle_parent.attr(this.attr_name(), value).trigger('change').trigger('change.fndtn.slider');                   // 834
                                                                                                                       // 835
      $hidden_inputs.val(value);                                                                                       // 836
      if (settings.trigger_input_change) {                                                                             // 837
          $hidden_inputs.trigger('change');                                                                            // 838
      }                                                                                                                // 839
                                                                                                                       // 840
      if (!$handle[0].hasAttribute('aria-valuemin')) {                                                                 // 841
        $handle.attr({                                                                                                 // 842
          'aria-valuemin': settings.start,                                                                             // 843
          'aria-valuemax': settings.end                                                                                // 844
        });                                                                                                            // 845
      }                                                                                                                // 846
      $handle.attr('aria-valuenow', value);                                                                            // 847
                                                                                                                       // 848
      if (settings.display_selector != '') {                                                                           // 849
        $(settings.display_selector).each(function(){                                                                  // 850
          if (this.hasOwnProperty('value')) {                                                                          // 851
            $(this).val(value);                                                                                        // 852
          } else {                                                                                                     // 853
            $(this).text(value);                                                                                       // 854
          }                                                                                                            // 855
        });                                                                                                            // 856
      }                                                                                                                // 857
                                                                                                                       // 858
    },                                                                                                                 // 859
                                                                                                                       // 860
    normalized_percentage : function(val, start, end) {                                                                // 861
      return Math.min(1, (val - start)/(end - start));                                                                 // 862
    },                                                                                                                 // 863
                                                                                                                       // 864
    normalized_value : function(val, start, end, step, precision) {                                                    // 865
      var range = end - start,                                                                                         // 866
          point = val*range,                                                                                           // 867
          mod = (point-(point%step)) / step,                                                                           // 868
          rem = point % step,                                                                                          // 869
          round = ( rem >= step*0.5 ? step : 0);                                                                       // 870
      return ((mod*step + round) + start).toFixed(precision);                                                          // 871
    },                                                                                                                 // 872
                                                                                                                       // 873
    set_translate : function(ele, offset, vertical) {                                                                  // 874
      if (vertical) {                                                                                                  // 875
        $(ele)                                                                                                         // 876
          .css('-webkit-transform', 'translateY('+offset+'px)')                                                        // 877
          .css('-moz-transform', 'translateY('+offset+'px)')                                                           // 878
          .css('-ms-transform', 'translateY('+offset+'px)')                                                            // 879
          .css('-o-transform', 'translateY('+offset+'px)')                                                             // 880
          .css('transform', 'translateY('+offset+'px)');                                                               // 881
      } else {                                                                                                         // 882
        $(ele)                                                                                                         // 883
          .css('-webkit-transform', 'translateX('+offset+'px)')                                                        // 884
          .css('-moz-transform', 'translateX('+offset+'px)')                                                           // 885
          .css('-ms-transform', 'translateX('+offset+'px)')                                                            // 886
          .css('-o-transform', 'translateX('+offset+'px)')                                                             // 887
          .css('transform', 'translateX('+offset+'px)');                                                               // 888
      }                                                                                                                // 889
    },                                                                                                                 // 890
                                                                                                                       // 891
    limit_to : function(val, min, max) {                                                                               // 892
      return Math.min(Math.max(val, min), max);                                                                        // 893
    },                                                                                                                 // 894
                                                                                                                       // 895
                                                                                                                       // 896
                                                                                                                       // 897
    initialize_settings : function(handle) {                                                                           // 898
      var settings = $.extend({}, this.settings, this.data_options($(handle).parent())),                               // 899
          decimal_places_match_result;                                                                                 // 900
                                                                                                                       // 901
      if (settings.precision === null) {                                                                               // 902
        decimal_places_match_result = ('' + settings.step).match(/\.([\d]*)/);                                         // 903
        settings.precision = decimal_places_match_result && decimal_places_match_result[1] ? decimal_places_match_result[1].length : 0;
      }                                                                                                                // 905
                                                                                                                       // 906
      if (settings.vertical) {                                                                                         // 907
        $.data(handle, 'bar_o', $(handle).parent().offset().top);                                                      // 908
        $.data(handle, 'bar_l', $(handle).parent().outerHeight());                                                     // 909
        $.data(handle, 'handle_o', $(handle).offset().top);                                                            // 910
        $.data(handle, 'handle_l', $(handle).outerHeight());                                                           // 911
      } else {                                                                                                         // 912
        $.data(handle, 'bar_o', $(handle).parent().offset().left);                                                     // 913
        $.data(handle, 'bar_l', $(handle).parent().outerWidth());                                                      // 914
        $.data(handle, 'handle_o', $(handle).offset().left);                                                           // 915
        $.data(handle, 'handle_l', $(handle).outerWidth());                                                            // 916
      }                                                                                                                // 917
                                                                                                                       // 918
      $.data(handle, 'bar', $(handle).parent());                                                                       // 919
      $.data(handle, 'settings', settings);                                                                            // 920
    },                                                                                                                 // 921
                                                                                                                       // 922
    set_initial_position : function($ele) {                                                                            // 923
      var settings = $.data($ele.children('.range-slider-handle')[0], 'settings'),                                     // 924
          initial = ((typeof settings.initial == 'number' && !isNaN(settings.initial)) ? settings.initial : Math.floor((settings.end-settings.start)*0.5/settings.step)*settings.step+settings.start),
          $handle = $ele.children('.range-slider-handle');                                                             // 926
      this.set_ui($handle, initial);                                                                                   // 927
    },                                                                                                                 // 928
                                                                                                                       // 929
    set_value : function(value) {                                                                                      // 930
      var self = this;                                                                                                 // 931
      $('[' + self.attr_name() + ']', this.scope).each(function(){                                                     // 932
        $(this).attr(self.attr_name(), value);                                                                         // 933
      });                                                                                                              // 934
      if (!!$(this.scope).attr(self.attr_name())) {                                                                    // 935
        $(this.scope).attr(self.attr_name(), value);                                                                   // 936
      }                                                                                                                // 937
      self.reflow();                                                                                                   // 938
    },                                                                                                                 // 939
                                                                                                                       // 940
    reflow : function() {                                                                                              // 941
      var self = this;                                                                                                 // 942
      self.S('[' + this.attr_name() + ']').each(function() {                                                           // 943
        var handle = $(this).children('.range-slider-handle')[0],                                                      // 944
            val = $(this).attr(self.attr_name());                                                                      // 945
        self.initialize_settings(handle);                                                                              // 946
                                                                                                                       // 947
        if (val) {                                                                                                     // 948
          self.set_ui($(handle), parseFloat(val));                                                                     // 949
        } else {                                                                                                       // 950
          self.set_initial_position($(this));                                                                          // 951
        }                                                                                                              // 952
      });                                                                                                              // 953
    }                                                                                                                  // 954
  };                                                                                                                   // 955
                                                                                                                       // 956
}(jQuery, window, window.document));                                                                                   // 957
;(function ($, window, document, undefined) {                                                                          // 958
  'use strict';                                                                                                        // 959
                                                                                                                       // 960
  var Modernizr = Modernizr || false;                                                                                  // 961
                                                                                                                       // 962
  Foundation.libs.joyride = {                                                                                          // 963
    name : 'joyride',                                                                                                  // 964
                                                                                                                       // 965
    version : '5.5.0',                                                                                                 // 966
                                                                                                                       // 967
    defaults : {                                                                                                       // 968
      expose                   : false,     // turn on or off the expose feature                                       // 969
      modal                    : true,      // Whether to cover page with modal during the tour                        // 970
      keyboard                 : true,      // enable left, right and esc keystrokes                                   // 971
      tip_location             : 'bottom',  // 'top' or 'bottom' in relation to parent                                 // 972
      nub_position             : 'auto',    // override on a per tooltip bases                                         // 973
      scroll_speed             : 1500,      // Page scrolling speed in milliseconds, 0 = no scroll animation           // 974
      scroll_animation         : 'linear',  // supports 'swing' and 'linear', extend with jQuery UI.                   // 975
      timer                    : 0,         // 0 = no timer , all other numbers = timer in milliseconds                // 976
      start_timer_on_click     : true,      // true or false - true requires clicking the first button start the timer // 977
      start_offset             : 0,         // the index of the tooltip you want to start on (index of the li)         // 978
      next_button              : true,      // true or false to control whether a next button is used                  // 979
      prev_button              : true,      // true or false to control whether a prev button is used                  // 980
      tip_animation            : 'fade',    // 'pop' or 'fade' in each tip                                             // 981
      pause_after              : [],        // array of indexes where to pause the tour after                          // 982
      exposed                  : [],        // array of expose elements                                                // 983
      tip_animation_fade_speed : 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      cookie_monster           : false,     // true or false to control whether cookies are used                       // 985
      cookie_name              : 'joyride', // Name the cookie you'll use                                              // 986
      cookie_domain            : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'         // 987
      cookie_expires           : 365,       // set when you would like the cookie to expire.                           // 988
      tip_container            : 'body',    // Where will the tip be attached                                          // 989
      abort_on_close           : true,      // When true, the close event will not fire any callback                   // 990
      tip_location_patterns    : {                                                                                     // 991
        top: ['bottom'],                                                                                               // 992
        bottom: [], // bottom should not need to be repositioned                                                       // 993
        left: ['right', 'top', 'bottom'],                                                                              // 994
        right: ['left', 'top', 'bottom']                                                                               // 995
      },                                                                                                               // 996
      post_ride_callback     : function (){},    // A method to call once the tour closes (canceled or complete)       // 997
      post_step_callback     : function (){},    // A method to call after each step                                   // 998
      pre_step_callback      : function (){},    // A method to call before each step                                  // 999
      pre_ride_callback      : function (){},    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      post_expose_callback   : function (){},    // A method to call after an element has been exposed                 // 1001
      template : { // HTML segments for tip layout                                                                     // 1002
        link          : '<a href="#close" class="joyride-close-tip">&times;</a>',                                      // 1003
        timer         : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        tip           : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',                      // 1005
        wrapper       : '<div class="joyride-content-wrapper"></div>',                                                 // 1006
        button        : '<a href="#" class="small button joyride-next-tip"></a>',                                      // 1007
        prev_button   : '<a href="#" class="small button joyride-prev-tip"></a>',                                      // 1008
        modal         : '<div class="joyride-modal-bg"></div>',                                                        // 1009
        expose        : '<div class="joyride-expose-wrapper"></div>',                                                  // 1010
        expose_cover  : '<div class="joyride-expose-cover"></div>'                                                     // 1011
      },                                                                                                               // 1012
      expose_add_class : '' // One or more space-separated class names to be added to exposed element                  // 1013
    },                                                                                                                 // 1014
                                                                                                                       // 1015
    init : function (scope, method, options) {                                                                         // 1016
      Foundation.inherit(this, 'throttle random_str');                                                                 // 1017
                                                                                                                       // 1018
      this.settings = this.settings || $.extend({}, this.defaults, (options || method));                               // 1019
                                                                                                                       // 1020
      this.bindings(method, options)                                                                                   // 1021
    },                                                                                                                 // 1022
                                                                                                                       // 1023
    go_next : function() {                                                                                             // 1024
      if (this.settings.$li.next().length < 1) {                                                                       // 1025
        this.end();                                                                                                    // 1026
      } else if (this.settings.timer > 0) {                                                                            // 1027
        clearTimeout(this.settings.automate);                                                                          // 1028
        this.hide();                                                                                                   // 1029
        this.show();                                                                                                   // 1030
        this.startTimer();                                                                                             // 1031
      } else {                                                                                                         // 1032
        this.hide();                                                                                                   // 1033
        this.show();                                                                                                   // 1034
      }                                                                                                                // 1035
    },                                                                                                                 // 1036
                                                                                                                       // 1037
    go_prev : function() {                                                                                             // 1038
      if (this.settings.$li.prev().length < 1) {                                                                       // 1039
        // Do nothing if there are no prev element                                                                     // 1040
      } else if (this.settings.timer > 0) {                                                                            // 1041
        clearTimeout(this.settings.automate);                                                                          // 1042
        this.hide();                                                                                                   // 1043
        this.show(null, true);                                                                                         // 1044
        this.startTimer();                                                                                             // 1045
      } else {                                                                                                         // 1046
        this.hide();                                                                                                   // 1047
        this.show(null, true);                                                                                         // 1048
      }                                                                                                                // 1049
    },                                                                                                                 // 1050
                                                                                                                       // 1051
    events : function () {                                                                                             // 1052
      var self = this;                                                                                                 // 1053
                                                                                                                       // 1054
      $(this.scope)                                                                                                    // 1055
        .off('.joyride')                                                                                               // 1056
        .on('click.fndtn.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {                              // 1057
          e.preventDefault();                                                                                          // 1058
          this.go_next()                                                                                               // 1059
        }.bind(this))                                                                                                  // 1060
        .on('click.fndtn.joyride', '.joyride-prev-tip', function (e) {                                                 // 1061
          e.preventDefault();                                                                                          // 1062
          this.go_prev();                                                                                              // 1063
        }.bind(this))                                                                                                  // 1064
                                                                                                                       // 1065
        .on('click.fndtn.joyride', '.joyride-close-tip', function (e) {                                                // 1066
          e.preventDefault();                                                                                          // 1067
          this.end(this.settings.abort_on_close);                                                                      // 1068
        }.bind(this))                                                                                                  // 1069
                                                                                                                       // 1070
        .on('keyup.fndtn.joyride', function(e) {                                                                       // 1071
          // Don't do anything if keystrokes are disabled                                                              // 1072
          // or if the joyride is not being shown                                                                      // 1073
          if (!this.settings.keyboard || !this.settings.riding) return;                                                // 1074
                                                                                                                       // 1075
          switch (e.which) {                                                                                           // 1076
            case 39: // right arrow                                                                                    // 1077
              e.preventDefault();                                                                                      // 1078
              this.go_next();                                                                                          // 1079
              break;                                                                                                   // 1080
            case 37: // left arrow                                                                                     // 1081
              e.preventDefault();                                                                                      // 1082
              this.go_prev();                                                                                          // 1083
              break;                                                                                                   // 1084
            case 27: // escape                                                                                         // 1085
              e.preventDefault();                                                                                      // 1086
              this.end(this.settings.abort_on_close);                                                                  // 1087
          }                                                                                                            // 1088
        }.bind(this));                                                                                                 // 1089
                                                                                                                       // 1090
      $(window)                                                                                                        // 1091
        .off('.joyride')                                                                                               // 1092
        .on('resize.fndtn.joyride', self.throttle(function () {                                                        // 1093
          if ($('[' + self.attr_name() + ']').length > 0 && self.settings.$next_tip && self.settings.riding) {         // 1094
            if (self.settings.exposed.length > 0) {                                                                    // 1095
              var $els = $(self.settings.exposed);                                                                     // 1096
                                                                                                                       // 1097
              $els.each(function () {                                                                                  // 1098
                var $this = $(this);                                                                                   // 1099
                self.un_expose($this);                                                                                 // 1100
                self.expose($this);                                                                                    // 1101
              });                                                                                                      // 1102
            }                                                                                                          // 1103
                                                                                                                       // 1104
            if (self.is_phone()) {                                                                                     // 1105
              self.pos_phone();                                                                                        // 1106
            } else {                                                                                                   // 1107
              self.pos_default(false);                                                                                 // 1108
            }                                                                                                          // 1109
          }                                                                                                            // 1110
        }, 100));                                                                                                      // 1111
    },                                                                                                                 // 1112
                                                                                                                       // 1113
    start : function () {                                                                                              // 1114
      var self = this,                                                                                                 // 1115
          $this = $('[' + this.attr_name() + ']', this.scope),                                                         // 1116
          integer_settings = ['timer', 'scrollSpeed', 'startOffset', 'tipAnimationFadeSpeed', 'cookieExpires'],        // 1117
          int_settings_count = integer_settings.length;                                                                // 1118
                                                                                                                       // 1119
      if (!$this.length > 0) return;                                                                                   // 1120
                                                                                                                       // 1121
      if (!this.settings.init) this.events();                                                                          // 1122
                                                                                                                       // 1123
      this.settings = $this.data(this.attr_name(true) + '-init');                                                      // 1124
                                                                                                                       // 1125
      // non configureable settings                                                                                    // 1126
      this.settings.$content_el = $this;                                                                               // 1127
      this.settings.$body = $(this.settings.tip_container);                                                            // 1128
      this.settings.body_offset = $(this.settings.tip_container).position();                                           // 1129
      this.settings.$tip_content = this.settings.$content_el.find('> li');                                             // 1130
      this.settings.paused = false;                                                                                    // 1131
      this.settings.attempts = 0;                                                                                      // 1132
      this.settings.riding = true;                                                                                     // 1133
                                                                                                                       // 1134
      // can we create cookies?                                                                                        // 1135
      if (typeof $.cookie !== 'function') {                                                                            // 1136
        this.settings.cookie_monster = false;                                                                          // 1137
      }                                                                                                                // 1138
                                                                                                                       // 1139
      // generate the tips and insert into dom.                                                                        // 1140
      if (!this.settings.cookie_monster || this.settings.cookie_monster && !$.cookie(this.settings.cookie_name)) {     // 1141
        this.settings.$tip_content.each(function (index) {                                                             // 1142
          var $this = $(this);                                                                                         // 1143
          this.settings = $.extend({}, self.defaults, self.data_options($this));                                       // 1144
                                                                                                                       // 1145
          // Make sure that settings parsed from data_options are integers where necessary                             // 1146
          var i = int_settings_count;                                                                                  // 1147
          while (i--) {                                                                                                // 1148
            self.settings[integer_settings[i]] = parseInt(self.settings[integer_settings[i]], 10);                     // 1149
          }                                                                                                            // 1150
          self.create({$li : $this, index : index});                                                                   // 1151
        });                                                                                                            // 1152
                                                                                                                       // 1153
        // show first tip                                                                                              // 1154
        if (!this.settings.start_timer_on_click && this.settings.timer > 0) {                                          // 1155
          this.show('init');                                                                                           // 1156
          this.startTimer();                                                                                           // 1157
        } else {                                                                                                       // 1158
          this.show('init');                                                                                           // 1159
        }                                                                                                              // 1160
                                                                                                                       // 1161
      }                                                                                                                // 1162
    },                                                                                                                 // 1163
                                                                                                                       // 1164
    resume : function () {                                                                                             // 1165
      this.set_li();                                                                                                   // 1166
      this.show();                                                                                                     // 1167
    },                                                                                                                 // 1168
                                                                                                                       // 1169
    tip_template : function (opts) {                                                                                   // 1170
      var $blank, content;                                                                                             // 1171
                                                                                                                       // 1172
      opts.tip_class = opts.tip_class || '';                                                                           // 1173
                                                                                                                       // 1174
      $blank = $(this.settings.template.tip).addClass(opts.tip_class);                                                 // 1175
      content = $.trim($(opts.li).html()) +                                                                            // 1176
        this.prev_button_text(opts.prev_button_text, opts.index) +                                                     // 1177
        this.button_text(opts.button_text) +                                                                           // 1178
        this.settings.template.link +                                                                                  // 1179
        this.timer_instance(opts.index);                                                                               // 1180
                                                                                                                       // 1181
      $blank.append($(this.settings.template.wrapper));                                                                // 1182
      $blank.first().attr(this.add_namespace('data-index'), opts.index);                                               // 1183
      $('.joyride-content-wrapper', $blank).append(content);                                                           // 1184
                                                                                                                       // 1185
      return $blank[0];                                                                                                // 1186
    },                                                                                                                 // 1187
                                                                                                                       // 1188
    timer_instance : function (index) {                                                                                // 1189
      var txt;                                                                                                         // 1190
                                                                                                                       // 1191
      if ((index === 0 && this.settings.start_timer_on_click && this.settings.timer > 0) || this.settings.timer === 0) {
        txt = '';                                                                                                      // 1193
      } else {                                                                                                         // 1194
        txt = $(this.settings.template.timer)[0].outerHTML;                                                            // 1195
      }                                                                                                                // 1196
      return txt;                                                                                                      // 1197
    },                                                                                                                 // 1198
                                                                                                                       // 1199
    button_text : function (txt) {                                                                                     // 1200
      if (this.settings.tip_settings.next_button) {                                                                    // 1201
        txt = $.trim(txt) || 'Next';                                                                                   // 1202
        txt = $(this.settings.template.button).append(txt)[0].outerHTML;                                               // 1203
      } else {                                                                                                         // 1204
        txt = '';                                                                                                      // 1205
      }                                                                                                                // 1206
      return txt;                                                                                                      // 1207
    },                                                                                                                 // 1208
                                                                                                                       // 1209
    prev_button_text : function (txt, idx) {                                                                           // 1210
      if (this.settings.tip_settings.prev_button) {                                                                    // 1211
        txt = $.trim(txt) || 'Previous';                                                                               // 1212
                                                                                                                       // 1213
        // Add the disabled class to the button if it's the first element                                              // 1214
        if (idx == 0)                                                                                                  // 1215
          txt = $(this.settings.template.prev_button).append(txt).addClass('disabled')[0].outerHTML;                   // 1216
        else                                                                                                           // 1217
          txt = $(this.settings.template.prev_button).append(txt)[0].outerHTML;                                        // 1218
      } else {                                                                                                         // 1219
        txt = '';                                                                                                      // 1220
      }                                                                                                                // 1221
      return txt;                                                                                                      // 1222
    },                                                                                                                 // 1223
                                                                                                                       // 1224
    create : function (opts) {                                                                                         // 1225
      this.settings.tip_settings = $.extend({}, this.settings, this.data_options(opts.$li));                           // 1226
      var buttonText = opts.$li.attr(this.add_namespace('data-button'))                                                // 1227
        || opts.$li.attr(this.add_namespace('data-text')),                                                             // 1228
          prevButtonText = opts.$li.attr(this.add_namespace('data-button-prev'))                                       // 1229
        || opts.$li.attr(this.add_namespace('data-prev-text')),                                                        // 1230
        tipClass = opts.$li.attr('class'),                                                                             // 1231
        $tip_content = $(this.tip_template({                                                                           // 1232
          tip_class : tipClass,                                                                                        // 1233
          index : opts.index,                                                                                          // 1234
          button_text : buttonText,                                                                                    // 1235
          prev_button_text : prevButtonText,                                                                           // 1236
          li : opts.$li                                                                                                // 1237
        }));                                                                                                           // 1238
                                                                                                                       // 1239
      $(this.settings.tip_container).append($tip_content);                                                             // 1240
    },                                                                                                                 // 1241
                                                                                                                       // 1242
    show : function (init, is_prev) {                                                                                  // 1243
      var $timer = null;                                                                                               // 1244
                                                                                                                       // 1245
      // are we paused?                                                                                                // 1246
      if (this.settings.$li === undefined                                                                              // 1247
        || ($.inArray(this.settings.$li.index(), this.settings.pause_after) === -1)) {                                 // 1248
                                                                                                                       // 1249
        // don't go to the next li if the tour was paused                                                              // 1250
        if (this.settings.paused) {                                                                                    // 1251
          this.settings.paused = false;                                                                                // 1252
        } else {                                                                                                       // 1253
          this.set_li(init, is_prev);                                                                                  // 1254
        }                                                                                                              // 1255
                                                                                                                       // 1256
        this.settings.attempts = 0;                                                                                    // 1257
                                                                                                                       // 1258
        if (this.settings.$li.length && this.settings.$target.length > 0) {                                            // 1259
          if (init) { //run when we first start                                                                        // 1260
            this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip);                       // 1261
            if (this.settings.modal) {                                                                                 // 1262
              this.show_modal();                                                                                       // 1263
            }                                                                                                          // 1264
          }                                                                                                            // 1265
                                                                                                                       // 1266
          this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip);                         // 1267
                                                                                                                       // 1268
          if (this.settings.modal && this.settings.expose) {                                                           // 1269
            this.expose();                                                                                             // 1270
          }                                                                                                            // 1271
                                                                                                                       // 1272
          this.settings.tip_settings = $.extend({}, this.settings, this.data_options(this.settings.$li));              // 1273
                                                                                                                       // 1274
          this.settings.timer = parseInt(this.settings.timer, 10);                                                     // 1275
                                                                                                                       // 1276
          this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location];
                                                                                                                       // 1278
          // scroll and hide bg if not modal                                                                           // 1279
          if (!/body/i.test(this.settings.$target.selector)) {                                                         // 1280
            var joyridemodalbg = $('.joyride-modal-bg');                                                               // 1281
            if (/pop/i.test(this.settings.tipAnimation)) {                                                             // 1282
                joyridemodalbg.hide();                                                                                 // 1283
            } else {                                                                                                   // 1284
                joyridemodalbg.fadeOut(this.settings.tipAnimationFadeSpeed);                                           // 1285
            }                                                                                                          // 1286
            this.scroll_to();                                                                                          // 1287
          }                                                                                                            // 1288
                                                                                                                       // 1289
          if (this.is_phone()) {                                                                                       // 1290
            this.pos_phone(true);                                                                                      // 1291
          } else {                                                                                                     // 1292
            this.pos_default(true);                                                                                    // 1293
          }                                                                                                            // 1294
                                                                                                                       // 1295
          $timer = this.settings.$next_tip.find('.joyride-timer-indicator');                                           // 1296
                                                                                                                       // 1297
          if (/pop/i.test(this.settings.tip_animation)) {                                                              // 1298
                                                                                                                       // 1299
            $timer.width(0);                                                                                           // 1300
                                                                                                                       // 1301
            if (this.settings.timer > 0) {                                                                             // 1302
                                                                                                                       // 1303
              this.settings.$next_tip.show();                                                                          // 1304
                                                                                                                       // 1305
              setTimeout(function () {                                                                                 // 1306
                $timer.animate({                                                                                       // 1307
                  width: $timer.parent().width()                                                                       // 1308
                }, this.settings.timer, 'linear');                                                                     // 1309
              }.bind(this), this.settings.tip_animation_fade_speed);                                                   // 1310
                                                                                                                       // 1311
            } else {                                                                                                   // 1312
              this.settings.$next_tip.show();                                                                          // 1313
                                                                                                                       // 1314
            }                                                                                                          // 1315
                                                                                                                       // 1316
                                                                                                                       // 1317
          } else if (/fade/i.test(this.settings.tip_animation)) {                                                      // 1318
                                                                                                                       // 1319
            $timer.width(0);                                                                                           // 1320
                                                                                                                       // 1321
            if (this.settings.timer > 0) {                                                                             // 1322
                                                                                                                       // 1323
              this.settings.$next_tip                                                                                  // 1324
                .fadeIn(this.settings.tip_animation_fade_speed)                                                        // 1325
                .show();                                                                                               // 1326
                                                                                                                       // 1327
              setTimeout(function () {                                                                                 // 1328
                $timer.animate({                                                                                       // 1329
                  width: $timer.parent().width()                                                                       // 1330
                }, this.settings.timer, 'linear');                                                                     // 1331
              }.bind(this), this.settings.tip_animation_fade_speed);                                                   // 1332
                                                                                                                       // 1333
            } else {                                                                                                   // 1334
              this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed);                                  // 1335
            }                                                                                                          // 1336
          }                                                                                                            // 1337
                                                                                                                       // 1338
          this.settings.$current_tip = this.settings.$next_tip;                                                        // 1339
                                                                                                                       // 1340
        // skip non-existant targets                                                                                   // 1341
        } else if (this.settings.$li && this.settings.$target.length < 1) {                                            // 1342
                                                                                                                       // 1343
          this.show(init, is_prev);                                                                                    // 1344
                                                                                                                       // 1345
        } else {                                                                                                       // 1346
                                                                                                                       // 1347
          this.end();                                                                                                  // 1348
                                                                                                                       // 1349
        }                                                                                                              // 1350
      } else {                                                                                                         // 1351
                                                                                                                       // 1352
        this.settings.paused = true;                                                                                   // 1353
                                                                                                                       // 1354
      }                                                                                                                // 1355
                                                                                                                       // 1356
    },                                                                                                                 // 1357
                                                                                                                       // 1358
    is_phone : function () {                                                                                           // 1359
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 1360
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 1361
    },                                                                                                                 // 1362
                                                                                                                       // 1363
    hide : function () {                                                                                               // 1364
      if (this.settings.modal && this.settings.expose) {                                                               // 1365
        this.un_expose();                                                                                              // 1366
      }                                                                                                                // 1367
                                                                                                                       // 1368
      if (!this.settings.modal) {                                                                                      // 1369
        $('.joyride-modal-bg').hide();                                                                                 // 1370
      }                                                                                                                // 1371
                                                                                                                       // 1372
      // Prevent scroll bouncing...wait to remove from layout                                                          // 1373
      this.settings.$current_tip.css('visibility', 'hidden');                                                          // 1374
      setTimeout($.proxy(function() {                                                                                  // 1375
        this.hide();                                                                                                   // 1376
        this.css('visibility', 'visible');                                                                             // 1377
      }, this.settings.$current_tip), 0);                                                                              // 1378
      this.settings.post_step_callback(this.settings.$li.index(),                                                      // 1379
        this.settings.$current_tip);                                                                                   // 1380
    },                                                                                                                 // 1381
                                                                                                                       // 1382
    set_li : function (init, is_prev) {                                                                                // 1383
      if (init) {                                                                                                      // 1384
        this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset);                                 // 1385
        this.set_next_tip();                                                                                           // 1386
        this.settings.$current_tip = this.settings.$next_tip;                                                          // 1387
      } else {                                                                                                         // 1388
        if (is_prev)                                                                                                   // 1389
          this.settings.$li = this.settings.$li.prev();                                                                // 1390
        else                                                                                                           // 1391
          this.settings.$li = this.settings.$li.next();                                                                // 1392
        this.set_next_tip();                                                                                           // 1393
      }                                                                                                                // 1394
                                                                                                                       // 1395
      this.set_target();                                                                                               // 1396
    },                                                                                                                 // 1397
                                                                                                                       // 1398
    set_next_tip : function () {                                                                                       // 1399
      this.settings.$next_tip = $('.joyride-tip-guide').eq(this.settings.$li.index());                                 // 1400
      this.settings.$next_tip.data('closed', '');                                                                      // 1401
    },                                                                                                                 // 1402
                                                                                                                       // 1403
    set_target : function () {                                                                                         // 1404
      var cl = this.settings.$li.attr(this.add_namespace('data-class')),                                               // 1405
          id = this.settings.$li.attr(this.add_namespace('data-id')),                                                  // 1406
          $sel = function () {                                                                                         // 1407
            if (id) {                                                                                                  // 1408
              return $(document.getElementById(id));                                                                   // 1409
            } else if (cl) {                                                                                           // 1410
              return $('.' + cl).first();                                                                              // 1411
            } else {                                                                                                   // 1412
              return $('body');                                                                                        // 1413
            }                                                                                                          // 1414
          };                                                                                                           // 1415
                                                                                                                       // 1416
      this.settings.$target = $sel();                                                                                  // 1417
    },                                                                                                                 // 1418
                                                                                                                       // 1419
    scroll_to : function () {                                                                                          // 1420
      var window_half, tipOffset;                                                                                      // 1421
                                                                                                                       // 1422
      window_half = $(window).height() / 2;                                                                            // 1423
      tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()); // 1424
                                                                                                                       // 1425
      if (tipOffset != 0) {                                                                                            // 1426
        $('html, body').stop().animate({                                                                               // 1427
          scrollTop: tipOffset                                                                                         // 1428
        }, this.settings.scroll_speed, 'swing');                                                                       // 1429
      }                                                                                                                // 1430
    },                                                                                                                 // 1431
                                                                                                                       // 1432
    paused : function () {                                                                                             // 1433
      return ($.inArray((this.settings.$li.index() + 1), this.settings.pause_after) === -1);                           // 1434
    },                                                                                                                 // 1435
                                                                                                                       // 1436
    restart : function () {                                                                                            // 1437
      this.hide();                                                                                                     // 1438
      this.settings.$li = undefined;                                                                                   // 1439
      this.show('init');                                                                                               // 1440
    },                                                                                                                 // 1441
                                                                                                                       // 1442
    pos_default : function (init) {                                                                                    // 1443
      var $nub = this.settings.$next_tip.find('.joyride-nub'),                                                         // 1444
          nub_width = Math.ceil($nub.outerWidth() / 2),                                                                // 1445
          nub_height = Math.ceil($nub.outerHeight() / 2),                                                              // 1446
          toggle = init || false;                                                                                      // 1447
                                                                                                                       // 1448
      // tip must not be "display: none" to calculate position                                                         // 1449
      if (toggle) {                                                                                                    // 1450
        this.settings.$next_tip.css('visibility', 'hidden');                                                           // 1451
        this.settings.$next_tip.show();                                                                                // 1452
      }                                                                                                                // 1453
                                                                                                                       // 1454
      if (!/body/i.test(this.settings.$target.selector)) {                                                             // 1455
          var topAdjustment = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
              leftAdjustment = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                                                                                                                       // 1458
          if (this.bottom()) {                                                                                         // 1459
            if (this.rtl) {                                                                                            // 1460
              this.settings.$next_tip.css({                                                                            // 1461
                top: (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + leftAdjustment});
            } else {                                                                                                   // 1464
              this.settings.$next_tip.css({                                                                            // 1465
                top: (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left: this.settings.$target.offset().left + leftAdjustment});                                          // 1467
            }                                                                                                          // 1468
                                                                                                                       // 1469
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'top');                                   // 1470
                                                                                                                       // 1471
          } else if (this.top()) {                                                                                     // 1472
            if (this.rtl) {                                                                                            // 1473
              this.settings.$next_tip.css({                                                                            // 1474
                top: (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()});
            } else {                                                                                                   // 1477
              this.settings.$next_tip.css({                                                                            // 1478
                top: (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: this.settings.$target.offset().left + leftAdjustment});                                          // 1480
            }                                                                                                          // 1481
                                                                                                                       // 1482
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'bottom');                                // 1483
                                                                                                                       // 1484
          } else if (this.right()) {                                                                                   // 1485
                                                                                                                       // 1486
            this.settings.$next_tip.css({                                                                              // 1487
              top: this.settings.$target.offset().top + topAdjustment,                                                 // 1488
              left: (this.settings.$target.outerWidth() + this.settings.$target.offset().left + nub_width + leftAdjustment)});
                                                                                                                       // 1490
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'left');                                  // 1491
                                                                                                                       // 1492
          } else if (this.left()) {                                                                                    // 1493
                                                                                                                       // 1494
            this.settings.$next_tip.css({                                                                              // 1495
              top: this.settings.$target.offset().top + topAdjustment,                                                 // 1496
              left: (this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - nub_width + leftAdjustment)});
                                                                                                                       // 1498
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'right');                                 // 1499
                                                                                                                       // 1500
          }                                                                                                            // 1501
                                                                                                                       // 1502
          if (!this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length) {
                                                                                                                       // 1504
            $nub.removeClass('bottom')                                                                                 // 1505
              .removeClass('top')                                                                                      // 1506
              .removeClass('right')                                                                                    // 1507
              .removeClass('left');                                                                                    // 1508
                                                                                                                       // 1509
            this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts];
                                                                                                                       // 1511
            this.settings.attempts++;                                                                                  // 1512
                                                                                                                       // 1513
            this.pos_default();                                                                                        // 1514
                                                                                                                       // 1515
          }                                                                                                            // 1516
                                                                                                                       // 1517
      } else if (this.settings.$li.length) {                                                                           // 1518
                                                                                                                       // 1519
        this.pos_modal($nub);                                                                                          // 1520
                                                                                                                       // 1521
      }                                                                                                                // 1522
                                                                                                                       // 1523
      if (toggle) {                                                                                                    // 1524
        this.settings.$next_tip.hide();                                                                                // 1525
        this.settings.$next_tip.css('visibility', 'visible');                                                          // 1526
      }                                                                                                                // 1527
                                                                                                                       // 1528
    },                                                                                                                 // 1529
                                                                                                                       // 1530
    pos_phone : function (init) {                                                                                      // 1531
      var tip_height = this.settings.$next_tip.outerHeight(),                                                          // 1532
          tip_offset = this.settings.$next_tip.offset(),                                                               // 1533
          target_height = this.settings.$target.outerHeight(),                                                         // 1534
          $nub = $('.joyride-nub', this.settings.$next_tip),                                                           // 1535
          nub_height = Math.ceil($nub.outerHeight() / 2),                                                              // 1536
          toggle = init || false;                                                                                      // 1537
                                                                                                                       // 1538
      $nub.removeClass('bottom')                                                                                       // 1539
        .removeClass('top')                                                                                            // 1540
        .removeClass('right')                                                                                          // 1541
        .removeClass('left');                                                                                          // 1542
                                                                                                                       // 1543
      if (toggle) {                                                                                                    // 1544
        this.settings.$next_tip.css('visibility', 'hidden');                                                           // 1545
        this.settings.$next_tip.show();                                                                                // 1546
      }                                                                                                                // 1547
                                                                                                                       // 1548
      if (!/body/i.test(this.settings.$target.selector)) {                                                             // 1549
                                                                                                                       // 1550
        if (this.top()) {                                                                                              // 1551
                                                                                                                       // 1552
            this.settings.$next_tip.offset({top: this.settings.$target.offset().top - tip_height - nub_height});       // 1553
            $nub.addClass('bottom');                                                                                   // 1554
                                                                                                                       // 1555
        } else {                                                                                                       // 1556
                                                                                                                       // 1557
          this.settings.$next_tip.offset({top: this.settings.$target.offset().top + target_height + nub_height});      // 1558
          $nub.addClass('top');                                                                                        // 1559
                                                                                                                       // 1560
        }                                                                                                              // 1561
                                                                                                                       // 1562
      } else if (this.settings.$li.length) {                                                                           // 1563
        this.pos_modal($nub);                                                                                          // 1564
      }                                                                                                                // 1565
                                                                                                                       // 1566
      if (toggle) {                                                                                                    // 1567
        this.settings.$next_tip.hide();                                                                                // 1568
        this.settings.$next_tip.css('visibility', 'visible');                                                          // 1569
      }                                                                                                                // 1570
    },                                                                                                                 // 1571
                                                                                                                       // 1572
    pos_modal : function ($nub) {                                                                                      // 1573
      this.center();                                                                                                   // 1574
      $nub.hide();                                                                                                     // 1575
                                                                                                                       // 1576
      this.show_modal();                                                                                               // 1577
    },                                                                                                                 // 1578
                                                                                                                       // 1579
    show_modal : function () {                                                                                         // 1580
      if (!this.settings.$next_tip.data('closed')) {                                                                   // 1581
        var joyridemodalbg =  $('.joyride-modal-bg');                                                                  // 1582
        if (joyridemodalbg.length < 1) {                                                                               // 1583
          var joyridemodalbg = $(this.settings.template.modal);                                                        // 1584
          joyridemodalbg.appendTo('body');                                                                             // 1585
        }                                                                                                              // 1586
                                                                                                                       // 1587
        if (/pop/i.test(this.settings.tip_animation)) {                                                                // 1588
            joyridemodalbg.show();                                                                                     // 1589
        } else {                                                                                                       // 1590
            joyridemodalbg.fadeIn(this.settings.tip_animation_fade_speed);                                             // 1591
        }                                                                                                              // 1592
      }                                                                                                                // 1593
    },                                                                                                                 // 1594
                                                                                                                       // 1595
    expose : function () {                                                                                             // 1596
      var expose,                                                                                                      // 1597
          exposeCover,                                                                                                 // 1598
          el,                                                                                                          // 1599
          origCSS,                                                                                                     // 1600
          origClasses,                                                                                                 // 1601
          randId = 'expose-' + this.random_str(6);                                                                     // 1602
                                                                                                                       // 1603
      if (arguments.length > 0 && arguments[0] instanceof $) {                                                         // 1604
        el = arguments[0];                                                                                             // 1605
      } else if(this.settings.$target && !/body/i.test(this.settings.$target.selector)){                               // 1606
        el = this.settings.$target;                                                                                    // 1607
      }  else {                                                                                                        // 1608
        return false;                                                                                                  // 1609
      }                                                                                                                // 1610
                                                                                                                       // 1611
      if(el.length < 1){                                                                                               // 1612
        if(window.console){                                                                                            // 1613
          console.error('element not valid', el);                                                                      // 1614
        }                                                                                                              // 1615
        return false;                                                                                                  // 1616
      }                                                                                                                // 1617
                                                                                                                       // 1618
      expose = $(this.settings.template.expose);                                                                       // 1619
      this.settings.$body.append(expose);                                                                              // 1620
      expose.css({                                                                                                     // 1621
        top: el.offset().top,                                                                                          // 1622
        left: el.offset().left,                                                                                        // 1623
        width: el.outerWidth(true),                                                                                    // 1624
        height: el.outerHeight(true)                                                                                   // 1625
      });                                                                                                              // 1626
                                                                                                                       // 1627
      exposeCover = $(this.settings.template.expose_cover);                                                            // 1628
                                                                                                                       // 1629
      origCSS = {                                                                                                      // 1630
        zIndex: el.css('z-index'),                                                                                     // 1631
        position: el.css('position')                                                                                   // 1632
      };                                                                                                               // 1633
                                                                                                                       // 1634
      origClasses = el.attr('class') == null ? '' : el.attr('class');                                                  // 1635
                                                                                                                       // 1636
      el.css('z-index',parseInt(expose.css('z-index'))+1);                                                             // 1637
                                                                                                                       // 1638
      if (origCSS.position == 'static') {                                                                              // 1639
        el.css('position','relative');                                                                                 // 1640
      }                                                                                                                // 1641
                                                                                                                       // 1642
      el.data('expose-css',origCSS);                                                                                   // 1643
      el.data('orig-class', origClasses);                                                                              // 1644
      el.attr('class', origClasses + ' ' + this.settings.expose_add_class);                                            // 1645
                                                                                                                       // 1646
      exposeCover.css({                                                                                                // 1647
        top: el.offset().top,                                                                                          // 1648
        left: el.offset().left,                                                                                        // 1649
        width: el.outerWidth(true),                                                                                    // 1650
        height: el.outerHeight(true)                                                                                   // 1651
      });                                                                                                              // 1652
                                                                                                                       // 1653
      if (this.settings.modal) this.show_modal();                                                                      // 1654
                                                                                                                       // 1655
      this.settings.$body.append(exposeCover);                                                                         // 1656
      expose.addClass(randId);                                                                                         // 1657
      exposeCover.addClass(randId);                                                                                    // 1658
      el.data('expose', randId);                                                                                       // 1659
      this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, el);                      // 1660
      this.add_exposed(el);                                                                                            // 1661
    },                                                                                                                 // 1662
                                                                                                                       // 1663
    un_expose : function () {                                                                                          // 1664
      var exposeId,                                                                                                    // 1665
          el,                                                                                                          // 1666
          expose ,                                                                                                     // 1667
          origCSS,                                                                                                     // 1668
          origClasses,                                                                                                 // 1669
          clearAll = false;                                                                                            // 1670
                                                                                                                       // 1671
      if (arguments.length > 0 && arguments[0] instanceof $) {                                                         // 1672
        el = arguments[0];                                                                                             // 1673
      } else if(this.settings.$target && !/body/i.test(this.settings.$target.selector)){                               // 1674
        el = this.settings.$target;                                                                                    // 1675
      }  else {                                                                                                        // 1676
        return false;                                                                                                  // 1677
      }                                                                                                                // 1678
                                                                                                                       // 1679
      if(el.length < 1){                                                                                               // 1680
        if (window.console) {                                                                                          // 1681
          console.error('element not valid', el);                                                                      // 1682
        }                                                                                                              // 1683
        return false;                                                                                                  // 1684
      }                                                                                                                // 1685
                                                                                                                       // 1686
      exposeId = el.data('expose');                                                                                    // 1687
      expose = $('.' + exposeId);                                                                                      // 1688
                                                                                                                       // 1689
      if (arguments.length > 1) {                                                                                      // 1690
        clearAll = arguments[1];                                                                                       // 1691
      }                                                                                                                // 1692
                                                                                                                       // 1693
      if (clearAll === true) {                                                                                         // 1694
        $('.joyride-expose-wrapper,.joyride-expose-cover').remove();                                                   // 1695
      } else {                                                                                                         // 1696
        expose.remove();                                                                                               // 1697
      }                                                                                                                // 1698
                                                                                                                       // 1699
      origCSS = el.data('expose-css');                                                                                 // 1700
                                                                                                                       // 1701
      if (origCSS.zIndex == 'auto') {                                                                                  // 1702
        el.css('z-index', '');                                                                                         // 1703
      } else {                                                                                                         // 1704
        el.css('z-index', origCSS.zIndex);                                                                             // 1705
      }                                                                                                                // 1706
                                                                                                                       // 1707
      if (origCSS.position != el.css('position')) {                                                                    // 1708
        if(origCSS.position == 'static') {// this is default, no need to set it.                                       // 1709
          el.css('position', '');                                                                                      // 1710
        } else {                                                                                                       // 1711
          el.css('position', origCSS.position);                                                                        // 1712
        }                                                                                                              // 1713
      }                                                                                                                // 1714
                                                                                                                       // 1715
      origClasses = el.data('orig-class');                                                                             // 1716
      el.attr('class', origClasses);                                                                                   // 1717
      el.removeData('orig-classes');                                                                                   // 1718
                                                                                                                       // 1719
      el.removeData('expose');                                                                                         // 1720
      el.removeData('expose-z-index');                                                                                 // 1721
      this.remove_exposed(el);                                                                                         // 1722
    },                                                                                                                 // 1723
                                                                                                                       // 1724
    add_exposed: function(el){                                                                                         // 1725
      this.settings.exposed = this.settings.exposed || [];                                                             // 1726
      if (el instanceof $ || typeof el === 'object') {                                                                 // 1727
        this.settings.exposed.push(el[0]);                                                                             // 1728
      } else if (typeof el == 'string') {                                                                              // 1729
        this.settings.exposed.push(el);                                                                                // 1730
      }                                                                                                                // 1731
    },                                                                                                                 // 1732
                                                                                                                       // 1733
    remove_exposed: function(el){                                                                                      // 1734
      var search, i;                                                                                                   // 1735
      if (el instanceof $) {                                                                                           // 1736
        search = el[0]                                                                                                 // 1737
      } else if (typeof el == 'string'){                                                                               // 1738
        search = el;                                                                                                   // 1739
      }                                                                                                                // 1740
                                                                                                                       // 1741
      this.settings.exposed = this.settings.exposed || [];                                                             // 1742
      i = this.settings.exposed.length;                                                                                // 1743
                                                                                                                       // 1744
      while (i--) {                                                                                                    // 1745
        if (this.settings.exposed[i] == search) {                                                                      // 1746
          this.settings.exposed.splice(i, 1);                                                                          // 1747
          return;                                                                                                      // 1748
        }                                                                                                              // 1749
      }                                                                                                                // 1750
    },                                                                                                                 // 1751
                                                                                                                       // 1752
    center : function () {                                                                                             // 1753
      var $w = $(window);                                                                                              // 1754
                                                                                                                       // 1755
      this.settings.$next_tip.css({                                                                                    // 1756
        top : ((($w.height() - this.settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),                          // 1757
        left : ((($w.width() - this.settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())                           // 1758
      });                                                                                                              // 1759
                                                                                                                       // 1760
      return true;                                                                                                     // 1761
    },                                                                                                                 // 1762
                                                                                                                       // 1763
    bottom : function () {                                                                                             // 1764
      return /bottom/i.test(this.settings.tip_settings.tip_location);                                                  // 1765
    },                                                                                                                 // 1766
                                                                                                                       // 1767
    top : function () {                                                                                                // 1768
      return /top/i.test(this.settings.tip_settings.tip_location);                                                     // 1769
    },                                                                                                                 // 1770
                                                                                                                       // 1771
    right : function () {                                                                                              // 1772
      return /right/i.test(this.settings.tip_settings.tip_location);                                                   // 1773
    },                                                                                                                 // 1774
                                                                                                                       // 1775
    left : function () {                                                                                               // 1776
      return /left/i.test(this.settings.tip_settings.tip_location);                                                    // 1777
    },                                                                                                                 // 1778
                                                                                                                       // 1779
    corners : function (el) {                                                                                          // 1780
      var w = $(window),                                                                                               // 1781
          window_half = w.height() / 2,                                                                                // 1782
          //using this to calculate since scroll may not have finished yet.                                            // 1783
          tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()),
          right = w.width() + w.scrollLeft(),                                                                          // 1785
          offsetBottom =  w.height() + tipOffset,                                                                      // 1786
          bottom = w.height() + w.scrollTop(),                                                                         // 1787
          top = w.scrollTop();                                                                                         // 1788
                                                                                                                       // 1789
      if (tipOffset < top) {                                                                                           // 1790
        if (tipOffset < 0) {                                                                                           // 1791
          top = 0;                                                                                                     // 1792
        } else {                                                                                                       // 1793
          top = tipOffset;                                                                                             // 1794
        }                                                                                                              // 1795
      }                                                                                                                // 1796
                                                                                                                       // 1797
      if (offsetBottom > bottom) {                                                                                     // 1798
        bottom = offsetBottom;                                                                                         // 1799
      }                                                                                                                // 1800
                                                                                                                       // 1801
      return [                                                                                                         // 1802
        el.offset().top < top,                                                                                         // 1803
        right < el.offset().left + el.outerWidth(),                                                                    // 1804
        bottom < el.offset().top + el.outerHeight(),                                                                   // 1805
        w.scrollLeft() > el.offset().left                                                                              // 1806
      ];                                                                                                               // 1807
    },                                                                                                                 // 1808
                                                                                                                       // 1809
    visible : function (hidden_corners) {                                                                              // 1810
      var i = hidden_corners.length;                                                                                   // 1811
                                                                                                                       // 1812
      while (i--) {                                                                                                    // 1813
        if (hidden_corners[i]) return false;                                                                           // 1814
      }                                                                                                                // 1815
                                                                                                                       // 1816
      return true;                                                                                                     // 1817
    },                                                                                                                 // 1818
                                                                                                                       // 1819
    nub_position : function (nub, pos, def) {                                                                          // 1820
      if (pos === 'auto') {                                                                                            // 1821
        nub.addClass(def);                                                                                             // 1822
      } else {                                                                                                         // 1823
        nub.addClass(pos);                                                                                             // 1824
      }                                                                                                                // 1825
    },                                                                                                                 // 1826
                                                                                                                       // 1827
    startTimer : function () {                                                                                         // 1828
      if (this.settings.$li.length) {                                                                                  // 1829
        this.settings.automate = setTimeout(function () {                                                              // 1830
          this.hide();                                                                                                 // 1831
          this.show();                                                                                                 // 1832
          this.startTimer();                                                                                           // 1833
        }.bind(this), this.settings.timer);                                                                            // 1834
      } else {                                                                                                         // 1835
        clearTimeout(this.settings.automate);                                                                          // 1836
      }                                                                                                                // 1837
    },                                                                                                                 // 1838
                                                                                                                       // 1839
    end : function (abort) {                                                                                           // 1840
      if (this.settings.cookie_monster) {                                                                              // 1841
        $.cookie(this.settings.cookie_name, 'ridden', { expires: this.settings.cookie_expires, domain: this.settings.cookie_domain });
      }                                                                                                                // 1843
                                                                                                                       // 1844
      if (this.settings.timer > 0) {                                                                                   // 1845
        clearTimeout(this.settings.automate);                                                                          // 1846
      }                                                                                                                // 1847
                                                                                                                       // 1848
      if (this.settings.modal && this.settings.expose) {                                                               // 1849
        this.un_expose();                                                                                              // 1850
      }                                                                                                                // 1851
                                                                                                                       // 1852
      // Unplug keystrokes listener                                                                                    // 1853
      $(this.scope).off('keyup.joyride')                                                                               // 1854
                                                                                                                       // 1855
      this.settings.$next_tip.data('closed', true);                                                                    // 1856
      this.settings.riding = false;                                                                                    // 1857
                                                                                                                       // 1858
      $('.joyride-modal-bg').hide();                                                                                   // 1859
      this.settings.$current_tip.hide();                                                                               // 1860
                                                                                                                       // 1861
      if (typeof abort === 'undefined' || abort === false) {                                                           // 1862
        this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);                       // 1863
        this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip);                       // 1864
      }                                                                                                                // 1865
                                                                                                                       // 1866
      $('.joyride-tip-guide').remove();                                                                                // 1867
    },                                                                                                                 // 1868
                                                                                                                       // 1869
    off : function () {                                                                                                // 1870
      $(this.scope).off('.joyride');                                                                                   // 1871
      $(window).off('.joyride');                                                                                       // 1872
      $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');                                   // 1873
      $('.joyride-tip-guide, .joyride-modal-bg').remove();                                                             // 1874
      clearTimeout(this.settings.automate);                                                                            // 1875
      this.settings = {};                                                                                              // 1876
    },                                                                                                                 // 1877
                                                                                                                       // 1878
    reflow : function () {}                                                                                            // 1879
  };                                                                                                                   // 1880
}(jQuery, window, window.document));                                                                                   // 1881
;(function ($, window, document, undefined) {                                                                          // 1882
  'use strict';                                                                                                        // 1883
                                                                                                                       // 1884
  Foundation.libs.equalizer = {                                                                                        // 1885
    name : 'equalizer',                                                                                                // 1886
                                                                                                                       // 1887
    version : '5.5.0',                                                                                                 // 1888
                                                                                                                       // 1889
    settings : {                                                                                                       // 1890
      use_tallest: true,                                                                                               // 1891
      before_height_change: $.noop,                                                                                    // 1892
      after_height_change: $.noop,                                                                                     // 1893
      equalize_on_stack: false                                                                                         // 1894
    },                                                                                                                 // 1895
                                                                                                                       // 1896
    init : function (scope, method, options) {                                                                         // 1897
      Foundation.inherit(this, 'image_loaded');                                                                        // 1898
      this.bindings(method, options);                                                                                  // 1899
      this.reflow();                                                                                                   // 1900
    },                                                                                                                 // 1901
                                                                                                                       // 1902
    events : function () {                                                                                             // 1903
      this.S(window).off('.equalizer').on('resize.fndtn.equalizer', function(e){                                       // 1904
        this.reflow();                                                                                                 // 1905
      }.bind(this));                                                                                                   // 1906
    },                                                                                                                 // 1907
                                                                                                                       // 1908
    equalize: function(equalizer) {                                                                                    // 1909
      var isStacked = false,                                                                                           // 1910
          vals = equalizer.find('[' + this.attr_name() + '-watch]:visible'),                                           // 1911
          settings = equalizer.data(this.attr_name(true)+'-init');                                                     // 1912
                                                                                                                       // 1913
      if (vals.length === 0) return;                                                                                   // 1914
      var firstTopOffset = vals.first().offset().top;                                                                  // 1915
      settings.before_height_change();                                                                                 // 1916
      equalizer.trigger('before-height-change').trigger('before-height-change.fndth.equalizer');                       // 1917
      vals.height('inherit');                                                                                          // 1918
      vals.each(function(){                                                                                            // 1919
        var el = $(this);                                                                                              // 1920
        if (el.offset().top !== firstTopOffset) {                                                                      // 1921
          isStacked = true;                                                                                            // 1922
        }                                                                                                              // 1923
      });                                                                                                              // 1924
                                                                                                                       // 1925
      if (settings.equalize_on_stack === false) {                                                                      // 1926
        if (isStacked) return;                                                                                         // 1927
      };                                                                                                               // 1928
                                                                                                                       // 1929
      var heights = vals.map(function(){ return $(this).outerHeight(false) }).get();                                   // 1930
                                                                                                                       // 1931
      if (settings.use_tallest) {                                                                                      // 1932
        var max = Math.max.apply(null, heights);                                                                       // 1933
        vals.css('height', max);                                                                                       // 1934
      } else {                                                                                                         // 1935
        var min = Math.min.apply(null, heights);                                                                       // 1936
        vals.css('height', min);                                                                                       // 1937
      }                                                                                                                // 1938
      settings.after_height_change();                                                                                  // 1939
      equalizer.trigger('after-height-change').trigger('after-height-change.fndtn.equalizer');                         // 1940
    },                                                                                                                 // 1941
                                                                                                                       // 1942
    reflow : function () {                                                                                             // 1943
      var self = this;                                                                                                 // 1944
                                                                                                                       // 1945
      this.S('[' + this.attr_name() + ']', this.scope).each(function(){                                                // 1946
        var $eq_target = $(this);                                                                                      // 1947
        self.image_loaded(self.S('img', this), function(){                                                             // 1948
          self.equalize($eq_target)                                                                                    // 1949
        });                                                                                                            // 1950
      });                                                                                                              // 1951
    }                                                                                                                  // 1952
  };                                                                                                                   // 1953
})(jQuery, window, window.document);                                                                                   // 1954
;(function ($, window, document, undefined) {                                                                          // 1955
  'use strict';                                                                                                        // 1956
                                                                                                                       // 1957
  Foundation.libs.dropdown = {                                                                                         // 1958
    name : 'dropdown',                                                                                                 // 1959
                                                                                                                       // 1960
    version : '5.5.0',                                                                                                 // 1961
                                                                                                                       // 1962
    settings : {                                                                                                       // 1963
      active_class: 'open',                                                                                            // 1964
      disabled_class: 'disabled',                                                                                      // 1965
      mega_class: 'mega',                                                                                              // 1966
      align: 'bottom',                                                                                                 // 1967
      is_hover: false,                                                                                                 // 1968
      hover_timeout: 150,                                                                                              // 1969
      opened: function(){},                                                                                            // 1970
      closed: function(){}                                                                                             // 1971
    },                                                                                                                 // 1972
                                                                                                                       // 1973
    init : function (scope, method, options) {                                                                         // 1974
      Foundation.inherit(this, 'throttle');                                                                            // 1975
                                                                                                                       // 1976
      $.extend(true, this.settings, method, options);                                                                  // 1977
      this.bindings(method, options);                                                                                  // 1978
    },                                                                                                                 // 1979
                                                                                                                       // 1980
    events : function (scope) {                                                                                        // 1981
      var self = this,                                                                                                 // 1982
          S = self.S;                                                                                                  // 1983
                                                                                                                       // 1984
      S(this.scope)                                                                                                    // 1985
        .off('.dropdown')                                                                                              // 1986
        .on('click.fndtn.dropdown', '[' + this.attr_name() + ']', function (e) {                                       // 1987
          var settings = S(this).data(self.attr_name(true) + '-init') || self.settings;                                // 1988
          if (!settings.is_hover || Modernizr.touch) {                                                                 // 1989
            e.preventDefault();                                                                                        // 1990
            if (S(this).parent('[data-reveal-id]')) {                                                                  // 1991
              e.stopPropagation();                                                                                     // 1992
            }                                                                                                          // 1993
            self.toggle($(this));                                                                                      // 1994
          }                                                                                                            // 1995
        })                                                                                                             // 1996
        .on('mouseenter.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this),                                                                                         // 1998
              dropdown,                                                                                                // 1999
              target;                                                                                                  // 2000
                                                                                                                       // 2001
          clearTimeout(self.timeout);                                                                                  // 2002
                                                                                                                       // 2003
          if ($this.data(self.data_attr())) {                                                                          // 2004
            dropdown = S('#' + $this.data(self.data_attr()));                                                          // 2005
            target = $this;                                                                                            // 2006
          } else {                                                                                                     // 2007
            dropdown = $this;                                                                                          // 2008
            target = S('[' + self.attr_name() + '="' + dropdown.attr('id') + '"]');                                    // 2009
          }                                                                                                            // 2010
                                                                                                                       // 2011
          var settings = target.data(self.attr_name(true) + '-init') || self.settings;                                 // 2012
                                                                                                                       // 2013
          if(S(e.currentTarget).data(self.data_attr()) && settings.is_hover) {                                         // 2014
            self.closeall.call(self);                                                                                  // 2015
          }                                                                                                            // 2016
                                                                                                                       // 2017
          if (settings.is_hover) self.open.apply(self, [dropdown, target]);                                            // 2018
        })                                                                                                             // 2019
        .on('mouseleave.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this);                                                                                         // 2021
          var settings;                                                                                                // 2022
                                                                                                                       // 2023
          if ($this.data(self.data_attr())) {                                                                          // 2024
              settings = $this.data(self.data_attr(true) + '-init') || self.settings;                                  // 2025
          }                                                                                                            // 2026
          else {                                                                                                       // 2027
              var target   = S('[' + self.attr_name() + '="' + S(this).attr('id') + '"]'),                             // 2028
                  settings = target.data(self.attr_name(true) + '-init') || self.settings;                             // 2029
          }                                                                                                            // 2030
                                                                                                                       // 2031
          self.timeout = setTimeout(function () {                                                                      // 2032
            if ($this.data(self.data_attr())) {                                                                        // 2033
              if (settings.is_hover) self.close.call(self, S('#' + $this.data(self.data_attr())));                     // 2034
            } else {                                                                                                   // 2035
              if (settings.is_hover) self.close.call(self, $this);                                                     // 2036
            }                                                                                                          // 2037
          }.bind(this), settings.hover_timeout);                                                                       // 2038
        })                                                                                                             // 2039
        .on('click.fndtn.dropdown', function (e) {                                                                     // 2040
          var parent = S(e.target).closest('[' + self.attr_name() + '-content]');                                      // 2041
          var links  = parent.find('a');                                                                               // 2042
                                                                                                                       // 2043
          if (links.length > 0 && parent.attr('aria-autoclose') !== "false") {                                         // 2044
              self.close.call(self, S('[' + self.attr_name() + '-content]'));                                          // 2045
          }                                                                                                            // 2046
                                                                                                                       // 2047
          if (S(e.target).closest('[' + self.attr_name() + ']').length > 0) {                                          // 2048
            return;                                                                                                    // 2049
          }                                                                                                            // 2050
                                                                                                                       // 2051
          if (!(S(e.target).data('revealId')) &&                                                                       // 2052
            (parent.length > 0 && (S(e.target).is('[' + self.attr_name() + '-content]') ||                             // 2053
              $.contains(parent.first()[0], e.target)))) {                                                             // 2054
            e.stopPropagation();                                                                                       // 2055
            return;                                                                                                    // 2056
          }                                                                                                            // 2057
                                                                                                                       // 2058
          self.close.call(self, S('[' + self.attr_name() + '-content]'));                                              // 2059
        })                                                                                                             // 2060
        .on('opened.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {                               // 2061
          self.settings.opened.call(this);                                                                             // 2062
        })                                                                                                             // 2063
        .on('closed.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {                               // 2064
          self.settings.closed.call(this);                                                                             // 2065
        });                                                                                                            // 2066
                                                                                                                       // 2067
      S(window)                                                                                                        // 2068
        .off('.dropdown')                                                                                              // 2069
        .on('resize.fndtn.dropdown', self.throttle(function () {                                                       // 2070
          self.resize.call(self);                                                                                      // 2071
        }, 50));                                                                                                       // 2072
                                                                                                                       // 2073
      this.resize();                                                                                                   // 2074
    },                                                                                                                 // 2075
                                                                                                                       // 2076
    close: function (dropdown) {                                                                                       // 2077
      var self = this;                                                                                                 // 2078
      dropdown.each(function () {                                                                                      // 2079
        var original_target = $('[' + self.attr_name() + '=' + dropdown[0].id + ']') || $('aria-controls=' + dropdown[0].id+ ']');
        original_target.attr('aria-expanded', 'false');                                                                // 2081
        if (self.S(this).hasClass(self.settings.active_class)) {                                                       // 2082
          self.S(this)                                                                                                 // 2083
            .css(Foundation.rtl ? 'right':'left', '-99999px')                                                          // 2084
            .attr('aria-hidden', 'true')                                                                               // 2085
            .removeClass(self.settings.active_class)                                                                   // 2086
            .prev('[' + self.attr_name() + ']')                                                                        // 2087
            .removeClass(self.settings.active_class)                                                                   // 2088
            .removeData('target');                                                                                     // 2089
                                                                                                                       // 2090
          self.S(this).trigger('closed').trigger('closed.fndtn.dropdown', [dropdown]);                                 // 2091
        }                                                                                                              // 2092
      });                                                                                                              // 2093
      dropdown.removeClass('f-open-' + this.attr_name(true));                                                          // 2094
    },                                                                                                                 // 2095
                                                                                                                       // 2096
    closeall: function() {                                                                                             // 2097
      var self = this;                                                                                                 // 2098
      $.each(self.S('.f-open-' + this.attr_name(true)), function() {                                                   // 2099
        self.close.call(self, self.S(this));                                                                           // 2100
      });                                                                                                              // 2101
    },                                                                                                                 // 2102
                                                                                                                       // 2103
    open: function (dropdown, target) {                                                                                // 2104
      this                                                                                                             // 2105
        .css(dropdown                                                                                                  // 2106
        .addClass(this.settings.active_class), target);                                                                // 2107
      dropdown.prev('[' + this.attr_name() + ']').addClass(this.settings.active_class);                                // 2108
      dropdown.data('target', target.get(0)).trigger('opened').trigger('opened.fndtn.dropdown', [dropdown, target]);   // 2109
      dropdown.attr('aria-hidden', 'false');                                                                           // 2110
      target.attr('aria-expanded', 'true');                                                                            // 2111
      dropdown.focus();                                                                                                // 2112
      dropdown.addClass('f-open-' + this.attr_name(true));                                                             // 2113
    },                                                                                                                 // 2114
                                                                                                                       // 2115
    data_attr: function () {                                                                                           // 2116
      if (this.namespace.length > 0) {                                                                                 // 2117
        return this.namespace + '-' + this.name;                                                                       // 2118
      }                                                                                                                // 2119
                                                                                                                       // 2120
      return this.name;                                                                                                // 2121
    },                                                                                                                 // 2122
                                                                                                                       // 2123
    toggle : function (target) {                                                                                       // 2124
      if (target.hasClass(this.settings.disabled_class)) {                                                             // 2125
        return;                                                                                                        // 2126
      }                                                                                                                // 2127
      var dropdown = this.S('#' + target.data(this.data_attr()));                                                      // 2128
      if (dropdown.length === 0) {                                                                                     // 2129
        // No dropdown found, not continuing                                                                           // 2130
        return;                                                                                                        // 2131
      }                                                                                                                // 2132
                                                                                                                       // 2133
      this.close.call(this, this.S('[' + this.attr_name() + '-content]').not(dropdown));                               // 2134
                                                                                                                       // 2135
      if (dropdown.hasClass(this.settings.active_class)) {                                                             // 2136
        this.close.call(this, dropdown);                                                                               // 2137
        if (dropdown.data('target') !== target.get(0))                                                                 // 2138
          this.open.call(this, dropdown, target);                                                                      // 2139
      } else {                                                                                                         // 2140
        this.open.call(this, dropdown, target);                                                                        // 2141
      }                                                                                                                // 2142
    },                                                                                                                 // 2143
                                                                                                                       // 2144
    resize : function () {                                                                                             // 2145
      var dropdown = this.S('[' + this.attr_name() + '-content].open'),                                                // 2146
          target = this.S('[' + this.attr_name() + '="' + dropdown.attr('id') + '"]');                                 // 2147
                                                                                                                       // 2148
      if (dropdown.length && target.length) {                                                                          // 2149
        this.css(dropdown, target);                                                                                    // 2150
      }                                                                                                                // 2151
    },                                                                                                                 // 2152
                                                                                                                       // 2153
    css : function (dropdown, target) {                                                                                // 2154
      var left_offset = Math.max((target.width() - dropdown.width()) / 2, 8),                                          // 2155
          settings = target.data(this.attr_name(true) + '-init') || this.settings;                                     // 2156
                                                                                                                       // 2157
      this.clear_idx();                                                                                                // 2158
                                                                                                                       // 2159
      if (this.small()) {                                                                                              // 2160
        var p = this.dirs.bottom.call(dropdown, target, settings);                                                     // 2161
                                                                                                                       // 2162
        dropdown.attr('style', '').removeClass('drop-left drop-right drop-top').css({                                  // 2163
          position : 'absolute',                                                                                       // 2164
          width: '95%',                                                                                                // 2165
          'max-width': 'none',                                                                                         // 2166
          top: p.top                                                                                                   // 2167
        });                                                                                                            // 2168
                                                                                                                       // 2169
        dropdown.css(Foundation.rtl ? 'right':'left', left_offset);                                                    // 2170
      } else {                                                                                                         // 2171
                                                                                                                       // 2172
        this.style(dropdown, target, settings);                                                                        // 2173
      }                                                                                                                // 2174
                                                                                                                       // 2175
      return dropdown;                                                                                                 // 2176
    },                                                                                                                 // 2177
                                                                                                                       // 2178
    style : function (dropdown, target, settings) {                                                                    // 2179
      var css = $.extend({position: 'absolute'},                                                                       // 2180
        this.dirs[settings.align].call(dropdown, target, settings));                                                   // 2181
                                                                                                                       // 2182
      dropdown.attr('style', '').css(css);                                                                             // 2183
    },                                                                                                                 // 2184
                                                                                                                       // 2185
    // return CSS property object                                                                                      // 2186
    // `this` is the dropdown                                                                                          // 2187
    dirs : {                                                                                                           // 2188
      // Calculate target offset                                                                                       // 2189
      _base : function (t) {                                                                                           // 2190
        var o_p = this.offsetParent(),                                                                                 // 2191
            o = o_p.offset(),                                                                                          // 2192
            p = t.offset();                                                                                            // 2193
                                                                                                                       // 2194
        p.top -= o.top;                                                                                                // 2195
        p.left -= o.left;                                                                                              // 2196
                                                                                                                       // 2197
        //set some flags on the p object to pass along                                                                 // 2198
        p.missRight = false;                                                                                           // 2199
        p.missTop = false;                                                                                             // 2200
        p.missLeft = false;                                                                                            // 2201
        p.leftRightFlag = false;                                                                                       // 2202
                                                                                                                       // 2203
        //lets see if the panel will be off the screen                                                                 // 2204
        //get the actual width of the page and store it                                                                // 2205
        var actualBodyWidth;                                                                                           // 2206
        if (document.getElementsByClassName('row')[0]) {                                                               // 2207
          actualBodyWidth = document.getElementsByClassName('row')[0].clientWidth;                                     // 2208
        } else {                                                                                                       // 2209
          actualBodyWidth = window.outerWidth;                                                                         // 2210
        }                                                                                                              // 2211
                                                                                                                       // 2212
        var actualMarginWidth = (window.outerWidth - actualBodyWidth) / 2;                                             // 2213
        var actualBoundary = actualBodyWidth;                                                                          // 2214
                                                                                                                       // 2215
        if (!this.hasClass('mega')) {                                                                                  // 2216
          //miss top                                                                                                   // 2217
          if (t.offset().top <= this.outerHeight()) {                                                                  // 2218
            p.missTop = true;                                                                                          // 2219
            actualBoundary = window.outerWidth - actualMarginWidth;                                                    // 2220
            p.leftRightFlag = true;                                                                                    // 2221
          }                                                                                                            // 2222
                                                                                                                       // 2223
          //miss right                                                                                                 // 2224
          if (t.offset().left + this.outerWidth() > t.offset().left + actualMarginWidth && t.offset().left - actualMarginWidth > this.outerWidth()) {
            p.missRight = true;                                                                                        // 2226
            p.missLeft = false;                                                                                        // 2227
          }                                                                                                            // 2228
                                                                                                                       // 2229
          //miss left                                                                                                  // 2230
          if (t.offset().left - this.outerWidth() <= 0) {                                                              // 2231
            p.missLeft = true;                                                                                         // 2232
            p.missRight = false;                                                                                       // 2233
          }                                                                                                            // 2234
        }                                                                                                              // 2235
                                                                                                                       // 2236
        return p;                                                                                                      // 2237
      },                                                                                                               // 2238
                                                                                                                       // 2239
      top: function (t, s) {                                                                                           // 2240
        var self = Foundation.libs.dropdown,                                                                           // 2241
            p = self.dirs._base.call(this, t);                                                                         // 2242
                                                                                                                       // 2243
        this.addClass('drop-top');                                                                                     // 2244
                                                                                                                       // 2245
        if (p.missTop == true) {                                                                                       // 2246
          p.top = p.top + t.outerHeight() + this.outerHeight();                                                        // 2247
          this.removeClass('drop-top');                                                                                // 2248
        }                                                                                                              // 2249
                                                                                                                       // 2250
        if (p.missRight == true) {                                                                                     // 2251
          p.left = p.left - this.outerWidth() + t.outerWidth();                                                        // 2252
        }                                                                                                              // 2253
                                                                                                                       // 2254
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2255
          self.adjust_pip(this,t,s,p);                                                                                 // 2256
        }                                                                                                              // 2257
                                                                                                                       // 2258
        if (Foundation.rtl) {                                                                                          // 2259
          return {left: p.left - this.outerWidth() + t.outerWidth(),                                                   // 2260
            top: p.top - this.outerHeight()};                                                                          // 2261
        }                                                                                                              // 2262
                                                                                                                       // 2263
        return {left: p.left, top: p.top - this.outerHeight()};                                                        // 2264
      },                                                                                                               // 2265
                                                                                                                       // 2266
      bottom: function (t,s) {                                                                                         // 2267
        var self = Foundation.libs.dropdown,                                                                           // 2268
            p = self.dirs._base.call(this, t);                                                                         // 2269
                                                                                                                       // 2270
        if (p.missRight == true) {                                                                                     // 2271
          p.left = p.left - this.outerWidth() + t.outerWidth();                                                        // 2272
        }                                                                                                              // 2273
                                                                                                                       // 2274
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2275
          self.adjust_pip(this,t,s,p);                                                                                 // 2276
        }                                                                                                              // 2277
                                                                                                                       // 2278
        if (self.rtl) {                                                                                                // 2279
          return {left: p.left - this.outerWidth() + t.outerWidth(), top: p.top + t.outerHeight()};                    // 2280
        }                                                                                                              // 2281
                                                                                                                       // 2282
        return {left: p.left, top: p.top + t.outerHeight()};                                                           // 2283
      },                                                                                                               // 2284
                                                                                                                       // 2285
      left: function (t, s) {                                                                                          // 2286
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);                                                     // 2287
                                                                                                                       // 2288
        this.addClass('drop-left');                                                                                    // 2289
                                                                                                                       // 2290
        if (p.missLeft == true) {                                                                                      // 2291
          p.left =  p.left + this.outerWidth();                                                                        // 2292
          p.top = p.top + t.outerHeight();                                                                             // 2293
          this.removeClass('drop-left');                                                                               // 2294
        }                                                                                                              // 2295
                                                                                                                       // 2296
        return {left: p.left - this.outerWidth(), top: p.top};                                                         // 2297
      },                                                                                                               // 2298
                                                                                                                       // 2299
      right: function (t, s) {                                                                                         // 2300
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);                                                     // 2301
                                                                                                                       // 2302
        this.addClass('drop-right');                                                                                   // 2303
                                                                                                                       // 2304
        if (p.missRight == true) {                                                                                     // 2305
          p.left = p.left - this.outerWidth();                                                                         // 2306
          p.top = p.top + t.outerHeight();                                                                             // 2307
          this.removeClass('drop-right');                                                                              // 2308
        } else {                                                                                                       // 2309
          p.triggeredRight = true;                                                                                     // 2310
        }                                                                                                              // 2311
                                                                                                                       // 2312
        var self = Foundation.libs.dropdown;                                                                           // 2313
                                                                                                                       // 2314
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2315
          self.adjust_pip(this,t,s,p);                                                                                 // 2316
        }                                                                                                              // 2317
                                                                                                                       // 2318
        return {left: p.left + t.outerWidth(), top: p.top};                                                            // 2319
      }                                                                                                                // 2320
    },                                                                                                                 // 2321
                                                                                                                       // 2322
    // Insert rule to style psuedo elements                                                                            // 2323
    adjust_pip : function (dropdown,target,settings,position) {                                                        // 2324
      var sheet = Foundation.stylesheet,                                                                               // 2325
          pip_offset_base = 8;                                                                                         // 2326
                                                                                                                       // 2327
      if (dropdown.hasClass(settings.mega_class)) {                                                                    // 2328
        pip_offset_base = position.left + (target.outerWidth()/2) - 8;                                                 // 2329
      }                                                                                                                // 2330
      else if (this.small()) {                                                                                         // 2331
        pip_offset_base += position.left - 8;                                                                          // 2332
      }                                                                                                                // 2333
                                                                                                                       // 2334
      this.rule_idx = sheet.cssRules.length;                                                                           // 2335
                                                                                                                       // 2336
      //default                                                                                                        // 2337
      var sel_before = '.f-dropdown.open:before',                                                                      // 2338
          sel_after  = '.f-dropdown.open:after',                                                                       // 2339
          css_before = 'left: ' + pip_offset_base + 'px;',                                                             // 2340
          css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';                                                       // 2341
                                                                                                                       // 2342
      if (position.missRight == true) {                                                                                // 2343
        pip_offset_base = dropdown.outerWidth() - 23;                                                                  // 2344
        sel_before = '.f-dropdown.open:before',                                                                        // 2345
        sel_after  = '.f-dropdown.open:after',                                                                         // 2346
        css_before = 'left: ' + pip_offset_base + 'px;',                                                               // 2347
        css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';                                                         // 2348
      }                                                                                                                // 2349
                                                                                                                       // 2350
      //just a case where right is fired, but its not missing right                                                    // 2351
      if (position.triggeredRight == true) {                                                                           // 2352
        sel_before = '.f-dropdown.open:before',                                                                        // 2353
        sel_after  = '.f-dropdown.open:after',                                                                         // 2354
        css_before = 'left:-12px;',                                                                                    // 2355
        css_after  = 'left:-14px;';                                                                                    // 2356
      }                                                                                                                // 2357
                                                                                                                       // 2358
      if (sheet.insertRule) {                                                                                          // 2359
        sheet.insertRule([sel_before, '{', css_before, '}'].join(' '), this.rule_idx);                                 // 2360
        sheet.insertRule([sel_after, '{', css_after, '}'].join(' '), this.rule_idx + 1);                               // 2361
      } else {                                                                                                         // 2362
        sheet.addRule(sel_before, css_before, this.rule_idx);                                                          // 2363
        sheet.addRule(sel_after, css_after, this.rule_idx + 1);                                                        // 2364
      }                                                                                                                // 2365
    },                                                                                                                 // 2366
                                                                                                                       // 2367
    // Remove old dropdown rule index                                                                                  // 2368
    clear_idx : function () {                                                                                          // 2369
      var sheet = Foundation.stylesheet;                                                                               // 2370
                                                                                                                       // 2371
      if (typeof this.rule_idx !== 'undefined') {                                                                      // 2372
        sheet.deleteRule(this.rule_idx);                                                                               // 2373
        sheet.deleteRule(this.rule_idx);                                                                               // 2374
        delete this.rule_idx;                                                                                          // 2375
      }                                                                                                                // 2376
    },                                                                                                                 // 2377
                                                                                                                       // 2378
    small : function () {                                                                                              // 2379
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 2380
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 2381
    },                                                                                                                 // 2382
                                                                                                                       // 2383
    off: function () {                                                                                                 // 2384
      this.S(this.scope).off('.fndtn.dropdown');                                                                       // 2385
      this.S('html, body').off('.fndtn.dropdown');                                                                     // 2386
      this.S(window).off('.fndtn.dropdown');                                                                           // 2387
      this.S('[data-dropdown-content]').off('.fndtn.dropdown');                                                        // 2388
    },                                                                                                                 // 2389
                                                                                                                       // 2390
    reflow : function () {}                                                                                            // 2391
  };                                                                                                                   // 2392
}(jQuery, window, window.document));                                                                                   // 2393
;(function ($, window, document, undefined) {                                                                          // 2394
  'use strict';                                                                                                        // 2395
                                                                                                                       // 2396
  Foundation.libs.clearing = {                                                                                         // 2397
    name : 'clearing',                                                                                                 // 2398
                                                                                                                       // 2399
    version: '5.5.0',                                                                                                  // 2400
                                                                                                                       // 2401
    settings : {                                                                                                       // 2402
      templates : {                                                                                                    // 2403
        viewing : '<a href="#" class="clearing-close">&times;</a>' +                                                   // 2404
          '<div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />' +
          '<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>' +                 // 2406
          '<a href="#" class="clearing-main-next"><span></span></a></div>'                                             // 2407
      },                                                                                                               // 2408
                                                                                                                       // 2409
      // comma delimited list of selectors that, on click, will close clearing,                                        // 2410
      // add 'div.clearing-blackout, div.visible-img' to close on background click                                     // 2411
      close_selectors : '.clearing-close, div.clearing-blackout',                                                      // 2412
                                                                                                                       // 2413
      // Default to the entire li element.                                                                             // 2414
      open_selectors : '',                                                                                             // 2415
                                                                                                                       // 2416
      // Image will be skipped in carousel.                                                                            // 2417
      skip_selector : '',                                                                                              // 2418
                                                                                                                       // 2419
      touch_label : '',                                                                                                // 2420
                                                                                                                       // 2421
      // event initializers and locks                                                                                  // 2422
      init : false,                                                                                                    // 2423
      locked : false                                                                                                   // 2424
    },                                                                                                                 // 2425
                                                                                                                       // 2426
    init : function (scope, method, options) {                                                                         // 2427
      var self = this;                                                                                                 // 2428
      Foundation.inherit(this, 'throttle image_loaded');                                                               // 2429
                                                                                                                       // 2430
      this.bindings(method, options);                                                                                  // 2431
                                                                                                                       // 2432
      if (self.S(this.scope).is('[' + this.attr_name() + ']')) {                                                       // 2433
        this.assemble(self.S('li', this.scope));                                                                       // 2434
      } else {                                                                                                         // 2435
        self.S('[' + this.attr_name() + ']', this.scope).each(function () {                                            // 2436
          self.assemble(self.S('li', this));                                                                           // 2437
        });                                                                                                            // 2438
      }                                                                                                                // 2439
    },                                                                                                                 // 2440
                                                                                                                       // 2441
    events : function (scope) {                                                                                        // 2442
      var self = this,                                                                                                 // 2443
          S = self.S,                                                                                                  // 2444
          $scroll_container = $('.scroll-container');                                                                  // 2445
                                                                                                                       // 2446
      if ($scroll_container.length > 0) {                                                                              // 2447
        this.scope = $scroll_container;                                                                                // 2448
      }                                                                                                                // 2449
                                                                                                                       // 2450
      S(this.scope)                                                                                                    // 2451
        .off('.clearing')                                                                                              // 2452
        .on('click.fndtn.clearing', 'ul[' + this.attr_name() + '] li ' + this.settings.open_selectors,                 // 2453
          function (e, current, target) {                                                                              // 2454
            var current = current || S(this),                                                                          // 2455
                target = target || current,                                                                            // 2456
                next = current.next('li'),                                                                             // 2457
                settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init'),         // 2458
                image = S(e.target);                                                                                   // 2459
                                                                                                                       // 2460
            e.preventDefault();                                                                                        // 2461
                                                                                                                       // 2462
            if (!settings) {                                                                                           // 2463
              self.init();                                                                                             // 2464
              settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');           // 2465
            }                                                                                                          // 2466
                                                                                                                       // 2467
            // if clearing is open and the current image is                                                            // 2468
            // clicked, go to the next image in sequence                                                               // 2469
            if (target.hasClass('visible') &&                                                                          // 2470
              current[0] === target[0] &&                                                                              // 2471
              next.length > 0 && self.is_open(current)) {                                                              // 2472
              target = next;                                                                                           // 2473
              image = S('img', target);                                                                                // 2474
            }                                                                                                          // 2475
                                                                                                                       // 2476
            // set current and target to the clicked li if not otherwise defined.                                      // 2477
            self.open(image, current, target);                                                                         // 2478
            self.update_paddles(target);                                                                               // 2479
          })                                                                                                           // 2480
                                                                                                                       // 2481
        .on('click.fndtn.clearing', '.clearing-main-next',                                                             // 2482
          function (e) { self.nav(e, 'next') })                                                                        // 2483
        .on('click.fndtn.clearing', '.clearing-main-prev',                                                             // 2484
          function (e) { self.nav(e, 'prev') })                                                                        // 2485
        .on('click.fndtn.clearing', this.settings.close_selectors,                                                     // 2486
          function (e) { Foundation.libs.clearing.close(e, this) });                                                   // 2487
                                                                                                                       // 2488
      $(document).on('keydown.fndtn.clearing',                                                                         // 2489
          function (e) { self.keydown(e) });                                                                           // 2490
                                                                                                                       // 2491
      S(window).off('.clearing').on('resize.fndtn.clearing',                                                           // 2492
        function () { self.resize() });                                                                                // 2493
                                                                                                                       // 2494
      this.swipe_events(scope);                                                                                        // 2495
    },                                                                                                                 // 2496
                                                                                                                       // 2497
    swipe_events : function (scope) {                                                                                  // 2498
      var self = this,                                                                                                 // 2499
      S = self.S;                                                                                                      // 2500
                                                                                                                       // 2501
      S(this.scope)                                                                                                    // 2502
        .on('touchstart.fndtn.clearing', '.visible-img', function(e) {                                                 // 2503
          if (!e.touches) { e = e.originalEvent; }                                                                     // 2504
          var data = {                                                                                                 // 2505
                start_page_x: e.touches[0].pageX,                                                                      // 2506
                start_page_y: e.touches[0].pageY,                                                                      // 2507
                start_time: (new Date()).getTime(),                                                                    // 2508
                delta_x: 0,                                                                                            // 2509
                is_scrolling: undefined                                                                                // 2510
              };                                                                                                       // 2511
                                                                                                                       // 2512
          S(this).data('swipe-transition', data);                                                                      // 2513
          e.stopPropagation();                                                                                         // 2514
        })                                                                                                             // 2515
        .on('touchmove.fndtn.clearing', '.visible-img', function(e) {                                                  // 2516
          if (!e.touches) { e = e.originalEvent; }                                                                     // 2517
          // Ignore pinch/zoom events                                                                                  // 2518
          if(e.touches.length > 1 || e.scale && e.scale !== 1) return;                                                 // 2519
                                                                                                                       // 2520
          var data = S(this).data('swipe-transition');                                                                 // 2521
                                                                                                                       // 2522
          if (typeof data === 'undefined') {                                                                           // 2523
            data = {};                                                                                                 // 2524
          }                                                                                                            // 2525
                                                                                                                       // 2526
          data.delta_x = e.touches[0].pageX - data.start_page_x;                                                       // 2527
                                                                                                                       // 2528
          if (Foundation.rtl) {                                                                                        // 2529
            data.delta_x = -data.delta_x;                                                                              // 2530
          }                                                                                                            // 2531
                                                                                                                       // 2532
          if (typeof data.is_scrolling === 'undefined') {                                                              // 2533
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }                                                                                                            // 2535
                                                                                                                       // 2536
          if (!data.is_scrolling && !data.active) {                                                                    // 2537
            e.preventDefault();                                                                                        // 2538
            var direction = (data.delta_x < 0) ? 'next' : 'prev';                                                      // 2539
            data.active = true;                                                                                        // 2540
            self.nav(e, direction);                                                                                    // 2541
          }                                                                                                            // 2542
        })                                                                                                             // 2543
        .on('touchend.fndtn.clearing', '.visible-img', function(e) {                                                   // 2544
          S(this).data('swipe-transition', {});                                                                        // 2545
          e.stopPropagation();                                                                                         // 2546
        });                                                                                                            // 2547
    },                                                                                                                 // 2548
                                                                                                                       // 2549
    assemble : function ($li) {                                                                                        // 2550
      var $el = $li.parent();                                                                                          // 2551
                                                                                                                       // 2552
      if ($el.parent().hasClass('carousel')) {                                                                         // 2553
        return;                                                                                                        // 2554
      }                                                                                                                // 2555
                                                                                                                       // 2556
      $el.after('<div id="foundationClearingHolder"></div>');                                                          // 2557
                                                                                                                       // 2558
      var grid = $el.detach(),                                                                                         // 2559
          grid_outerHTML = '';                                                                                         // 2560
                                                                                                                       // 2561
      if (grid[0] == null) {                                                                                           // 2562
        return;                                                                                                        // 2563
      } else {                                                                                                         // 2564
        grid_outerHTML = grid[0].outerHTML;                                                                            // 2565
      }                                                                                                                // 2566
                                                                                                                       // 2567
      var holder = this.S('#foundationClearingHolder'),                                                                // 2568
          settings = $el.data(this.attr_name(true) + '-init'),                                                         // 2569
          data = {                                                                                                     // 2570
            grid: '<div class="carousel">' + grid_outerHTML + '</div>',                                                // 2571
            viewing: settings.templates.viewing                                                                        // 2572
          },                                                                                                           // 2573
          wrapper = '<div class="clearing-assembled"><div>' + data.viewing +                                           // 2574
            data.grid + '</div></div>',                                                                                // 2575
          touch_label = this.settings.touch_label;                                                                     // 2576
                                                                                                                       // 2577
      if (Modernizr.touch) {                                                                                           // 2578
        wrapper = $(wrapper).find('.clearing-touch-label').html(touch_label).end();                                    // 2579
      }                                                                                                                // 2580
                                                                                                                       // 2581
      holder.after(wrapper).remove();                                                                                  // 2582
    },                                                                                                                 // 2583
                                                                                                                       // 2584
    open : function ($image, current, target) {                                                                        // 2585
      var self = this,                                                                                                 // 2586
          body = $(document.body),                                                                                     // 2587
          root = target.closest('.clearing-assembled'),                                                                // 2588
          container = self.S('div', root).first(),                                                                     // 2589
          visible_image = self.S('.visible-img', container),                                                           // 2590
          image = self.S('img', visible_image).not($image),                                                            // 2591
          label = self.S('.clearing-touch-label', container),                                                          // 2592
          error = false;                                                                                               // 2593
                                                                                                                       // 2594
      // Event to disable scrolling on touch devices when Clearing is activated                                        // 2595
      $('body').on('touchmove',function(e){                                                                            // 2596
        e.preventDefault();                                                                                            // 2597
      });                                                                                                              // 2598
                                                                                                                       // 2599
      image.error(function () {                                                                                        // 2600
        error = true;                                                                                                  // 2601
      });                                                                                                              // 2602
                                                                                                                       // 2603
      function startLoad() {                                                                                           // 2604
        setTimeout(function () {                                                                                       // 2605
          this.image_loaded(image, function () {                                                                       // 2606
            if (image.outerWidth() === 1 && !error) {                                                                  // 2607
              startLoad.call(this);                                                                                    // 2608
            } else {                                                                                                   // 2609
              cb.call(this, image);                                                                                    // 2610
            }                                                                                                          // 2611
          }.bind(this));                                                                                               // 2612
        }.bind(this), 100);                                                                                            // 2613
      }                                                                                                                // 2614
                                                                                                                       // 2615
      function cb (image) {                                                                                            // 2616
        var $image = $(image);                                                                                         // 2617
        $image.css('visibility', 'visible');                                                                           // 2618
        // toggle the gallery                                                                                          // 2619
        body.css('overflow', 'hidden');                                                                                // 2620
        root.addClass('clearing-blackout');                                                                            // 2621
        container.addClass('clearing-container');                                                                      // 2622
        visible_image.show();                                                                                          // 2623
        this.fix_height(target)                                                                                        // 2624
          .caption(self.S('.clearing-caption', visible_image), self.S('img', target))                                  // 2625
          .center_and_label(image, label)                                                                              // 2626
          .shift(current, target, function () {                                                                        // 2627
            target.closest('li').siblings().removeClass('visible');                                                    // 2628
            target.closest('li').addClass('visible');                                                                  // 2629
          });                                                                                                          // 2630
        visible_image.trigger('opened.fndtn.clearing')                                                                 // 2631
      }                                                                                                                // 2632
                                                                                                                       // 2633
      if (!this.locked()) {                                                                                            // 2634
        visible_image.trigger('open.fndtn.clearing');                                                                  // 2635
        // set the image to the selected thumbnail                                                                     // 2636
        image                                                                                                          // 2637
          .attr('src', this.load($image))                                                                              // 2638
          .css('visibility', 'hidden');                                                                                // 2639
                                                                                                                       // 2640
        startLoad.call(this);                                                                                          // 2641
      }                                                                                                                // 2642
    },                                                                                                                 // 2643
                                                                                                                       // 2644
    close : function (e, el) {                                                                                         // 2645
      e.preventDefault();                                                                                              // 2646
                                                                                                                       // 2647
      var root = (function (target) {                                                                                  // 2648
            if (/blackout/.test(target.selector)) {                                                                    // 2649
              return target;                                                                                           // 2650
            } else {                                                                                                   // 2651
              return target.closest('.clearing-blackout');                                                             // 2652
            }                                                                                                          // 2653
          }($(el))),                                                                                                   // 2654
          body = $(document.body), container, visible_image;                                                           // 2655
                                                                                                                       // 2656
      if (el === e.target && root) {                                                                                   // 2657
        body.css('overflow', '');                                                                                      // 2658
        container = $('div', root).first();                                                                            // 2659
        visible_image = $('.visible-img', container);                                                                  // 2660
        visible_image.trigger('close.fndtn.clearing');                                                                 // 2661
        this.settings.prev_index = 0;                                                                                  // 2662
        $('ul[' + this.attr_name() + ']', root)                                                                        // 2663
          .attr('style', '').closest('.clearing-blackout')                                                             // 2664
          .removeClass('clearing-blackout');                                                                           // 2665
        container.removeClass('clearing-container');                                                                   // 2666
        visible_image.hide();                                                                                          // 2667
        visible_image.trigger('closed.fndtn.clearing');                                                                // 2668
      }                                                                                                                // 2669
                                                                                                                       // 2670
      // Event to re-enable scrolling on touch devices                                                                 // 2671
      $('body').off('touchmove');                                                                                      // 2672
                                                                                                                       // 2673
      return false;                                                                                                    // 2674
    },                                                                                                                 // 2675
                                                                                                                       // 2676
    is_open : function (current) {                                                                                     // 2677
      return current.parent().prop('style').length > 0;                                                                // 2678
    },                                                                                                                 // 2679
                                                                                                                       // 2680
    keydown : function (e) {                                                                                           // 2681
      var clearing = $('.clearing-blackout ul[' + this.attr_name() + ']'),                                             // 2682
          NEXT_KEY = this.rtl ? 37 : 39,                                                                               // 2683
          PREV_KEY = this.rtl ? 39 : 37,                                                                               // 2684
          ESC_KEY = 27;                                                                                                // 2685
                                                                                                                       // 2686
      if (e.which === NEXT_KEY) this.go(clearing, 'next');                                                             // 2687
      if (e.which === PREV_KEY) this.go(clearing, 'prev');                                                             // 2688
      if (e.which === ESC_KEY) this.S('a.clearing-close').trigger('click').trigger('click.fndtn.clearing');            // 2689
    },                                                                                                                 // 2690
                                                                                                                       // 2691
    nav : function (e, direction) {                                                                                    // 2692
      var clearing = $('ul[' + this.attr_name() + ']', '.clearing-blackout');                                          // 2693
                                                                                                                       // 2694
      e.preventDefault();                                                                                              // 2695
      this.go(clearing, direction);                                                                                    // 2696
    },                                                                                                                 // 2697
                                                                                                                       // 2698
    resize : function () {                                                                                             // 2699
      var image = $('img', '.clearing-blackout .visible-img'),                                                         // 2700
          label = $('.clearing-touch-label', '.clearing-blackout');                                                    // 2701
                                                                                                                       // 2702
      if (image.length) {                                                                                              // 2703
        this.center_and_label(image, label);                                                                           // 2704
        image.trigger('resized.fndtn.clearing')                                                                        // 2705
      }                                                                                                                // 2706
    },                                                                                                                 // 2707
                                                                                                                       // 2708
    // visual adjustments                                                                                              // 2709
    fix_height : function (target) {                                                                                   // 2710
      var lis = target.parent().children(),                                                                            // 2711
          self = this;                                                                                                 // 2712
                                                                                                                       // 2713
      lis.each(function () {                                                                                           // 2714
        var li = self.S(this),                                                                                         // 2715
            image = li.find('img');                                                                                    // 2716
                                                                                                                       // 2717
        if (li.height() > image.outerHeight()) {                                                                       // 2718
          li.addClass('fix-height');                                                                                   // 2719
        }                                                                                                              // 2720
      })                                                                                                               // 2721
      .closest('ul')                                                                                                   // 2722
      .width(lis.length * 100 + '%');                                                                                  // 2723
                                                                                                                       // 2724
      return this;                                                                                                     // 2725
    },                                                                                                                 // 2726
                                                                                                                       // 2727
    update_paddles : function (target) {                                                                               // 2728
      target = target.closest('li');                                                                                   // 2729
      var visible_image = target                                                                                       // 2730
        .closest('.carousel')                                                                                          // 2731
        .siblings('.visible-img');                                                                                     // 2732
                                                                                                                       // 2733
      if (target.next().length > 0) {                                                                                  // 2734
        this.S('.clearing-main-next', visible_image).removeClass('disabled');                                          // 2735
      } else {                                                                                                         // 2736
        this.S('.clearing-main-next', visible_image).addClass('disabled');                                             // 2737
      }                                                                                                                // 2738
                                                                                                                       // 2739
      if (target.prev().length > 0) {                                                                                  // 2740
        this.S('.clearing-main-prev', visible_image).removeClass('disabled');                                          // 2741
      } else {                                                                                                         // 2742
        this.S('.clearing-main-prev', visible_image).addClass('disabled');                                             // 2743
      }                                                                                                                // 2744
    },                                                                                                                 // 2745
                                                                                                                       // 2746
    center_and_label : function (target, label) {                                                                      // 2747
      if (!this.rtl) {                                                                                                 // 2748
        target.css({                                                                                                   // 2749
          marginLeft : -(target.outerWidth() / 2),                                                                     // 2750
          marginTop : -(target.outerHeight() / 2)                                                                      // 2751
        });                                                                                                            // 2752
                                                                                                                       // 2753
        if (label.length > 0) {                                                                                        // 2754
          label.css({                                                                                                  // 2755
            marginLeft : -(label.outerWidth() / 2),                                                                    // 2756
            marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10                                             // 2757
          });                                                                                                          // 2758
        }                                                                                                              // 2759
      } else {                                                                                                         // 2760
        target.css({                                                                                                   // 2761
          marginRight : -(target.outerWidth() / 2),                                                                    // 2762
          marginTop : -(target.outerHeight() / 2),                                                                     // 2763
          left: 'auto',                                                                                                // 2764
          right: '50%'                                                                                                 // 2765
        });                                                                                                            // 2766
                                                                                                                       // 2767
        if (label.length > 0) {                                                                                        // 2768
          label.css({                                                                                                  // 2769
            marginRight : -(label.outerWidth() / 2),                                                                   // 2770
            marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10,                                            // 2771
            left: 'auto',                                                                                              // 2772
            right: '50%'                                                                                               // 2773
          });                                                                                                          // 2774
        }                                                                                                              // 2775
      }                                                                                                                // 2776
      return this;                                                                                                     // 2777
    },                                                                                                                 // 2778
                                                                                                                       // 2779
    // image loading and preloading                                                                                    // 2780
                                                                                                                       // 2781
    load : function ($image) {                                                                                         // 2782
      var href;                                                                                                        // 2783
                                                                                                                       // 2784
      if ($image[0].nodeName === 'A') {                                                                                // 2785
        href = $image.attr('href');                                                                                    // 2786
      } else {                                                                                                         // 2787
        href = $image.closest('a').attr('href');                                                                       // 2788
      }                                                                                                                // 2789
                                                                                                                       // 2790
      this.preload($image);                                                                                            // 2791
                                                                                                                       // 2792
      if (href) return href;                                                                                           // 2793
      return $image.attr('src');                                                                                       // 2794
    },                                                                                                                 // 2795
                                                                                                                       // 2796
    preload : function ($image) {                                                                                      // 2797
      this                                                                                                             // 2798
        .img($image.closest('li').next())                                                                              // 2799
        .img($image.closest('li').prev());                                                                             // 2800
    },                                                                                                                 // 2801
                                                                                                                       // 2802
    img : function (img) {                                                                                             // 2803
      if (img.length) {                                                                                                // 2804
        var new_img = new Image(),                                                                                     // 2805
            new_a = this.S('a', img);                                                                                  // 2806
                                                                                                                       // 2807
        if (new_a.length) {                                                                                            // 2808
          new_img.src = new_a.attr('href');                                                                            // 2809
        } else {                                                                                                       // 2810
          new_img.src = this.S('img', img).attr('src');                                                                // 2811
        }                                                                                                              // 2812
      }                                                                                                                // 2813
      return this;                                                                                                     // 2814
    },                                                                                                                 // 2815
                                                                                                                       // 2816
    // image caption                                                                                                   // 2817
                                                                                                                       // 2818
    caption : function (container, $image) {                                                                           // 2819
      var caption = $image.attr('data-caption');                                                                       // 2820
                                                                                                                       // 2821
      if (caption) {                                                                                                   // 2822
        container                                                                                                      // 2823
          .html(caption)                                                                                               // 2824
          .show();                                                                                                     // 2825
      } else {                                                                                                         // 2826
        container                                                                                                      // 2827
          .text('')                                                                                                    // 2828
          .hide();                                                                                                     // 2829
      }                                                                                                                // 2830
      return this;                                                                                                     // 2831
    },                                                                                                                 // 2832
                                                                                                                       // 2833
    // directional methods                                                                                             // 2834
                                                                                                                       // 2835
    go : function ($ul, direction) {                                                                                   // 2836
      var current = this.S('.visible', $ul),                                                                           // 2837
          target = current[direction]();                                                                               // 2838
                                                                                                                       // 2839
      // Check for skip selector.                                                                                      // 2840
      if (this.settings.skip_selector && target.find(this.settings.skip_selector).length != 0) {                       // 2841
        target = target[direction]();                                                                                  // 2842
      }                                                                                                                // 2843
                                                                                                                       // 2844
      if (target.length) {                                                                                             // 2845
        this.S('img', target)                                                                                          // 2846
          .trigger('click', [current, target]).trigger('click.fndtn.clearing', [current, target])                      // 2847
          .trigger('change.fndtn.clearing');                                                                           // 2848
      }                                                                                                                // 2849
    },                                                                                                                 // 2850
                                                                                                                       // 2851
    shift : function (current, target, callback) {                                                                     // 2852
      var clearing = target.parent(),                                                                                  // 2853
          old_index = this.settings.prev_index || target.index(),                                                      // 2854
          direction = this.direction(clearing, current, target),                                                       // 2855
          dir = this.rtl ? 'right' : 'left',                                                                           // 2856
          left = parseInt(clearing.css('left'), 10),                                                                   // 2857
          width = target.outerWidth(),                                                                                 // 2858
          skip_shift;                                                                                                  // 2859
                                                                                                                       // 2860
      var dir_obj = {};                                                                                                // 2861
                                                                                                                       // 2862
      // we use jQuery animate instead of CSS transitions because we                                                   // 2863
      // need a callback to unlock the next animation                                                                  // 2864
      // needs support for RTL **                                                                                      // 2865
      if (target.index() !== old_index && !/skip/.test(direction)){                                                    // 2866
        if (/left/.test(direction)) {                                                                                  // 2867
          this.lock();                                                                                                 // 2868
          dir_obj[dir] = left + width;                                                                                 // 2869
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 2870
        } else if (/right/.test(direction)) {                                                                          // 2871
          this.lock();                                                                                                 // 2872
          dir_obj[dir] = left - width;                                                                                 // 2873
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 2874
        }                                                                                                              // 2875
      } else if (/skip/.test(direction)) {                                                                             // 2876
        // the target image is not adjacent to the current image, so                                                   // 2877
        // do we scroll right or not                                                                                   // 2878
        skip_shift = target.index() - this.settings.up_count;                                                          // 2879
        this.lock();                                                                                                   // 2880
                                                                                                                       // 2881
        if (skip_shift > 0) {                                                                                          // 2882
          dir_obj[dir] = -(skip_shift * width);                                                                        // 2883
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 2884
        } else {                                                                                                       // 2885
          dir_obj[dir] = 0;                                                                                            // 2886
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 2887
        }                                                                                                              // 2888
      }                                                                                                                // 2889
                                                                                                                       // 2890
      callback();                                                                                                      // 2891
    },                                                                                                                 // 2892
                                                                                                                       // 2893
    direction : function ($el, current, target) {                                                                      // 2894
      var lis = this.S('li', $el),                                                                                     // 2895
          li_width = lis.outerWidth() + (lis.outerWidth() / 4),                                                        // 2896
          up_count = Math.floor(this.S('.clearing-container').outerWidth() / li_width) - 1,                            // 2897
          target_index = lis.index(target),                                                                            // 2898
          response;                                                                                                    // 2899
                                                                                                                       // 2900
      this.settings.up_count = up_count;                                                                               // 2901
                                                                                                                       // 2902
      if (this.adjacent(this.settings.prev_index, target_index)) {                                                     // 2903
        if ((target_index > up_count) && target_index > this.settings.prev_index) {                                    // 2904
          response = 'right';                                                                                          // 2905
        } else if ((target_index > up_count - 1) && target_index <= this.settings.prev_index) {                        // 2906
          response = 'left';                                                                                           // 2907
        } else {                                                                                                       // 2908
          response = false;                                                                                            // 2909
        }                                                                                                              // 2910
      } else {                                                                                                         // 2911
        response = 'skip';                                                                                             // 2912
      }                                                                                                                // 2913
                                                                                                                       // 2914
      this.settings.prev_index = target_index;                                                                         // 2915
                                                                                                                       // 2916
      return response;                                                                                                 // 2917
    },                                                                                                                 // 2918
                                                                                                                       // 2919
    adjacent : function (current_index, target_index) {                                                                // 2920
      for (var i = target_index + 1; i >= target_index - 1; i--) {                                                     // 2921
        if (i === current_index) return true;                                                                          // 2922
      }                                                                                                                // 2923
      return false;                                                                                                    // 2924
    },                                                                                                                 // 2925
                                                                                                                       // 2926
    // lock management                                                                                                 // 2927
                                                                                                                       // 2928
    lock : function () {                                                                                               // 2929
      this.settings.locked = true;                                                                                     // 2930
    },                                                                                                                 // 2931
                                                                                                                       // 2932
    unlock : function () {                                                                                             // 2933
      this.settings.locked = false;                                                                                    // 2934
    },                                                                                                                 // 2935
                                                                                                                       // 2936
    locked : function () {                                                                                             // 2937
      return this.settings.locked;                                                                                     // 2938
    },                                                                                                                 // 2939
                                                                                                                       // 2940
    off : function () {                                                                                                // 2941
      this.S(this.scope).off('.fndtn.clearing');                                                                       // 2942
      this.S(window).off('.fndtn.clearing');                                                                           // 2943
    },                                                                                                                 // 2944
                                                                                                                       // 2945
    reflow : function () {                                                                                             // 2946
      this.init();                                                                                                     // 2947
    }                                                                                                                  // 2948
  };                                                                                                                   // 2949
                                                                                                                       // 2950
}(jQuery, window, window.document));                                                                                   // 2951
;(function ($, window, document, undefined) {                                                                          // 2952
  'use strict';                                                                                                        // 2953
                                                                                                                       // 2954
  var noop = function() {};                                                                                            // 2955
                                                                                                                       // 2956
  var Orbit = function(el, settings) {                                                                                 // 2957
    // Don't reinitialize plugin                                                                                       // 2958
    if (el.hasClass(settings.slides_container_class)) {                                                                // 2959
      return this;                                                                                                     // 2960
    }                                                                                                                  // 2961
                                                                                                                       // 2962
    var self = this,                                                                                                   // 2963
        container,                                                                                                     // 2964
        slides_container = el,                                                                                         // 2965
        number_container,                                                                                              // 2966
        bullets_container,                                                                                             // 2967
        timer_container,                                                                                               // 2968
        idx = 0,                                                                                                       // 2969
        animate,                                                                                                       // 2970
        timer,                                                                                                         // 2971
        locked = false,                                                                                                // 2972
        adjust_height_after = false;                                                                                   // 2973
                                                                                                                       // 2974
                                                                                                                       // 2975
    self.slides = function() {                                                                                         // 2976
      return slides_container.children(settings.slide_selector);                                                       // 2977
    };                                                                                                                 // 2978
                                                                                                                       // 2979
    self.slides().first().addClass(settings.active_slide_class);                                                       // 2980
                                                                                                                       // 2981
    self.update_slide_number = function(index) {                                                                       // 2982
      if (settings.slide_number) {                                                                                     // 2983
        number_container.find('span:first').text(parseInt(index)+1);                                                   // 2984
        number_container.find('span:last').text(self.slides().length);                                                 // 2985
      }                                                                                                                // 2986
      if (settings.bullets) {                                                                                          // 2987
        bullets_container.children().removeClass(settings.bullets_active_class);                                       // 2988
        $(bullets_container.children().get(index)).addClass(settings.bullets_active_class);                            // 2989
      }                                                                                                                // 2990
    };                                                                                                                 // 2991
                                                                                                                       // 2992
    self.update_active_link = function(index) {                                                                        // 2993
      var link = $('[data-orbit-link="'+self.slides().eq(index).attr('data-orbit-slide')+'"]');                        // 2994
      link.siblings().removeClass(settings.bullets_active_class);                                                      // 2995
      link.addClass(settings.bullets_active_class);                                                                    // 2996
    };                                                                                                                 // 2997
                                                                                                                       // 2998
    self.build_markup = function() {                                                                                   // 2999
      slides_container.wrap('<div class="'+settings.container_class+'"></div>');                                       // 3000
      container = slides_container.parent();                                                                           // 3001
      slides_container.addClass(settings.slides_container_class);                                                      // 3002
                                                                                                                       // 3003
      if (settings.stack_on_small) {                                                                                   // 3004
        container.addClass(settings.stack_on_small_class);                                                             // 3005
      }                                                                                                                // 3006
                                                                                                                       // 3007
      if (settings.navigation_arrows) {                                                                                // 3008
        container.append($('<a href="#"><span></span></a>').addClass(settings.prev_class));                            // 3009
        container.append($('<a href="#"><span></span></a>').addClass(settings.next_class));                            // 3010
      }                                                                                                                // 3011
                                                                                                                       // 3012
      if (settings.timer) {                                                                                            // 3013
        timer_container = $('<div>').addClass(settings.timer_container_class);                                         // 3014
        timer_container.append('<span>');                                                                              // 3015
        timer_container.append($('<div>').addClass(settings.timer_progress_class));                                    // 3016
        timer_container.addClass(settings.timer_paused_class);                                                         // 3017
        container.append(timer_container);                                                                             // 3018
      }                                                                                                                // 3019
                                                                                                                       // 3020
      if (settings.slide_number) {                                                                                     // 3021
        number_container = $('<div>').addClass(settings.slide_number_class);                                           // 3022
        number_container.append('<span></span> ' + settings.slide_number_text + ' <span></span>');                     // 3023
        container.append(number_container);                                                                            // 3024
      }                                                                                                                // 3025
                                                                                                                       // 3026
      if (settings.bullets) {                                                                                          // 3027
        bullets_container = $('<ol>').addClass(settings.bullets_container_class);                                      // 3028
        container.append(bullets_container);                                                                           // 3029
        bullets_container.wrap('<div class="orbit-bullets-container"></div>');                                         // 3030
        self.slides().each(function(idx, el) {                                                                         // 3031
          var bullet = $('<li>').attr('data-orbit-slide', idx).on('click', self.link_bullet);;                         // 3032
          bullets_container.append(bullet);                                                                            // 3033
        });                                                                                                            // 3034
      }                                                                                                                // 3035
                                                                                                                       // 3036
    };                                                                                                                 // 3037
                                                                                                                       // 3038
    self._goto = function(next_idx, start_timer) {                                                                     // 3039
      // if (locked) {return false;}                                                                                   // 3040
      if (next_idx === idx) {return false;}                                                                            // 3041
      if (typeof timer === 'object') {timer.restart();}                                                                // 3042
      var slides = self.slides();                                                                                      // 3043
                                                                                                                       // 3044
      var dir = 'next';                                                                                                // 3045
      locked = true;                                                                                                   // 3046
      if (next_idx < idx) {dir = 'prev';}                                                                              // 3047
      if (next_idx >= slides.length) {                                                                                 // 3048
        if (!settings.circular) return false;                                                                          // 3049
        next_idx = 0;                                                                                                  // 3050
      } else if (next_idx < 0) {                                                                                       // 3051
        if (!settings.circular) return false;                                                                          // 3052
        next_idx = slides.length - 1;                                                                                  // 3053
      }                                                                                                                // 3054
                                                                                                                       // 3055
      var current = $(slides.get(idx));                                                                                // 3056
      var next = $(slides.get(next_idx));                                                                              // 3057
                                                                                                                       // 3058
      current.css('zIndex', 2);                                                                                        // 3059
      current.removeClass(settings.active_slide_class);                                                                // 3060
      next.css('zIndex', 4).addClass(settings.active_slide_class);                                                     // 3061
                                                                                                                       // 3062
      slides_container.trigger('before-slide-change.fndtn.orbit');                                                     // 3063
      settings.before_slide_change();                                                                                  // 3064
      self.update_active_link(next_idx);                                                                               // 3065
                                                                                                                       // 3066
      var callback = function() {                                                                                      // 3067
        var unlock = function() {                                                                                      // 3068
          idx = next_idx;                                                                                              // 3069
          locked = false;                                                                                              // 3070
          if (start_timer === true) {timer = self.create_timer(); timer.start();}                                      // 3071
          self.update_slide_number(idx);                                                                               // 3072
          slides_container.trigger('after-slide-change.fndtn.orbit',[{slide_number: idx, total_slides: slides.length}]);
          settings.after_slide_change(idx, slides.length);                                                             // 3074
        };                                                                                                             // 3075
        if (slides_container.height() != next.height() && settings.variable_height) {                                  // 3076
          slides_container.animate({'height': next.height()}, 250, 'linear', unlock);                                  // 3077
        } else {                                                                                                       // 3078
          unlock();                                                                                                    // 3079
        }                                                                                                              // 3080
      };                                                                                                               // 3081
                                                                                                                       // 3082
      if (slides.length === 1) {callback(); return false;}                                                             // 3083
                                                                                                                       // 3084
      var start_animation = function() {                                                                               // 3085
        if (dir === 'next') {animate.next(current, next, callback);}                                                   // 3086
        if (dir === 'prev') {animate.prev(current, next, callback);}                                                   // 3087
      };                                                                                                               // 3088
                                                                                                                       // 3089
      if (next.height() > slides_container.height() && settings.variable_height) {                                     // 3090
        slides_container.animate({'height': next.height()}, 250, 'linear', start_animation);                           // 3091
      } else {                                                                                                         // 3092
        start_animation();                                                                                             // 3093
      }                                                                                                                // 3094
    };                                                                                                                 // 3095
                                                                                                                       // 3096
    self.next = function(e) {                                                                                          // 3097
      e.stopImmediatePropagation();                                                                                    // 3098
      e.preventDefault();                                                                                              // 3099
      self._goto(idx + 1);                                                                                             // 3100
    };                                                                                                                 // 3101
                                                                                                                       // 3102
    self.prev = function(e) {                                                                                          // 3103
      e.stopImmediatePropagation();                                                                                    // 3104
      e.preventDefault();                                                                                              // 3105
      self._goto(idx - 1);                                                                                             // 3106
    };                                                                                                                 // 3107
                                                                                                                       // 3108
    self.link_custom = function(e) {                                                                                   // 3109
      e.preventDefault();                                                                                              // 3110
      var link = $(this).attr('data-orbit-link');                                                                      // 3111
      if ((typeof link === 'string') && (link = $.trim(link)) != '') {                                                 // 3112
        var slide = container.find('[data-orbit-slide='+link+']');                                                     // 3113
        if (slide.index() != -1) {self._goto(slide.index());}                                                          // 3114
      }                                                                                                                // 3115
    };                                                                                                                 // 3116
                                                                                                                       // 3117
    self.link_bullet = function(e) {                                                                                   // 3118
      var index = $(this).attr('data-orbit-slide');                                                                    // 3119
      if ((typeof index === 'string') && (index = $.trim(index)) != '') {                                              // 3120
        if(isNaN(parseInt(index)))                                                                                     // 3121
        {                                                                                                              // 3122
          var slide = container.find('[data-orbit-slide='+index+']');                                                  // 3123
          if (slide.index() != -1) {self._goto(slide.index() + 1);}                                                    // 3124
        }                                                                                                              // 3125
        else                                                                                                           // 3126
        {                                                                                                              // 3127
          self._goto(parseInt(index));                                                                                 // 3128
        }                                                                                                              // 3129
      }                                                                                                                // 3130
                                                                                                                       // 3131
    }                                                                                                                  // 3132
                                                                                                                       // 3133
    self.timer_callback = function() {                                                                                 // 3134
      self._goto(idx + 1, true);                                                                                       // 3135
    }                                                                                                                  // 3136
                                                                                                                       // 3137
    self.compute_dimensions = function() {                                                                             // 3138
      var current = $(self.slides().get(idx));                                                                         // 3139
      var h = current.height();                                                                                        // 3140
      if (!settings.variable_height) {                                                                                 // 3141
        self.slides().each(function(){                                                                                 // 3142
          if ($(this).height() > h) { h = $(this).height(); }                                                          // 3143
        });                                                                                                            // 3144
      }                                                                                                                // 3145
      slides_container.height(h);                                                                                      // 3146
    };                                                                                                                 // 3147
                                                                                                                       // 3148
    self.create_timer = function() {                                                                                   // 3149
      var t = new Timer(                                                                                               // 3150
        container.find('.'+settings.timer_container_class),                                                            // 3151
        settings,                                                                                                      // 3152
        self.timer_callback                                                                                            // 3153
      );                                                                                                               // 3154
      return t;                                                                                                        // 3155
    };                                                                                                                 // 3156
                                                                                                                       // 3157
    self.stop_timer = function() {                                                                                     // 3158
      if (typeof timer === 'object') timer.stop();                                                                     // 3159
    };                                                                                                                 // 3160
                                                                                                                       // 3161
    self.toggle_timer = function() {                                                                                   // 3162
      var t = container.find('.'+settings.timer_container_class);                                                      // 3163
      if (t.hasClass(settings.timer_paused_class)) {                                                                   // 3164
        if (typeof timer === 'undefined') {timer = self.create_timer();}                                               // 3165
        timer.start();                                                                                                 // 3166
      }                                                                                                                // 3167
      else {                                                                                                           // 3168
        if (typeof timer === 'object') {timer.stop();}                                                                 // 3169
      }                                                                                                                // 3170
    };                                                                                                                 // 3171
                                                                                                                       // 3172
    self.init = function() {                                                                                           // 3173
      self.build_markup();                                                                                             // 3174
      if (settings.timer) {                                                                                            // 3175
        timer = self.create_timer();                                                                                   // 3176
        Foundation.utils.image_loaded(this.slides().children('img'), timer.start);                                     // 3177
      }                                                                                                                // 3178
      animate = new FadeAnimation(settings, slides_container);                                                         // 3179
      if (settings.animation === 'slide')                                                                              // 3180
        animate = new SlideAnimation(settings, slides_container);                                                      // 3181
                                                                                                                       // 3182
      container.on('click', '.'+settings.next_class, self.next);                                                       // 3183
      container.on('click', '.'+settings.prev_class, self.prev);                                                       // 3184
                                                                                                                       // 3185
      if (settings.next_on_click) {                                                                                    // 3186
        container.on('click', '.'+settings.slides_container_class+' [data-orbit-slide]', self.link_bullet);            // 3187
      }                                                                                                                // 3188
                                                                                                                       // 3189
      container.on('click', self.toggle_timer);                                                                        // 3190
      if (settings.swipe) {                                                                                            // 3191
        container.on('touchstart.fndtn.orbit', function(e) {                                                           // 3192
          if (!e.touches) {e = e.originalEvent;}                                                                       // 3193
          var data = {                                                                                                 // 3194
            start_page_x: e.touches[0].pageX,                                                                          // 3195
            start_page_y: e.touches[0].pageY,                                                                          // 3196
            start_time: (new Date()).getTime(),                                                                        // 3197
            delta_x: 0,                                                                                                // 3198
            is_scrolling: undefined                                                                                    // 3199
          };                                                                                                           // 3200
          container.data('swipe-transition', data);                                                                    // 3201
          e.stopPropagation();                                                                                         // 3202
        })                                                                                                             // 3203
        .on('touchmove.fndtn.orbit', function(e) {                                                                     // 3204
          if (!e.touches) { e = e.originalEvent; }                                                                     // 3205
          // Ignore pinch/zoom events                                                                                  // 3206
          if(e.touches.length > 1 || e.scale && e.scale !== 1) return;                                                 // 3207
                                                                                                                       // 3208
          var data = container.data('swipe-transition');                                                               // 3209
          if (typeof data === 'undefined') {data = {};}                                                                // 3210
                                                                                                                       // 3211
          data.delta_x = e.touches[0].pageX - data.start_page_x;                                                       // 3212
                                                                                                                       // 3213
          if ( typeof data.is_scrolling === 'undefined') {                                                             // 3214
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }                                                                                                            // 3216
                                                                                                                       // 3217
          if (!data.is_scrolling && !data.active) {                                                                    // 3218
            e.preventDefault();                                                                                        // 3219
            var direction = (data.delta_x < 0) ? (idx+1) : (idx-1);                                                    // 3220
            data.active = true;                                                                                        // 3221
            self._goto(direction);                                                                                     // 3222
          }                                                                                                            // 3223
        })                                                                                                             // 3224
        .on('touchend.fndtn.orbit', function(e) {                                                                      // 3225
          container.data('swipe-transition', {});                                                                      // 3226
          e.stopPropagation();                                                                                         // 3227
        })                                                                                                             // 3228
      }                                                                                                                // 3229
      container.on('mouseenter.fndtn.orbit', function(e) {                                                             // 3230
        if (settings.timer && settings.pause_on_hover) {                                                               // 3231
          self.stop_timer();                                                                                           // 3232
        }                                                                                                              // 3233
      })                                                                                                               // 3234
      .on('mouseleave.fndtn.orbit', function(e) {                                                                      // 3235
        if (settings.timer && settings.resume_on_mouseout) {                                                           // 3236
          timer.start();                                                                                               // 3237
        }                                                                                                              // 3238
      });                                                                                                              // 3239
                                                                                                                       // 3240
      $(document).on('click', '[data-orbit-link]', self.link_custom);                                                  // 3241
      $(window).on('load resize', self.compute_dimensions);                                                            // 3242
      Foundation.utils.image_loaded(this.slides().children('img'), self.compute_dimensions);                           // 3243
      Foundation.utils.image_loaded(this.slides().children('img'), function() {                                        // 3244
        container.prev('.'+settings.preloader_class).css('display', 'none');                                           // 3245
        self.update_slide_number(0);                                                                                   // 3246
        self.update_active_link(0);                                                                                    // 3247
        slides_container.trigger('ready.fndtn.orbit');                                                                 // 3248
      });                                                                                                              // 3249
    };                                                                                                                 // 3250
                                                                                                                       // 3251
    self.init();                                                                                                       // 3252
  };                                                                                                                   // 3253
                                                                                                                       // 3254
  var Timer = function(el, settings, callback) {                                                                       // 3255
    var self = this,                                                                                                   // 3256
        duration = settings.timer_speed,                                                                               // 3257
        progress = el.find('.'+settings.timer_progress_class),                                                         // 3258
        start,                                                                                                         // 3259
        timeout,                                                                                                       // 3260
        left = -1;                                                                                                     // 3261
                                                                                                                       // 3262
    this.update_progress = function(w) {                                                                               // 3263
      var new_progress = progress.clone();                                                                             // 3264
      new_progress.attr('style', '');                                                                                  // 3265
      new_progress.css('width', w+'%');                                                                                // 3266
      progress.replaceWith(new_progress);                                                                              // 3267
      progress = new_progress;                                                                                         // 3268
    };                                                                                                                 // 3269
                                                                                                                       // 3270
    this.restart = function() {                                                                                        // 3271
      clearTimeout(timeout);                                                                                           // 3272
      el.addClass(settings.timer_paused_class);                                                                        // 3273
      left = -1;                                                                                                       // 3274
      self.update_progress(0);                                                                                         // 3275
    };                                                                                                                 // 3276
                                                                                                                       // 3277
    this.start = function() {                                                                                          // 3278
      if (!el.hasClass(settings.timer_paused_class)) {return true;}                                                    // 3279
      left = (left === -1) ? duration : left;                                                                          // 3280
      el.removeClass(settings.timer_paused_class);                                                                     // 3281
      start = new Date().getTime();                                                                                    // 3282
      progress.animate({'width': '100%'}, left, 'linear');                                                             // 3283
      timeout = setTimeout(function() {                                                                                // 3284
        self.restart();                                                                                                // 3285
        callback();                                                                                                    // 3286
      }, left);                                                                                                        // 3287
      el.trigger('timer-started.fndtn.orbit')                                                                          // 3288
    };                                                                                                                 // 3289
                                                                                                                       // 3290
    this.stop = function() {                                                                                           // 3291
      if (el.hasClass(settings.timer_paused_class)) {return true;}                                                     // 3292
      clearTimeout(timeout);                                                                                           // 3293
      el.addClass(settings.timer_paused_class);                                                                        // 3294
      var end = new Date().getTime();                                                                                  // 3295
      left = left - (end - start);                                                                                     // 3296
      var w = 100 - ((left / duration) * 100);                                                                         // 3297
      self.update_progress(w);                                                                                         // 3298
      el.trigger('timer-stopped.fndtn.orbit');                                                                         // 3299
    };                                                                                                                 // 3300
  };                                                                                                                   // 3301
                                                                                                                       // 3302
  var SlideAnimation = function(settings, container) {                                                                 // 3303
    var duration = settings.animation_speed;                                                                           // 3304
    var is_rtl = ($('html[dir=rtl]').length === 1);                                                                    // 3305
    var margin = is_rtl ? 'marginRight' : 'marginLeft';                                                                // 3306
    var animMargin = {};                                                                                               // 3307
    animMargin[margin] = '0%';                                                                                         // 3308
                                                                                                                       // 3309
    this.next = function(current, next, callback) {                                                                    // 3310
      current.animate({marginLeft:'-100%'}, duration);                                                                 // 3311
      next.animate(animMargin, duration, function() {                                                                  // 3312
        current.css(margin, '100%');                                                                                   // 3313
        callback();                                                                                                    // 3314
      });                                                                                                              // 3315
    };                                                                                                                 // 3316
                                                                                                                       // 3317
    this.prev = function(current, prev, callback) {                                                                    // 3318
      current.animate({marginLeft:'100%'}, duration);                                                                  // 3319
      prev.css(margin, '-100%');                                                                                       // 3320
      prev.animate(animMargin, duration, function() {                                                                  // 3321
        current.css(margin, '100%');                                                                                   // 3322
        callback();                                                                                                    // 3323
      });                                                                                                              // 3324
    };                                                                                                                 // 3325
  };                                                                                                                   // 3326
                                                                                                                       // 3327
  var FadeAnimation = function(settings, container) {                                                                  // 3328
    var duration = settings.animation_speed;                                                                           // 3329
    var is_rtl = ($('html[dir=rtl]').length === 1);                                                                    // 3330
    var margin = is_rtl ? 'marginRight' : 'marginLeft';                                                                // 3331
                                                                                                                       // 3332
    this.next = function(current, next, callback) {                                                                    // 3333
      next.css({'margin':'0%', 'opacity':'0.01'});                                                                     // 3334
      next.animate({'opacity':'1'}, duration, 'linear', function() {                                                   // 3335
        current.css('margin', '100%');                                                                                 // 3336
        callback();                                                                                                    // 3337
      });                                                                                                              // 3338
    };                                                                                                                 // 3339
                                                                                                                       // 3340
    this.prev = function(current, prev, callback) {                                                                    // 3341
      prev.css({'margin':'0%', 'opacity':'0.01'});                                                                     // 3342
      prev.animate({'opacity':'1'}, duration, 'linear', function() {                                                   // 3343
        current.css('margin', '100%');                                                                                 // 3344
        callback();                                                                                                    // 3345
      });                                                                                                              // 3346
    };                                                                                                                 // 3347
  };                                                                                                                   // 3348
                                                                                                                       // 3349
                                                                                                                       // 3350
  Foundation.libs = Foundation.libs || {};                                                                             // 3351
                                                                                                                       // 3352
  Foundation.libs.orbit = {                                                                                            // 3353
    name: 'orbit',                                                                                                     // 3354
                                                                                                                       // 3355
    version: '5.5.0',                                                                                                  // 3356
                                                                                                                       // 3357
    settings: {                                                                                                        // 3358
      animation: 'slide',                                                                                              // 3359
      timer_speed: 10000,                                                                                              // 3360
      pause_on_hover: true,                                                                                            // 3361
      resume_on_mouseout: false,                                                                                       // 3362
      next_on_click: true,                                                                                             // 3363
      animation_speed: 500,                                                                                            // 3364
      stack_on_small: false,                                                                                           // 3365
      navigation_arrows: true,                                                                                         // 3366
      slide_number: true,                                                                                              // 3367
      slide_number_text: 'of',                                                                                         // 3368
      container_class: 'orbit-container',                                                                              // 3369
      stack_on_small_class: 'orbit-stack-on-small',                                                                    // 3370
      next_class: 'orbit-next',                                                                                        // 3371
      prev_class: 'orbit-prev',                                                                                        // 3372
      timer_container_class: 'orbit-timer',                                                                            // 3373
      timer_paused_class: 'paused',                                                                                    // 3374
      timer_progress_class: 'orbit-progress',                                                                          // 3375
      slides_container_class: 'orbit-slides-container',                                                                // 3376
      preloader_class: 'preloader',                                                                                    // 3377
      slide_selector: '*',                                                                                             // 3378
      bullets_container_class: 'orbit-bullets',                                                                        // 3379
      bullets_active_class: 'active',                                                                                  // 3380
      slide_number_class: 'orbit-slide-number',                                                                        // 3381
      caption_class: 'orbit-caption',                                                                                  // 3382
      active_slide_class: 'active',                                                                                    // 3383
      orbit_transition_class: 'orbit-transitioning',                                                                   // 3384
      bullets: true,                                                                                                   // 3385
      circular: true,                                                                                                  // 3386
      timer: true,                                                                                                     // 3387
      variable_height: false,                                                                                          // 3388
      swipe: true,                                                                                                     // 3389
      before_slide_change: noop,                                                                                       // 3390
      after_slide_change: noop                                                                                         // 3391
    },                                                                                                                 // 3392
                                                                                                                       // 3393
    init : function (scope, method, options) {                                                                         // 3394
      var self = this;                                                                                                 // 3395
      this.bindings(method, options);                                                                                  // 3396
    },                                                                                                                 // 3397
                                                                                                                       // 3398
    events : function (instance) {                                                                                     // 3399
      var orbit_instance = new Orbit(this.S(instance), this.S(instance).data('orbit-init'));                           // 3400
      this.S(instance).data(this.name + '-instance', orbit_instance);                                                  // 3401
    },                                                                                                                 // 3402
                                                                                                                       // 3403
    reflow : function () {                                                                                             // 3404
      var self = this;                                                                                                 // 3405
                                                                                                                       // 3406
      if (self.S(self.scope).is('[data-orbit]')) {                                                                     // 3407
        var $el = self.S(self.scope);                                                                                  // 3408
        var instance = $el.data(self.name + '-instance');                                                              // 3409
        instance.compute_dimensions();                                                                                 // 3410
      } else {                                                                                                         // 3411
        self.S('[data-orbit]', self.scope).each(function(idx, el) {                                                    // 3412
          var $el = self.S(el);                                                                                        // 3413
          var opts = self.data_options($el);                                                                           // 3414
          var instance = $el.data(self.name + '-instance');                                                            // 3415
          instance.compute_dimensions();                                                                               // 3416
        });                                                                                                            // 3417
      }                                                                                                                // 3418
    }                                                                                                                  // 3419
  };                                                                                                                   // 3420
                                                                                                                       // 3421
                                                                                                                       // 3422
}(jQuery, window, window.document));                                                                                   // 3423
;(function ($, window, document, undefined) {                                                                          // 3424
  'use strict';                                                                                                        // 3425
                                                                                                                       // 3426
  Foundation.libs.offcanvas = {                                                                                        // 3427
    name : 'offcanvas',                                                                                                // 3428
                                                                                                                       // 3429
    version : '5.5.0',                                                                                                 // 3430
                                                                                                                       // 3431
    settings : {                                                                                                       // 3432
      open_method: 'move',                                                                                             // 3433
      close_on_click: false                                                                                            // 3434
    },                                                                                                                 // 3435
                                                                                                                       // 3436
    init : function (scope, method, options) {                                                                         // 3437
      this.bindings(method, options);                                                                                  // 3438
    },                                                                                                                 // 3439
                                                                                                                       // 3440
    events : function () {                                                                                             // 3441
      var self = this,                                                                                                 // 3442
          S = self.S,                                                                                                  // 3443
          move_class = '',                                                                                             // 3444
          right_postfix = '',                                                                                          // 3445
          left_postfix = '';                                                                                           // 3446
                                                                                                                       // 3447
      if (this.settings.open_method === 'move') {                                                                      // 3448
        move_class = 'move-';                                                                                          // 3449
        right_postfix = 'right';                                                                                       // 3450
        left_postfix = 'left';                                                                                         // 3451
      } else if (this.settings.open_method === 'overlap_single') {                                                     // 3452
        move_class = 'offcanvas-overlap-';                                                                             // 3453
        right_postfix = 'right';                                                                                       // 3454
        left_postfix = 'left';                                                                                         // 3455
      } else if (this.settings.open_method === 'overlap') {                                                            // 3456
        move_class = 'offcanvas-overlap';                                                                              // 3457
      }                                                                                                                // 3458
                                                                                                                       // 3459
      S(this.scope).off('.offcanvas')                                                                                  // 3460
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {                                         // 3461
          self.click_toggle_class(e, move_class + right_postfix);                                                      // 3462
          if (self.settings.open_method !== 'overlap'){                                                                // 3463
            S('.left-submenu').removeClass(move_class + right_postfix);                                                // 3464
          }                                                                                                            // 3465
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');                                                  // 3466
        })                                                                                                             // 3467
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {                                         // 3468
          var settings = self.get_settings(e);                                                                         // 3469
          var parent = S(this).parent();                                                                               // 3470
                                                                                                                       // 3471
          if(settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')){                  // 3472
            self.hide.call(self, move_class + right_postfix, self.get_wrapper(e));                                     // 3473
            parent.parent().removeClass(move_class + right_postfix);                                                   // 3474
          }else if(S(this).parent().hasClass('has-submenu')){                                                          // 3475
            e.preventDefault();                                                                                        // 3476
            S(this).siblings('.left-submenu').toggleClass(move_class + right_postfix);                                 // 3477
          }else if(parent.hasClass('back')){                                                                           // 3478
            e.preventDefault();                                                                                        // 3479
            parent.parent().removeClass(move_class + right_postfix);                                                   // 3480
          }                                                                                                            // 3481
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');                                                  // 3482
        })                                                                                                             // 3483
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {                                        // 3484
          self.click_toggle_class(e, move_class + left_postfix);                                                       // 3485
          if (self.settings.open_method !== 'overlap'){                                                                // 3486
            S('.right-submenu').removeClass(move_class + left_postfix);                                                // 3487
          }                                                                                                            // 3488
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 3489
        })                                                                                                             // 3490
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {                                        // 3491
          var settings = self.get_settings(e);                                                                         // 3492
          var parent = S(this).parent();                                                                               // 3493
                                                                                                                       // 3494
          if(settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')){                  // 3495
            self.hide.call(self, move_class + left_postfix, self.get_wrapper(e));                                      // 3496
            parent.parent().removeClass(move_class + left_postfix);                                                    // 3497
          }else if(S(this).parent().hasClass('has-submenu')){                                                          // 3498
            e.preventDefault();                                                                                        // 3499
            S(this).siblings('.right-submenu').toggleClass(move_class + left_postfix);                                 // 3500
          }else if(parent.hasClass('back')){                                                                           // 3501
            e.preventDefault();                                                                                        // 3502
            parent.parent().removeClass(move_class + left_postfix);                                                    // 3503
          }                                                                                                            // 3504
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 3505
        })                                                                                                             // 3506
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {                                                // 3507
          self.click_remove_class(e, move_class + left_postfix);                                                       // 3508
          S('.right-submenu').removeClass(move_class + left_postfix);                                                  // 3509
          if (right_postfix){                                                                                          // 3510
            self.click_remove_class(e, move_class + right_postfix);                                                    // 3511
            S('.left-submenu').removeClass(move_class + left_postfix);                                                 // 3512
          }                                                                                                            // 3513
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 3514
        })                                                                                                             // 3515
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {                                                // 3516
          self.click_remove_class(e, move_class + left_postfix);                                                       // 3517
          $('.left-off-canvas-toggle').attr('aria-expanded', 'false');                                                 // 3518
          if (right_postfix) {                                                                                         // 3519
            self.click_remove_class(e, move_class + right_postfix);                                                    // 3520
            $('.right-off-canvas-toggle').attr('aria-expanded', 'false');                                              // 3521
          }                                                                                                            // 3522
        });                                                                                                            // 3523
    },                                                                                                                 // 3524
                                                                                                                       // 3525
    toggle: function(class_name, $off_canvas) {                                                                        // 3526
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 3527
      if ($off_canvas.is('.' + class_name)) {                                                                          // 3528
        this.hide(class_name, $off_canvas);                                                                            // 3529
      } else {                                                                                                         // 3530
        this.show(class_name, $off_canvas);                                                                            // 3531
      }                                                                                                                // 3532
    },                                                                                                                 // 3533
                                                                                                                       // 3534
    show: function(class_name, $off_canvas) {                                                                          // 3535
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 3536
      $off_canvas.trigger('open').trigger('open.fndtn.offcanvas');                                                     // 3537
      $off_canvas.addClass(class_name);                                                                                // 3538
    },                                                                                                                 // 3539
                                                                                                                       // 3540
    hide: function(class_name, $off_canvas) {                                                                          // 3541
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 3542
      $off_canvas.trigger('close').trigger('close.fndtn.offcanvas');                                                   // 3543
      $off_canvas.removeClass(class_name);                                                                             // 3544
    },                                                                                                                 // 3545
                                                                                                                       // 3546
    click_toggle_class: function(e, class_name) {                                                                      // 3547
      e.preventDefault();                                                                                              // 3548
      var $off_canvas = this.get_wrapper(e);                                                                           // 3549
      this.toggle(class_name, $off_canvas);                                                                            // 3550
    },                                                                                                                 // 3551
                                                                                                                       // 3552
    click_remove_class: function(e, class_name) {                                                                      // 3553
      e.preventDefault();                                                                                              // 3554
      var $off_canvas = this.get_wrapper(e);                                                                           // 3555
      this.hide(class_name, $off_canvas);                                                                              // 3556
    },                                                                                                                 // 3557
                                                                                                                       // 3558
    get_settings: function(e) {                                                                                        // 3559
      var offcanvas  = this.S(e.target).closest('[' + this.attr_name() + ']');                                         // 3560
      return offcanvas.data(this.attr_name(true) + '-init') || this.settings;                                          // 3561
    },                                                                                                                 // 3562
                                                                                                                       // 3563
    get_wrapper: function(e) {                                                                                         // 3564
      var $off_canvas = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');                                 // 3565
                                                                                                                       // 3566
      if ($off_canvas.length === 0) {                                                                                  // 3567
        $off_canvas = this.S('.off-canvas-wrap');                                                                      // 3568
      }                                                                                                                // 3569
      return $off_canvas;                                                                                              // 3570
    },                                                                                                                 // 3571
                                                                                                                       // 3572
    reflow : function () {}                                                                                            // 3573
  };                                                                                                                   // 3574
}(jQuery, window, window.document));                                                                                   // 3575
;(function ($, window, document, undefined) {                                                                          // 3576
  'use strict';                                                                                                        // 3577
                                                                                                                       // 3578
  Foundation.libs.alert = {                                                                                            // 3579
    name : 'alert',                                                                                                    // 3580
                                                                                                                       // 3581
    version : '5.5.0',                                                                                                 // 3582
                                                                                                                       // 3583
    settings : {                                                                                                       // 3584
      callback: function (){}                                                                                          // 3585
    },                                                                                                                 // 3586
                                                                                                                       // 3587
    init : function (scope, method, options) {                                                                         // 3588
      this.bindings(method, options);                                                                                  // 3589
    },                                                                                                                 // 3590
                                                                                                                       // 3591
    events : function () {                                                                                             // 3592
      var self = this,                                                                                                 // 3593
          S = this.S;                                                                                                  // 3594
                                                                                                                       // 3595
      $(this.scope).off('.alert').on('click.fndtn.alert', '[' + this.attr_name() + '] .close', function (e) {          // 3596
        var alertBox = S(this).closest('[' + self.attr_name() + ']'),                                                  // 3597
            settings = alertBox.data(self.attr_name(true) + '-init') || self.settings;                                 // 3598
                                                                                                                       // 3599
        e.preventDefault();                                                                                            // 3600
        if (Modernizr.csstransitions) {                                                                                // 3601
          alertBox.addClass('alert-close');                                                                            // 3602
          alertBox.on('transitionend webkitTransitionEnd oTransitionEnd', function(e) {                                // 3603
            S(this).trigger('close').trigger('close.fndtn.alert').remove();                                            // 3604
            settings.callback();                                                                                       // 3605
          });                                                                                                          // 3606
        } else {                                                                                                       // 3607
          alertBox.fadeOut(300, function () {                                                                          // 3608
            S(this).trigger('close').trigger('close.fndtn.alert').remove();                                            // 3609
            settings.callback();                                                                                       // 3610
          });                                                                                                          // 3611
        }                                                                                                              // 3612
      });                                                                                                              // 3613
    },                                                                                                                 // 3614
                                                                                                                       // 3615
    reflow : function () {}                                                                                            // 3616
  };                                                                                                                   // 3617
}(jQuery, window, window.document));                                                                                   // 3618
;(function ($, window, document, undefined) {                                                                          // 3619
  'use strict';                                                                                                        // 3620
                                                                                                                       // 3621
  Foundation.libs.reveal = {                                                                                           // 3622
    name : 'reveal',                                                                                                   // 3623
                                                                                                                       // 3624
    version : '5.5.0',                                                                                                 // 3625
                                                                                                                       // 3626
    locked : false,                                                                                                    // 3627
                                                                                                                       // 3628
    settings : {                                                                                                       // 3629
      animation: 'fadeAndPop',                                                                                         // 3630
      animation_speed: 250,                                                                                            // 3631
      close_on_background_click: true,                                                                                 // 3632
      close_on_esc: true,                                                                                              // 3633
      dismiss_modal_class: 'close-reveal-modal',                                                                       // 3634
      bg_class: 'reveal-modal-bg',                                                                                     // 3635
      bg_root_element: 'body',                                                                                         // 3636
      root_element: 'body',                                                                                            // 3637
      open: function(){},                                                                                              // 3638
      opened: function(){},                                                                                            // 3639
      close: function(){},                                                                                             // 3640
      closed: function(){},                                                                                            // 3641
      bg : $('.reveal-modal-bg'),                                                                                      // 3642
      css : {                                                                                                          // 3643
        open : {                                                                                                       // 3644
          'opacity': 0,                                                                                                // 3645
          'visibility': 'visible',                                                                                     // 3646
          'display' : 'block'                                                                                          // 3647
        },                                                                                                             // 3648
        close : {                                                                                                      // 3649
          'opacity': 1,                                                                                                // 3650
          'visibility': 'hidden',                                                                                      // 3651
          'display': 'none'                                                                                            // 3652
        }                                                                                                              // 3653
      }                                                                                                                // 3654
    },                                                                                                                 // 3655
                                                                                                                       // 3656
    init : function (scope, method, options) {                                                                         // 3657
      $.extend(true, this.settings, method, options);                                                                  // 3658
      this.bindings(method, options);                                                                                  // 3659
    },                                                                                                                 // 3660
                                                                                                                       // 3661
    events : function (scope) {                                                                                        // 3662
      var self = this,                                                                                                 // 3663
          S = self.S;                                                                                                  // 3664
                                                                                                                       // 3665
      S(this.scope)                                                                                                    // 3666
        .off('.reveal')                                                                                                // 3667
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (e) {     // 3668
          e.preventDefault();                                                                                          // 3669
                                                                                                                       // 3670
          if (!self.locked) {                                                                                          // 3671
            var element = S(this),                                                                                     // 3672
                ajax = element.data(self.data_attr('reveal-ajax'));                                                    // 3673
                                                                                                                       // 3674
            self.locked = true;                                                                                        // 3675
                                                                                                                       // 3676
            if (typeof ajax === 'undefined') {                                                                         // 3677
              self.open.call(self, element);                                                                           // 3678
            } else {                                                                                                   // 3679
              var url = ajax === true ? element.attr('href') : ajax;                                                   // 3680
                                                                                                                       // 3681
              self.open.call(self, element, {url: url});                                                               // 3682
            }                                                                                                          // 3683
          }                                                                                                            // 3684
        });                                                                                                            // 3685
                                                                                                                       // 3686
      S(document)                                                                                                      // 3687
        .on('click.fndtn.reveal', this.close_targets(), function (e) {                                                 // 3688
                                                                                                                       // 3689
          e.preventDefault();                                                                                          // 3690
                                                                                                                       // 3691
          if (!self.locked) {                                                                                          // 3692
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init') || self.settings, // 3693
                bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0];                                         // 3694
                                                                                                                       // 3695
            if (bg_clicked) {                                                                                          // 3696
              if (settings.close_on_background_click) {                                                                // 3697
                e.stopPropagation();                                                                                   // 3698
              } else {                                                                                                 // 3699
                return;                                                                                                // 3700
              }                                                                                                        // 3701
            }                                                                                                          // 3702
                                                                                                                       // 3703
            self.locked = true;                                                                                        // 3704
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open') : S(this).closest('[' + self.attr_name() + ']'));
          }                                                                                                            // 3706
        });                                                                                                            // 3707
                                                                                                                       // 3708
      if(S('[' + self.attr_name() + ']', this.scope).length > 0) {                                                     // 3709
        S(this.scope)                                                                                                  // 3710
          // .off('.reveal')                                                                                           // 3711
          .on('open.fndtn.reveal', this.settings.open)                                                                 // 3712
          .on('opened.fndtn.reveal', this.settings.opened)                                                             // 3713
          .on('opened.fndtn.reveal', this.open_video)                                                                  // 3714
          .on('close.fndtn.reveal', this.settings.close)                                                               // 3715
          .on('closed.fndtn.reveal', this.settings.closed)                                                             // 3716
          .on('closed.fndtn.reveal', this.close_video);                                                                // 3717
      } else {                                                                                                         // 3718
        S(this.scope)                                                                                                  // 3719
          // .off('.reveal')                                                                                           // 3720
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)                                   // 3721
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)                               // 3722
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)                                    // 3723
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)                                 // 3724
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)                               // 3725
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video);                                  // 3726
      }                                                                                                                // 3727
                                                                                                                       // 3728
      return true;                                                                                                     // 3729
    },                                                                                                                 // 3730
                                                                                                                       // 3731
    // PATCH #3: turning on key up capture only when a reveal window is open                                           // 3732
    key_up_on : function (scope) {                                                                                     // 3733
      var self = this;                                                                                                 // 3734
                                                                                                                       // 3735
      // PATCH #1: fixing multiple keyup event trigger from single key press                                           // 3736
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {                           // 3737
        var open_modal = self.S('[' + self.attr_name() + '].open'),                                                    // 3738
            settings = open_modal.data(self.attr_name(true) + '-init') || self.settings ;                              // 3739
        // PATCH #2: making sure that the close event can be called only while unlocked,                               // 3740
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.      // 3741
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);                                                                           // 3743
        }                                                                                                              // 3744
      });                                                                                                              // 3745
                                                                                                                       // 3746
      return true;                                                                                                     // 3747
    },                                                                                                                 // 3748
                                                                                                                       // 3749
    // PATCH #3: turning on key up capture only when a reveal window is open                                           // 3750
    key_up_off : function (scope) {                                                                                    // 3751
      this.S('body').off('keyup.fndtn.reveal');                                                                        // 3752
      return true;                                                                                                     // 3753
    },                                                                                                                 // 3754
                                                                                                                       // 3755
                                                                                                                       // 3756
    open : function (target, ajax_settings) {                                                                          // 3757
      var self = this,                                                                                                 // 3758
          modal;                                                                                                       // 3759
                                                                                                                       // 3760
      if (target) {                                                                                                    // 3761
        if (typeof target.selector !== 'undefined') {                                                                  // 3762
          // Find the named node; only use the first one found, since the rest of the code assumes there's only one node
          modal = self.S('#' + target.data(self.data_attr('reveal-id'))).first();                                      // 3764
        } else {                                                                                                       // 3765
          modal = self.S(this.scope);                                                                                  // 3766
                                                                                                                       // 3767
          ajax_settings = target;                                                                                      // 3768
        }                                                                                                              // 3769
      } else {                                                                                                         // 3770
        modal = self.S(this.scope);                                                                                    // 3771
      }                                                                                                                // 3772
                                                                                                                       // 3773
      var settings = modal.data(self.attr_name(true) + '-init');                                                       // 3774
      settings = settings || this.settings;                                                                            // 3775
                                                                                                                       // 3776
                                                                                                                       // 3777
      if (modal.hasClass('open') && target.attr('data-reveal-id') == modal.attr('id')) {                               // 3778
        return self.close(modal);                                                                                      // 3779
      }                                                                                                                // 3780
                                                                                                                       // 3781
      if (!modal.hasClass('open')) {                                                                                   // 3782
        var open_modal = self.S('[' + self.attr_name() + '].open');                                                    // 3783
                                                                                                                       // 3784
        if (typeof modal.data('css-top') === 'undefined') {                                                            // 3785
          modal.data('css-top', parseInt(modal.css('top'), 10))                                                        // 3786
            .data('offset', this.cache_offset(modal));                                                                 // 3787
        }                                                                                                              // 3788
                                                                                                                       // 3789
        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open             // 3790
        modal.trigger('open').trigger('open.fndtn.reveal');                                                            // 3791
                                                                                                                       // 3792
        if (open_modal.length < 1) {                                                                                   // 3793
          this.toggle_bg(modal, true);                                                                                 // 3794
        }                                                                                                              // 3795
                                                                                                                       // 3796
        if (typeof ajax_settings === 'string') {                                                                       // 3797
          ajax_settings = {                                                                                            // 3798
            url: ajax_settings                                                                                         // 3799
          };                                                                                                           // 3800
        }                                                                                                              // 3801
                                                                                                                       // 3802
        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {                                              // 3803
          if (open_modal.length > 0) {                                                                                 // 3804
            this.hide(open_modal, settings.css.close);                                                                 // 3805
          }                                                                                                            // 3806
                                                                                                                       // 3807
          this.show(modal, settings.css.open);                                                                         // 3808
        } else {                                                                                                       // 3809
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;               // 3810
                                                                                                                       // 3811
          $.extend(ajax_settings, {                                                                                    // 3812
            success: function (data, textStatus, jqXHR) {                                                              // 3813
              if ( $.isFunction(old_success) ) {                                                                       // 3814
                var result = old_success(data, textStatus, jqXHR);                                                     // 3815
                if (typeof result == 'string') data = result;                                                          // 3816
              }                                                                                                        // 3817
                                                                                                                       // 3818
              modal.html(data);                                                                                        // 3819
              self.S(modal).foundation('section', 'reflow');                                                           // 3820
              self.S(modal).children().foundation();                                                                   // 3821
                                                                                                                       // 3822
              if (open_modal.length > 0) {                                                                             // 3823
                self.hide(open_modal, settings.css.close);                                                             // 3824
              }                                                                                                        // 3825
              self.show(modal, settings.css.open);                                                                     // 3826
            }                                                                                                          // 3827
          });                                                                                                          // 3828
                                                                                                                       // 3829
          $.ajax(ajax_settings);                                                                                       // 3830
        }                                                                                                              // 3831
      }                                                                                                                // 3832
      self.S(window).trigger('resize');                                                                                // 3833
    },                                                                                                                 // 3834
                                                                                                                       // 3835
    close : function (modal) {                                                                                         // 3836
      var modal = modal && modal.length ? modal : this.S(this.scope),                                                  // 3837
          open_modals = this.S('[' + this.attr_name() + '].open'),                                                     // 3838
          settings = modal.data(this.attr_name(true) + '-init') || this.settings;                                      // 3839
                                                                                                                       // 3840
      if (open_modals.length > 0) {                                                                                    // 3841
        this.locked = true;                                                                                            // 3842
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open             // 3843
        modal.trigger('close').trigger('close.fndtn.reveal');                                                          // 3844
        this.toggle_bg(modal, false);                                                                                  // 3845
        this.hide(open_modals, settings.css.close, settings);                                                          // 3846
      }                                                                                                                // 3847
    },                                                                                                                 // 3848
                                                                                                                       // 3849
    close_targets : function () {                                                                                      // 3850
      var base = '.' + this.settings.dismiss_modal_class;                                                              // 3851
                                                                                                                       // 3852
      if (this.settings.close_on_background_click) {                                                                   // 3853
        return base + ', .' + this.settings.bg_class;                                                                  // 3854
      }                                                                                                                // 3855
                                                                                                                       // 3856
      return base;                                                                                                     // 3857
    },                                                                                                                 // 3858
                                                                                                                       // 3859
    toggle_bg : function (el, modal, state) {                                                                          // 3860
      var settings = el.data(this.attr_name(true) + '-init') || this.settings,                                         // 3861
            bg_root_element = settings.bg_root_element; // Adding option to specify the background root element fixes scrolling issue
                                                                                                                       // 3863
      if (this.S('.' + this.settings.bg_class).length === 0) {                                                         // 3864
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})                                             // 3865
          .appendTo(bg_root_element).hide();                                                                           // 3866
      }                                                                                                                // 3867
                                                                                                                       // 3868
      var visible = this.settings.bg.filter(':visible').length > 0;                                                    // 3869
      if ( state != visible ) {                                                                                        // 3870
        if ( state == undefined ? visible : !state ) {                                                                 // 3871
          this.hide(this.settings.bg);                                                                                 // 3872
        } else {                                                                                                       // 3873
          this.show(this.settings.bg);                                                                                 // 3874
        }                                                                                                              // 3875
      }                                                                                                                // 3876
    },                                                                                                                 // 3877
                                                                                                                       // 3878
    show : function (el, css) {                                                                                        // 3879
      // is modal                                                                                                      // 3880
      if (css) {                                                                                                       // 3881
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,                                       // 3882
            root_element = settings.root_element;                                                                      // 3883
                                                                                                                       // 3884
        if (el.parent(root_element).length === 0) {                                                                    // 3885
          var placeholder = el.wrap('<div style="display: none;" />').parent();                                        // 3886
                                                                                                                       // 3887
          el.on('closed.fndtn.reveal.wrapped', function() {                                                            // 3888
            el.detach().appendTo(placeholder);                                                                         // 3889
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');                                                         // 3890
          });                                                                                                          // 3891
                                                                                                                       // 3892
          el.detach().appendTo(root_element);                                                                          // 3893
        }                                                                                                              // 3894
                                                                                                                       // 3895
        var animData = getAnimationData(settings.animation);                                                           // 3896
        if (!animData.animate) {                                                                                       // 3897
          this.locked = false;                                                                                         // 3898
        }                                                                                                              // 3899
        if (animData.pop) {                                                                                            // 3900
          css.top = $(root_element).scrollTop() - el.data('offset') + 'px'; //adding root_element instead of window for scrolling offset if modal trigger is below the fold
          var end_css = {                                                                                              // 3902
            top: $(root_element).scrollTop() + el.data('css-top') + 'px', //adding root_element instead of window for scrolling offset if modal trigger is below the fold
            opacity: 1                                                                                                 // 3904
          };                                                                                                           // 3905
                                                                                                                       // 3906
          return setTimeout(function () {                                                                              // 3907
            return el                                                                                                  // 3908
              .css(css)                                                                                                // 3909
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 3910
                this.locked = false;                                                                                   // 3911
                el.trigger('opened').trigger('opened.fndtn.reveal');                                                   // 3912
              }.bind(this))                                                                                            // 3913
              .addClass('open');                                                                                       // 3914
          }.bind(this), settings.animation_speed / 2);                                                                 // 3915
        }                                                                                                              // 3916
                                                                                                                       // 3917
        if (animData.fade) {                                                                                           // 3918
          css.top = $(root_element).scrollTop() + el.data('css-top') + 'px'; //adding root_element instead of window for scrolling offset if modal trigger is below the fold
          var end_css = {opacity: 1};                                                                                  // 3920
                                                                                                                       // 3921
          return setTimeout(function () {                                                                              // 3922
            return el                                                                                                  // 3923
              .css(css)                                                                                                // 3924
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 3925
                this.locked = false;                                                                                   // 3926
                el.trigger('opened').trigger('opened.fndtn.reveal');                                                   // 3927
              }.bind(this))                                                                                            // 3928
              .addClass('open');                                                                                       // 3929
          }.bind(this), settings.animation_speed / 2);                                                                 // 3930
        }                                                                                                              // 3931
                                                                                                                       // 3932
        return el.css(css).show().css({opacity: 1}).addClass('open').trigger('opened').trigger('opened.fndtn.reveal'); // 3933
      }                                                                                                                // 3934
                                                                                                                       // 3935
      var settings = this.settings;                                                                                    // 3936
                                                                                                                       // 3937
      // should we animate the background?                                                                             // 3938
      if (getAnimationData(settings.animation).fade) {                                                                 // 3939
        return el.fadeIn(settings.animation_speed / 2);                                                                // 3940
      }                                                                                                                // 3941
                                                                                                                       // 3942
      this.locked = false;                                                                                             // 3943
                                                                                                                       // 3944
      return el.show();                                                                                                // 3945
    },                                                                                                                 // 3946
                                                                                                                       // 3947
    hide : function (el, css) {                                                                                        // 3948
      // is modal                                                                                                      // 3949
      if (css) {                                                                                                       // 3950
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,                                       // 3951
            root_element = settings.root_element;                                                                      // 3952
                                                                                                                       // 3953
        var animData = getAnimationData(settings.animation);                                                           // 3954
        if (!animData.animate) {                                                                                       // 3955
          this.locked = false;                                                                                         // 3956
        }                                                                                                              // 3957
        if (animData.pop) {                                                                                            // 3958
          var end_css = {                                                                                              // 3959
            top: - $(root_element).scrollTop() - el.data('offset') + 'px', //adding root_element instead of window for scrolling offset if modal trigger is below the fold
            opacity: 0                                                                                                 // 3961
          };                                                                                                           // 3962
                                                                                                                       // 3963
          return setTimeout(function () {                                                                              // 3964
            return el                                                                                                  // 3965
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 3966
                this.locked = false;                                                                                   // 3967
                el.css(css).trigger('closed').trigger('closed.fndtn.reveal');                                          // 3968
              }.bind(this))                                                                                            // 3969
              .removeClass('open');                                                                                    // 3970
          }.bind(this), settings.animation_speed / 2);                                                                 // 3971
        }                                                                                                              // 3972
                                                                                                                       // 3973
        if (animData.fade) {                                                                                           // 3974
          var end_css = {opacity: 0};                                                                                  // 3975
                                                                                                                       // 3976
          return setTimeout(function () {                                                                              // 3977
            return el                                                                                                  // 3978
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 3979
                this.locked = false;                                                                                   // 3980
                el.css(css).trigger('closed').trigger('closed.fndtn.reveal');                                          // 3981
              }.bind(this))                                                                                            // 3982
              .removeClass('open');                                                                                    // 3983
          }.bind(this), settings.animation_speed / 2);                                                                 // 3984
        }                                                                                                              // 3985
                                                                                                                       // 3986
        return el.hide().css(css).removeClass('open').trigger('closed').trigger('closed.fndtn.reveal');                // 3987
      }                                                                                                                // 3988
                                                                                                                       // 3989
      var settings = this.settings;                                                                                    // 3990
                                                                                                                       // 3991
      // should we animate the background?                                                                             // 3992
      if (getAnimationData(settings.animation).fade) {                                                                 // 3993
        return el.fadeOut(settings.animation_speed / 2);                                                               // 3994
      }                                                                                                                // 3995
                                                                                                                       // 3996
      return el.hide();                                                                                                // 3997
    },                                                                                                                 // 3998
                                                                                                                       // 3999
    close_video : function (e) {                                                                                       // 4000
      var video = $('.flex-video', e.target),                                                                          // 4001
          iframe = $('iframe', video);                                                                                 // 4002
                                                                                                                       // 4003
      if (iframe.length > 0) {                                                                                         // 4004
        iframe.attr('data-src', iframe[0].src);                                                                        // 4005
        iframe.attr('src', iframe.attr('src'));                                                                        // 4006
        video.hide();                                                                                                  // 4007
      }                                                                                                                // 4008
    },                                                                                                                 // 4009
                                                                                                                       // 4010
    open_video : function (e) {                                                                                        // 4011
      var video = $('.flex-video', e.target),                                                                          // 4012
          iframe = video.find('iframe');                                                                               // 4013
                                                                                                                       // 4014
      if (iframe.length > 0) {                                                                                         // 4015
        var data_src = iframe.attr('data-src');                                                                        // 4016
        if (typeof data_src === 'string') {                                                                            // 4017
          iframe[0].src = iframe.attr('data-src');                                                                     // 4018
        } else {                                                                                                       // 4019
          var src = iframe[0].src;                                                                                     // 4020
          iframe[0].src = undefined;                                                                                   // 4021
          iframe[0].src = src;                                                                                         // 4022
        }                                                                                                              // 4023
        video.show();                                                                                                  // 4024
      }                                                                                                                // 4025
    },                                                                                                                 // 4026
                                                                                                                       // 4027
    data_attr: function (str) {                                                                                        // 4028
      if (this.namespace.length > 0) {                                                                                 // 4029
        return this.namespace + '-' + str;                                                                             // 4030
      }                                                                                                                // 4031
                                                                                                                       // 4032
      return str;                                                                                                      // 4033
    },                                                                                                                 // 4034
                                                                                                                       // 4035
    cache_offset : function (modal) {                                                                                  // 4036
      var offset = modal.show().height() + parseInt(modal.css('top'), 10);                                             // 4037
                                                                                                                       // 4038
      modal.hide();                                                                                                    // 4039
                                                                                                                       // 4040
      return offset;                                                                                                   // 4041
    },                                                                                                                 // 4042
                                                                                                                       // 4043
    off : function () {                                                                                                // 4044
      $(this.scope).off('.fndtn.reveal');                                                                              // 4045
    },                                                                                                                 // 4046
                                                                                                                       // 4047
    reflow : function () {}                                                                                            // 4048
  };                                                                                                                   // 4049
                                                                                                                       // 4050
  /*                                                                                                                   // 4051
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}                                        // 4052
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}                                        // 4053
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}                                       // 4054
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}                                       // 4055
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}                                       // 4056
   */                                                                                                                  // 4057
  function getAnimationData(str) {                                                                                     // 4058
    var fade = /fade/i.test(str);                                                                                      // 4059
    var pop = /pop/i.test(str);                                                                                        // 4060
    return {                                                                                                           // 4061
      animate: fade || pop,                                                                                            // 4062
      pop: pop,                                                                                                        // 4063
      fade: fade                                                                                                       // 4064
    };                                                                                                                 // 4065
  }                                                                                                                    // 4066
}(jQuery, window, window.document));                                                                                   // 4067
;(function ($, window, document, undefined) {                                                                          // 4068
  'use strict';                                                                                                        // 4069
                                                                                                                       // 4070
  Foundation.libs.interchange = {                                                                                      // 4071
    name : 'interchange',                                                                                              // 4072
                                                                                                                       // 4073
    version : '5.5.0',                                                                                                 // 4074
                                                                                                                       // 4075
    cache : {},                                                                                                        // 4076
                                                                                                                       // 4077
    images_loaded : false,                                                                                             // 4078
    nodes_loaded : false,                                                                                              // 4079
                                                                                                                       // 4080
    settings : {                                                                                                       // 4081
      load_attr : 'interchange',                                                                                       // 4082
                                                                                                                       // 4083
      named_queries : {                                                                                                // 4084
        'default'     : 'only screen',                                                                                 // 4085
        'small'       : Foundation.media_queries['small'],                                                             // 4086
        'small-only'  : Foundation.media_queries['small-only'],                                                        // 4087
        'medium'      : Foundation.media_queries['medium'],                                                            // 4088
        'medium-only' : Foundation.media_queries['medium-only'],                                                       // 4089
        'large'       : Foundation.media_queries['large'],                                                             // 4090
        'large-only'  : Foundation.media_queries['large-only'],                                                        // 4091
        'xlarge'      : Foundation.media_queries['xlarge'],                                                            // 4092
        'xlarge-only' : Foundation.media_queries['xlarge-only'],                                                       // 4093
        'xxlarge'     : Foundation.media_queries['xxlarge'],                                                           // 4094
        'landscape'   : 'only screen and (orientation: landscape)',                                                    // 4095
        'portrait'    : 'only screen and (orientation: portrait)',                                                     // 4096
        'retina'      : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +                                       // 4097
          'only screen and (min--moz-device-pixel-ratio: 2),' +                                                        // 4098
          'only screen and (-o-min-device-pixel-ratio: 2/1),' +                                                        // 4099
          'only screen and (min-device-pixel-ratio: 2),' +                                                             // 4100
          'only screen and (min-resolution: 192dpi),' +                                                                // 4101
          'only screen and (min-resolution: 2dppx)'                                                                    // 4102
      },                                                                                                               // 4103
                                                                                                                       // 4104
      directives : {                                                                                                   // 4105
        replace: function (el, path, trigger) {                                                                        // 4106
          // The trigger argument, if called within the directive, fires                                               // 4107
          // an event named after the directive on the element, passing                                                // 4108
          // any parameters along to the event that you pass to trigger.                                               // 4109
          //                                                                                                           // 4110
          // ex. trigger(), trigger([a, b, c]), or trigger(a, b, c)                                                    // 4111
          //                                                                                                           // 4112
          // This allows you to bind a callback like so:                                                               // 4113
          // $('#interchangeContainer').on('replace', function (e, a, b, c) {                                          // 4114
          //   console.log($(this).html(), a, b, c);                                                                   // 4115
          // });                                                                                                       // 4116
                                                                                                                       // 4117
          if (/IMG/.test(el[0].nodeName)) {                                                                            // 4118
            var orig_path = el[0].src;                                                                                 // 4119
                                                                                                                       // 4120
            if (new RegExp(path, 'i').test(orig_path)) return;                                                         // 4121
                                                                                                                       // 4122
            el[0].src = path;                                                                                          // 4123
                                                                                                                       // 4124
            return trigger(el[0].src);                                                                                 // 4125
          }                                                                                                            // 4126
          var last_path = el.data(this.data_attr + '-last-path'),                                                      // 4127
              self = this;                                                                                             // 4128
                                                                                                                       // 4129
          if (last_path == path) return;                                                                               // 4130
                                                                                                                       // 4131
          if (/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(path)) {                                                      // 4132
            $(el).css('background-image', 'url('+path+')');                                                            // 4133
            el.data('interchange-last-path', path);                                                                    // 4134
            return trigger(path);                                                                                      // 4135
          }                                                                                                            // 4136
                                                                                                                       // 4137
          return $.get(path, function (response) {                                                                     // 4138
            el.html(response);                                                                                         // 4139
            el.data(self.data_attr + '-last-path', path);                                                              // 4140
            trigger();                                                                                                 // 4141
          });                                                                                                          // 4142
                                                                                                                       // 4143
        }                                                                                                              // 4144
      }                                                                                                                // 4145
    },                                                                                                                 // 4146
                                                                                                                       // 4147
    init : function (scope, method, options) {                                                                         // 4148
      Foundation.inherit(this, 'throttle random_str');                                                                 // 4149
                                                                                                                       // 4150
      this.data_attr = this.set_data_attr();                                                                           // 4151
      $.extend(true, this.settings, method, options);                                                                  // 4152
      this.bindings(method, options);                                                                                  // 4153
      this.load('images');                                                                                             // 4154
      this.load('nodes');                                                                                              // 4155
    },                                                                                                                 // 4156
                                                                                                                       // 4157
    get_media_hash : function() {                                                                                      // 4158
        var mediaHash='';                                                                                              // 4159
        for (var queryName in this.settings.named_queries ) {                                                          // 4160
            mediaHash += matchMedia(this.settings.named_queries[queryName]).matches.toString();                        // 4161
        }                                                                                                              // 4162
        return mediaHash;                                                                                              // 4163
    },                                                                                                                 // 4164
                                                                                                                       // 4165
    events : function () {                                                                                             // 4166
      var self = this, prevMediaHash;                                                                                  // 4167
                                                                                                                       // 4168
      $(window)                                                                                                        // 4169
        .off('.interchange')                                                                                           // 4170
        .on('resize.fndtn.interchange', self.throttle(function () {                                                    // 4171
            var currMediaHash = self.get_media_hash();                                                                 // 4172
            if (currMediaHash !== prevMediaHash) {                                                                     // 4173
                self.resize();                                                                                         // 4174
            }                                                                                                          // 4175
            prevMediaHash = currMediaHash;                                                                             // 4176
        }, 50));                                                                                                       // 4177
                                                                                                                       // 4178
      return this;                                                                                                     // 4179
    },                                                                                                                 // 4180
                                                                                                                       // 4181
    resize : function () {                                                                                             // 4182
      var cache = this.cache;                                                                                          // 4183
                                                                                                                       // 4184
      if(!this.images_loaded || !this.nodes_loaded) {                                                                  // 4185
        setTimeout($.proxy(this.resize, this), 50);                                                                    // 4186
        return;                                                                                                        // 4187
      }                                                                                                                // 4188
                                                                                                                       // 4189
      for (var uuid in cache) {                                                                                        // 4190
        if (cache.hasOwnProperty(uuid)) {                                                                              // 4191
          var passed = this.results(uuid, cache[uuid]);                                                                // 4192
                                                                                                                       // 4193
          if (passed) {                                                                                                // 4194
            this.settings.directives[passed                                                                            // 4195
              .scenario[1]].call(this, passed.el, passed.scenario[0], function () {                                    // 4196
                if (arguments[0] instanceof Array) {                                                                   // 4197
                  var args = arguments[0];                                                                             // 4198
                } else {                                                                                               // 4199
                  var args = Array.prototype.slice.call(arguments, 0);                                                 // 4200
                }                                                                                                      // 4201
                                                                                                                       // 4202
                passed.el.trigger(passed.scenario[1], args);                                                           // 4203
              });                                                                                                      // 4204
          }                                                                                                            // 4205
        }                                                                                                              // 4206
      }                                                                                                                // 4207
                                                                                                                       // 4208
    },                                                                                                                 // 4209
                                                                                                                       // 4210
    results : function (uuid, scenarios) {                                                                             // 4211
      var count = scenarios.length;                                                                                    // 4212
                                                                                                                       // 4213
      if (count > 0) {                                                                                                 // 4214
        var el = this.S('[' + this.add_namespace('data-uuid') + '="' + uuid + '"]');                                   // 4215
                                                                                                                       // 4216
        while (count--) {                                                                                              // 4217
          var mq, rule = scenarios[count][2];                                                                          // 4218
          if (this.settings.named_queries.hasOwnProperty(rule)) {                                                      // 4219
            mq = matchMedia(this.settings.named_queries[rule]);                                                        // 4220
          } else {                                                                                                     // 4221
            mq = matchMedia(rule);                                                                                     // 4222
          }                                                                                                            // 4223
          if (mq.matches) {                                                                                            // 4224
            return {el: el, scenario: scenarios[count]};                                                               // 4225
          }                                                                                                            // 4226
        }                                                                                                              // 4227
      }                                                                                                                // 4228
                                                                                                                       // 4229
      return false;                                                                                                    // 4230
    },                                                                                                                 // 4231
                                                                                                                       // 4232
    load : function (type, force_update) {                                                                             // 4233
      if (typeof this['cached_' + type] === 'undefined' || force_update) {                                             // 4234
        this['update_' + type]();                                                                                      // 4235
      }                                                                                                                // 4236
                                                                                                                       // 4237
      return this['cached_' + type];                                                                                   // 4238
    },                                                                                                                 // 4239
                                                                                                                       // 4240
    update_images : function () {                                                                                      // 4241
      var images = this.S('img[' + this.data_attr + ']'),                                                              // 4242
          count = images.length,                                                                                       // 4243
          i = count,                                                                                                   // 4244
          loaded_count = 0,                                                                                            // 4245
          data_attr = this.data_attr;                                                                                  // 4246
                                                                                                                       // 4247
      this.cache = {};                                                                                                 // 4248
      this.cached_images = [];                                                                                         // 4249
      this.images_loaded = (count === 0);                                                                              // 4250
                                                                                                                       // 4251
      while (i--) {                                                                                                    // 4252
        loaded_count++;                                                                                                // 4253
        if (images[i]) {                                                                                               // 4254
          var str = images[i].getAttribute(data_attr) || '';                                                           // 4255
                                                                                                                       // 4256
          if (str.length > 0) {                                                                                        // 4257
            this.cached_images.push(images[i]);                                                                        // 4258
          }                                                                                                            // 4259
        }                                                                                                              // 4260
                                                                                                                       // 4261
        if (loaded_count === count) {                                                                                  // 4262
          this.images_loaded = true;                                                                                   // 4263
          this.enhance('images');                                                                                      // 4264
        }                                                                                                              // 4265
      }                                                                                                                // 4266
                                                                                                                       // 4267
      return this;                                                                                                     // 4268
    },                                                                                                                 // 4269
                                                                                                                       // 4270
    update_nodes : function () {                                                                                       // 4271
      var nodes = this.S('[' + this.data_attr + ']').not('img'),                                                       // 4272
          count = nodes.length,                                                                                        // 4273
          i = count,                                                                                                   // 4274
          loaded_count = 0,                                                                                            // 4275
          data_attr = this.data_attr;                                                                                  // 4276
                                                                                                                       // 4277
      this.cached_nodes = [];                                                                                          // 4278
      this.nodes_loaded = (count === 0);                                                                               // 4279
                                                                                                                       // 4280
                                                                                                                       // 4281
      while (i--) {                                                                                                    // 4282
        loaded_count++;                                                                                                // 4283
        var str = nodes[i].getAttribute(data_attr) || '';                                                              // 4284
                                                                                                                       // 4285
        if (str.length > 0) {                                                                                          // 4286
          this.cached_nodes.push(nodes[i]);                                                                            // 4287
        }                                                                                                              // 4288
                                                                                                                       // 4289
        if(loaded_count === count) {                                                                                   // 4290
          this.nodes_loaded = true;                                                                                    // 4291
          this.enhance('nodes');                                                                                       // 4292
        }                                                                                                              // 4293
      }                                                                                                                // 4294
                                                                                                                       // 4295
      return this;                                                                                                     // 4296
    },                                                                                                                 // 4297
                                                                                                                       // 4298
    enhance : function (type) {                                                                                        // 4299
      var i = this['cached_' + type].length;                                                                           // 4300
                                                                                                                       // 4301
      while (i--) {                                                                                                    // 4302
        this.object($(this['cached_' + type][i]));                                                                     // 4303
      }                                                                                                                // 4304
                                                                                                                       // 4305
      return $(window).trigger('resize').trigger('resize.fndtn.interchange');                                          // 4306
    },                                                                                                                 // 4307
                                                                                                                       // 4308
    convert_directive : function (directive) {                                                                         // 4309
                                                                                                                       // 4310
      var trimmed = this.trim(directive);                                                                              // 4311
                                                                                                                       // 4312
      if (trimmed.length > 0) {                                                                                        // 4313
        return trimmed;                                                                                                // 4314
      }                                                                                                                // 4315
                                                                                                                       // 4316
      return 'replace';                                                                                                // 4317
    },                                                                                                                 // 4318
                                                                                                                       // 4319
    parse_scenario : function (scenario) {                                                                             // 4320
      // This logic had to be made more complex since some users were using commas in the url path                     // 4321
      // So we cannot simply just split on a comma                                                                     // 4322
      var directive_match = scenario[0].match(/(.+),\s*(\w+)\s*$/),                                                    // 4323
      media_query         = scenario[1];                                                                               // 4324
                                                                                                                       // 4325
      if (directive_match) {                                                                                           // 4326
        var path  = directive_match[1],                                                                                // 4327
        directive = directive_match[2];                                                                                // 4328
      }                                                                                                                // 4329
      else {                                                                                                           // 4330
        var cached_split = scenario[0].split(/,\s*$/),                                                                 // 4331
        path             = cached_split[0],                                                                            // 4332
        directive        = '';                                                                                         // 4333
      }                                                                                                                // 4334
                                                                                                                       // 4335
      return [this.trim(path), this.convert_directive(directive), this.trim(media_query)];                             // 4336
    },                                                                                                                 // 4337
                                                                                                                       // 4338
    object : function(el) {                                                                                            // 4339
      var raw_arr = this.parse_data_attr(el),                                                                          // 4340
          scenarios = [],                                                                                              // 4341
          i = raw_arr.length;                                                                                          // 4342
                                                                                                                       // 4343
      if (i > 0) {                                                                                                     // 4344
        while (i--) {                                                                                                  // 4345
          var split = raw_arr[i].split(/\((.*?)(\))$/);                                                                // 4346
                                                                                                                       // 4347
          if (split.length > 1) {                                                                                      // 4348
            var params = this.parse_scenario(split);                                                                   // 4349
            scenarios.push(params);                                                                                    // 4350
          }                                                                                                            // 4351
        }                                                                                                              // 4352
      }                                                                                                                // 4353
                                                                                                                       // 4354
      return this.store(el, scenarios);                                                                                // 4355
    },                                                                                                                 // 4356
                                                                                                                       // 4357
    store : function (el, scenarios) {                                                                                 // 4358
      var uuid = this.random_str(),                                                                                    // 4359
          current_uuid = el.data(this.add_namespace('uuid', true));                                                    // 4360
                                                                                                                       // 4361
      if (this.cache[current_uuid]) return this.cache[current_uuid];                                                   // 4362
                                                                                                                       // 4363
      el.attr(this.add_namespace('data-uuid'), uuid);                                                                  // 4364
                                                                                                                       // 4365
      return this.cache[uuid] = scenarios;                                                                             // 4366
    },                                                                                                                 // 4367
                                                                                                                       // 4368
    trim : function(str) {                                                                                             // 4369
                                                                                                                       // 4370
      if (typeof str === 'string') {                                                                                   // 4371
        return $.trim(str);                                                                                            // 4372
      }                                                                                                                // 4373
                                                                                                                       // 4374
      return str;                                                                                                      // 4375
    },                                                                                                                 // 4376
                                                                                                                       // 4377
    set_data_attr: function (init) {                                                                                   // 4378
      if (init) {                                                                                                      // 4379
        if (this.namespace.length > 0) {                                                                               // 4380
          return this.namespace + '-' + this.settings.load_attr;                                                       // 4381
        }                                                                                                              // 4382
                                                                                                                       // 4383
        return this.settings.load_attr;                                                                                // 4384
      }                                                                                                                // 4385
                                                                                                                       // 4386
      if (this.namespace.length > 0) {                                                                                 // 4387
        return 'data-' + this.namespace + '-' + this.settings.load_attr;                                               // 4388
      }                                                                                                                // 4389
                                                                                                                       // 4390
      return 'data-' + this.settings.load_attr;                                                                        // 4391
    },                                                                                                                 // 4392
                                                                                                                       // 4393
    parse_data_attr : function (el) {                                                                                  // 4394
      var raw = el.attr(this.attr_name()).split(/\[(.*?)\]/),                                                          // 4395
          i = raw.length,                                                                                              // 4396
          output = [];                                                                                                 // 4397
                                                                                                                       // 4398
      while (i--) {                                                                                                    // 4399
        if (raw[i].replace(/[\W\d]+/, '').length > 4) {                                                                // 4400
          output.push(raw[i]);                                                                                         // 4401
        }                                                                                                              // 4402
      }                                                                                                                // 4403
                                                                                                                       // 4404
      return output;                                                                                                   // 4405
    },                                                                                                                 // 4406
                                                                                                                       // 4407
    reflow : function () {                                                                                             // 4408
      this.load('images', true);                                                                                       // 4409
      this.load('nodes', true);                                                                                        // 4410
    }                                                                                                                  // 4411
                                                                                                                       // 4412
  };                                                                                                                   // 4413
                                                                                                                       // 4414
}(jQuery, window, window.document));                                                                                   // 4415
;(function ($, window, document, undefined) {                                                                          // 4416
  'use strict';                                                                                                        // 4417
                                                                                                                       // 4418
  Foundation.libs['magellan-expedition'] = {                                                                           // 4419
    name : 'magellan-expedition',                                                                                      // 4420
                                                                                                                       // 4421
    version : '5.5.0',                                                                                                 // 4422
                                                                                                                       // 4423
    settings : {                                                                                                       // 4424
      active_class: 'active',                                                                                          // 4425
      threshold: 0, // pixels from the top of the expedition for it to become fixes                                    // 4426
      destination_threshold: 20, // pixels from the top of destination for it to be considered active                  // 4427
      throttle_delay: 30, // calculation throttling to increase framerate                                              // 4428
      fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll                                  // 4429
      offset_by_height: true,  // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
      duration: 700, // animation duration time                                                                        // 4431
      easing: 'swing' // animation easing                                                                              // 4432
    },                                                                                                                 // 4433
                                                                                                                       // 4434
    init : function (scope, method, options) {                                                                         // 4435
      Foundation.inherit(this, 'throttle');                                                                            // 4436
      this.bindings(method, options);                                                                                  // 4437
    },                                                                                                                 // 4438
                                                                                                                       // 4439
    events : function () {                                                                                             // 4440
      var self = this,                                                                                                 // 4441
          S = self.S,                                                                                                  // 4442
          settings = self.settings;                                                                                    // 4443
                                                                                                                       // 4444
      // initialize expedition offset                                                                                  // 4445
      self.set_expedition_position();                                                                                  // 4446
                                                                                                                       // 4447
      S(self.scope)                                                                                                    // 4448
        .off('.magellan')                                                                                              // 4449
        .on('click.fndtn.magellan', '[' + self.add_namespace('data-magellan-arrival') + '] a[href^="#"]', function (e) {
          e.preventDefault();                                                                                          // 4451
          var expedition = $(this).closest('[' + self.attr_name() + ']'),                                              // 4452
              settings = expedition.data('magellan-expedition-init'),                                                  // 4453
              hash = this.hash.split('#').join(''),                                                                    // 4454
              target = $('a[name="'+hash+'"]');                                                                        // 4455
                                                                                                                       // 4456
          if (target.length === 0) {                                                                                   // 4457
            target = $('#'+hash);                                                                                      // 4458
                                                                                                                       // 4459
          }                                                                                                            // 4460
                                                                                                                       // 4461
                                                                                                                       // 4462
          // Account for expedition height if fixed position                                                           // 4463
          var scroll_top = target.offset().top - settings.destination_threshold + 1;                                   // 4464
          if (settings.offset_by_height) {                                                                             // 4465
            scroll_top = scroll_top - expedition.outerHeight();                                                        // 4466
          }                                                                                                            // 4467
                                                                                                                       // 4468
          $('html, body').stop().animate({                                                                             // 4469
            'scrollTop': scroll_top                                                                                    // 4470
          }, settings.duration, settings.easing, function () {                                                         // 4471
            if(history.pushState) {                                                                                    // 4472
              history.pushState(null, null, '#'+hash);                                                                 // 4473
            }                                                                                                          // 4474
            else {                                                                                                     // 4475
              location.hash = '#'+hash;                                                                                // 4476
            }                                                                                                          // 4477
          });                                                                                                          // 4478
        })                                                                                                             // 4479
        .on('scroll.fndtn.magellan', self.throttle(this.check_for_arrivals.bind(this), settings.throttle_delay));      // 4480
                                                                                                                       // 4481
      $(window)                                                                                                        // 4482
        .on('resize.fndtn.magellan', self.throttle(this.set_expedition_position.bind(this), settings.throttle_delay)); // 4483
    },                                                                                                                 // 4484
                                                                                                                       // 4485
    check_for_arrivals : function() {                                                                                  // 4486
      var self = this;                                                                                                 // 4487
      self.update_arrivals();                                                                                          // 4488
      self.update_expedition_positions();                                                                              // 4489
    },                                                                                                                 // 4490
                                                                                                                       // 4491
    set_expedition_position : function() {                                                                             // 4492
      var self = this;                                                                                                 // 4493
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function(idx, el) {                                       // 4494
        var expedition = $(this),                                                                                      // 4495
            settings = expedition.data('magellan-expedition-init'),                                                    // 4496
            styles = expedition.attr('styles'), // save styles                                                         // 4497
            top_offset, fixed_top;                                                                                     // 4498
                                                                                                                       // 4499
        expedition.attr('style', '');                                                                                  // 4500
        top_offset = expedition.offset().top + settings.threshold;                                                     // 4501
                                                                                                                       // 4502
        //set fixed-top by attribute                                                                                   // 4503
        fixed_top = parseInt(expedition.data('magellan-fixed-top'));                                                   // 4504
        if(!isNaN(fixed_top))                                                                                          // 4505
            self.settings.fixed_top = fixed_top;                                                                       // 4506
                                                                                                                       // 4507
        expedition.data(self.data_attr('magellan-top-offset'), top_offset);                                            // 4508
        expedition.attr('style', styles);                                                                              // 4509
      });                                                                                                              // 4510
    },                                                                                                                 // 4511
                                                                                                                       // 4512
    update_expedition_positions : function() {                                                                         // 4513
      var self = this,                                                                                                 // 4514
          window_top_offset = $(window).scrollTop();                                                                   // 4515
                                                                                                                       // 4516
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function() {                                              // 4517
        var expedition = $(this),                                                                                      // 4518
            settings = expedition.data('magellan-expedition-init'),                                                    // 4519
            styles = expedition.attr('style'), // save styles                                                          // 4520
            top_offset = expedition.data('magellan-top-offset');                                                       // 4521
                                                                                                                       // 4522
        //scroll to the top distance                                                                                   // 4523
        if (window_top_offset+self.settings.fixed_top >= top_offset) {                                                 // 4524
          // Placeholder allows height calculations to be consistent even when                                         // 4525
          // appearing to switch between fixed/non-fixed placement                                                     // 4526
          var placeholder = expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']');         // 4527
          if (placeholder.length === 0) {                                                                              // 4528
            placeholder = expedition.clone();                                                                          // 4529
            placeholder.removeAttr(self.attr_name());                                                                  // 4530
            placeholder.attr(self.add_namespace('data-magellan-expedition-clone'),'');                                 // 4531
            expedition.before(placeholder);                                                                            // 4532
          }                                                                                                            // 4533
          expedition.css({position:'fixed', top: settings.fixed_top}).addClass('fixed');                               // 4534
        } else {                                                                                                       // 4535
          expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']').remove();                  // 4536
          expedition.attr('style',styles).css('position','').css('top','').removeClass('fixed');                       // 4537
        }                                                                                                              // 4538
      });                                                                                                              // 4539
    },                                                                                                                 // 4540
                                                                                                                       // 4541
    update_arrivals : function() {                                                                                     // 4542
      var self = this,                                                                                                 // 4543
          window_top_offset = $(window).scrollTop();                                                                   // 4544
                                                                                                                       // 4545
      $('[' + this.attr_name() + ']', self.scope).each(function() {                                                    // 4546
        var expedition = $(this),                                                                                      // 4547
            settings = expedition.data(self.attr_name(true) + '-init'),                                                // 4548
            offsets = self.offsets(expedition, window_top_offset),                                                     // 4549
            arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']'),                       // 4550
            active_item = false;                                                                                       // 4551
        offsets.each(function(idx, item) {                                                                             // 4552
          if (item.viewport_offset >= item.top_offset) {                                                               // 4553
            var arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');                   // 4554
            arrivals.not(item.arrival).removeClass(settings.active_class);                                             // 4555
            item.arrival.addClass(settings.active_class);                                                              // 4556
            active_item = true;                                                                                        // 4557
            return true;                                                                                               // 4558
          }                                                                                                            // 4559
        });                                                                                                            // 4560
                                                                                                                       // 4561
        if (!active_item) arrivals.removeClass(settings.active_class);                                                 // 4562
      });                                                                                                              // 4563
    },                                                                                                                 // 4564
                                                                                                                       // 4565
    offsets : function(expedition, window_offset) {                                                                    // 4566
      var self = this,                                                                                                 // 4567
          settings = expedition.data(self.attr_name(true) + '-init'),                                                  // 4568
          viewport_offset = window_offset;                                                                             // 4569
                                                                                                                       // 4570
      return expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']').map(function(idx, el) {          // 4571
        var name = $(this).data(self.data_attr('magellan-arrival')),                                                   // 4572
            dest = $('[' + self.add_namespace('data-magellan-destination') + '=' + name + ']');                        // 4573
        if (dest.length > 0) {                                                                                         // 4574
          var top_offset = dest.offset().top - settings.destination_threshold;                                         // 4575
          if (settings.offset_by_height) {                                                                             // 4576
            top_offset = top_offset - expedition.outerHeight();                                                        // 4577
          }                                                                                                            // 4578
          top_offset = Math.floor(top_offset);                                                                         // 4579
          return {                                                                                                     // 4580
            destination : dest,                                                                                        // 4581
            arrival : $(this),                                                                                         // 4582
            top_offset : top_offset,                                                                                   // 4583
            viewport_offset : viewport_offset                                                                          // 4584
          }                                                                                                            // 4585
        }                                                                                                              // 4586
      }).sort(function(a, b) {                                                                                         // 4587
        if (a.top_offset < b.top_offset) return -1;                                                                    // 4588
        if (a.top_offset > b.top_offset) return 1;                                                                     // 4589
        return 0;                                                                                                      // 4590
      });                                                                                                              // 4591
    },                                                                                                                 // 4592
                                                                                                                       // 4593
    data_attr: function (str) {                                                                                        // 4594
      if (this.namespace.length > 0) {                                                                                 // 4595
        return this.namespace + '-' + str;                                                                             // 4596
      }                                                                                                                // 4597
                                                                                                                       // 4598
      return str;                                                                                                      // 4599
    },                                                                                                                 // 4600
                                                                                                                       // 4601
    off : function () {                                                                                                // 4602
      this.S(this.scope).off('.magellan');                                                                             // 4603
      this.S(window).off('.magellan');                                                                                 // 4604
    },                                                                                                                 // 4605
                                                                                                                       // 4606
    reflow : function () {                                                                                             // 4607
      var self = this;                                                                                                 // 4608
      // remove placeholder expeditions used for height calculation purposes                                           // 4609
      $('[' + self.add_namespace('data-magellan-expedition-clone') + ']', self.scope).remove();                        // 4610
    }                                                                                                                  // 4611
  };                                                                                                                   // 4612
}(jQuery, window, window.document));                                                                                   // 4613
;(function ($, window, document, undefined) {                                                                          // 4614
  'use strict';                                                                                                        // 4615
                                                                                                                       // 4616
  Foundation.libs.accordion = {                                                                                        // 4617
    name : 'accordion',                                                                                                // 4618
                                                                                                                       // 4619
    version : '5.5.0',                                                                                                 // 4620
                                                                                                                       // 4621
    settings : {                                                                                                       // 4622
      content_class: 'content',                                                                                        // 4623
      active_class: 'active',                                                                                          // 4624
      multi_expand: false,                                                                                             // 4625
      toggleable: true,                                                                                                // 4626
      callback : function () {}                                                                                        // 4627
    },                                                                                                                 // 4628
                                                                                                                       // 4629
    init : function (scope, method, options) {                                                                         // 4630
      this.bindings(method, options);                                                                                  // 4631
    },                                                                                                                 // 4632
                                                                                                                       // 4633
    events : function () {                                                                                             // 4634
      var self = this;                                                                                                 // 4635
      var S = this.S;                                                                                                  // 4636
      S(this.scope)                                                                                                    // 4637
      .off('.fndtn.accordion')                                                                                         // 4638
      .on('click.fndtn.accordion', '[' + this.attr_name() + '] > .accordion-navigation > a', function (e) {            // 4639
        var accordion = S(this).closest('[' + self.attr_name() + ']'),                                                 // 4640
            groupSelector = self.attr_name() + '=' + accordion.attr(self.attr_name()),                                 // 4641
            settings = accordion.data(self.attr_name(true) + '-init') || self.settings,                                // 4642
            target = S('#' + this.href.split('#')[1]),                                                                 // 4643
            aunts = $('> .accordion-navigation', accordion),                                                           // 4644
            siblings = aunts.children('.'+settings.content_class),                                                     // 4645
            active_content = siblings.filter('.' + settings.active_class);                                             // 4646
                                                                                                                       // 4647
        e.preventDefault();                                                                                            // 4648
                                                                                                                       // 4649
        if (accordion.attr(self.attr_name())) {                                                                        // 4650
          siblings = siblings.add('[' + groupSelector + '] dd > '+'.'+settings.content_class);                         // 4651
          aunts = aunts.add('[' + groupSelector + '] .accordion-navigation');                                          // 4652
        }                                                                                                              // 4653
                                                                                                                       // 4654
        if (settings.toggleable && target.is(active_content)) {                                                        // 4655
          target.parent('.accordion-navigation').toggleClass(settings.active_class, false);                            // 4656
          target.toggleClass(settings.active_class, false);                                                            // 4657
          settings.callback(target);                                                                                   // 4658
          target.triggerHandler('toggled', [accordion]);                                                               // 4659
          accordion.triggerHandler('toggled', [target]);                                                               // 4660
          return;                                                                                                      // 4661
        }                                                                                                              // 4662
                                                                                                                       // 4663
        if (!settings.multi_expand) {                                                                                  // 4664
          siblings.removeClass(settings.active_class);                                                                 // 4665
          aunts.removeClass(settings.active_class);                                                                    // 4666
        }                                                                                                              // 4667
                                                                                                                       // 4668
        target.addClass(settings.active_class).parent().addClass(settings.active_class);                               // 4669
        settings.callback(target);                                                                                     // 4670
        target.triggerHandler('toggled', [accordion]);                                                                 // 4671
        accordion.triggerHandler('toggled', [target]);                                                                 // 4672
      });                                                                                                              // 4673
    },                                                                                                                 // 4674
                                                                                                                       // 4675
    off : function () {},                                                                                              // 4676
                                                                                                                       // 4677
    reflow : function () {}                                                                                            // 4678
  };                                                                                                                   // 4679
}(jQuery, window, window.document));                                                                                   // 4680
;(function ($, window, document, undefined) {                                                                          // 4681
  'use strict';                                                                                                        // 4682
                                                                                                                       // 4683
  Foundation.libs.topbar = {                                                                                           // 4684
    name : 'topbar',                                                                                                   // 4685
                                                                                                                       // 4686
    version: '5.5.0',                                                                                                  // 4687
                                                                                                                       // 4688
    settings : {                                                                                                       // 4689
      index : 0,                                                                                                       // 4690
      sticky_class : 'sticky',                                                                                         // 4691
      custom_back_text: true,                                                                                          // 4692
      back_text: 'Back',                                                                                               // 4693
      mobile_show_parent_link: true,                                                                                   // 4694
      is_hover: true,                                                                                                  // 4695
      scrolltop : true, // jump to top when sticky nav menu toggle is clicked                                          // 4696
      sticky_on : 'all'                                                                                                // 4697
    },                                                                                                                 // 4698
                                                                                                                       // 4699
    init : function (section, method, options) {                                                                       // 4700
      Foundation.inherit(this, 'add_custom_rule register_media throttle');                                             // 4701
      var self = this;                                                                                                 // 4702
                                                                                                                       // 4703
      self.register_media('topbar', 'foundation-mq-topbar');                                                           // 4704
                                                                                                                       // 4705
      this.bindings(method, options);                                                                                  // 4706
                                                                                                                       // 4707
      self.S('[' + this.attr_name() + ']', this.scope).each(function () {                                              // 4708
        var topbar = $(this),                                                                                          // 4709
            settings = topbar.data(self.attr_name(true) + '-init'),                                                    // 4710
            section = self.S('section, .top-bar-section', this);                                                       // 4711
        topbar.data('index', 0);                                                                                       // 4712
        var topbarContainer = topbar.parent();                                                                         // 4713
        if (topbarContainer.hasClass('fixed') || self.is_sticky(topbar, topbarContainer, settings) ) {                 // 4714
          self.settings.sticky_class = settings.sticky_class;                                                          // 4715
          self.settings.sticky_topbar = topbar;                                                                        // 4716
          topbar.data('height', topbarContainer.outerHeight());                                                        // 4717
          topbar.data('stickyoffset', topbarContainer.offset().top);                                                   // 4718
        } else {                                                                                                       // 4719
          topbar.data('height', topbar.outerHeight());                                                                 // 4720
        }                                                                                                              // 4721
                                                                                                                       // 4722
        if (!settings.assembled) {                                                                                     // 4723
          self.assemble(topbar);                                                                                       // 4724
        }                                                                                                              // 4725
                                                                                                                       // 4726
        if (settings.is_hover) {                                                                                       // 4727
          self.S('.has-dropdown', topbar).addClass('not-click');                                                       // 4728
        } else {                                                                                                       // 4729
          self.S('.has-dropdown', topbar).removeClass('not-click');                                                    // 4730
        }                                                                                                              // 4731
                                                                                                                       // 4732
        // Pad body when sticky (scrolled) or fixed.                                                                   // 4733
        self.add_custom_rule('.f-topbar-fixed { padding-top: ' + topbar.data('height') + 'px }');                      // 4734
                                                                                                                       // 4735
        if (topbarContainer.hasClass('fixed')) {                                                                       // 4736
          self.S('body').addClass('f-topbar-fixed');                                                                   // 4737
        }                                                                                                              // 4738
      });                                                                                                              // 4739
                                                                                                                       // 4740
    },                                                                                                                 // 4741
                                                                                                                       // 4742
    is_sticky: function (topbar, topbarContainer, settings) {                                                          // 4743
      var sticky = topbarContainer.hasClass(settings.sticky_class);                                                    // 4744
                                                                                                                       // 4745
      if (sticky && settings.sticky_on === 'all') {                                                                    // 4746
        return true;                                                                                                   // 4747
      } else if (sticky && this.small() && settings.sticky_on === 'small') {                                           // 4748
        return (matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches &&
            !matchMedia(Foundation.media_queries.large).matches);                                                      // 4750
        //return true;                                                                                                 // 4751
      } else if (sticky && this.medium() && settings.sticky_on === 'medium') {                                         // 4752
        return (matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches &&
            !matchMedia(Foundation.media_queries.large).matches);                                                      // 4754
        //return true;                                                                                                 // 4755
      } else if(sticky && this.large() && settings.sticky_on === 'large') {                                            // 4756
        return (matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches &&
            matchMedia(Foundation.media_queries.large).matches);                                                       // 4758
        //return true;                                                                                                 // 4759
      }                                                                                                                // 4760
                                                                                                                       // 4761
      return false;                                                                                                    // 4762
    },                                                                                                                 // 4763
                                                                                                                       // 4764
    toggle: function (toggleEl) {                                                                                      // 4765
      var self = this,                                                                                                 // 4766
          topbar;                                                                                                      // 4767
                                                                                                                       // 4768
      if (toggleEl) {                                                                                                  // 4769
        topbar = self.S(toggleEl).closest('[' + this.attr_name() + ']');                                               // 4770
      } else {                                                                                                         // 4771
        topbar = self.S('[' + this.attr_name() + ']');                                                                 // 4772
      }                                                                                                                // 4773
                                                                                                                       // 4774
      var settings = topbar.data(this.attr_name(true) + '-init');                                                      // 4775
                                                                                                                       // 4776
      var section = self.S('section, .top-bar-section', topbar);                                                       // 4777
                                                                                                                       // 4778
      if (self.breakpoint()) {                                                                                         // 4779
        if (!self.rtl) {                                                                                               // 4780
          section.css({left: '0%'});                                                                                   // 4781
          $('>.name', section).css({left: '100%'});                                                                    // 4782
        } else {                                                                                                       // 4783
          section.css({right: '0%'});                                                                                  // 4784
          $('>.name', section).css({right: '100%'});                                                                   // 4785
        }                                                                                                              // 4786
                                                                                                                       // 4787
        self.S('li.moved', section).removeClass('moved');                                                              // 4788
        topbar.data('index', 0);                                                                                       // 4789
                                                                                                                       // 4790
        topbar                                                                                                         // 4791
          .toggleClass('expanded')                                                                                     // 4792
          .css('height', '');                                                                                          // 4793
      }                                                                                                                // 4794
                                                                                                                       // 4795
      if (settings.scrolltop) {                                                                                        // 4796
        if (!topbar.hasClass('expanded')) {                                                                            // 4797
          if (topbar.hasClass('fixed')) {                                                                              // 4798
            topbar.parent().addClass('fixed');                                                                         // 4799
            topbar.removeClass('fixed');                                                                               // 4800
            self.S('body').addClass('f-topbar-fixed');                                                                 // 4801
          }                                                                                                            // 4802
        } else if (topbar.parent().hasClass('fixed')) {                                                                // 4803
          if (settings.scrolltop) {                                                                                    // 4804
            topbar.parent().removeClass('fixed');                                                                      // 4805
            topbar.addClass('fixed');                                                                                  // 4806
            self.S('body').removeClass('f-topbar-fixed');                                                              // 4807
                                                                                                                       // 4808
            window.scrollTo(0,0);                                                                                      // 4809
          } else {                                                                                                     // 4810
            topbar.parent().removeClass('expanded');                                                                   // 4811
          }                                                                                                            // 4812
        }                                                                                                              // 4813
      } else {                                                                                                         // 4814
        if (self.is_sticky(topbar, topbar.parent(), settings)) {                                                       // 4815
          topbar.parent().addClass('fixed');                                                                           // 4816
        }                                                                                                              // 4817
                                                                                                                       // 4818
        if (topbar.parent().hasClass('fixed')) {                                                                       // 4819
          if (!topbar.hasClass('expanded')) {                                                                          // 4820
            topbar.removeClass('fixed');                                                                               // 4821
            topbar.parent().removeClass('expanded');                                                                   // 4822
            self.update_sticky_positioning();                                                                          // 4823
          } else {                                                                                                     // 4824
            topbar.addClass('fixed');                                                                                  // 4825
            topbar.parent().addClass('expanded');                                                                      // 4826
            self.S('body').addClass('f-topbar-fixed');                                                                 // 4827
          }                                                                                                            // 4828
        }                                                                                                              // 4829
      }                                                                                                                // 4830
    },                                                                                                                 // 4831
                                                                                                                       // 4832
    timer : null,                                                                                                      // 4833
                                                                                                                       // 4834
    events : function (bar) {                                                                                          // 4835
      var self = this,                                                                                                 // 4836
          S = this.S;                                                                                                  // 4837
                                                                                                                       // 4838
      S(this.scope)                                                                                                    // 4839
        .off('.topbar')                                                                                                // 4840
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {                          // 4841
          e.preventDefault();                                                                                          // 4842
          self.toggle(this);                                                                                           // 4843
        })                                                                                                             // 4844
        .on('click.fndtn.topbar','.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]',function (e) {
            var li = $(this).closest('li');                                                                            // 4846
            if(self.breakpoint() && !li.hasClass('back') && !li.hasClass('has-dropdown'))                              // 4847
            {                                                                                                          // 4848
            self.toggle();                                                                                             // 4849
            }                                                                                                          // 4850
        })                                                                                                             // 4851
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (e) {                         // 4852
          var li = S(this),                                                                                            // 4853
              target = S(e.target),                                                                                    // 4854
              topbar = li.closest('[' + self.attr_name() + ']'),                                                       // 4855
              settings = topbar.data(self.attr_name(true) + '-init');                                                  // 4856
                                                                                                                       // 4857
          if(target.data('revealId')) {                                                                                // 4858
            self.toggle();                                                                                             // 4859
            return;                                                                                                    // 4860
          }                                                                                                            // 4861
                                                                                                                       // 4862
          if (self.breakpoint()) return;                                                                               // 4863
          if (settings.is_hover && !Modernizr.touch) return;                                                           // 4864
                                                                                                                       // 4865
          e.stopImmediatePropagation();                                                                                // 4866
                                                                                                                       // 4867
          if (li.hasClass('hover')) {                                                                                  // 4868
            li                                                                                                         // 4869
              .removeClass('hover')                                                                                    // 4870
              .find('li')                                                                                              // 4871
              .removeClass('hover');                                                                                   // 4872
                                                                                                                       // 4873
            li.parents('li.hover')                                                                                     // 4874
              .removeClass('hover');                                                                                   // 4875
          } else {                                                                                                     // 4876
            li.addClass('hover');                                                                                      // 4877
                                                                                                                       // 4878
            $(li).siblings().removeClass('hover');                                                                     // 4879
                                                                                                                       // 4880
            if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {                              // 4881
              e.preventDefault();                                                                                      // 4882
            }                                                                                                          // 4883
          }                                                                                                            // 4884
        })                                                                                                             // 4885
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {                         // 4886
          if (self.breakpoint()) {                                                                                     // 4887
                                                                                                                       // 4888
            e.preventDefault();                                                                                        // 4889
                                                                                                                       // 4890
            var $this = S(this),                                                                                       // 4891
                topbar = $this.closest('[' + self.attr_name() + ']'),                                                  // 4892
                section = topbar.find('section, .top-bar-section'),                                                    // 4893
                dropdownHeight = $this.next('.dropdown').outerHeight(),                                                // 4894
                $selectedLi = $this.closest('li');                                                                     // 4895
                                                                                                                       // 4896
            topbar.data('index', topbar.data('index') + 1);                                                            // 4897
            $selectedLi.addClass('moved');                                                                             // 4898
                                                                                                                       // 4899
            if (!self.rtl) {                                                                                           // 4900
              section.css({left: -(100 * topbar.data('index')) + '%'});                                                // 4901
              section.find('>.name').css({left: 100 * topbar.data('index') + '%'});                                    // 4902
            } else {                                                                                                   // 4903
              section.css({right: -(100 * topbar.data('index')) + '%'});                                               // 4904
              section.find('>.name').css({right: 100 * topbar.data('index') + '%'});                                   // 4905
            }                                                                                                          // 4906
                                                                                                                       // 4907
            topbar.css('height', $this.siblings('ul').outerHeight(true) + topbar.data('height'));                      // 4908
          }                                                                                                            // 4909
        });                                                                                                            // 4910
                                                                                                                       // 4911
      S(window).off('.topbar').on('resize.fndtn.topbar', self.throttle(function() {                                    // 4912
          self.resize.call(self);                                                                                      // 4913
      }, 50)).trigger('resize').trigger('resize.fndtn.topbar').load(function(){                                        // 4914
          // Ensure that the offset is calculated after all of the pages resources have loaded                         // 4915
          S(this).trigger('resize.fndtn.topbar');                                                                      // 4916
      });                                                                                                              // 4917
                                                                                                                       // 4918
      S('body').off('.topbar').on('click.fndtn.topbar', function (e) {                                                 // 4919
        var parent = S(e.target).closest('li').closest('li.hover');                                                    // 4920
                                                                                                                       // 4921
        if (parent.length > 0) {                                                                                       // 4922
          return;                                                                                                      // 4923
        }                                                                                                              // 4924
                                                                                                                       // 4925
        S('[' + self.attr_name() + '] li.hover').removeClass('hover');                                                 // 4926
      });                                                                                                              // 4927
                                                                                                                       // 4928
      // Go up a level on Click                                                                                        // 4929
      S(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {          // 4930
        e.preventDefault();                                                                                            // 4931
                                                                                                                       // 4932
        var $this = S(this),                                                                                           // 4933
            topbar = $this.closest('[' + self.attr_name() + ']'),                                                      // 4934
            section = topbar.find('section, .top-bar-section'),                                                        // 4935
            settings = topbar.data(self.attr_name(true) + '-init'),                                                    // 4936
            $movedLi = $this.closest('li.moved'),                                                                      // 4937
            $previousLevelUl = $movedLi.parent();                                                                      // 4938
                                                                                                                       // 4939
        topbar.data('index', topbar.data('index') - 1);                                                                // 4940
                                                                                                                       // 4941
        if (!self.rtl) {                                                                                               // 4942
          section.css({left: -(100 * topbar.data('index')) + '%'});                                                    // 4943
          section.find('>.name').css({left: 100 * topbar.data('index') + '%'});                                        // 4944
        } else {                                                                                                       // 4945
          section.css({right: -(100 * topbar.data('index')) + '%'});                                                   // 4946
          section.find('>.name').css({right: 100 * topbar.data('index') + '%'});                                       // 4947
        }                                                                                                              // 4948
                                                                                                                       // 4949
        if (topbar.data('index') === 0) {                                                                              // 4950
          topbar.css('height', '');                                                                                    // 4951
        } else {                                                                                                       // 4952
          topbar.css('height', $previousLevelUl.outerHeight(true) + topbar.data('height'));                            // 4953
        }                                                                                                              // 4954
                                                                                                                       // 4955
        setTimeout(function () {                                                                                       // 4956
          $movedLi.removeClass('moved');                                                                               // 4957
        }, 300);                                                                                                       // 4958
      });                                                                                                              // 4959
                                                                                                                       // 4960
      // Show dropdown menus when their items are focused                                                              // 4961
      S(this.scope).find('.dropdown a')                                                                                // 4962
        .focus(function() {                                                                                            // 4963
          $(this).parents('.has-dropdown').addClass('hover');                                                          // 4964
        })                                                                                                             // 4965
        .blur(function() {                                                                                             // 4966
          $(this).parents('.has-dropdown').removeClass('hover');                                                       // 4967
        });                                                                                                            // 4968
    },                                                                                                                 // 4969
                                                                                                                       // 4970
    resize : function () {                                                                                             // 4971
      var self = this;                                                                                                 // 4972
      self.S('[' + this.attr_name() + ']').each(function () {                                                          // 4973
        var topbar = self.S(this),                                                                                     // 4974
            settings = topbar.data(self.attr_name(true) + '-init');                                                    // 4975
                                                                                                                       // 4976
        var stickyContainer = topbar.parent('.' + self.settings.sticky_class);                                         // 4977
        var stickyOffset;                                                                                              // 4978
                                                                                                                       // 4979
        if (!self.breakpoint()) {                                                                                      // 4980
          var doToggle = topbar.hasClass('expanded');                                                                  // 4981
          topbar                                                                                                       // 4982
            .css('height', '')                                                                                         // 4983
            .removeClass('expanded')                                                                                   // 4984
            .find('li')                                                                                                // 4985
            .removeClass('hover');                                                                                     // 4986
                                                                                                                       // 4987
            if(doToggle) {                                                                                             // 4988
              self.toggle(topbar);                                                                                     // 4989
            }                                                                                                          // 4990
        }                                                                                                              // 4991
                                                                                                                       // 4992
        if(self.is_sticky(topbar, stickyContainer, settings)) {                                                        // 4993
          if(stickyContainer.hasClass('fixed')) {                                                                      // 4994
            // Remove the fixed to allow for correct calculation of the offset.                                        // 4995
            stickyContainer.removeClass('fixed');                                                                      // 4996
                                                                                                                       // 4997
            stickyOffset = stickyContainer.offset().top;                                                               // 4998
            if(self.S(document.body).hasClass('f-topbar-fixed')) {                                                     // 4999
              stickyOffset -= topbar.data('height');                                                                   // 5000
            }                                                                                                          // 5001
                                                                                                                       // 5002
            topbar.data('stickyoffset', stickyOffset);                                                                 // 5003
            stickyContainer.addClass('fixed');                                                                         // 5004
          } else {                                                                                                     // 5005
            stickyOffset = stickyContainer.offset().top;                                                               // 5006
            topbar.data('stickyoffset', stickyOffset);                                                                 // 5007
          }                                                                                                            // 5008
        }                                                                                                              // 5009
                                                                                                                       // 5010
      });                                                                                                              // 5011
    },                                                                                                                 // 5012
                                                                                                                       // 5013
    breakpoint : function () {                                                                                         // 5014
      return !matchMedia(Foundation.media_queries['topbar']).matches;                                                  // 5015
    },                                                                                                                 // 5016
                                                                                                                       // 5017
    small : function () {                                                                                              // 5018
      return matchMedia(Foundation.media_queries['small']).matches;                                                    // 5019
    },                                                                                                                 // 5020
                                                                                                                       // 5021
    medium : function () {                                                                                             // 5022
      return matchMedia(Foundation.media_queries['medium']).matches;                                                   // 5023
    },                                                                                                                 // 5024
                                                                                                                       // 5025
    large : function () {                                                                                              // 5026
      return matchMedia(Foundation.media_queries['large']).matches;                                                    // 5027
    },                                                                                                                 // 5028
                                                                                                                       // 5029
    assemble : function (topbar) {                                                                                     // 5030
      var self = this,                                                                                                 // 5031
          settings = topbar.data(this.attr_name(true) + '-init'),                                                      // 5032
          section = self.S('section, .top-bar-section', topbar);                                                       // 5033
                                                                                                                       // 5034
      // Pull element out of the DOM for manipulation                                                                  // 5035
      section.detach();                                                                                                // 5036
                                                                                                                       // 5037
      self.S('.has-dropdown>a', section).each(function () {                                                            // 5038
        var $link = self.S(this),                                                                                      // 5039
            $dropdown = $link.siblings('.dropdown'),                                                                   // 5040
            url = $link.attr('href'),                                                                                  // 5041
            $titleLi;                                                                                                  // 5042
                                                                                                                       // 5043
                                                                                                                       // 5044
        if (!$dropdown.find('.title.back').length) {                                                                   // 5045
                                                                                                                       // 5046
          if (settings.mobile_show_parent_link == true && url) {                                                       // 5047
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small-only"><a class="parent-link js-generated" href="' + url + '">' + $link.html() +'</a></li>');
          } else {                                                                                                     // 5049
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>');            // 5050
          }                                                                                                            // 5051
                                                                                                                       // 5052
          // Copy link to subnav                                                                                       // 5053
          if (settings.custom_back_text == true) {                                                                     // 5054
            $('h5>a', $titleLi).html(settings.back_text);                                                              // 5055
          } else {                                                                                                     // 5056
            $('h5>a', $titleLi).html('&laquo; ' + $link.html());                                                       // 5057
          }                                                                                                            // 5058
          $dropdown.prepend($titleLi);                                                                                 // 5059
        }                                                                                                              // 5060
      });                                                                                                              // 5061
                                                                                                                       // 5062
      // Put element back in the DOM                                                                                   // 5063
      section.appendTo(topbar);                                                                                        // 5064
                                                                                                                       // 5065
      // check for sticky                                                                                              // 5066
      this.sticky();                                                                                                   // 5067
                                                                                                                       // 5068
      this.assembled(topbar);                                                                                          // 5069
    },                                                                                                                 // 5070
                                                                                                                       // 5071
    assembled : function (topbar) {                                                                                    // 5072
      topbar.data(this.attr_name(true), $.extend({}, topbar.data(this.attr_name(true)), {assembled: true}));           // 5073
    },                                                                                                                 // 5074
                                                                                                                       // 5075
    height : function (ul) {                                                                                           // 5076
      var total = 0,                                                                                                   // 5077
          self = this;                                                                                                 // 5078
                                                                                                                       // 5079
      $('> li', ul).each(function () {                                                                                 // 5080
        total += self.S(this).outerHeight(true);                                                                       // 5081
      });                                                                                                              // 5082
                                                                                                                       // 5083
      return total;                                                                                                    // 5084
    },                                                                                                                 // 5085
                                                                                                                       // 5086
    sticky : function () {                                                                                             // 5087
      var self = this;                                                                                                 // 5088
                                                                                                                       // 5089
      this.S(window).on('scroll', function() {                                                                         // 5090
        self.update_sticky_positioning();                                                                              // 5091
      });                                                                                                              // 5092
    },                                                                                                                 // 5093
                                                                                                                       // 5094
    update_sticky_positioning: function() {                                                                            // 5095
      var klass = '.' + this.settings.sticky_class,                                                                    // 5096
          $window = this.S(window),                                                                                    // 5097
          self = this;                                                                                                 // 5098
                                                                                                                       // 5099
      if (self.settings.sticky_topbar && self.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(), this.settings)) {
        var distance = this.settings.sticky_topbar.data('stickyoffset');                                               // 5101
        if (!self.S(klass).hasClass('expanded')) {                                                                     // 5102
          if ($window.scrollTop() > (distance)) {                                                                      // 5103
            if (!self.S(klass).hasClass('fixed')) {                                                                    // 5104
              self.S(klass).addClass('fixed');                                                                         // 5105
              self.S('body').addClass('f-topbar-fixed');                                                               // 5106
            }                                                                                                          // 5107
          } else if ($window.scrollTop() <= distance) {                                                                // 5108
            if (self.S(klass).hasClass('fixed')) {                                                                     // 5109
              self.S(klass).removeClass('fixed');                                                                      // 5110
              self.S('body').removeClass('f-topbar-fixed');                                                            // 5111
            }                                                                                                          // 5112
          }                                                                                                            // 5113
        }                                                                                                              // 5114
      }                                                                                                                // 5115
    },                                                                                                                 // 5116
                                                                                                                       // 5117
    off : function () {                                                                                                // 5118
      this.S(this.scope).off('.fndtn.topbar');                                                                         // 5119
      this.S(window).off('.fndtn.topbar');                                                                             // 5120
    },                                                                                                                 // 5121
                                                                                                                       // 5122
    reflow : function () {}                                                                                            // 5123
  };                                                                                                                   // 5124
}(jQuery, window, window.document));                                                                                   // 5125
;(function ($, window, document, undefined) {                                                                          // 5126
  'use strict';                                                                                                        // 5127
                                                                                                                       // 5128
  Foundation.libs.tab = {                                                                                              // 5129
    name : 'tab',                                                                                                      // 5130
                                                                                                                       // 5131
    version : '5.5.0',                                                                                                 // 5132
                                                                                                                       // 5133
    settings : {                                                                                                       // 5134
      active_class: 'active',                                                                                          // 5135
      callback : function () {},                                                                                       // 5136
      deep_linking: false,                                                                                             // 5137
      scroll_to_content: true,                                                                                         // 5138
      is_hover: false                                                                                                  // 5139
    },                                                                                                                 // 5140
                                                                                                                       // 5141
    default_tab_hashes: [],                                                                                            // 5142
                                                                                                                       // 5143
    init : function (scope, method, options) {                                                                         // 5144
      var self = this,                                                                                                 // 5145
          S = this.S;                                                                                                  // 5146
                                                                                                                       // 5147
      this.bindings(method, options);                                                                                  // 5148
      this.handle_location_hash_change();                                                                              // 5149
                                                                                                                       // 5150
      // Store the default active tabs which will be referenced when the                                               // 5151
      // location hash is absent, as in the case of navigating the tabs and                                            // 5152
      // returning to the first viewing via the browser Back button.                                                   // 5153
      S('[' + this.attr_name() + '] > .active > a', this.scope).each(function () {                                     // 5154
        self.default_tab_hashes.push(this.hash);                                                                       // 5155
      });                                                                                                              // 5156
    },                                                                                                                 // 5157
                                                                                                                       // 5158
    events : function () {                                                                                             // 5159
      var self = this,                                                                                                 // 5160
          S = this.S;                                                                                                  // 5161
                                                                                                                       // 5162
      var usual_tab_behavior =  function (e) {                                                                         // 5163
          var settings = S(this).closest('[' + self.attr_name() +']').data(self.attr_name(true) + '-init');            // 5164
          if (!settings.is_hover || Modernizr.touch) {                                                                 // 5165
            e.preventDefault();                                                                                        // 5166
            e.stopPropagation();                                                                                       // 5167
            self.toggle_active_tab(S(this).parent());                                                                  // 5168
          }                                                                                                            // 5169
        };                                                                                                             // 5170
                                                                                                                       // 5171
      S(this.scope)                                                                                                    // 5172
        .off('.tab')                                                                                                   // 5173
        // Click event: tab title                                                                                      // 5174
        .on('focus.fndtn.tab', '[' + this.attr_name() + '] > * > a', usual_tab_behavior )                              // 5175
        .on('click.fndtn.tab', '[' + this.attr_name() + '] > * > a', usual_tab_behavior )                              // 5176
        // Hover event: tab title                                                                                      // 5177
        .on('mouseenter.fndtn.tab', '[' + this.attr_name() + '] > * > a', function (e) {                               // 5178
          var settings = S(this).closest('[' + self.attr_name() +']').data(self.attr_name(true) + '-init');            // 5179
          if (settings.is_hover) self.toggle_active_tab(S(this).parent());                                             // 5180
        });                                                                                                            // 5181
                                                                                                                       // 5182
      // Location hash change event                                                                                    // 5183
      S(window).on('hashchange.fndtn.tab', function (e) {                                                              // 5184
        e.preventDefault();                                                                                            // 5185
        self.handle_location_hash_change();                                                                            // 5186
      });                                                                                                              // 5187
    },                                                                                                                 // 5188
                                                                                                                       // 5189
    handle_location_hash_change : function () {                                                                        // 5190
                                                                                                                       // 5191
      var self = this,                                                                                                 // 5192
          S = this.S;                                                                                                  // 5193
                                                                                                                       // 5194
      S('[' + this.attr_name() + ']', this.scope).each(function () {                                                   // 5195
        var settings = S(this).data(self.attr_name(true) + '-init');                                                   // 5196
        if (settings.deep_linking) {                                                                                   // 5197
          // Match the location hash to a label                                                                        // 5198
          var hash;                                                                                                    // 5199
          if (settings.scroll_to_content) {                                                                            // 5200
            hash = self.scope.location.hash;                                                                           // 5201
          } else {                                                                                                     // 5202
            // prefix the hash to prevent anchor scrolling                                                             // 5203
            hash = self.scope.location.hash.replace('fndtn-', '');                                                     // 5204
          }                                                                                                            // 5205
          if (hash != '') {                                                                                            // 5206
            // Check whether the location hash references a tab content div or                                         // 5207
            // another element on the page (inside or outside the tab content div)                                     // 5208
            var hash_element = S(hash);                                                                                // 5209
            if (hash_element.hasClass('content') && hash_element.parent().hasClass('tabs-content')) {                  // 5210
              // Tab content div                                                                                       // 5211
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + hash + ']').parent());             // 5212
            } else {                                                                                                   // 5213
              // Not the tab content div. If inside the tab content, find the                                          // 5214
              // containing tab and toggle it as active.                                                               // 5215
              var hash_tab_container_id = hash_element.closest('.content').attr('id');                                 // 5216
              if (hash_tab_container_id != undefined) {                                                                // 5217
                self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=#' + hash_tab_container_id + ']').parent(), hash);
              }                                                                                                        // 5219
            }                                                                                                          // 5220
          } else {                                                                                                     // 5221
            // Reference the default tab hashes which were initialized in the init function                            // 5222
            for (var ind = 0; ind < self.default_tab_hashes.length; ind++) {                                           // 5223
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + self.default_tab_hashes[ind] + ']').parent());
            }                                                                                                          // 5225
          }                                                                                                            // 5226
        }                                                                                                              // 5227
       });                                                                                                             // 5228
     },                                                                                                                // 5229
                                                                                                                       // 5230
    toggle_active_tab: function (tab, location_hash) {                                                                 // 5231
      var S = this.S,                                                                                                  // 5232
          tabs = tab.closest('[' + this.attr_name() + ']'),                                                            // 5233
          tab_link = tab.find('a'),                                                                                    // 5234
          anchor = tab.children('a').first(),                                                                          // 5235
          target_hash = '#' + anchor.attr('href').split('#')[1],                                                       // 5236
          target = S(target_hash),                                                                                     // 5237
          siblings = tab.siblings(),                                                                                   // 5238
          settings = tabs.data(this.attr_name(true) + '-init'),                                                        // 5239
          interpret_keyup_action = function(e) {                                                                       // 5240
            // Light modification of Heydon Pickering's Practical ARIA Examples: http://heydonworks.com/practical_aria_examples/js/a11y.js
                                                                                                                       // 5242
            // define current, previous and next (possible) tabs                                                       // 5243
                                                                                                                       // 5244
            var $original = $(this);                                                                                   // 5245
            var $prev = $(this).parents('li').prev().children('[role="tab"]');                                         // 5246
            var $next = $(this).parents('li').next().children('[role="tab"]');                                         // 5247
            var $target;                                                                                               // 5248
                                                                                                                       // 5249
            // find the direction (prev or next)                                                                       // 5250
                                                                                                                       // 5251
            switch (e.keyCode) {                                                                                       // 5252
              case 37:                                                                                                 // 5253
                $target = $prev;                                                                                       // 5254
                break;                                                                                                 // 5255
              case 39:                                                                                                 // 5256
                $target = $next;                                                                                       // 5257
                break;                                                                                                 // 5258
              default:                                                                                                 // 5259
                $target = false                                                                                        // 5260
                  break;                                                                                               // 5261
            }                                                                                                          // 5262
                                                                                                                       // 5263
            if ($target.length) {                                                                                      // 5264
              $original.attr({                                                                                         // 5265
                'tabindex' : '-1',                                                                                     // 5266
                'aria-selected' : null                                                                                 // 5267
              });                                                                                                      // 5268
              $target.attr({                                                                                           // 5269
                'tabindex' : '0',                                                                                      // 5270
                'aria-selected' : true                                                                                 // 5271
              }).focus();                                                                                              // 5272
            }                                                                                                          // 5273
                                                                                                                       // 5274
            // Hide panels                                                                                             // 5275
                                                                                                                       // 5276
            $('[role="tabpanel"]')                                                                                     // 5277
              .attr('aria-hidden', 'true');                                                                            // 5278
                                                                                                                       // 5279
            // Show panel which corresponds to target                                                                  // 5280
                                                                                                                       // 5281
            $('#' + $(document.activeElement).attr('href').substring(1))                                               // 5282
              .attr('aria-hidden', null);                                                                              // 5283
                                                                                                                       // 5284
          };                                                                                                           // 5285
                                                                                                                       // 5286
      // allow usage of data-tab-content attribute instead of href                                                     // 5287
      if (S(this).data(this.data_attr('tab-content'))) {                                                               // 5288
        target_hash = '#' + S(this).data(this.data_attr('tab-content')).split('#')[1];                                 // 5289
        target = S(target_hash);                                                                                       // 5290
      }                                                                                                                // 5291
                                                                                                                       // 5292
      if (settings.deep_linking) {                                                                                     // 5293
                                                                                                                       // 5294
        if (settings.scroll_to_content) {                                                                              // 5295
          // retain current hash to scroll to content                                                                  // 5296
          window.location.hash = location_hash || target_hash;                                                         // 5297
          if (location_hash == undefined || location_hash == target_hash) {                                            // 5298
            tab.parent()[0].scrollIntoView();                                                                          // 5299
          } else {                                                                                                     // 5300
            S(target_hash)[0].scrollIntoView();                                                                        // 5301
          }                                                                                                            // 5302
        } else {                                                                                                       // 5303
          // prefix the hashes so that the browser doesn't scroll down                                                 // 5304
          if (location_hash != undefined) {                                                                            // 5305
            window.location.hash = 'fndtn-' + location_hash.replace('#', '');                                          // 5306
          } else {                                                                                                     // 5307
            window.location.hash = 'fndtn-' + target_hash.replace('#', '');                                            // 5308
          }                                                                                                            // 5309
        }                                                                                                              // 5310
      }                                                                                                                // 5311
                                                                                                                       // 5312
      // WARNING: The activation and deactivation of the tab content must                                              // 5313
      // occur after the deep linking in order to properly refresh the browser                                         // 5314
      // window (notably in Chrome).                                                                                   // 5315
      // Clean up multiple attr instances to done once                                                                 // 5316
      tab.addClass(settings.active_class).triggerHandler('opened');                                                    // 5317
      tab_link.attr({'aria-selected': 'true',  tabindex: 0});                                                          // 5318
      siblings.removeClass(settings.active_class)                                                                      // 5319
      siblings.find('a').attr({'aria-selected': 'false',  tabindex: -1});                                              // 5320
      target.siblings().removeClass(settings.active_class).attr({'aria-hidden': 'true',  tabindex: -1});               // 5321
      target.addClass(settings.active_class).attr('aria-hidden', 'false').removeAttr('tabindex');                      // 5322
      settings.callback(tab);                                                                                          // 5323
      target.triggerHandler('toggled', [tab]);                                                                         // 5324
      tabs.triggerHandler('toggled', [target]);                                                                        // 5325
                                                                                                                       // 5326
      tab_link.off('keydown').on('keydown', interpret_keyup_action );                                                  // 5327
    },                                                                                                                 // 5328
                                                                                                                       // 5329
    data_attr: function (str) {                                                                                        // 5330
      if (this.namespace.length > 0) {                                                                                 // 5331
        return this.namespace + '-' + str;                                                                             // 5332
      }                                                                                                                // 5333
                                                                                                                       // 5334
      return str;                                                                                                      // 5335
    },                                                                                                                 // 5336
                                                                                                                       // 5337
    off : function () {},                                                                                              // 5338
                                                                                                                       // 5339
    reflow : function () {}                                                                                            // 5340
  };                                                                                                                   // 5341
}(jQuery, window, window.document));                                                                                   // 5342
;(function ($, window, document, undefined) {                                                                          // 5343
  'use strict';                                                                                                        // 5344
                                                                                                                       // 5345
  Foundation.libs.abide = {                                                                                            // 5346
    name : 'abide',                                                                                                    // 5347
                                                                                                                       // 5348
    version : '5.5.0',                                                                                                 // 5349
                                                                                                                       // 5350
    settings : {                                                                                                       // 5351
      live_validate : true,                                                                                            // 5352
      validate_on_blur: true,                                                                                          // 5353
      focus_on_invalid : true,                                                                                         // 5354
      error_labels: true, // labels with a for="inputId" will recieve an `error` class                                 // 5355
      error_class: 'error',                                                                                            // 5356
      timeout : 1000,                                                                                                  // 5357
      patterns : {                                                                                                     // 5358
        alpha: /^[a-zA-Z]+$/,                                                                                          // 5359
        alpha_numeric : /^[a-zA-Z0-9]+$/,                                                                              // 5360
        integer: /^[-+]?\d+$/,                                                                                         // 5361
        number: /^[-+]?\d*(?:[\.\,]\d+)?$/,                                                                            // 5362
                                                                                                                       // 5363
        // amex, visa, diners                                                                                          // 5364
        card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv : /^([0-9]){3,4}$/,                                                                                        // 5366
                                                                                                                       // 5367
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
        email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                                                                                                                       // 5370
        url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
        // abc.de                                                                                                      // 5372
        domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,                                    // 5373
                                                                                                                       // 5374
        datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
        // YYYY-MM-DD                                                                                                  // 5376
        date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
        // HH:MM:SS                                                                                                    // 5378
        time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,                                                             // 5379
        dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,                                                                  // 5380
        // MM/DD/YYYY                                                                                                  // 5381
        month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,                               // 5382
        // DD/MM/YYYY                                                                                                  // 5383
        day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,                               // 5384
                                                                                                                       // 5385
        // #FFF or #FFFFFF                                                                                             // 5386
        color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/                                                                   // 5387
      },                                                                                                               // 5388
      validators : {                                                                                                   // 5389
        equalTo: function(el, required, parent) {                                                                      // 5390
          var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,              // 5391
              to    = el.value,                                                                                        // 5392
              valid = (from === to);                                                                                   // 5393
                                                                                                                       // 5394
          return valid;                                                                                                // 5395
        }                                                                                                              // 5396
      }                                                                                                                // 5397
    },                                                                                                                 // 5398
                                                                                                                       // 5399
    timer : null,                                                                                                      // 5400
                                                                                                                       // 5401
    init : function (scope, method, options) {                                                                         // 5402
      this.bindings(method, options);                                                                                  // 5403
    },                                                                                                                 // 5404
                                                                                                                       // 5405
    events : function (scope) {                                                                                        // 5406
      var self = this,                                                                                                 // 5407
          form = self.S(scope).attr('novalidate', 'novalidate'),                                                       // 5408
          settings = form.data(this.attr_name(true) + '-init') || {};                                                  // 5409
                                                                                                                       // 5410
      this.invalid_attr = this.add_namespace('data-invalid');                                                          // 5411
                                                                                                                       // 5412
      form                                                                                                             // 5413
        .off('.abide')                                                                                                 // 5414
        .on('submit.fndtn.abide validate.fndtn.abide', function (e) {                                                  // 5415
          var is_ajax = /ajax/i.test(self.S(this).attr(self.attr_name()));                                             // 5416
          return self.validate(self.S(this).find('input, textarea, select').get(), e, is_ajax);                        // 5417
        })                                                                                                             // 5418
        .on('reset', function() {                                                                                      // 5419
          return self.reset($(this));                                                                                  // 5420
        })                                                                                                             // 5421
        .find('input, textarea, select')                                                                               // 5422
          .off('.abide')                                                                                               // 5423
          .on('blur.fndtn.abide change.fndtn.abide', function (e) {                                                    // 5424
            if (settings.validate_on_blur === true) {                                                                  // 5425
              self.validate([this], e);                                                                                // 5426
            }                                                                                                          // 5427
          })                                                                                                           // 5428
          .on('keydown.fndtn.abide', function (e) {                                                                    // 5429
            if (settings.live_validate === true && e.which != 9) {                                                     // 5430
              clearTimeout(self.timer);                                                                                // 5431
              self.timer = setTimeout(function () {                                                                    // 5432
                self.validate([this], e);                                                                              // 5433
              }.bind(this), settings.timeout);                                                                         // 5434
            }                                                                                                          // 5435
          });                                                                                                          // 5436
    },                                                                                                                 // 5437
                                                                                                                       // 5438
    reset : function (form) {                                                                                          // 5439
      form.removeAttr(this.invalid_attr);                                                                              // 5440
      $(this.invalid_attr, form).removeAttr(this.invalid_attr);                                                        // 5441
      $('.' + this.settings.error_class, form).not('small').removeClass(this.settings.error_class);                    // 5442
    },                                                                                                                 // 5443
                                                                                                                       // 5444
    validate : function (els, e, is_ajax) {                                                                            // 5445
      var validations = this.parse_patterns(els),                                                                      // 5446
          validation_count = validations.length,                                                                       // 5447
          form = this.S(els[0]).closest('form'),                                                                       // 5448
          submit_event = /submit/.test(e.type);                                                                        // 5449
                                                                                                                       // 5450
      // Has to count up to make sure the focus gets applied to the top error                                          // 5451
      for (var i=0; i < validation_count; i++) {                                                                       // 5452
        if (!validations[i] && (submit_event || is_ajax)) {                                                            // 5453
          if (this.settings.focus_on_invalid) els[i].focus();                                                          // 5454
          form.trigger('invalid').trigger('invalid.fndtn.abide');                                                      // 5455
          this.S(els[i]).closest('form').attr(this.invalid_attr, '');                                                  // 5456
          return false;                                                                                                // 5457
        }                                                                                                              // 5458
      }                                                                                                                // 5459
                                                                                                                       // 5460
      if (submit_event || is_ajax) {                                                                                   // 5461
        form.trigger('valid').trigger('valid.fndtn.abide');                                                            // 5462
      }                                                                                                                // 5463
                                                                                                                       // 5464
      form.removeAttr(this.invalid_attr);                                                                              // 5465
                                                                                                                       // 5466
      if (is_ajax) return false;                                                                                       // 5467
                                                                                                                       // 5468
      return true;                                                                                                     // 5469
    },                                                                                                                 // 5470
                                                                                                                       // 5471
    parse_patterns : function (els) {                                                                                  // 5472
      var i = els.length,                                                                                              // 5473
          el_patterns = [];                                                                                            // 5474
                                                                                                                       // 5475
      while (i--) {                                                                                                    // 5476
        el_patterns.push(this.pattern(els[i]));                                                                        // 5477
      }                                                                                                                // 5478
                                                                                                                       // 5479
      return this.check_validation_and_apply_styles(el_patterns);                                                      // 5480
    },                                                                                                                 // 5481
                                                                                                                       // 5482
    pattern : function (el) {                                                                                          // 5483
      var type = el.getAttribute('type'),                                                                              // 5484
          required = typeof el.getAttribute('required') === 'string';                                                  // 5485
                                                                                                                       // 5486
      var pattern = el.getAttribute('pattern') || '';                                                                  // 5487
                                                                                                                       // 5488
      if (this.settings.patterns.hasOwnProperty(pattern) && pattern.length > 0) {                                      // 5489
        return [el, this.settings.patterns[pattern], required];                                                        // 5490
      } else if (pattern.length > 0) {                                                                                 // 5491
        return [el, new RegExp(pattern), required];                                                                    // 5492
      }                                                                                                                // 5493
                                                                                                                       // 5494
      if (this.settings.patterns.hasOwnProperty(type)) {                                                               // 5495
        return [el, this.settings.patterns[type], required];                                                           // 5496
      }                                                                                                                // 5497
                                                                                                                       // 5498
      pattern = /.*/;                                                                                                  // 5499
                                                                                                                       // 5500
      return [el, pattern, required];                                                                                  // 5501
    },                                                                                                                 // 5502
                                                                                                                       // 5503
    // TODO: Break this up into smaller methods, getting hard to read.                                                 // 5504
    check_validation_and_apply_styles : function (el_patterns) {                                                       // 5505
      var i = el_patterns.length,                                                                                      // 5506
          validations = [],                                                                                            // 5507
          form = this.S(el_patterns[0][0]).closest('[data-' + this.attr_name(true) + ']'),                             // 5508
          settings = form.data(this.attr_name(true) + '-init') || {};                                                  // 5509
      while (i--) {                                                                                                    // 5510
        var el = el_patterns[i][0],                                                                                    // 5511
            required = el_patterns[i][2],                                                                              // 5512
            value = el.value.trim(),                                                                                   // 5513
            direct_parent = this.S(el).parent(),                                                                       // 5514
            validator = el.getAttribute(this.add_namespace('data-abide-validator')),                                   // 5515
            is_radio = el.type === "radio",                                                                            // 5516
            is_checkbox = el.type === "checkbox",                                                                      // 5517
            label = this.S('label[for="' + el.getAttribute('id') + '"]'),                                              // 5518
            valid_length = (required) ? (el.value.length > 0) : true,                                                  // 5519
            el_validations = [];                                                                                       // 5520
                                                                                                                       // 5521
        var parent, valid;                                                                                             // 5522
                                                                                                                       // 5523
        // support old way to do equalTo validations                                                                   // 5524
        if(el.getAttribute(this.add_namespace('data-equalto'))) { validator = "equalTo" }                              // 5525
                                                                                                                       // 5526
        if (!direct_parent.is('label')) {                                                                              // 5527
          parent = direct_parent;                                                                                      // 5528
        } else {                                                                                                       // 5529
          parent = direct_parent.parent();                                                                             // 5530
        }                                                                                                              // 5531
                                                                                                                       // 5532
        if (validator) {                                                                                               // 5533
          valid = this.settings.validators[validator].apply(this, [el, required, parent]);                             // 5534
          el_validations.push(valid);                                                                                  // 5535
        }                                                                                                              // 5536
                                                                                                                       // 5537
        if (is_radio && required) {                                                                                    // 5538
          el_validations.push(this.valid_radio(el, required));                                                         // 5539
        } else if (is_checkbox && required) {                                                                          // 5540
          el_validations.push(this.valid_checkbox(el, required));                                                      // 5541
        } else {                                                                                                       // 5542
                                                                                                                       // 5543
          if (el_patterns[i][1].test(value) && valid_length ||                                                         // 5544
            !required && el.value.length < 1 || $(el).attr('disabled')) {                                              // 5545
            el_validations.push(true);                                                                                 // 5546
          } else {                                                                                                     // 5547
            el_validations.push(false);                                                                                // 5548
          }                                                                                                            // 5549
                                                                                                                       // 5550
          el_validations = [el_validations.every(function(valid){return valid;})];                                     // 5551
                                                                                                                       // 5552
          if(el_validations[0]){                                                                                       // 5553
            this.S(el).removeAttr(this.invalid_attr);                                                                  // 5554
            el.setAttribute('aria-invalid', 'false');                                                                  // 5555
            el.removeAttribute('aria-describedby');                                                                    // 5556
            parent.removeClass(this.settings.error_class);                                                             // 5557
            if (label.length > 0 && this.settings.error_labels) {                                                      // 5558
              label.removeClass(this.settings.error_class).removeAttr('role');                                         // 5559
            }                                                                                                          // 5560
            $(el).triggerHandler('valid');                                                                             // 5561
          } else {                                                                                                     // 5562
            this.S(el).attr(this.invalid_attr, '');                                                                    // 5563
            el.setAttribute('aria-invalid', 'true');                                                                   // 5564
                                                                                                                       // 5565
            // Try to find the error associated with the input                                                         // 5566
            var errorElem = parent.find('small.'+this.settings.error_class, 'span.'+this.settings.error_class);        // 5567
            var errorID = errorElem.length > 0 ? errorElem[0].id : "";                                                 // 5568
            if (errorID.length > 0) el.setAttribute('aria-describedby', errorID);                                      // 5569
                                                                                                                       // 5570
            // el.setAttribute('aria-describedby', $(el).find('.error')[0].id);                                        // 5571
            parent.addClass(this.settings.error_class);                                                                // 5572
            if (label.length > 0 && this.settings.error_labels) {                                                      // 5573
              label.addClass(this.settings.error_class).attr('role', 'alert');                                         // 5574
            }                                                                                                          // 5575
            $(el).triggerHandler('invalid');                                                                           // 5576
          }                                                                                                            // 5577
        }                                                                                                              // 5578
        validations.push(el_validations[0]);                                                                           // 5579
      }                                                                                                                // 5580
      validations = [validations.every(function(valid){return valid;})];                                               // 5581
      return validations;                                                                                              // 5582
    },                                                                                                                 // 5583
                                                                                                                       // 5584
    valid_checkbox : function(el, required) {                                                                          // 5585
      var el = this.S(el),                                                                                             // 5586
          valid = (el.is(':checked') || !required);                                                                    // 5587
                                                                                                                       // 5588
      if (valid) {                                                                                                     // 5589
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);                              // 5590
      } else {                                                                                                         // 5591
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                                   // 5592
      }                                                                                                                // 5593
                                                                                                                       // 5594
      return valid;                                                                                                    // 5595
    },                                                                                                                 // 5596
                                                                                                                       // 5597
    valid_radio : function (el, required) {                                                                            // 5598
      var name = el.getAttribute('name'),                                                                              // 5599
          group = this.S(el).closest('[data-' + this.attr_name(true) + ']').find("[name='"+name+"']"),                 // 5600
          count = group.length,                                                                                        // 5601
          valid = false;                                                                                               // 5602
                                                                                                                       // 5603
      // Has to count up to make sure the focus gets applied to the top error                                          // 5604
      for (var i=0; i < count; i++) {                                                                                  // 5605
        if (group[i].checked) valid = true;                                                                            // 5606
      }                                                                                                                // 5607
                                                                                                                       // 5608
      // Has to count up to make sure the focus gets applied to the top error                                          // 5609
      for (var i=0; i < count; i++) {                                                                                  // 5610
        if (valid) {                                                                                                   // 5611
          this.S(group[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);              // 5612
        } else {                                                                                                       // 5613
          this.S(group[i]).attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                   // 5614
        }                                                                                                              // 5615
      }                                                                                                                // 5616
                                                                                                                       // 5617
      return valid;                                                                                                    // 5618
    },                                                                                                                 // 5619
                                                                                                                       // 5620
    valid_equal: function(el, required, parent) {                                                                      // 5621
      var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,                  // 5622
          to    = el.value,                                                                                            // 5623
          valid = (from === to);                                                                                       // 5624
                                                                                                                       // 5625
      if (valid) {                                                                                                     // 5626
        this.S(el).removeAttr(this.invalid_attr);                                                                      // 5627
        parent.removeClass(this.settings.error_class);                                                                 // 5628
        if (label.length > 0 && settings.error_labels) label.removeClass(this.settings.error_class);                   // 5629
      } else {                                                                                                         // 5630
        this.S(el).attr(this.invalid_attr, '');                                                                        // 5631
        parent.addClass(this.settings.error_class);                                                                    // 5632
        if (label.length > 0 && settings.error_labels) label.addClass(this.settings.error_class);                      // 5633
      }                                                                                                                // 5634
                                                                                                                       // 5635
      return valid;                                                                                                    // 5636
    },                                                                                                                 // 5637
                                                                                                                       // 5638
    valid_oneof: function(el, required, parent, doNotValidateOthers) {                                                 // 5639
      var el = this.S(el),                                                                                             // 5640
        others = this.S('[' + this.add_namespace('data-oneof') + ']'),                                                 // 5641
        valid = others.filter(':checked').length > 0;                                                                  // 5642
                                                                                                                       // 5643
      if (valid) {                                                                                                     // 5644
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);                              // 5645
      } else {                                                                                                         // 5646
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                                   // 5647
      }                                                                                                                // 5648
                                                                                                                       // 5649
      if (!doNotValidateOthers) {                                                                                      // 5650
        var _this = this;                                                                                              // 5651
        others.each(function() {                                                                                       // 5652
          _this.valid_oneof.call(_this, this, null, null, true);                                                       // 5653
        });                                                                                                            // 5654
      }                                                                                                                // 5655
                                                                                                                       // 5656
      return valid;                                                                                                    // 5657
    }                                                                                                                  // 5658
  };                                                                                                                   // 5659
}(jQuery, window, window.document));                                                                                   // 5660
;(function ($, window, document, undefined) {                                                                          // 5661
  'use strict';                                                                                                        // 5662
                                                                                                                       // 5663
  Foundation.libs.tooltip = {                                                                                          // 5664
    name : 'tooltip',                                                                                                  // 5665
                                                                                                                       // 5666
    version : '5.5.0',                                                                                                 // 5667
                                                                                                                       // 5668
    settings : {                                                                                                       // 5669
      additional_inheritable_classes : [],                                                                             // 5670
      tooltip_class : '.tooltip',                                                                                      // 5671
      append_to: 'body',                                                                                               // 5672
      touch_close_text: 'Tap To Close',                                                                                // 5673
      disable_for_touch: false,                                                                                        // 5674
      hover_delay: 200,                                                                                                // 5675
      show_on : 'all',                                                                                                 // 5676
      tip_template : function (selector, content) {                                                                    // 5677
        return '<span data-selector="' + selector + '" id="' + selector + '" class="'                                  // 5678
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1)                                                // 5679
          + '" role="tooltip">' + content + '<span class="nub"></span></span>';                                        // 5680
      }                                                                                                                // 5681
    },                                                                                                                 // 5682
                                                                                                                       // 5683
    cache : {},                                                                                                        // 5684
                                                                                                                       // 5685
    init : function (scope, method, options) {                                                                         // 5686
      Foundation.inherit(this, 'random_str');                                                                          // 5687
      this.bindings(method, options);                                                                                  // 5688
    },                                                                                                                 // 5689
                                                                                                                       // 5690
    should_show: function (target, tip) {                                                                              // 5691
      var settings = $.extend({}, this.settings, this.data_options(target));                                           // 5692
                                                                                                                       // 5693
      if (settings.show_on === 'all') {                                                                                // 5694
        return true;                                                                                                   // 5695
      } else if (this.small() && settings.show_on === 'small') {                                                       // 5696
        return true;                                                                                                   // 5697
      } else if (this.medium() && settings.show_on === 'medium') {                                                     // 5698
        return true;                                                                                                   // 5699
      } else if (this.large() && settings.show_on === 'large') {                                                       // 5700
        return true;                                                                                                   // 5701
      }                                                                                                                // 5702
      return false;                                                                                                    // 5703
    },                                                                                                                 // 5704
                                                                                                                       // 5705
    medium : function () {                                                                                             // 5706
      return matchMedia(Foundation.media_queries['medium']).matches;                                                   // 5707
    },                                                                                                                 // 5708
                                                                                                                       // 5709
    large : function () {                                                                                              // 5710
      return matchMedia(Foundation.media_queries['large']).matches;                                                    // 5711
    },                                                                                                                 // 5712
                                                                                                                       // 5713
    events : function (instance) {                                                                                     // 5714
      var self = this,                                                                                                 // 5715
          S = self.S;                                                                                                  // 5716
                                                                                                                       // 5717
      self.create(this.S(instance));                                                                                   // 5718
                                                                                                                       // 5719
      $(this.scope)                                                                                                    // 5720
        .off('.tooltip')                                                                                               // 5721
        .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',  // 5722
          '[' + this.attr_name() + ']', function (e) {                                                                 // 5723
          var $this = S(this),                                                                                         // 5724
              settings = $.extend({}, self.settings, self.data_options($this)),                                        // 5725
              is_touch = false;                                                                                        // 5726
                                                                                                                       // 5727
          if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && S(e.target).is('a')) {                    // 5728
            return false;                                                                                              // 5729
          }                                                                                                            // 5730
                                                                                                                       // 5731
          if (/mouse/i.test(e.type) && self.ie_touch(e)) return false;                                                 // 5732
                                                                                                                       // 5733
          if ($this.hasClass('open')) {                                                                                // 5734
            if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) e.preventDefault();                       // 5735
            self.hide($this);                                                                                          // 5736
          } else {                                                                                                     // 5737
            if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {           // 5738
              return;                                                                                                  // 5739
            } else if(!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {    // 5740
              e.preventDefault();                                                                                      // 5741
              S(settings.tooltip_class + '.open').hide();                                                              // 5742
              is_touch = true;                                                                                         // 5743
            }                                                                                                          // 5744
                                                                                                                       // 5745
            if (/enter|over/i.test(e.type)) {                                                                          // 5746
              this.timer = setTimeout(function () {                                                                    // 5747
                var tip = self.showTip($this);                                                                         // 5748
              }.bind(this), self.settings.hover_delay);                                                                // 5749
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {                                             // 5750
              clearTimeout(this.timer);                                                                                // 5751
              self.hide($this);                                                                                        // 5752
            } else {                                                                                                   // 5753
              self.showTip($this);                                                                                     // 5754
            }                                                                                                          // 5755
          }                                                                                                            // 5756
        })                                                                                                             // 5757
        .on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
          if (/mouse/i.test(e.type) && self.ie_touch(e)) return false;                                                 // 5759
                                                                                                                       // 5760
          if($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {                           // 5761
            return;                                                                                                    // 5762
          }                                                                                                            // 5763
          else if($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) {    // 5764
            self.convert_to_touch($(this));                                                                            // 5765
          } else {                                                                                                     // 5766
            self.hide($(this));                                                                                        // 5767
          }                                                                                                            // 5768
        })                                                                                                             // 5769
        .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {                      // 5770
          self.hide(S(this));                                                                                          // 5771
        });                                                                                                            // 5772
    },                                                                                                                 // 5773
                                                                                                                       // 5774
    ie_touch : function (e) {                                                                                          // 5775
      // How do I distinguish between IE11 and Windows Phone 8?????                                                    // 5776
      return false;                                                                                                    // 5777
    },                                                                                                                 // 5778
                                                                                                                       // 5779
    showTip : function ($target) {                                                                                     // 5780
      var $tip = this.getTip($target);                                                                                 // 5781
      if (this.should_show($target, $tip)){                                                                            // 5782
        return this.show($target);                                                                                     // 5783
      }                                                                                                                // 5784
      return;                                                                                                          // 5785
    },                                                                                                                 // 5786
                                                                                                                       // 5787
    getTip : function ($target) {                                                                                      // 5788
      var selector = this.selector($target),                                                                           // 5789
          settings = $.extend({}, this.settings, this.data_options($target)),                                          // 5790
          tip = null;                                                                                                  // 5791
                                                                                                                       // 5792
      if (selector) {                                                                                                  // 5793
        tip = this.S('span[data-selector="' + selector + '"]' + settings.tooltip_class);                               // 5794
      }                                                                                                                // 5795
                                                                                                                       // 5796
      return (typeof tip === 'object') ? tip : false;                                                                  // 5797
    },                                                                                                                 // 5798
                                                                                                                       // 5799
    selector : function ($target) {                                                                                    // 5800
      var id = $target.attr('id'),                                                                                     // 5801
          dataSelector = $target.attr(this.attr_name()) || $target.attr('data-selector');                              // 5802
                                                                                                                       // 5803
      if ((id && id.length < 1 || !id) && typeof dataSelector != 'string') {                                           // 5804
        dataSelector = this.random_str(6);                                                                             // 5805
        $target                                                                                                        // 5806
          .attr('data-selector', dataSelector)                                                                         // 5807
          .attr('aria-describedby', dataSelector);                                                                     // 5808
      }                                                                                                                // 5809
                                                                                                                       // 5810
      return (id && id.length > 0) ? id : dataSelector;                                                                // 5811
    },                                                                                                                 // 5812
                                                                                                                       // 5813
    create : function ($target) {                                                                                      // 5814
      var self = this,                                                                                                 // 5815
          settings = $.extend({}, this.settings, this.data_options($target)),                                          // 5816
          tip_template = this.settings.tip_template;                                                                   // 5817
                                                                                                                       // 5818
      if (typeof settings.tip_template === 'string' && window.hasOwnProperty(settings.tip_template)) {                 // 5819
        tip_template = window[settings.tip_template];                                                                  // 5820
      }                                                                                                                // 5821
                                                                                                                       // 5822
      var $tip = $(tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),         // 5823
          classes = this.inheritable_classes($target);                                                                 // 5824
                                                                                                                       // 5825
      $tip.addClass(classes).appendTo(settings.append_to);                                                             // 5826
                                                                                                                       // 5827
      if (Modernizr.touch) {                                                                                           // 5828
        $tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');                                // 5829
        $tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function(e) {                                  // 5830
          self.hide($target);                                                                                          // 5831
        });                                                                                                            // 5832
      }                                                                                                                // 5833
                                                                                                                       // 5834
      $target.removeAttr('title').attr('title','');                                                                    // 5835
    },                                                                                                                 // 5836
                                                                                                                       // 5837
    reposition : function (target, tip, classes) {                                                                     // 5838
      var width, nub, nubHeight, nubWidth, column, objPos;                                                             // 5839
                                                                                                                       // 5840
      tip.css('visibility', 'hidden').show();                                                                          // 5841
                                                                                                                       // 5842
      width = target.data('width');                                                                                    // 5843
      nub = tip.children('.nub');                                                                                      // 5844
      nubHeight = nub.outerHeight();                                                                                   // 5845
      nubWidth = nub.outerHeight();                                                                                    // 5846
                                                                                                                       // 5847
      if (this.small()) {                                                                                              // 5848
        tip.css({'width' : '100%' });                                                                                  // 5849
      } else {                                                                                                         // 5850
        tip.css({'width' : (width) ? width : 'auto'});                                                                 // 5851
      }                                                                                                                // 5852
                                                                                                                       // 5853
      objPos = function (obj, top, right, bottom, left, width) {                                                       // 5854
        return obj.css({                                                                                               // 5855
          'top' : (top) ? top : 'auto',                                                                                // 5856
          'bottom' : (bottom) ? bottom : 'auto',                                                                       // 5857
          'left' : (left) ? left : 'auto',                                                                             // 5858
          'right' : (right) ? right : 'auto'                                                                           // 5859
        }).end();                                                                                                      // 5860
      };                                                                                                               // 5861
                                                                                                                       // 5862
      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);            // 5863
                                                                                                                       // 5864
      if (this.small()) {                                                                                              // 5865
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());   // 5866
        tip.addClass('tip-override');                                                                                  // 5867
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);                                                 // 5868
      } else {                                                                                                         // 5869
        var left = target.offset().left;                                                                               // 5870
        if (Foundation.rtl) {                                                                                          // 5871
          nub.addClass('rtl');                                                                                         // 5872
          left = target.offset().left + target.outerWidth() - tip.outerWidth();                                        // 5873
        }                                                                                                              // 5874
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);                          // 5875
        tip.removeClass('tip-override');                                                                               // 5876
        if (classes && classes.indexOf('tip-top') > -1) {                                                              // 5877
          if (Foundation.rtl) nub.addClass('rtl');                                                                     // 5878
          objPos(tip, (target.offset().top - tip.outerHeight()), 'auto', 'auto', left)                                 // 5879
            .removeClass('tip-override');                                                                              // 5880
        } else if (classes && classes.indexOf('tip-left') > -1) {                                                      // 5881
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');                                                                              // 5883
          nub.removeClass('rtl');                                                                                      // 5884
        } else if (classes && classes.indexOf('tip-right') > -1) {                                                     // 5885
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');                                                                              // 5887
          nub.removeClass('rtl');                                                                                      // 5888
        }                                                                                                              // 5889
      }                                                                                                                // 5890
                                                                                                                       // 5891
      tip.css('visibility', 'visible').hide();                                                                         // 5892
    },                                                                                                                 // 5893
                                                                                                                       // 5894
    small : function () {                                                                                              // 5895
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 5896
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 5897
    },                                                                                                                 // 5898
                                                                                                                       // 5899
    inheritable_classes : function ($target) {                                                                         // 5900
      var settings = $.extend({}, this.settings, this.data_options($target)),                                          // 5901
          inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(settings.additional_inheritable_classes),
          classes = $target.attr('class'),                                                                             // 5903
          filtered = classes ? $.map(classes.split(' '), function (el, i) {                                            // 5904
            if ($.inArray(el, inheritables) !== -1) {                                                                  // 5905
              return el;                                                                                               // 5906
            }                                                                                                          // 5907
          }).join(' ') : '';                                                                                           // 5908
                                                                                                                       // 5909
      return $.trim(filtered);                                                                                         // 5910
    },                                                                                                                 // 5911
                                                                                                                       // 5912
    convert_to_touch : function($target) {                                                                             // 5913
      var self = this,                                                                                                 // 5914
          $tip = self.getTip($target),                                                                                 // 5915
          settings = $.extend({}, self.settings, self.data_options($target));                                          // 5916
                                                                                                                       // 5917
      if ($tip.find('.tap-to-close').length === 0) {                                                                   // 5918
        $tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');                                // 5919
        $tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function(e) {
          self.hide($target);                                                                                          // 5921
        });                                                                                                            // 5922
      }                                                                                                                // 5923
                                                                                                                       // 5924
      $target.data('tooltip-open-event-type', 'touch');                                                                // 5925
    },                                                                                                                 // 5926
                                                                                                                       // 5927
    show : function ($target) {                                                                                        // 5928
      var $tip = this.getTip($target);                                                                                 // 5929
                                                                                                                       // 5930
      if ($target.data('tooltip-open-event-type') == 'touch') {                                                        // 5931
        this.convert_to_touch($target);                                                                                // 5932
      }                                                                                                                // 5933
                                                                                                                       // 5934
      this.reposition($target, $tip, $target.attr('class'));                                                           // 5935
      $target.addClass('open');                                                                                        // 5936
      $tip.fadeIn(150);                                                                                                // 5937
    },                                                                                                                 // 5938
                                                                                                                       // 5939
    hide : function ($target) {                                                                                        // 5940
      var $tip = this.getTip($target);                                                                                 // 5941
                                                                                                                       // 5942
      $tip.fadeOut(150, function() {                                                                                   // 5943
        $tip.find('.tap-to-close').remove();                                                                           // 5944
        $tip.off('click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');                                         // 5945
        $target.removeClass('open');                                                                                   // 5946
      });                                                                                                              // 5947
    },                                                                                                                 // 5948
                                                                                                                       // 5949
    off : function () {                                                                                                // 5950
      var self = this;                                                                                                 // 5951
      this.S(this.scope).off('.fndtn.tooltip');                                                                        // 5952
      this.S(this.settings.tooltip_class).each(function (i) {                                                          // 5953
        $('[' + self.attr_name() + ']').eq(i).attr('title', $(this).text());                                           // 5954
      }).remove();                                                                                                     // 5955
    },                                                                                                                 // 5956
                                                                                                                       // 5957
    reflow : function () {}                                                                                            // 5958
  };                                                                                                                   // 5959
}(jQuery, window, window.document));                                                                                   // 5960
                                                                                                                       // 5961
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/activate-foundation.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {                                                                                                // 1
  $(document).ready(function () {                                                                                     // 2
		$(document).foundation(function (response) {                                                                        // 3
			console.log(response.errors);                                                                                      // 4
		});                                                                                                                 // 5
	});                                                                                                                  // 6
}                                                                                                                      // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ewall:foundation'] = {};

})();

"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{8182:function(t,e,n){function o(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=o(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}e.Z=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=o(t))&&(r&&(r+=" "),r+=e);return r}},5462:function(){},4942:function(t,e,n){n.d(e,{Z:function(){return r}});var o=n(9142);function r(t,e,n){return(e=(0,o.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},1413:function(t,e,n){n.d(e,{Z:function(){return a}});var o=n(4942);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},4925:function(t,e,n){function o(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,{Z:function(){return o}})},5985:function(t,e,n){n.d(e,{Am:function(){return H},Ix:function(){return k},Mi:function(){return P}});var o=n(4942),r=n(9439),a=n(1413),i=n(4925),s=n(3433),c=n(2791),u=n(8182),l=["theme","type"],f=["delay","staleId"],d=function(t){return"number"==typeof t&&!isNaN(t)},p=function(t){return"string"==typeof t},m=function(t){return"function"==typeof t},v=function(t){return p(t)||m(t)?t:null},g=function(t){return(0,c.isValidElement)(t)||p(t)||m(t)||d(t)};function y(t){var e=t.enter,n=t.exit,o=t.appendPosition,r=void 0!==o&&o,a=t.collapse,i=void 0===a||a,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,a=t.position,u=t.preventExitTransition,f=t.done,d=t.nodeRef,p=t.isIn,m=r?"".concat(e,"--").concat(a):e,v=r?"".concat(n,"--").concat(a):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=d.current,n=m.split(" "),o=function t(o){var r;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,s.Z)(n)))};(t=e.classList).add.apply(t,(0,s.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,f,l):f()};p||(u?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),c.createElement(c.Fragment,null,o)}}function h(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var E={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(r)}))}},T=function(t){var e=t.theme,n=t.type,o=(0,i.Z)(t,l);return c.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},b={info:function(t){return c.createElement(T,(0,a.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(T,(0,a.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(T,(0,a.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(T,(0,a.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function O(t){var e=(0,c.useReducer)((function(t){return t+1}),0),n=(0,r.Z)(e,2)[1],o=(0,c.useState)([]),u=(0,r.Z)(o,2),l=u[0],y=u[1],T=(0,c.useRef)(null),O=(0,c.useRef)(new Map).current,Z=function(t){return-1!==l.indexOf(t)},C=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:Z,getToast:function(t){return O.get(t)}}).current;function I(t){var e=t.containerId;!C.props.limit||e&&C.containerId!==e||(C.count-=C.queue.length,C.queue=[])}function _(t){y((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function L(){var t=C.queue.shift();N(t.toastContent,t.toastProps,t.staleId)}function w(t,e){var o=e.delay,s=e.staleId,u=(0,i.Z)(e,f);if(g(t)&&!function(t){return!T.current||C.props.enableMultiContainer&&t.containerId!==C.props.containerId||O.has(t.toastId)&&null==t.updateId}(u)){var l=u.toastId,y=u.updateId,Z=u.data,I=C.props,w=function(){return _(l)},R=null==y;R&&C.count++;var P,k,M=(0,a.Z)((0,a.Z)((0,a.Z)({},I),{},{style:I.toastStyle,key:C.toastKey++},Object.fromEntries(Object.entries(u).filter((function(t){var e=(0,r.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:l,updateId:y,data:Z,closeToast:w,isIn:!1,className:v(u.className||I.toastClassName),bodyClassName:v(u.bodyClassName||I.bodyClassName),progressClassName:v(u.progressClassName||I.progressClassName),autoClose:!u.isLoading&&(P=u.autoClose,k=I.autoClose,!1===P||d(P)&&P>0?P:k),deleteToast:function(){var t=h(O.get(l),"removed");O.delete(l),E.emit(4,t);var e=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),e>0){var o=null==l?C.props.limit:1;if(1===e||1===o)C.displayedToast++,L();else{var r=o>e?e:o;C.displayedToast=r;for(var a=0;a<r;a++)L()}}else n()}});M.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,r=t.icon,a=null,i={theme:e,type:n};return!1===r||(m(r)?a=r(i):(0,c.isValidElement)(r)?a=(0,c.cloneElement)(r,i):p(r)||d(r)?a=r:o?a=b.spinner():function(t){return t in b}(n)&&(a=b[n](i))),a}(M),m(u.onOpen)&&(M.onOpen=u.onOpen),m(u.onClose)&&(M.onClose=u.onClose),M.closeButton=I.closeButton,!1===u.closeButton||g(u.closeButton)?M.closeButton=u.closeButton:!0===u.closeButton&&(M.closeButton=!g(I.closeButton)||I.closeButton);var x=t;(0,c.isValidElement)(t)&&!p(t.type)?x=(0,c.cloneElement)(t,{closeToast:w,toastProps:M,data:Z}):m(t)&&(x=t({closeToast:w,toastProps:M,data:Z})),I.limit&&I.limit>0&&C.count>I.limit&&R?C.queue.push({toastContent:x,toastProps:M,staleId:s}):d(o)?setTimeout((function(){N(x,M,s)}),o):N(x,M,s)}}function N(t,e,n){var o=e.toastId;n&&O.delete(n);var r={content:t,props:e};O.set(o,r),y((function(t){return[].concat((0,s.Z)(t),[o]).filter((function(t){return t!==n}))})),E.emit(4,h(r,null==r.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return C.containerId=t.containerId,E.cancelEmit(3).on(0,w).on(1,(function(t){return T.current&&_(t)})).on(5,I).emit(2,C),function(){O.clear(),E.emit(3,C)}}),[]),(0,c.useEffect)((function(){C.props=t,C.isToastActive=Z,C.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(O.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:T,isToastActive:Z}}function Z(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function C(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function I(t){var e=(0,c.useState)(!1),n=(0,r.Z)(e,2),o=n[0],a=n[1],i=(0,c.useState)(!1),s=(0,r.Z)(i,2),u=s[0],l=s[1],f=(0,c.useRef)(null),d=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(t),v=t.autoClose,g=t.pauseOnHover,y=t.closeToast,h=t.onClick,E=t.closeOnClick;function T(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",L),document.addEventListener("touchmove",_),document.addEventListener("touchend",L);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=Z(e.nativeEvent),d.y=C(e.nativeEvent),"x"===t.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function b(e){if(d.boundingRect){var n=d.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?I():O()}}function O(){a(!0)}function I(){a(!1)}function _(e){var n=f.current;d.canDrag&&n&&(d.didMove=!0,o&&I(),d.x=Z(e),d.y=C(e),d.delta="x"===t.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function L(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",L);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,c.useEffect)((function(){p.current=t})),(0,c.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),m(t.onOpen)&&t.onOpen((0,c.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;m(t.onClose)&&t.onClose((0,c.isValidElement)(t.children)&&t.children.props)}}),[]),(0,c.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",O),window.addEventListener("blur",I)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",I))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:T,onTouchStart:T,onMouseUp:b,onTouchEnd:b};return v&&g&&(w.onMouseEnter=I,w.onMouseLeave=O),E&&(w.onClick=function(t){h&&h(t),d.canCloseOnClick&&y()}),{playToast:O,pauseToast:I,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:w}}function _(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,r=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(t){var e=t.delay,n=t.isRunning,r=t.closeToast,i=t.type,s=void 0===i?"default":i,l=t.hide,f=t.className,d=t.style,p=t.controlledProgress,v=t.progress,g=t.rtl,y=t.isIn,h=t.theme,E=l||p&&0===v,T=(0,a.Z)((0,a.Z)({},d),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});p&&(T.transform="scaleX(".concat(v,")"));var b=(0,u.Z)("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":g}),O=m(f)?f({rtl:g,type:s,defaultClassName:b}):(0,u.Z)(b,f);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:O,style:T},p&&v>=1?"onTransitionEnd":"onAnimationEnd",p&&v<1?null:function(){y&&r()}))}var w=function(t){var e=I(t),n=e.isRunning,o=e.preventExitTransition,r=e.toastRef,i=e.eventHandlers,s=t.closeButton,l=t.children,f=t.autoClose,d=t.onClick,p=t.type,v=t.hideProgressBar,g=t.closeToast,y=t.transition,h=t.position,E=t.className,T=t.style,b=t.bodyClassName,O=t.bodyStyle,Z=t.progressClassName,C=t.progressStyle,w=t.updateId,N=t.role,R=t.progress,P=t.rtl,k=t.toastId,M=t.deleteToast,x=t.isIn,D=t.isLoading,A=t.iconOut,B=t.closeOnClick,j=t.theme,z=(0,u.Z)("Toastify__toast","Toastify__toast-theme--".concat(j),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":B}),S=m(E)?E({rtl:P,position:h,type:p,defaultClassName:z}):(0,u.Z)(z,E),F=!!R||!f,H={closeToast:g,type:p,theme:j},q=null;return!1===s||(q=m(s)?s(H):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,H):_(H)),c.createElement(y,{isIn:x,done:M,position:h,preventExitTransition:o,nodeRef:r},c.createElement("div",(0,a.Z)((0,a.Z)({id:k,onClick:d,className:S},i),{},{style:T,ref:r}),c.createElement("div",(0,a.Z)((0,a.Z)({},x&&{role:N}),{},{className:m(b)?b({type:p}):(0,u.Z)("Toastify__toast-body",b),style:O}),null!=A&&c.createElement("div",{className:(0,u.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},A),c.createElement("div",null,l)),q,c.createElement(L,(0,a.Z)((0,a.Z)({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:P,theme:j,delay:f,isRunning:n,isIn:x,closeToast:g,hide:v,type:p,style:C,className:Z,controlledProgress:F,progress:R||0}))))},N=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},R=y(N("bounce",!0)),P=y(N("slide",!0)),k=(y(N("zoom")),y(N("flip")),(0,c.forwardRef)((function(t,e){var n=O(t),o=n.getToastToRender,r=n.containerRef,i=n.isToastActive,s=t.className,l=t.style,f=t.rtl,d=t.containerId;function p(t){var e=(0,u.Z)("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":f});return m(s)?s({position:t,rtl:f,defaultClassName:e}):(0,u.Z)(e,v(s))}return(0,c.useEffect)((function(){e&&(e.current=r.current)}),[]),c.createElement("div",{ref:r,className:"Toastify",id:d},o((function(t,e){var n=e.length?(0,a.Z)({},l):(0,a.Z)((0,a.Z)({},l),{},{pointerEvents:"none"});return c.createElement("div",{className:p(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,r=t.props;return c.createElement(w,(0,a.Z)((0,a.Z)({},r),{},{isIn:i(r.toastId),style:(0,a.Z)((0,a.Z)({},r.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(r.key)}),o)})))})))})));k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:_,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,x=new Map,D=[],A=1;function B(){return""+A++}function j(t){return t&&(p(t.toastId)||d(t.toastId))?t.toastId:B()}function z(t,e){return x.size>0?E.emit(0,t,e):D.push({content:t,options:e}),e.toastId}function S(t,e){return(0,a.Z)((0,a.Z)({},e),{},{type:e&&e.type||t,toastId:j(e)})}function F(t){return function(e,n){return z(e,S(t,n))}}function H(t,e){return z(t,S("default",e))}H.loading=function(t,e){return z(t,S("default",(0,a.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},H.promise=function(t,e,n){var o,r=e.pending,i=e.error,s=e.success;r&&(o=p(r)?H.loading(r,n):H.loading(r.render,(0,a.Z)((0,a.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(t,e,r){if(null!=e){var i=(0,a.Z)((0,a.Z)((0,a.Z)({type:t},c),n),{},{data:r}),s=p(e)?{render:e}:e;return o?H.update(o,(0,a.Z)((0,a.Z)({},i),s)):H(s.render,(0,a.Z)((0,a.Z)({},i),s)),r}H.dismiss(o)},l=m(t)?t():t;return l.then((function(t){return u("success",s,t)})).catch((function(t){return u("error",i,t)})),l},H.success=F("success"),H.info=F("info"),H.error=F("error"),H.warning=F("warning"),H.warn=H.warning,H.dark=function(t,e){return z(t,S("default",(0,a.Z)({theme:"dark"},e)))},H.dismiss=function(t){x.size>0?E.emit(1,t):D=D.filter((function(e){return null!=t&&e.options.toastId!==t}))},H.clearWaitingQueue=function(t){return void 0===t&&(t={}),E.emit(5,t)},H.isActive=function(t){var e=!1;return x.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},H.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=x.get(n||M);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,r=n.content,i=(0,a.Z)((0,a.Z)((0,a.Z)({delay:100},o),e),{},{toastId:e.toastId||t,updateId:B()});i.toastId!==t&&(i.staleId=t);var s=i.render||r;delete i.render,z(s,i)}}),0)},H.done=function(t){H.update(t,{progress:1})},H.onChange=function(t){return E.on(4,t),function(){E.off(4,t)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(t){M=t.containerId||t,x.set(M,t),D.forEach((function(t){E.emit(0,t.content,t.options)})),D=[]})).on(3,(function(t){x.delete(t.containerId||t),0===x.size&&E.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=681.9550b0b1.chunk.js.map
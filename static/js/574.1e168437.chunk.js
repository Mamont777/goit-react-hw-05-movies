"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[574],{4146:function(n,r,e){e.d(r,{Z:function(){return v}});var t,a,o,s,c=e(7689),i=e(1087),p=e(168),u=e(7691),f=u.ZP.ul(t||(t=(0,p.Z)(["\n  margin: 15px 0 60px 0;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n"]))),x=u.ZP.li(a||(a=(0,p.Z)(["\n  max-width: 100%;\n  height: 100%;\n  width: 260px;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 8px;\n  background-color: transparent;\n  border: none;\n  backdrop-filter: blur(3.5px);\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,\n    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;\n  transform: scale(1);\n  transition: transform 250ms linear 0s;\n  &:hover {\n    box-shadow: rgb(219 22 172 / 89%) 0px 2px 24px -5px;\n    transform: scale(1.05);\n  }\n  img {\n  }\n"]))),h=u.ZP.img(o||(o=(0,p.Z)(["\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  height: 420px;\n  border-radius: 8px;\n\n  transform: scale(1);\n  object-fit: cover;\n  object-position: center center;\n"]))),l=u.ZP.p(s||(s=(0,p.Z)(["\n  margin-top: 15px;\n  color: whitesmoke;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  :hover {\n    color: orangered;\n  }\n"]))),d=e(184),v=function(n){var r=n.movies,e=(0,c.TH)();return(0,d.jsx)(f,{children:r.map((function(n){var r=n.id,t=n.title,a=n.poster_path;return(0,d.jsx)(x,{children:(0,d.jsxs)(i.rU,{to:"/movies/".concat(r),state:{from:e},children:[(0,d.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://dummyimage.com/395x574/000/fff.jpg&text=no+poster",alt:"Poster".concat(t)}),(0,d.jsx)(l,{children:t})]})},r)}))})}},1574:function(n,r,e){e.r(r),e.d(r,{default:function(){return m}});var t,a=e(3433),o=e(5861),s=e(9439),c=e(4687),i=e.n(c),p=e(2791),u=e(367),f=e(4146),x=e(1454),h=e(168),l=e(7691).ZP.button(t||(t=(0,h.Z)(["\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: linear-gradient(\n    141.22deg,\n    rgb(255, 194, 38) 9.4%,\n    rgb(248, 65, 25) 91.91%\n  );\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px auto 20px;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  transform: scale(1);\n  &:hover,\n  &:focus {\n    transform: scale(0.9);\n  }\n"]))),d=e(184),v=function(n){var r=n.onLoadMore;return(0,d.jsx)(l,{type:"button",onClick:r,children:"Load more"})},m=function(){var n=(0,p.useState)(1),r=(0,s.Z)(n,2),e=r[0],t=r[1],c=(0,p.useState)([]),h=(0,s.Z)(c,2),l=h[0],m=h[1],g=(0,p.useState)(!1),w=(0,s.Z)(g,2),b=w[0],Z=w[1];(0,p.useEffect)((function(){function n(){return n=(0,o.Z)(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,u.Df)(r);case 4:e=n.sent,m((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e.results))})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:return n.prev=11,Z(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])}))),n.apply(this,arguments)}!function(r){n.apply(this,arguments)}(e)}),[e]);return(0,d.jsxs)(d.Fragment,{children:[b&&(0,d.jsx)(x.Z,{}),(0,d.jsx)("h2",{style:{textShadow:"-6px 7px 6px rgba(34,17,153,0.47)"},children:"Trending today"}),(0,d.jsx)(f.Z,{movies:l}),(0,d.jsx)(v,{onLoadMore:function(){return t((function(n){return n+1}))}})]})}},367:function(n,r,e){e.d(r,{Df:function(){return c},MS:function(){return x},Pg:function(){return p},Pt:function(){return i},tx:function(){return f},yo:function(){return u}});var t=e(5861),a=e(4687),o=e.n(a),s=e(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"a06c90b50d50fe78eda7fc28090f9f2b"};var c=function(){var n=(0,t.Z)(o().mark((function n(){var r,e,t,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,n.prev=1,n.next=4,s.Z.get("trending/movie/day",{params:{page:r}});case 4:return e=n.sent,t=e.data,n.abrupt("return",t);case 9:throw n.prev=9,n.t0=n.catch(1),new Error("Oops, there is no movies");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(o().mark((function n(){var r,e,t,a,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:1,e=c.length>1&&void 0!==c[1]?c[1]:"",n.prev=2,n.next=5,s.Z.get("search/movie",{params:{page:r,query:e}});case 5:return t=n.sent,a=t.data,n.abrupt("return",a);case 10:throw n.prev=10,n.t0=n.catch(2),new Error("Oops, there is no movies");case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(r),{params:{id:r}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(r,"/credits"),{params:{id:r}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(r,"/reviews"),{params:{id:r}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(r,"/videos"),{params:{id:r}});case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=574.1e168437.chunk.js.map
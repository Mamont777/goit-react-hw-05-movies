"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{9257:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,a,o,s,i,c,u,p,l,d,x,f,h=r(5861),v=r(9439),g=r(4687),m=r.n(g),b=r(2791),w=r(7689),Z=r(1087),j=r(6949),k=r(2426),y=r.n(k),P=r(367),O=r(168),_=r(7691),E=r(8617),S=r(184),z=function(n){var e=n.to,r=n.children;return(0,S.jsxs)(C,{to:e,children:[(0,S.jsx)(E.jTe,{size:"24"}),r]})},C=(0,_.ZP)(Z.rU)(t||(t=(0,O.Z)(["\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  margin-bottom: 16px;\n  padding: 8px 16px;\n  width: 100px;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  color: rgb(255, 255, 255);\n  text-transform: uppercase;\n  text-align: center;\n  background: linear-gradient(\n    141.22deg,\n    rgb(255, 194, 38) 9.4%,\n    rgb(248, 65, 25) 91.91%\n  );\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,\n    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  transform: scale(1);\n\n  :hover {\n    transform: scale(0.9);\n  }\n"]))),U=_.ZP.div(a||(a=(0,O.Z)(["\n  display: flex;\n  align-items: start;\n  margin-top: 10px;\n"]))),M=_.ZP.img(o||(o=(0,O.Z)(["\n  width: 300px;\n  border-radius: 8px;\n"]))),R=_.ZP.div(s||(s=(0,O.Z)(["\n  margin-left: 20px;\n"]))),Y=_.ZP.li(i||(i=(0,O.Z)(["\n  margin-bottom: 15px;\n"]))),D=_.ZP.ul(c||(c=(0,O.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n"]))),T=_.ZP.li(u||(u=(0,O.Z)(["\n  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n  color: rgb(0, 0, 0);\n  text-shadow: 0 0.4px 0.4px #fff;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 5px;\n  padding: 6px;\n"]))),W=_.ZP.div(p||(p=(0,O.Z)(["\n  position: absolute;\n  top: 125px;\n  left: 380px;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  color: #ffffff;\n  font-size: 14px;\n\n  &.green {\n    color: green;\n    border: 1px solid green;\n  }\n\n  &.orange {\n    border: 1px solid orange;\n    color: orange;\n  }\n\n  &.red {\n    border: 1px solid red;\n    color: red;\n  }\n"]))),F=_.ZP.div(l||(l=(0,O.Z)(["\n  margin-top: 20px;\n  border-bottom: 1px solid black;\n"]))),I=_.ZP.div(d||(d=(0,O.Z)(["\n  margin-top: 15px;\n"]))),q=_.ZP.div(x||(x=(0,O.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),A=_.ZP.li(f||(f=(0,O.Z)(["\n  margin-top: 15px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),B=r(1454);var H=function(){var n,e,r=(0,w.UO)().movieId,t=(0,b.useState)([]),a=(0,v.Z)(t,2),o=a[0],s=a[1],i=(0,b.useState)(!1),c=(0,v.Z)(i,2),u=c[0],p=c[1],l=(0,b.useState)(""),d=(0,v.Z)(l,2),x=d[0],f=d[1],g=(0,w.TH)(),k=(0,b.useRef)(null!==(n=null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,b.useEffect)((function(){function n(){return(n=(0,h.Z)(m().mark((function n(){var e;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,P.Pg)(r);case 3:e=n.sent,s(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r]);var O,_=o.genres,E=o.overview,C=o.poster_path,H=o.release_date,L=o.title,N=o.vote_average,V=o.status,G=o.runtime,J=H?H.slice(0,4):"",K=(O=N)>=8?"green":O>6?"orange":"red",Q=H?y()(H).format("MMM D, YYYY"):"",X=function(n){var e=Math.floor(n/60),r=n%60;return"".concat(e,"h ").concat(r,"m")}(G);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(z,{to:k.current,children:"Back"}),(0,S.jsxs)(U,{children:[(0,S.jsx)(M,{src:C?"https://image.tmdb.org/t/p/w500".concat(C):"https://dummyimage.com/395x574/000/fff.jpg&text=no+poster",alt:"Poster ".concat(L),width:"100%"}),(N||N>0)&&(0,S.jsx)(W,{className:K,children:null===N||void 0===N?void 0:N.toFixed(1)}),(0,S.jsx)(R,{children:(0,S.jsxs)("ul",{children:[(0,S.jsxs)(Y,{children:[(0,S.jsxs)("h2",{children:[L," (",J,")"]}),(N||N>0)&&(0,S.jsx)(j.Z,{name:"read-only",defaultValue:N/10*5,precision:.5,size:"large",readOnly:!0}),_&&(0,S.jsxs)(D,{children:[_.map((function(n,e){return(0,S.jsx)(T,{children:n.name},e)}))," "]})]}),(0,S.jsxs)(Y,{children:[(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)("p",{children:E})]}),(0,S.jsxs)("li",{children:[(0,S.jsxs)("b",{style:{color:"rgb(255, 66, 8)",fontWeight:700},children:["Status:"," "]}),V]}),(0,S.jsxs)("li",{children:[(0,S.jsxs)("b",{style:{color:"rgb(255, 66, 8)",fontWeight:700},children:["Release Date:"," "]}),Q]}),(0,S.jsxs)("li",{children:[(0,S.jsxs)("b",{style:{color:"rgb(255, 66, 8)",fontWeight:700},children:["Runtime:"," "]}),X]})]})})]}),(0,S.jsx)(F,{}),(0,S.jsxs)(I,{children:[(0,S.jsx)("h4",{style:{textShadow:"-6px 7px 6px rgba(34,17,153,0.47)"},children:"Additional Information"}),(0,S.jsxs)(q,{children:[(0,S.jsx)(A,{onClick:function(){"cast"!==x?(p(!0),f("cast")):p((function(n){return!n}))},children:(0,S.jsx)(Z.rU,{to:"cast",children:"Cast"})}),(0,S.jsx)(A,{onClick:function(){"reviews"!==x?(p(!0),f("reviews")):p((function(n){return!n}))},children:(0,S.jsx)(Z.rU,{to:"reviews",children:"Reviews"})}),(0,S.jsx)(A,{onClick:function(){"trailer"!==x?(p(!0),f("trailer")):p((function(n){return!n}))},children:(0,S.jsx)(Z.rU,{to:"trailer",children:"Trailer"})})]})]}),(0,S.jsx)(F,{}),(0,S.jsx)(b.Suspense,{fallback:(0,S.jsx)(B.Z,{}),children:(0,S.jsx)(w.j3,{context:[u]})})]})}},367:function(n,e,r){r.d(e,{Df:function(){return i},MS:function(){return d},Pg:function(){return u},Pt:function(){return c},tx:function(){return l},yo:function(){return p}});var t=r(5861),a=r(4687),o=r.n(a),s=r(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"a06c90b50d50fe78eda7fc28090f9f2b"};var i=function(){var n=(0,t.Z)(o().mark((function n(){var e,r,t,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.prev=1,n.next=4,s.Z.get("trending/movie/day",{params:{page:e}});case 4:return r=n.sent,t=r.data,n.abrupt("return",t);case 9:throw n.prev=9,n.t0=n.catch(1),new Error("Oops, there is no movies");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,t.Z)(o().mark((function n(){var e,r,t,a,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,r=i.length>1&&void 0!==i[1]?i[1]:"",n.prev=2,n.next=5,s.Z.get("search/movie",{params:{page:e,query:r}});case 5:return t=n.sent,a=t.data,n.abrupt("return",a);case 10:throw n.prev=10,n.t0=n.catch(2),new Error("Oops, there is no movies");case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e),{params:{id:e}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/credits"),{params:{id:e}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/reviews"),{params:{id:e}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/videos"),{params:{id:e}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movies");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.7d8c5895.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{42:function(e,n,t){t.d(n,{Df:function(){return h},RH:function(){return g},cA:function(){return f},cQ:function(){return s},tD:function(){return p}});var r=t(861),a=t(687),c=t.n(a),o=t(44),i="1c4a98afb2f80cbf9a0f0f59d5b0ab2a";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("trending/movie/day?api_key=".concat(i));case 3:return n=e.sent,t=n.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("movie/".concat(n,"?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}o.ZP.defaults.baseURL="https://api.themoviedb.org/3/"},509:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,a,c=t(861),o=t(885),i=t(687),s=t.n(i),u=t(791),p=t(42),l=t(689),f=t(87),d=t(168),h=t(402),v=h.Z.div(r||(r=(0,d.Z)(["\n  padding-left: 15px;\n"]))),g=h.Z.button(a||(a=(0,d.Z)(["\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 1.33;\n  min-width: 130px;\n  min-height: 44px;\n  color: #ffffff;\n  background-color: transparent;\n  border-color: #ffffff;\n  border-radius: 5px;\n  &:hover,\n  &:focus {\n    background: #ff6b01;\n    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n    transform: translateY(5%) scale(1.1);\n  }\n  background: linear-gradient(transparent, grey);\n  display: block;\n"]))),m=t(184),x=function(e){var n=e.id,t=e.poster_path,r=e.original_title,a=e.vote_average,c=e.overview,o=e.genres,i=void 0===o?[]:o,s=(0,l.TH)(),u=(0,l.s0)(),p=t?"".concat("https://image.tmdb.org/t/p/w300").concat(t):"https://img.freepik.com/premium-vector/modern-mini\u2026page-not-found-with-concept_599740-716.jpg?w=200";return(0,m.jsxs)(v,{children:[(0,m.jsx)(g,{type:"button",onClick:function(){var e,n,t;u(null!==(e=null===s||void 0===s||null===(n=s.state)||void 0===n||null===(t=n.from)||void 0===t?void 0:t.pathname)&&void 0!==e?e:"/")},children:"Go Back"}),(0,m.jsx)("img",{src:p,alt:r}),(0,m.jsx)("h1",{children:r}),(0,m.jsxs)("p",{children:["User Score: ",10*Math.round(a),"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:c}),(0,m.jsx)("h4",{children:"Genres"}),(0,m.jsxs)("p",{children:[i.map((function(e){return e.name})).join(", "),"."]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(f.rU,{to:"cast",state:{from:s},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(f.rU,{to:"reviews",state:{from:s},children:"Reviews"})})]})]}),(0,m.jsx)(l.j3,{})]},n)},b=function(){var e=(0,u.useState)({}),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,l.UO)().movieId;(0,u.useEffect)((function(){var e=function(){var e=(0,c.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.cA)(a);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var i=t.id,f=t.poster_path,d=t.original_title,h=t.vote_average,v=t.overview,g=t.genres;return(0,m.jsx)("div",{children:(0,m.jsx)(x,{id:i,poster_path:f,original_title:d,vote_average:h,overview:v,genres:g})})}}}]);
//# sourceMappingURL=509.2a57876b.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{785:function(e,n,t){t.r(n);var r=t(861),a=t(439),u=t(757),s=t.n(u),c=t(689),o=t(791),i=t(690),p=t(184);n.default=function(){var e=(0,o.useState)(""),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,c.UO)().id;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=13;break}return e.prev=1,e.next=4,(0,i._r)(f);case 4:n=e.sent,u(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error");case 11:return e.prev=11,e.finish(11);case 13:return e.abrupt("return");case 14:case"end":return e.stop()}}),e,null,[[1,8,11,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,p.jsx)(p.Fragment,{children:t.length?(0,p.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:t}),(0,p.jsx)("p",{children:r})]},n)}))}):(0,p.jsx)("p",{children:"We don`t have any reviews for this film"})})}},690:function(e,n,t){t.d(n,{HI:function(){return i},Hg:function(){return c},Jh:function(){return f},_r:function(){return h},on:function(){return d}});var r=t(861),a=t(757),u=t.n(a),s=t(243);function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/all/day");case 2:return n=e.sent,t=n.data,console.log(t.results),e.abrupt("return",t.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"&language=en-US"));case 2:return t=e.sent,r=t.data,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits?language=en-US"));case 2:return t=e.sent,r=t.data,console.log(r),e.abrupt("return",r.cast);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews?language=en-US&page=1"));case 2:return t=e.sent,r=t.data,console.log(r.results),e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?query=".concat(n,"&page=1"));case 2:return t=e.sent,r=t.data,console.log(r.results),e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"ff340e70eb42d683311a67813670b4e7"}}}]);
//# sourceMappingURL=785.59bbc552.chunk.js.map
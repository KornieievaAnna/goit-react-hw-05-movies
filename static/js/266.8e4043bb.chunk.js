"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{130:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(689),u=e(87),a=e(184);function c(n){var t=n.movie,e=(0,r.TH)(),c=t.id,s=t.name,o=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(u.OL,{to:"/movie/".concat(c),state:{from:e},children:null!==o&&void 0!==o?o:s})},c)}},266:function(n,t,e){e.r(t);var r=e(861),u=e(439),a=e(757),c=e.n(a),s=e(791),o=e(690),i=e(130),p=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,u.Z)(n,2),e=t[0],a=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Hg)();case 3:t=n.sent,a(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error");case 10:return n.prev=10,n.finish(10);case 12:case"end":return n.stop()}}),n,null,[[0,7,10,12]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsx)("ul",{children:e.map((function(n){return(0,p.jsx)(i.Z,{movie:n},n.id)}))})}},690:function(n,t,e){e.d(t,{HI:function(){return i},Hg:function(){return s},Jh:function(){return f},_r:function(){return v},on:function(){return d}});var r=e(861),u=e(757),a=e.n(u),c=e(243);function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/day");case 2:return t=n.sent,e=t.data,console.log(e.results),n.abrupt("return",e.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function i(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"&language=en-US"));case 2:return e=n.sent,r=e.data,console.log(r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?language=en-US"));case 2:return e=n.sent,r=e.data,console.log(r),n.abrupt("return",r.cast);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?language=en-US&page=1"));case 2:return e=n.sent,r=e.data,console.log(r.results),n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&page=1"));case 2:return e=n.sent,r=e.data,console.log(r.results),n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"ff340e70eb42d683311a67813670b4e7"}}}]);
//# sourceMappingURL=266.8e4043bb.chunk.js.map
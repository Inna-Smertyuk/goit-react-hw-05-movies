"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[964],{6308:function(t,n,e){e.d(n,{BG:function(){return h},Bt:function(){return y},I2:function(){return f},kK:function(){return v},wr:function(){return o}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c);i().defaults.baseURL="https://api.themoviedb.org/3";var s="fe6dc393810702cab99031f1eed25696";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/all/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},8964:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(885),a=e(2791),u=e(501),c=e(6871),i="PageHeader_header__76DUK",s=e(184);function o(t){var n=t.children;return(0,s.jsx)("h1",{className:i,children:n})}var p=e(6308),f=e(8666);function d(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],i=n[1],d=(0,a.useState)(!1),h=(0,r.Z)(d,2),l=h[0],v=h[1],m=(0,c.TH)();return(0,a.useEffect)((function(){v(!0),(0,p.wr)().then((function(t){i(t),v(!1)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{children:"Trending today"}),l&&(0,s.jsx)(f.Z,{}),(0,s.jsx)("ul",{children:e.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"movies/".concat(t.id),state:{from:m},children:t.title?t.title:t.name})},t.id)}))})]})}}}]);
//# sourceMappingURL=964.191b1291.chunk.js.map
(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(8),c=n.n(r),i=n(2),s=n(10),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];console.log("handleInputChange llamado!!!!");return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("Handle submit llamado!! "),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)}})})},l=n(11),d=n(6),j=n.n(d),p=n(9),b=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,a,r,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=Sc5rXlymOCNSNJ1NFyJVxLZdcPVyW3T3&q=".concat(encodeURI(t),"&limit=12"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=n(7),h=n.n(f),O=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})};O.proTypes={title:h.a.string.isRequired,url:h.a.string.isRequired};var g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){setTimeout((function(){c({data:e,loading:!1})}),3e3)}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:t}),c&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)("ol",{className:"card-grid",children:r.map((function(e){return Object(u.jsx)(O,Object(l.a)({},e),e.id)}))})]})},m=function(e){var t=e.defaultCategories,n=void 0===t?[]:t,r=Object(a.useState)(n),c=Object(i.a)(r,2),s=c[0],l=c[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"GIF App"}),Object(u.jsx)("p",{children:"Please enter the name of the Gif you want display"}),Object(u.jsx)(o,{categories:s,setCategories:l}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:s.map((function(e,t){return Object(u.jsx)(g,{category:e},e)}))})]})};n(20);c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ec6e6370.chunk.js.map
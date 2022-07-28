(()=>{"use strict";var t,e,r,n={850:(t,e,r)=>{var n=r(294),o=r(745),a=r(848),i=r(673),l=(0,i.ni)({baseUrl:"https://api.discogs.com/",prepareHeaders:function(t){return t.set("User-Agent","RalemDiscogsApp/0.1 +https://github.com/Ralem"),t.set("authorization","Discogs key=".concat("URMCVdObCEQjlMjiEycj",", secret=").concat("xzqQVJUrrifLCxDIymzJuKSJkjZrERPI")),t}}),c=(0,a.LC)({reducerPath:"discogsApi",baseQuery:l,endpoints:function(t){return{searchByTerm:t.query({query:function(t){return"database/search?q=".concat(t,"&type=release")}})}}}),u=c.useLazySearchByTermQuery,s=r(908),p=r(917),f=["children"];function d(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var y=(0,s.Z)("nav",{target:"eg8ejrp0"})([{padding:"0.5rem","--tw-bg-opacity":"1",backgroundColor:"rgba(0, 0, 0, var(--tw-bg-opacity))"}],"");const m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.children,r=d(t,f);return(0,p.tZ)(y,r,e)};var g=["coverImageSrc","title"];function b(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var v=(0,s.Z)("div",{target:"e1ky27rw2"})([{position:"relative",width:"9rem"}],""),h=(0,s.Z)("img",{target:"e1ky27rw1"})([{width:"9rem",height:"9rem",marginBottom:"0.25rem",objectFit:"cover","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-bg-opacity":"1",backgroundColor:"rgba(156, 163, 175, var(--tw-bg-opacity))"}],""),w=(0,s.Z)("p",{target:"e1ky27rw0"})([{maxWidth:"100%",fontSize:"0.875rem",lineHeight:"1.25rem",fontFamily:"'Montserrat', sans-serif",fontWeight:"700",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}],"");const x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coverImageSrc,r=t.title,n=b(t,g);return(0,p.tZ)(v,n,(0,p.tZ)(h,{src:e,alt:r}),(0,p.tZ)(w,null,r))};const O=(0,s.Z)("div",{target:"e2y25mm0"})([{maxWidth:"80rem",width:"100%",paddingTop:"1rem",display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",columnGap:"0.5rem",rowGap:"1rem",alignContent:"center",justifyItems:"center","@media (min-width: 768px)":{gridTemplateColumns:"repeat(4, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(5, minmax(0, 1fr))"},"@media (min-width: 1280px)":{marginLeft:"auto",marginRight:"auto"}}],"");var j=r(935);const k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=(0,n.useRef)(null),o=function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];r.current&&clearTimeout(r.current),r.current=setTimeout((function(){t.apply(void 0,o)}),e)};return(0,n.useEffect)((function(){return function(){r.current&&clearTimeout(r.current)}}),[]),o};var S=["wrapperProps"];function Z(){return Z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Z.apply(this,arguments)}function I(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var P=(0,n.forwardRef)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.wrapperProps,r=void 0===e?{}:e,o=I(t,S),a=arguments.length>1?arguments[1]:void 0,i=(0,n.useRef)(null),l=(0,n.useRef)(null),c=function(t){var e,n,o;null==i||null===(e=i.current)||void 0===e||null===(n=e.focus)||void 0===n||n.call(e),null==r||null===(o=r.onFocus)||void 0===o||o.call(r,t)};return(0,n.useImperativeHandle)(a,(function(){return{wrapper:l,input:i}})),(0,p.tZ)(C,Z({ref:l},r,{onFocus:c,tabIndex:-1}),(0,p.tZ)(z,Z({ref:i,type:"text"},o)))})),C=(0,s.Z)("div",{target:"e5427q1"})([{padding:"0.5rem","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))"}],""),z=(0,s.Z)("input",{target:"e5427q0"})([{width:"100%",height:"100%",outline:"2px solid transparent",outlineOffset:"2px",backgroundColor:"rgba(0, 0, 0, 0)"}],"");P.displayName="Input";const E=P;var A=["iconId"];function T(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var R=(0,s.Z)("svg",{target:"e10ielyv0"})([{display:"inline-block",width:"1em",height:"1em",stroke:"currentColor",fill:"currentColor"}],"");const M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.iconId,r=T(t,A);return(0,p.tZ)(R,r,(0,p.tZ)("use",{xlinkHref:"#icon-".concat(e)}))};var F=["children","onRemoveClick"];function q(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var H=(0,s.Z)("div",{target:"e1uy3s7b2"})([{display:"flex",alignItems:"center",userSelect:"none",cursor:"pointer",fontWeight:"600","--tw-text-opacity":"1",color:"rgba(25, 25, 30, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(11, 123, 248, var(--tw-text-opacity))"}}],""),L=(0,s.Z)("p",{target:"e1uy3s7b1"})([{display:"block"}],""),_=(0,s.Z)(M,{target:"e1uy3s7b0"})([{marginRight:"0.75rem","--tw-text-opacity":"1",color:"rgba(209, 213, 219, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(238, 88, 30, var(--tw-text-opacity))"}}],"");const B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.children,r=t.onRemoveClick,n=q(t,F),o=function(t){null==r||r(t)};return(0,p.tZ)(H,n,(0,p.tZ)(_,{iconId:"x-circle",onClick:o}),(0,p.tZ)(L,null,e))};var U=r(743),N=r(268);function D(t){return function(t){if(Array.isArray(t))return W(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return W(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function J(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?J(Object(r),!0).forEach((function(e){Y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var X,$="dgSearchHistory",G=function(t){return localStorage.setItem($,JSON.stringify(t)),t},V={setIsTest:function(t,e){return Q(Q({},t),{},{test:e.payload})},deleteFromHistory:function(t,e){return Q(Q({},t),{},{history:G(t.history.filter((function(t){return t!==e.payload})))})},addToHistory:function(t,e){return Q(Q({},t),{},{history:G([e.payload].concat(D(t.history.filter((function(t){return t!==e.payload})))))})},clearHistory:function(t){return localStorage.removeItem($),Q(Q({},t),{},{history:[]})},setSearchTerm:function(t,e){return Q(Q({},t),{},{searchTerm:e.payload})}},K=(0,N.oM)({name:"search",initialState:(X=JSON.parse(localStorage.getItem($)||""),{history:Array.isArray(X)?X:[],searchTerm:"",test:!0}),reducers:V}),tt=function(t){return function(e){return e.search[t]}},et=K.actions,rt=(et.setIsTest,et.addToHistory),nt=et.setSearchTerm,ot=et.deleteFromHistory;const at=K.reducer;var it=function(t,e){return!e||(e===t||(null==e?void 0:e.contains(t)))},lt=function(t,e){return!e||(null==e?void 0:e.some((function(e){return"string"==typeof e?function(t,e){return null!==t.parentElement&&t.classList.contains(e)}(t,e):it(t,e)})))},ct=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return!it(t,e)&&!lt(t,r)},ut=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=ct(t,e,n);return o?null==r?void 0:r():void 0},st=["history","searchTerm","onSearch"];function pt(){return pt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},pt.apply(this,arguments)}function ft(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return dt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return dt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function yt(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var mt=(0,s.Z)("div",{target:"e1cihr1j0"})({name:"1t4t0hk",styles:"position:absolute;width:5rem;left:0px;top:0px;padding:1rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(25, 25, 30, var(--tw-border-opacity));--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-text-opacity:1;color:rgba(238, 88, 30, var(--tw-text-opacity));--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))"});const gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.history,r=t.searchTerm,o=t.onSearch,a=yt(t,st),i=(0,U.I0)(),l=(0,n.useState)(!1),c=ft(l,2),u=c[0],s=c[1],f=(0,n.useState)({}),d=ft(f,2),y=d[0],m=d[1],g=(0,n.useRef)(null),b=document.getElementById("root"),v=(0,n.useRef)(null),h=function(t){var e,r,n;null==o||o(t),null===(e=v.current)||void 0===e||null===(r=e.input)||void 0===r||null===(n=r.current)||void 0===n||n.blur(),s(!1)},w=k(h),x=function(t){var e;null==a||null===(e=a.onChange)||void 0===e||e.call(a,t),w(t.target.value)},O=function(t){var e;null==a||null===(e=a.onFocus)||void 0===e||e.call(a,t),s(!0)},S=function(t){return function(){i(nt(t)),h(t)}},Z=function(t){return function(e){e.stopPropagation(),i(ot(t))}},I=function(t){var e,r;t.target&&null!==(e=v.current)&&void 0!==e&&e.wrapper.current&&ut(t.target,null===(r=v.current)||void 0===r?void 0:r.wrapper.current,(function(){s(!1)}))};return(0,n.useLayoutEffect)((function(){if(u){var t,e,r=(null===(t=v.current)||void 0===t||null===(e=t.wrapper.current)||void 0===e?void 0:e.getBoundingClientRect())||{width:0,top:0,height:0,left:0};m({left:r.left,top:r.top+r.height,width:r.width}),window.addEventListener("click",I)}else window.removeEventListener("click",I);return function(){window.removeEventListener("click",I)}}),[u]),(0,p.tZ)(n.Fragment,null,(0,p.tZ)(E,pt({},a,{ref:v,value:r,onFocus:O,onChange:x})),u&&b&&!(null==e||!e.length)&&(0,j.createPortal)((0,p.tZ)(mt,{style:y,ref:g},null==e?void 0:e.map((function(t){return(0,p.tZ)(B,{onClick:S(t),onRemoveClick:Z(t),tabIndex:0,key:t},t)}))),b))};var bt={name:"omyq7h",styles:"--tw-text-opacity:1;color:rgba(238, 88, 30, var(--tw-text-opacity))"},vt={name:"frnpz9",styles:"animation-delay:250ms;--tw-text-opacity:1;color:rgba(11, 123, 248, var(--tw-text-opacity))"},ht={name:"8xbyn7",styles:"animation-delay:500ms;--tw-text-opacity:1;color:rgba(238, 88, 30, var(--tw-text-opacity))"},wt=(0,s.Z)("div",{target:"e1bhnh9o3"})([{width:"100%",flex:"1 1 auto",display:"flex",alignItems:"center",justifyContent:"center"}],""),xt=(0,s.Z)(M,{target:"e1bhnh9o2"})([{animation:"bounce 1s infinite"}],""),Ot=(0,s.Z)("div",{target:"e1bhnh9o1"})([{display:"flex",alignItems:"center",marginRight:"1rem","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":0,marginRight:"calc(0.5rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"},fontSize:"1.5rem",lineHeight:"2rem"}],""),jt=(0,s.Z)("p",{target:"e1bhnh9o0"})([{fontSize:"1.5rem",lineHeight:"2rem"}],"");const kt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,p.tZ)(wt,t,(0,p.tZ)(Ot,null,(0,p.tZ)(xt,{iconId:"disc",css:bt}),(0,p.tZ)(xt,{iconId:"disc",css:vt}),(0,p.tZ)(xt,{iconId:"disc",css:ht})),(0,p.tZ)(jt,null,"Loading"))};var St={name:"115w2j2",styles:"display:flex;flex-direction:column;align-items:center;font-size:1.5rem;line-height:2rem"},Zt={name:"1d4lfsd",styles:"--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity));font-size:2.25rem;line-height:2.5rem"},It=(0,s.Z)("div",{target:"e16cwwpx0"})([{width:"100%",flex:"1 1 auto",display:"flex",alignItems:"center",justifyContent:"center"}],"");const Pt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,p.tZ)(It,t,(0,p.tZ)("div",{css:St},(0,p.tZ)(M,{iconId:"disc",css:Zt}),(0,p.tZ)("p",null,"No records to show")))};var Ct=["error"];function zt(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var Et={name:"qnc2t9",styles:"display:flex;flex-direction:column;align-items:center;font-size:1.5rem;line-height:2rem;text-align:center;--tw-text-opacity:1;color:rgba(239, 68, 68, var(--tw-text-opacity))"},At={name:"9uq67r",styles:"font-size:2.25rem;line-height:2.5rem;margin-bottom:1rem"},Tt={name:"nqx9k7",styles:"font-size:1rem;line-height:1.5rem"},Rt=(0,s.Z)("div",{target:"ezqcu0h0"})([{width:"100%",flex:"1 1 auto",display:"flex",alignItems:"center",justifyContent:"center"}],"");const Mt=function(t){var e=t.error,r=zt(t,Ct);return(0,p.tZ)(Rt,r,(0,p.tZ)("div",{css:Et},(0,p.tZ)(M,{iconId:"disc",css:At}),(0,p.tZ)("p",null,"Something Went Wrong"),e&&(0,p.tZ)("p",{css:Tt},e.message)))};function Ft(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return qt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return qt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const Ht=function(){var t,e,r=(0,U.I0)(),o=Ft(u(),2),a=o[0],i=o[1],l=i.data,c=i.error,s=i.isFetching,f=(0,U.v9)(tt("history")),d=(0,U.v9)(tt("searchTerm"));return(0,p.tZ)(n.Fragment,null,(0,p.tZ)(m,null,(0,p.tZ)(gt,{searchTerm:d,history:f,onSearch:function(t){t&&(a(t),r(rt(t)))},onChange:function(t){r(nt(t.target.value))},placeholder:"Search for albums"})),s?(0,p.tZ)(kt,null):c&&"data"in c?(0,p.tZ)(Mt,{error:c.data}):null!=l&&null!==(t=l.results)&&void 0!==t&&t.length?(0,p.tZ)(O,null,null==l||null===(e=l.results)||void 0===e?void 0:e.map((function(t){return(0,p.tZ)(x,{key:t.id,title:t.title,coverImageSrc:t.thumb})}))):(0,p.tZ)(Pt,null))};var Lt,_t,Bt,Ut=(0,N.xC)({reducer:(Lt={search:at},_t=c.reducerPath,Bt=c.reducer,_t in Lt?Object.defineProperty(Lt,_t,{value:Bt,enumerable:!0,configurable:!0,writable:!0}):Lt[_t]=Bt,Lt)});(0,i.sj)(Ut.dispatch);var Nt={name:"14mv86q",styles:'*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;--tw-border-opacity:1;border-color:rgba(229, 231, 235, var(--tw-border-opacity));--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);--tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}body{margin:0;font-family:inherit;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,\'Liberation Mono\',Menlo,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0;color:inherit;}button,select{text-transform:none;}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}legend{padding:0;}progress{vertical-align:baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0;}button{background-color:transparent;background-image:none;}fieldset{margin:0;padding:0;}ol,ul{list-style:none;margin:0;padding:0;}img{border-style:solid;}textarea{resize:vertical;}input::placeholder,textarea::placeholder{color:#9ca3af;}button,[role="button"]{cursor:pointer;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}a{color:inherit;text-decoration:inherit;}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto;}[hidden]{display:none;}@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1);}}'},Dt=function(){return(0,p.tZ)(p.xB,{styles:Nt})},Wt={name:"hrn5wk",styles:"html,body,#root{width:100%;height:100%;}#root{display:flex;flex-direction:column;}"};const Jt=function(){return(0,p.tZ)(n.Fragment,null,(0,p.tZ)(Dt,null),(0,p.tZ)(p.xB,{styles:Wt}))};var Qt=document.getElementById("root");if(!Qt)throw new Error("#root element missing in index.html");(0,o.s)(Qt).render((0,p.tZ)(n.StrictMode,null,(0,p.tZ)(U.zt,{store:Ut},(0,p.tZ)(Jt,null),(0,p.tZ)(Ht,null))))}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return n[t](r,r.exports,a),r.exports}a.m=n,t=[],a.O=(e,r,n,o)=>{if(!r){var i=1/0;for(s=0;s<t.length;s++){for(var[r,n,o]=t[s],l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((t=>a.O[t](r[c])))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){t.splice(s--,1);var u=n();void 0!==u&&(e=u)}}return e}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[r,n,o]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},r=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,a.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);a.r(o);var i={};e=e||[null,r({}),r([]),r(r)];for(var l=2&n&&t;"object"==typeof l&&!~e.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,a.d(o,i),o},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={179:0};a.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,[i,l,c]=r,u=0;if(i.some((e=>0!==t[e]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var s=c(a)}for(e&&e(r);u<i.length;u++)o=i[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(s)},r=self.webpackChunkdiscogs_app=self.webpackChunkdiscogs_app||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var i=a.O(void 0,[216],(()=>a(850)));i=a.O(i)})();
//# sourceMappingURL=main.1020b57f2c85134da44a.js.map
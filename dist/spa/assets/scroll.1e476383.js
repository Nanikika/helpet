import{a8 as u,a9 as w}from"./index.298ea574.js";const f=[null,document,document.body,document.scrollingElement,document.documentElement];function h(o,t){let n=w(t);if(n===void 0){if(o==null)return window;n=o.closest(".scroll,.scroll-y,.overflow-auto")}return f.includes(n)?window:n}function g(o){return(o===window?document.body:o).scrollHeight}function m(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function v(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}function a(o,t,n=0){const e=arguments[3]===void 0?performance.now():arguments[3],l=m(o);if(n<=0){l!==t&&c(o,t);return}requestAnimationFrame(r=>{const s=r-e,d=l+(t-l)/Math.max(s,n)*s;c(o,d),d!==t&&a(o,t,n-s,r)})}function c(o,t){if(o===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}o.scrollTop=t}function y(o,t,n){if(n){a(o,t,n);return}c(o,t)}let i;function b(){if(i!==void 0)return i;const o=document.createElement("p"),t=document.createElement("div");u(o,{width:"100%",height:"200px"}),u(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(o),document.body.appendChild(t);const n=o.offsetWidth;t.style.overflow="scroll";let e=o.offsetWidth;return n===e&&(e=t.clientWidth),t.remove(),i=n-e,i}function S(o,t=!0){return!o||o.nodeType!==Node.ELEMENT_NODE?!1:t?o.scrollHeight>o.clientHeight&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-y"])):o.scrollWidth>o.clientWidth&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-x"]))}export{m as a,h as b,b as c,g as d,v as g,S as h,y as s};

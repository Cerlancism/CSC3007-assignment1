if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>n(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"csc3007-assignment1"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.7a7c095d.css",revision:null},{url:"css/chunk-vendors.fb907c02.css",revision:null},{url:"index.html",revision:"1c9169772f8535768155a1e43e316652"},{url:"js/about.ed982c0b.js",revision:null},{url:"js/app.7f864e2c.js",revision:null},{url:"js/chunk-vendors.a7b1a5ad.js",revision:null},{url:"manifest.json",revision:"3eb2dc553c0f0bff6cfcdb56ac59cdf8"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"csc3007-assignment1"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/chunk-vendors.2eef0513.css",revision:null},{url:"index.html",revision:"344b4a67a121331e313a3ba56c256d61"},{url:"js/about.7111e93f.js",revision:null},{url:"js/app.4848ce4e.js",revision:null},{url:"js/chunk-vendors.24cfb814.js",revision:null},{url:"manifest.json",revision:"3eb2dc553c0f0bff6cfcdb56ac59cdf8"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
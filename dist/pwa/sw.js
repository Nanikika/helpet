if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const n=e=>a(e,d),r={module:{uri:d},exports:f,require:n};s[d]=Promise.all(i.map((e=>r[e]||n(e)))).then((e=>(c(...e),f)))}}define(["./workbox-6393944f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"helpet"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AuthPage.2df9273d.js",revision:"d1be6a4da730d730a3f8718601a89c55"},{url:"assets/axios.a9ce3335.js",revision:"7799e6504a25b65a293d6a9ee9c69148"},{url:"assets/ContactPage.510e5506.js",revision:"39d220b52adc3e99d6dbbf3e60815c7a"},{url:"assets/DonatePage.2d99dda1.js",revision:"8fe058aad30435d89fd833119cd8b56c"},{url:"assets/ErrorNotFound.dd1ac491.js",revision:"42481a9cf15f8d42a983b2817b28e461"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/firebase.372dbda1.js",revision:"f3c07ddb984b8e485e67f6064578a27c"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.66dca61a.woff",revision:"7814880c701adbefed31b0647a92570c"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.e1c9ce90.woff2",revision:"af7b20a08fc8f6fd190ee9ca3d0ee5d7"},{url:"assets/i18n.5bdd2ff3.js",revision:"d7cd3a5dec6ebbbf0903207652bec01a"},{url:"assets/index.0a4f6dba.css",revision:"b53f15e59aa865a689115cd14420d653"},{url:"assets/index.b55d055d.js",revision:"2c535a09373e96c70d3c7d7404b3142a"},{url:"assets/IndexPage.5cf343b5.js",revision:"e1ae7abe0c62a2c48318887713864f82"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.a38ad0b6.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.bd811625.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.855a0697.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.a01a632e.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.d33864e0.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.ea50ac7f.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"assets/MainLayout.9a050591.js",revision:"027a7b61066d729413bbb28c77512090"},{url:"assets/QInput.d1efa816.js",revision:"1465a45969f8319bee2783b6bf5cbce9"},{url:"assets/QPage.9cb9805f.js",revision:"ad7808e303edd407b85c6ea1740975ca"},{url:"assets/selection.fb7177c7.js",revision:"4b3630b03efce3de7e0ec54fad5f053e"},{url:"assets/UploadPet.bbb1981b.js",revision:"542340c4e72b801091e391bd24d45cc0"},{url:"assets/use-dark.3dad7726.js",revision:"77928f45ea9277f2522947d896fe055a"},{url:"assets/user.949b8199.js",revision:"71cee0db527b35666f6747c5ad9574d1"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"d6961adf11af3a0663d58c2ccd9fba45"},{url:"manifest.json",revision:"ccb91f85371ac3ae69a97108d4300bdb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));

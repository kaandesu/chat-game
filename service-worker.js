if(!self.define){let n,i={};const e=(e,s)=>(e=new URL(e+".js",s).href,i[e]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=i,document.head.appendChild(n)}else n=e,importScripts(e),i()})).then((()=>{let n=i[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(s,o)=>{const c=n||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const l=n=>e(n,c),f={module:{uri:c},exports:r,require:l};i[c]=Promise.all(s.map((n=>f[n]||l(n)))).then((n=>(o(...n),r)))}}define(["./workbox-b81e226a"],(function(n){"use strict";n.setCacheNameDetails({prefix:"chatgame"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"css/278.7f38d3ae.css",revision:null},{url:"css/545.f57da6c4.css",revision:null},{url:"css/580.d198ea89.css",revision:null},{url:"css/587.96e84587.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.bf0920ce.css",revision:null},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0383092b.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"19fc67db224e0dee556844afc3482e0d"},{url:"icons/apple-icon-167x167.png",revision:"013f7db2459af3d47769074a34bbffa4"},{url:"icons/apple-icon-180x180.png",revision:"c2f2834bf2467986b9b03d0cdc5a04d3"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"01dbd488c77d3d69278bfb8516e06cfb"},{url:"icons/icon-144x144.png",revision:"573cc437781471a7bcfd4a7b8bb1ab88"},{url:"icons/icon-152x152.png",revision:"7d31dcc714c5fbed4632d2baefd39cf0"},{url:"icons/icon-192x192.png",revision:"d4bf6d9728a1b657606209f56939c824"},{url:"icons/icon-256x256.png",revision:"f8404a91b05453de7b912971f84b4945"},{url:"icons/icon-384x384.png",revision:"91b342ba9888bfdc482b6636037e1f7b"},{url:"icons/icon-48x48.png",revision:"c9c9960acb0e8a263e5b823c087f0867"},{url:"icons/icon-512x512.png",revision:"84d0bfb2980ec3880aa74306d1b8ef1a"},{url:"icons/icon-72x72.png",revision:"ebab5a0aef1d28807e55683250dcde1d"},{url:"icons/icon-96x96.png",revision:"fe9a0c156f0c5ffe138ba45c88eda9b0"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"36405940e4234e04f6a2a89c93dc0d97"},{url:"js/278.cb67609a.js",revision:null},{url:"js/545.ac9b9a47.js",revision:null},{url:"js/580.783a8452.js",revision:null},{url:"js/587.17d46a53.js",revision:null},{url:"js/862.6a3d4699.js",revision:null},{url:"js/app.280e7b12.js",revision:null},{url:"js/vendor.af854678.js",revision:null},{url:"manifest.json",revision:"f18edc5f7e679328051d001c349ca2ba"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));

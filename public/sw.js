if(!self.define){let s,e={};const i=(i,c)=>(i=new URL(i+".js",c).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(c,a)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const r=s=>i(s,n),u={module:{uri:n},exports:t,require:r};e[n]=Promise.all(c.map((s=>u[s]||r(s)))).then((s=>(a(...s),t)))}}define(["./workbox-75794ccf"],(function(s){"use strict";importScripts("fallback-8wjILWcHVK7hiluOG0OAH.js"),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/8wjILWcHVK7hiluOG0OAH/_buildManifest.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/8wjILWcHVK7hiluOG0OAH/_middlewareManifest.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/8wjILWcHVK7hiluOG0OAH/_ssgManifest.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/1039.2d7df9769a710bf9.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/1504-7f528be96df775e0.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/1572-da2b638f47da1818.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/1574-a0b25f485c91d90d.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/210-6e5536d5bcc13729.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/2204-dcf8e66f18c31995.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/2208.1c09867df0d5a5b1.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/2306-241f00c3200a3525.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/2358.a40c35f96e01f912.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/2594.180378d4404927f7.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/2727.ecd640bbf0026d8d.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/2869-e54b284a8a38d02e.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/2902-bafa7918f90c32fa.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/3405-2bcbd6586241ab14.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/3518.d22fcbbd9386eea2.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/3626.c46ef116b6d2cbc0.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/427.efad563fdcd53dff.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/5393-db48e115e7b102c1.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/6592-ea493b7bf487fe5e.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/7581.30035825c1426eac.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/7739-370c9bc358894fea.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/7812-909814964b3fb285.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/8119.7f6f0ac2a55fb45a.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/8651.da92861ac20295fc.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/8867-e9a7fdd02ee85fb0.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/897-e1d51c27cf67fd6f.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/9287.129923f0ea852c0b.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/9894.9018e3be787c127c.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/9988-38968252b261f1ca.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/bee240a3.c398914f7d9088af.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/d3048c20.a012c3f05a2f2aae.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/framework-79bce4a3a540b080.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/main-36baa87b9b64f217.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/404-bf8372f09c6693e6.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/_app-c0615bbf193aeae4.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/_error-c74b53c69e13eba0.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/_offline-18fab1715b7aaebd.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D-f14c5b777112d236.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/chat/%5BtypeId%5D-59e6e39185e34e7e.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/dashboard/%5BdashboardId%5D-da94af2011ef9791.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/discussion/%5BtypeId%5D-8e984b5744800029.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/lesson/%5BtypeId%5D-5b9bd8be23f90c11.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/lessons-6cf7fa5874b10b06.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/page/%5BtypeId%5D-05e5ab72845fddd6.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/room/%5BtypeId%5D-14d7f564e9a3b44d.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/schedule-f8e1304a66b249e6.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/schedule/%5BtypeId%5D-1e9340b826be6cf9.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/task/%5BtypeId%5D-3b8a6a9f3b4d46bd.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/tasks-3a082721d49fccfc.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/community/%5Bid%5D/tasks/%5BtypeId%5D-cb834b44fa45dc4a.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/email/%5Bid%5D-2217fcb5f1909297.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/home-f7bfd22c55e359ec.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/index-b7d808d0af170a1f.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/invite/community/%5Bid%5D-235e07f75003b9cd.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/login-6f61def386038961.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/profile/%5Bid%5D-3f50791130b0d534.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/registration-f49c3cb57b450931.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/resetpassword/%5Bid%5D-6a6cbc4e8cc1fcfa.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/resetpassword/email-d8d02e8109e9211d.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/settings-679436f706a59e9e.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/pages/support-5b219e043cb234a2.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/chunks/webpack-b4aafcba3eed02b0.js",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_next/static/css/456f8bb41a21b053.css",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/_offline",revision:"8wjILWcHVK7hiluOG0OAH"},{url:"/assets/404/404Error.svg",revision:"8c57dd4c15b7127499b3e9358d90baaa"},{url:"/assets/404/500Error.svg",revision:"c74fd0978ae102544feab65d1396df06"},{url:"/assets/app/AdvancedCustomization.svg",revision:"bd755d6916d9ea2685ac7de9a34c940d"},{url:"/assets/app/Classroom.svg",revision:"6500efa9bdc5faa5d41d619fea90686f"},{url:"/assets/app/ConfirmedEmail.svg",revision:"9b6ab87eadb247c4c2159c24e0017b55"},{url:"/assets/app/Connecting.svg",revision:"22199c2cf36d112fc47290a3298b5f84"},{url:"/assets/app/Content.svg",revision:"19cc62ca4fd6ee769a4e4d6e6168a935"},{url:"/assets/app/DataReport.svg",revision:"1f60549437aa6e24bdaae0f69b4ef38a"},{url:"/assets/app/JavaScriptFrameworks.svg",revision:"2082587dd84d519222fab3285dc97429"},{url:"/assets/app/NoData.svg",revision:"6fc4c1eb913a38729bcc15513a3b06dc"},{url:"/assets/app/Notebook.svg",revision:"3b4640ebcd8df9c3b675dd626d6af0ec"},{url:"/assets/app/OrganizingProjects.svg",revision:"fe1492ecf3ff9dac8a7cd3f7f1c847aa"},{url:"/assets/app/Professor.svg",revision:"995cb8521cd6175e3b72560cd245599a"},{url:"/assets/app/PushNotifications.svg",revision:"21524d944c6a880677159d088e1f4b02"},{url:"/assets/app/RemoteMeeting.svg",revision:"b809c0235b9171041a177618071bf44a"},{url:"/assets/app/Schedule.svg",revision:"c882eae82e4a3c836c52b77d5c56ab40"},{url:"/assets/app/StaticWebsite.svg",revision:"d817eabe5fdedd96fcd7efd9f182a583"},{url:"/assets/app/Teacher.svg",revision:"fc607f47942e917faaf1bb36bb7197f0"},{url:"/assets/apple-touch-icon.png",revision:"127a555cb2e7b81b1a54fc62bbb751c7"},{url:"/assets/auth/Login.svg",revision:"f09824a4674342af044b2251bc19f10b"},{url:"/assets/auth/MobileLogin.svg",revision:"0dcc162f7421a95c8291e7b640730605"},{url:"/assets/auth/NewMessage.svg",revision:"b1182f8fe6b795916e62871545f44266"},{url:"/assets/auth/ResetPassword.svg",revision:"bd2e3ac90c3e5c2ef69e89df8854ec11"},{url:"/assets/icons/icon-128x128.png",revision:"d610df307a0396d5759bc56b14f639df"},{url:"/assets/icons/icon-144x144.png",revision:"74247d67eb3651a460ab2b8a39453803"},{url:"/assets/icons/icon-152x152.png",revision:"819b2a8c2c449577bd12aa3748ece920"},{url:"/assets/icons/icon-192x192.png",revision:"f149ecc37856c0bf00772695cfd7305c"},{url:"/assets/icons/icon-284x284.png",revision:"6a0870ebbafe012da1ef144b4db28a74"},{url:"/assets/icons/icon-48x48.png",revision:"365b040426f68df5c2023468ec9eb158"},{url:"/assets/icons/icon-512x512.png",revision:"8092aa5f406bd6e25835c8894ff06840"},{url:"/assets/icons/icon-72x72.png",revision:"7500da9a89eb04ab35d191325abcf5c9"},{url:"/assets/icons/icon-96x96.png",revision:"e9f14262484675559306a05d10958e5a"},{url:"/assets/landing/BookLover.svg",revision:"cbd3643c63dc13c9ab287bd6819c0eb0"},{url:"/assets/landing/DiscordLogoWhite.svg",revision:"8113ca4b374db5785ca003421878165a"},{url:"/assets/landing/Hope.svg",revision:"a93754d1f95573d3149552ff53e6b322"},{url:"/assets/landing/Knowledge.svg",revision:"1d89bcb3f5595c76cd9d24ec021e9d36"},{url:"/assets/landing/Learning.svg",revision:"39079490e51f91c4e9206722dbea3de3"},{url:"/assets/landing/OnlineLearning.svg",revision:"b968d33870838578b659c1e45e56097a"},{url:"/assets/landing/Preferences.svg",revision:"c7c7068b96e3390bff4b9b35a5f7c8fb"},{url:"/assets/landing/Spreadsheets.svg",revision:"2b86d0db5f2c0b8dba756016c63e62f4"},{url:"/assets/landing/WorkingFromAnywhere.svg",revision:"b0fe4002330b1d13f951f7f4fc0245d2"},{url:"/assets/landing/blob1.svg",revision:"ef0475621bca2c920905eda748a7e549"},{url:"/assets/landing/blob2.svg",revision:"0cc73b488497f9cab7d1981e6870f101"},{url:"/assets/landing/blob3.svg",revision:"01a1e672cecea397371c3b849cdd2e38"},{url:"/assets/landing/blob4.svg",revision:"73ef8b9c386f3153ea798b22bcb2fd60"},{url:"/assets/landing/blob5.svg",revision:"10fb973f8fb08d453e9526b8f0fd5c85"},{url:"/assets/landing/blob6.svg",revision:"a28bf2cbd5a00845478d95f901cf0753"},{url:"/assets/safari-pinned-tab.svg",revision:"00589878b3244bd569c0c37d8804c53f"},{url:"/browserconfig.xml",revision:"5a4d2523d3ea47ea2e240f926f67637b"},{url:"/favicon.svg",revision:"232136a84b9afa520c0b681c4460b393"},{url:"/loaderForDarkTheme.gif",revision:"12f15a4f2c397364d6cd31b271344116"},{url:"/loaderForWhiteTheme.gif",revision:"c0b140026b8df6107687458a616da5ad"},{url:"/logo.svg",revision:"ef9c9b12b4c3daf9c9e38c65129637ec"},{url:"/manifest.json",revision:"53a4476d9519a6b2c6fb1e06bfee97cd"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:i,state:c})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET")}));

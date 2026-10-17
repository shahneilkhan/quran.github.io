const C="quraanly-v2",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png","logo-mark.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const q=e.request,u=q.url;
if(q.method!=="GET"||q.headers.has("range")||/\.mp3|islamic\.network|audio\.qurancdn/.test(u))return;
e.respondWith(caches.open(C).then(async c=>{const hit=await c.match(q);
const net=fetch(q).then(r=>{if(r&&(r.ok||r.type==="opaque"))c.put(q,r.clone()).catch(()=>{});return r}).catch(()=>hit||Response.error());
return hit||net}))});

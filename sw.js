const CACHE='spanish-new-world-explorer-v3';
const CORE=['./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const req=event.request;
  if(req.mode==='navigate'||req.destination==='style'||req.destination==='script'){
    event.respondWith(fetch(req).then(res=>{
      if(res&&res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put(req,clone));}
      return res;
    }).catch(()=>caches.match(req).then(hit=>hit||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{
    if(res&&res.ok&&req.url.startsWith(self.location.origin)){const clone=res.clone();caches.open(CACHE).then(c=>c.put(req,clone));}
    return res;
  })));
});
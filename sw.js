const CACHE='spanish-new-world-explorer-v2';
const CORE=[
  './','./index.html','./style.css','./script.js','./manifest.webmanifest',
  './pages/destinations.html','./pages/timeline.html','./pages/explorers.html',
  './pages/explorers-gallery.html','./pages/maps.html','./pages/explorer-simulator.html','./pages/sources.html'
];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{
    if(response&&response.ok&&event.request.url.startsWith(self.location.origin)){
      const clone=response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,clone));
    }
    return response;
  }).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):Response.error())));
});
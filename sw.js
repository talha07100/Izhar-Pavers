const CACHE='izhar-pavers-v10';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  const isNavigation=event.request.mode==='navigate' || url.pathname.endsWith('/index.html') || url.pathname==='/' ;
  if(isNavigation){
    event.respondWith(fetch(event.request).then(response=>{
      const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,copy)); return response;
    }).catch(()=>caches.match(event.request).then(c=>c||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,copy)); return response;
  }).catch(()=>caches.match('./index.html'))));
});

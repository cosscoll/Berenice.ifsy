/* IFSI PWA v17 : réseau prioritaire ; copie locale limitée aux ressources publiques. */
const CACHE='ifsi-static-v18';
const CORE=['./','./index.html','./cours.html','./etudier.html','./quiz.html','./parcours.html','./programme.html','./planning.html','./situations.html','./offline.html','./confidentialite.html',
'./assets/style.css','./assets/v2.css','./assets/ux.css?v=final18','./assets/nav.js?v=final18','./assets/icons.js','./assets/v2-core.js','./assets/courses-data.js?v=course12','./assets/deep-dive-data.js?v=big17','./assets/referentiel-data.js?v=big17','./assets/study-topics.js?v=course12','./assets/quiz-data.js?v=quiz15','./assets/quiz-utils.js?v=big17','./assets/pathway-data.js?v=quiz15','./assets/cases-data.js?v=pathway14','./assets/programme.css?v=big17','./assets/planning.css?v=big17','./assets/planning.js?v=big17','./assets/pathway.css?v=pathway14','./assets/quiz.css?v=quiz15','./assets/backup.js?v=final18','./assets/error-reporter.js','./assets/nurse-avatar.js','./assets/student.js','./assets/data.js','./assets/fsrs.js','./assets/simple-mindmap.js','./assets/pwa.js?v=final18','./assets/ifsi-chat.js?v=chat16','./assets/chat-knowledge.js?v=chat16','./assets/chat-engine.js?v=chat16','./assets/chat.css?v=chat16'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await Promise.allSettled(CORE.map(url=>cache.add(url)));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>k.startsWith('ifsi-static-')&&k!==CACHE).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 const u=new URL(req.url);if(u.origin!==self.location.origin)return;
 const cacheRequest=new Request(u.origin+u.pathname);
 if(req.mode==='navigate'){
  event.respondWith((async()=>{
   try{
    const response=await fetch(req);
    if(response.ok){const cache=await caches.open(CACHE);cache.put(cacheRequest,response.clone()).catch(()=>{});}
    return response;
   }catch(e){
    const cache=await caches.open(CACHE);
    return await cache.match(cacheRequest)||await cache.match('./offline.html')||Response.error();
   }
  })());return;
 }
 if(!/\.(?:css|js|svg|png|webmanifest)$/i.test(u.pathname))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  try{const response=await fetch(req);if(response.ok)cache.put(req,response.clone()).catch(()=>{});return response}
  catch(e){return await cache.match(req)||Response.error()}
 })());
});

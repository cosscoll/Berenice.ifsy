/**
 * Assistant pédagogique IFSI : réponses extraites et sourcées depuis les cours.
 * Pas d'accès à une API IA externe. Ne jamais donner de réponse aléatoire.
 */
(function(){
 'use strict';
 let lastTopic=null,queue=Promise.resolve();
 function safeHref(s){
  if(typeof s!=='string')return null;
  if(/^https:\/\//i.test(s))return s;
  if(/^[a-z0-9-]+\.html(?:\?[a-z0-9%=&._-]+)?$/i.test(s))return s;
  return null;
 }
 function load(src,ready){
  if(ready())return Promise.resolve();
  return new Promise((resolve,reject)=>{
   const script=document.createElement('script');
   script.src=src;script.async=true;
   script.onload=()=>ready()?resolve():reject(new Error('Données indisponibles'));
   script.onerror=()=>reject(new Error('Chargement impossible'));
   document.head.appendChild(script);
  });
 }
 const ready=Promise.all([
  load('assets/chat-knowledge.js?v=chat16',()=>!!window.IFSI_CHAT_KNOWLEDGE),
  load('assets/chat-engine.js?v=chat16',()=>!!window.IFSI_CHAT_ENGINE)
 ]);
 function messages(){return document.getElementById('ifsi-chat-messages')}
 function append(type,text){
  const el=document.createElement('div');
  el.className='chat-msg '+type;el.textContent=text;
  messages().appendChild(el);messages().scrollTop=messages().scrollHeight;return el;
 }
 function addLinks(host,items,extraClass){
  const links=(items||[]).filter(x=>safeHref(x.href||x.url)).slice(0,3);
  if(!links.length)return;
  const nav=document.createElement('div');nav.className=extraClass||'chat-links';
  links.forEach(x=>{
   const a=document.createElement('a');a.textContent=x.label||x.title||'Consulter la source';
   a.href=safeHref(x.href||x.url);
   if(a.href.startsWith('https://')&&!a.href.includes(location.host)){
    a.target='_blank';a.rel='noopener noreferrer';
   }
   nav.appendChild(a);
  });
  host.appendChild(nav);
 }
 function renderAnswer(result){
  const el=append('bot',result.text);
  if(result.bullets?.length){
   const ul=document.createElement('ul');
   result.bullets.forEach(t=>{const li=document.createElement('li');li.textContent=t;ul.appendChild(li)});
   el.appendChild(ul);
  }
  addLinks(el,result.links,'chat-links');
  if(result.sources?.length){
   const sources=document.createElement('details');sources.className='chat-sources';
   const summary=document.createElement('summary');summary.textContent='Sources utilisées';sources.appendChild(summary);
   addLinks(sources,result.sources.map(s=>({label:s.title||s.label,url:s.url||s.href})),'chat-links');
   el.appendChild(sources);
  }
  if(result.topicId)lastTopic=result.topicId;
 }
 function suggestions(items){
  const box=document.getElementById('chat-suggestions');if(!box)return;
  box.textContent='';
  items.forEach(text=>{
   const btn=document.createElement('button');btn.type='button';btn.textContent=text;
   btn.addEventListener('click',()=>ask(text));
   box.appendChild(btn);
  });
 }
 function ask(text){
  const q=String(text||'').trim();
  if(!q)return;
  append('user',q);
  const field=document.getElementById('ifsi-chat-input');if(field)field.value='';
  const loading=append('bot chat-loading','Je cherche dans les cours…');
  queue=queue.then(async()=>{
   try{
    await ready;
    const result=window.IFSI_CHAT_ENGINE.ask(q,{topicId:lastTopic},window.IFSI_CHAT_KNOWLEDGE);
    loading.remove();
    renderAnswer(result);
   }catch(e){
    loading.remove();
    append('bot','Je ne peux pas consulter les cours pour le moment. Vérifie la connexion puis recharge la page. Je préfère ne pas donner de réponse approximative.');
   }
  });
 }
 function close(){
  const shell=document.getElementById('ifsi-chat-shell');
  if(shell){shell.classList.remove('open');const button=document.getElementById('header-chat-btn');if(button)button.focus()}
 }
 function build(){
  if(document.getElementById('ifsi-chat-shell'))return;
  if(!document.querySelector('link[data-chat-style]')){const css=document.createElement('link');css.rel='stylesheet';css.href='assets/chat.css?v=chat16';css.dataset.chatStyle='1';document.head.appendChild(css)}
  const shell=document.createElement('div');shell.id='ifsi-chat-shell';shell.className='ifsi-chat-shell';
  shell.innerHTML='<section class="ifsi-chat-panel" role="dialog" aria-label="Assistant de révision IFSI" aria-modal="true">'+
   '<div class="ifsi-chat-head"><div><strong>Assistant IFSI</strong><span>Réponses tirées des cours et sources du site</span></div>'+
   '<button class="ifsi-chat-close" id="ifsi-chat-close" aria-label="Fermer l’assistant">✕</button></div>'+
   '<div class="ifsi-chat-messages" id="ifsi-chat-messages" role="log" aria-live="polite" aria-relevant="additions"></div>'+
   '<div class="chat-suggestions" id="chat-suggestions"></div>'+
   '<form class="ifsi-chat-form" id="ifsi-chat-form"><input id="ifsi-chat-input" type="search" autocomplete="off" aria-label="Poser une question à l’assistant" placeholder="Pose ta question sur un cours…" required>'+
   '<button type="submit">Envoyer</button></form>'+
   '<p class="chat-disclaimer">Assistant local de recherche, non génératif : il ne répond qu’avec les informations présentes sur le site. Ne pas utiliser pour décider d’un soin réel.</p>'+
   '</section>';
  document.body.appendChild(shell);
  shell.addEventListener('click',e=>{if(e.target===shell)close()});
  document.getElementById('ifsi-chat-close').addEventListener('click',close);
  document.getElementById('ifsi-chat-form').addEventListener('submit',e=>{
   e.preventDefault();ask(document.getElementById('ifsi-chat-input').value)
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&shell.classList.contains('open'))close()});
  append('bot','Pose une question précise sur tes cours IFSI. Je cherche une explication qui correspond à ta question et j’indique mes sources. Si le contenu n’est pas disponible, je te le dirai.');
  suggestions(['Quels sont les signes d’un AVC ?', 'Explique-moi la BPCO', 'Quels sont les cinq moments de l’hygiène des mains ?']);
 }
 function open(){
  build();document.getElementById('ifsi-chat-shell').classList.add('open');
  document.getElementById('ifsi-chat-input').focus();
 }
 window.initIfsiChat=build;
 window.openIfsiChat=open;
 window.closeIfsiChat=close;
 build();
 if(window.__openIfsiChatOnReady){window.__openIfsiChatOnReady=false;open()}
})();
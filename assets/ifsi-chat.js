/** Assistant IFSI local — navigation + contenus validés du site. */
(function(){
  function n(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
  function safe(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
  function addScript(src,marker){
    if(document.querySelector('script['+marker+']'))return;
    const s=document.createElement('script');s.src=src;s.setAttribute(marker,'1');document.head.appendChild(s);
  }
  function ensureData(){
    addScript('assets/study-topics.js?v=course12','data-chat-topics');
    addScript('assets/clinical-library.js','data-chat-clinical');
  }
  function build(){
    if(document.getElementById('ifsi-chat-shell'))return;
    ensureData();
    const shell=document.createElement('div');shell.id='ifsi-chat-shell';shell.className='ifsi-chat-shell';
    shell.innerHTML='<section class="ifsi-chat-panel" role="dialog" aria-label="Assistant IFSI">'+
      '<div class="ifsi-chat-head"><div><strong>Assistant IFSI</strong><span>Recherche et orientation dans la plateforme</span></div><button class="ifsi-chat-close" id="ifsi-chat-close" aria-label="Fermer">✕</button></div>'+
      '<div class="ifsi-chat-messages" id="ifsi-chat-messages"></div>'+
      '<div class="chat-suggestions" id="chat-suggestions"></div>'+
      '<form class="ifsi-chat-form" id="ifsi-chat-form"><input id="ifsi-chat-input" autocomplete="off" placeholder="Ex. Je veux réviser l’hygiène…"><button>Envoyer</button></form>'+
      '<div class="chat-disclaimer">Assistant local : il s’appuie sur les contenus présents dans le site et n’invente pas de conseil médical personnalisé.</div>'+
      '</section>';
    document.body.appendChild(shell);
    shell.addEventListener('click',e=>{if(e.target===shell)close()});
    document.getElementById('ifsi-chat-close').onclick=close;
    document.getElementById('ifsi-chat-form').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('ifsi-chat-input'),q=input.value.trim();if(!q)return;addUser(q);input.value='';respond(q)});
    suggestions(['Je veux réviser un chapitre','Trouver un quiz','Voir une carte mentale']);
    addBot('Bonjour. Dis-moi ce que tu veux travailler et je te renvoie vers le bon endroit du site.');
  }
  function messages(){return document.getElementById('ifsi-chat-messages')}
  function addUser(text){const d=document.createElement('div');d.className='chat-msg user';d.textContent=text;messages().appendChild(d);messages().scrollTop=messages().scrollHeight}
  function addBot(html){const d=document.createElement('div');d.className='chat-msg bot';d.innerHTML=html;messages().appendChild(d);messages().scrollTop=messages().scrollHeight}
  function suggestions(items){
    const box=document.getElementById('chat-suggestions');if(!box)return;
    box.innerHTML=items.map(x=>'<button type="button" data-chat-suggest="'+safe(x)+'">'+safe(x)+'</button>').join('');
    box.querySelectorAll('[data-chat-suggest]').forEach(b=>b.onclick=()=>{addUser(b.dataset.chatSuggest);respond(b.dataset.chatSuggest)})
  }
  function topicLinks(t){
    const links=[];
    links.push('<a href="cours.html?id='+encodeURIComponent(t.id)+'">Lire le cours</a>');
    if(t.ue)links.push('<a href="revision.html?ue='+encodeURIComponent(t.ue)+'">Réviser les fiches</a>');
    if(t.quizTopic)links.push('<a href="quiz.html?topic='+encodeURIComponent(t.quizTopic)+'">Faire le quiz</a>');
    if(t.mapId)links.push('<a href="cartes-mentales.html?id='+encodeURIComponent(t.mapId)+'">Voir la carte mentale</a>');
    if(t.learningId)links.push('<a href="apprentissage.html?module='+encodeURIComponent(t.learningId)+'">Apprentissage guidé</a>');
    return links.join('<br>')
  }
  function findTopics(q){
    if(typeof STUDY_TOPICS==='undefined')return[];
    const nq=n(q),words=nq.split(/\s+/).filter(w=>w.length>2);
    return STUDY_TOPICS.map(t=>{
      const hay=n(t.title+' '+t.keywords+' '+t.ue+' domaine '+t.domain);
      const score=words.reduce((s,w)=>s+(hay.includes(w)?1:0),0)+(hay.includes(nq)?3:0);
      return {t,score}
    }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.t)
  }
  function findClinical(q){
    try{
      if(typeof CLINICAL_LIBRARY==='undefined')return[];
      const nq=n(q),words=nq.split(/\s+/).filter(w=>w.length>2);
      return CLINICAL_LIBRARY.map(x=>{
        const hay=n(x.title+' '+x.summary+' '+x.tags.join(' ')+' '+x.keyPoints.join(' '));
        const score=words.reduce((s,w)=>s+(hay.includes(w)?1:0),0)+(hay.includes(nq)?3:0);
        return {x,score}
      }).filter(v=>v.score>0).sort((a,b)=>b.score-a.score).slice(0,2).map(v=>v.x)
    }catch{return[]}
  }
  function respond(q){
    const nq=n(q);
    if(/bonjour|salut|hello|coucou/.test(nq)){addBot('Bonjour. Tu peux me demander un chapitre, un quiz, une carte mentale, de l’anatomie, un ECOS ou un calcul.');return}
    if(/quiz|qcm|question/.test(nq)&&!findTopics(q).length){addBot('Tu peux lancer un quiz directement ici :<br><a href="quiz.html">Ouvrir les quiz</a>');return}
    if(/carte mentale|mindmap|schema|schéma/.test(nq)&&!findTopics(q).length){addBot('Les cartes mentales sont regroupées ici :<br><a href="cartes-mentales.html">Ouvrir les cartes mentales</a>');return}
    if(/anatomie|organe|corps/.test(nq)){addBot('Pour l’anatomie :<br><a href="anatomie.html">Ouvrir l’anatomie</a>');return}
    if(/ecos|cas clinique|simulation/.test(nq)){addBot('Pour t’entraîner sur des situations cliniques :<br><a href="ecos.html">Ouvrir les ECOS</a>');return}
    if(/calcul|dose|debit|débit|perfusion/.test(nq)){addBot('Pour les calculs infirmiers :<br><a href="calculs.html">Ouvrir les calculs</a>');return}
    if(/stage|terrain/.test(nq)){addBot('Pour préparer et suivre ton stage :<br><a href="stage.html">Ouvrir l’espace stage</a>');return}

    const clinical=findClinical(q);
    if(clinical.length){
      const x=clinical[0];
      addBot('<strong>'+safe(x.title)+'</strong><br>'+safe(x.summary)+'<br><br>'+x.keyPoints.slice(0,4).map(k=>'• '+safe(k)).join('<br>')+(x.sourceUrl?'<br><a href="'+x.sourceUrl+'" target="_blank" rel="noopener">Voir la source</a>':''));
      return
    }
    const topics=findTopics(q);
    if(topics.length){
      if(topics.length===1){const t=topics[0];addBot('J’ai trouvé <strong>'+safe(t.title)+'</strong>.<br>'+topicLinks(t));return}
      addBot('J’ai trouvé plusieurs chapitres proches :<br>'+topics.map(t=>'<a href="etudier.html?q='+encodeURIComponent(t.title)+'">'+safe(t.title)+'</a>').join('<br>'));return
    }
    addBot('Je ne trouve pas cette notion dans les contenus actuellement indexés. Essaie la barre de recherche du header ou <a href="bibliotheque.html">ouvre la bibliothèque</a>. Pour une question médicale non couverte par le site, je préfère ne pas inventer de réponse.')
  }
  function open(){build();document.getElementById('ifsi-chat-shell').classList.add('open');setTimeout(()=>document.getElementById('ifsi-chat-input').focus(),0)}
  function close(){const s=document.getElementById('ifsi-chat-shell');if(s)s.classList.remove('open')}
  window.initIfsiChat=build;window.openIfsiChat=open;window.closeIfsiChat=close;
  build();
  if(window.__openIfsiChatOnReady){window.__openIfsiChatOnReady=false;open()}
})();
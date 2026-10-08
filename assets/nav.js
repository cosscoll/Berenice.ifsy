/** Vrai header global — indépendant de l'ancien placeholder sidebar */
const HEADER_PRIMARY=[
 {id:'dashboard',href:'index.html',label:'Accueil',icon:'dashboard'},
 {id:'etudier',href:'etudier.html',label:'Réviser',icon:'book'},
 {id:'quiz',href:'quiz.html',label:'Quiz',icon:'check'},
 {id:'cartes-mentales',href:'cartes-mentales.html',label:'Cartes mentales',icon:'map'},
 {id:'progression',href:'progression.html',label:'Progression',icon:'dashboard'}
];
const HEADER_MORE=[
 {id:'anatomie',href:'anatomie.html',label:'Anatomie',icon:'body'},
 {id:'ecos',href:'ecos.html',label:'ECOS',icon:'patient'},
 {id:'stage',href:'stage.html',label:'Stage',icon:'patient'},
 {id:'calculs',href:'calculs.html',label:'Calculs infirmiers',icon:'lightbulb'},
 {id:'apprentissage',href:'apprentissage.html',label:'Apprentissage guidé',icon:'lightbulb'},
 {id:'bibliotheque',href:'bibliotheque.html',label:'Bibliothèque',icon:'link'},
 {id:'referentiel',href:'referentiel.html',label:'Référentiel 2026',icon:'book'},
 {id:'ressources',href:'ressources.html',label:'Ressources',icon:'link'},
 {id:'todo',href:'todo.html',label:'Mes tâches',icon:'check'}
];
const SEARCH_BASE=[
 {label:'Accueil',kind:'Page',href:'index.html',keywords:'accueil tableau de bord'},
 {label:'Réviser',kind:'Page',href:'etudier.html',keywords:'cours chapitre domaine apprendre révision'},
 {label:'Quiz',kind:'Page',href:'quiz.html',keywords:'qcm test question'},
 {label:'Cartes mentales',kind:'Page',href:'cartes-mentales.html',keywords:'mindmap synthèse visuelle'},
 {label:'Progression',kind:'Page',href:'progression.html',keywords:'statistiques résultats scores'},
 {label:'Anatomie',kind:'Page',href:'anatomie.html',keywords:'organe système corps'},
 {label:'ECOS',kind:'Page',href:'ecos.html',keywords:'cas clinique simulation patient'},
 {label:'Calculs infirmiers',kind:'Page',href:'calculs.html',keywords:'dose débit perfusion'},
 {label:'Stage',kind:'Page',href:'stage.html',keywords:'terrain objectifs service'}
];

function iconFor(name){return window.ICONS&&ICONS[name]?ICONS[name]:''}
function normSearch(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function ensureHeaderAssets(){
 if(!document.querySelector('link[data-ifsi-ux]')){
  const l=document.createElement('link');l.rel='stylesheet';l.href='assets/ux.css';l.dataset.ifsiUx='1';document.head.appendChild(l)
 }
 if(!window.STUDY_TOPICS&&!document.querySelector('script[data-study-topics]')){
  const s=document.createElement('script');s.src='assets/study-topics.js';s.dataset.studyTopics='1';document.head.appendChild(s)
 }
 if(!document.querySelector('script[data-ifsi-chat]')){
  const s=document.createElement('script');s.src='assets/ifsi-chat.js';s.dataset.ifsiChat='1';document.head.appendChild(s)
 }
}
function searchItems(query){
 const q=normSearch(query).trim();if(q.length<2)return[];
 const topics=(window.STUDY_TOPICS||[]).map(t=>({
  label:t.title,kind:'Chapitre',href:'etudier.html?q='+encodeURIComponent(t.title),
  keywords:(t.keywords||'')+' '+(t.ue||'')+' domaine '+t.domain
 }));
 return [...topics,...SEARCH_BASE].filter(x=>normSearch(x.label+' '+x.keywords).includes(q)).slice(0,10)
}
function renderHeaderSearch(input,box){
 const hits=searchItems(input.value);
 if(!hits.length){box.classList.remove('open');box.innerHTML='';return}
 box.innerHTML=hits.map(x=>'<a class="global-header-result" href="'+x.href+'"><span><strong>'+x.label+'</strong><small>'+x.kind+'</small></span><span>→</span></a>').join('');
 box.classList.add('open')
}
function buildHeader(activeId){
 const old=document.getElementById('ifsi-global-header');if(old)old.remove();
 const placeholder=document.getElementById('sidebar');if(placeholder)placeholder.hidden=true;

 const primary=HEADER_PRIMARY.map(i=>'<a href="'+i.href+'" class="'+(i.id===activeId?'active':'')+'">'+iconFor(i.icon)+'<span>'+i.label+'</span></a>').join('');
 const more=HEADER_MORE.map(i=>'<a href="'+i.href+'" class="'+(i.id===activeId?'active':'')+'">'+iconFor(i.icon)+'<span>'+i.label+'</span></a>').join('');
 const mobile=[...HEADER_PRIMARY,...HEADER_MORE].map(i=>'<a href="'+i.href+'" class="'+(i.id===activeId?'active':'')+'">'+i.label+'</a>').join('');

 const header=document.createElement('header');
 header.id='ifsi-global-header';
 header.className='global-header';
 header.innerHTML=
  '<div class="global-header-inner">'+
   '<a class="global-brand" href="index.html"><span class="global-brand-mark">I</span><span class="global-brand-name">IFSI Platform</span></a>'+
   '<nav class="global-nav" aria-label="Navigation principale">'+primary+
    '<details class="global-more" '+(HEADER_MORE.some(x=>x.id===activeId)?'open':'')+'><summary>Plus ▾</summary><div class="global-more-menu">'+more+'</div></details>'+
   '</nav>'+
   '<div class="global-search-box"><span class="global-search-icon">⌕</span><input id="header-search-input" type="search" autocomplete="off" placeholder="Rechercher un chapitre, une notion…"><span class="global-search-kbd">⌘K</span><div id="header-search-results" class="global-search-results"></div></div>'+
   '<button class="global-assistant-btn" id="header-chat-btn" type="button">✦ <span>Assistant</span></button>'+
   '<button class="global-menu-btn" id="header-mobile-btn" type="button" aria-label="Ouvrir le menu">☰</button>'+
  '</div>'+
  '<nav class="global-mobile-menu" id="mobile-menu" aria-label="Navigation mobile">'+mobile+'</nav>';

 const app=document.querySelector('.app-shell');
 if(app&&app.parentNode) app.parentNode.insertBefore(header,app);
 else document.body.insertBefore(header,document.body.firstChild);

 const input=document.getElementById('header-search-input'),box=document.getElementById('header-search-results');
 input.addEventListener('input',()=>renderHeaderSearch(input,box));
 input.addEventListener('focus',()=>renderHeaderSearch(input,box));
 input.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&input.value.trim())location.href='etudier.html?q='+encodeURIComponent(input.value.trim());
  if(e.key==='Escape'){box.classList.remove('open');input.blur()}
 });
 document.addEventListener('click',e=>{if(!e.target.closest('.global-search-box'))box.classList.remove('open')});
 document.getElementById('header-mobile-btn').onclick=()=>document.getElementById('mobile-menu').classList.toggle('open');
 document.getElementById('header-chat-btn').onclick=()=>{if(window.openIfsiChat)window.openIfsiChat();else window.__openIfsiChatOnReady=true};

 if(!window.__ifsiHeaderKeys){
  window.__ifsiHeaderKeys=true;
  document.addEventListener('keydown',e=>{
   if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus();input.select()}
  })
 }
}
function renderNav(activeId){ensureHeaderAssets();buildHeader(activeId)}

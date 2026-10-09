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
 {id:'situations',href:'situations.html',label:'Cas pratiques',icon:'patient'},
 {id:'ecos',href:'ecos.html',label:'ECOS',icon:'patient'},
 {id:'parcours',href:'parcours.html',label:'Mon parcours',icon:'book'},
 {id:'stage',href:'stage.html',label:'Stage',icon:'patient'},
 {id:'calculs',href:'calculs.html',label:'Calculs infirmiers',icon:'lightbulb'},
 {id:'apprentissage',href:'apprentissage.html',label:'Apprentissage guidé',icon:'lightbulb'},
 {id:'bibliotheque',href:'bibliotheque.html',label:'Bibliothèque',icon:'link'},
 {id:'programme',href:'programme.html',label:'Programme 2026 détaillé',icon:'book'},
 {id:'planning',href:'planning.html',label:'Planning de révision',icon:'check'},
 {id:'referentiel',href:'referentiel.html',label:'Référentiel 2026',icon:'book'},
 {id:'ressources',href:'ressources.html',label:'Ressources',icon:'link'},
 {id:'todo',href:'todo.html',label:'Mes tâches',icon:'check'},
 {id:'methodologie',href:'methodologie.html',label:'Sources & méthode',icon:'book'},
 {id:'confidentialite',href:'confidentialite.html',label:'Confidentialité',icon:'link'}
];
const SEARCH_BASE=[
 {label:'Accueil',kind:'Page',href:'index.html',keywords:'accueil tableau de bord'},
 {label:'Réviser',kind:'Page',href:'etudier.html',keywords:'cours chapitre domaine apprendre révision'},
 {label:'Quiz',kind:'Page',href:'quiz.html',keywords:'qcm test question'},
 {label:'Cartes mentales',kind:'Page',href:'cartes-mentales.html',keywords:'mindmap synthèse visuelle'},
 {label:'Progression',kind:'Page',href:'progression.html',keywords:'statistiques résultats scores'},
 {label:'Mon parcours',kind:'Page',href:'parcours.html',keywords:'annee année progression etapes cours epreuves evaluation niveaux'},
 {label:'Programme 2026 détaillé',kind:'Page',href:'programme.html',keywords:'referentiel quinze ue ects cinq domaines programme officiel'},
 {label:'Planning de révision',kind:'Page',href:'planning.html',keywords:'planning aujourd hui cette semaine revision espacee apprendre quotidien'},
 {label:'Anatomie',kind:'Page',href:'anatomie.html',keywords:'organe système corps'},
 {label:'Cas pratiques',kind:'Page',href:'situations.html',keywords:'situations cliniques fictives simulation entrainement decisions raisonnement'},
 {label:'ECOS',kind:'Page',href:'ecos.html',keywords:'cas clinique simulation patient'},
 {label:'Calculs infirmiers',kind:'Page',href:'calculs.html',keywords:'dose débit perfusion'},
 {label:'Stage',kind:'Page',href:'stage.html',keywords:'terrain objectifs service'}
];

function iconFor(name){return window.ICONS&&ICONS[name]?ICONS[name]:''}
function normSearch(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function ensureHeaderAssets(){
 if(!document.querySelector('link[data-ifsi-ux]')){
  const l=document.createElement('link');l.rel='stylesheet';l.href='assets/ux.css?v=final18';l.dataset.ifsiUx='1';document.head.appendChild(l)
 }
 if(!window.STUDY_TOPICS&&!document.querySelector('script[data-study-topics]')){
  const s=document.createElement('script');s.src='assets/study-topics.js?v=course12';s.dataset.studyTopics='1';document.head.appendChild(s)
 }
 if(!document.querySelector('link[rel="manifest"]')){
  const link=document.createElement('link');link.rel='manifest';link.href='manifest.webmanifest';document.head.appendChild(link);
 }
 if(!document.querySelector('meta[name="theme-color"]')){
  const meta=document.createElement('meta');meta.name='theme-color';meta.content='#176a5d';document.head.appendChild(meta);
 }
 if(!document.querySelector('script[data-ifsi-pwa]')){
  const pwa=document.createElement('script');pwa.src='assets/pwa.js?v=final18';pwa.dataset.ifsiPwa='1';document.head.appendChild(pwa);
 }
  if(!document.querySelector('script[data-ifsi-chat]')){
  const s=document.createElement('script');s.src='assets/ifsi-chat.js?v=chat16';s.dataset.ifsiChat='1';document.head.appendChild(s)
 }
}
function searchItems(query){
 const q=normSearch(query).trim();if(q.length<2)return[];
 const topics=(window.STUDY_TOPICS||[]).map(t=>({
  label:t.title,kind:'Chapitre',href:'cours.html?id='+encodeURIComponent(t.id),
  keywords:(t.keywords||'')+' '+(t.ue||'')+' domaine '+t.domain
 }));
 return [...topics,...SEARCH_BASE].filter(x=>normSearch(x.label+' '+x.keywords).includes(q)).slice(0,10)
}
function renderHeaderSearch(input,box){
 const query=input.value.trim(),hits=searchItems(query);
 if(query.length<2){box.classList.remove('open');box.innerHTML='';input.setAttribute('aria-expanded','false');return}
 box.innerHTML=hits.length?hits.map(x=>'<a class="global-header-result" href="'+x.href+'"><span><strong>'+x.label+'</strong><small>'+x.kind+'</small></span><span>→</span></a>').join(''):'<div class="global-search-empty" role="status">Aucun résultat direct. Appuie sur Entrée pour rechercher dans tous les chapitres.</div>';
 box.classList.add('open');input.setAttribute('aria-expanded','true');
}

function buildHeader(activeId){
 const old=document.getElementById('ifsi-global-header');if(old)old.remove();
 const placeholder=document.getElementById('sidebar');
 // L'ancien aside n'a plus aucune fonction : il est retiré avant de monter le vrai header.
 if(placeholder)placeholder.remove();

 const primary=HEADER_PRIMARY.map(i=>'<a href="'+i.href+'" class="'+(i.id===activeId?'active':'')+'">'+iconFor(i.icon)+'<span>'+i.label+'</span></a>').join('');
 const grouped=[
  {heading:'S’entraîner',ids:['situations','anatomie','ecos','calculs','apprentissage']},
  {heading:'Mon espace',ids:['parcours','planning','stage','todo']},
  {heading:'Ressources',ids:['bibliotheque','programme','referentiel','ressources','methodologie','confidentialite']}
 ];
 const more=grouped.map(group=>'<div class="global-more-heading">'+group.heading+'</div>'+group.ids.map(id=>{
  const i=HEADER_MORE.find(item=>item.id===id);return i?'<a href="'+i.href+'" class="'+(i.id===activeId?'active':'')+'">'+iconFor(i.icon)+'<span>'+i.label+'</span></a>':''
 }).join('')).join('');
 const mobile=[...HEADER_PRIMARY,...HEADER_MORE].map(i=>'<a href="'+i.href+'" class="'+(i.id===activeId?'active':'')+'">'+i.label+'</a>').join('');

 const header=document.createElement('header');
 header.id='ifsi-global-header';
 header.className='global-header';
 // Important : ne jamais insérer de navigation mobile masquée par CSS au chargement.
 const main=document.querySelector('.content-column main');if(main&&!main.id)main.id='ifsi-main-content';
 header.innerHTML=
  '<a class="ifsi-skip-link" href="#ifsi-main-content">Aller au contenu</a>'+ 
  '<div class="global-header-inner">'+
   '<a class="global-brand" href="index.html"><span class="global-brand-mark">I</span><span class="global-brand-name">IFSI Platform</span></a>'+
   '<nav class="global-nav" aria-label="Navigation principale">'+primary+
    '<details class="global-more"><summary aria-label="Autres pages">Plus ▾</summary><div class="global-more-menu">'+
     ''+
     more+
    '</div></details>'+
   '</nav>'+
   '<div class="global-search-box"><span class="global-search-icon" aria-hidden="true">⌕</span><input id="header-search-input" type="search" autocomplete="off" aria-label="Rechercher sur le site" placeholder="Rechercher un chapitre, une notion…"><span class="global-search-kbd">⌘K</span><div id="header-search-results" class="global-search-results"></div></div>'+
   '<button class="global-assistant-btn" id="header-chat-btn" type="button">✦ <span>Assistant</span></button>'+
   '<button class="global-menu-btn" id="header-mobile-btn" type="button" aria-label="Ouvrir le menu" aria-expanded="false">☰</button>'+
  '</div>';

 const app=document.querySelector('.app-shell');
 if(app&&app.parentNode) app.parentNode.insertBefore(header,app);
 else document.body.insertBefore(header,document.body.firstChild);

 const input=document.getElementById('header-search-input'),box=document.getElementById('header-search-results');
 input.setAttribute('aria-controls','header-search-results');input.setAttribute('aria-expanded','false');
 input.addEventListener('input',()=>renderHeaderSearch(input,box));
 input.addEventListener('focus',()=>renderHeaderSearch(input,box));
 input.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&input.value.trim()){
   e.preventDefault();
   const first=searchItems(input.value.trim())[0];
   location.href=first?.href||'etudier.html?q='+encodeURIComponent(input.value.trim());
  }
  if(e.key==='Escape'){box.classList.remove('open');input.setAttribute('aria-expanded','false');input.blur()}
 });
 const moreMenu=header.querySelector('.global-more');
 document.addEventListener('click',e=>{
  if(!e.target.closest('.global-search-box')){box.classList.remove('open');input.setAttribute('aria-expanded','false')}
  if(moreMenu.open&&!moreMenu.contains(e.target))moreMenu.open=false;
 });

 const menuButton=document.getElementById('header-mobile-btn');
 function closeMobileMenu(){
  const existing=header.querySelector('.global-mobile-menu');if(existing)existing.remove();
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Ouvrir le menu');
 }
 menuButton.addEventListener('click',()=>{
  if(header.querySelector('.global-mobile-menu')){closeMobileMenu();return}
  const menu=document.createElement('nav');
  menu.className='global-mobile-menu open';
  menu.id='mobile-menu';
  menu.setAttribute('aria-label','Navigation mobile');
  menu.innerHTML=mobile;
  header.appendChild(menu);
  menuButton.setAttribute('aria-expanded','true');
  menuButton.setAttribute('aria-label','Fermer le menu');
 });
 document.addEventListener('click',e=>{
  if(header.querySelector('.global-mobile-menu')&&!header.contains(e.target))closeMobileMenu()
 });
 window.addEventListener('resize',()=>{if(window.innerWidth>820)closeMobileMenu()});
 document.getElementById('header-chat-btn').onclick=()=>{
  if(window.openIfsiChat)window.openIfsiChat();
  else window.__openIfsiChatOnReady=true
 };
 if(!window.__ifsiHeaderKeys){
  window.__ifsiHeaderKeys=true;
  document.addEventListener('keydown',e=>{
   if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();const current=document.getElementById('header-search-input');if(current){current.focus();current.select()}}
   if(e.key==='Escape'){closeMobileMenu();moreMenu.open=false}
  })
 }
}

function renderNav(activeId){
 ensureHeaderAssets();
 buildHeader(activeId);
 const column=document.querySelector('.content-column');
 if(column&&!document.getElementById('ifsi-site-footer')){
  const footer=document.createElement('footer');
  footer.id='ifsi-site-footer';
  footer.className='ifsi-site-footer';
  footer.innerHTML='<div class="ifsi-site-footer-inner"><span>IFSI Platform · Version bêta · Support d’étude, non destiné aux décisions de soin.</span><nav aria-label="Informations du site"><a href="methodologie.html">Sources & méthode</a><a href="confidentialite.html">Confidentialité</a><a href="programme.html">Programme 2026</a><a href="planning.html">Mon planning</a></nav></div>';
  column.appendChild(footer);
 }
}


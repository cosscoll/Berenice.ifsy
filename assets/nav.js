/** Navigation UX V3 — accès rapide par intention */
const PRIMARY_NAV = [
  {id:'dashboard',href:'index.html',label:'Accueil',icon:'dashboard'},
  {id:'etudier',href:'etudier.html',label:'Étudier',icon:'book'},
  {id:'quiz',href:'quiz.html',label:'Quiz',icon:'check'},
  {id:'cartes-mentales',href:'cartes-mentales.html',label:'Cartes mentales',icon:'map'},
  {id:'progression',href:'progression.html',label:'Progression',icon:'dashboard'}
];
const TOOL_NAV = [
  {id:'revision',href:'revision.html',label:'Révision espacée',icon:'cards'},
  {id:'apprentissage',href:'apprentissage.html',label:'Apprentissage guidé',icon:'lightbulb'},
  {id:'ecos',href:'ecos.html',label:'Simulation ECOS',icon:'patient'},
  {id:'stage',href:'stage.html',label:'Stage',icon:'patient'},
  {id:'calculs',href:'calculs.html',label:'Calculs infirmiers',icon:'lightbulb'},
  {id:'anatomie',href:'anatomie.html',label:'Anatomie',icon:'body'},
  {id:'bibliotheque',href:'bibliotheque.html',label:'Bibliothèque',icon:'link'},
  {id:'referentiel',href:'referentiel.html',label:'Référentiel 2026',icon:'book'},
  {id:'ressources',href:'ressources.html',label:'Ressources',icon:'link'},
  {id:'todo',href:'todo.html',label:'Mes tâches',icon:'check'},
  {id:'apprendre',href:'apprendre.html',label:'Méthodes de révision',icon:'lightbulb'},
  {id:'ue',href:'ue.html',label:'Anciennes UE',icon:'book'}
];
const BASE_SEARCH = [
 {label:'Étudier par chapitre',kind:'Parcours',href:'etudier.html',keywords:'domaine chapitre matière cours réviser'},
 {label:'Révision espacée',kind:'Outil',href:'revision.html',keywords:'flashcards cartes fiches mémoire'},
 {label:'Quiz',kind:'Outil',href:'quiz.html',keywords:'qcm questions test'},
 {label:'Cartes mentales',kind:'Outil',href:'cartes-mentales.html',keywords:'mindmap synthèse chapitre'},
 {label:'Anatomie',kind:'Outil',href:'anatomie.html',keywords:'corps organe système'},
 {label:'Simulation ECOS',kind:'Outil',href:'ecos.html',keywords:'clinique patient situation'},
 {label:'Calculs infirmiers',kind:'Outil',href:'calculs.html',keywords:'dose débit perfusion gouttes'},
 {label:'Stage',kind:'Outil',href:'stage.html',keywords:'objectif terrain service'},
 {label:'Bibliothèque clinique',kind:'Outil',href:'bibliotheque.html',keywords:'recherche notion définition'},
 {label:'Référentiel 2026',kind:'Programme',href:'referentiel.html',keywords:'domaines compétences formation'}
];

function ensureUxAssets(){
  if(!document.querySelector('link[data-ifsi-ux]')){
    const l=document.createElement('link');l.rel='stylesheet';l.href='assets/ux.css';l.dataset.ifsiUx='1';document.head.appendChild(l);
  }
  if(!window.STUDY_TOPICS && !document.querySelector('script[data-study-topics]')){
    const s=document.createElement('script');s.src='assets/study-topics.js';s.dataset.studyTopics='1';document.head.appendChild(s);
  }
}
function iconFor(name){return (window.ICONS&&ICONS[name])?ICONS[name]:''}
function normalizeSearch(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function searchItems(query){
  const q=normalizeSearch(query).trim(); if(q.length<2)return [];
  const topics=(window.STUDY_TOPICS||[]).map(t=>({label:t.title,kind:'Chapitre',href:'etudier.html?q='+encodeURIComponent(t.title),keywords:[t.keywords,t.domain,t.ue].join(' ')}));
  return [...topics,...BASE_SEARCH].filter(x=>normalizeSearch(x.label+' '+x.keywords).includes(q)).slice(0,8);
}
function renderGlobalResults(input,box){
  const hits=searchItems(input.value);
  if(!hits.length){box.classList.remove('open');box.innerHTML='';return}
  box.innerHTML=hits.map(x=>'<a class="global-result" href="'+x.href+'"><span><strong>'+x.label+'</strong><br><small>'+x.kind+'</small></span><span>→</span></a>').join('');
  box.classList.add('open');
}
function focusGlobalSearch(){const input=document.getElementById('global-search');if(input){input.focus();input.select()}}
function renderNav(activeId){
  ensureUxAssets();
  const primary=PRIMARY_NAV.map(item=>'<a href="'+item.href+'" class="'+(item.id===activeId?'active':'')+'">'+iconFor(item.icon)+'<span>'+item.label+'</span></a>').join('');
  const tools=TOOL_NAV.map(item=>'<a href="'+item.href+'" class="'+(item.id===activeId?'active':'')+'">'+iconFor(item.icon)+'<span>'+item.label+'</span></a>').join('');
  const toolActive=TOOL_NAV.some(x=>x.id===activeId);
  document.getElementById('sidebar').innerHTML=
    '<div class="brand">IFSI Platform</div>'+
    '<div class="brand-sub">Réviser sans chercher</div>'+
    '<button class="sidebar-search-button" id="sidebar-search">⌕ <span>Rechercher</span><span style="margin-left:auto;font-size:10px">⌘K</span></button>'+
    '<div class="nav-section-label">Essentiel</div><nav class="nav-list">'+primary+'</nav>'+
    '<details class="tools-block" '+(toolActive?'open':'')+'><summary>Outils & ressources</summary><nav class="tools-nav">'+tools+'</nav></details>'+
    '<div class="sidebar-footer">Tes données restent dans ce navigateur.</div>';

  const column=document.querySelector('.content-column');
  if(column && !document.getElementById('global-topbar')){
    const top=document.createElement('div');top.className='global-topbar';top.id='global-topbar';
    top.innerHTML='<div class="global-search-wrap"><span class="search-icon">⌕</span><input id="global-search" class="global-search" type="search" autocomplete="off" placeholder="Rechercher un chapitre, une notion, un outil…"><span class="search-shortcut">⌘ K</span><div id="global-results" class="global-results"></div></div>';
    column.insertBefore(top,column.firstChild);
    const input=top.querySelector('#global-search'),box=top.querySelector('#global-results');
    input.addEventListener('input',()=>renderGlobalResults(input,box));
    input.addEventListener('keydown',e=>{if(e.key==='Enter'&&input.value.trim())location.href='etudier.html?q='+encodeURIComponent(input.value.trim());if(e.key==='Escape'){box.classList.remove('open');input.blur()}});
    input.addEventListener('focus',()=>renderGlobalResults(input,box));
    document.addEventListener('click',e=>{if(!top.contains(e.target))box.classList.remove('open')});
  }
  const sideSearch=document.getElementById('sidebar-search');if(sideSearch)sideSearch.addEventListener('click',focusGlobalSearch);
  if(!window.__ifsiSearchShortcut){window.__ifsiSearchShortcut=true;document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();focusGlobalSearch()}if(e.key==='/'&&!/input|textarea|select/i.test(document.activeElement.tagName)){e.preventDefault();focusGlobalSearch()}})}
}
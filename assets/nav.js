/** Navigation UX V4 — simple et progressive */
const PRIMARY_NAV=[
 {id:'dashboard',href:'index.html',label:'Accueil',icon:'dashboard'},
 {id:'etudier',href:'etudier.html',label:'Réviser',icon:'book'},
 {id:'quiz',href:'quiz.html',label:'Quiz',icon:'check'},
 {id:'cartes-mentales',href:'cartes-mentales.html',label:'Cartes',icon:'map'}
];
const MORE_NAV=[
 {id:'progression',href:'progression.html',label:'Progression',icon:'dashboard'},
 {id:'apprentissage',href:'apprentissage.html',label:'Apprentissage guidé',icon:'lightbulb'},
 {id:'revision',href:'revision.html',label:'Révision espacée',icon:'cards'},
 {id:'ecos',href:'ecos.html',label:'ECOS',icon:'patient'},
 {id:'stage',href:'stage.html',label:'Stage',icon:'patient'},
 {id:'calculs',href:'calculs.html',label:'Calculs',icon:'lightbulb'},
 {id:'anatomie',href:'anatomie.html',label:'Anatomie',icon:'body'},
 {id:'bibliotheque',href:'bibliotheque.html',label:'Bibliothèque',icon:'link'},
 {id:'referentiel',href:'referentiel.html',label:'Référentiel 2026',icon:'book'},
 {id:'ressources',href:'ressources.html',label:'Ressources',icon:'link'}
];
const BASE_SEARCH=[
 {label:'Réviser un chapitre',kind:'Parcours',href:'etudier.html',keywords:'domaine chapitre cours fiche'},
 {label:'Quiz',kind:'Outil',href:'quiz.html',keywords:'qcm question test'},
 {label:'Cartes mentales',kind:'Outil',href:'cartes-mentales.html',keywords:'mindmap synthèse visuelle'},
 {label:'Anatomie',kind:'Outil',href:'anatomie.html',keywords:'corps organe système'},
 {label:'ECOS',kind:'Outil',href:'ecos.html',keywords:'clinique patient situation'},
 {label:'Calculs infirmiers',kind:'Outil',href:'calculs.html',keywords:'dose débit perfusion'},
 {label:'Stage',kind:'Outil',href:'stage.html',keywords:'terrain objectif service'}
];
function ensureUxAssets(){
 if(!document.querySelector('link[data-ifsi-ux]')){const l=document.createElement('link');l.rel='stylesheet';l.href='assets/ux.css';l.dataset.ifsiUx='1';document.head.appendChild(l)}
 if(!window.STUDY_TOPICS&&!document.querySelector('script[data-study-topics]')){const s=document.createElement('script');s.src='assets/study-topics.js';s.dataset.studyTopics='1';document.head.appendChild(s)}
}
function iconFor(n){return window.ICONS&&ICONS[n]?ICONS[n]:''}
function normSearch(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function searchItems(q){
 q=normSearch(q).trim();if(q.length<2)return[];
 const topics=(window.STUDY_TOPICS||[]).map(t=>({label:t.title,kind:'Chapitre',href:'etudier.html?q='+encodeURIComponent(t.title),keywords:(t.keywords||'')+' '+t.ue}));
 return [...topics,...BASE_SEARCH].filter(x=>normSearch(x.label+' '+x.keywords).includes(q)).slice(0,8)
}
function buildSearchOverlay(){
 if(document.getElementById('search-overlay'))return;
 const o=document.createElement('div');o.id='search-overlay';o.className='search-overlay';o.innerHTML='<div class="search-panel"><div class="search-panel-head"><span>⌕</span><input id="overlay-search" type="search" placeholder="Rechercher un chapitre ou un outil…"><button class="search-close" id="search-close">Fermer</button></div><div class="search-results" id="overlay-results"></div></div>';document.body.appendChild(o);
 const input=o.querySelector('#overlay-search'),results=o.querySelector('#overlay-results');
 function render(){const hits=searchItems(input.value);results.innerHTML=hits.map(x=>'<a class="search-result" href="'+x.href+'"><span><strong>'+x.label+'</strong><small>'+x.kind+'</small></span><span>→</span></a>').join('')||(input.value.length>1?'<div style="padding:18px;color:var(--ink-soft)">Aucun résultat.</div>':'')}
 input.addEventListener('input',render);o.querySelector('#search-close').onclick=()=>o.classList.remove('open');o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open')});
 window.openIfsiSearch=()=>{o.classList.add('open');setTimeout(()=>input.focus(),0)}
}
function renderNav(activeId){
 ensureUxAssets();
 const primary=PRIMARY_NAV.map(i=>'<a href="'+i.href+'" class="'+(i.id===activeId?'active':'')+'">'+iconFor(i.icon)+'<span>'+i.label+'</span></a>').join('');
 const more=MORE_NAV.map(i=>'<a href="'+i.href+'" class="'+(i.id===activeId?'active':'')+'">'+iconFor(i.icon)+'<span>'+i.label+'</span></a>').join('');
 document.getElementById('sidebar').innerHTML='<div class="brand">IFSI Platform</div><div class="brand-sub">Un objectif à la fois</div><button class="top-search-button" id="nav-search">⌕ Rechercher</button><nav class="nav-list">'+primary+'</nav><details class="more-nav" '+(MORE_NAV.some(x=>x.id===activeId)?'open':'')+'><summary>Plus</summary><div class="more-links">'+more+'</div></details><div class="sidebar-footer">Tes données restent dans ce navigateur.</div>';
 buildSearchOverlay();document.getElementById('nav-search').onclick=()=>window.openIfsiSearch();
 if(!window.__ifsiShortcut){window.__ifsiShortcut=true;document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();window.openIfsiSearch()}})}
}

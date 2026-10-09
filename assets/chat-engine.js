/**
 * Moteur local de réponse fondée sur les cours du site.
 * Non génératif : refuse les questions non couvertes plutôt que d'inventer.
 */
(function(root){
 'use strict';
 const normalize=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,' ').replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim();
 const stop=new Set(('je tu il elle nous vous ils elles le la les un une des du de d au aux a et ou que qui quel quelle quels quelles est ce c sont dans pour par sur avec sans comment pourquoi explique expliquer moi nous plus moins peu peux peut veut voudrais veux savoir parler apprendre reviser faire travailler connaitre connaitre savoir j ai a propos en quoi meme lors ce cette ces mes mon ma ton ta tes etudier infirmier infirmiere soins patient personne cas exemple cours chapitre theme notion au sujet soignant site avoir lors selon apres avant donne dis bonjour salut hey plus detail la formation').split(' '));
 const STEM=new Map([
  ['symptomes','symptome'],['signes','signe'],['risques','risque'],['moments','moment'],
  ['doses','dose'],['mains','main'],['maladies','maladie'],['etapes','etape'],
  ['traitements','traitement'],['precautions','precaution'],['transmissions','transmission'],
  ['chutes','chute'],['sources','source'],['definitions','definition'],['criteres','critere']
 ]);
 function words(x){return normalize(x).split(' ').map(w=>STEM.get(w)||w).filter(w=>w.length>=3&&!stop.has(w))}
 function includesPhrase(hay,needle){return (' '+normalize(hay)+' ').includes(' '+normalize(needle)+' ')}
 const intentRe={
  signs:/\b(symptome|symptomes|signes?|manifestations?|reconnaitre|reperer|alerte)\b/,
  definition:/\b(quoi|definition|defini|signifie|c est quoi|explique|correspond)\b/,
  steps:/\b(comment|etape|etapes|moments|methode|proceder|regle|5b)\b/,
  source:/\b(source|sources|reference|references|preuve|officiel|fiable)\b/
 };
 function questionIntent(q){
  const n=normalize(q);for(const [name,re] of Object.entries(intentRe))if(re.test(n))return name;
  return 'overview';
 }
 function scoreCourse(q,c){
  const query=normalize(q),terms=words(q);
  if(!terms.length&&!/\b5b\b/.test(query))return 0;
  const title=normalize(c.title);
  const titleWords=new Set(words(c.title));
  const keywords=new Set(words((c.keywords||'')+' '+(c.aliases||[]).join(' ')));
  const alias=(c.aliases||[]).filter(a=>(normalize(a).length>=3||normalize(a)==='5b')&&includesPhrase(query,a));
  let score=alias.length?Math.max(...alias.map(a=>11+Math.min(5,words(a).length*2))):0;
  for(const term of new Set(terms)){
   if(titleWords.has(term))score+=5;
   else if(keywords.has(term))score+=3;
  }
  // A generic term in an unrelated course does not constitute a match.
  if(!alias.length&&score<5)return 0;
  return score;
 }
 function chooseTopic(question,history,knowledge){
  const ranked=(knowledge.courses||[]).map(c=>({c,score:scoreCourse(question,c)})).filter(x=>x.score>=5).sort((a,b)=>b.score-a.score);
  if(!ranked.length){
   const last=(knowledge.courses||[]).find(c=>c.id===history?.topicId);
   const q=normalize(question);
   if(last && /^(et |mais |pourquoi |comment |quels |quelles |est ce |ca |cela |ce |cette |il |elle |leur |ses |lui )/.test(q) && words(q).length<=5)return {course:last,followup:true};
   return null;
  }
  if(ranked.length>1&&ranked[0].score-ranked[1].score<=1 && ranked[0].score<13){
   return {ambiguous:ranked.slice(0,2).map(x=>x.c)};
  }
  return {course:ranked[0].c,score:ranked[0].score};
 }
 function bestSection(question,course){
  const intent=questionIntent(question);
  const tokens=words(question);
  const synonyms={
   signs:['signes','symptomes','manifestation','reconnaitre','alerte','hypoglycemie','troubles'],
   definition:['comprendre','est','definition','syndrome','correspond','notion'],
   steps:['moment','methode','procedure','etape','prevenir','raisonnement','transmettre'],
   source:['source','reference','fiable','scientifique']
  };
  const scored=course.sections.map((section,index)=>{
   const title=normalize(section.title),text=normalize(section.text),heading=new Set(words(section.title));
   let points=0;
   for(const token of tokens){if(heading.has(token))points+=7;else if(includesPhrase(text,token))points+=1}
   if(intent==='signs'&&/\b(signes?|symptome|symptomes|alerte|reconnaitre|manifestation)\b/.test(title))points+=13;
   if(intent==='definition'&&index===0)points+=5;
   if(intent==='steps'&&/\b(moment|methode|etape|verifi|surveill|comment|preven|raisonn)\b/.test(title))points+=6;
   if(intent==='source'&&index===course.sections.length-1)points+=1;
   return {section,index,points};
  }).sort((a,b)=>b.points-a.points);
  return scored[0]?.section||course.sections[0];
 }
 function compact(text,max=680){
  const s=String(text||'').trim();
  if(s.length<=max)return s;
  let candidates=s.slice(0,max+40).match(/^.*?[.!?](?=\s|$)/g);
  if(candidates?.length)return candidates.filter(x=>x.length<=max).pop()?.trim()||s.slice(0,max).trimEnd()+'…';
  let end=s.lastIndexOf(' ',max);
  return s.slice(0,end>Math.floor(max*0.6)?end:max).trimEnd()+'…';
 }
 function resources(c){
  const result=[{label:'Lire le cours complet',href:'cours.html?id='+encodeURIComponent(c.id)}];
  if(c.quizTopic)result.push({label:'Quiz du chapitre',href:'quiz.html?topic='+encodeURIComponent(c.quizTopic)});
  return result;
 }
 function ask(input,history={},knowledge){
  const q=String(input||'').trim();const norm=normalize(q);
  const common={topicId:null,links:[],sources:[],mode:'unknown',text:'',bullets:[]};
  if(!q)return {...common,mode:'clarify',text:'Quelle notion souhaites-tu comprendre ?'};
  if(/\b(bonjour|salut|coucou|hello)\b/.test(norm)&&words(q).length===0)return {...common,mode:'greeting',text:'Bonjour. Pose-moi une question précise sur un cours IFSI. Je chercherai une explication dans les supports du site, avec la source.'};
  const realPerson=/\b(mon|ma|mes|notre|je|j ai|mon patient|une patiente|en ce moment|maintenant)\b/.test(norm);
  const urgent=/\b(ne respire|conscience|paralyse|paralysie|douleur thoracique|s effondre|avc|infarctus|convulsion|saigne beaucoup)\b/.test(norm);
  const prescription=/\b(combien|quelle dose|dose pour|injecter|prescrire|administrer|dosage)\b/.test(norm)&&/\b(medicament|insuline|morphine|antibiotique|avk|mg|patient|perfusion|ml)\b/.test(norm);
  if(realPerson&&(urgent||prescription))return {...common,mode:'safety',text:urgent?'Cela pourrait concerner une urgence réelle. Ne te fie pas à un chatbot pour l’évaluer : alerte immédiatement un professionnel de santé ou appelle le 15 / 112 en France si la situation est urgente.':'Je ne peux pas calculer ni recommander une dose pour une personne réelle. Il faut la prescription, le protocole et la vérification d’un professionnel habilité.'};
  if(/\b(quiz|qcm|test)\b/.test(norm)&&words(q).filter(t=>!['quiz','qcm','test'].includes(t)).length===0)return {...common,mode:'navigate',text:'Tu peux lancer un quiz avec des corrections ici.',links:[{label:'Accéder aux quiz',href:'quiz.html'}]};
  if(/\b(carte mentale|cartes mentales|mindmap)\b/.test(norm)&&words(q).filter(t=>!['carte','mentale','mentales','mindmap'].includes(t)).length===0)return {...common,mode:'navigate',text:'Les cartes mentales de la plateforme sont ici.',links:[{label:'Voir les cartes mentales',href:'cartes-mentales.html'}]};
  if(/\b(stage|stages)\b/.test(norm)&&words(q).filter(t=>!['stage','stages'].includes(t)).length===0)return {...common,mode:'navigate',text:'Tu peux organiser tes objectifs de stage dans ton espace personnel.',links:[{label:'Espace stage',href:'stage.html'}]};
  if(!knowledge||!Array.isArray(knowledge.courses))return {...common,mode:'loading',text:'Les cours ne sont pas encore chargés. Réessaie dans un instant.'};
  const found=chooseTopic(q,history,knowledge);
  if(!found)return {...common,mode:'unknown',text:'Je ne trouve pas de réponse assez pertinente dans les cours disponibles. Peux-tu préciser le terme ou le chapitre ? Je préfère ne pas inventer de réponse.'};
  if(found.ambiguous)return {...common,mode:'clarify',text:'Ta question peut concerner plusieurs chapitres. Lequel souhaites-tu approfondir ?',links:found.ambiguous.map(c=>({label:c.title,href:'cours.html?id='+encodeURIComponent(c.id)}))};
  const c=found.course;
  const missingCoverage=(c.id==='neurologie'&&/\b(facteurs? de risque|prevention de l avc)\b/.test(norm))||
   (c.id==='respiratoire'&&/\b(contagieux|contagieuse|contagion|se transmet)\b/.test(norm));
  if(missingCoverage)return {...common,mode:'limited',topicId:c.id,text:'Le cours traite de « '+c.title+' », mais ne documente pas assez ce point précis pour que je réponde de façon fiable. Consulte le cours et ses références, ou reformule sur une notion abordée.',links:resources(c),sources:c.sources.slice(0,2)};
  const askSource=/\b(source|sources|references|reference|officiel|fiable)\b/.test(norm);
  const wantsLinks=/\b(quiz|qcm|carte mentale|mindmap|lien|acceder|ouvrir|reviser|revoir|chapitre|cours)\b/.test(norm)&&!/\b(symptome|signes?|quoi|explique|pourquoi|definition|comment|differences?)\b/.test(norm);
  if(askSource)return {...common,mode:'answer',topicId:c.id,text:'Voici les références associées au cours « '+c.title+' ». Elles sont consultables directement.',links:resources(c),sources:c.sources.slice(0,3)};
  if(wantsLinks)return {...common,mode:'navigate',topicId:c.id,text:'J’ai trouvé un chapitre correspondant : '+c.title+'.',links:resources(c),sources:[]};
  const glossary=(knowledge.glossary||[]).find(x=>x.id==='hygiene-mains');
  const fiveB=(knowledge.glossary||[]).find(x=>x.id==='5b');
  if(c.id==='hygiene' && /\b(5|cinq)\s+moments?\b/.test(norm) && glossary){
   return {...common,mode:'answer',topicId:c.id,text:glossary.summary,bullets:glossary.takeaway.slice(0,5),links:resources(c),sources:glossary.sources};
  }
  if(c.id==='pharmaco'&&/\b(5b|cinq b|5 b)\b/.test(norm)&&fiveB){
   return {...common,mode:'answer',topicId:c.id,text:fiveB.summary,bullets:fiveB.takeaway.slice(0,5),links:resources(c),sources:fiveB.sources};
  }
  const section=bestSection(q,c);
  let response=compact(section.text);
  if(c.id==='diabete'&&/\b(difference|distinguer|comparer)\b/.test(norm)&&/hypoglycemie/.test(norm)&&/hyperglycemie/.test(norm)){
   const hypo=c.sections.find(s=>normalize(s.title).includes('hypoglycemie'));
   const hyper=c.sections.find(s=>normalize(s.title).includes('hyperglycemie'));
   if(hypo&&hyper)response='Hypoglycémie : '+compact(hypo.text,290)+'\n\nHyperglycémie : '+compact(hyper.text,290);
  }
  const expectsSpecific=/\b(posologie|protocole de prise en charge|prise en charge|prendre en charge|traitement precis|traitements precis|dose|dosage|quel traitement|quelle dose|quel medicament)\b/.test(norm)||(/\b(traitement|medicament)\b/.test(norm)&&/\b(quel|quelle|prescrire|administrer|injecter)\b/.test(norm));
  if(expectsSpecific){
   return {...common,mode:'limited',topicId:c.id,text:'Le cours « '+c.title+' » aborde cette notion, mais ne contient pas de recommandation de traitement ou de posologie vérifiée adaptée à ta question. Je préfère ne pas en inventer.',links:resources(c),sources:c.sources.slice(0,2)};
  }
  return {...common,mode:'answer',topicId:c.id,text:response,links:resources(c),sources:c.sources.slice(0,2)};
 }
 root.IFSI_CHAT_ENGINE={ask,normalize,words,scoreCourse,chooseTopic,bestSection};
})(typeof window!=='undefined'?window:globalThis);

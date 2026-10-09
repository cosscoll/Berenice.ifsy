/**
 * Contrôles structurels — aucune dépendance npm.
 * Exécution : node tests/verify-site.mjs
 * N'a pas valeur de validation médicale ni de test visuel.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const pages=fs.readdirSync(root).filter(p=>p.endsWith('.html'));
const errors=[];
const verify=(condition,message)=>{if(!condition)errors.push(message)};
const tested=new Set();

for(const file of pages){
 const text=read(file);
 verify(/<html\b[^>]*lang=["']fr["']/i.test(text),file+': langue française manquante');
 verify(/<title>[^<]+<\/title>/i.test(text),file+': titre manquant');
 verify(/name=["']description["']/i.test(text),file+': meta description manquante');
 verify(/rel=["']canonical["']/i.test(text),file+': canonical manquant');
 for(const match of text.matchAll(/(?:href|src)=["']([^"']+)["']/g)){
  const ref=match[1].split(/[?#]/)[0];
  if(!/^(?:assets\/)?[\w./-]+\.(?:html|js|css|png|jpg|jpeg|svg|webp)$/.test(ref))continue;
  const target=path.resolve(root,ref);
  verify(target.startsWith(root+path.sep)&&fs.existsSync(target),file+': ressource absente '+ref);
 }
 for(const inline of text.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){
  if(inline[1].includes('src=')||inline[1].includes('application/ld+json')||!inline[2].trim())continue;
  try{new vm.Script(inline[2],{filename:file})}catch(e){errors.push(file+': script non valide : '+e.message)}
 }
 tested.add(file);
}
for(const f of fs.readdirSync(path.join(root,'assets')).filter(x=>x.endsWith('.js'))){
 try{new vm.Script(read('assets/'+f),{filename:f})}catch(e){errors.push('assets/'+f+': '+e.message)}
}
const sandbox=vm.createContext({window:{},console});
for(const f of ['study-topics.js','quiz-data.js','learning-data.js','courses-data.js','cases-data.js','pathway-data.js','quiz-utils.js']){
 vm.runInContext(read('assets/'+f),sandbox,{filename:f});
}
const situations=sandbox.window.IFSI_CASES;
const topics=sandbox.window.STUDY_TOPICS;
const courses=vm.runInContext('IFSI_COURSES',sandbox);
const quiz=vm.runInContext('QUIZ_BANK',sandbox);
const learning=vm.runInContext('LEARNING_MODULES',sandbox);
const topicIds=new Set(topics.map(t=>t.id)), courseIds=new Set(), quizIds=new Set(), lessonIds=new Set(learning.map(l=>l.id));
const topicsWithQuiz=new Set(quiz.map(q=>q.topic));
const quizUtils=sandbox.window.IFSI_QUIZ_UTILS;
const prepared=quizUtils.prepare(quiz,quiz.length,()=>0.31);
verify(prepared.length===quiz.length,'La préparation du quiz a perdu des questions');
const originalById=new Map(quiz.map(q=>[q.id,q]));
for(const q of prepared){
 const original=originalById.get(q.id);
 verify(!!original,'Une question transformée est inconnue : '+q.id);
 if(original)verify(q.choices[q.answer]===original.choices[original.answer],'Le mélange des réponses modifie la correction : '+q.id);
}

for(const q of quiz){
 verify(!quizIds.has(q.id),'Question en double : '+q.id);quizIds.add(q.id);
 verify(q.id&&q.topic&&q.question&&Array.isArray(q.choices)&&q.choices.length>=2,'Question incomplète : '+q.id);
 verify(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.choices.length,'Réponse hors choix : '+q.id);
}
for(const c of courses){
 verify(!courseIds.has(c.id),'Cours en double : '+c.id);courseIds.add(c.id);
 verify(topicIds.has(c.id),'Cours sans chapitre : '+c.id);
 verify(['A','B','C','D','E'].includes(c.domain),'Domaine cours incorrect : '+c.id);
 verify(c.objective&&c.sections.length>=4&&c.takeaway.length>=3&&c.scenario,'Cours incomplet : '+c.id);
 verify(c.sources.length>0&&c.sources.every(s=>/^https:\/\//.test(s.url)),'Sources manquantes : '+c.id);
 verify(c.check.choices.length>=2&&c.check.answer>=0&&c.check.answer<c.check.choices.length,'Auto-évaluation incorrecte : '+c.id);
}
for(const t of topics){
 verify(courseIds.has(t.id),'Chapitre sans cours : '+t.id);
 verify(!!t.quizTopic,'Chapitre sans thème de quiz : '+t.id);
 if(t.quizTopic)verify(topicsWithQuiz.has(t.quizTopic),'Quiz introuvable pour '+t.id);
 if(t.learningId)verify(lessonIds.has(t.learningId),'Parcours guidé introuvable pour '+t.id);
}
for(const l of learning){
 verify(Array.isArray(l.steps)&&l.steps.length===5,'Module guidé incomplet : '+l.id);
}
const scenarioIds=new Set();
for(const caseStudy of situations){
 verify(!!caseStudy.id&&!scenarioIds.has(caseStudy.id),'Situation en double ou sans ID : '+caseStudy.id);scenarioIds.add(caseStudy.id);
 verify(topicIds.has(caseStudy.topicId),'Situation sans chapitre : '+caseStudy.id);
 verify(Number.isInteger(caseStudy.level)&&caseStudy.level>=1&&caseStudy.level<=3,'Niveau de situation incorrect : '+caseStudy.id);
 verify(caseStudy.title&&caseStudy.objective&&caseStudy.intro&&caseStudy.debrief,'Situation incomplète : '+caseStudy.id);
 verify(Array.isArray(caseStudy.steps)&&caseStudy.steps.length>=3,'Parcours trop court : '+caseStudy.id);
 verify(Array.isArray(caseStudy.sources)&&caseStudy.sources.length>0&&caseStudy.sources.every(s=>/^https:\/\//.test(s.url)),'Sources de la situation manquantes : '+caseStudy.id);
 for(const step of caseStudy.steps||[]){
  verify(step.question&&Array.isArray(step.options)&&step.options.length>=2,'Étape incomplète : '+caseStudy.id);
  verify(step.options.filter(o=>o.correct).length===1,'Il faut une seule réponse correcte par étape : '+caseStudy.id);
  verify(step.options.every(o=>o.label&&o.why),'Justification manquante : '+caseStudy.id);
 }
}
const stages=sandbox.window.IFSI_PATHWAY;
const chooseQuestions=vm.runInContext('ifsiChooseQuestions',sandbox);
const allStageTopics=new Set(),stageIDs=new Set();
for(const stage of stages){
 verify(stage.id&&!stageIDs.has(stage.id),'Étape du parcours dupliquée ou sans ID : '+stage.id);stageIDs.add(stage.id);
 verify(stage.level>=1&&stage.level<=3,'Niveau du parcours incorrect : '+stage.id);
 for(const topicId of stage.topics){
  verify(topicIds.has(topicId),'Cours du parcours absent : '+topicId);
  verify(!allStageTopics.has(topicId),'Chapitre présent deux fois dans le parcours : '+topicId);
  allStageTopics.add(topicId);
 }
 const group=stage.topics.map(id=>topics.find(t=>t.id===id)).filter(Boolean);
 const questions=chooseQuestions(stage,topics,quiz,8,()=>0.42);
 const alternate=chooseQuestions(stage,topics,quiz,8,()=>0.42,questions.map(q=>q.id));
 verify(alternate.length===8,'Bilan de second passage incomplet : '+stage.id);
 verify(questions.length===8,'Bilan transversal trop court : '+stage.id);
 verify(new Set(questions.map(q=>q.id)).size===questions.length,'Question du bilan dupliquée : '+stage.id);
 verify(new Set(questions.map(q=>q.topic)).size>=4,'Bilan pas assez transversal : '+stage.id);
 verify(situations.filter(c=>c.level===stage.level).length>=3,'Cas pratiques insuffisants : '+stage.id);
}
verify(stages.length===3,'Le parcours doit compter trois étapes indicatives');
verify(allStageTopics.size===topics.length,'Certains cours manquent dans le parcours');
verify(fs.existsSync(path.join(root,'parcours.html')),'Page du parcours manquante');
verify(fs.existsSync(path.join(root,'assets/pathway.css')),'Styles du parcours manquants');
verify(fs.existsSync(path.join(root,'situations.html')),'Page des situations manquante');
verify(fs.existsSync(path.join(root,'robots.txt')),'robots.txt manquant');
verify(fs.existsSync(path.join(root,'sitemap.xml')),'sitemap.xml manquant');
const syllabusCtx=vm.createContext({window:{}});
vm.runInContext(read('assets/referentiel-data.js'),syllabusCtx);
vm.runInContext(read('assets/deep-dive-data.js'),syllabusCtx);
const syllabus=syllabusCtx.window.IFSI_2026_MATRIX;
const deep=syllabusCtx.window.IFSI_DEEP_DIVES;
verify(syllabus.units.length===15,'La cartographie doit contenir 15 UE officielles');
verify(syllabus.units.reduce((sum,ue)=>sum+ue.ects,0)===114,'Le total des ECTS théoriques doit être égal à 114');
verify(syllabus.structure.ects===180&&syllabus.structure.clinicalWeeks===66,'Les repères du référentiel 2026 sont incohérents');
for(const ue of syllabus.units){
 verify(['A','B','C','D','E'].includes(ue.domain),'Domaine officiel invalide : '+ue.id);
 verify(Array.isArray(ue.gaps)&&ue.gaps.length>0,'Une UE sans manques décrits doit être revue : '+ue.id);
 for(const id of ue.courseIds)verify(courseIds.has(id),'Cours introuvable dans le référentiel : '+id);
}
for(const course of courses){
 const ext=deep[course.id];
 verify(!!ext&&ext.focus&&ext.reasoning&&ext.trap&&ext.task,'Atelier de raisonnement absent : '+course.id);
}
verify(fs.existsSync(path.join(root,'manifest.webmanifest')),'Manifeste PWA manquant');
verify(fs.existsSync(path.join(root,'sw.js')),'Service worker manquant');
verify(fs.existsSync(path.join(root,'assets/pwa.js')),'Enregistrement PWA absent');
verify(fs.existsSync(path.join(root,'programme.html')),'Page programme absente');
verify(fs.existsSync(path.join(root,'planning.html')),'Page planning absente');
verify(fs.existsSync(path.join(root,'cours.html')),'Page des cours manquante');

if(errors.length){
 console.error(errors.map(e=>'✗ '+e).join('\n'));
 process.exitCode=1;
}else{
 console.log('Contrôles OK : '+pages.length+' pages, '+topics.length+' thèmes, '+courses.length+' cours, '+quiz.length+' quiz, '+learning.length+' parcours courts, '+situations.length+' situations fictives, '+stages.length+' niveaux du parcours.');
}

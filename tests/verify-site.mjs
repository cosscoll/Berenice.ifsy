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
for(const f of ['study-topics.js','quiz-data.js','learning-data.js','courses-data.js']){
 vm.runInContext(read('assets/'+f),sandbox,{filename:f});
}
const topics=sandbox.window.STUDY_TOPICS;
const courses=vm.runInContext('IFSI_COURSES',sandbox);
const quiz=vm.runInContext('QUIZ_BANK',sandbox);
const learning=vm.runInContext('LEARNING_MODULES',sandbox);
const topicIds=new Set(topics.map(t=>t.id)), courseIds=new Set(), quizIds=new Set(), lessonIds=new Set(learning.map(l=>l.id));
const topicsWithQuiz=new Set(quiz.map(q=>q.topic));
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
verify(fs.existsSync(path.join(root,'robots.txt')),'robots.txt manquant');
verify(fs.existsSync(path.join(root,'sitemap.xml')),'sitemap.xml manquant');
verify(fs.existsSync(path.join(root,'cours.html')),'Page des cours manquante');

if(errors.length){
 console.error(errors.map(e=>'✗ '+e).join('\n'));
 process.exitCode=1;
}else{
 console.log('Contrôles OK : '+pages.length+' pages, '+topics.length+' thèmes, '+courses.length+' cours, '+quiz.length+' quiz, '+learning.length+' parcours courts.');
}

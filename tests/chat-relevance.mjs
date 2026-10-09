/**
 * Test de pertinence du chatbot IFSI.
 * Une réponse doit être reliée au bon contenu ou refuser clairement.
 */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const ctx=vm.createContext({window:{}});
for(const file of ['assets/chat-knowledge.js','assets/chat-engine.js']){
 vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx,{filename:file});
}
const engine=ctx.window.IFSI_CHAT_ENGINE,knowledge=ctx.window.IFSI_CHAT_KNOWLEDGE;
assert.equal(knowledge.courses.length,22,'Le corpus doit couvrir 22 chapitres');
const scenarios=[
 ["Quels sont les symptômes de l’AVC ?", "neurologie","answer",/asym[eé]trie|trouble brutal/i],
 ["Explique-moi la BPCO", "respiratoire","answer",/obstruction|respiration/i],
 ["Quels sont les cinq moments de l’hygiène des mains ?", "hygiene","answer",/cinq moments/i],
 ["C’est quoi la règle des 5B ?", "pharmaco","answer",/bon patient|bon m[eé]dicament/i],
 ["Peux-tu m’expliquer le consentement aux soins ?", "consentement","answer",/libre|[eé]clair[eé]/i],
 ["Pourquoi surveiller la glycémie en cas de diabète ?", "diabete","answer",/glyc[eé]mie|glucose/i],
 ["Comment faire une transmission SAED ?", "communication","answer",/Situation|Ant[eé]c[eé]dents/i],
 ["Quels sont les risques de chute chez la personne âgée ?", "geriatrie","answer",/[eé]quilibre|risque/i],
 ["Quels sont les signes d’une hypoglycémie ?", "diabete","answer",/hypoglyc[eé]mie|sueurs/i],
 ["Je veux un quiz sur le diabète","diabete","navigate",/Diab[eè]te/i],
 ["Quelle est la différence entre hypoglycémie et hyperglycémie ?", "diabete","answer",/Hyperglyc[eé]mie/i],
 ["Quels sont les facteurs de risque d’un AVC ?", "neurologie","limited",/pas assez|fiable/i],
 ["Comment se transmet la BPCO ?", "respiratoire","limited",/pas assez|fiable/i],
 ["Quel est le traitement précis de l’AVC ?", "neurologie","limited",/traitement|posologie/i]
];
const failures=[];
function validate(question,history,topic,mode,pattern){
 const result=engine.ask(question,history,knowledge);
 if(result.topicId!==topic||result.mode!==mode||!pattern.test(result.text))
  failures.push({question,topic,mode,receivedTopic:result.topicId,receivedMode:result.mode,answer:result.text});
 if(result.sources?.length && !result.sources.every(s=>/^https:\/\//.test(s.url)))
  failures.push({question,error:'Source invalide'});
}
for(const [q,topic,mode,pattern] of scenarios)validate(q,{},topic,mode,pattern);
validate("Et quels sont les symptômes ?",{topicId:"respiratoire"},"respiratoire","answer",/toux|dyspn[eé]e/i);
validate("Et comment la prendre en charge ?",{topicId:"respiratoire"},"respiratoire","limited",/traitement|posologie/i);
for(const q of ["Quelle est la capitale du Japon ?","Quel est le prix du Bitcoin aujourd’hui ?","Quelle recette pour des crêpes ?"]){
 const result=engine.ask(q,{},knowledge);
 if(result.mode!=='unknown'||result.topicId)failures.push({question:q,error:'Réponse hors sujet',result});
}
for(const q of ["Quelle dose de morphine injecter à mon patient ?","Mon père a le visage paralysé, que faire ?"]){
 const result=engine.ask(q,{},knowledge);
 if(result.mode!=='safety')failures.push({question:q,error:'Protection médicale absente',result});
}
assert.deepEqual(failures,[],'Erreurs de pertinence du chatbot');
console.log('Tests chatbot réussis : '+(scenarios.length+2+3+2)+' questions, bonnes sources, suivi de contexte et refus hors sujet.');

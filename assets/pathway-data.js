/**
 * Progression conseillée et transversale.
 * Classement pédagogique INDICATIF, pas un programme officiel par année.
 * Les contenus et évaluations ne délivrent aucune certification.
 */
window.IFSI_PATHWAY = [
  {
    "id": "annee1",
    "label": "Année 1",
    "subtitle": "Acquérir les repères fondamentaux",
    "goal": "Développer les bases du raisonnement, de la relation et de la sécurité des soins.",
    "topics": [
      "hygiene",
      "pharmaco",
      "demarche",
      "biologie",
      "consentement",
      "communication",
      "prevention"
    ],
    "level": 1
  },
  {
    "id": "annee2",
    "label": "Année 2",
    "subtitle": "Relier les connaissances aux situations",
    "goal": "Analyser les besoins de personnes de profils différents et organiser des transmissions pertinentes.",
    "topics": [
      "cardio",
      "respiratoire",
      "diabete",
      "douleur",
      "plaies",
      "geriatrie",
      "pediatrie",
      "administration"
    ],
    "level": 2
  },
  {
    "id": "annee3",
    "label": "Année 3",
    "subtitle": "Coordonner et prendre du recul",
    "goal": "Articuler alertes, coopération, recherche documentaire et réflexion professionnelle.",
    "topics": [
      "urgences",
      "neurologie",
      "psychiatrie",
      "recherche",
      "equipe",
      "environnement",
      "lecture-science"
    ],
    "level": 3
  }
];
function ifsiChooseQuestions(stage,topics,bank,count=8,random=Math.random,previousIds=[]){
 const stageTopics=stage.topics.map(id=>topics.find(t=>t.id===id)).filter(Boolean);
 const themes=[...new Set(stageTopics.map(t=>t.quizTopic).filter(Boolean))];
 const shuffle=(items)=>{
  const result=[...items];for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]]}return result;
 };
 const recent=new Set(Array.isArray(previousIds)?previousIds:[]);
 const all=shuffle(bank.filter(q=>themes.includes(q.topic))).sort((a,b)=>Number(recent.has(a.id))-Number(recent.has(b.id)));
 const used=new Set(),selected=[];
 for(const theme of shuffle(themes)){
  const question=all.find(q=>q.topic===theme&&!used.has(q.id));
  if(question&&selected.length<count){selected.push(question);used.add(question.id)}
 }
 for(const question of all){if(selected.length>=count)break;if(!used.has(question.id)){selected.push(question);used.add(question.id)}}
 return shuffle(selected);
}

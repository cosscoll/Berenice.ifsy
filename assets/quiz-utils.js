/**
 * Moteur de quiz — variations des questions, réponses mélangées et erreurs à revoir.
 * Les résultats sont stockés localement. Le site n'évalue pas une compétence clinique.
 */
const IFSI_QUIZ_REVIEW_KEY='ifsi_quiz_review_v2';
window.IFSI_QUIZ_UTILS={
 shuffle(items,random=Math.random){
  const result=[...items];
  for(let i=result.length-1;i>0;i--){
   const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]]
  }
  return result;
 },
 prepare(pool,count,random=Math.random){
  const shuffle=items=>this.shuffle(items,random);
  return shuffle(pool).slice(0,Math.min(Math.max(0,count),pool.length)).map(q=>{
   const options=shuffle(q.choices.map((label,index)=>({label,index})));
   return {...q,choices:options.map(o=>o.label),answer:options.findIndex(o=>o.index===q.answer)};
  });
 },
 loadReview(){
  try{
   const state=JSON.parse(localStorage.getItem(IFSI_QUIZ_REVIEW_KEY)||'{}');
   return state&&typeof state==='object'&&!Array.isArray(state)?state:{}
  }catch(e){return {}}
 },
 dueQuestions(bank){
  const state=this.loadReview();
  return bank.filter(q=>state[q.id]?.needsReview===true);
 },
 markAnswered(id,isCorrect){
  if(!id)return;
  const state=this.loadReview(),entry=state[id]||{attempts:0,mistakes:0};
  state[id]={
   attempts:(Number(entry.attempts)||0)+1,
   mistakes:(Number(entry.mistakes)||0)+(isCorrect?0:1),
   needsReview:!isCorrect,
   lastAnswered:new Date().toISOString()
  };
  try{localStorage.setItem(IFSI_QUIZ_REVIEW_KEY,JSON.stringify(state))}catch(e){}
 }
};

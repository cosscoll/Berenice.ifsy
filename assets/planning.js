/* Planification de révisions locale, sans notifications ni données médicales. */
window.IFSI_PLANNER={
 key:'ifsi_daily_goal_minutes_v1',
 goal(){
  try{const n=Number(localStorage.getItem(this.key));return [10,20,30,45].includes(n)?n:20}catch(e){return 20}
 },
 setGoal(minutes){try{localStorage.setItem(this.key,String(minutes))}catch(e){}},
 overview(deck,courses,topics,quizBank,utils){
  let courseProgress={};try{courseProgress=JSON.parse(localStorage.getItem('ifsi_course_progress_v1')||'{}')}catch(e){}
  const dueCards=typeof getDueCards==='function'?getDueCards(deck):[];
  const dueQuiz=utils.dueQuestions(quizBank);
  const notFinished=courses.filter(c=>!(courseProgress[c.id]?.read&&courseProgress[c.id]?.passed));
  const unseen=notFinished.find(c=>!courseProgress[c.id]);
  const next=unseen||notFinished[0]||null;
  const minutes=this.goal(),cardCount=Math.min(dueCards.length,Math.max(3,Math.floor(minutes/2)));
  return {minutes,dueCards,cardCount,dueQuiz,next,completed:courses.length-notFinished.length,allCourses:courses.length};
 },
 weekDates(){
  const today=new Date();today.setHours(12,0,0,0);
  const labels=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
  return Array.from({length:7},(_,i)=>{const d=new Date(today);d.setDate(today.getDate()+i);return {day:i===0?"Aujourd'hui":labels[d.getDay()],date:d.toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}});
 }
};
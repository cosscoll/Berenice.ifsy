function getEcosStats() {
  let history=[];
  try { history=JSON.parse(localStorage.getItem('ifsi_ecos_history_v1')||'[]'); } catch {}
  if (!history.length) return { attempts:0, average:null };
  const ratios=history.filter(x=>x.maxScore>0).map(x=>x.score/x.maxScore);
  return { attempts:history.length, average:ratios.length?Math.round(ratios.reduce((a,b)=>a+b,0)/ratios.length*100):null };
}
function getRevisionStats(deck) {
  const state=loadFsrsState();
  let seen=0, solid=0, fragile=0;
  deck.forEach(card=>{
    const s=state[card.id];
    if(!s||!s.reps) return;
    seen++;
    if(s.state==='review' && s.stability>=3 && s.difficulty<=7) solid++; else fragile++;
  });
  return { total:deck.length, seen, solid, fragile };
}
function getStageStats() {
  const s=getStageData();
  const total=s.objectives.length;
  const done=s.objectives.filter(o=>o.done).length;
  return {total,done,notes:s.notes.length};
}

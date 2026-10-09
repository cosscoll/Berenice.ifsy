/**
 * Recette navigateur locale — Chromium via Playwright (ordinateur + mobile).
 * Teste les comportements essentiels, pas la validité médicale des contenus.
 */
import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import {mkdirSync} from 'node:fs';

const base=process.env.BASE_URL||'http://127.0.0.1:8765';
mkdirSync('test-results',{recursive:true});
const browser=await chromium.launch({headless:true});
let failures=0;
async function smoke(label,viewport,run){
 const context=await browser.newContext({viewport,isMobile:viewport.width<=600,deviceScaleFactor:1});
 const page=await context.newPage();
 const pageErrors=[];
 page.on('pageerror',error=>pageErrors.push(String(error)));
 try{
  await run(page);
  assert.equal(pageErrors.length,0,label+' : erreurs JavaScript : '+pageErrors.join(' | '));
  const dims=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
  assert.ok(dims.scrollWidth<=dims.width+3,label+' : débordement horizontal de '+(dims.scrollWidth-dims.width)+' px');
  console.log('OK '+label);
 }catch(error){
  failures++;
  console.error('ÉCHEC '+label+': '+error.message);
  await page.screenshot({path:'test-results/'+label.replace(/[^a-z0-9-]/gi,'-')+'.png',fullPage:true}).catch(()=>{});
 }finally{await context.close()}
}
const visit=async(page,route)=>{
 const response=await page.goto(base+route,{waitUntil:'domcontentloaded'});
 assert.equal(response?.status(),200,'HTTP '+route);
 await page.locator('#ifsi-global-header').waitFor({timeout:10000});
};
await smoke('desktop-header',{width:1440,height:900},async page=>{
 await visit(page,'/index.html');
 assert.equal(await page.locator('#ifsi-global-header').count(),1);
 assert.equal(await page.locator('.global-mobile-menu').count(),0);
 assert.ok(await page.locator('.global-nav').isVisible());
 assert.ok(await page.locator('#header-search-input').isVisible());
 await page.locator('#header-search-input').fill('diabete');
 await page.locator('#header-search-results a').first().waitFor({timeout:5000});
 assert.ok((await page.locator('#header-search-results').innerText()).toLowerCase().includes('diab'));
 await page.locator('#header-chat-btn').click();
 await page.locator('#ifsi-chat-shell.open').waitFor({timeout:5000});
 await page.locator('#ifsi-chat-close').click();
 await page.locator('.global-more summary').click();
 await page.locator('.global-more-menu a[href="parcours.html"]').waitFor();
});
await smoke('chat-answers',{width:1280,height:850},async page=>{
 await visit(page,'/index.html');
 await page.locator('#header-chat-btn').click();
 await page.locator('#ifsi-chat-shell.open').waitFor();
 const field=page.locator('#ifsi-chat-input');
 await field.fill('Quels sont les signes d’un AVC ?');
 await field.press('Enter');
 await page.locator('.chat-msg.bot:has-text("asymétrie")').waitFor({timeout:10000});
 const answer=page.locator('.chat-msg.bot:has-text("asymétrie")').last();
 assert.ok((await answer.innerText()).includes('Lire le cours complet'));
 assert.ok((await answer.innerText()).includes('Sources utilisées'));
 await field.fill('Explique-moi la BPCO');
 await field.press('Enter');
 await page.locator('.chat-msg.bot:has-text("obstruction durable")').waitFor({timeout:10000});
 await field.fill('Et quels sont les symptômes ?');
 await field.press('Enter');
 await page.locator('.chat-msg.bot:has-text("expectorations")').waitFor({timeout:10000});
 await field.fill('Quelle est la capitale du Japon ?');
 await field.press('Enter');
 await page.locator('.chat-msg.bot:has-text("Je ne trouve pas")').waitFor({timeout:10000});
 await field.fill('Quelle dose de morphine injecter à mon patient ?');
 await field.press('Enter');
 await page.locator('.chat-msg.bot:has-text("Je ne peux pas calculer")').waitFor({timeout:10000});
});
await smoke('mobile-chat',{width:390,height:844},async page=>{
 await visit(page,'/index.html');
 await page.locator('#header-chat-btn').click();
 await page.locator('#ifsi-chat-shell.open').waitFor();
 await page.locator('#ifsi-chat-input').fill('Quels sont les cinq moments de l’hygiène des mains ?');
 await page.locator('#ifsi-chat-input').press('Enter');
 await page.locator('.chat-msg.bot:has-text("Avant de toucher un patient")').waitFor({timeout:10000});
 await page.locator('#ifsi-chat-close').click();
 assert.equal(await page.locator('#ifsi-chat-shell.open').count(),0);
});
await smoke('mobile-header',{width:390,height:844},async page=>{
 await visit(page,'/index.html');
 assert.equal(await page.locator('.global-mobile-menu').count(),0);
 assert.ok(await page.locator('#header-mobile-btn').isVisible());
 await page.locator('#header-mobile-btn').click();
 await page.locator('.global-mobile-menu.open').waitFor();
 await page.locator('.global-mobile-menu a[href="parcours.html"]').waitFor();
 await page.locator('#header-mobile-btn').click();
 assert.equal(await page.locator('.global-mobile-menu').count(),0);
 await page.locator('#header-search-input').fill('hygiene');
 await page.locator('#header-search-results a').first().waitFor();
});
await smoke('desktop-cours',{width:1280,height:850},async page=>{
 await visit(page,'/cours.html?id=hygiene');
 await page.locator('.course-section').first().waitFor();
 assert.ok((await page.locator('.course-section').count())>=4);
 await page.locator('.course-answer').first().click();
 assert.ok(await page.locator('#course-feedback').isVisible());
 await page.locator('#mark-read').click();
 const progress=await page.evaluate(()=>JSON.parse(localStorage.getItem('ifsi_course_progress_v1')||'{}'));
 assert.equal(progress.hygiene?.read,true);
});
await smoke('desktop-cas',{width:1280,height:850},async page=>{
 await visit(page,'/situations.html?id=avc-signaux');
 await page.locator('.case-step-card').waitFor();
 for(let i=0;i<3;i++){
  await page.locator('.case-choice').first().click();
  await page.locator('#case-next').click();
 }
 await page.locator('.case-result-score').waitFor();
 const progress=await page.evaluate(()=>JSON.parse(localStorage.getItem('ifsi_cases_progress_v1')||'{}'));
 assert.ok(progress['avc-signaux']?.attempts>=1);
});
await smoke('desktop-quiz',{width:1280,height:850},async page=>{
 await visit(page,'/quiz.html?topic=Hygiène');
 await page.locator('#quick-start').click();
 await page.locator('.quiz-choice').first().waitFor();
 for(let i=0;i<5;i++){
  await page.locator('.quiz-choice').first().click();
  await page.locator('#next').click();
 }
 await page.locator('.done-state').waitFor();
 const records=await page.evaluate(()=>localStorage.getItem('ifsi_quiz_review_v2'));
 assert.ok(records!==null,'Suivi des réponses manquant');
 await page.locator('#again').click();
 await page.locator('#quick-start').waitFor();
});
await smoke('desktop-parcours',{width:1280,height:850},async page=>{
 await visit(page,'/parcours.html');
 await page.locator('[data-year="annee2"]').click();
 assert.ok((await page.locator('.pathway-focus').innerText()).includes('Année 2'));
 await page.locator('a[href="parcours.html?evaluation=annee2"]').click();
 await page.locator('#pathway-begin').click();
 for(let i=0;i<8;i++){
  await page.locator('.pathway-choice').first().click();
  await page.locator('#pathway-confirm').click();
 }
 await page.locator('.pathway-big-score').waitFor();
 const result=await page.evaluate(()=>JSON.parse(localStorage.getItem('ifsi_pathway_assessments_v1')||'{}'));
 assert.equal(result.annee2?.lastTotal,8);
});
await smoke('mobile-parcours',{width:390,height:844},async page=>{
 await visit(page,'/parcours.html');
 await page.locator('.pathway-tabs button').first().waitFor();
 assert.ok(await page.locator('.pathway-focus').isVisible());
});
await smoke('desktop-programme',{width:1440,height:900},async page=>{
 await visit(page,'/programme.html');
 await page.locator('.program-unit').first().waitFor();
 assert.equal(await page.locator('.program-unit').count(),15);
 await page.locator('.program-tabs button[data-d="E"]').click();
 assert.equal(await page.locator('.program-unit').count(),3);
 await page.locator('.program-gaps').first().locator('summary').click();
 assert.ok(await page.locator('.program-gaps').first().locator('li').count()>0);
});
await smoke('mobile-programme',{width:390,height:844},async page=>{
 await visit(page,'/programme.html');
 await page.locator('.program-tabs button[data-d="B"]').click();
 assert.ok(await page.locator('.program-unit').count()>0);
});
await smoke('desktop-planning',{width:1280,height:850},async page=>{
 await visit(page,'/planning.html');
 await page.locator('.plan-main-task').waitFor();
 await page.locator('#plan-goal').selectOption('30');
 const saved=await page.evaluate(()=>localStorage.getItem('ifsi_daily_goal_minutes_v1'));
 assert.equal(saved,'30');
 assert.equal(await page.locator('.plan-day').count(),7);
});
await smoke('mobile-planning',{width:390,height:844},async page=>{
 await visit(page,'/planning.html');
 assert.ok(await page.locator('.plan-main-task').isVisible());
 assert.equal(await page.locator('.plan-day').count(),7);
});
await smoke('course-deep-dive',{width:1280,height:850},async page=>{
 await visit(page,'/cours.html?id=neurologie');
 await page.locator('.course-deep-dive summary').click();
 assert.ok(await page.locator('.course-deep-content').isVisible());
 assert.ok((await page.locator('.course-deep-content').innerText()).includes('Erreur fréquente'));
});
await smoke('offline-course',{width:1280,height:850},async page=>{
 await visit(page,'/cours.html?id=hygiene');
 await page.waitForFunction(()=>!!navigator.serviceWorker?.controller,{timeout:15000});
 assert.ok(await page.locator('link[rel="manifest"]').count()>0);
 await page.context().setOffline(true);
 await page.reload({waitUntil:'domcontentloaded'});
 await page.locator('.course-head h1').waitFor({timeout:10000});
 await page.context().setOffline(false);
});
await smoke('header-search-noresults',{width:1280,height:850},async page=>{
 await visit(page,'/index.html');
 const field=page.locator('#header-search-input');
 await field.fill('abcdefghijkpasuncours');
 await page.locator('.global-search-empty').waitFor();
 assert.equal(await field.getAttribute('aria-expanded'),'true');
 await field.press('Enter');
 await page.waitForURL(/etudier\.html\?q=/);
 await page.locator('.empty-note').waitFor();
});
await smoke('backup-restore',{width:1280,height:850},async page=>{
 await visit(page,'/confidentialite.html');
 await page.evaluate(()=>localStorage.setItem('ifsi_daily_goal_minutes_v1','45'));
 const valid={source:'IFSI Platform',version:1,date:new Date().toISOString(),data:{ifsi_daily_goal_minutes_v1:'20'}};
 await page.locator('#backup-file').setInputFiles({name:'ma-sauvegarde.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(valid))});
 page.once('dialog',dialog=>dialog.accept());
 await page.locator('#import-local').click();
 await page.locator('#local-data-status:has-text("restauré")').waitFor();
 assert.equal(await page.evaluate(()=>localStorage.getItem('ifsi_daily_goal_minutes_v1')),'20');
 const invalid={source:'IFSI Platform',data:{external_key:'evil'}};
 await page.locator('#backup-file').setInputFiles({name:'incorrect.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(invalid))});
 await page.locator('#import-local').click();
 await page.locator('#local-data-status:has-text("non autorisé")').waitFor();
 assert.equal(await page.evaluate(()=>localStorage.getItem('ifsi_daily_goal_minutes_v1')),'20');
 const downloadEvent=page.waitForEvent('download');
 await page.locator('#export-local').click();
 const download=await downloadEvent;
 assert.equal(download.suggestedFilename(),'ifsi-donnees-locales.json');
});
await smoke('quiz-review-link',{width:1280,height:850},async page=>{
 await visit(page,'/quiz.html');
 await page.evaluate(()=>localStorage.setItem('ifsi_quiz_review_v2',JSON.stringify({'q-v15-001':{attempts:1,mistakes:1,needsReview:true}})));
 await page.goto(base+'/quiz.html?review=1',{waitUntil:'domcontentloaded'});
 await page.locator('.quiz-question').waitFor();
 assert.ok((await page.locator('#quiz-home').isVisible())===false);
});
await browser.close();
if(failures)process.exitCode=1;
else console.log('Recette navigateur réussie sur ordinateur et mobile.');

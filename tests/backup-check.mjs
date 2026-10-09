/** Vérifie import/export local sans accès réseau. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const ctx=vm.createContext({window:{},Blob});
vm.runInContext(fs.readFileSync(path.join(root,'assets/backup.js'),'utf8'),ctx);
const api=ctx.window.IFSI_BACKUP;
class Storage{
 constructor(){this.map=new Map()}
 get length(){return this.map.size}
 key(i){return [...this.map.keys()][i]||null}
 getItem(k){return this.map.get(k)??null}
 setItem(k,v){this.map.set(String(k),String(v))}
 removeItem(k){this.map.delete(k)}
}
const source=new Storage();
source.setItem('ifsi_daily_goal_minutes_v1','30');
source.setItem('ifsi_course_progress_v1','{"hygiene":{"read":true,"passed":false}}');
source.setItem('external_key','must-not-export');
const backup=api.exportData(source);
assert.deepEqual(Object.keys(backup.data).sort(),['ifsi_course_progress_v1','ifsi_daily_goal_minutes_v1']);
assert.equal(backup.source,'IFSI Platform');
const parsed=api.parseBackup(JSON.stringify(backup));
const recipient=new Storage();
recipient.setItem('ifsi_daily_goal_minutes_v1','10');
recipient.setItem('external_key','keep');
assert.equal(api.restoreBackup(recipient,parsed),2);
assert.equal(recipient.getItem('ifsi_daily_goal_minutes_v1'),'30');
assert.equal(recipient.getItem('external_key'),'keep');
for(const item of [
 '{"data":{}}',
 JSON.stringify({source:'IFSI Platform',data:{external_key:'injection'}}),
 JSON.stringify({source:'IFSI Platform',data:{ifsi_test:123}}),
 '{not JSON'
])assert.throws(()=>api.parseBackup(item));
console.log('Sauvegarde : export, restauration, contrôle de schéma et rejet des fichiers incorrects réussis.');

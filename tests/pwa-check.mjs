/** Contrôles statiques de l'installation et du cache pédagogique. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));
const icons=manifest.icons||[];
assert.equal(manifest.display,'standalone');
assert.ok(icons.some(i=>i.sizes==='192x192'&&fs.existsSync(path.join(root,i.src))),'Icône 192 absente');
assert.ok(icons.some(i=>i.sizes==='512x512'&&fs.existsSync(path.join(root,i.src))),'Icône 512 absente');
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
assert.ok(sw.includes('offline.html')&&sw.includes('cours.html')&&sw.includes('cache.match'),'Cache hors ligne incomplet');
assert.ok(!sw.includes('localStorage')&&!sw.includes('patients.json'),'Le cache de pages publiques ne doit pas stocker les données d’apprenants');
const pwa=fs.readFileSync(path.join(root,'assets/pwa.js'),'utf8');
assert.ok(pwa.includes("serviceWorker.register('sw.js'")),'Enregistrement manquant');
console.log('PWA : manifeste, icônes, précache public et enregistrement présents.');

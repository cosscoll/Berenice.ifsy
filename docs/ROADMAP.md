# Roadmap

## ✅ Livrable 1 — Architecture
Arborescence complète, package.json front/back, justification technique.

## ✅ Livrable 2 — Socle technique (ce lot)
- **FSRS** : moteur `ts-fsrs` fonctionnel côté back (`fsrsScheduler.js`) et front (`fsrsEngine.js`),
  modèle Mongo `FSRSCard`, endpoints `/api/fsrs/*`, page de révision utilisable (`RevisionFSRS.jsx`),
  script de seed (`fsrsSeed.js`) avec la fiche AVK d'exemple du cahier des charges.
- **3D anatomique** : viewer React Three Fiber fonctionnel (`AnatomyViewer.jsx`) avec fallback
  placeholder + loaders DRACO/KTX2 déjà branchés, prêt à recevoir un vrai modèle GLTF.
- **WebRTC / ECOS** : chaîne complète jeton éphémère (back) → négociation SDP (front) → session
  audio bidirectionnelle avec OpenAI Realtime, page `ECOSSimulation.jsx` pour tester.
- Serveur Express opérationnel (`app.js`/`server.js`), config env, logger, gestion d'erreurs.

### Limite connue de cet environnement
Le sandbox n'a pas d'accès réseau : impossible d'exécuter `npm install` ou de lancer
réellement les serveurs ici. Tout le code a été vérifié statiquement (syntaxe JS validée
fichier par fichier, tous les imports relatifs résolus), mais **le premier test réel
(`npm install` puis `npm run dev` des deux côtés) reste à faire sur votre machine**.

## ✅ Livrable 3 — Contenu pédagogique (ce lot)
- Référentiel des UE saisi dans `backend/src/data/ue-content/{S1-S2,S3-S4,S5-S6}.json`
  (toutes les UE citées dans le cahier des charges). Modèle `UE` avec clé composite
  `(code, bloc)` car certaines UE — ex. 2.11 Pharmacologie — réapparaissent à
  plusieurs semestres avec un contenu progressif différent.
- Script `npm run seed:ue` pour charger ce référentiel en base (idempotent, upsert).
- Deck FSRS enrichi à 8 fiches réparties sur 6 UE différentes
  (`backend/src/data/fsrs-decks/decks-seed.json`), chargé par `npm run seed:fsrs`.
- Historique de révision persisté : modèle `ReviewLog` + écriture réelle dans
  `POST /api/fsrs/cards/:id/review` (n'était qu'un TODO au Livrable 2).
- Catalogue UE et page détail UE fonctionnels côté frontend, branchés sur l'API
  (`UECatalogue.jsx`, `UEDetail.jsx`, filtrage par bloc de semestres).

### Volumétrie réelle vs "injection massive"
Le cahier des charges demande de générer un maximum de contenu par itération.
8 fiches FSRS et le référentiel des 59 UE (titres) sont en place ; le contenu
détaillé (cours complet, question banks) par UE n'existe pas encore — ce serait
des dizaines de milliers de lignes et nécessite une validation pédagogique
UE par UE, pas une génération en masse non vérifiée.

## ✅ Livrable 4 — Cas cliniques ECOS (ce lot)
- **11 scénarios complets** au format `ecos_id` du cahier des charges
  (`backend/src/data/ecos-scenarios/scenarios-seed.json`) : dyspnée, douleur
  thoracique, hypoglycémie, choc anaphylactique, AVC (FAST), ETP diabète,
  crise d'angoisse, annonce en soins palliatifs, réaction transfusionnelle,
  chute de la personne âgée, suspicion de sepsis.
- Modèle `ECOSScenario` + script `npm run seed:ecos` (idempotent, upsert par `ecos_id`).
- L'API `/api/ecos/scenarios` et `/api/ecos/sessions/:scenarioId` chargent désormais
  les vrais scénarios en base (fini le scénario de démo codé en dur du Livrable 2).
- Frontend : sélecteur de scénario réel branché sur l'API dans `ECOSSimulation.jsx`.

### ⚠️ À faire absolument avant tout usage réel
Ces 11 scénarios ont été rédigés pour valider la chaîne technique (JSON → base →
avatar), **pas comme protocoles cliniques validés**. Avant de les mettre entre les
mains d'étudiants, un formateur IFSI/médecin doit relire chaque scénario et chaque
critère d'évaluation (`eval`). C'est particulièrement important ici : une erreur
dans un scénario de simulation médicale peut faire apprendre un mauvais réflexe.

## ✅ Recherche approfondie intégrée (ce lot)
Un rapport de recherche externe (Gemini, recherche avancée) a été fourni pour
combler les manques identifiés (référentiel officiel, HDS, modèles 3D,
tarification IA, NANDA-I, FSRS, validation pédagogique/légale). Avant
intégration, les affirmations les plus techniques ont été **vérifiées
indépendamment** par recherche web — voir `docs/CONFORMITE.md` pour le détail
complet. Résumé des changements de code qui en découlent :
- `ts-fsrs` corrigé vers la version réellement stable (5.2.1) + API modernisée
  (`scheduler.next()`).
- Modèle OpenAI Realtime choisi par scénario (`model_tier: standard|complex`)
  pour maîtriser les coûts (confirmés : ~0,02-0,05 $/min en mini vs
  ~0,06-0,11 $/min en flagship).
- Nouveau modèle `ECOSEvaluation` : toute note générée par l'avatar IA est
  provisoire tant qu'un formateur ne l'a pas validée (obligation de
  supervision humaine, EU AI Act Annexe III — systèmes d'évaluation
  éducative classés "haut risque").
- Source de modèle 3D identifiée et documentée (`ashemag/human-atlas`, MIT +
  données CC BY 4.0) pour remplacer le placeholder du viewer.
- Vigilance actée sur NANDA-I (licence commerciale) : aucun contenu livré
  n'en dépend, à éviter pour la suite sans accord contractuel.

## ✅ Amorce d'intégration du modèle 3D réel (ce lot)
- `docs/ANATOMY_3D_INTEGRATION.md` : guide pas-à-pas pour brancher le vrai
  modèle `ashemag/human-atlas` (à faire chez vous — accès réseau requis,
  indisponible dans cet environnement).
- Ébauche de mapping TA2 anglais → français : 11 systèmes anatomiques,
  64 structures (`frontend/src/data/anatomy/ta2-fr-mapping.json`), **non
  validée cliniquement**, à relire par un formateur avant diffusion.
- Page Anatomie 3D dotée d'un sélecteur de système en français, qui affiche
  déjà les structures mappées — fonctionnel dès maintenant avec le
  placeholder, prêt à recevoir le vrai modèle sans changement d'interface.

### Ce qui reste à faire (nécessite un accès réseau, hors de cet environnement)
Cloner `ashemag/human-atlas`, lancer sa pipeline de compression DRACO/KTX2,
copier les `.glb` résultants dans `frontend/public/models/`, et étendre le
mapping TA2 de 64 à ~2234 structures.
Architecture posée, socle technique qui tourne (FSRS, 3D, WebRTC), contenu
pédagogique amorcé (référentiel des UE, 8 fiches FSRS, 11 cas ECOS). Ce qui manque
encore pour un site en production : contenu détaillé des 59 UE (pas que les titres),
authentification réelle, tests automatisés, vrai modèle anatomique 3D, hébergement
HDS effectif, et surtout — la validation pédagogique de tout le contenu par l'équipe
IFSI avant diffusion aux étudiants.

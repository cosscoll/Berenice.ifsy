# Architecture — Plateforme e-learning IFSI (Livrable 1)

Référentiel infirmier sur 3 ans (4620 h, 59 UE). Monorepo `frontend/` (React) + `backend/` (Node.js) + `infra/`.

## 1. Arborescence exhaustive

```
ifsi-platform/
├── backend/
│   ├── src/
│   │   ├── config/            → db.config.js, env.config.js, hds.config.js
│   │   ├── controllers/       → ue, ecos, fsrs, auth, user
│   │   ├── data/               → seeds JSON (ue-content/, ecos-scenarios/, fsrs-decks/)
│   │   ├── jobs/               → cron FSRS quotidien, contrôle d'intégrité des données
│   │   ├── middlewares/       → auth, erreurs, audit (logs inaltérables), rate limiting
│   │   ├── models/             → UE, ECOSScenario, FSRSCard, User, ReviewLog
│   │   ├── routes/             → une route par domaine + index.js
│   │   ├── services/
│   │   │   ├── auth/           → JWT, hash mot de passe (argon2)
│   │   │   ├── ecos/           → moteur de scénarios, pont OpenAI Realtime, notation
│   │   │   ├── fsrs/           → scheduler ts-fsrs, seed des decks
│   │   │   └── storage/       → adaptateur HDS, chiffrement, logs immuables
│   │   ├── utils/, validators/
│   │   ├── app.js, server.js
│   │   └── tests/ (unit, integration)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Anatomy3D/     → viewer WebGL, DRACO/KTX2 loaders, nomenclature TA2
│   │   │   ├── Avatar/         → canvas TalkingHead, blend shapes, VAD, barge-in
│   │   │   ├── ECOS/           → runner de session, dialogue patient, grille d'éval
│   │   │   ├── FSRS/            → carte de révision, file de révision, stats
│   │   │   ├── MindMap/        → rendu Markmap (Markdown → SVG)
│   │   │   ├── common/, layout/
│   │   ├── hooks/               → useFSRS, useWebRTC, useMarkmap, useAnatomyModel, useAuth
│   │   ├── pages/               → Dashboard, Catalogue UE, Détail UE, Révision, ECOS, Anatomie 3D, Profil, Login
│   │   ├── services/
│   │   │   ├── api/             → client Axios + services par domaine
│   │   │   ├── fsrs/, markmap/, webrtc/  → moteurs client (négociation SDP, transformation MD)
│   │   ├── store/               → Redux Toolkit (user, fsrs, ecos)
│   │   ├── types/                → .ts partagés (ue, ecos, fsrs)
│   │   └── App.jsx, main.jsx, routes/
│   └── package.json
├── infra/
│   ├── docker/                  → Dockerfile frontend/backend + docker-compose
│   ├── ci/                       → GitHub Actions (CI + déploiement)
│   └── hds-compliance/          → checklist ISO 27001 / HDS
└── docs/                         → API.md, DATA-MODELS.md, ROADMAP.md
```

Arbre complet (199 entrées) : voir `TREE.txt` fourni avec ce livrable.

## 2. Justification des choix techniques

| Besoin (cahier des charges) | Choix | Emplacement |
|---|---|---|
| Hébergement HDS v2 / ISO 27001, chiffrement, logs inaltérables | `hdsStorageAdapter.js`, `encryptionService.js`, `immutableLogger.js` + config `hds.config.js` | `backend/src/services/storage/` |
| Mémorisation espacée (FSRS) | `ts-fsrs` (front ET back), scheduler quotidien en cron | `frontend/src/services/fsrs/`, `backend/src/services/fsrs/`, `backend/src/jobs/fsrsDailyScheduler.job.js` |
| Cartes mentales (Markmap) | `markmap-lib`/`markmap-view`, transformation MD→SVG | `frontend/src/services/markmap/`, `components/MindMap/` |
| Anatomie 3D (WebGL, DRACO, KTX2, TA2) | `three` + `@react-three/fiber`/`drei`, loaders dédiés | `frontend/src/components/Anatomy3D/` |
| Avatar ECOS (WebRTC, OpenAI Realtime, TalkingHead) | `openai` SDK côté service, `talkinghead` pour les visèmes, VAD/barge-in isolés | `frontend/src/components/Avatar/`, `backend/src/services/ecos/openaiRealtimeBridge.js` |
| Référentiel 59 UE (S1→S6) | Seeds JSON par bloc de semestres, modèle Mongoose `UE.model.js` | `backend/src/data/ue-content/{S1-S2,S3-S4,S5-S6}.json` |
| Cas cliniques ECOS (JSON) | Modèle `ECOSScenario.model.js` + moteur `scenarioEngine.js` | `backend/src/data/ecos-scenarios/`, `backend/src/services/ecos/` |

## 3. Stack

- **Frontend** : React 18, Vite, Redux Toolkit, React Router, Tailwind, Three.js/R3F, ts-fsrs, Markmap, TalkingHead, Socket.io-client.
- **Backend** : Node.js/Express, MongoDB (Mongoose) + Redis, ts-fsrs, Socket.io, JWT + argon2, Winston (logs), node-cron.
- **Infra** : Docker (front + back), GitHub Actions (CI/déploiement), hébergement HDS/EEE à provisionner en conséquence.

## 4. Fichiers livrés dans ce lot

- `frontend/package.json` — dépendances complètes front
- `backend/package.json` — dépendances complètes back
- Arborescence complète des dossiers/fichiers (squelettes vides, prêts à être implémentés)
- `TREE.txt` — arbre brut

## 5. Prochaine étape (Livrable 2)

Socle technique fonctionnel : intégration Three.js (viewer anatomique minimal), configuration ts-fsrs (scheduler + seed d'un deck), squelette WebRTC (négociation SDP + pont OpenAI Realtime) — à coder dès validation de cette architecture.

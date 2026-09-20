# Plateforme e-learning IFSI

Plateforme e-learning pour Institut de Formation en Soins Infirmiers (IFSI),
référentiel 2026 (3 ans, 4620h, 59 UE) : mémorisation espacée (FSRS), cartes
mentales (Markmap), anatomie 3D (Three.js), simulations cliniques ECOS avec
avatar conversationnel (WebRTC + OpenAI Realtime + TalkingHead).

⚠️ **État du projet : socle technique fonctionnel, pas prêt pour la
production.** Voir `docs/ROADMAP.md` pour l'état détaillé de chaque brique et
`docs/CONFORMITE.md` pour les points réglementaires (HDS, RGPD, EU AI Act,
licences) encore à traiter avant tout usage réel avec des étudiants.

## Démarrage rapide

Prérequis : Node.js ≥ 20, MongoDB, Redis (optionnel pour ce stade du projet).

\`\`\`bash
# Backend
cd backend
cp .env.example .env   # renseigner MONGO_URI, JWT_SECRET, OPENAI_API_KEY...
npm install
npm run seed:ue        # charge le référentiel des UE
npm run seed:fsrs      # charge le deck FSRS de démonstration
npm run seed:ecos      # charge les scénarios ECOS
npm run dev            # démarre l'API sur http://localhost:4000

# Frontend (autre terminal)
cd frontend
cp .env.example .env
npm install
npm run dev            # démarre l'app sur http://localhost:5173
\`\`\`

**Note** : ce projet n'a jamais été réellement exécuté avant d'être poussé
ici (développé dans un environnement sans accès réseau). Le code a été
vérifié statiquement (syntaxe, imports, JSON) mais le premier
`npm install && npm run dev` réel reste à faire — signalez toute erreur
rencontrée.

## Structure

- `frontend/` — React 18 + Vite (FSRS, anatomie 3D, ECOS, authentification)
- `backend/` — Node.js/Express + MongoDB (API, seeds, logique métier)
- `infra/` — Docker, CI (squelettes, non testés)
- `docs/` — architecture, roadmap, conformité, guide d'intégration 3D

## Documentation

- `docs/ARCHITECTURE.md` — arborescence et choix techniques
- `docs/ROADMAP.md` — état détaillé de chaque livrable, ce qui manque
- `docs/CONFORMITE.md` — synthèse réglementaire (HDS, RGPD, EU AI Act, NANDA-I)
- `docs/ANATOMY_3D_INTEGRATION.md` — guide pour brancher le vrai modèle 3D

## Licence

Non définie — à choisir avant publication publique du dépôt.

# IFSI Platform — Bérénice

Plateforme de révision pédagogique pour les études infirmières. **Version bêta**, publiée sur GitHub Pages : <https://cosscoll.github.io/Berenice.ifsy/>.

Le site est une application statique HTML / CSS / JavaScript sans comptes ni serveur de données. Les révisions, notes, quiz et objectifs restent dans le navigateur (`localStorage`). **Aucune fonctionnalité ne doit être utilisée pour prendre des décisions de soin réelles.**

## Ce qui fonctionne

- **22 cours introductifs**, avec sections, exemples fictifs, sources, autoévaluation et atelier de raisonnement complémentaire.
- **72 questions de quiz** corrigées, réponses mélangées et révisions ciblées selon les erreurs.
- **15 situations cliniques fictives**, dont plusieurs transversales, et progression sauvegardée.
- Parcours conseillé en **trois niveaux non officiels**, bilans transversaux et statistiques locales.
- Bibliothèque de révision espacée et **planning personnel** avec objectifs de durée.
- Assistant IFSI **local et non génératif**, recherchant dans les cours et préférant signaler un manque d'information plutôt qu'inventer.
- Cartographie du **référentiel 2026** : 15 UE, 5 domaines, ECTS, liens indicatifs vers les cours et notions manquantes.
- Cartes mentales, anatomie, entraînement ECOS, calculs éducatifs, notes de stage.
- PWA installable sur plateformes compatibles, avec **mode hors connexion limité** à des ressources publiques enregistrées.
- Export **et restauration** d'une sauvegarde locale depuis la page Confidentialité.

## Qualité et limites pédagogiques

Le site **ne couvre pas encore l'intégralité du diplôme**. Les contenus cliniques demandent une relecture par un formateur ou un professionnel infirmier compétent. La matrice du référentiel n'atteste pas de la validation d'une UE. L'ancien programme UE coexiste avec les domaines du référentiel 2026 et est clairement distingué.

Le chatbot n'est pas une IA générative. Un tuteur IA avancé nécessiterait un backend sécurisé et une supervision des réponses. Les données ne sont pas synchronisées entre plusieurs appareils. Ne saisir **aucune donnée identifiante de patients** sur le site.

Les copies hors connexion peuvent être obsolètes. Les recommandations officielles et les protocoles de stage font toujours autorité pour la pratique.

## Structure du dépôt

| Fichiers | Rôle |
| --- | --- |
| `index.html`, `etudier.html`, `cours.html` | Accueil, catalogue et cours |
| `quiz.html`, `examen.html`, `situations.html` | Quiz, examens blancs et cas |
| `parcours.html`, `planning.html`, `progression.html` | Révision et suivi |
| `programme.html`, `referentiel.html` | Référentiel infirmier |
| `confidentialite.html` | Export, import et suppression des données locales |
| `assets/courses-data.js`, `assets/quiz-data.js`, `assets/cases-data.js` | Données pédagogiques |
| `assets/deep-dive-data.js`, `assets/referentiel-data.js` | Ateliers et matrice 2026 |
| `assets/chat-knowledge.js`, `assets/chat-engine.js` | Recherche pédagogique locale |
| `assets/nav.js`, `assets/ux.css` | Header et design |
| `manifest.webmanifest`, `sw.js`, `assets/pwa.js` | PWA et cache public |

## Lancement local

Depuis la racine du dépôt :

```bash
python3 -m http.server 8765
```

Ouvrir <http://localhost:8765/>. **Ne pas tester la PWA en ouvrant les HTML en `file://`** ; elle demande HTTPS ou localhost.

Les changements sur `main` sont déployés automatiquement avec GitHub Pages.

## Tests automatiques

GitHub Actions exécute :
- `node tests/verify-site.mjs` — cohérence des contenus, liens locaux et syntaxe JS ;
- `node tests/chat-relevance.mjs` — réponses pertinentes et refus hors domaine ;
- `node tests/pwa-check.mjs` — structure de la PWA ;
- `node tests/backup-check.mjs` — export, validation et restauration ;
- `node tests/browser-smoke.mjs` — navigation, cours, quiz, assistant, parcours, programme, planning et PWA sur Chromium desktop/mobile.

La recette navigateur utilise Playwright installé temporairement dans GitHub Actions. Les tests ne remplacent pas une revue clinique, une validation d'accessibilité WCAG ou des essais sur des appareils iOS et Android physiques.

## Après la clôture du développement autonome

- Voir [`docs/QUALITY-REVIEW.md`](docs/QUALITY-REVIEW.md) pour la procédure de contrôle médical.
- Voir [`docs/NEXT-STEPS.md`](docs/NEXT-STEPS.md) pour les manques pédagogiques, techniques et réglementaires.
- Voir [`docs/FINAL-REVIEW.md`](docs/FINAL-REVIEW.md) pour le bilan de la présente livraison et les vérifications à réaliser avant un lancement présenté comme complet.

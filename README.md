# Plateforme e-learning IFSI — pour Bérénice

Site 100% statique (HTML/CSS/JS pur, zéro dépendance à installer),
personnalisé pour Bérénice, étudiante en 1ère année IFSI.

## Mise en ligne (GitHub Pages) — aucune commande à taper

1. Créez un dépôt GitHub (ou réutilisez-en un vide).
2. Déposez les fichiers de ce dossier en conservant la structure (les `.html`
   à la racine, les fichiers dans `assets/`).
3. **Settings → Pages** → Branch `main`, dossier `/ (root)` → **Save**.
4. Le site est en ligne à `https://<utilisateur>.github.io/<repo>/` après
   1-2 minutes.

## Personnalisation

Le tableau de bord affiche un message d'accueil, un compteur de jours
consécutifs d'utilisation (streak, basé sur les visites enregistrées dans ce
navigateur) et des phrases d'encouragement qui changent à chaque visite.
Le prénom se change en une ligne dans `assets/student.js`
(`const STUDENT_NAME = 'Bérénice';`).

## Pages du site

- **Tableau de bord** — vue d'ensemble, streak, accès rapide à tout.
- **Catalogue UE** — les 59 UE du référentiel 2026, par bloc de semestres.
- **Révision** — 19 fiches en répétition espacée. La carte mentale du
  concept s'affiche automatiquement dès que vous révélez la réponse.
  Progression sauvegardée dans le navigateur (`localStorage`).
- **Cartes mentales** — 15 synthèses de chapitre entier : urgences,
  cardiovasculaire, respiratoire, pharmacologie, hygiène/infectiologie,
  plaies/escarres, psychiatrie, pédiatrie, diabète, douleur/soins palliatifs,
  démarche de soins infirmiers, gériatrie, valeurs biologiques usuelles,
  neurologie/AVC, voies d'administration & calcul de dose.
- **Anatomie** — schémas 2D en SVG fait main (silhouette + repères par
  système), légendés en français. Pas de vraie photo/illustration
  téléchargée (voir "D'où vient le contenu" plus bas).
- **Simulation ECOS** — 11 cas cliniques, grille d'auto-évaluation. Pas
  d'avatar IA (voir plus bas), à jouer en binôme.
- **Ressources** — sites de référence réels et vérifiés (Infirmiers.com,
  Nomad Education, FUN MOOC) + des liens de recherche YouTube ciblés par
  thème.
- **Comment réviser** — méthodes de mémorisation issues de la recherche en
  sciences cognitives (rappel actif, répétition espacée, méthode Feynman,
  entrelacement, Pomodoro), expliquées et reliées aux outils du site.

## Correctif important (cartes mentales)

La première version utilisait `markmap-autoloader`, qui ne re-rendait pas
fiablement le contenu généré dynamiquement par JavaScript — les cartes
restaient vides au clic. Réécrit avec l'API directe `markmap-lib` /
`markmap-view` (voir `assets/markmap-helper.js`), qui fonctionne à chaque
changement de carte, y compris sur du contenu ajouté après coup.

## En cas de problème

Le site inclut maintenant une **bannière d'erreur automatique** : si un
script échoue, un message rouge apparaît en bas de l'écran avec le détail.
Si vous voyez ça, copiez-collez le message tel quel pour que je puisse
corriger précisément.

Si une page semble ne pas répondre après une mise à jour du dépôt :
1. Faites un **rechargement forcé** (Ctrl+Maj+R sur Windows/Linux,
   Cmd+Maj+R sur Mac) — GitHub Pages et les navigateurs mettent les fichiers
   en cache, une page peut afficher une ancienne version pendant un moment.
2. Vérifiez que GitHub Pages a bien fini de redéployer (**Settings → Pages**
   affiche l'heure du dernier déploiement).
3. Si le problème persiste, ouvrez la page dans une fenêtre de navigation
   privée pour éliminer le cache comme cause.

## D'où vient le contenu

Les faits cliniques précis (score de Glasgow, échelle de Braden, 5 moments
OMS, valeurs biologiques, constantes pédiatriques par âge, etc.) ont été
vérifiés par recherche web avant rédaction. Le contenu (mind maps, fiches,
explications) est ensuite **rédigé from scratch**, pas copié depuis les
pages sources. Les liens vers infirmiers.com / Nomad Education / FUN MOOC
sont de vraies URLs vérifiées ; les liens YouTube sont des recherches
pré-filtrées par thème (pas une chaîne précise, pour rester fiables dans le
temps). Comme toujours : contenu à faire valider par un formateur IFSI
avant tout usage réel — ce n'est pas un contenu pédagogique certifié.

## Ce qui n'est pas inclus (limite assumée)

Un avatar patient conversationnel par IA nécessite une clé API payante et
un serveur pour la protéger — incompatible avec un site 100% statique.

## Fichiers

```
index.html                 tableau de bord (personnalisé)
ue.html                     catalogue des UE
revision.html               révision espacée (19 fiches)
cartes-mentales.html        synthèses de chapitre (15 domaines)
anatomie.html               schémas anatomiques 2D
ecos.html                    simulations ECOS
ressources.html                sites de référence + liens YouTube par thème
apprendre.html                   méthodes de révision
assets/style.css                  système de design (couleurs, typo, composants, responsive)
assets/nav.js                       génère la barre de navigation
assets/icons.js                       icônes SVG inline
assets/error-reporter.js                affiche les erreurs JS visiblement (diagnostic)
assets/student.js                         personnalisation (prénom, streak, encouragements)
assets/data.js                              données (UE, fiches FSRS, scénarios ECOS)
assets/chapter-maps.js                        cartes mentales de chapitre (15)
assets/resources-data.js                        sites vérifiés + thèmes YouTube
assets/real-plates.js                             vraies planches Gray's Anatomy (domaine public)
assets/markmap-helper.js                            rendu Markmap fiable (API directe)
assets/fsrs.js                                        moteur de répétition espacée simplifié
assets/anatomy-mapping.js                               lexique + coordonnées des schémas
```

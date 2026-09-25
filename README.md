# Plateforme e-learning IFSI — pour Bérénice

Site 100% statique (HTML/CSS/JS pur), **zéro dépendance externe** —
plus aucun appel à un CDN, tout le code s'exécute localement dans le
navigateur. Personnalisé pour Bérénice, étudiante en 1ère année IFSI.

## Mise en ligne (GitHub Pages) — aucune commande à taper

1. Créez un dépôt GitHub (ou réutilisez-en un vide).
2. **Supprimez tous les anciens fichiers** du dépôt avant de déposer ceux-ci
   (important : une ancienne version en cache peut sinon persister).
3. Déposez les fichiers de ce dossier en conservant la structure (les
   `.html` à la racine, les fichiers dans `assets/`).
4. **Settings → Pages** → Branch `main`, dossier `/ (root)` → **Save**.
5. Le site est en ligne à `https://<utilisateur>.github.io/<repo>/` après
   1-2 minutes. Faites un **rechargement forcé** (Ctrl+Maj+R) pour être sûr
   de ne pas voir une version mise en cache.

## Correctif majeur : les cartes mentales ne dépendent plus d'aucun CDN

Les deux versions précédentes des cartes mentales utilisaient la librairie
externe `markmap` (chargée depuis un CDN). Cette dépendance s'est révélée
impossible à faire fonctionner de façon fiable, et impossible à tester
réellement dans l'environnement de développement (pas de navigateur, pas
d'accès réseau pour vérifier). **Solution : un moteur de rendu SVG maison,
écrit de zéro, sans aucune dépendance externe** (`assets/simple-mindmap.js`).
Testé réellement (exécution du code, pas juste relecture) sur les 34 cartes
du site (19 fiches + 15 chapitres) avant livraison — toutes se génèrent
correctement.

## Nouveau : choisir ce qu'on révise

La page Révision propose maintenant un sélecteur : réviser uniquement les
fiches dues aujourd'hui (répétition espacée classique), tout réviser d'un
coup (bachotage avant examen), ou choisir directement un chapitre précis
(UE) — vous n'êtes plus limité à une seule file d'attente imposée.

## Cartes mentales v2 : radiales, zoomables, téléchargeables

Nouvelle version du moteur (`assets/simple-mindmap.js`), toujours sans
dépendance externe : les branches partent maintenant dans toutes les
directions (disposition radiale, pas seulement de gauche à droite), les
connecteurs s'ancrent précisément sur le bord de chaque boîte, et chaque
carte a sa propre mini barre d'outils : **zoom** (molette ou boutons +/−),
**déplacement** (glisser à la souris ou au doigt), **agrandir en plein
écran**, et **télécharger en SVG** (fichier autonome, ouvrable dans
n'importe quel navigateur ou logiciel de dessin).

## Anatomie : plus de vraies planches

11 vraies planches historiques (Gray's Anatomy, 1918, domaine public)
couvrant maintenant 7 systèmes sur 11 : squelettique, musculaire,
cardiovasculaire, respiratoire, digestif, nerveux, urinaire. Les 4 systèmes
restants (endocrinien, reproducteur, tégumentaire, lymphatique) n'ont pas
encore de planche confirmée — plutôt que d'inventer une référence, ils
gardent uniquement le schéma simplifié et le lexique français en attendant.

## Contenu enrichi

**24 fiches de révision** (ajout de : 14 besoins de Virginia Henderson,
tri des DASRI, consentement libre et éclairé, stades de l'escarre,
constantes vitales normales de l'adulte).

## Nouveau : Mes tâches (téléchargeable)

Page dédiée pour organiser révisions, stages, démarches administratives.
Sauvegardé dans le navigateur, et **téléchargeable en fichier .txt** à tout
moment (bouton "Télécharger la liste") pour l'avoir sous la main même hors
ligne ou pour l'imprimer.

## Nouveau : une petite assistante

Un avatar "infirmière" flottant (coin bas-droit, sur toutes les pages)
donne des conseils contextuels selon la page consultée, et répond à
quelques mots-clés simples (glasgow, braden, stress, diabète...).
**Honnêteté importante** : ce n'est pas une vraie IA conversationnelle —
juste des réponses pré-écrites. Un vrai chatbot IA nécessiterait un serveur
et une clé API, incompatible avec un site 100% statique. C'est dit
clairement dans le panneau de l'assistante elle-même.

## Tableau de bord simplifié

Retiré : le compteur de jours consécutifs et le nombre de cartes à réviser
(sur demande). Le tableau de bord se concentre maintenant sur la navigation
et l'accueil personnalisé.

## Anatomie : couverture élargie et liens corrigés

**Correctif** : les liens vers les planches ne fonctionnaient pas
(mécanisme de redirection Wikimedia peu fiable en usage réel). Remplacé par
des URLs directes calculées à partir du hash MD5 exact de chaque fichier
(l'algorithme officiel de MediaWiki, vérifié avant de l'utiliser).

**20 vraies planches historiques, 10 systèmes sur 11 couverts** :
squelettique, musculaire, cardiovasculaire, respiratoire, digestif, nerveux,
urinaire, reproducteur, lymphatique, endocrinien. Seul le système
tégumentaire (peau) n'a pas encore de référence Wikimedia confirmée avec
certitude — plutôt que d'inventer un lien qui risquerait à nouveau de ne
pas fonctionner, il garde pour l'instant uniquement le schéma simplifié.

## UX/UI et responsive mobile — refonte

- **Navigation mobile repensée** : vraie barre d'onglets fixée en bas de
  l'écran (comme une app), avec icône + libellé toujours visibles — fini le
  choix entre "voir les mots" et "voir les icônes", et on garde le repère
  clair de la page active.
- **Zones tactiles agrandies** partout : boutons, champs, cases à cocher
  (min. 44px de hauteur, recommandation Apple/Google), formulaire "Mes
  tâches" qui s'empile en pleine largeur sur petit écran.
- **Zones de sécurité iOS** gérées (encoche, barre d'accueil) via
  `viewport-fit=cover` + `env(safe-area-inset-*)`.
- **Accessibilité** : `aria-label` sur tous les boutons à icône seule
  (zoom, plein écran, télécharger, assistante), état `aria-expanded` sur
  l'assistante.
- **Finitions visuelles** : légère profondeur au survol des cartes,
  meilleur retour tactile, cartes mentales à taille réduite sur mobile pour
  laisser la place à la barre de navigation.

## Personnalisation

Le tableau de bord affiche un message d'accueil, un compteur de jours
consécutifs d'utilisation (streak) et des phrases d'encouragement qui
changent à chaque visite. Le prénom se change en une ligne dans
`assets/student.js` (`const STUDENT_NAME = 'Bérénice';`).

## Pages du site

- **Tableau de bord** — vue d'ensemble, streak, accès rapide à tout.
- **Catalogue UE** — les 59 UE du référentiel 2026, par bloc de semestres.
- **Révision** — 19 fiches, choix du chapitre à réviser, carte mentale
  affichée automatiquement après révélation de la réponse.
- **Cartes mentales** — 15 synthèses de chapitre entier.
- **Anatomie** — schémas 2D en SVG fait main + vraies planches d'anatomie
  historiques (Gray's Anatomy, 1918, domaine public) pour le squelette, le
  cœur, le cerveau et le rein.
- **Simulation ECOS** — 11 cas cliniques, grille d'auto-évaluation.
- **Ressources** — sites de référence vérifiés + recherches YouTube ciblées.
- **Comment réviser** — méthodes de mémorisation issues de la recherche.

## En cas de problème

Une **bannière d'erreur automatique** apparaît en bas de l'écran si un
script échoue (voir `assets/error-reporter.js`). Si vous la voyez,
copiez-collez le message pour que je puisse corriger précisément.

## D'où vient le contenu

Les faits cliniques précis (Glasgow, Braden, 5 moments OMS, valeurs
biologiques, constantes pédiatriques, etc.) ont été vérifiés par recherche
web avant rédaction. Le contenu est rédigé from scratch, pas copié. Les
planches anatomiques sont de vraies images du domaine public (pas une
recherche d'image hasardeuse). Les liens vers infirmiers.com / Nomad
Education / FUN MOOC sont de vraies URLs vérifiées. Comme toujours :
contenu à faire valider par un formateur IFSI avant tout usage réel.

## Ce qui n'est pas inclus (limite assumée)

Un avatar patient conversationnel par IA nécessite une clé API payante et
un serveur pour la protéger — incompatible avec un site 100% statique.

## Fichiers

```
index.html                 tableau de bord (personnalisé)
ue.html                     catalogue des UE
revision.html               révision espacée, choix du chapitre
cartes-mentales.html        synthèses de chapitre (15 domaines)
anatomie.html               schémas 2D + vraies planches Gray's Anatomy
ecos.html                    simulations ECOS
ressources.html                sites de référence + liens YouTube par thème
apprendre.html                   méthodes de révision
assets/style.css                  système de design (responsive)
assets/nav.js                       barre de navigation
assets/icons.js                       icônes SVG inline
assets/error-reporter.js                bannière d'erreur visible (diagnostic)
assets/student.js                         personnalisation (prénom, streak)
assets/data.js                              données (UE, fiches FSRS, ECOS)
assets/chapter-maps.js                        cartes mentales de chapitre
assets/resources-data.js                        sites vérifiés + YouTube
assets/real-plates.js                             planches Gray's Anatomy
assets/simple-mindmap.js                            moteur de carte mentale maison (0 dépendance)
assets/fsrs.js                                        moteur de répétition espacée
assets/anatomy-mapping.js                               lexique anatomique français
```

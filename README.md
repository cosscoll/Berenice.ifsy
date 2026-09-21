# Plateforme e-learning IFSI — version statique

Site 100% statique (HTML/CSS/JS pur, zéro dépendance à installer). Catalogue
des UE, révision espacée, anatomie en schémas 2D, simulations ECOS en
auto-évaluation.

## Mise en ligne (GitHub Pages) — aucune commande à taper

1. Créez un dépôt GitHub (ou réutilisez-en un vide).
2. Déposez les fichiers de ce dossier en conservant la structure (les 5
   `.html` à la racine, les fichiers dans `assets/`).
3. **Settings → Pages** → Branch `main`, dossier `/ (root)` → **Save**.
4. Votre site est en ligne à `https://<utilisateur>.github.io/<repo>/`
   après 1-2 minutes.

## Direction artistique

Palette encre pin / sauge / brique, typographies Fraunces (titres) + Public
Sans (texte). Navigation latérale avec état actif visible en permanence,
titres de page identiques aux libellés du menu — pour qu'on sache toujours
où on est. Mode révision épuré : la carte au centre, révélation progressive
de la réponse, raccourcis clavier (Espace pour révéler, 1-4 pour noter).

## Ce qui fonctionne réellement

- **Catalogue UE** : les 59 UE du référentiel 2026, par bloc de semestres.
- **Révision** : 19 fiches (contre 8 initialement), réparties sur davantage
  d'UE — dont les scores/échelles cliniques usuels (Glasgow, Braden, règle
  des 5B, 5 moments OMS, chaîne de l'infection, types de choc, règle des 9,
  dispositifs d'oxygénothérapie, types d'insuline...). Répétition espacée
  simplifiée (voir `assets/fsrs.js`). Progression sauvegardée dans le
  navigateur (`localStorage`).
- **Cartes mentales** (nouveau) : 7 synthèses de chapitre entier (urgences,
  cardiovasculaire, respiratoire, pharmacologie, hygiène/infectiologie,
  plaies/escarres, psychiatrie) — pour la vue d'ensemble avant de descendre
  au détail dans les fiches.
- **Comment réviser** (nouveau) : méthodes de mémorisation issues de la
  recherche en sciences cognitives (rappel actif, répétition espacée,
  méthode Feynman, entrelacement, Pomodoro), expliquées et reliées aux
  outils du site.
- **Anatomie** : schémas 2D en SVG fait main, légendés en français.
- **Simulation ECOS** : 11 cas cliniques, grille d'auto-évaluation.

## D'où vient le contenu

Les faits cliniques précis (score de Glasgow, échelle de Braden, 5 moments
OMS, etc.) ont été vérifiés par recherche web avant rédaction. Le contenu
est ensuite **rédigé from scratch** (mind maps, fiches, explications) plutôt
que copié depuis les pages sources — pas de texte ni d'image tierce
reproduite. Comme toujours : contenu à faire valider par un formateur IFSI
avant tout usage réel avec de vrais étudiants — ce n'est pas un contenu
pédagogique certifié.

## Ce qui n'est pas inclus (limite assumée)

Un avatar patient conversationnel par IA nécessite une clé API payante,
qu'on ne peut jamais mettre dans du code qui tourne dans le navigateur de
n'importe quel visiteur sans l'exposer. Ça demande un serveur — donc un
site qui n'est plus 100% statique. Hors de portée de cette version.

## Contenu à valider avant usage réel

Les fiches FSRS et scénarios ECOS ont été rédigés pour démontrer le
fonctionnement du site, pas comme contenu pédagogique validé. À faire
relire par un formateur IFSI avant tout usage avec de vrais étudiants.

## Fichiers

```
index.html                 tableau de bord
ue.html                     catalogue des UE
revision.html               révision espacée (19 fiches)
cartes-mentales.html        synthèses de chapitre (7 domaines)
anatomie.html               schémas anatomiques 2D
ecos.html                    simulations ECOS
apprendre.html                méthodes de révision
assets/style.css             système de design (couleurs, typo, composants)
assets/nav.js                  génère la barre de navigation
assets/icons.js                icônes SVG inline
assets/data.js                  données (UE, fiches FSRS, scénarios ECOS)
assets/chapter-maps.js           cartes mentales de chapitre
assets/fsrs.js                    moteur de répétition espacée simplifié
assets/anatomy-mapping.js          lexique + coordonnées des schémas anatomiques
```

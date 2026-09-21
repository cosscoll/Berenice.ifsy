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
- **Révision** : 8 fiches de démonstration, répétition espacée simplifiée
  (voir `assets/fsrs.js` — réimplémentation maison, pas la librairie
  `ts-fsrs` originale). Progression sauvegardée dans le navigateur
  (`localStorage`) : pas de compte, pas de synchronisation entre appareils.
- **Anatomie** : schémas 2D en SVG fait main (silhouette + repères colorés
  par système), légendés en français/anglais. **Ce ne sont pas des photos
  ou illustrations médicales réelles téléchargées** — un choix délibéré :
  je n'avais aucune garantie de disposer d'URLs d'images stables et
  correctement licenciées à héberger de façon fiable dans un site statique
  destiné à être publié. Le schéma est simplifié, à visée de repérage
  général, pas à l'échelle. Pour un vrai atlas détaillé, voir le lien vers
  `ashemag/human-atlas` dans la page.
- **Simulation ECOS** : 11 cas cliniques, grille d'auto-évaluation. Pas
  d'avatar IA — à jouer en binôme, un camarade ou un formateur incarnant le
  patient à l'oral.

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
revision.html               révision espacée
anatomie.html               schémas anatomiques 2D
ecos.html                    simulations ECOS
assets/style.css             système de design (couleurs, typo, composants)
assets/nav.js                  génère la barre de navigation
assets/icons.js                icônes SVG inline
assets/data.js                  données (UE, fiches FSRS, scénarios ECOS)
assets/fsrs.js                   moteur de répétition espacée simplifié
assets/anatomy-mapping.js         lexique + coordonnées des schémas anatomiques
```

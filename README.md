# Plateforme e-learning IFSI — version statique

Version 100% statique (HTML/CSS/JS pur, aucune dépendance à installer) de la
plateforme e-learning IFSI. Catalogue des UE, révision espacée (FSRS
simplifié), cartes mentales, viewer anatomique 3D, simulations ECOS en
auto-évaluation.

## Mise en ligne (GitHub Pages) — aucune commande à taper

1. Créez un dépôt GitHub (ou réutilisez-en un vide).
2. Glissez-déposez les 9 fichiers de ce dossier (en conservant la structure :
   les 5 `.html` à la racine, les 4 fichiers dans un sous-dossier `assets/`).
3. Allez dans **Settings → Pages** du dépôt.
4. Sous "Branch", choisissez `main` et le dossier `/ (root)`, puis
   **Save**.
5. GitHub vous donne une URL du type `https://<utilisateur>.github.io/<repo>/`
   — le site est en ligne après 1-2 minutes.

Aucun `npm install`, aucun serveur, aucune base de données : les fichiers
sont servis tels quels par GitHub Pages.

## Ce qui fonctionne réellement

- **Catalogue UE** : les 59 UE du référentiel 2026, par bloc de semestres.
- **Révision FSRS** : 8 fiches de démonstration, avec un algorithme de
  répétition espacée simplifié (voir `assets/fsrs.js` pour le détail — ce
  n'est pas la librairie `ts-fsrs` originale, réécrite ici sans dépendance).
  Votre progression est sauvegardée dans le stockage local de VOTRE
  navigateur (`localStorage`) : pas de compte, mais pas de synchronisation
  entre appareils non plus, et les données disparaissent si vous videz le
  cache du navigateur.
- **Anatomie 3D** : un modèle géométrique de repère (pas un vrai modèle
  anatomique), avec un sélecteur de système et un lexique français de 64
  structures. Voir le lien vers `ashemag/human-atlas` dans la page pour la
  source d'un vrai modèle à intégrer plus tard.
- **Simulation ECOS** : 11 cas cliniques avec grille d'auto-évaluation. Pas
  d'avatar IA (voir plus bas) — à jouer en binôme, un camarade ou un
  formateur incarnant le patient à l'oral.

## Ce qui n'est PAS inclus (limite assumée)

L'avatar patient conversationnel par IA (WebRTC + OpenAI Realtime +
TalkingHead) de la version précédente du projet **ne peut pas** exister dans
un site 100% statique : il nécessite une clé API OpenAI payante, qui ne peut
jamais être mise dans du code exécuté côté navigateur sans être exposée à
n'importe quel visiteur du site. Une vraie version avec avatar IA nécessite
un serveur (backend) qui protège cette clé — c'est l'objet de l'autre version
du projet (voir historique de la conversation), qui elle nécessite une
installation complète.

## Contenu à valider avant usage réel

Les 8 fiches FSRS et les 11 scénarios ECOS ont été rédigés pour démontrer le
fonctionnement technique du site, **pas comme contenu pédagogique validé**.
Avant tout usage avec de vrais étudiants, faire relire par un formateur IFSI.

## Fichiers

```
index.html            page d'accueil
ue.html                catalogue des UE
revision.html          révision FSRS
anatomie.html          viewer anatomique 3D
ecos.html               simulations ECOS
assets/style.css        styles communs
assets/data.js           données (UE, fiches FSRS, scénarios ECOS)
assets/fsrs.js            moteur de répétition espacée simplifié
assets/anatomy-mapping.js  lexique anatomique français
```

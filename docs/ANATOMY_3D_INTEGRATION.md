# Intégration du modèle anatomique 3D réel

Ce guide décrit comment remplacer le placeholder actuel du viewer par le vrai
modèle issu de `ashemag/human-atlas` (2234 maillages BodyParts3D, MIT + CC BY 4.0).
**Ces étapes nécessitent un accès réseau et n'ont pas pu être exécutées dans cet
environnement** — c'est un guide à suivre sur votre machine.

## 1. Récupérer les assets compressés

```bash
git clone https://github.com/ashemag/human-atlas.git /tmp/human-atlas
cd /tmp/human-atlas
npm install
# Le dépôt embarque ses propres scripts de compression (voir son README) :
#   optimize-anatomy.mjs   -> simplifie la géométrie (marge d'erreur ~0,2%)
#   compress-models.mjs    -> compression DRACO + textures KTX2
npm run build   # ou la commande équivalente indiquée dans leur README à cette date
```

Les fichiers `.glb` compressés qui en résultent sont ce qu'il faut copier dans
`ifsi-platform/frontend/public/models/`.

## 2. Copier les décodeurs DRACO/KTX2

Ces binaires sont nécessaires côté client pour décompresser les modèles :

```bash
mkdir -p ifsi-platform/frontend/public/draco ifsi-platform/frontend/public/basis
cp /tmp/human-atlas/node_modules/three/examples/jsm/libs/draco/* \
   ifsi-platform/frontend/public/draco/
cp /tmp/human-atlas/node_modules/three/examples/jsm/libs/basis/* \
   ifsi-platform/frontend/public/basis/
```

(`DracoLoader.js` et `AnatomyViewer.jsx` du projet pointent déjà vers
`/draco/` et `/basis/` — aucune modification de code nécessaire pour ça.)

## 3. Brancher le modèle dans l'app

Dans `frontend/src/pages/Anatomy3DPage.jsx`, remplacer :

```jsx
<AnatomyViewer />
```

par :

```jsx
<AnatomyViewer modelUrl="/models/full-body.glb" />
```

`AnatomyViewer.jsx` bascule automatiquement du placeholder au vrai modèle dès
que `modelUrl` est fourni (voir le composant `LoadedModel`).

## 4. Attribution obligatoire (licence CC BY 4.0)

Les données anatomiques viennent de BodyParts3D (Database Center for Life
Science). La licence CC BY 4.0 impose de créditer explicitement. Ajouter dans
le footer de l'app ou une page "Crédits" :

> Modèle anatomique basé sur BodyParts3D © The Database Center for Life
> Science, sous licence Creative Commons Attribution 4.0 International.
> Implémentation dérivée de ashemag/human-atlas (licence MIT).

## 5. Nomenclature française (TA2)

Le dépôt source ne fournit les noms qu'en anglais. Un point de départ de
mapping anglais → français a été créé dans
`frontend/src/data/anatomy/ta2-fr-mapping.json` (11 systèmes, 64 structures).
**Ce mapping est une ébauche non validée cliniquement** — à faire relire par
un formateur ou un anatomiste avant tout usage pédagogique réel, et à
compléter au fur et à mesure (le vrai modèle expose 2234 maillages nommés,
contre 64 termes mappés ici).

Pour l'utiliser dans le viewer, croiser l'identifiant FMA/nom anglais exposé
par chaque maillage GLTF avec ce fichier, et afficher le libellé français
correspondant dans l'interface (tooltip au survol, panneau de sélection).

## 6. Limite connue à communiquer aux utilisateurs

Le modèle est un individu de référence masculin adulte : pas de variations
pédiatriques ni d'anatomie féminine spécifique. À signaler clairement dans
l'interface si des UE portant sur la santé de la femme ou la pédiatrie
s'appuient sur ce viewer.

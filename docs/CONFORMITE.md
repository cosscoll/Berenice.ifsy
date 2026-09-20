# Conformité & décisions issues de la recherche approfondie

Ce document synthétise les points de la recherche externe (Gemini, recherche
avancée) qui ont été **vérifiés indépendamment** avant intégration au projet,
et liste les décisions techniques qui en découlent. Chaque affirmation
importante a été recoupée avec au moins une source primaire avant d'être
traduite en code.

## 1. Référentiel infirmier 2026 — confirmé

- Décret n°2026-130 et arrêté du 20 février 2026, publiés au JO le 25 février
  2026, application aux étudiants entrant en formation à compter du
  1er septembre 2026. Le référentiel de 2009 reste en vigueur pour les
  promotions déjà engagées jusqu'à son abrogation (30 juin 2030).
- **Implication non traitée dans ce projet** : la plateforme ne gère
  aujourd'hui qu'un seul référentiel. Gérer deux curricula en parallèle
  (2009 et 2026) pendant la période de transition nécessiterait un champ
  `referentiel` sur les modèles UE/Étudiant — non implémenté, à prévoir si
  la plateforme doit servir des promotions antérieures à 2026.
- Aucune API officielle ne publie la maquette pédagogique en JSON/XML : la
  saisie manuelle des UE (déjà faite au Livrable 3) reste la seule option.

## 2. Hébergement HDS & RGPD

- Confirmé : la certification HDS interne est un projet à part entière
  (9-18 mois, SMSI, audit COFRAC) — la délégation à un hébergeur déjà
  certifié (périmètres 1-4 pris en charge par le fournisseur) est la voie
  réaliste pour ce projet.
- **Action à prendre avant toute mise en production** : choisir un
  hébergeur HDS v2 opérant en UE/EEE et signer un contrat de sous-traitance
  RGPD avec lui. Non fait dans ce projet (relève d'une décision contractuelle,
  pas de code).
- Point de vigilance confirmé : les flux vocaux WebRTC captés pendant les
  sessions ECOS sont des données sensibles si analysés pour en déduire des
  émotions. **Décision retenue** : ne pas conserver l'audio brut au-delà de
  la session (seule la transcription texte est persistée, dans
  `ECOSEvaluation.transcript`).

## 3. Modèle 3D anatomique

- Le dépôt **ashemag/human-atlas** (TypeScript/React/Three.js, MIT) est
  confirmé actif, avec 2234 maillages BodyParts3D. Licence des données :
  **CC BY 4.0** (attribution obligatoire à BodyParts3D / DBCLS).
- **Décision** : `AnatomyViewer.jsx` documente maintenant cette source comme
  référence à intégrer (voir commentaire dans le fichier). L'intégration
  réelle du modèle GLTF reste à faire — c'est un travail de conversion/mapping,
  pas juste un changement de configuration.
- Limite confirmée et actée : pas de nomenclature TA2 française prête à
  l'emploi. Un mapping manuel (FMA → CISMeF/SNOMED CT France) reste nécessaire.

## 4. Avatar conversationnel — décision de coût prise

- Tarifs OpenAI Realtime vérifiés (juillet 2026) : `gpt-realtime-2.1`
  (32$/64$ par million de tokens audio in/out) vs `gpt-realtime-2.1-mini`
  (moins cher, ~0,02-0,05 $/min en usage réel).
- **Décision appliquée dans le code** : les scénarios ECOS ont désormais un
  champ `model_tier` (`standard` | `complex`). Les scénarios à forte charge
  relationnelle (crise d'angoisse, annonce palliative, ETP) utilisent le
  modèle flagship ; les autres (AFGSU, transfusion, chute...) utilisent le
  modèle mini, moins coûteux. Voir `openaiRealtimeBridge.js`.
- Alternative souveraine identifiée (Kyutai Moshi, Apache 2.0, full-duplex,
  latence <200ms) : **non intégrée** dans ce lot — c'est un changement
  d'architecture majeur (remplacer tout le pont OpenAI Realtime), à évaluer
  séparément si la souveraineté des données devient un critère bloquant.

## 5. NANDA-I — risque identifié, aucune intégration à ce jour

- Confirmé : la taxonomie NANDA-I est sous licence commerciale
  (Thieme/Elsevier), pas utilisable librement dans un outil diffusé aux
  étudiants sans accord contractuel.
- **Vérification faite sur ce projet** : aucun scénario ECOS ni fiche FSRS
  livrés jusqu'ici ne référence la taxonomie NANDA-I. Aucune correction
  nécessaire, mais **point de vigilance pour la suite** : ne pas ajouter de
  listes déroulantes "diagnostics NANDA-I" sans licence. Alternative
  recommandée par la recherche : SNOMED CT (édition française, gratuite via
  l'ANS) ou les 14 besoins fondamentaux de Virginia Henderson.

## 6. FSRS — version corrigée

- La version réellement stable au moment de la recherche est **ts-fsrs
  5.2.1** (et non 3.5.7 comme initialement codé, ni 5.4.1 comme indiqué par
  erreur dans le rapport). **Corrigé** dans les deux `package.json`, et le
  code (`fsrsScheduler.js`, `fsrsEngine.js`) utilise maintenant l'API
  moderne `scheduler.next(card, date, rating)` pour appliquer une note.

## 7. EU AI Act — supervision humaine implémentée

- Confirmé : un système d'IA qui évalue des résultats d'apprentissage est
  classé **"haut risque"** (Annexe III). La supervision humaine est
  obligatoire avant toute décision définitive (validation d'ECTS).
- **Implémenté** : nouveau modèle `ECOSEvaluation` — le score calculé par
  l'avatar IA est **toujours provisoire** (`validatedByFormateur: null`)
  tant qu'un formateur ne l'a pas relu et validé via
  `PATCH /api/ecos/evaluations/:id/validate`. Aucune note IA ne peut devenir
  définitive sans cette étape.

## Ce qui reste hors-code (décisions contractuelles/organisationnelles)

- Choix effectif de l'hébergeur HDS et signature du contrat de sous-traitance
- Nomination d'un DPO
- Validation des 11 scénarios ECOS par la SoFraSimS / un formateur IFSI
- Décision sur l'intégration ou non de Kyutai Moshi pour la souveraineté
- Gestion du double référentiel (2009/2026) si des promotions antérieures
  utilisent la plateforme

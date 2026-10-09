# Protocole de qualité éditoriale — IFSI Platform

**Statut** : version bêta pédagogique, non validée pour la pratique clinique. Ce document est une procédure de travail, pas une certification.

## Avant de publier un cours médical

1. Vérifier la **version du référentiel applicable** (nouvelle promotion 2026 ou ancien cursus) et distinguer domaine, UE et compétence. Source maîtresse : [annexe III de l'arrêté du 20 février 2026](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/).
2. Identifier au moins **une source primaire, professionnelle ou réglementaire** (HAS, OMS, Légifrance, Santé publique France, assurance maladie, société savante reconnue). Vérifier la date, la portée et la version en vigueur.
3. Distinguer systématiquement les **faits vérifiés**, **exemples fictifs**, **hypothèses**, **informations locales** et **pratiques nécessitant une prescription ou un protocole**.
4. Ne jamais produire, sur cette plateforme, de posologie personnalisée, de décision thérapeutique patient, de protocole d'oxygénothérapie improvisé, ni de diagnostic réel.
5. Obtenir une **relecture par au moins un professionnel infirmier ou formateur compétent** pour les contenus cliniques à enjeu avant de les marquer comme validés. En cas de désaccord, conserver le statut « à relire ».
6. Vérifier la cohérence entre le cours, le quiz, le cas clinique, l'explication de la réponse, la source et l'enseignement officiel associé.
7. Ajouter un commentaire de version avec la date, la description de la modification, l'identité et le rôle du valideur lorsque la validation a effectivement eu lieu.

## Matrice et couverture

La page `programme.html` présente les **15 UE officielles**, leurs ECTS théoriques et des liens indicatifs. La présence d'un cours dans cette carte **ne prouve pas qu'une UE est couverte**. Les enseignements recensés comme manquants doivent faire l'objet de contenus spécifiques ou d'une référence vers une ressource extérieure fiable.

La progression « Année 1 / 2 / 3 » du site est un ordre de révision indicatif : la maquette nationale et sa déclinaison locale ne doivent pas être confondues.

## Confidentialité et sécurité

Le site ne dispose pas de compte, de base clinique, ni de synchronisation de progression. Les données locales peuvent être supprimées par le navigateur et exportées. **Ne pas entrer de données de patients identifiables** dans les notes, le stage ou le chatbot.

Le mode hors connexion conserve des ressources publiques, mais elles peuvent devenir **obsolètes**. Il ne remplace jamais des protocoles institutionnels mis à jour.

## Recette technique et accessibilité

Automatisations disponibles : `node tests/verify-site.mjs`, `node tests/chat-relevance.mjs`, `node tests/browser-smoke.mjs`, `node tests/pwa-check.mjs` (nécessite Playwright/Chromium pour ces deux derniers). Tester au moins 390 px et 1440 px, navigation au clavier, focus, liens, stockage et consultation hors ligne.

À faire manuellement : relecture du rendu par un utilisateur réel, tests écran lecteur, contrôle des couleurs/contrastes, performance de chargement, recherche des liens externes obsolètes et vérification médicale.

## Limites assumées

Aucune certification, conformité clinique, exhaustivité du programme ou fiabilité médicale ne peut être revendiquée sans validation externe. Le chatbot actuel est une **recherche locale sourcée**, pas un modèle IA génératif ; un véritable tuteur IA nécessiterait un backend sécurisé, un fournisseur de modèle autorisé, des frais éventuels, un contrôle des réponses et des conditions de confidentialité adaptées.

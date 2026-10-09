# Revue finale — IFSI Platform

**Date : 9 octobre 2026**

## État de la livraison

La plateforme est accessible en ligne sous <https://cosscoll.github.io/Berenice.ifsy/> et dispose d'un pipeline GitHub Actions pour vérifier le HTML, les contenus, le chatbot, la sauvegarde locale, la PWA et les parcours navigateur sur deux tailles d'écran.

Les contrôles automatiques ne sont **pas** une certification médicale, juridique, RGPD ni une évaluation WCAG complète.

## Fonctionnalités disponibles

Cours (22), ateliers complémentaires (22), quiz (72), cas fictifs (15), parcours indicatif sur trois niveaux, progression et planning, assistant de recherche local, cartographie des 15 UE du référentiel 2026, sauvegarde locale exportable et réimportable, mode hors connexion partiel.

## Corrigé dans la dernière passe

- Recherche du header : message clair en absence de résultat, Enter sur le premier résultat pertinent, repli vers la bibliothèque et attributs ARIA.
- Restauration de sauvegarde : contrôle du format, limite de 2 Mo, contrôle des noms des éléments locaux, confirmation avant import ; aucune transmission serveur.
- Planning / Quiz : accès direct aux questions arrivées à échéance lorsqu'elles existent.
- Versionnage navigateur : rechargement coordonné des scripts et feuilles de style mis à jour.
- Maintenabilité : README et tests de non-régression actualisés.

## À vérifier sur des appareils réels

1. Installation de la PWA sur Android Chrome, puis iPhone Safari : icône, démarrage et reprise.
2. Ouverture d'un cours précédemment consulté en mode avion, puis retour en ligne ; informations d'alerte d'obsolescence visibles.
3. Navigation clavier et lecteur d'écran : menu Plus, recherche, chatbot, boutons de quiz et formulaires.
4. Export puis restauration d'une sauvegarde sur un navigateur différent.
5. Vérification manuelle du contraste, de la taille des cibles tactiles et des performances réseau lent.

## Non couvert / non validé

- L'intégralité du référentiel national et la répartition exacte des enseignements par semestre.
- La relecture professionnelle des informations de santé, recommandations et cas cliniques.
- Un véritable tuteur IA génératif connecté à un serveur sécurisé.
- Les comptes utilisateurs, la synchronisation multisupport et des notifications planifiées.
- Une certification d'accessibilité, un avis juridique ou un contrôle de conformité exhaustif.

**Conclusion :** site bêta pédagogique fonctionnel, avec amélioration et entretien possibles. **Pas encore une formation officielle, exhaustive ou cliniquement validée.**

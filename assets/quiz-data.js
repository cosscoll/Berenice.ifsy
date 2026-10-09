const QUIZ_BANK = [
  {
    id: 'q-hygiene-1',
    topic: 'Hygiène',
    question: "Quel est le principe des précautions standard ?",
    choices: [
      "Elles s'appliquent uniquement aux patients infectés",
      "Elles s'appliquent à tout patient, quel que soit son statut infectieux connu",
      "Elles remplacent toutes les précautions complémentaires",
      "Elles concernent uniquement l'hygiène des mains"
    ],
    answer: 1,
    explanation: "Les précautions standard constituent le socle de prévention du risque infectieux et s'appliquent à toute prise en charge."
  },
  {
    id: 'q-hygiene-2',
    topic: 'Hygiène',
    question: "Parmi ces situations, laquelle fait partie des 5 moments de l'hygiène des mains de l'OMS ?",
    choices: [
      "Seulement avant d'entrer dans l'hôpital",
      "Après contact avec l'environnement du patient",
      "Uniquement après retrait de gants stériles",
      "Une fois au début de chaque poste"
    ],
    answer: 1,
    explanation: "Le contact avec l'environnement du patient fait partie des cinq indications majeures de l'hygiène des mains."
  },
  {
    id: 'q-medicament-1',
    topic: 'Médicaments',
    question: "La règle des 5B de l'administration médicamenteuse vise principalement à :",
    choices: [
      "Évaluer la douleur",
      "Sécuriser l'administration d'un médicament",
      "Déterminer un diagnostic médical",
      "Calculer un score de Glasgow"
    ],
    answer: 1,
    explanation: "Les 5B vérifient notamment le bon patient, le bon médicament, la bonne dose, la bonne voie et le bon moment."
  },
  {
    id: 'q-neuro-1',
    topic: 'Neurologie',
    question: "Quelle est l'étendue totale du score de Glasgow ?",
    choices: ["0 à 10", "1 à 12", "3 à 15", "5 à 20"],
    answer: 2,
    explanation: "Le score de Glasgow additionne ouverture des yeux (/4), réponse verbale (/5) et réponse motrice (/6), soit 3 à 15."
  },
  {
    id: 'q-douleur-1',
    topic: 'Douleur',
    question: "L'EVA est avant tout :",
    choices: [
      "Une échelle d'auto-évaluation de la douleur",
      "Un examen biologique",
      "Un score de risque d'escarre",
      "Une mesure de la saturation"
    ],
    answer: 0,
    explanation: "L'EVA permet au patient d'auto-évaluer l'intensité de sa douleur sur un continuum."
  },
  {
    id: 'q-ethique-1',
    topic: 'Éthique',
    question: "Un consentement aux soins valable doit notamment être :",
    choices: [
      "Tacite dans tous les cas",
      "Libre et éclairé",
      "Donné uniquement par écrit",
      "Demandé seulement avant une chirurgie"
    ],
    answer: 1,
    explanation: "L'information adaptée et l'absence de contrainte sont des éléments essentiels du consentement."
  },
  {
    id: 'q-dasri-1',
    topic: 'Hygiène',
    question: "Une aiguille usagée doit être éliminée :",
    choices: [
      "Dans une poubelle classique",
      "Dans un collecteur adapté aux objets perforants",
      "Dans un sac de linge",
      "Après recapuchonnage manuel"
    ],
    answer: 1,
    explanation: "Les objets piquants/coupants doivent être éliminés immédiatement dans un collecteur adapté, sans recapuchonnage."
  },
  {
    id: 'q-escarre-1',
    topic: 'Soins',
    question: "Dans l'échelle de Braden, un score plus bas traduit généralement :",
    choices: [
      "Un risque d'escarre plus élevé",
      "Une meilleure autonomie",
      "Une douleur moins importante",
      "Un meilleur état neurologique"
    ],
    answer: 0,
    explanation: "Le score de Braden estime le risque d'escarre : plus le score est bas, plus le risque est important."
  },
  {
    id: 'q-clinique-1',
    topic: 'Raisonnement clinique',
    question: "Dans une situation clinique, la première étape utile est généralement de :",
    choices: [
      "Choisir immédiatement un traitement",
      "Collecter et analyser les données pertinentes",
      "Rédiger la sortie du patient",
      "Ignorer les constantes si le patient parle"
    ],
    answer: 1,
    explanation: "Le raisonnement clinique commence par un recueil structuré de données puis leur analyse afin d'identifier les problèmes et priorités."
  },
  {
    id: 'q-transmission-1',
    topic: 'Communication',
    question: "L'objectif principal des transmissions professionnelles est de :",
    choices: [
      "Remplacer le dossier de soins",
      "Assurer la continuité et la sécurité de la prise en charge",
      "Éviter toute communication orale",
      "Donner uniquement les informations administratives"
    ],
    answer: 1,
    explanation: "Des transmissions pertinentes permettent la continuité, la coordination et la sécurité des soins."
  },
  {
    id: 'q-calcul-1',
    topic: 'Calculs',
    question: "Une perfusion de 500 mL doit passer en 5 heures. Quel débit moyen faut-il programmer en mL/h ?",
    choices: ["50 mL/h", "75 mL/h", "100 mL/h", "125 mL/h"],
    answer: 2,
    explanation: "Débit = volume / durée = 500 / 5 = 100 mL/h."
  },
  {
    id: 'q-calcul-2',
    topic: 'Calculs',
    question: "Vous disposez de 500 mg dans 10 mL. Quel volume correspond à 250 mg ?",
    choices: ["2,5 mL", "5 mL", "10 mL", "20 mL"],
    answer: 1,
    explanation: "250 mg représentent la moitié de 500 mg, donc la moitié de 10 mL : 5 mL."
  },
  {"id":"q-hygiene-3","topic":"Hygiène","question":"À quel moment l’OMS recommande-t-elle une hygiène des mains avant un soin ?","choices":["Après chaque pause uniquement","Avant un geste aseptique","Uniquement en fin de journée","Seulement en cas de gants souillés"],"answer":1,"explanation":"Avant un geste aseptique est l’un des cinq moments de l’OMS.","sourceUrl":"https://www.who.int/fr/publications/m/item/five-moments-for-hand-hygiene"},
  {"id":"q-hygiene-4","topic":"Hygiène","question":"Après le contact avec l’environnement immédiat d’un patient, que rappelle l’OMS ?","choices":["Aucun geste si le patient n’a pas été touché","L’hygiène des mains est indiquée","Seules les chaussures sont concernées","Il suffit de fermer la chambre"],"answer":1,"explanation":"Le cinquième moment de l’OMS concerne l’environnement du patient.","sourceUrl":"https://www.who.int/fr/publications/m/item/five-moments-for-hand-hygiene"},
  {"id":"q-hygiene-5","topic":"Hygiène","question":"Après un risque d’exposition à un liquide biologique, que faut-il prévoir ?","choices":["Une hygiène des mains adaptée","Un simple changement de blouse sans hygiène des mains","Rien si les mains paraissent propres","Uniquement un contrôle de température"],"answer":0,"explanation":"Le risque d’exposition aux liquides biologiques fait partie des cinq moments de l’hygiène des mains.","sourceUrl":"https://www.who.int/fr/publications/m/item/five-moments-for-hand-hygiene"},
  {"id":"q-2026-a","topic":"Référentiel 2026","question":"Quel domaine du référentiel 2026 traite notamment du raisonnement clinique infirmier ?","choices":["Domaine E","Domaine C","Domaine A","Domaine D"],"answer":2,"explanation":"Le domaine A est intitulé « sciences infirmières et raisonnement clinique ».","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-b","topic":"Référentiel 2026","question":"À quoi correspond le domaine B du référentiel 2026 ?","choices":["Uniquement les langues étrangères","Pratiques cliniques, qualité et gestion des risques","Exclusivement le droit du travail","Uniquement les stages en psychiatrie"],"answer":1,"explanation":"Il couvre notamment la pratique des soins, la qualité et les risques.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-c","topic":"Prévention","question":"Quel domaine aborde la prévention et la promotion de la santé ?","choices":["Domaine B","Domaine D","Domaine A","Domaine C"],"answer":3,"explanation":"Le domaine C traite de prévention et promotion de la santé, y compris santé environnementale.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-c2","topic":"Prévention","question":"Le domaine C s’intéresse à la santé de quel public ?","choices":["Seulement des patients hospitalisés","Personnes saines ou malades à tous les âges","Seulement les professionnels de santé","Exclusivement les adultes"],"answer":1,"explanation":"Le domaine C couvre la promotion de la santé individuelle, populationnelle et communautaire.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-c3","topic":"Prévention","question":"Quels enjeux font partie du domaine C ?","choices":["Uniquement la chirurgie","Santé publique, santé environnementale et santé au travail","Uniquement les admissions","Uniquement les résultats biologiques"],"answer":1,"explanation":"Le référentiel 2026 intègre ces trois enjeux dans la prévention et la promotion de la santé.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-d","topic":"Communication","question":"Quel thème appartient au domaine D ?","choices":["Coordination des soins et collaboration en équipe","Uniquement l’anatomie","Uniquement les statistiques","Uniquement les calculs de débit"],"answer":0,"explanation":"Le domaine D traite de communication, collaboration, coordination et leadership.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-d2","topic":"Communication","question":"Quel est le rôle du leadership dans le domaine D ?","choices":["Éviter les échanges en équipe","Accompagner personnes et équipe vers des objectifs de santé","Remplacer tous les autres professionnels","Supprimer les transmissions"],"answer":1,"explanation":"Le référentiel inclut le leadership au service des objectifs de santé et de l’amélioration du système.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-e","topic":"Recherche","question":"Que signifie l’utilisation de données probantes en soins infirmiers ?","choices":["Se fier uniquement à une rumeur","Intégrer des connaissances scientifiques pertinentes à sa pratique","Éviter toute recherche","N’utiliser que des vidéos non sourcées"],"answer":1,"explanation":"Le domaine E insiste sur l’utilisation des données probantes et la démarche scientifique.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-e2","topic":"Recherche","question":"Selon le référentiel 2026, à quoi servent les compétences linguistiques du domaine E ?","choices":["Uniquement au tourisme","Accéder à la littérature anglophone et accompagner des personnes non francophones","Remplacer la formation scientifique","Éviter les transmissions"],"answer":1,"explanation":"Le domaine E intègre les compétences linguistiques pour la littérature anglaise et l’accompagnement.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-ects","topic":"Référentiel 2026","question":"Combien de crédits ECTS valide-t-on sur les six semestres de la formation infirmière 2026 ?","choices":["90","120","180","240"],"answer":2,"explanation":"Le diplôme s’organise sur six semestres validés par 180 ECTS.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-stages","topic":"Référentiel 2026","question":"Combien de semaines d’enseignement clinique le référentiel 2026 prévoit-il ?","choices":["20","40","66","90"],"answer":2,"explanation":"Il comporte 66 semaines d’enseignement clinique réparties sur les trois années.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-stage-types","topic":"Stage","question":"Combien de grandes typologies de stages le référentiel de formation 2026 décrit-il ?","choices":["2","3","4","8"],"answer":2,"explanation":"L’annexe III décrit quatre typologies de stages, de la prise en soins aiguë à l’accompagnement de la vulnérabilité.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
  {"id":"q-2026-stage-reflexion","topic":"Stage","question":"Quelle démarche favorise l’analyse de ses actions et apprentissages pendant la formation ?","choices":["L’analyse réflexive","L’évitement de toute discussion","La mémorisation sans recul","La suppression des évaluations"],"answer":0,"explanation":"L’analyse réflexive est l’un des principes pédagogiques explicites du référentiel de formation.","sourceUrl":"https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053569082"},
 {"id":"q-v12-001","topic":"Urgences","question":"Quelle situation évoque en priorité un arrêt cardiaque ?","choices":["Une personne qui tousse","Une personne inconsciente qui ne respire pas normalement","Une personne qui dort normalement"],"answer":1,"explanation":"Une absence de réponse et de respiration normale fait partie des critères d’alerte des premiers secours.","sourceUrl":"https://www.croix-rouge.fr/les-gestes-de-premiers-secours/arret-cardiaque"},
 {"id":"q-v12-002","topic":"Urgences","question":"Lorsqu’un DAE est disponible dans une situation d’arrêt cardiaque, que faut-il faire ?","choices":["L’allumer et suivre ses instructions","Attendre une analyse personnelle du rythme","Le laisser éteint"],"answer":0,"explanation":"Le défibrillateur automatisé externe guide l’utilisateur ; ses instructions et celles des secours doivent être respectées.","sourceUrl":"https://www.croix-rouge.fr/les-gestes-de-premiers-secours/defibrillateur"},
 {"id":"q-v12-003","topic":"Cardiovasculaire","question":"Une nouvelle douleur thoracique évocatrice d’infarctus nécessite :","choices":["Une observation pendant plusieurs jours sans alerte","Une alerte urgente (15 ou 112 en France)","Une simple recherche internet"],"answer":1,"explanation":"L’infarctus est une urgence vitale et le délai d’intervention compte.","sourceUrl":"https://www.ameli.fr/assure/sante/themes/infarctus-myocarde/reconnaitre-infarctus-agir"},
 {"id":"q-v12-004","topic":"Cardiovasculaire","question":"Dans le suivi d’une maladie cardiaque chronique, quelle transmission est la plus utile ?","choices":["Un changement symptomatique décrit et daté","Une impression sans faits","Aucune transmission si la personne parle"],"answer":0,"explanation":"L’évolution d’une dyspnée ou d’un œdème doit être décrite dans son contexte et transmise.","sourceUrl":"https://www.ameli.fr/assure/sante/themes/infarctus-myocarde/reconnaitre-infarctus-agir"},
 {"id":"q-v12-005","topic":"Respiratoire","question":"Quels symptômes sont courants dans la BPCO ?","choices":["Toux, expectorations, dyspnée","Uniquement une douleur de genou","Perte de vision brutale seulement"],"answer":0,"explanation":"La BPCO peut s’accompagner de toux chronique, d’expectorations et d’essoufflement.","sourceUrl":"https://www.ameli.fr/assure/sante/themes/bpco-bronchite-chronique/symptomes-diagnostic-complications"},
 {"id":"q-v12-006","topic":"Respiratoire","question":"Une exacerbation de BPCO correspond principalement à :","choices":["Une guérison définitive","Une aggravation des symptômes respiratoires habituels","Une disparition de la toux à l’effort"],"answer":1,"explanation":"L’exacerbation est une aggravation inhabituelle qui peut nécessiter une évaluation médicale.","sourceUrl":"https://www.ameli.fr/assure/sante/themes/bpco-bronchite-chronique/symptomes-diagnostic-complications"},
 {"id":"q-v12-007","topic":"Neurologie","question":"Que signifie le T dans le moyen mnémotechnique VITE ?","choices":["Tension","Trouble de la parole","Température"],"answer":1,"explanation":"VITE : Visage, Impossible de bouger un membre, Trouble de la parole, Éviter le pire en composant le 15.","sourceUrl":"https://www.ameli.fr/assure/sante/urgence/pathologies/avc"},
 {"id":"q-v12-008","topic":"Neurologie","question":"Des symptômes évocateurs d’AVC qui disparaissent rapidement :","choices":["Excluent le besoin d’alerter","Peuvent correspondre à un AIT, qui est une urgence","Sont toujours sans risque"],"answer":1,"explanation":"Un AIT peut se manifester par des signes transitoires ; cela ne supprime pas la nécessité d’une alerte urgente.","sourceUrl":"https://www.ameli.fr/assure/sante/urgence/pathologies/avc"},
 {"id":"q-v12-009","topic":"Diabète","question":"Selon l’Assurance Maladie, l’hypoglycémie correspond à une glycémie :","choices":["Trop basse","Toujours normale","Sans aucun rapport avec le glucose"],"answer":0,"explanation":"Une hypoglycémie désigne une glycémie trop basse, avec un seuil usuel inférieur à 0,7 g/L dans le contexte du diabète.","sourceUrl":"https://www.ameli.fr/assure/sante/themes/diabete-adulte/diabete-symptomes-evolution/acido-cetose-hypoglycemie-hyperglycemie"},
 {"id":"q-v12-010","topic":"Diabète","question":"Parmi ces manifestations, lesquelles peuvent évoquer une hypoglycémie ?","choices":["Sueurs et tremblements","Une entorse isolée","Un changement de couleur des yeux"],"answer":0,"explanation":"Les sueurs et les tremblements figurent parmi les symptômes possibles, sans être spécifiques à eux seuls.","sourceUrl":"https://www.ameli.fr/assure/sante/themes/diabete-adulte/diabete-symptomes-evolution/acido-cetose-hypoglycemie-hyperglycemie"},
 {"id":"q-v12-011","topic":"Psychiatrie","question":"Quel mode de soin est privilégié lorsque l’état de la personne le permet ?","choices":["Soins consentis","Soins systématiquement imposés","Absence de droits du patient"],"answer":0,"explanation":"Le Code de la santé publique privilégie les soins psychiatriques libres lorsque l’état de la personne le permet.","sourceUrl":"https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006171187/2026-03-16/"},
 {"id":"q-v12-012","topic":"Psychiatrie","question":"Les soins psychiatriques sans consentement :","choices":["Peuvent être décidés librement par n’importe quel étudiant","Obéissent à des conditions et procédures légales spécifiques","Font disparaître tous les droits"],"answer":1,"explanation":"Le dispositif est défini et encadré par la loi ; un étudiant n’en décide pas les modalités.","sourceUrl":"https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006171187/2026-03-16/"},
 {"id":"q-v12-013","topic":"Soins","question":"Quelle dimension aide à évaluer le risque d’escarre ?","choices":["Mobilité de la personne","Couleur des murs","Numéro du lit uniquement"],"answer":0,"explanation":"La mobilité et d’autres facteurs individuels influencent le risque d’escarre.","sourceUrl":"https://www.has-sante.fr/jcms/c_271996/fr/prevention-et-traitement-des-escarres-de-l-adulte-et-du-sujet-age"},
 {"id":"q-v12-014","topic":"Soins","question":"Une échelle de risque d’escarre telle que Braden :","choices":["Remplace complètement l’observation clinique","Aide le jugement clinique sans le remplacer","Prescrit à elle seule un pansement"],"answer":1,"explanation":"Une échelle soutient une démarche d’évaluation personnalisée et ne suffit pas à décider seule des soins.","sourceUrl":"https://www.has-sante.fr/jcms/c_271996/fr/prevention-et-traitement-des-escarres-de-l-adulte-et-du-sujet-age"},
 {"id":"q-v12-015","topic":"Gériatrie","question":"Pourquoi faut-il étudier plusieurs facteurs après des chutes répétées ?","choices":["Parce que médicaments, mobilité et environnement peuvent interagir","Parce que l’âge explique tout à lui seul","Parce que les causes ne peuvent jamais être modifiées"],"answer":0,"explanation":"La prévention des chutes repose sur une approche multifactorielle et coordonnée.","sourceUrl":"https://www.has-sante.fr/jcms/c_793371/fr/evaluation-et-prise-en-charge-des-personnes-agees-faisant-des-chutes-repetees"},
 {"id":"q-v12-016","topic":"Gériatrie","question":"Quel élément est pertinent dans le recueil d’informations sur une chute ?","choices":["Le contexte et les antécédents de chutes","Uniquement la météo d’une autre ville","La marque du téléphone"],"answer":0,"explanation":"Le contexte, les circonstances, la mobilité et les antécédents orientent l’évaluation du risque.","sourceUrl":"https://www.has-sante.fr/jcms/c_793371/fr/evaluation-et-prise-en-charge-des-personnes-agees-faisant-des-chutes-repetees"},
 {"id":"q-v12-017","topic":"Pédiatrie","question":"Chez un nourrisson de moins de trois mois, la fièvre :","choices":["Ne justifie jamais de consultation","Constitue un motif de consultation urgente","Ne peut pas être mesurée"],"answer":1,"explanation":"L’Assurance Maladie rappelle que la fièvre chez un nourrisson de moins de trois mois requiert une consultation en urgence.","sourceUrl":"https://www.ameli.fr/assure/sante/themes/fievre-enfant/bons-reflexes-cas-faut-consulter"},
 {"id":"q-v12-018","topic":"Pédiatrie","question":"Lors de l’observation d’un enfant, pourquoi l’âge est-il important ?","choices":["Il influe sur les repères et la communication adaptés","Il n’a aucun impact","Il impose les valeurs de référence de l’adulte"],"answer":0,"explanation":"Les repères cliniques et les possibilités de communication changent avec l’âge.","sourceUrl":"https://www.ameli.fr/assure/sante/themes/fievre-enfant/bons-reflexes-cas-faut-consulter"},
 {"id":"q-v12-019","topic":"Biologie","question":"Les valeurs de référence d’un laboratoire :","choices":["Peuvent varier selon les méthodes et l’âge","Sont identiques pour tous, dans tous les laboratoires","Sont des diagnostics définitifs"],"answer":0,"explanation":"Les intervalles de référence sont propres à des méthodes et peuvent dépendre de caractéristiques individuelles.","sourceUrl":"https://www.ameli.fr/assure/sante/examen/analyse/lire-resultats-prise-sang"},
 {"id":"q-v12-020","topic":"Biologie","question":"Un résultat biologique légèrement hors intervalle :","choices":["Établit toujours une maladie","Doit être interprété en contexte","Autorise un traitement autonome"],"answer":1,"explanation":"Un résultat isolé hors intervalle n’est pas systématiquement révélateur d’une maladie.","sourceUrl":"https://www.ameli.fr/assure/sante/examen/analyse/lire-resultats-prise-sang"},
 {"id":"q-v12-021","topic":"Calculs","question":"Dans un exercice fictif, quel débit correspond à 240 mL répartis sur 4 heures ?","choices":["960 mL/h","60 mL/h","4 mL/h"],"answer":1,"explanation":"240 ÷ 4 = 60 mL/h ; ce calcul pédagogique ne vaut pas validation de perfusion réelle.","sourceUrl":"https://www.has-sante.fr/jcms/c_1104570/fr/guide-outil-securisation-autoevaluation-administration-medicaments-partie3-boite-a-outils"},
 {"id":"q-v12-022","topic":"Calculs","question":"La règle des 5B inclut-elle une vérification de la voie ?","choices":["Oui","Non","Seulement lors d’un examen biologique"],"answer":0,"explanation":"La bonne voie fait partie des cinq vérifications de la sécurisation médicamenteuse.","sourceUrl":"https://www.has-sante.fr/jcms/c_1104570/fr/guide-outil-securisation-autoevaluation-administration-medicaments-partie3-boite-a-outils"},
 {"id":"q-v12-023","topic":"Communication","question":"Quel comportement facilite le travail interprofessionnel ?","choices":["Une transmission factuelle et adaptée","Une information cachée volontairement","Une interprétation présentée comme un fait"],"answer":0,"explanation":"La coordination repose sur des échanges fiables, pertinents et respectueux du cadre de confidentialité.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/2026-03-03"},
 {"id":"q-v12-024","topic":"Communication","question":"Dans le domaine D du référentiel 2026, le leadership :","choices":["Exclut la collaboration","S’articule avec communication et coordination","Consiste uniquement à décider seul"],"answer":1,"explanation":"La communication, la coordination, la collaboration et le leadership figurent dans le domaine D.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/2026-03-03"},
  {"id":"q-v15-001","topic":"Médicaments","question":"Dans une simulation, la forme du médicament préparée ne correspond pas à la prescription. Quelle réponse est appropriée ?","choices":["Terminer l'administration, puis signaler le doute","Choisir la forme qui semble la plus fréquente","Faire clarifier la discordance avant l'acte"],"answer":2,"explanation":"Les vérifications de sécurisation comprennent le bon médicament et la concordance avec la prescription. Un doute doit être clarifié.","sourceUrl":"https://www.has-sante.fr/jcms/c_1104569/fr/guide-outils-securisation-autoevaluation-administration-medicaments-partie2-mettre-en-oeuvre.pdf","topicId":"pharmaco"},
  {"id":"q-v15-002","topic":"Médicaments","question":"Quelle vérification complète la bonne dose, la bonne voie et le bon moment dans la règle des 5B ?","choices":["Le bon patient et le bon médicament","La bonne chambre et le bon service","La bonne heure de sortie et la bonne spécialité"],"answer":0,"explanation":"Les cinq B : bon patient, bon médicament, bonne dose, bonne voie, bon moment.","sourceUrl":"https://www.has-sante.fr/jcms/c_1104569/fr/guide-outils-securisation-autoevaluation-administration-medicaments-partie2-mettre-en-oeuvre.pdf","topicId":"pharmaco"},
  {"id":"q-v15-003","topic":"Douleur","question":"Une personne en mesure de s'exprimer décrit l'intensité de sa douleur en choisissant une note de 0 à 10. De quel outil s'agit-il ?","choices":["Échelle verbale simple","Échelle numérique","Échelle de fragilité"],"answer":1,"explanation":"L'échelle numérique est une méthode d'autoévaluation exprimée par une note de 0 à 10.","sourceUrl":"https://www.has-sante.fr/upload/docs/application/pdf/2017-12/consignes_prise_en_charge_douleur_2018.pdf","topicId":"douleur"},
  {"id":"q-v15-004","topic":"Douleur","question":"Quel élément est nécessaire pour comparer deux autoévaluations de douleur ?","choices":["Comparer des chiffres isolés sans connaître les circonstances","Changer systématiquement d'outil sans le noter","Noter l'échelle utilisée, le moment et le contexte"],"answer":2,"explanation":"Le suivi nécessite de connaître l'outil utilisé ainsi que le contexte de la mesure.","sourceUrl":"https://www.has-sante.fr/upload/docs/application/pdf/2017-12/consignes_prise_en_charge_douleur_2018.pdf","topicId":"douleur"},
  {"id":"q-v15-005","topic":"Éthique","question":"Une personne a accepté une participation à un examen clinique d'enseignement. Quelle règle s'applique ?","choices":["Le consentement préalable reste requis","La participation à l'enseignement supprime ses droits","L'étudiant décide seul du consentement"],"answer":0,"explanation":"L'article L1111-4 prévoit le consentement préalable pour l'examen dans le cadre d'un enseignement clinique.","sourceUrl":"https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054137430","topicId":"consentement"},
  {"id":"q-v15-006","topic":"Éthique","question":"Une personne interrompt son accord pendant un échange sur un soin fictif. Quel principe général retenir ?","choices":["Un accord donné une fois ne change jamais","La volonté de la personne doit être prise en compte et l'équipe informée","L'étudiant peut passer outre sans explication"],"answer":1,"explanation":"Le consentement libre et éclairé peut être retiré à tout moment ; les cas particuliers relèvent du cadre légal.","sourceUrl":"https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054137430","topicId":"consentement"},
  {"id":"q-v15-007","topic":"Raisonnement clinique","question":"Une observation indique « la personne répond plus lentement qu'auparavant ». Quelle distinction est correcte ?","choices":["Il s'agit d'une hypothèse de diagnostic certaine","C'est un résultat d'analyse biologique","C'est un fait à contextualiser avant toute interprétation"],"answer":2,"explanation":"Le raisonnement clinique distingue observations factuelles et hypothèses. Ce changement doit être contextualisé et transmis si nécessaire.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/","topicId":"demarche"},
  {"id":"q-v15-008","topic":"Raisonnement clinique","question":"Après une action menée dans une simulation, quelle étape donne du sens au suivi ?","choices":["Réévaluer les observations et transmettre l'évolution","Conserver une conclusion sans revoir les faits","Éviter toute réflexion sur le résultat"],"answer":0,"explanation":"Une démarche clinique inclut la réévaluation des effets et la transmission des informations pertinentes.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/","topicId":"demarche"},
  {"id":"q-v15-009","topic":"Recherche","question":"Une publication conclut à un effet chez un groupe limité. Quel risque pose une généralisation immédiate à tous les patients ?","choices":["Aucun, les résultats sont universels","Ignorer les caractéristiques de la population et les limites de l'étude","Améliorer automatiquement la valeur scientifique"],"answer":1,"explanation":"La portée d'un résultat dépend notamment de la population, de la méthode et des limites.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/","topicId":"recherche"},
  {"id":"q-v15-010","topic":"Recherche","question":"Quel réflexe est pertinent face à deux études aux résultats différents ?","choices":["Ne lire aucune des deux","Ne retenir que le titre le plus affirmatif","Comparer les méthodes, les populations et les limites"],"answer":2,"explanation":"Une lecture critique cherche des différences de contexte et de méthode avant de conclure.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/","topicId":"recherche"},
  {"id":"q-v15-011","topic":"Biologie","question":"Un compte rendu présente un chiffre biologique sans son unité. Quelle attitude est appropriée ?","choices":["Demander l'unité et le contexte du résultat","Interpréter avec une unité supposée","Présenter immédiatement un diagnostic"],"answer":0,"explanation":"Une valeur biologique doit être lue avec son unité et l'intervalle du laboratoire, puis interprétée dans son contexte.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/","topicId":"biologie"},
  {"id":"q-v15-012","topic":"Neurologie","question":"Une personne présente une perte brusque de vision d'un œil qui disparaît ensuite. Que faut-il envisager ?","choices":["L'absence de gravité puisqu'elle récupère","Une alerte urgente car un AIT est possible","Une simple fatigue certaine"],"answer":1,"explanation":"Un trouble visuel transitoire peut être un signe d'AIT ; la disparition des symptômes ne supprime pas l'urgence.","sourceUrl":"https://www.ameli.fr/assure/sante/urgence/pathologies/avc","topicId":"neurologie"},
  {"id":"q-v15-013","topic":"Soins","question":"Dans un travail sur la prévention des escarres, quelle analyse est la plus pertinente ?","choices":["Considérer un seul facteur pour toutes les personnes","Choisir le même support pour tous","Évaluer les facteurs de risque individuels avec l'équipe"],"answer":2,"explanation":"La prévention des escarres s'appuie sur une évaluation multifactorielle et individualisée.","sourceUrl":"https://www.has-sante.fr/jcms/c_271996/fr/prevention-et-traitement-des-escarres-de-l-adulte-et-du-sujet-age","topicId":"plaies"},
  {"id":"q-v15-014","topic":"Communication","question":"Dans le cadre SAED, comment annoncer un besoin d'aide à un professionnel ?","choices":["Décrire la situation, le contexte, l'évaluation et la demande","Exprimer uniquement son inquiétude sans observation","Donner une conclusion non vérifiée"],"answer":0,"explanation":"SAED structure une communication entre professionnels autour de Situation, Antécédents, Évaluation et Demande.","sourceUrl":"https://www.has-sante.fr/jcms/c_1776178/fr/saed-un-guide-pour-faciliter-la-communication-entre-professionnels-de-sante","topicId":"communication"},
  {"id":"q-v15-015","topic":"Hygiène","question":"Avant un geste aseptique, quel moment OMS faut-il identifier ?","choices":["Le cinquième moment","Le deuxième moment","Aucun moment si les mains paraissent propres"],"answer":1,"explanation":"L'OMS désigne explicitement le moment avant un geste aseptique comme une indication d'hygiène des mains.","sourceUrl":"https://www.who.int/fr/publications/m/item/five-moments-for-hand-hygiene","topicId":"hygiene"},
  {"id":"q-v15-016","topic":"Prévention","question":"Quel objectif de prévention est le plus facile à évaluer dans un atelier fictif ?","choices":["Garantir l'absence de toute maladie future","Faire disparaître toutes les difficultés personnelles","Faire reformuler deux messages essentiels à la fin de l'atelier"],"answer":2,"explanation":"Une reformulation est une mesure observable de compréhension, sans prétendre mesurer un bénéfice clinique garanti.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/","topicId":"prevention"},
  {"id":"q-v15-017","topic":"Calculs","question":"Dans un exercice purement mathématique, combien représentent 400 mL divisés par 5 heures ?","choices":["80 mL/h","2 000 mL/h","20 mL/h"],"answer":0,"explanation":"400 ÷ 5 = 80 mL/h. Ce résultat mathématique n'autorise pas à programmer un dispositif réel.","sourceUrl":"https://www.has-sante.fr/jcms/c_1104569/fr/guide-outils-securisation-autoevaluation-administration-medicaments-partie2-mettre-en-oeuvre.pdf","topicId":"administration"},
  {"id":"q-v15-018","topic":"Gériatrie","question":"Une personne âgée rapporte plusieurs chutes et un isolement accru. Quel point est important ?","choices":["Ignorer ses appréhensions","Prendre en compte le vécu et rechercher plusieurs facteurs de risque avec l'équipe","Conclure que l'âge explique tout"],"answer":1,"explanation":"Le risque de chute nécessite une approche individualisée et une prise en compte des facteurs fonctionnels et du vécu.","sourceUrl":"https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/","topicId":"geriatrie"},
  {"id":"q-v15-019","topic":"Psychiatrie","question":"Dans la relation à une personne suivie en psychiatrie, quel type de formulation respecte les faits ?","choices":["Une étiquette de dangerosité sans observation","Une conclusion sur le diagnostic posée par l'étudiant","Une description précise d'un changement et de son contexte"],"answer":2,"explanation":"La communication doit rester factuelle, respectueuse et sans stigmatisation.","sourceUrl":"https://www.has-sante.fr/jcms/c_1776178/fr/saed-un-guide-pour-faciliter-la-communication-entre-professionnels-de-sante","topicId":"psychiatrie"},
  {"id":"q-v15-020","topic":"Urgences","question":"Lors d'un appel concernant un signe neurologique d'apparition soudaine, quelle information est particulièrement pertinente ?","choices":["Le moment connu d'apparition des symptômes","La couleur habituelle de la salle","La préférence alimentaire"],"answer":0,"explanation":"L'heure de début connue des signes et leur évolution sont des informations importantes à transmettre.","sourceUrl":"https://www.ameli.fr/assure/sante/urgence/pathologies/avc","topicId":"urgences"}
];

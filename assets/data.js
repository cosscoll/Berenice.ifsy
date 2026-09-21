/**
 * Toutes les données de démonstration du site, en JavaScript pur (aucune
 * requête réseau, aucune base de données). Reprend le contenu déjà validé
 * lors des lots précédents du projet (référentiel UE, fiches FSRS, scénarios
 * ECOS), simplement porté dans un format exploitable sans backend.
 */

const UE_CATALOGUE = [
  { bloc: 'S1-S2', titreBloc: 'Fondamentaux & Soins de base', ues: [
    { id: '1.1', titre: 'Psychologie, Sociologie, Anthropologie' },
    { id: '1.2', titre: 'Santé Publique et Économie de la Santé' },
    { id: '1.3', titre: 'Législation, Éthique, Déontologie' },
    { id: '2.1', titre: 'Biologie fondamentale' },
    { id: '2.2', titre: 'Cycles de la vie et grandes fonctions (Anatomie/Physiologie)' },
    { id: '2.3', titre: 'Santé, Maladie, Handicap, Accidents de la vie' },
    { id: '2.4', titre: 'Processus traumatiques' },
    { id: '2.10', titre: 'Infectiologie, Hygiène' },
    { id: '2.11', titre: 'Pharmacologie et Thérapeutiques (ADME, calculs de doses)' },
    { id: '3.1', titre: 'Raisonnement et démarche clinique infirmière' },
    { id: '4.1', titre: 'Soins de confort et de bien-être' },
    { id: '5.1', titre: 'Accompagnement dans la réalisation des soins quotidiens' },
  ]},
  { bloc: 'S3-S4', titreBloc: 'Processus pathologiques & Urgences', ues: [
    { id: '2.5', titre: 'Processus inflammatoires et infectieux' },
    { id: '2.6', titre: 'Processus psychopathologiques (SDRE / SDT)' },
    { id: '2.7', titre: 'Défaillances organiques et processus dégénératifs' },
    { id: '2.8', titre: 'Processus obstructifs, tumeurs' },
    { id: '2.11', titre: 'Pharmacologie et Thérapeutiques (AVK, Antalgiques)' },
    { id: '3.2', titre: 'Projet de soins infirmiers' },
    { id: '3.3', titre: 'Rôles infirmiers, organisation du travail et interprofessionnalité' },
    { id: '4.2', titre: 'Soins relationnels' },
    { id: '4.3', titre: "Soins d'urgence (AFGSU, RCP, Choc)" },
    { id: '4.4', titre: 'Thérapeutiques et contribution au diagnostic médical' },
    { id: '4.5', titre: 'Soins infirmiers et gestion des risques' },
    { id: '4.6', titre: 'Soins éducatifs et préventifs (ETP)' },
    { id: '5.3', titre: 'Communication et conduite de projet' },
    { id: '5.4', titre: 'Soins infirmiers et gestion des risques (analyse de situation)' },
  ]},
  { bloc: 'S5-S6', titreBloc: 'Expertise & Leadership', ues: [
    { id: '2.9', titre: 'Processus tumoraux complexes' },
    { id: '2.11', titre: 'Pharmacologie experte (Prescription infirmière)' },
    { id: '3.4', titre: 'Initiation à la démarche de recherche' },
    { id: '3.5', titre: 'Encadrement des professionnels de soins' },
    { id: '4.5', titre: 'Soins infirmiers et gestion des risques avancée' },
    { id: '4.7', titre: 'Soins palliatifs et de fin de vie (Loi Claeys-Leonetti)' },
    { id: '4.8', titre: 'Qualité des soins, évaluation des pratiques' },
    { id: '5.5', titre: 'Mise en œuvre des thérapeutiques et coordination des soins' },
    { id: '5.6', titre: 'Analyse de la qualité et traitement des données (Mémoire)' },
  ]},
];

const FSRS_DECK = [
  {
    id: 'card-avk', ue: '2.11', concept: 'AVK',
    front: "Surveillance AVK curatif = dosage de l'INR",
    back: 'Cible 2-3. Si > 5 : risque hémorragique.',
    md: '# AVK\n## Action\n## Surveillance\n### INR\n## Antidote\n### Vitamine K',
  },
  {
    id: 'card-ic', ue: '2.7', concept: 'Insuffisance cardiaque',
    front: "Quels sont les 4 signes cliniques cardinaux d'une décompensation cardiaque gauche ?",
    back: 'Dyspnée, orthopnée, crépitants bilatéraux, œdème aigu du poumon (OAP).',
    md: '# IC gauche\n## Signes\n### Dyspnée\n### Orthopnée\n### Crépitants\n### OAP',
  },
  {
    id: 'card-rcp', ue: '4.3', concept: 'AFGSU - Arrêt cardio-respiratoire',
    front: 'Rythme de la RCP adulte à 1 sauveteur ?',
    back: '30 compressions pour 2 insufflations. Fréquence 100-120/min, profondeur 5-6 cm.',
    md: '# RCP\n## Ratio 30:2\n## Fréquence\n## Profondeur',
  },
  {
    id: 'card-sdre', ue: '2.6', concept: 'SDRE',
    front: 'Que signifie SDRE et qui peut le prononcer ?',
    back: "Soins à la Demande d'un Représentant de l'État — prononcé par le préfet, sur péril imminent.",
    md: '# SDRE\n## Décideur\n### Préfet\n## Condition\n### Péril imminent',
  },
  {
    id: 'card-claeys', ue: '4.7', concept: 'Loi Claeys-Leonetti',
    front: 'Que instaure la loi Claeys-Leonetti (2016) ?',
    back: 'Un droit à la sédation profonde et continue jusqu\'au décès, sous conditions strictes.',
    md: '# Claeys-Leonetti\n## Sédation profonde et continue\n## Directives anticipées\n## Personne de confiance',
  },
  {
    id: 'card-oms', ue: '2.11', concept: 'Antalgiques - Paliers OMS',
    front: 'Cite les 3 paliers OMS de la douleur et un exemple par palier.',
    back: 'Palier 1 : paracétamol. Palier 2 : tramadol/codéine. Palier 3 : morphine.',
    md: '# Paliers OMS\n## Palier 1\n### Paracétamol\n## Palier 2\n### Tramadol\n## Palier 3\n### Morphine',
  },
  {
    id: 'card-hygiene', ue: '2.10', concept: 'Précautions standard',
    front: "Cite 4 précautions standard d'hygiène applicables à tout patient.",
    back: 'Hygiène des mains, port de gants si risque de contact, tenue adaptée, gestion des DASRI.',
    md: '# Précautions standard\n## Mains\n## Gants\n## Tenue\n## DASRI',
  },
  {
    id: 'card-transfusion', ue: '4.4', concept: 'Transfusion sanguine',
    front: 'Avant toute transfusion, que vérifie le contrôle ultime au lit du patient ?',
    back: 'La compatibilité ABO, via carte de groupage + carte de contrôle ultime, juste avant la pose.',
    md: '# Transfusion\n## Contrôle ultime\n### Groupe ABO\n## Traçabilité',
  },
];

const ECOS_SCENARIOS = [
  { id: 'UE4.3_S4_01', titre: 'Dyspnée aiguë', ctx: 'Homme 55 ans, antécédent de BPCO, dyspnée aiguë.',
    patient: 'M. Yilmaz parle peu, phrases courtes, semble avoir peur. (Allergie pénicilline — à découvrir en posant la question.)',
    eval: [
      { id: 'ABCDE', label: 'Applique une approche ABCDE structurée', pts: 3 },
      { id: 'allergie', label: 'Recherche activement les allergies', pts: 2 },
      { id: 'spo2', label: 'Mesure la SpO2 avant toute oxygénothérapie', pts: 2 },
      { id: 'position', label: 'Installe le patient en position demi-assise', pts: 1 },
    ]},
  { id: 'UE2.7_S3_02', titre: 'Douleur thoracique', ctx: 'Femme 62 ans, diabétique, douleur thoracique constrictive.',
    patient: 'Mme Berthier décrit une douleur "comme un étau", irradiant au bras gauche. Angoissée.',
    eval: [
      { id: 'ecg', label: 'Réflexe ECG immédiat', pts: 3 },
      { id: 'antecedents', label: 'Recherche les antécédents (diabète)', pts: 2 },
      { id: 'appel', label: 'Alerte le médecin en urgence', pts: 3 },
      { id: 'surveillance', label: 'Met en place une surveillance des constantes', pts: 2 },
    ]},
  { id: 'UE2.7_S3_03', titre: 'Hypoglycémie', ctx: 'Patient diabétique de type 1, malaise, sueurs et tremblements.',
    patient: 'M. Dubreuil est confus, réponses lentes, sueurs abondantes.',
    eval: [
      { id: 'glycemie', label: 'Réalise une glycémie capillaire', pts: 3 },
      { id: 'resucrage', label: 'Propose un resucrage adapté', pts: 3 },
      { id: 'conscience', label: "Évalue l'état de conscience", pts: 2 },
    ]},
  { id: 'UE4.3_S4_04', titre: 'Choc anaphylactique', ctx: "Urticaire généralisée et gêne respiratoire après injection d'antibiotique.",
    patient: 'M. Kader a la voix étouffée, angoissé, se gratte les avant-bras.',
    eval: [
      { id: 'arret', label: 'Arrête le médicament en cause', pts: 3 },
      { id: 'adrenaline', label: "Pense à l'adrénaline IM en réflexe", pts: 3 },
      { id: 'alerte', label: "Alerte l'équipe médicale", pts: 2 },
      { id: 'position2', label: 'Allonge le patient, jambes surélevées', pts: 1 },
    ]},
  { id: 'UE2.7_S3_05', titre: "Suspicion d'AVC (FAST)", ctx: 'Femme 71 ans, faiblesse brutale du bras droit et trouble de la parole.',
    patient: 'Mme Renard a une parole ralentie et déformée, bras droit qui ne se lève pas complètement.',
    eval: [
      { id: 'heure', label: "Recherche l'heure de début des symptômes", pts: 3 },
      { id: 'fast', label: 'Réalise un test FAST complet', pts: 3 },
      { id: 'appel15', label: 'Appelle le 15 en urgence absolue', pts: 3 },
    ]},
  { id: 'UE4.6_S4_06', titre: 'Découverte de diabète de type 2 (ETP)', ctx: "Consultation d'annonce et d'éducation thérapeutique initiale.",
    patient: 'M. Moreau est inquiet, pose beaucoup de questions sur l\'alimentation.',
    eval: [
      { id: 'langage', label: 'Utilise un langage adapté, sans jargon', pts: 2 },
      { id: 'comprehension', label: 'Vérifie la compréhension du patient', pts: 3 },
      { id: 'objectifs', label: 'Fixe des objectifs partagés', pts: 2 },
    ]},
  { id: 'UE2.6_S3_07', titre: "Crise d'angoisse aiguë", ctx: "Patient hospitalisé, crise d'angoisse avec sensation de mort imminente.",
    patient: 'M. Aït-Hamou respire vite, parle de façon précipitée, demande sans cesse si "c\'est grave".',
    eval: [
      { id: 'communication', label: 'Adopte une communication apaisante', pts: 3 },
      { id: 'cause', label: 'Élimine une cause organique', pts: 2 },
      { id: 'banalisation', label: 'Ne banalise pas le symptôme', pts: 2 },
    ]},
  { id: 'UE4.7_S6_08', titre: 'Annonce en soins palliatifs', ctx: 'Patient en phase palliative, famille présente, question directe sur le pronostic.',
    patient: 'M. Lefebvre demande directement : "Combien de temps il me reste ?"',
    eval: [
      { id: 'ecoute', label: 'Pratique une écoute active', pts: 3 },
      { id: 'esquive', label: 'Ne fuit pas la question', pts: 2 },
      { id: 'orientation', label: 'Oriente vers le médecin référent', pts: 2 },
      { id: 'directives', label: 'Respecte les directives anticipées', pts: 2 },
    ]},
  { id: 'UE4.4_S4_09', titre: 'Réaction transfusionnelle', ctx: "Frissons et fièvre 10 minutes après le début d'une transfusion.",
    patient: 'M. Costa frissonne, se sent "pas bien du tout" depuis quelques minutes.',
    eval: [
      { id: 'arret_transfusion', label: 'Arrête immédiatement la transfusion', pts: 3 },
      { id: 'voie', label: 'Maintient la voie veineuse avec sérum salé', pts: 2 },
      { id: 'alerte2', label: "Alerte le médecin et l'EFS", pts: 2 },
      { id: 'tracabilite', label: 'Vérifie constantes et traçabilité de la poche', pts: 2 },
    ]},
  { id: 'UE2.4_S2_10', titre: 'Chute de la personne âgée', ctx: 'Femme 84 ans, chute à domicile, douleur à la hanche droite.',
    patient: 'Mme Petit a une douleur vive à la mobilisation, anxieuse à l\'idée de "finir à l\'hôpital".',
    eval: [
      { id: 'non_mobilisation', label: 'Évite toute mobilisation intempestive', pts: 3 },
      { id: 'eva', label: "Évalue la douleur (échelle EVA)", pts: 2 },
      { id: 'fracture', label: 'Recherche les signes de fracture', pts: 2 },
      { id: 'imagerie', label: 'Oriente vers une imagerie', pts: 2 },
    ]},
  { id: 'UE2.10_S2_11', titre: 'Suspicion de sepsis', ctx: 'Fièvre à 39,5°C, confusion débutante, tachycardie, post-opératoire J3.',
    patient: 'M. Nguyen est un peu confus, dit avoir "très chaud puis très froid".',
    eval: [
      { id: 'qsofa', label: 'Reconnaît les signes de sepsis (qSOFA)', pts: 3 },
      { id: 'hemocultures', label: 'Pense aux hémocultures avant antibiothérapie', pts: 2 },
      { id: 'alerte3', label: 'Alerte médicale rapide', pts: 3 },
      { id: 'surveillance2', label: 'Met en place une surveillance rapprochée', pts: 2 },
    ]},
];

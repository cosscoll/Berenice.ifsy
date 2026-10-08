/** Cours approfondis : supports pédagogiques sourcés, non protocoles cliniques. */
const IFSI_COURSES = [
  {
    "id": "hygiene",
    "title": "Hygiène des mains : indications et raisonnement",
    "domain": "B",
    "level": "Fondamentaux",
    "time": 9,
    "objective": "Reconnaître les cinq moments de l’hygiène des mains et expliquer leur lien avec la prévention des infections associées aux soins.",
    "sections": [
      [
        "Le raisonnement de base",
        "L’hygiène des mains vise à réduire la transmission de micro-organismes entre patient, soignant et environnement. Elle fait partie des précautions standard. La présence de gants ne dispense pas de respecter les indications d’hygiène des mains."
      ],
      [
        "Les cinq moments OMS",
        "1. Avant de toucher un patient. 2. Avant un geste aseptique. 3. Après un risque d’exposition à un liquide biologique. 4. Après avoir touché un patient. 5. Après avoir touché l’environnement du patient. Ce sont des indications liées à l’activité, pas seulement des gestes à effectuer en entrant ou en quittant une pièce."
      ],
      [
        "Comment mémoriser",
        "Repérer les moments « avant » qui protègent le patient et les moments « après » qui interrompent une possible transmission. Répéter les cinq moments à voix haute puis les retrouver dans un scénario simulé."
      ],
      [
        "Erreurs fréquentes",
        "Se fier uniquement à la propreté visible des mains, oublier l’environnement du patient, ou croire que le port des gants remplace l’hygiène des mains. Les protocoles d’établissement précisent les modalités de réalisation."
      ]
    ],
    "scenario": "Tu ranges un dispositif dans l’environnement immédiat du patient après le soin, sans toucher à nouveau la personne. Quel moment de l’OMS dois-tu reconnaître ?",
    "check": {
      "question": "Après un contact avec l’environnement du patient, quelle affirmation est correcte ?",
      "choices": [
        "L’hygiène des mains n’est jamais indiquée",
        "L’hygiène des mains reste indiquée",
        "Elle ne dépend que de la durée du contact"
      ],
      "answer": 1,
      "explanation": "Le contact avec l’environnement du patient correspond au cinquième moment OMS."
    },
    "takeaway": [
      "Avant contact et geste aseptique",
      "Après exposition biologique, contact patient et environnement",
      "Gants et hygiène des mains ne sont pas interchangeables"
    ],
    "sources": [
      {
        "name": "OMS — Cinq moments pour l’hygiène des mains",
        "url": "https://www.who.int/fr/publications/m/item/five-moments-for-hand-hygiene"
      }
    ]
  },
  {
    "id": "pharmaco",
    "title": "Administration médicamenteuse : sécuriser avec les 5B",
    "domain": "B",
    "level": "Fondamentaux",
    "time": 10,
    "objective": "Identifier les cinq vérifications de base et reconnaître qu’elles ne remplacent jamais la prescription ni le protocole local.",
    "sections": [
      [
        "Pourquoi parler des 5B ?",
        "L’administration médicamenteuse implique plusieurs étapes où peuvent apparaître des erreurs. La HAS propose la règle des cinq B comme fil conducteur de sécurisation. Il s’agit d’une méthode de vigilance, pas d’une autorisation de réaliser un acte en dehors de son champ de compétences."
      ],
      [
        "Les cinq B",
        "Bon patient : vérifier l’identité avec les moyens prévus. Bon médicament : rapprocher le produit de la prescription. Bonne dose : vérifier quantité, unités et calculs. Bonne voie : confirmer la voie prescrite et les modalités. Bon moment : respecter la temporalité prévue. Selon les organisations, d’autres éléments tels que la traçabilité complètent les contrôles."
      ],
      [
        "Un raisonnement complet",
        "Une ordonnance doit être lisible et cohérente ; une discordance ou un doute appelle une clarification auprès de la personne habilitée avant toute administration réelle. L’outil pédagogique du site ne confirme aucune dose pour un patient."
      ],
      [
        "Pièges de révision",
        "Confondre une vérification « de mémoire » avec une vérification réelle, négliger les unités ou supposer qu’un calcul mathématique correct équivaut à une validation clinique."
      ]
    ],
    "scenario": "Dans un exercice, la prescription indique une voie d’administration différente de celle préparée. Quelle catégorie de vérification permet de repérer cette discordance ?",
    "check": {
      "question": "Quel élément fait partie de la règle des 5B ?",
      "choices": [
        "Bon diagnostic",
        "Bonne voie d’administration",
        "Bonne durée de séjour"
      ],
      "answer": 1,
      "explanation": "La bonne voie est l’un des cinq B, avec patient, médicament, dose et moment."
    },
    "takeaway": [
      "Bon patient, bon médicament, bonne dose",
      "Bonne voie et bon moment",
      "Toujours prescription, protocole et supervision appropriée"
    ],
    "sources": [
      {
        "name": "HAS — Outils de sécurisation de l’administration des médicaments",
        "url": "https://www.has-sante.fr/jcms/c_946211/fr/outils-de-securisation-et-d-auto-evaluation-de-l-administration-des-medicaments"
      }
    ]
  },
  {
    "id": "consentement",
    "title": "Consentement aux soins : comprendre le droit du patient",
    "domain": "D",
    "level": "Fondamentaux",
    "time": 10,
    "objective": "Expliquer ce que signifient consentement libre et éclairé, refus et retrait du consentement.",
    "sections": [
      [
        "Décider avec la personne",
        "L’article L1111-4 du Code de la santé publique prévoit que la personne prend les décisions concernant sa santé avec le professionnel de santé au regard des informations et préconisations reçues. Informer fait partie du processus : ce n’est pas une formalité ponctuelle."
      ],
      [
        "Libre, éclairé et réversible",
        "Le consentement doit être libre et éclairé. Il peut être retiré à tout moment. Le patient peut refuser un traitement ; les professionnels doivent respecter le cadre légal applicable, informer des conséquences et assurer le suivi prévu."
      ],
      [
        "Cas particuliers",
        "La loi prévoit des règles spécifiques pour les personnes hors d’état d’exprimer leur volonté, certains mineurs et personnes protégées, les urgences et d’autres situations. Il faut identifier ces exceptions plutôt que retenir une règle simplifiée universelle."
      ],
      [
        "Positionnement de l’étudiant",
        "Avant une situation d’apprentissage, vérifier avec le tuteur la compréhension et la volonté de la personne. Une consultation ou un examen dans le cadre de l’enseignement clinique nécessite le consentement préalable de la personne concernée."
      ]
    ],
    "scenario": "Une personne dit ne plus vouloir un soin auquel elle avait initialement consenti. Pourquoi le consentement initial n’autorise-t-il pas à ignorer cette nouvelle volonté ?",
    "check": {
      "question": "Quelle affirmation est exacte selon l’article L1111-4 ?",
      "choices": [
        "Le consentement est définitif",
        "Il peut être retiré à tout moment",
        "Il est toujours uniquement écrit"
      ],
      "answer": 1,
      "explanation": "La loi prévoit expressément le retrait possible du consentement à tout moment."
    },
    "takeaway": [
      "Information adaptée et libre choix",
      "Refus et retrait possibles",
      "Les situations particulières relèvent du cadre légal"
    ],
    "sources": [
      {
        "name": "Légifrance — Code de la santé publique, article L1111-4",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054137430/2026-06-20"
      }
    ]
  },
  {
    "id": "communication",
    "title": "Transmissions : structurer un échange avec SAED",
    "domain": "D",
    "level": "Fondamentaux",
    "time": 11,
    "objective": "Distinguer les faits des interprétations et utiliser le cadre SAED pour organiser une communication professionnelle.",
    "sections": [
      [
        "Une question de sécurité",
        "Un message incomplet ou ambigu peut entraîner des incompréhensions entre professionnels. La Haute Autorité de santé propose le guide SAED pour rendre la communication plus structurée, claire et concise."
      ],
      [
        "SAED en quatre points",
        "S — Situation : pourquoi contacte-t-on l’interlocuteur ? A — Antécédents : quels éléments de contexte pertinents doivent être connus ? E — Évaluation : quels faits et observations ont été recueillis ? D — Demande : que sollicite-t-on précisément ? Le contenu doit toujours être adapté à l’urgence et aux procédures locales."
      ],
      [
        "Observation et interprétation",
        "Une formulation telle que « la personne ne va pas bien » est peu exploitable sans faits associés. Décrire le changement constaté, le contexte et les éléments documentés facilite une communication utile. Il faut préserver la confidentialité des informations."
      ],
      [
        "Entraînement",
        "Dans un cas fictif, rédiger quatre phrases, une par lettre de SAED. Demander ensuite à un formateur ce qui manque ou mérite clarification. Cet exercice n’est pas un protocole de triage."
      ]
    ],
    "scenario": "Dans une transmission fictive, l’étudiant indique seulement « état dégradé ». Reformule avec un fait observé et une demande clairement énoncée, sans inventer de données.",
    "check": {
      "question": "Dans SAED, le D correspond à :",
      "choices": [
        "Diagnostic certain",
        "Demande",
        "Date de naissance"
      ],
      "answer": 1,
      "explanation": "SAED est l’acronyme de Situation, Antécédents, Évaluation, Demande."
    },
    "takeaway": [
      "S : Situation",
      "A : Antécédents, E : Évaluation",
      "D : Demande claire"
    ],
    "sources": [
      {
        "name": "HAS — Guide SAED",
        "url": "https://www.has-sante.fr/jcms/c_1776178/fr/saed-un-guide-pour-faciliter-la-communication-entre-professionnels-de-sante"
      }
    ]
  },
  {
    "id": "prevention",
    "title": "Prévention et promotion de la santé : les fondamentaux",
    "domain": "C",
    "level": "Référentiel 2026",
    "time": 10,
    "objective": "Distinguer prévention, promotion et échelles individuelle, populationnelle et communautaire.",
    "sections": [
      [
        "Le domaine C",
        "Le référentiel 2026 reconnaît la prévention et la promotion de la santé comme un domaine spécifique. Il vise les personnes saines ou malades, à tous les âges de la vie et dans des contextes variés."
      ],
      [
        "Trois échelles d’intervention",
        "L’échelle individuelle concerne une personne ; l’échelle populationnelle étudie un ensemble de personnes ; la dimension communautaire suppose d’intégrer un groupe et son environnement. Une même action éducative peut toucher plusieurs de ces échelles."
      ],
      [
        "Santé et environnement",
        "Le référentiel évoque santé publique, santé environnementale et santé au travail, avec des pratiques préventives et écoresponsables. Une action concrète doit tenir compte du contexte du public, de ses possibilités et des ressources disponibles."
      ],
      [
        "Évaluer une action",
        "Avant une intervention pédagogique, se demander : à qui s’adresse-t-elle, quel besoin a été identifié, comment sera-t-elle comprise, quels signes permettront de voir si l’objectif est atteint ? Ces questions forment un canevas simple de réflexion."
      ]
    ],
    "scenario": "Pour un atelier fictif de prévention destiné à un groupe, propose un objectif observable et un moyen d’évaluer si le message a été compris.",
    "check": {
      "question": "La promotion de la santé du domaine C concerne :",
      "choices": [
        "Seulement des personnes déjà malades",
        "Les personnes saines ou malades à tout âge",
        "Uniquement les hôpitaux"
      ],
      "answer": 1,
      "explanation": "Le référentiel 2026 couvre les personnes saines ou malades à tous les âges de la vie."
    },
    "takeaway": [
      "Personne, population et communauté",
      "Prévention et promotion sont complémentaires",
      "Inclure santé environnementale et santé au travail"
    ],
    "sources": [
      {
        "name": "Légifrance — Annexe III du référentiel 2026",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/2026-03-03"
      }
    ]
  },
  {
    "id": "demarche",
    "title": "Raisonnement clinique : des données à la réévaluation",
    "domain": "A",
    "level": "Fondamentaux",
    "time": 11,
    "objective": "Organiser une situation d’étude en distinguant observations, interprétations, priorités et réévaluation.",
    "sections": [
      [
        "Recueillir avant d’interpréter",
        "L’analyse clinique part d’informations disponibles sur une situation : contexte, données exprimées par la personne et observations pertinentes. L’étudiant doit garder distincts ce qui est réellement observé et ce qui est supposé."
      ],
      [
        "Formuler des hypothèses",
        "Une hypothèse clinique tente de donner du sens à des observations, mais ne devient pas automatiquement un diagnostic. Des éléments manquants doivent être recherchés et les situations dépassant le champ de compétence doivent être transmises."
      ],
      [
        "Prioriser en contexte",
        "Une fois les données clarifiées, on repère les besoins et problèmes qui demandent une attention prioritaire, puis on choisit une démarche adaptée au cadre de soins et au niveau de formation. Les signes de gravité imposent de suivre les procédures locales d’alerte."
      ],
      [
        "Réévaluer et tracer",
        "Après une action, on doit pouvoir décrire l’évolution observée, les informations transmises et les nouveaux besoins. Cette boucle de retour permet de comprendre les effets d’une prise en charge sans masquer l’incertitude."
      ]
    ],
    "scenario": "Une situation fictive contient un fait observé (« ne répond pas à une question ») et une interprétation (« refuse de coopérer »). Comment les séparerais-tu avant de poursuivre ton raisonnement ?",
    "check": {
      "question": "Quelle démarche correspond le mieux à un raisonnement clinique rigoureux ?",
      "choices": [
        "Décider avant de recueillir les faits",
        "Confondre hypothèse et observation",
        "Recueillir, analyser, prioriser, réévaluer"
      ],
      "answer": 2,
      "explanation": "Le raisonnement clinique s’organise autour de données, d’hypothèses confrontées aux faits, de priorités et de réévaluations."
    },
    "takeaway": [
      "Distinguer faits et hypothèses",
      "Prioriser selon le contexte et la gravité",
      "Réévaluer et transmettre"
    ],
    "sources": [
      {
        "name": "Légifrance — Référentiel de formation, domaine A",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/2026-03-03"
      }
    ]
  },
  {
    "id": "recherche",
    "title": "Données probantes : apprendre à vérifier une information",
    "domain": "E",
    "level": "Référentiel 2026",
    "time": 12,
    "objective": "Évaluer une affirmation en identifiant sa source, sa date, sa population et ses limites.",
    "sections": [
      [
        "À quoi sert une démarche scientifique ?",
        "Le domaine E du référentiel 2026 aborde la démarche scientifique, l’utilisation des données probantes et la contribution à la production de données. Cette compétence est utile pour éviter de présenter une opinion comme une recommandation vérifiée."
      ],
      [
        "Partir d’une bonne question",
        "Préciser le sujet étudié, le public concerné et l’information recherchée. Une question trop générale conduit souvent à des résultats peu comparables. Une question clairement délimitée aide à sélectionner des sources pertinentes."
      ],
      [
        "Lire avec esprit critique",
        "Relever l’auteur, la date, le type de document, la méthode utilisée, la taille et les caractéristiques des groupes étudiés et les limites reconnues. Un chiffre isolé ne suffit pas à conclure et une corrélation ne prouve pas une causalité."
      ],
      [
        "Intégrer sans surinterpréter",
        "Formuler les conclusions avec leurs limites, puis les confronter au contexte des recommandations et des protocoles institutionnels. Les résultats d’une étude ne constituent pas à eux seuls un ordre de soin."
      ]
    ],
    "scenario": "Deux billets en ligne avancent la même affirmation ; l’un renvoie à une publication scientifique, l’autre ne cite aucune source. Quels autres critères contrôlerais-tu avant de faire confiance au premier ?",
    "check": {
      "question": "Quel élément est essentiel lorsqu’on évalue une étude ?",
      "choices": [
        "Le nombre de partages",
        "La méthode et les limites",
        "La couleur du site web"
      ],
      "answer": 1,
      "explanation": "La validité des conclusions dépend notamment de la méthode employée et des limites du travail."
    },
    "takeaway": [
      "Question précise",
      "Méthode, résultats et limites",
      "Application contextualisée et prudente"
    ],
    "sources": [
      {
        "name": "Légifrance — Référentiel infirmier 2026, domaine E",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/2026-03-03"
      }
    ]
  },
  {
    "id": "environnement",
    "title": "Santé environnementale : relier les enjeux aux soins",
    "domain": "C",
    "level": "Référentiel 2026",
    "time": 9,
    "objective": "Identifier les liens entre prévention, santé environnementale, santé au travail et pratiques écoresponsables.",
    "sections": [
      [
        "Pourquoi la santé environnementale figure au programme",
        "Le domaine C du référentiel 2026 associe la prévention aux enjeux de santé publique, de santé environnementale et de santé au travail. Cela invite à élargir le regard au-delà d’un seul acte technique."
      ],
      [
        "Observer un contexte",
        "Dans une situation pédagogique, distinguer l’exposition potentielle, les personnes concernées et les facteurs du milieu. Toute démarche doit être adaptée aux consignes d’hygiène, à la sécurité et à l’organisation en place."
      ],
      [
        "Comprendre l’écoresponsabilité",
        "Économiser une ressource et garantir la sécurité des soins doivent être envisagés ensemble. Une suggestion écoresponsable n’est pertinente que si elle respecte les protocoles, les obligations de prévention du risque et les besoins des personnes."
      ],
      [
        "Construire une observation de stage",
        "Repérer une pratique environnementale dans un service, rechercher sa justification locale et noter les questions à poser au tuteur. Il ne faut ni modifier une procédure ni interpréter seul le niveau de risque."
      ]
    ],
    "scenario": "Une étudiante remarque plusieurs consommables utilisés dans une activité de soins. Quels éléments doit-elle vérifier avant d’envisager une amélioration de pratique ?",
    "check": {
      "question": "Dans le référentiel 2026, la santé environnementale relève principalement du :",
      "choices": [
        "Domaine C",
        "Domaine D uniquement",
        "Domaine E uniquement"
      ],
      "answer": 0,
      "explanation": "Le domaine C relie explicitement santé publique, santé environnementale et santé et sécurité au travail."
    },
    "takeaway": [
      "Prévention et environnement sont liés",
      "Sécurité des soins prioritaire",
      "Observer et vérifier avant de proposer"
    ],
    "sources": [
      {
        "name": "Légifrance — Annexe III, domaine C",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/2026-03-03"
      }
    ]
  },
  {
    "id": "lecture-science",
    "title": "Lire un article scientifique sans perdre l’essentiel",
    "domain": "E",
    "level": "Méthodologie",
    "time": 10,
    "objective": "Extraire la question, la méthode, les résultats et les limites d’une publication scientifique.",
    "sections": [
      [
        "Avant de lire",
        "Commencer par déterminer ce qu’on souhaite apprendre et pourquoi. Lire ensuite le titre, le résumé et le contexte de l’étude. Cette première lecture permet de juger si le document répond à la question."
      ],
      [
        "Quatre éléments à relever",
        "1. La question ou l’objectif. 2. La population ou le contexte étudié. 3. La méthode utilisée. 4. Les résultats ainsi que leurs limites. Ne pas tirer une recommandation d’un simple titre."
      ],
      [
        "Repérer l’incertitude",
        "Les conditions de recueil, la taille de l’échantillon et la possibilité de biais influent sur l’interprétation. Un résultat statistique ne signifie pas nécessairement un bénéfice applicable à chaque patient."
      ],
      [
        "Rendre compte de sa lecture",
        "Rédiger une phrase de synthèse, une limite importante et une question restant ouverte. Citer la source et sa date. Le domaine E prévoit également l’accès à la littérature scientifique anglophone."
      ]
    ],
    "scenario": "Tu lis une étude dont le résultat paraît spectaculaire, mais dont l’échantillon est minuscule. Quelle réserve faut-il formuler dans ta synthèse ?",
    "check": {
      "question": "Lequel de ces éléments appartient à une lecture critique ?",
      "choices": [
        "Ne retenir que le titre",
        "Évaluer la méthode et ses limites",
        "Ignorer la population étudiée"
      ],
      "answer": 1,
      "explanation": "La méthode, la population et les limites sont indispensables à une interprétation responsable."
    },
    "takeaway": [
      "Question, population, méthode",
      "Résultats et limites",
      "Synthèse avec citation et nuance"
    ],
    "sources": [
      {
        "name": "Légifrance — Référentiel infirmier 2026, domaine E",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/2026-03-03"
      }
    ]
  },
  {
    "id": "douleur",
    "title": "Évaluer la douleur : choisir une approche adaptée",
    "domain": "B",
    "level": "Fondamentaux",
    "time": 10,
    "objective": "Distinguer EVA, échelle numérique et échelle verbale simple dans l’évaluation d’une douleur.",
    "sections": [
      [
        "Une expérience rapportée par la personne",
        "L’intensité de la douleur est subjective. Chez une personne en mesure de communiquer et de s’autoévaluer, son expression directe est centrale. Le choix de l’échelle dépend des capacités et de la situation."
      ],
      [
        "Trois outils à reconnaître",
        "L’EVA est une échelle visuelle analogique, souvent sous forme de réglette ; l’EN correspond à une note numérique, par exemple de 0 à 10 ; l’EVS utilise des qualificatifs ordonnés. Ces outils ne sont pas des examens biologiques ni des diagnostics."
      ],
      [
        "La mesure a un contexte",
        "Noter les circonstances, le moment, l’outil utilisé et les éventuelles variations permet de suivre l’évolution. Ne pas comparer mécaniquement des scores obtenus avec des méthodes ou circonstances différentes."
      ],
      [
        "Quand l’autoévaluation n’est pas possible",
        "Une autre approche d’évaluation peut être nécessaire selon l’âge, la capacité de communication et la situation clinique. Les outils validés et les protocoles locaux guident ce choix ; ce module ne recommande pas d’antalgique."
      ]
    ],
    "scenario": "Dans une situation fictive, la personne donne un chiffre de 7/10 à une question sur l’intensité de sa douleur. Quelle échelle a été utilisée et quelles informations contextuelles faudrait-il encore documenter ?",
    "check": {
      "question": "Quelle échelle repose sur un chiffre déclaré par le patient ?",
      "choices": [
        "Score de Glasgow",
        "Échelle numérique (EN)",
        "Échelle de Braden"
      ],
      "answer": 1,
      "explanation": "L’échelle numérique utilise une note choisie par la personne pour décrire l’intensité de sa douleur."
    },
    "takeaway": [
      "Autoévaluation adaptée si possible",
      "EVA, EN et EVS à distinguer",
      "Suivi contextualisé de l’évolution"
    ],
    "sources": [
      {
        "name": "HAS — Consignes d’évaluation de la douleur (outils)",
        "url": "https://www.has-sante.fr/upload/docs/application/pdf/2017-12/consignes_prise_en_charge_douleur_2018.pdf"
      }
    ]
  }
];

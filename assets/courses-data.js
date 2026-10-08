/** Cours IFSI : supports pédagogiques, à faire valider par des formateurs avant un usage officiel. */
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
  },
  {
    "id": "urgences",
    "title": "Urgences : reconnaître, alerter et s’organiser",
    "domain": "B",
    "level": "Fondamentaux",
    "time": 14,
    "objective": "Identifier une situation nécessitant une alerte immédiate et comprendre le rôle d’une formation pratique AFGSU.",
    "sections": [
      [
        "La première question : y a-t-il une urgence ?",
        "Face à une situation inhabituelle, distinguer des observations factuelles d’un diagnostic supposé. Une personne qui ne réagit pas et ne respire pas normalement peut être en arrêt cardiaque. L’évaluation d’une urgence doit être adaptée aux compétences, à la sécurité des lieux et aux procédures de l’établissement. Le site donne les repères théoriques, pas la compétence pratique acquise en formation."
      ],
      [
        "Alerter et demander du renfort",
        "Dans les situations d’urgence en France, le 15 et le 112 sont des numéros de référence. Dans un établissement de santé, utiliser également le dispositif d’alerte interne prévu. Lorsqu’on alerte, donner le lieu exact, la situation observée et les informations vérifiées, sans extrapoler. Ne pas attendre de résoudre seul la cause du problème pour demander l’aide nécessaire."
      ],
      [
        "Arrêt cardiaque et défibrillateur : notions",
        "La Croix-Rouge présente les gestes de premiers secours : reconnaître l’absence de réponse et de respiration normale, alerter, entreprendre une réanimation et utiliser un défibrillateur automatisé externe selon ses instructions. L’apprentissage technique nécessite une formation présentielle et un entraînement supervisé. Les consignes d’un dispositif et des secours priment sur un résumé pédagogique."
      ],
      [
        "Le rôle du recul clinique",
        "Même sous pression, la sécurité, la coordination et la communication restent essentielles. Après une simulation, décrire l’ordre des événements, les informations communiquées, les actions effectuées par les professionnels compétents et ce qui serait à améliorer. Un cas fictif ne remplace pas un exercice AFGSU ni un protocole de service."
      ]
    ],
    "scenario": "Dans une simulation, une personne s’effondre, ne réagit pas et ne respire pas normalement. Quelle information essentielle doit être communiquée sans délai aux secours ?",
    "check": {
      "question": "Quel constat est particulièrement évocateur d’un arrêt cardiaque ?",
      "choices": [
        "Une personne qui dort",
        "Une personne qui ne réagit pas et ne respire pas normalement",
        "Une personne qui pose des questions"
      ],
      "answer": 1,
      "explanation": "Ne pas réagir et ne pas respirer normalement sont des signes d’alerte présentés dans les recommandations de premiers secours."
    },
    "takeaway": [
      "Protéger et observer les faits",
      "Alerter immédiatement selon le contexte",
      "Apprendre les gestes avec une formation AFGSU/PSC"
    ],
    "sources": [
      {
        "name": "Croix-Rouge française — Arrêt cardiaque",
        "url": "https://www.croix-rouge.fr/les-gestes-de-premiers-secours/arret-cardiaque"
      },
      {
        "name": "Croix-Rouge française — Défibrillateur",
        "url": "https://www.croix-rouge.fr/les-gestes-de-premiers-secours/defibrillateur"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "cardio",
    "title": "Cardiovasculaire : surveillance et situations d’alerte",
    "domain": "A",
    "level": "Fondamentaux",
    "time": 13,
    "objective": "Distinguer une maladie cardiaque chronique, une aggravation possible et une urgence cardiaque sans poser seul de diagnostic.",
    "sections": [
      [
        "Circulation et fonction de pompe",
        "Le cœur assure la circulation du sang dans l’organisme. L’insuffisance cardiaque est un syndrome qui peut nécessiter un parcours de soins coordonné et un suivi au long cours. Dans un contexte d’apprentissage, étudier séparément l’anatomie, les manifestations cliniques, le suivi et la place des différents professionnels évite de réduire la pathologie à un seul symptôme."
      ],
      [
        "Ce qu’on peut observer",
        "Une dyspnée, une fatigue inhabituelle, une prise de poids rapide, des œdèmes ou une limitation des activités peuvent faire partie des éléments observés chez une personne suivie pour insuffisance cardiaque. Ces indices doivent être replacés dans l’histoire clinique, avec des informations datées, et transmis à l’équipe compétente. Ils ne constituent pas individuellement un diagnostic."
      ],
      [
        "Reconnaître une douleur thoracique préoccupante",
        "Une douleur thoracique en étau pouvant irradier, parfois associée à un malaise, peut évoquer un infarctus. La présentation n’est pas toujours typique. Ameli rappelle qu’une suspicion d’infarctus exige une prise en charge urgente : il faut solliciter immédiatement les secours, sans chercher à confirmer soi-même l’origine de la douleur."
      ],
      [
        "Parcours et transmissions",
        "La coordination entre les professionnels fait partie intégrante du suivi. En stage, il est utile de repérer les informations concernant les symptômes, les habitudes, l’adhésion au suivi et les actions prescrites, puis de comprendre pourquoi elles sont communiquées. Les traitements et examens sont décidés par les professionnels habilités selon les recommandations actuelles."
      ]
    ],
    "scenario": "Dans un cas fictif, une personne suivie pour une maladie cardiaque rapporte une douleur thoracique brutale. Quels faits rapporter à l’équipe plutôt que de conclure directement à une cause précise ?",
    "check": {
      "question": "Quel élément justifie une alerte rapide dans une situation cardiaque ?",
      "choices": [
        "Un changement de couleur du dossier",
        "Une douleur thoracique nouvelle et évocatrice d’une urgence",
        "Une préférence alimentaire"
      ],
      "answer": 1,
      "explanation": "Une douleur thoracique nouvelle pouvant évoquer un infarctus est un motif d’alerte immédiate ; la confirmation diagnostique relève de l’équipe compétente."
    },
    "takeaway": [
      "Distinguer manifestations chroniques et signes d’alerte",
      "Documenter des observations factuelles et datées",
      "Ne jamais retarder l’alerte face à une douleur thoracique suspecte"
    ],
    "sources": [
      {
        "name": "HAS — Parcours de soins insuffisance cardiaque",
        "url": "https://www.has-sante.fr/jcms/c_1242988/fr/guide-parcours-de-soins-insuffisance-cardiaque"
      },
      {
        "name": "Assurance Maladie — Reconnaître un infarctus",
        "url": "https://www.ameli.fr/assure/sante/themes/infarctus-myocarde/reconnaitre-infarctus-agir"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "respiratoire",
    "title": "Respiration et BPCO : observer sans surinterpréter",
    "domain": "A",
    "level": "Fondamentaux",
    "time": 12,
    "objective": "Décrire les symptômes respiratoires usuels de la BPCO et reconnaître qu’une aggravation doit être évaluée.",
    "sections": [
      [
        "À quoi servent les échanges respiratoires ?",
        "La respiration apporte de l’oxygène et permet l’élimination du dioxyde de carbone. La BPCO est caractérisée par une obstruction durable des voies aériennes, souvent associée au tabagisme. Étudier la maladie impose de distinguer le mécanisme général, les symptômes, l’évolution, les examens et les prises en charge coordonnées."
      ],
      [
        "Signes rapportés et observables",
        "La toux, les expectorations et la dyspnée figurent parmi les symptômes les plus fréquents. Une dyspnée ressentie à l’effort peut évoluer et limiter progressivement les activités. Recueillir ce qui est habituel pour une personne et ce qui a changé récemment est central : le même signe ne signifie pas toujours la même chose selon le contexte."
      ],
      [
        "Exacerbation : une variation importante",
        "Une exacerbation correspond à une aggravation des symptômes au-delà des fluctuations habituelles. Elle peut entraîner une insuffisance respiratoire aiguë et nécessiter une évaluation médicale rapide. En situation de soin, repérer l’augmentation des difficultés respiratoires ou la modification de l’état général relève de l’observation et de l’alerte ; les modalités d’oxygénothérapie ne doivent jamais être improvisées."
      ],
      [
        "Prévention et accompagnement",
        "Le suivi de la BPCO mobilise notamment l’arrêt du tabac, l’accompagnement, des traitements adaptés et parfois une réadaptation. L’étudiant peut apprendre à reconnaître le rôle de l’éducation thérapeutique et l’importance de la continuité des soins. Ce chapitre n’indique ni débit d’oxygène ni traitement à administrer."
      ]
    ],
    "scenario": "Une personne décrit un essoufflement plus intense que d’habitude et une toux modifiée. Quel changement faut-il rapporter de façon structurée plutôt que de simplement écrire « malade » ?",
    "check": {
      "question": "Dans la BPCO, que signifie une exacerbation ?",
      "choices": [
        "Une amélioration spontanée",
        "Une aggravation inhabituelle des symptômes respiratoires",
        "Une disparition définitive de l’obstruction"
      ],
      "answer": 1,
      "explanation": "Une exacerbation correspond à un accroissement des symptômes respiratoires par rapport à leur niveau habituel."
    },
    "takeaway": [
      "Recueillir les symptômes habituels",
      "Décrire les changements respiratoires",
      "Alerter selon les procédures en cas d’aggravation"
    ],
    "sources": [
      {
        "name": "Assurance Maladie — BPCO : symptômes et évolution",
        "url": "https://www.ameli.fr/assure/sante/themes/bpco-bronchite-chronique/symptomes-diagnostic-complications"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "neurologie",
    "title": "Neurologie : repérer les signes d’AVC et d’AIT",
    "domain": "A",
    "level": "Fondamentaux",
    "time": 12,
    "objective": "Reconnaître les principaux signes d’alerte d’un AVC/AIT et comprendre la nécessité d’une intervention urgente.",
    "sections": [
      [
        "AVC : une atteinte cérébrale brutale",
        "Un accident vasculaire cérébral peut être d’origine ischémique ou hémorragique. Il se manifeste souvent par l’apparition soudaine de troubles neurologiques. Le diagnostic et les traitements exigent une équipe médicale et des investigations adaptées ; le rôle de la personne témoin ou de l’étudiant est surtout de repérer rapidement les symptômes et d’alerter."
      ],
      [
        "Signes d’alerte à mémoriser",
        "Une asymétrie du visage, une faiblesse soudaine d’un membre ou un trouble brutal de la parole sont des signes majeurs. Des troubles de la vision, de l’équilibre ou un mal de tête intense inhabituel peuvent aussi se rencontrer. L’acronyme VITE rappelle Visage, Impossible de bouger un membre, Trouble de la parole, Éviter le pire en composant le 15."
      ],
      [
        "L’AIT est aussi une urgence",
        "Un accident ischémique transitoire peut provoquer des symptômes ressemblant à ceux d’un AVC, même s’ils régressent rapidement. La disparition d’un symptôme ne suffit donc pas à écarter une urgence. En France, les recommandations grand public prévoient d’appeler sans délai le 15 ou le 112."
      ],
      [
        "Transmission des informations",
        "L’heure connue de début des symptômes ou la dernière fois où la personne a été observée sans trouble, la nature des signes et leur évolution sont des éléments importants à transmettre. L’étudiant ne doit pas essayer de poser un diagnostic neurologique ni retarder l’alerte pour réaliser des exercices de vérification."
      ]
    ],
    "scenario": "Dans un exercice, le visage d’une personne devient asymétrique et sa parole se trouble soudainement, puis cela disparaît quelques minutes après. Pourquoi faut-il tout de même alerter ?",
    "check": {
      "question": "Quelle affirmation au sujet d’un AIT est correcte ?",
      "choices": [
        "La disparition des signes exclut une urgence",
        "Des signes transitoires peuvent quand même relever d’une urgence",
        "Un AIT n’atteint jamais la parole"
      ],
      "answer": 1,
      "explanation": "Un AIT peut présenter des signes qui s’effacent rapidement et nécessite néanmoins une évaluation urgente."
    },
    "takeaway": [
      "Début brutal des signes = vigilance maximale",
      "VITE : Visage, membre, parole, alerte 15",
      "Ne pas minimiser des symptômes transitoires"
    ],
    "sources": [
      {
        "name": "Assurance Maladie — AVC : que faire ?",
        "url": "https://www.ameli.fr/assure/sante/urgence/pathologies/avc"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "diabete",
    "title": "Diabète : glycémie et situations à reconnaître",
    "domain": "A",
    "level": "Fondamentaux",
    "time": 12,
    "objective": "Comprendre la logique du suivi glycémique et distinguer hypoglycémie et hyperglycémie dans un cadre pédagogique.",
    "sections": [
      [
        "La glycémie comme indicateur",
        "La glycémie mesure la concentration de glucose dans le sang. Le suivi d’une personne vivant avec un diabète tient compte de la maladie, des traitements, de l’alimentation, de l’activité et des objectifs fixés par les professionnels. Une mesure isolée doit toujours être interprétée selon le contexte : les décisions de traitement ne relèvent pas d’une règle de calcul générale."
      ],
      [
        "Hypoglycémie : reconnaître le phénomène",
        "L’Assurance Maladie définit une hypoglycémie par une glycémie inférieure à 0,7 g/L. Des sueurs, tremblements, sensations de faim ou troubles du comportement peuvent être évocateurs, mais ces signes ne sont pas exclusifs. Chez une personne traitée, une suspicion doit être prise au sérieux et conduite selon le protocole adapté."
      ],
      [
        "Hyperglycémie et complications",
        "Une hyperglycémie correspond à une glycémie trop élevée. Des épisodes importants peuvent s’associer à une altération de l’état général ; dans certaines situations, une acidocétose constitue une urgence. L’étudiant doit différencier ces termes, connaître les situations qui justifient une alerte et éviter toute adaptation spontanée de dose d’insuline."
      ],
      [
        "Éducation thérapeutique",
        "La compréhension des risques, l’autosurveillance lorsque prescrite et l’identification des situations inhabituelles font partie de l’accompagnement. En stage, noter les éléments que l’équipe explique à la personne et les objectifs de suivi permet de relier la physiologie aux situations réelles, sans jamais inclure de données personnelles dans le site."
      ]
    ],
    "scenario": "Une personne diabétique décrit des tremblements et des sueurs pendant une activité. Quelle hypothèse faut-il envisager et pourquoi une observation contextualisée est-elle indispensable ?",
    "check": {
      "question": "Le terme hypoglycémie désigne :",
      "choices": [
        "Une glycémie trop basse",
        "Une pression artérielle trop élevée",
        "Une fréquence cardiaque normale"
      ],
      "answer": 0,
      "explanation": "L’hypoglycémie est une baisse excessive de la glycémie ; le seuil usuel cité pour une personne diabétique est inférieur à 0,7 g/L."
    },
    "takeaway": [
      "Glycémie interprétée dans son contexte",
      "Hypoglycémie et hyperglycémie à distinguer",
      "Pas d’adaptation autonome de traitement"
    ],
    "sources": [
      {
        "name": "Assurance Maladie — Hypoglycémie et hyperglycémie",
        "url": "https://www.ameli.fr/assure/sante/themes/diabete-adulte/diabete-symptomes-evolution/acido-cetose-hypoglycemie-hyperglycemie"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "psychiatrie",
    "title": "Soins psychiatriques : consentement, droits et relation",
    "domain": "D",
    "level": "Fondamentaux",
    "time": 14,
    "objective": "Distinguer les soins libres des dispositifs légaux de soins sans consentement, en restant attentif aux droits et à la relation de soin.",
    "sections": [
      [
        "Le soin libre est la règle",
        "En France, les soins psychiatriques reposent en principe sur le consentement de la personne. Le Code de la santé publique prévoit des exceptions strictement encadrées. Un trouble psychique ne justifie pas à lui seul une restriction automatique des droits, de la liberté ou de la capacité de participation du patient."
      ],
      [
        "Des cadres distincts",
        "Il existe des situations de soins psychiatriques sans consentement définies par la loi, notamment à la demande d’un tiers ou sur décision du représentant de l’État. Ces régimes n’ont pas les mêmes conditions et procédures. L’admission, le contrôle et les droits des personnes sont fixés par des textes spécifiques, qui doivent être consultés dans leur version en vigueur."
      ],
      [
        "Écoute et communication",
        "Dans une relation de soin, l’étudiant peut apprendre à adopter une attitude respectueuse, non jugeante, à chercher la compréhension de la personne et à communiquer des observations précises. La confidentialité, la dignité et la sécurité sont essentielles. Les comportements inhabituels ne suffisent pas pour déduire une pathologie ou une dangerosité."
      ],
      [
        "Apprendre la pratique en stage",
        "Lorsqu’une situation semble complexe, la bonne démarche est de rechercher l’explication du tuteur, du cadre et de l’équipe compétente, ainsi que le protocole local. Le site n’autorise aucune restriction de liberté et ne permet pas de déterminer le régime légal applicable à une personne réelle."
      ]
    ],
    "scenario": "Dans un cas fictif, un étudiant écrit « patient dangereux » sans détailler d’observation. Comment transformer cette étiquette en faits observables sans stigmatiser la personne ?",
    "check": {
      "question": "Quelle affirmation reflète le cadre général français des soins psychiatriques ?",
      "choices": [
        "Tous les soins sont obligatoires",
        "Les soins consentis sont privilégiés, avec des exceptions prévues par la loi",
        "La confidentialité ne s’applique jamais"
      ],
      "answer": 1,
      "explanation": "Le Code de la santé publique privilégie le consentement et définit précisément les exceptions possibles."
    },
    "takeaway": [
      "Consentement privilégié et droits conservés",
      "Sans consentement : conditions légales particulières",
      "Décrire les faits sans stigmatiser"
    ],
    "sources": [
      {
        "name": "Légifrance — Droits des personnes en soins psychiatriques",
        "url": "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006171187/2026-03-16/"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "plaies",
    "title": "Plaies et escarres : observer, prévenir et transmettre",
    "domain": "B",
    "level": "Fondamentaux",
    "time": 13,
    "objective": "Différencier une lésion cutanée, le risque d’escarre et le suivi prévu par l’équipe sans choisir soi-même un traitement.",
    "sections": [
      [
        "Comprendre l’escarre",
        "Une escarre est une lésion liée notamment à une pression prolongée et parfois à un cisaillement, survenant surtout dans des situations de mobilité réduite. D’autres lésions cutanées peuvent avoir des mécanismes différents. Le raisonnement commence par l’observation, l’analyse des facteurs de risque et les informations dont l’équipe a besoin."
      ],
      [
        "Repérer un risque",
        "La mobilité, l’état cutané, la nutrition, l’humidité, certaines pathologies et le contexte de soin contribuent à l’appréciation du risque. Des échelles d’évaluation, comme Braden, peuvent accompagner le jugement clinique ; elles ne dispensent pas d’observer la personne et d’appliquer les procédures adaptées. Un score seul ne permet pas de prescrire un dispositif."
      ],
      [
        "Prévenir plutôt que traiter tardivement",
        "Les recommandations décrivent des mesures personnalisées de prévention, la surveillance cutanée et les supports adaptés au risque. Les modalités de positionnement, de mobilisation et de matériel sont décidées en fonction de la situation et des protocoles. Il ne faut jamais généraliser une durée de repositionnement ou un pansement à tous les patients."
      ],
      [
        "Rédiger une observation précise",
        "Préciser localisation, aspect observé, évolution et contexte, sans essayer de classer une lésion sur une photographie prise isolément. En stage, vérifier les procédures de traçabilité de l’établissement, la confidentialité et les personnes à prévenir si une modification est constatée."
      ]
    ],
    "scenario": "Une personne ayant une mobilité réduite présente une modification cutanée nouvellement remarquée. Quelles caractéristiques factuelles faudrait-il transmettre à l’équipe ?",
    "check": {
      "question": "Quel élément fait partie du repérage du risque d’escarre ?",
      "choices": [
        "La mobilité de la personne",
        "Le numéro de chambre seul",
        "La couleur du dossier"
      ],
      "answer": 0,
      "explanation": "La mobilité et de nombreux facteurs individuels participent à l’évaluation du risque d’escarre."
    },
    "takeaway": [
      "Une escarre n’est pas une simple rougeur à ignorer",
      "Prévention personnalisée et surveillance",
      "Échelles et jugement clinique se complètent"
    ],
    "sources": [
      {
        "name": "HAS — Prévention et traitement des escarres",
        "url": "https://www.has-sante.fr/jcms/c_271996/fr/prevention-et-traitement-des-escarres-de-l-adulte-et-du-sujet-age"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "geriatrie",
    "title": "Gériatrie : préserver l’autonomie et prévenir les chutes",
    "domain": "A",
    "level": "Fondamentaux",
    "time": 12,
    "objective": "Reconnaître les facteurs de risque de chute et comprendre pourquoi la prévention est individualisée et multidisciplinaire.",
    "sections": [
      [
        "Le vieillissement n’est pas une maladie",
        "Les capacités évoluent différemment d’une personne à l’autre. L’approche gériatrique tient compte de l’autonomie, du contexte de vie, du vécu, de la mobilité, de l’état cognitif, des traitements et des préférences de la personne. Éviter de réduire une difficulté au seul âge."
      ],
      [
        "Une chute a souvent plusieurs facteurs",
        "Les troubles de l’équilibre, des difficultés visuelles, l’environnement, certains traitements, les antécédents de chute et d’autres éléments peuvent interagir. Les recommandations de la HAS proposent une évaluation clinique et la recherche de facteurs modifiables, particulièrement lorsqu’il existe des chutes répétées."
      ],
      [
        "Prévention coordonnée",
        "Selon les besoins, les interventions peuvent concerner l’activité adaptée, les aides techniques, l’environnement, la réévaluation des traitements par les professionnels habilités et l’accompagnement. Aucune mesure ne suffit pour toutes les personnes. La peur de tomber peut elle-même réduire les activités et contribuer à une perte d’autonomie."
      ],
      [
        "Écouter et documenter",
        "Demander comment la chute s’est produite, ce qui a changé et ce que la personne redoute aide à comprendre la situation. Les événements avec symptômes inhabituels ou suspicion de gravité exigent une évaluation compétente et le respect des procédures d’alerte. Ne pas attribuer automatiquement un malaise à une simple chute mécanique."
      ]
    ],
    "scenario": "Dans une situation fictive, une personne a chuté deux fois récemment. Quels facteurs individuels et environnementaux faudrait-il explorer avec l’équipe, plutôt que proposer la même solution à tout le monde ?",
    "check": {
      "question": "Pourquoi la prévention des chutes chez la personne âgée est-elle multifactorielle ?",
      "choices": [
        "Parce qu’un seul facteur explique toutes les chutes",
        "Parce que santé, mobilité, traitements et environnement peuvent interagir",
        "Parce qu’aucun facteur n’est modifiable"
      ],
      "answer": 1,
      "explanation": "La HAS souligne le rôle simultané de facteurs médicaux, fonctionnels, médicamenteux et environnementaux."
    },
    "takeaway": [
      "Évaluer la personne et non seulement son âge",
      "Rechercher les facteurs de risque modifiables",
      "Construire une prévention personnalisée en équipe"
    ],
    "sources": [
      {
        "name": "HAS — Chutes répétées chez les personnes âgées",
        "url": "https://www.has-sante.fr/jcms/c_793371/fr/evaluation-et-prise-en-charge-des-personnes-agees-faisant-des-chutes-repetees"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "pediatrie",
    "title": "Pédiatrie : observer l’enfant et adapter la communication",
    "domain": "A",
    "level": "Fondamentaux",
    "time": 12,
    "objective": "Comprendre qu’un soin pédiatrique dépend de l’âge, des capacités, de l’entourage et des signes d’alerte.",
    "sections": [
      [
        "Un enfant n’est pas un adulte miniature",
        "Les besoins, paramètres et moyens de communication varient selon les âges. Une observation doit tenir compte de l’étape de développement et des habitudes habituelles de l’enfant. Les données chiffrées ne doivent pas être interprétées avec des valeurs adultes de façon automatique."
      ],
      [
        "Associer enfant et proches",
        "Selon l’âge et le cadre légal, l’information s’adresse à l’enfant avec des mots adaptés ainsi qu’aux personnes exerçant l’autorité parentale. Les réactions de l’enfant, son niveau de compréhension et son confort sont importants. Une communication respectueuse aide aussi à recueillir des observations pertinentes sur les changements récents."
      ],
      [
        "Fièvre et signes de gravité",
        "La fièvre est fréquente chez l’enfant, mais certains contextes doivent faire rechercher une évaluation urgente. Ameli rappelle notamment que la fièvre chez un nourrisson de moins de trois mois relève d’une consultation urgente, tout comme une altération notable de la vigilance ou des difficultés respiratoires. L’étudiant transmet immédiatement les signes préoccupants selon le protocole."
      ],
      [
        "Raisonner à partir des faits",
        "Préciser depuis quand un changement est observé, les conditions de mesure, l’état habituel et les symptômes associés. Éviter d’affirmer un diagnostic à partir d’un chiffre unique et ne pas décider d’une dose médicamenteuse sans prescription et validation appropriées."
      ]
    ],
    "scenario": "Dans une situation fictive, un nourrisson de deux mois présente de la fièvre. Pourquoi l’âge change-t-il l’importance de l’information transmise ?",
    "check": {
      "question": "Quelle situation est un motif de consultation urgente selon Ameli ?",
      "choices": [
        "Fièvre chez un nourrisson de moins de trois mois",
        "Enfant plus âgé sans symptôme et en pleine forme",
        "Simple préférence d’horaire"
      ],
      "answer": 0,
      "explanation": "Chez le nourrisson de moins de trois mois, la fièvre nécessite une consultation urgente."
    },
    "takeaway": [
      "Observer selon l’âge et le développement",
      "Adapter la communication à l’enfant et aux proches",
      "Connaître les signes d’alerte sans improviser de traitement"
    ],
    "sources": [
      {
        "name": "Assurance Maladie — Fièvre chez l’enfant",
        "url": "https://www.ameli.fr/assure/sante/themes/fievre-enfant/bons-reflexes-cas-faut-consulter"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "biologie",
    "title": "Biologie : comprendre un résultat sans poser de diagnostic",
    "domain": "A",
    "level": "Fondamentaux",
    "time": 12,
    "objective": "Lire un compte rendu de biologie en distinguant résultat, unité, intervalle de référence et contexte clinique.",
    "sections": [
      [
        "Une analyse répond à une question",
        "Les examens biologiques fournissent des mesures qui aident les professionnels à explorer une situation. Une valeur ne constitue pas un diagnostic autonome. Avant toute lecture, préciser de quel paramètre il s’agit, les unités affichées et les conditions du prélèvement."
      ],
      [
        "Les intervalles de référence",
        "Les intervalles donnés par les laboratoires peuvent varier selon la technique, l’âge, le sexe et d’autres facteurs. Il ne faut pas apprendre une valeur dite « normale » comme une vérité valable en tout lieu et pour tout patient. L’Assurance Maladie rappelle qu’un résultat légèrement hors intervalle n’est pas systématiquement associé à une maladie."
      ],
      [
        "Comprendre les familles de paramètres",
        "L’hémogramme concerne notamment les cellules sanguines ; la glycémie s’intéresse au glucose ; d’autres examens portent sur les électrolytes ou la fonction de certains organes. Les unités diffèrent et il est indispensable de conserver celle qui figure sur le compte rendu. L’interprétation clinique relève des professionnels compétents."
      ],
      [
        "Transmettre un résultat utile",
        "Dans un exercice de stage, citer sans déformation le paramètre, la valeur, l’unité, les repères du laboratoire et la date, sans omettre l’état de la personne. Toute valeur signalée comme critique par un laboratoire ou une équipe suit les procédures locales d’alerte."
      ]
    ],
    "scenario": "Un compte rendu fictif indique une valeur légèrement hors de l’intervalle de référence. Quelles informations faut-il regarder avant de conclure à une maladie ?",
    "check": {
      "question": "Pourquoi faut-il lire la valeur de référence du laboratoire ?",
      "choices": [
        "Elle peut dépendre de la méthode et du contexte",
        "Elle est identique partout et toujours",
        "Elle remplace l’interprétation médicale"
      ],
      "answer": 0,
      "explanation": "Les intervalles de référence varient selon les méthodes, l’âge, le sexe et d’autres facteurs ; ils doivent être interprétés dans leur contexte."
    },
    "takeaway": [
      "Toujours garder l’unité et la date",
      "Valeur hors norme ≠ diagnostic automatique",
      "Transmettre les anomalies selon les procédures"
    ],
    "sources": [
      {
        "name": "Assurance Maladie — Lire les résultats d’une prise de sang",
        "url": "https://www.ameli.fr/assure/sante/examen/analyse/lire-resultats-prise-sang"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "administration",
    "title": "Calculs et voies d’administration : méthode et vérifications",
    "domain": "B",
    "level": "Fondamentaux",
    "time": 14,
    "objective": "Écrire un calcul pédagogique avec des unités cohérentes et connaître les contrôles indispensables avant un médicament réel.",
    "sections": [
      [
        "Différencier l’exercice et l’acte de soin",
        "Un exercice de calcul peut être mathématiquement juste tout en étant inadapté à une situation clinique. En pratique, l’administration dépend de la prescription, de l’identité de la personne, du médicament, de la dose, de la voie, du moment et des procédures internes. La règle des 5B structure ces vérifications."
      ],
      [
        "Débit en mL/h : lecture dimensionnelle",
        "Dans un exemple strictement fictif, 300 mL répartis sur 3 heures donnent 100 mL/h. Le raisonnement est volume ÷ durée, avec une unité finale contrôlée. Cet exemple n’est ni une prescription ni une recommandation de programmation pour un patient réel."
      ],
      [
        "Voies d’administration",
        "Les voies orale, intraveineuse, intramusculaire et sous-cutanée diffèrent par leurs indications, contraintes et modalités. Une même substance n’est pas nécessairement interchangeable entre voies ou présentations. Pour un acte réel, l’étudiant se réfère à la prescription, au protocole, aux professionnels responsables et à sa formation."
      ],
      [
        "Erreurs à prévenir",
        "Parmi les erreurs de raisonnement, on retrouve la confusion entre mg et mL, entre minutes et heures, ou l’absence de contrôle d’un ordre de grandeur. En stage, un doute n’est jamais résolu en devinant : l’acte est clarifié par une personne habilitée selon les règles de l’établissement."
      ]
    ],
    "scenario": "Pour un exercice non clinique, une quantité de 240 mL est répartie sur 4 heures. Explique comment obtenir l’unité mL/h, puis rappelle pourquoi ce résultat ne suffit pas à programmer une perfusion réelle.",
    "check": {
      "question": "Dans un calcul de débit pédagogique, quelle relation donne les mL/h ?",
      "choices": [
        "Volume (mL) ÷ durée (h)",
        "Volume (mL) × durée (h)",
        "Durée (h) ÷ volume (mL)"
      ],
      "answer": 0,
      "explanation": "Dans un exercice de débit, diviser un volume en millilitres par une durée en heures produit un résultat en mL/h. Toute utilisation clinique requiert des vérifications supplémentaires."
    },
    "takeaway": [
      "Contrôler les unités et l’ordre de grandeur",
      "Les 5B restent indispensables",
      "Calcul mathématique ≠ validation clinique"
    ],
    "sources": [
      {
        "name": "HAS — Sécurisation de l’administration médicamenteuse",
        "url": "https://www.has-sante.fr/jcms/c_1104570/fr/guide-outil-securisation-autoevaluation-administration-medicaments-partie3-boite-a-outils"
      }
    ],
    "verified": "2026-10-08"
  },
  {
    "id": "equipe",
    "title": "Collaboration, coordination et leadership en soins",
    "domain": "D",
    "level": "Fondamentaux",
    "time": 11,
    "objective": "Expliquer l’intérêt des transmissions, de la coopération interprofessionnelle et de la coordination des activités.",
    "sections": [
      [
        "Un parcours de soins est collectif",
        "Dans un service, les besoins de la personne peuvent mobiliser différents professionnels. La collaboration suppose de comprendre les missions de chacun et de partager les informations utiles, dans le respect des droits et du secret professionnel. Le référentiel 2026 place ces compétences au sein du domaine D."
      ],
      [
        "Communiquer de façon utile",
        "Une information destinée à l’équipe doit être factuelle, adaptée à l’interlocuteur, datée si nécessaire et orientée vers la continuité des soins. Une transmission qui dit seulement « ça va moins bien » ne permet pas d’identifier précisément ce qui a changé. Le dialogue permet aussi de s’assurer que la demande a été comprise."
      ],
      [
        "Coordonner plutôt que juxtaposer",
        "La coordination vise à rendre les interventions cohérentes dans le temps, à éviter les pertes d’information et à clarifier les responsabilités. Pour l’étudiant, il s’agit d’abord d’observer les circuits de décision, de savoir vers qui se tourner et de demander de l’aide avant d’agir hors de son périmètre."
      ],
      [
        "Leadership et réflexivité",
        "Le leadership ne signifie pas imposer une décision sans concertation. Dans le référentiel, il implique de mobiliser et d’accompagner personnes et équipe vers des objectifs de santé. Une analyse réflexive d’un travail collectif permet d’identifier ce qui a facilité ou compliqué la prise en charge."
      ]
    ],
    "scenario": "Lors d’un exercice, deux professionnels disposent chacun d’une partie des informations sur une situation. Quelle démarche collective permet de sécuriser leur compréhension commune ?",
    "check": {
      "question": "Le domaine D du référentiel 2026 comporte notamment :",
      "choices": [
        "Communication, collaboration et coordination",
        "Seulement des analyses biologiques",
        "Exclusivement la lecture de statistiques"
      ],
      "answer": 0,
      "explanation": "Le domaine D inclut la communication professionnelle, la collaboration, la coordination et le leadership."
    },
    "takeaway": [
      "Partager des données pertinentes",
      "Connaître son rôle et celui des autres",
      "Favoriser la coordination et la réflexion d’équipe"
    ],
    "sources": [
      {
        "name": "Légifrance — Référentiel de formation infirmière 2026",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/2026-03-03"
      }
    ],
    "verified": "2026-10-08"
  }
];

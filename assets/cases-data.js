/** Situations pédagogiques fictives — aucune décision de soin sur patient réel. */
window.IFSI_CASES = [
  {
    "id": "avc-signaux",
    "topicId": "neurologie",
    "level": 1,
    "title": "Un trouble de la parole soudain",
    "duration": 8,
    "setting": "Situation fictive — découverte en salle commune",
    "intro": "Une personne se met soudain à parler difficilement. Son sourire paraît asymétrique. Tu es en observation avec ton tuteur.",
    "objective": "Reconnaître les signes évocateurs d’AVC et organiser une transmission sans attendre.",
    "steps": [
      {
        "question": "Quel est le premier raisonnement à retenir ?",
        "options": [
          {
            "label": "Considérer ces signes soudains comme une urgence potentielle et alerter",
            "correct": true,
            "why": "Une asymétrie du visage et un trouble brutal de la parole sont des signes évocateurs d’AVC. Une alerte immédiate est nécessaire."
          },
          {
            "label": "Attendre que les symptômes disparaissent pour décider",
            "correct": false,
            "why": "Une régression spontanée peut correspondre à un AIT, qui est aussi une urgence."
          },
          {
            "label": "Conclure à une fatigue sans relever les observations",
            "correct": false,
            "why": "Cela écarte sans fondement une cause potentiellement urgente."
          }
        ]
      },
      {
        "question": "Quelle information est particulièrement utile lors de l’alerte ?",
        "options": [
          {
            "label": "L’heure de début connue des troubles et les signes observés",
            "correct": true,
            "why": "Le moment d’apparition et l’évolution des signes orientent la prise en charge par l’équipe compétente."
          },
          {
            "label": "Une hypothèse de diagnostic présentée comme certaine",
            "correct": false,
            "why": "Une hypothèse d’étudiant ne doit pas être transformée en diagnostic."
          },
          {
            "label": "L’emploi du temps habituel de la semaine",
            "correct": false,
            "why": "Il n’est pas prioritaire au regard de l’alerte et des observations."
          }
        ]
      },
      {
        "question": "Les troubles disparaissent après quelques minutes : que retenir ?",
        "options": [
          {
            "label": "L’alerte reste nécessaire, notamment en raison du risque d’AIT",
            "correct": true,
            "why": "La disparition des signes n’élimine pas l’urgence : un AIT doit être évalué rapidement."
          },
          {
            "label": "L’événement est nécessairement sans danger",
            "correct": false,
            "why": "La disparition de symptômes évocateurs d’AVC ne permet pas de les banaliser."
          },
          {
            "label": "Les examens ne sont utiles que si les troubles persistent",
            "correct": false,
            "why": "Les professionnels déterminent les investigations après l’alerte, même si les signes ont disparu."
          }
        ]
      }
    ],
    "debrief": "Le bon réflexe pédagogique est de repérer des signes neurologiques soudains, de demander de l’aide immédiatement et de transmettre les faits et leur chronologie. L’étudiant ne choisit ni examens ni traitements.",
    "takeaways": [
      "Début brutal : alerte sans délai",
      "Chronologie et signes constatés",
      "AIT = urgence, même si tout semble revenu à la normale"
    ],
    "sources": [
      {
        "label": "Assurance Maladie — AVC : que faire ?",
        "url": "https://www.ameli.fr/assure/sante/urgence/pathologies/avc"
      }
    ]
  },
  {
    "id": "hypoglycemie-observation",
    "topicId": "diabete",
    "level": 1,
    "title": "Sueurs et tremblements pendant une activité",
    "duration": 8,
    "setting": "Situation fictive — suivi d’une personne avec diabète",
    "intro": "Une personne vivant avec un diabète, dont tu connais seulement quelques éléments de contexte, décrit des tremblements, une sensation de faim et des sueurs.",
    "objective": "Distinguer signes observables et hypothèse d’hypoglycémie, sans décider de traitement.",
    "steps": [
      {
        "question": "Quelle formulation est la plus rigoureuse ?",
        "options": [
          {
            "label": "Ces signes peuvent évoquer une hypoglycémie ; il faut vérifier et alerter selon le contexte",
            "correct": true,
            "why": "Les symptômes sont évocateurs mais non spécifiques. La situation demande une vérification adaptée et une transmission."
          },
          {
            "label": "Le diagnostic est confirmé sans mesure ni contexte",
            "correct": false,
            "why": "Les signes ne suffisent pas à confirmer seuls une hypoglycémie."
          },
          {
            "label": "Les symptômes sont sans lien possible avec la glycémie",
            "correct": false,
            "why": "Sueurs, faim et tremblements figurent parmi les signes possibles."
          }
        ]
      },
      {
        "question": "Quelles informations permettent de mieux comprendre l’épisode ?",
        "options": [
          {
            "label": "Traitement, repas, activité, symptômes et données disponibles",
            "correct": true,
            "why": "Le risque d’hypoglycémie dépend notamment des traitements, des apports alimentaires et de l’activité."
          },
          {
            "label": "Uniquement la saison",
            "correct": false,
            "why": "La saison seule ne permet pas de comprendre la situation."
          },
          {
            "label": "Une dose d’insuline choisie au hasard",
            "correct": false,
            "why": "Aucune adaptation du traitement ne doit être improvisée."
          }
        ]
      },
      {
        "question": "La personne devient confuse et son état se dégrade. Que privilégier ?",
        "options": [
          {
            "label": "Une alerte urgente selon les procédures du service ou les secours",
            "correct": true,
            "why": "Une dégradation de l’état de conscience peut signaler une situation grave et nécessite une aide immédiate."
          },
          {
            "label": "Reporter toute transmission à demain",
            "correct": false,
            "why": "Cela retarderait la réponse à une dégradation potentiellement grave."
          },
          {
            "label": "Essayer une injection de sa propre initiative",
            "correct": false,
            "why": "Une administration nécessite le cadre, les compétences et les prescriptions appropriés."
          }
        ]
      }
    ],
    "debrief": "L’exercice porte sur la vigilance, les faits et la sécurité. Les protocoles de prise en charge d’une hypoglycémie doivent être appris avec l’équipe et ne sont pas remplacés par ce simulateur.",
    "takeaways": [
      "Symptômes évocateurs ≠ diagnostic certain",
      "Contexte du traitement, repas et activité",
      "Aggravation : appel rapide à une personne habilitée"
    ],
    "sources": [
      {
        "label": "Assurance Maladie — Hypoglycémie, hyperglycémie et acidocétose",
        "url": "https://www.ameli.fr/assure/sante/themes/diabete-adulte/diabete-symptomes-evolution/acido-cetose-hypoglycemie-hyperglycemie"
      }
    ]
  },
  {
    "id": "precautions-mains",
    "topicId": "hygiene",
    "level": 1,
    "title": "Après un contact avec l’environnement du patient",
    "duration": 7,
    "setting": "Situation fictive — précautions standard",
    "intro": "Dans un exercice simulé, un soignant termine une interaction puis touche une table située dans l’environnement proche d’une personne soignée.",
    "objective": "Reconnaître les indications d’hygiène des mains indépendamment de la propreté visible.",
    "steps": [
      {
        "question": "Quelle indication OMS dois-tu identifier après le contact avec l’environnement du patient ?",
        "options": [
          {
            "label": "Le cinquième moment d’hygiène des mains",
            "correct": true,
            "why": "L’OMS mentionne explicitement le contact avec l’environnement du patient."
          },
          {
            "label": "Aucune indication puisque le patient n’a pas été touché à nouveau",
            "correct": false,
            "why": "Le cinquième moment existe même sans nouveau contact direct avec le patient."
          },
          {
            "label": "Seulement le moment avant un geste aseptique",
            "correct": false,
            "why": "Ce moment est distinct du contact avec l’environnement après le soin."
          }
        ]
      },
      {
        "question": "Un autre soignant affirme que les gants dispensent de toute hygiène des mains. Que répondre ?",
        "options": [
          {
            "label": "Le port des gants ne remplace pas les indications d’hygiène des mains",
            "correct": true,
            "why": "Les gants ne dispensent pas de pratiquer l’hygiène des mains lorsqu’elle est indiquée."
          },
          {
            "label": "Les gants suppriment toutes les transmissions possibles",
            "correct": false,
            "why": "C’est une interprétation incorrecte des précautions standard."
          },
          {
            "label": "Le geste dépend uniquement de la durée du contact",
            "correct": false,
            "why": "Les indications reposent notamment sur la nature et le moment du contact."
          }
        ]
      },
      {
        "question": "Quelle méthode d’apprentissage est la plus adaptée ?",
        "options": [
          {
            "label": "Replacer les cinq moments dans plusieurs séquences de soins fictives",
            "correct": true,
            "why": "Le transfert d’une règle à des situations variées développe la compréhension."
          },
          {
            "label": "Retenir seulement « avant d’entrer » et « après sortir »",
            "correct": false,
            "why": "La règle simplifiée ne couvre pas les cinq indications reconnues."
          },
          {
            "label": "Ignorer la démarche si la peau paraît propre",
            "correct": false,
            "why": "La propreté visible n’est pas le seul critère de transmission."
          }
        ]
      }
    ],
    "debrief": "L’outil entraîne à reconnaître les indications ; les modalités concrètes dépendent du geste, du risque et des protocoles de l’établissement.",
    "takeaways": [
      "Cinq moments = contexte d’activité",
      "Contact environnement du patient = moment 5",
      "Gants ≠ hygiène des mains"
    ],
    "sources": [
      {
        "label": "OMS — Five Moments for Hand Hygiene",
        "url": "https://www.who.int/fr/publications/m/item/five-moments-for-hand-hygiene"
      }
    ]
  },
  {
    "id": "saed-transmission",
    "topicId": "communication",
    "level": 2,
    "title": "Une transmission incomplète à l’équipe",
    "duration": 10,
    "setting": "Situation fictive — relève entre professionnels",
    "intro": "Tu entends : « Il a changé, mais je ne sais pas trop quoi dire. » On te demande d’aider à structurer une transmission fictive.",
    "objective": "Organiser une communication avec SAED et distinguer faits, contexte, évaluation et demande.",
    "steps": [
      {
        "question": "Dans SAED, à quoi correspond la première lettre ?",
        "options": [
          {
            "label": "Situation : présenter immédiatement le motif de l’échange",
            "correct": true,
            "why": "La situation précise la raison de la communication."
          },
          {
            "label": "Solution : annoncer un traitement décidé par l’étudiant",
            "correct": false,
            "why": "L’étudiant ne détermine pas le traitement et ce n’est pas la signification de S."
          },
          {
            "label": "Statistiques : décrire les moyennes nationales",
            "correct": false,
            "why": "Ce n’est pas l’objet du cadre SAED."
          }
        ]
      },
      {
        "question": "Quelle transmission est la plus exploitable ?",
        "options": [
          {
            "label": "Décrire un changement objectivé, son contexte et le moment observé",
            "correct": true,
            "why": "Une transmission factuelle et contextualisée est plus utile qu’une impression isolée."
          },
          {
            "label": "Dire seulement « patient bizarre »",
            "correct": false,
            "why": "C’est une formulation subjective, imprécise et stigmatisante."
          },
          {
            "label": "Transmettre une hypothèse comme si elle était confirmée",
            "correct": false,
            "why": "Faits et hypothèses doivent rester distincts."
          }
        ]
      },
      {
        "question": "Que signifie la dernière lettre de SAED ?",
        "options": [
          {
            "label": "Demande : exprimer clairement ce qui est sollicité",
            "correct": true,
            "why": "La transmission aboutit à une demande explicite, adaptée au rôle des professionnels."
          },
          {
            "label": "Délais : attendre systématiquement vingt-quatre heures",
            "correct": false,
            "why": "Cela n’a aucun rapport avec l’acronyme et peut retarder une alerte."
          },
          {
            "label": "Diagnostic : certifier la cause",
            "correct": false,
            "why": "SAED n’autorise pas à affirmer un diagnostic non établi."
          }
        ]
      }
    ],
    "debrief": "L’exercice ne cherche pas à formuler un diagnostic. Il travaille la fiabilité de la transmission, la coordination et la demande claire à un professionnel compétent.",
    "takeaways": [
      "Situation : pourquoi communiquer ?",
      "Antécédents et Évaluation : faits utiles",
      "Demande : préciser le besoin"
    ],
    "sources": [
      {
        "label": "HAS — Guide SAED",
        "url": "https://www.has-sante.fr/jcms/c_1776178/fr/saed-un-guide-pour-faciliter-la-communication-entre-professionnels-de-sante"
      }
    ]
  },
  {
    "id": "consentement-retrait",
    "topicId": "consentement",
    "level": 2,
    "title": "La personne change d’avis avant un soin",
    "duration": 9,
    "setting": "Situation fictive — droit du patient",
    "intro": "Lors d’un exercice, une personne avait accepté un acte de soin, puis annonce juste avant qu’elle ne souhaite finalement plus le recevoir.",
    "objective": "Reconnaître le retrait du consentement et la nécessité d’une information adaptée.",
    "steps": [
      {
        "question": "Quelle affirmation correspond au Code de la santé publique ?",
        "options": [
          {
            "label": "Le consentement peut être retiré à tout moment",
            "correct": true,
            "why": "L’article L1111-4 prévoit expressément la possibilité de retirer son consentement."
          },
          {
            "label": "Le premier accord est irrévocable",
            "correct": false,
            "why": "Le consentement reste révocable."
          },
          {
            "label": "Les préférences du patient cessent de compter une fois le matériel préparé",
            "correct": false,
            "why": "Préparer un acte ne supprime pas les droits de la personne."
          }
        ]
      },
      {
        "question": "Dans une situation fictive ordinaire, quel comportement favorise la relation de soin ?",
        "options": [
          {
            "label": "Écouter les raisons exprimées, informer et solliciter l’équipe compétente",
            "correct": true,
            "why": "Le respect du choix et une information compréhensible sont essentiels ; le cadre légal spécifique doit être apprécié par les professionnels."
          },
          {
            "label": "Ignorer la personne pour terminer plus vite",
            "correct": false,
            "why": "Cette conduite ne respecte ni son autonomie ni la relation de soin."
          },
          {
            "label": "Promettre des conséquences médicales sans les connaître",
            "correct": false,
            "why": "Il ne faut pas inventer une explication clinique."
          }
        ]
      },
      {
        "question": "Que faire face à un cas juridiquement particulier ?",
        "options": [
          {
            "label": "Vérifier le cadre applicable avec les professionnels responsables",
            "correct": true,
            "why": "Les urgences, les personnes hors d’état d’exprimer leur volonté et d’autres situations obéissent à des dispositions particulières."
          },
          {
            "label": "Appliquer une règle unique à toutes les situations",
            "correct": false,
            "why": "Le droit prévoit des situations spécifiques qui doivent être analysées."
          },
          {
            "label": "Décider seul d’écarter la loi",
            "correct": false,
            "why": "Ce n’est pas possible."
          }
        ]
      }
    ],
    "debrief": "Le consentement libre et éclairé est au cœur du soin. Une simulation ne permet pas de trancher les exceptions juridiques complexes ni de remplacer une appréciation professionnelle.",
    "takeaways": [
      "Information et choix libre",
      "Retrait du consentement possible",
      "Cas particuliers à vérifier en équipe"
    ],
    "sources": [
      {
        "label": "Code de la santé publique — Article L1111-4",
        "url": "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054137430/"
      }
    ]
  },
  {
    "id": "recherche-donnees",
    "topicId": "recherche",
    "level": 2,
    "title": "Une affirmation médicale vue sur les réseaux",
    "duration": 10,
    "setting": "Situation fictive — démarche scientifique",
    "intro": "Un post populaire affirme qu’une méthode serait toujours plus efficace qu’une autre, sans décrire la population étudiée.",
    "objective": "Examiner une affirmation sans confondre popularité, preuve scientifique et recommandation.",
    "steps": [
      {
        "question": "Quelle première démarche est la plus pertinente ?",
        "options": [
          {
            "label": "Rechercher la source originale et son contexte",
            "correct": true,
            "why": "La vérification exige d’identifier le document et ses conditions de production."
          },
          {
            "label": "Croire immédiatement l’affirmation car elle est très partagée",
            "correct": false,
            "why": "Le nombre de partages ne mesure pas la qualité scientifique."
          },
          {
            "label": "Généraliser sans vérifier à tous les patients",
            "correct": false,
            "why": "Le contexte et les caractéristiques des populations comptent."
          }
        ]
      },
      {
        "question": "Dans l’analyse critique, quel élément manque le plus dans ce post ?",
        "options": [
          {
            "label": "Une méthode, une population et les limites des résultats",
            "correct": true,
            "why": "Ces éléments permettent de juger ce qui peut réellement être conclu."
          },
          {
            "label": "Des images plus colorées",
            "correct": false,
            "why": "Elles n’améliorent pas la validité de la preuve."
          },
          {
            "label": "Un titre en majuscules",
            "correct": false,
            "why": "La typographie ne remplace pas une démonstration."
          }
        ]
      },
      {
        "question": "Quelle conclusion est la mieux formulée pour une synthèse d’étude ?",
        "options": [
          {
            "label": "Les résultats concernent une population définie et ont des limites",
            "correct": true,
            "why": "Une conclusion responsable précise son périmètre et ses incertitudes."
          },
          {
            "label": "Le résultat vaut pour tous, sans exception",
            "correct": false,
            "why": "Cette extrapolation n’est pas justifiée."
          },
          {
            "label": "L’étude suffit à prescrire immédiatement une méthode",
            "correct": false,
            "why": "L’adaptation à la pratique exige recommandations, compétences et contexte."
          }
        ]
      }
    ],
    "debrief": "Le domaine E du référentiel 2026 mobilise démarche scientifique et données probantes. Le but est d’apprendre à évaluer une information, sans transformer une publication en prescription.",
    "takeaways": [
      "Revenir à la source",
      "Vérifier population, méthode et limites",
      "Ne pas confondre résultat et recommandation"
    ],
    "sources": [
      {
        "label": "Légifrance — Référentiel de formation 2026 (domaine E)",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/"
      }
    ]
  },
  {
    "id": "prevention-campagne",
    "topicId": "prevention",
    "level": 3,
    "title": "Concevoir une action de prévention compréhensible",
    "duration": 11,
    "setting": "Situation fictive — atelier de prévention communautaire",
    "intro": "Une équipe souhaite expliquer à un groupe d’adultes un enjeu de prévention. Le public a des connaissances variées et la durée de l’atelier est courte.",
    "objective": "Définir un public, un objectif vérifiable et une évaluation sans promettre d’effet clinique non établi.",
    "steps": [
      {
        "question": "Quelle préparation répond le mieux au référentiel 2026 ?",
        "options": [
          {
            "label": "Identifier le public, ses besoins et les obstacles à la compréhension",
            "correct": true,
            "why": "La prévention et la promotion de la santé doivent être adaptées à la population et au contexte."
          },
          {
            "label": "Préparer le même discours technique quel que soit le public",
            "correct": false,
            "why": "La personnalisation facilite la compréhension et la pertinence de l’action."
          },
          {
            "label": "Éviter d’identifier les besoins du groupe",
            "correct": false,
            "why": "Cela rend difficile la définition d’un objectif adapté."
          }
        ]
      },
      {
        "question": "Quel objectif d’atelier est le plus évaluable ?",
        "options": [
          {
            "label": "À la fin, les participants peuvent citer deux ressources d’information fiables",
            "correct": true,
            "why": "Un comportement observable peut être vérifié sans prétendre mesurer instantanément un résultat de santé."
          },
          {
            "label": "Tous les participants seront définitivement protégés",
            "correct": false,
            "why": "Il est impossible de garantir un tel résultat."
          },
          {
            "label": "Le groupe aura simplement passé un bon moment",
            "correct": false,
            "why": "L’expérience importe, mais l’objectif éducatif doit être précisé."
          }
        ]
      },
      {
        "question": "Quelle méthode de retour est la plus constructive ?",
        "options": [
          {
            "label": "Poser une question de reformulation et noter les points mal compris",
            "correct": true,
            "why": "Une vérification de compréhension permet d’améliorer l’action de prévention."
          },
          {
            "label": "N’évaluer que le nombre de chaises de la salle",
            "correct": false,
            "why": "Cet indicateur n’évalue pas la compréhension."
          },
          {
            "label": "Supposer que personne n’a de question",
            "correct": false,
            "why": "L’absence de question n’est pas une preuve de compréhension."
          }
        ]
      }
    ],
    "debrief": "Une démarche éducative utile précise le besoin, l’objectif et l’évaluation. La portée et l’efficacité réelle d’une action de santé exigent des méthodes adaptées, au-delà d’un atelier fictif.",
    "takeaways": [
      "Public et besoins",
      "Objectif observable",
      "Évaluation de la compréhension"
    ],
    "sources": [
      {
        "label": "Légifrance — Référentiel de formation 2026 (domaine C)",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/"
      }
    ]
  },
  {
    "id": "coordination-equipe",
    "topicId": "equipe",
    "level": 3,
    "title": "Coordonner une situation sans perdre l’information",
    "duration": 12,
    "setting": "Situation fictive — réunion de coordination",
    "intro": "Dans un exercice, deux intervenants rapportent des informations différentes sur une même situation. Chacun ne connaît qu’une partie des observations.",
    "objective": "Reconnaître l’intérêt d’une coordination explicite et d’un partage d’informations respectant les rôles.",
    "steps": [
      {
        "question": "Quel premier réflexe améliore la compréhension collective ?",
        "options": [
          {
            "label": "Rassembler les informations pertinentes et expliciter leurs sources",
            "correct": true,
            "why": "Une vision commune commence par des faits contextualisés et attribués correctement."
          },
          {
            "label": "Choisir l’avis le plus affirmatif sans justification",
            "correct": false,
            "why": "La confiance seule ne suffit pas à établir la fiabilité d’une information."
          },
          {
            "label": "Ne transmettre que les impressions personnelles",
            "correct": false,
            "why": "Il faut distinguer observations et interprétations."
          }
        ]
      },
      {
        "question": "Quelle manière de répartir les responsabilités est appropriée ?",
        "options": [
          {
            "label": "Clarifier qui fait quoi dans le cadre des compétences et procédures",
            "correct": true,
            "why": "La coordination repose sur des rôles identifiés et des circuits de décision compréhensibles."
          },
          {
            "label": "Attribuer à l’étudiant une responsabilité dépassant ses compétences",
            "correct": false,
            "why": "Les compétences et la supervision doivent être respectées."
          },
          {
            "label": "Laisser chaque intervenant supposer ce que fait l’autre",
            "correct": false,
            "why": "Cela crée un risque de perte d’information."
          }
        ]
      },
      {
        "question": "Après l’action fictive, que doit favoriser l’analyse réflexive ?",
        "options": [
          {
            "label": "Identifier ce qui a fonctionné, les difficultés et les améliorations possibles",
            "correct": true,
            "why": "L’analyse réflexive participe à l’amélioration continue des apprentissages et de la coordination."
          },
          {
            "label": "Chercher uniquement un coupable",
            "correct": false,
            "why": "Cela réduit les possibilités d’apprentissage et de coopération."
          },
          {
            "label": "Ne jamais revenir sur les transmissions",
            "correct": false,
            "why": "Le retour d’expérience facilite les progrès."
          }
        ]
      }
    ],
    "debrief": "Le référentiel 2026 associe communication, travail en équipe, coordination et leadership. Ce cas entraîne à structurer une collaboration, pas à décider d’une prise en charge réelle.",
    "takeaways": [
      "Partager des faits pertinents",
      "Clarifier les compétences et responsabilités",
      "Réfléchir collectivement aux améliorations"
    ],
    "sources": [
      {
        "label": "Légifrance — Référentiel 2026 (domaine D)",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/"
      }
    ]
  },
  {
    "id": "lecture-scientifique",
    "topicId": "lecture-science",
    "level": 3,
    "title": "Comparer deux sources qui se contredisent",
    "duration": 10,
    "setting": "Situation fictive — travail de recherche",
    "intro": "Deux publications semblent aboutir à des conclusions différentes sur un même sujet. Une étudiante doit produire une synthèse pour son groupe.",
    "objective": "Comparer les populations, méthodes et limites avant de conclure.",
    "steps": [
      {
        "question": "Avant d’opposer deux conclusions, quelle comparaison faire ?",
        "options": [
          {
            "label": "Vérifier si les populations et les méthodes sont comparables",
            "correct": true,
            "why": "Des contextes différents peuvent expliquer des résultats différents."
          },
          {
            "label": "Retenir seulement la publication la plus récente sans la lire",
            "correct": false,
            "why": "La date ne suffit pas à juger la méthode."
          },
          {
            "label": "Retenir uniquement le texte le plus court",
            "correct": false,
            "why": "La longueur ne permet pas d’évaluer la validité."
          }
        ]
      },
      {
        "question": "Quel élément doit apparaître dans une synthèse fiable ?",
        "options": [
          {
            "label": "Les résultats et les principales limites des publications",
            "correct": true,
            "why": "L’incertitude et les limites sont essentielles à une synthèse honnête."
          },
          {
            "label": "Une certitude absolue même si les études divergent",
            "correct": false,
            "why": "La divergence impose une analyse prudente."
          },
          {
            "label": "Uniquement le nom du média ayant partagé l’étude",
            "correct": false,
            "why": "La source scientifique originale est nécessaire."
          }
        ]
      },
      {
        "question": "Comment présenter une conclusion prudente ?",
        "options": [
          {
            "label": "Décrire ce que les études permettent et ne permettent pas de conclure",
            "correct": true,
            "why": "Une conclusion étayée doit rester proportionnée à la force des données."
          },
          {
            "label": "Faire une prescription à partir de la synthèse",
            "correct": false,
            "why": "Les décisions thérapeutiques reposent sur les compétences, recommandations et contexte clinique."
          },
          {
            "label": "Ignorer les résultats qui déplaisent",
            "correct": false,
            "why": "La sélection arbitraire biaise le travail de recherche."
          }
        ]
      }
    ],
    "debrief": "L’exercice reprend les principes du domaine E : recherche, données probantes, analyse critique et communication des limites.",
    "takeaways": [
      "Comparer méthodes et populations",
      "Expliquer les divergences",
      "Conclusions proportionnées aux preuves"
    ],
    "sources": [
      {
        "label": "Légifrance — Référentiel infirmier 2026 (domaine E)",
        "url": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000053570499/"
      }
    ]
  }
];

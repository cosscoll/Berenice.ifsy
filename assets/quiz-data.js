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
  }
];

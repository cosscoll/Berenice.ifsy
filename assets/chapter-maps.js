/**
 * Cartes mentales de CHAPITRE — synthèses plus larges que les fiches FSRS
 * individuelles, pour réviser un domaine entier d'un coup d'œil. Contenu
 * rédigé à partir de connaissances de référence en soins infirmiers,
 * vérifié pour les scores/échelles (Glasgow, Braden, OMS).
 */
const CHAPTER_MAPS = [
  {
    id: 'urgences',
    titre: 'Urgences & AFGSU',
    ue: 'UE 4.3',
    md: `# Urgences
## ABCDE
### Airway (voies aériennes)
### Breathing (respiration)
### Circulation
### Disability (neuro)
### Exposure
## Arrêt cardio-respiratoire
### RCP 30:2
### Fréquence 100-120/min
### DAE dès que possible
## Choc
### Hypovolémique
### Cardiogénique
### Distributif (septique, anaphylactique)
### Obstructif
## Score de Glasgow
### Yeux /4
### Verbal /5
### Moteur /6
## Brûlures
### Règle des 9 de Wallace`,
  },
  {
    id: 'cardio',
    titre: 'Cardiovasculaire',
    ue: 'UE 2.7',
    md: `# Cardiovasculaire
## Insuffisance cardiaque
### Gauche : dyspnée, OAP, crépitants
### Droite : œdèmes MI, turgescence jugulaire
## Syndrome coronarien aigu
### Douleur constrictive irradiante
### ECG en urgence
### Troponine
## Arythmies
### Bradycardie / Tachycardie
### Fibrillation atriale
## Anticoagulants
### AVK — surveillance INR (cible 2-3)
### Héparines
### AOD (anticoagulants oraux directs)
## Facteurs de risque cardiovasculaire
### Tabac, HTA, diabète, dyslipidémie, sédentarité`,
  },
  {
    id: 'respi',
    titre: 'Respiratoire',
    ue: 'UE 2.7 / 2.8',
    md: `# Respiratoire
## BPCO
### Dyspnée d'effort progressive
### Distension thoracique
### Oxygénothérapie prudente (risque hypercapnie)
## Asthme
### Sibilants, dyspnée expiratoire
### Bronchodilatateurs
## Pneumopathie
### Fièvre, toux, crépitants
### Antibiothérapie si bactérienne
## Oxygénothérapie
### Lunettes : 1-6 L/min
### Masque simple : 5-8 L/min
### Masque haute concentration : 10-15 L/min
## Surveillance
### SpO2, fréquence respiratoire, coloration`,
  },
  {
    id: 'pharmaco',
    titre: 'Pharmacologie générale',
    ue: 'UE 2.11',
    md: `# Pharmacologie
## Règle des 5B
### Bon patient
### Bon médicament
### Bonne dose
### Bonne voie
### Bon moment
## Paliers OMS (douleur)
### Palier 1 : paracétamol
### Palier 2 : tramadol, codéine
### Palier 3 : morphine
## Antidotes à connaître
### AVK → Vitamine K
### Paracétamol → N-acétylcystéine
### Opioïdes → Naloxone
### Benzodiazépines → Flumazénil
## Voies d'administration
### Orale, IV, IM, SC, transdermique
## ADME
### Absorption, Distribution, Métabolisme, Élimination`,
  },
  {
    id: 'hygiene',
    titre: 'Hygiène & infectiologie',
    ue: 'UE 2.10',
    md: `# Hygiène & infectiologie
## 5 moments OMS (hygiène des mains)
### 1. Avant contact patient
### 2. Avant geste aseptique
### 3. Après exposition liquide biologique
### 4. Après contact patient
### 5. Après contact environnement
## Chaîne de l'infection
### Agent → Réservoir → Sortie → Transmission → Entrée → Hôte
## Précautions complémentaires
### Air (FFP2) : tuberculose
### Gouttelettes (masque chirurgical) : grippe
### Contact (gants, surblouse) : BMR, gale
## Précautions standard
### Applicables à TOUT patient, systématiquement`,
  },
  {
    id: 'plaies',
    titre: 'Plaies & escarres',
    ue: 'UE 4.1 / 4.5',
    md: `# Plaies & escarres
## Échelle de Braden
### Perception sensorielle /4
### Humidité /4
### Activité /4
### Mobilité /4
### Nutrition /4
### Friction-cisaillement /3
### Score total 6-23 (bas = risque élevé)
## Prévention escarre
### Changement de position toutes les 2-3h
### Surveillance des points d'appui
### Matelas adapté
## Cicatrisation
### Phase inflammatoire
### Phase de bourgeonnement
### Phase d'épidermisation`,
  },
  {
    id: 'psychiatrie',
    titre: 'Psychiatrie',
    ue: 'UE 2.6',
    md: `# Psychiatrie
## Modalités de soins sans consentement
### SDT — Soins à la Demande d'un Tiers
### SDRE — Soins sur Décision du Représentant de l'État (préfet)
### SPI — Péril imminent, sans tiers
## Crise d'angoisse aiguë
### Communication apaisante
### Éliminer une cause organique
### Ne pas banaliser
## Communication thérapeutique
### Écoute active
### Reformulation
### Distance professionnelle`,
  },
];

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
  {
    id: 'pediatrie',
    titre: 'Pédiatrie — constantes par âge',
    ue: 'UE 2.2 / 2.4',
    md: `# Pédiatrie
## Fréquence cardiaque (bpm)
### Nouveau-né : 120-160
### 1-3 ans : 100-140
### 4-10 ans : 70-120
### Adolescent : 60-100
## Fréquence respiratoire (/min)
### Nouveau-né : 30-60
### 1-3 ans : 20-30
### 4-10 ans : 16-25
### Adolescent : 12-20
## Tension artérielle systolique
### Nouveau-né : ~60-70
### Règle 1-10 ans : 70 + (âge x 2)
## Particularités
### Un enfant compense longtemps avant de décompenser brutalement
### Valeurs indicatives — varient selon les sources`,
  },
  {
    id: 'diabete',
    titre: 'Diabète',
    ue: 'UE 2.7 / 4.6',
    md: `# Diabète
## Type 1
### Carence totale en insuline
### Souvent découvert chez le sujet jeune
### Insulinothérapie à vie
## Type 2
### Insulino-résistance progressive
### Lié au surpoids, sédentarité
### Règles hygiéno-diététiques + ADO puis insuline
## Complications aiguës
### Hypoglycémie : sueurs, tremblements, confusion
### Hyperglycémie / acidocétose : polyurie, polydipsie, haleine cétonique
## Types d'insuline
### Analogue rapide (délai ~15 min)
### Ordinaire (délai ~30 min)
### Intermédiaire NPH (12-18h)
### Lente / basale (24h+)
## Éducation thérapeutique
### Auto-surveillance glycémique
### Reconnaître l'hypoglycémie
### Adapter l'alimentation`,
  },
  {
    id: 'douleur-palliatif',
    titre: 'Douleur & soins palliatifs',
    ue: 'UE 4.2 / 4.7',
    md: `# Douleur & soins palliatifs
## Échelles de douleur
### EVA — curseur visuel 0-10
### EN — chiffre oral 0-10
### EVS — mots (absente/faible/modérée/intense)
### Hétéro-évaluation si non communicant (Algoplus, ECPA)
## Paliers OMS
### Palier 1 : paracétamol
### Palier 2 : tramadol, codéine
### Palier 3 : morphine
## Loi Claeys-Leonetti (2016)
### Droit à la sédation profonde et continue
### Directives anticipées
### Personne de confiance
## Accompagnement de fin de vie
### Écoute active, ne pas fuir les questions
### Confort avant tout (soins de bouche, positionnement)
### Soutien de la famille`,
  },
  {
    id: 'demarche-soins',
    titre: 'Démarche de soins infirmiers',
    ue: 'UE 3.1 / 3.2',
    md: `# Démarche de soins infirmiers
## 1. Recueil de données
### Entretien, observation, dossier patient
## 2. Analyse et diagnostic infirmier
### Identification des besoins perturbés
### Modèle de Virginia Henderson (14 besoins)
## 3. Planification
### Objectifs de soins réalistes et mesurables
### Priorisation
## 4. Réalisation
### Mise en œuvre des actions de soins
## 5. Évaluation
### Atteinte des objectifs ?
### Réajustement si besoin
## Transmissions
### Écrites (dossier de soins)
### Ciblées : Donnée / Action / Résultat (DAR)`,
  },
  {
    id: 'geriatrie',
    titre: 'Gériatrie',
    ue: 'UE 2.4 / 4.1',
    md: `# Gériatrie
## Risque de chute
### Troubles de l'équilibre, polymédication
### Environnement (tapis, éclairage, chaussage)
### Évaluation : test "Get Up and Go"
## Fragilité
### Perte de poids involontaire
### Vitesse de marche ralentie
### Sarcopénie (perte de masse musculaire)
## Polymédication
### Risque d'interactions
### Réévaluation régulière de l'ordonnance
## Prévention de la iatrogénie
### Adapter les doses à la fonction rénale
### Surveiller la confusion (signe d'alerte, pas "normal avec l'âge")`,
  },
  {
    id: 'biologie',
    titre: 'Valeurs biologiques usuelles',
    ue: 'UE 2.1 / 4.4',
    md: `# Valeurs biologiques (indicatives — varient selon labo)
## Ionogramme sanguin
### Sodium (Na+) : 135-145 mmol/L
### Potassium (K+) : 3,5-5,0 mmol/L
### Calcium (Ca2+) : 2,20-2,60 mmol/L
## Fonction rénale
### Créatinine : ~60-110 µmol/L (varie selon sexe)
### Urée : 2,5-7,5 mmol/L
## Glycémie
### À jeun : 0,70-1,10 g/L
## Alerte à retenir
### Hyperkaliémie sévère si K+ > 6 mmol/L → risque cardiaque
### Hyponatrémie sévère si Na+ < 120 mmol/L`,
  },
  {
    id: 'neuro-avc',
    titre: 'Neurologie & AVC',
    ue: 'UE 2.7 / 4.3',
    md: `# AVC
## Deux grands types
### Ischémique (~80%) : caillot qui bouche une artère
### Hémorragique (~20%) : rupture d'un vaisseau
## Reconnaissance — FAST
### Face : asymétrie du visage
### Arm : faiblesse d'un bras
### Speech : trouble de la parole
### Time : heure de début = urgence absolue
## Prise en charge
### Appel 15 immédiat
### Ne rien donner par voie orale (risque de fausse route)
### Noter l'heure exacte des premiers symptômes
## Score de Glasgow
### Utilisé pour suivre l'état de conscience`,
  },
  {
    id: 'administration',
    titre: "Voies d'administration & calcul de dose",
    ue: 'UE 2.11',
    md: `# Voies d'administration
## Entérale
### Orale (per os)
### Sonde naso-gastrique
## Parentérale
### IV — action rapide, directe dans le sang
### IM — résorption plus lente
### SC — pour insuline, anticoagulants
## Autres
### Transdermique (patch)
### Inhalée (aérosols)
## Calcul de dose — méthode de base
### Dose prescrite ÷ dose du flacon × volume du flacon
### Toujours vérifier l'unité (mg vs mL vs UI)
## Règle des 5B
### Bon patient, médicament, dose, voie, moment`,
  },
];

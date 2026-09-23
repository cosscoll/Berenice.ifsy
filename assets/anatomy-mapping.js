/**
 * Lexique anatomique français + coordonnées de repères sur une silhouette
 * schématique commune (viewBox 0 0 200 420). Schéma simplifié à visée
 * pédagogique (repérage général), PAS une représentation anatomiquement
 * précise à l'échelle — à ne pas utiliser pour de la localisation clinique
 * fine. Certaines structures de la liste n'ont pas de repère dessiné (trop
 * proches les unes des autres pour rester lisible) mais restent listées.
 */
const ANATOMY_SYSTEMS = [
  { id: 'skeletal', fr: 'Système squelettique', color: '#8C8272',
    structures: [
      { en: 'Skull', fr: 'Crâne', x: 100, y: 38 },
      { en: 'Vertebral column', fr: 'Colonne vertébrale', x: 100, y: 150 },
      { en: 'Rib cage', fr: 'Cage thoracique', x: 100, y: 120 },
      { en: 'Humerus', fr: 'Humérus', x: 60, y: 150 },
      { en: 'Radius', fr: 'Radius' }, { en: 'Ulna', fr: 'Cubitus (ulna)' },
      { en: 'Femur', fr: 'Fémur', x: 88, y: 310 },
      { en: 'Tibia', fr: 'Tibia', x: 88, y: 375 }, { en: 'Fibula', fr: 'Péroné (fibula)' },
      { en: 'Pelvis', fr: 'Bassin (pelvis)', x: 100, y: 250 },
    ]},
  { id: 'muscular', fr: 'Système musculaire', color: '#B1502F',
    structures: [
      { en: 'Deltoid', fr: 'Deltoïde', x: 62, y: 108 },
      { en: 'Biceps brachii', fr: 'Biceps brachial', x: 55, y: 150 },
      { en: 'Quadriceps femoris', fr: 'Quadriceps fémoral', x: 88, y: 320 },
      { en: 'Gastrocnemius', fr: 'Gastrocnémien (mollet)', x: 88, y: 385 },
      { en: 'Rectus abdominis', fr: "Grand droit de l'abdomen", x: 100, y: 195 },
      { en: 'Trapezius', fr: 'Trapèze', x: 100, y: 95 },
    ]},
  { id: 'cardiovascular', fr: 'Système cardiovasculaire', color: '#B1502F',
    structures: [
      { en: 'Heart', fr: 'Cœur', x: 92, y: 145 },
      { en: 'Left ventricle', fr: 'Ventricule gauche' }, { en: 'Right ventricle', fr: 'Ventricule droit' },
      { en: 'Left atrium', fr: 'Oreillette gauche' }, { en: 'Right atrium', fr: 'Oreillette droite' },
      { en: 'Aorta', fr: 'Aorte', x: 100, y: 115 },
      { en: 'Superior vena cava', fr: 'Veine cave supérieure' }, { en: 'Inferior vena cava', fr: 'Veine cave inférieure' },
      { en: 'Pulmonary artery', fr: 'Artère pulmonaire' },
      { en: 'Carotid artery', fr: 'Artère carotide', x: 105, y: 75 },
    ]},
  { id: 'respiratory', fr: 'Système respiratoire', color: '#5A8FA8',
    structures: [
      { en: 'Trachea', fr: 'Trachée', x: 100, y: 95 },
      { en: 'Left lung', fr: 'Poumon gauche', x: 78, y: 135 },
      { en: 'Right lung', fr: 'Poumon droit', x: 122, y: 135 },
      { en: 'Bronchus', fr: 'Bronche', x: 100, y: 118 },
      { en: 'Diaphragm', fr: 'Diaphragme', x: 100, y: 178 },
      { en: 'Larynx', fr: 'Larynx', x: 100, y: 80 }, { en: 'Pharynx', fr: 'Pharynx', x: 100, y: 68 },
    ]},
  { id: 'digestive', fr: 'Système digestif', color: '#C9962F',
    structures: [
      { en: 'Esophagus', fr: 'Œsophage', x: 100, y: 108 },
      { en: 'Stomach', fr: 'Estomac', x: 112, y: 168 },
      { en: 'Liver', fr: 'Foie', x: 82, y: 162 },
      { en: 'Gallbladder', fr: 'Vésicule biliaire', x: 90, y: 178 },
      { en: 'Pancreas', fr: 'Pancréas', x: 104, y: 182 },
      { en: 'Small intestine', fr: 'Intestin grêle', x: 100, y: 210 },
      { en: 'Large intestine (colon)', fr: 'Gros intestin (côlon)', x: 100, y: 228 },
      { en: 'Rectum', fr: 'Rectum', x: 100, y: 250 },
      { en: 'Spleen', fr: 'Rate', x: 124, y: 162 },
    ]},
  { id: 'urinary', fr: 'Système urinaire', color: '#C9962F',
    structures: [
      { en: 'Kidney', fr: 'Rein', x: 82, y: 195 },
      { en: 'Ureter', fr: 'Uretère', x: 90, y: 225 },
      { en: 'Bladder', fr: 'Vessie', x: 100, y: 252 },
      { en: 'Urethra', fr: 'Urètre', x: 100, y: 268 },
    ]},
  { id: 'nervous', fr: 'Système nerveux', color: '#7C5CA8',
    structures: [
      { en: 'Brain', fr: 'Encéphale (cerveau)', x: 96, y: 33 },
      { en: 'Cerebellum', fr: 'Cervelet', x: 110, y: 42 },
      { en: 'Spinal cord', fr: 'Moelle épinière', x: 100, y: 155 },
      { en: 'Sciatic nerve', fr: 'Nerf sciatique', x: 108, y: 300 },
      { en: 'Vagus nerve', fr: 'Nerf vague (X)', x: 106, y: 90 },
    ]},
  { id: 'endocrine', fr: 'Système endocrinien', color: '#7C5CA8',
    structures: [
      { en: 'Thyroid gland', fr: 'Glande thyroïde', x: 100, y: 78 },
      { en: 'Adrenal gland', fr: 'Glande surrénale', x: 85, y: 192 },
      { en: 'Pituitary gland', fr: 'Hypophyse', x: 100, y: 36 },
      { en: 'Pancreas (endocrine)', fr: 'Pancréas (fonction endocrine)', x: 104, y: 182 },
    ]},
  { id: 'reproductive', fr: 'Système reproducteur', color: '#B1502F',
    structures: [
      { en: 'Uterus', fr: 'Utérus', x: 96, y: 248 },
      { en: 'Ovary', fr: 'Ovaire', x: 106, y: 248 },
      { en: 'Testis', fr: 'Testicule', x: 100, y: 270 },
      { en: 'Prostate', fr: 'Prostate', x: 100, y: 258 },
    ]},
  { id: 'integumentary', fr: 'Système tégumentaire (peau)', color: '#C9962F',
    structures: [
      { en: 'Skin', fr: 'Peau', x: 140, y: 170 },
      { en: 'Subcutaneous tissue', fr: 'Tissu sous-cutané', x: 60, y: 170 },
    ]},
  { id: 'lymphatic', fr: 'Système lymphatique', color: '#5A8FA8',
    structures: [
      { en: 'Lymph node', fr: 'Ganglion lymphatique', x: 118, y: 88 },
      { en: 'Thymus', fr: 'Thymus', x: 100, y: 108 },
      { en: 'Spleen', fr: 'Rate', x: 124, y: 162 },
    ]},
];

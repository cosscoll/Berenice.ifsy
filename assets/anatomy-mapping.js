/** Mapping anglais -> français des systèmes anatomiques (ébauche, 64 structures). */
const ANATOMY_SYSTEMS = [
  { id: 'skeletal', fr: 'Système squelettique', structures: [
    { en: 'Skull', fr: 'Crâne' }, { en: 'Vertebral column', fr: 'Colonne vertébrale' },
    { en: 'Rib cage', fr: 'Cage thoracique' }, { en: 'Humerus', fr: 'Humérus' },
    { en: 'Radius', fr: 'Radius' }, { en: 'Ulna', fr: 'Cubitus (ulna)' },
    { en: 'Femur', fr: 'Fémur' }, { en: 'Tibia', fr: 'Tibia' },
    { en: 'Fibula', fr: 'Péroné (fibula)' }, { en: 'Pelvis', fr: 'Bassin (pelvis)' },
  ]},
  { id: 'muscular', fr: 'Système musculaire', structures: [
    { en: 'Deltoid', fr: 'Deltoïde' }, { en: 'Biceps brachii', fr: 'Biceps brachial' },
    { en: 'Quadriceps femoris', fr: 'Quadriceps fémoral' }, { en: 'Gastrocnemius', fr: 'Gastrocnémien' },
    { en: 'Rectus abdominis', fr: "Grand droit de l'abdomen" }, { en: 'Trapezius', fr: 'Trapèze' },
  ]},
  { id: 'cardiovascular', fr: 'Système cardiovasculaire', structures: [
    { en: 'Heart', fr: 'Cœur' }, { en: 'Left ventricle', fr: 'Ventricule gauche' },
    { en: 'Right ventricle', fr: 'Ventricule droit' }, { en: 'Left atrium', fr: 'Oreillette gauche' },
    { en: 'Right atrium', fr: 'Oreillette droite' }, { en: 'Aorta', fr: 'Aorte' },
    { en: 'Superior vena cava', fr: 'Veine cave supérieure' }, { en: 'Inferior vena cava', fr: 'Veine cave inférieure' },
    { en: 'Pulmonary artery', fr: 'Artère pulmonaire' }, { en: 'Carotid artery', fr: 'Artère carotide' },
  ]},
  { id: 'respiratory', fr: 'Système respiratoire', structures: [
    { en: 'Trachea', fr: 'Trachée' }, { en: 'Left lung', fr: 'Poumon gauche' },
    { en: 'Right lung', fr: 'Poumon droit' }, { en: 'Bronchus', fr: 'Bronche' },
    { en: 'Diaphragm', fr: 'Diaphragme' }, { en: 'Larynx', fr: 'Larynx' }, { en: 'Pharynx', fr: 'Pharynx' },
  ]},
  { id: 'digestive', fr: 'Système digestif', structures: [
    { en: 'Esophagus', fr: 'Œsophage' }, { en: 'Stomach', fr: 'Estomac' },
    { en: 'Liver', fr: 'Foie' }, { en: 'Gallbladder', fr: 'Vésicule biliaire' },
    { en: 'Pancreas', fr: 'Pancréas' }, { en: 'Small intestine', fr: 'Intestin grêle' },
    { en: 'Large intestine', fr: 'Gros intestin (côlon)' }, { en: 'Rectum', fr: 'Rectum' }, { en: 'Spleen', fr: 'Rate' },
  ]},
  { id: 'urinary', fr: 'Système urinaire', structures: [
    { en: 'Kidney', fr: 'Rein' }, { en: 'Ureter', fr: 'Uretère' },
    { en: 'Bladder', fr: 'Vessie' }, { en: 'Urethra', fr: 'Urètre' },
  ]},
  { id: 'nervous', fr: 'Système nerveux', structures: [
    { en: 'Brain', fr: 'Encéphale' }, { en: 'Cerebellum', fr: 'Cervelet' },
    { en: 'Spinal cord', fr: 'Moelle épinière' }, { en: 'Sciatic nerve', fr: 'Nerf sciatique' }, { en: 'Vagus nerve', fr: 'Nerf vague (X)' },
  ]},
  { id: 'endocrine', fr: 'Système endocrinien', structures: [
    { en: 'Thyroid gland', fr: 'Glande thyroïde' }, { en: 'Adrenal gland', fr: 'Glande surrénale' },
    { en: 'Pituitary gland', fr: 'Hypophyse' }, { en: 'Pancreas (endocrine)', fr: 'Pancréas (fonction endocrine)' },
  ]},
  { id: 'reproductive', fr: 'Système reproducteur', structures: [
    { en: 'Uterus', fr: 'Utérus' }, { en: 'Ovary', fr: 'Ovaire' },
    { en: 'Testis', fr: 'Testicule' }, { en: 'Prostate', fr: 'Prostate' },
  ]},
  { id: 'integumentary', fr: 'Système tégumentaire (peau)', structures: [
    { en: 'Skin', fr: 'Peau' }, { en: 'Subcutaneous tissue', fr: 'Tissu sous-cutané' },
  ]},
  { id: 'lymphatic', fr: 'Système lymphatique', structures: [
    { en: 'Lymph node', fr: 'Ganglion lymphatique' }, { en: 'Thymus', fr: 'Thymus' }, { en: 'Spleen', fr: 'Rate' },
  ]},
];

/**
 * Vraies planches anatomiques — Gray's Anatomy, 20e édition américaine
 * (1918), domaine public (droits expirés, dans le monde entier).
 *
 * URLs DIRECTES upload.wikimedia.org (pas de redirection Special:FilePath,
 * qui s'est révélée peu fiable en usage réel). Le chemin est calculé à
 * partir du hash MD5 du nom de fichier — c'est l'algorithme officiel de
 * MediaWiki pour organiser ses fichiers, vérifié en le testant sur un
 * fichier dont le vrai chemin était connu avant de générer les autres.
 * Chaque nom de fichier a été confirmé individuellement (via les pages
 * Wikimedia Commons elles-mêmes et/ou des cas cliniques publiés sur
 * radiopaedia.org qui les utilisent déjà en production).
 */
const REAL_PLATES = [
  { system: 'skeletal', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Gray197.png', titre: 'Le crâne, vue latérale' },
  { system: 'skeletal', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Gray198.png', titre: 'Le crâne, vue de face' },
  { system: 'skeletal', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Gray87.png', titre: 'Deuxième vertèbre cervicale (axis), vue de dessus' },
  { system: 'skeletal', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Gray88.png', titre: 'Deuxième vertèbre cervicale (axis), vue de côté' },

  { system: 'muscular', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Gray392.png', titre: 'Muscle oblique externe de la paroi abdominale' },
  { system: 'muscular', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Gray397.png', titre: 'Muscles profonds de la paroi abdominale antérieure' },

  { system: 'cardiovascular', url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Gray492.png', titre: 'Surfaces du cœur' },

  { system: 'respiratory', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Gray965.png', titre: 'Plèvre et poumons, vue antérieure' },
  { system: 'respiratory', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Gray966.png', titre: 'Plèvre et poumons, vue antérolatérale' },

  { system: 'digestive', url: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Gray613.png', titre: "Vaisseaux lymphatiques de l'estomac" },

  { system: 'nervous', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gray679.png', titre: 'Pyramides et olives du bulbe rachidien' },

  { system: 'urinary', url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Gray1128.png', titre: 'Schéma du tubule rénal et de sa vascularisation' },
  { system: 'urinary', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Gray1129.png', titre: 'Distribution des vaisseaux sanguins dans le cortex rénal' },

  { system: 'reproductive', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Gray1148.png', titre: 'Testicule et cordon spermatique' },
  { system: 'reproductive', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Gray1149.png', titre: 'Testicule et épididyme' },

  { system: 'lymphatic', url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Gray602.png', titre: 'Lymphatiques de la tête et du cou' },
  { system: 'lymphatic', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Gray620.png', titre: "Lymphatiques de l'utérus" },
  { system: 'lymphatic', url: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Gray621.png', titre: 'Lymphatiques du thorax et de l\'abdomen' },

  { system: 'endocrine', url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Gray1120.png', titre: 'Glandes surrénales' },
  { system: 'endocrine', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Gray560.png', titre: 'Veines de la glande thyroïde' },
];

function platesForSystem(systemId) {
  return REAL_PLATES.filter((p) => p.system === systemId);
}

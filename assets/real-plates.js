/**
 * Vraies planches anatomiques — Gray's Anatomy, 20e édition américaine
 * (1918), tombée dans le domaine public (droits expirés, dans le monde
 * entier). Hébergées de façon stable sur Wikimedia Commons. Contrairement
 * à une image trouvée au hasard sur le web, ces planches sont légalement
 * libres pour tout le monde — pas seulement "pour un usage personnel".
 *
 * URL via Special:FilePath (fonctionnalité officielle MediaWiki pour lier
 * directement un fichier sans avoir à connaître son chemin de hash interne).
 */
function grayPlateUrl(filename) {
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + filename;
}

const REAL_PLATES = [
  {
    system: 'skeletal',
    file: 'Gray190.png',
    titre: 'Le crâne, vue de face',
  },
  {
    system: 'skeletal',
    file: 'Gray387.png',
    titre: 'Vertèbres cervicales et muscles du cou',
  },
  {
    system: 'cardiovascular',
    file: 'Gray492.png',
    titre: 'Surfaces du cœur',
  },
  {
    system: 'nervous',
    file: 'Gray736.png',
    titre: 'Cavités ventriculaires du cerveau',
  },
  {
    system: 'urinary',
    file: 'Gray1128.png',
    titre: 'Schéma du tubule rénal et de sa vascularisation',
  },
  {
    system: 'urinary',
    file: 'Gray1129.png',
    titre: 'Distribution des vaisseaux sanguins dans le cortex rénal',
  },
];

function platesForSystem(systemId) {
  return REAL_PLATES.filter((p) => p.system === systemId);
}

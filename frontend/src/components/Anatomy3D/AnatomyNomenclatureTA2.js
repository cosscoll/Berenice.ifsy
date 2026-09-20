import mapping from '../../data/anatomy/ta2-fr-mapping.json';

/** Liste des systèmes anatomiques avec leur libellé français (pour un sélecteur UI). */
export function listSystems() {
  return mapping.systems.map((s) => ({ id: s.id, en: s.en, fr: s.fr }));
}

/** Structures françaises connues pour un système donné (ex: 'cardiovascular'). */
export function structuresForSystem(systemId) {
  const system = mapping.systems.find((s) => s.id === systemId);
  return system ? system.structures : [];
}

/** Traduit un nom de structure anglais (tel qu'exposé par le modèle GLTF) vers le français. */
export function translateStructure(enName) {
  for (const system of mapping.systems) {
    const found = system.structures.find((s) => s.en.toLowerCase() === enName.toLowerCase());
    if (found) return found.fr;
  }
  return null; // pas encore mappé — le mapping ne couvre que 64 structures sur 2234
}

export const TA2_MAPPING_STATUS = mapping._meta;

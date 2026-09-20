import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

// Décodeurs Draco/KTX2 hébergés en local (souveraineté des données — cf. cahier des
// charges §1) : copier les binaires depuis node_modules/three/examples/jsm/libs/
// vers /public/draco et /public/basis lors du build.
export function createDracoLoader() {
  const loader = new DRACOLoader();
  loader.setDecoderPath('/draco/');
  return loader;
}

export function createKTX2Loader(renderer) {
  const loader = new KTX2Loader();
  loader.setTranscoderPath('/basis/');
  if (renderer) loader.detectSupport(renderer);
  return loader;
}

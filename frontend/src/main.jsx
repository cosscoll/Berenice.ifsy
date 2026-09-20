import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useGLTF } from '@react-three/drei';
import { createDracoLoader, createKTX2Loader } from './components/Anatomy3D/DracoLoader.js';
import { store } from './store/index.js';
import App from './App.jsx';
import './styles/global.css';

// Branche DRACO/KTX2 une fois globalement pour tous les useGLTF() de l'app.
useGLTF.setDRACOLoader(createDracoLoader());
void GLTFLoader; // conservé pour un chargement manuel hors drei si besoin (ex: streaming progressif)
void createKTX2Loader; // appelé avec le renderer une fois le Canvas monté (voir AnatomyViewer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

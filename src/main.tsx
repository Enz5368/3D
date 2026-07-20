import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SceneLayer } from './SceneLayer';
import './styles/legacy-scene.css';

const sceneRoot = document.getElementById('scene-root');

if (!sceneRoot) {
  throw new Error('Scene root element not found');
}

createRoot(sceneRoot).render(
  <StrictMode>
    <SceneLayer />
  </StrictMode>,
);

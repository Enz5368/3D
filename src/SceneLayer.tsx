import { SceneCanvas } from './components/three/SceneCanvas';
import { useLenis } from './hooks/useLenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useScrollTimeline } from './hooks/useScrollTimeline';

export const SceneLayer = () => {
  const reducedMotion = useReducedMotion();
  useLenis(!reducedMotion);
  useScrollTimeline(!reducedMotion);

  return <SceneCanvas onReady={() => undefined} />;
};

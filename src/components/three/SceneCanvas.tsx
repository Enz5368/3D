import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { MainScene } from '../../scenes/MainScene';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type SceneCanvasProps = {
  onReady: () => void;
};

const ReadySignal = ({ onReady }: SceneCanvasProps) => {
  useEffect(() => {
    onReady();
  }, [onReady]);

  return null;
};

export const SceneCanvas = ({ onReady }: SceneCanvasProps) => {
  const performance = useDevicePerformance();
  const reducedMotion = useReducedMotion();

  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, performance.dpr]}
        gl={{ antialias: !performance.isLowPower, alpha: true, powerPreference: 'high-performance' }}
        shadows={!performance.isLowPower}
        camera={{ position: [0, 0.8, 8.5], fov: 42, near: 0.1, far: 100 }}
      >
        <Suspense fallback={null}>
          <MainScene
            isMobile={performance.isMobile}
            isLowPower={performance.isLowPower}
            particleCount={performance.particleCount}
            reducedMotion={reducedMotion}
          />
          <ReadySignal onReady={onReady} />
        </Suspense>
      </Canvas>
    </div>
  );
};

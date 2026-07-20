import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { DirectionalLight, PointLight } from 'three';
import { animationConfig } from '../../config/animationConfig';
import { useScrollProgress } from '../../utils/scrollStore';
import { lerp } from '../../utils/math';

type LightingProps = {
  isLowPower: boolean;
};

export const Lighting = ({ isLowPower }: LightingProps) => {
  const keyLight = useRef<DirectionalLight>(null);
  const accentLight = useRef<PointLight>(null);
  const progress = useScrollProgress();

  useFrame(() => {
    if (keyLight.current) {
      keyLight.current.intensity = lerp(1.35, animationConfig.lighting.keyLightBase, progress);
      keyLight.current.position.x = lerp(-4, 3, progress);
    }

    if (accentLight.current) {
      accentLight.current.intensity = lerp(0.7, 1.8, Math.sin(progress * Math.PI));
    }
  });

  return (
    <>
      <ambientLight intensity={isLowPower ? 0.62 : animationConfig.lighting.ambientMin} />
      <directionalLight
        ref={keyLight}
        position={[-4, 5, 5]}
        intensity={1.45}
        castShadow={!isLowPower}
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight ref={accentLight} position={[3, 1.5, 2.5]} color="#8df4df" intensity={1.1} />
      <pointLight position={[-3, -1, -2]} color="#f0c36a" intensity={0.8} />
    </>
  );
};

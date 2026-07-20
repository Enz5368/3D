import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Points as ThreePoints } from 'three';

type BackgroundParticlesProps = {
  count: number;
  reducedMotion: boolean;
};

export const BackgroundParticles = ({ count, reducedMotion }: BackgroundParticlesProps) => {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 13;
      values[index * 3 + 1] = (Math.random() - 0.5) * 6;
      values[index * 3 + 2] = -Math.random() * 10;
    }

    return values;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) {
      ref.current.rotation.y += delta * 0.018;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#8df4df" size={0.028} sizeAttenuation depthWrite={false} opacity={0.45} />
    </Points>
  );
};

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useScrollProgress } from '../../utils/scrollStore';

export const SectionTransition = () => {
  const mesh = useRef<Mesh>(null);
  const progress = useScrollProgress();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z = progress * Math.PI;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -3]}>
      <torusKnotGeometry args={[0.7, 0.018, 96, 12]} />
      <meshStandardMaterial color="#eb6f92" emissive="#4d1c24" emissiveIntensity={0.55} />
    </mesh>
  );
};

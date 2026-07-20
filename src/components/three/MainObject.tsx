import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Mesh } from 'three';
import { useScrollProgress } from '../../utils/scrollStore';
import { lerp } from '../../utils/math';

type MainObjectProps = {
  reducedMotion: boolean;
};

export const MainObject = ({ reducedMotion }: MainObjectProps) => {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const progress = useScrollProgress();

  useFrame(({ pointer }) => {
    if (!group.current || !core.current) {
      return;
    }

    const mouseFactor = reducedMotion ? 0 : 0.18;
    group.current.rotation.y = progress * Math.PI * 1.35 + pointer.x * mouseFactor;
    group.current.rotation.x = lerp(0.15, -0.35, progress) + pointer.y * mouseFactor * 0.5;
    group.current.position.set(
      lerp(0, progress > 0.5 ? -0.85 : 0.65, progress),
      lerp(0, -0.2, progress),
      lerp(0, -1.6, progress),
    );
    core.current.scale.setScalar(lerp(1, 1.28, Math.sin(progress * Math.PI)));
  });

  return (
    <Float enabled={!reducedMotion} speed={0.7} floatIntensity={0.22} rotationIntensity={0.08}>
      <group ref={group}>
        <mesh ref={core} castShadow>
          <icosahedronGeometry args={[1.08, 3]} />
          <meshPhysicalMaterial
            color="#c9fff4"
            transmission={0.45}
            roughness={0.18}
            metalness={0.12}
            thickness={0.8}
            emissive="#1a4f4a"
            emissiveIntensity={0.18}
          />
        </mesh>
        {[0, 1, 2].map((ring) => (
          <mesh key={ring} rotation={[ring * 0.7, ring * 0.95, ring * 0.35]}>
            <torusGeometry args={[1.75 + ring * 0.22, 0.018, 16, 128]} />
            <meshStandardMaterial
              color={ring === 1 ? '#f0c36a' : '#8df4df'}
              emissive={ring === 1 ? '#6d4a18' : '#1e625c'}
              emissiveIntensity={0.7}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

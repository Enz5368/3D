import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { useScrollProgress } from '../../utils/scrollStore';
import { lerp, smoothstep } from '../../utils/math';

type DeviceMockupProps = {
  reducedMotion: boolean;
};

export const DeviceMockup = ({ reducedMotion }: DeviceMockupProps) => {
  const group = useRef<Group>(null);
  const progress = useScrollProgress();

  useFrame(() => {
    if (!group.current) {
      return;
    }

    const visible = smoothstep(0.34, 0.58, progress);
    group.current.position.set(lerp(3.8, 0.9, visible), lerp(-0.45, 0.05, visible), -2.25);
    group.current.rotation.y = lerp(-0.62, -0.18, visible);
    group.current.rotation.x = reducedMotion ? 0 : lerp(0.12, -0.05, visible);
    group.current.scale.setScalar(lerp(0.58, 1, visible));
  });

  return (
    <group ref={group}>
      <mesh castShadow>
        <boxGeometry args={[2.35, 1.45, 0.12]} />
        <meshStandardMaterial color="#0f191c" roughness={0.28} metalness={0.55} />
      </mesh>
      <mesh position={[0, 0, 0.067]}>
        <planeGeometry args={[2.08, 1.17]} />
        <meshStandardMaterial color="#113238" emissive="#0d3a3f" emissiveIntensity={0.55} />
      </mesh>
      <mesh position={[-0.53, 0.23, 0.075]}>
        <boxGeometry args={[0.72, 0.12, 0.015]} />
        <meshStandardMaterial color="#8df4df" emissive="#23756d" emissiveIntensity={0.75} />
      </mesh>
      <mesh position={[0.46, -0.16, 0.075]}>
        <boxGeometry args={[0.86, 0.28, 0.015]} />
        <meshStandardMaterial color="#f0c36a" emissive="#6b4a19" emissiveIntensity={0.5} />
      </mesh>
      <Text position={[0, 0.46, 0.085]} fontSize={0.08} color="#f7fbf9" anchorX="center" anchorY="middle">
        LIVE CONTROL
      </Text>
    </group>
  );
};

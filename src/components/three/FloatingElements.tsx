import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Group } from 'three';
import { useScrollProgress } from '../../utils/scrollStore';
import { lerp } from '../../utils/math';

type FloatingElementsProps = {
  isMobile: boolean;
  reducedMotion: boolean;
};

const labels = ['Vision', 'UX', 'R3F', 'GSAP'];

export const FloatingElements = ({ isMobile, reducedMotion }: FloatingElementsProps) => {
  const group = useRef<Group>(null);
  const progress = useScrollProgress();
  const panels = useMemo(
    () => [
      [-3.2, 0.8, -0.9],
      [3.1, 1.2, -1.7],
      [-2.1, -0.45, -2.6],
      [2.35, -0.65, -0.5],
    ],
    [],
  );

  useFrame(() => {
    if (!group.current) {
      return;
    }

    group.current.position.z = lerp(0, 0.8, progress);
    group.current.rotation.y = reducedMotion ? 0 : Math.sin(progress * Math.PI * 2) * 0.08;
  });

  if (isMobile) {
    return null;
  }

  return (
    <group ref={group}>
      {panels.map((position, index) => (
        <group key={labels[index]} position={position as [number, number, number]} rotation={[0, index % 2 ? -0.24 : 0.24, 0]}>
          <mesh>
            <boxGeometry args={[1.35, 0.72, 0.035]} />
            <meshStandardMaterial color="#102225" roughness={0.35} metalness={0.25} transparent opacity={0.72} />
          </mesh>
          <Text
            position={[0, 0, 0.035]}
            fontSize={0.16}
            color="#f7fbf9"
            anchorX="center"
            anchorY="middle"
            maxWidth={1}
          >
            {labels[index]}
          </Text>
        </group>
      ))}
    </group>
  );
};

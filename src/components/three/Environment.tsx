import { Float, MeshReflectorMaterial } from '@react-three/drei';

export const Environment = () => (
  <group>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.85, 0]} receiveShadow>
      <planeGeometry args={[28, 28]} />
      <MeshReflectorMaterial
        blur={[220, 80]}
        mixBlur={0.8}
        mixStrength={0.35}
        roughness={0.75}
        depthScale={0.4}
        color="#071012"
        metalness={0.25}
      />
    </mesh>
    <Float speed={0.5} floatIntensity={0.18} rotationIntensity={0.08}>
      <mesh position={[0, 2.7, -4.2]}>
        <torusGeometry args={[4.2, 0.018, 16, 120]} />
        <meshStandardMaterial color="#8df4df" emissive="#1e7269" emissiveIntensity={0.6} />
      </mesh>
    </Float>
  </group>
);

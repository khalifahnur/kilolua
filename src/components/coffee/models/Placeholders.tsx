import { useRef, useMemo } from 'react';
import { useCoffeeStore } from '../../../store/useCoffeeStore';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

export function RCCan({ name }: { name: string }) {
  const ref = useRef<THREE.Group>(null);
  const setRef = useCoffeeStore((state) => state.setRef);
  
  if (ref.current) setRef(name, ref);

  return (
    <group ref={ref}>
      {/* Main body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 6, 64]} />
        <meshStandardMaterial color="#10439F" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Top Rim */}
      <mesh position={[0, 3.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.45, 1.5, 0.1, 64]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Bottom Rim */}
      <mesh position={[0, -3.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.45, 0.1, 64]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* HTML Label */}
      <Html transform position={[0, 0, 1.51]} distanceFactor={10} zIndexRange={[100, 0]}>
        <div className="flex flex-col items-center justify-center pointer-events-none select-none w-32 h-64">
          <h1 className="font-playfair text-white text-[70px] italic transform -skew-x-12 leading-none drop-shadow-md tracking-tighter">RC</h1>
          <div className="bg-royal-red text-white font-playfair text-2xl px-6 py-1 italic transform -skew-x-12 -mt-4 shadow-lg">cola</div>
        </div>
      </Html>
    </group>
  );
}

export function Bubbles({ name }: { name: string }) {
  const ref = useRef<THREE.Group>(null);
  const setRef = useCoffeeStore((state) => state.setRef);
  if (ref.current) setRef(name, ref);

  const bubbleCount = 40;
  const positions = useMemo(() => {
    return Array.from({ length: bubbleCount }).map(() => ({
      x: (Math.random() - 0.5) * 30,
      y: (Math.random() - 0.5) * 40,
      z: (Math.random() - 0.5) * 20 - 10,
      scale: Math.random() * 1.5 + 0.5,
    }));
  }, []);

  return (
    <group ref={ref}>
      {positions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]} scale={pos.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#1a3b80" metalness={0.4} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}


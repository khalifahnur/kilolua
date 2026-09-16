import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { useCoffeeStore } from '../../store/useCoffeeStore';
import { RCCan, Bubbles } from './models/Placeholders';
import { useRef } from 'react';
import * as THREE from 'three';

function SceneContent() {
  const setRef = useCoffeeStore((state) => state.setRef);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  if (cameraRef.current) {
    setRef('camera', cameraRef);
  }

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 15]} fov={45} />
      
      {/* Blend background depth into the HTML Sand color */}
      <fog attach="fog" args={['#e4decb', 20, 50]} />
      
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 20, 10]} intensity={2.5} castShadow />
      <directionalLight position={[-10, 10, -10]} intensity={1.0} color="#ba172a" />
      
      {/* Environment for nice reflections */}
      <Environment preset="city" />

      {/* The Journey Elements */}
      <group>
        <RCCan name="rcCan" />
      </group>

      <group position={[0, -20, 0]}>
        <Bubbles name="bubbles" />
      </group>
    </>
  );
}

export default function CoffeeCanvas() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20">
      <Canvas shadows dpr={[1, 2]}>
        <SceneContent />
      </Canvas>
    </div>
  );
}

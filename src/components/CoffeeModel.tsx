'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

function Seed() {
  // Loads the model from the public folder
  const { scene } = useGLTF('/seed.glb');
  
  return (
    <primitive 
      object={scene} 
      scale={2} // Tweak this if your model is too small or large
      position={[0, -1, 0]} // Tweak this to center it
    />
  );
}

export default function CoffeeModel() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" /> {/* Adds nice reflections/shadows */}
      
      {/* Suspense is required while the GLB file loads */}
      <Suspense fallback={null}>
        <Seed />
      </Suspense>
      
      {/* Controls: enableZoom={false} prevents scrolling the page when trying to interact with the 3D model */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
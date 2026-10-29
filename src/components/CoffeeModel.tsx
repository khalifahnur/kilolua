'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Lightformer } from '@react-three/drei';

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

/**
 * `active` pauses rendering while the model is off-screen, so the GPU is idle
 * when the visitor is reading other sections.
 */
export default function CoffeeModel({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      frameloop={active ? 'always' : 'never'}
      gl={{ powerPreference: 'high-performance' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      {/* Procedural studio lighting: gives the reflections without downloading an HDR from a CDN. */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={2} position={[0, 5, -5]} scale={[10, 4, 1]} />
        <Lightformer form="rect" intensity={1.5} position={[-5, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 4, 1]} />
        <Lightformer form="rect" intensity={1.5} position={[5, 1, 2]} rotation-y={-Math.PI / 2} scale={[8, 4, 1]} />
        <Lightformer form="ring" intensity={1} color="#fff1dc" position={[0, 0, 6]} scale={6} />
      </Environment>
      
      {/* Suspense is required while the GLB file loads */}
      <Suspense fallback={null}>
        <Seed />
      </Suspense>
      
      {/* Controls: enableZoom={false} prevents scrolling the page when trying to interact with the 3D model */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}

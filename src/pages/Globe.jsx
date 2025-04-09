import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import healthyland from '../assets/healthy_land.jpg';
import pollutedland from '../assets/polluted_land.jpg';

const Earth = () => {
  const globeRef = useRef();

  // Rotate the globe continuously
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002; // Smooth rotation effect
    }
  });

  // Load textures
  const healthyTexture = useTexture(healthyland); // Texture for clean areas
  const pollutedTexture = useTexture(pollutedland); // Texture for polluted areas

  return (
    <mesh ref={globeRef}>
      {/* Sphere Geometry representing the globe */}
      <sphereGeometry args={[1, 64, 64]} />
      {/* Apply Healthy and Polluted textures */}
      <meshStandardMaterial map={healthyTexture} />
      <meshStandardMaterial map={pollutedTexture} transparent opacity={0.5} />
    </mesh>
  );
};

const Globe = () => {
  return (
    <div className="globe-container">
      <Canvas>
        {/* Background stars for added realism */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Earth />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Globe;

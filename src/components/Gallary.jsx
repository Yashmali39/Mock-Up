import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Image component with 3D effect
const ImagePlane = ({ position, imageUrl }) => {
  const meshRef = useRef();
  const texture = useTexture(imageUrl);

  // Rotate images slightly over time for effect
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[3, 2]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

// Main Gallery Component
const Gallary = () => {
  // Images for the gallery
  const images = [
    "/images/black_simba1.jpeg",
    "/images/black_simba2.jpeg",
    "/images/black_simba3.jpeg",
    "/images/about.png",
  ];

  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        
        {/* Display images in a 3D space */}
        {images.map((image, index) => (
          <ImagePlane key={index} position={[index * 4 - 6, 0, 0]} imageUrl={image} />
        ))}
      </Canvas>
    </div>
  );
};

export default Gallary;

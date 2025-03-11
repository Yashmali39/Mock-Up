import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Home1() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffd700 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(2, 2, 5);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      sphere.position.x = x * 2;
      sphere.position.y = y * 2;
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-6xl md:text-8xl font-bold">BLACK SIMBA</h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-400">Unleash the Power Within</p>
    </div>
  );
}

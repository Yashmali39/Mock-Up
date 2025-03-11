import * as THREE from 'three';

let scene, camera, renderer, cube, animationFrameId;

export const initAnimation = () => {
  if (renderer) return; // Prevent duplicate animations

  // Initialize Scene, Camera, and Renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas') });

  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create a rotating cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
};

// Cleanup function to stop animations and dispose objects
export const disposeAnimation = () => {
  if (!renderer) return;

  cancelAnimationFrame(animationFrameId);

  // Dispose of geometry and materials
  if (cube) {
    cube.geometry.dispose();
    cube.material.dispose();
    scene.remove(cube);
  }

  // Dispose of renderer
  renderer.dispose();
  renderer.domElement.remove();

  // Reset variables
  scene = null;
  camera = null;
  renderer = null;
  cube = null;
  animationFrameId = null;
};

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url, scale = [1, 1, 1] }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} />;
};

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Model url="/Bharat_1.glb" scale={[3, 3, 3]} />
      </Suspense>
    </Canvas>
  );
};

const SceneWithTitle = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center p-4">
      Interactive 3D Stamp
      </h1>
      <div className="flex-grow">
        <Scene />
      </div>
    </div>
  );
};

export default SceneWithTitle;
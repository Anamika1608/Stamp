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
      <pointLight position={[20, 20, 20]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Model url="/temple_6.glb" scale={[9, 9, 9]} />
      </Suspense>
    </Canvas>
  );
};

const SceneWithTitle = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      <h1 className="text-4xl font-bold text-center p-4">
        Interactive 3D Stamp
      </h1>
      <div className="flex flex-col sm:flex-row justify-between items-start p-6 gap-10">
        <div className="flex-grow h-[300px] sm:h-[500px] w-full sm:w-[60%] rounded-lg">
          <Scene />
        </div>
        <div className=" ibm-plex-mono-regular w-full sm:max-w-[40%] bg-[#f5f3da] p-6 mt-10 sm:mt-20 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Stamp Information</h2>
          <p className="mb-2">
            <strong>Name of Stamp :</strong> Shri Ram Janmbhoomi Temple
          </p>
          <p className="mb-2">
            <strong>Description :</strong> Shri Ram Janmbhoomi Temple has intricate design using  Pink Bansi Paharpur stones and steel-free construction. It marks the release of six commemorative postage stamps that incorporate sand and water from the temple site, symbolizing divine blessings.
          </p>
          <p className="mb-2">
            <strong>Date of Release :</strong> 1/18/2024
          </p>
          <p className="mb-2">
            <strong>Quantity of Print :</strong> 1000000
          </p>
          <p className="mb-2">
            <strong>Denomination :</strong> ₹5.00
          </p>
        </div>
      </div>

    </div>
  );
};

export default SceneWithTitle;
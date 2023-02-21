import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useFBX } from "@react-three/drei"

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}

function PersoFBX() {
  let fbx = useFBX('suzanne/suzanne.fbx')
  return <primitive object={fbx} />
}

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {  motion } from 'framer-motion';
import { PointMaterial, Sky } from '@react-three/drei';

// Geometry
function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function Sphere() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.rotation.y = elapsedTime / 8;
    ref.current.rotation.x = elapsedTime / 6;
  });
  
  return (
    <points ref={ref} scale={0.8} position={[-3, 1.5, -1]}>
      <sphereGeometry position={[0, 0, 0]} args={[2, 16, 8]} roughness={0} />
      <PointMaterial size={0.02} />
    </points>
  );
}

// Lights
function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[2, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[2, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}
function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}

function FallbackScene() {
  return (
    <motion.div style={{
      height:'100vh',
      width:'100vw',
      backgroundColor:'#333',
      color:'#fff',
      textAlign:'center',
      padding:'auto',
    }}>
      <h1 style={{ margin:'auto' }}>Loading...</h1>
    </motion.div>
  )
}

function Scene() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas className="canvas" frameloop='demand'>
        <Suspense fallback={FallbackScene}>
          <GroundPlane />
          <BackDrop />
          <KeyLight brightness={5.6} color="#ffbdf4" />
          <FillLight brightness={2.6} color="#bdefff" />
          <RimLight brightness={40} color="#fff" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene

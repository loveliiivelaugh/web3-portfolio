import React, { Suspense, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
const Earth = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const earthRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 8;
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 3]}>
      <sphereGeometry args={[1, 32, 32]} />
      <points>
        <PointMaterial scale={20} />
      </points>
    </mesh>
  )
}

const AltIndex = () => {

  const scrollArea = useRef()
  const onScroll = (e) => console.log("scroll: ", e)
  return (
    <div style={{ height: '100vh', width:'100vw', zIndex: -20 }} >
      <Canvas
        shadowMap
        camera={{ position: [2, 0, 4], filmOffset: 0 }}
        style={{ background: '#272727' }}
        class="scrollArea" ref={scrollArea} onScroll={onScroll}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={"Loadin..."}>
          <Earth />
        </Suspense>
        
      </Canvas>
    </div>
  )
}

export default AltIndex
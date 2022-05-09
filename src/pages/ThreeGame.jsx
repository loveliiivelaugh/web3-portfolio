import React, { Suspense, lazy } from 'react';
const ThreeScene = lazy(() => import('../components/ThreeScene'));

const ThreeGame = () => (
  <Suspense fallback="Loading Scene with ThreeJS...">
    <ThreeScene />
  </Suspense>
);

export default ThreeGame
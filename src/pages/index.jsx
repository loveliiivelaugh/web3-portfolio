import React, { useEffect } from 'react';
import Meta from "../components/Meta";
import { ColoredTransition } from "../animations/pageTransitions";
import  FeaturesSection from '../components/FeaturesSection';
import  TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  return (
    <>
      <ColoredTransition delay={2} color="#333" direction="up" />
      <ColoredTransition delay={1} color="#000" direction="up" />
      {/* <Meta /> */}
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Michael Woodward"
        subtitle="Professional Web Engineer"
      />
      {/* <TestimonialsSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Blog"
        subtitle=""
      /> */}
    </>
  )
}

export default Home
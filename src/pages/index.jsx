import React from 'react';
import Meta from "../components/Meta";
import { ColoredTransition } from "../animations/pageTransitions";
// import ProjectGrid from '../components/ProjectGrid';
import HeroSection from '../components/HeroSection';
import  ClientsSection from '../components/ClientsSection';
import  FeaturesSection from '../components/FeaturesSection';
import  TestimonialsSection from '../components/TestimonialsSection';
import Footer from "./../components/Footer";

const index = () => (
  <>
    <ColoredTransition delay={2} color="#333" direction="up" />
    <ColoredTransition delay={1} color="#000" direction="up" />
    {/* <Meta /> */}
    {/* <ClientsSection
      bgColor="light"
      size="normal"
      bgImage=""
      bgImageOpacity={1}
      title=""
      subtitle=""
    /> */}
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

export default index
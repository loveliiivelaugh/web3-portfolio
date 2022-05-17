import React, { useEffect } from 'react';
import Meta from "../components/Meta";
import { ColoredTransition } from "../animations/pageTransitions";
import  FeaturesSection from '../components/FeaturesSection';
import  TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {

  // useEffect(() => {
  //   // Open websockets.
  //   const handleWebsockets = () => {
  //     const url = 'wss://stream.data.alpaca.markets/v1beta1/crypto';
  //     const socket  = new WebSocket(url);

  //     const auth = {'action': 'auth', 'key': 'PKMA820GPVEC5JZ41G6S', 'secret': 'SbTetMxiTByvNHZscItXb6IPZPggajJhkzoZHTqe'};
  //     const subscribe = {"action":"subscribe","trades":["ETHUSD"],"quotes":["ETHUSD"],"bars":["ETHUSD"]};

  //     socket.onmessage = async (event) => {
  //       const { data } = event;
  //       console.log('data', data);

  //       if  (data[0].msg === 'connected') await socket.send(JSON.stringify(auth));
  //       if  (data[0].msg === 'authenticated') await socket.send(JSON.stringify(subscribe));
  //     };
  //   };
  //   handleWebsockets();
  // }, []);

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
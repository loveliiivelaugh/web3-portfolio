import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const pageTransitions = () => {
  const pageVariants = {
    initial: {
      y: 300
    },
    animate: {
      y: 0,
    },
    in: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    out: {
      x:300,
    }
  };


  return { 
    pageVariants 
  }
}



export const ColoredTransition = ({ delay, color, direction }) => {
  // Scroll user to top to avoid showing the footer
  useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  const blackBox = {
    initial: {
      height: "300vh",
      right: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        delay,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    out: {
      height: "300vh",
      right: 0,
    }
  };

  return (
    <div
      style={{
        position:'absolute', 
        boxShadow:'inset 0', 
        display:'flex',
        alignItems:'center',
        justifyContent:'center', 
        width:'100%'
      }}
    >
      <motion.div
        style={{
          position:'relative',
          zIndex:'50',
          width:'100%',
          background: color
        }}
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
      {/* 
      <motion.svg variants={textContainer} className="absolute z-50 flex"
      style={{ display:'flex',alignItems:'center',justifyContent:'center' }}
      >
        
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
          style={{color:'#fff'}}
        >
          <rect className="w-full h-full fill-current" style={{width:'100%',height:'100%', fill:'currentcolor'}} />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
            style={{width:'100%',height:'100%', color:'gray 600',fill:'currentcolor'}}
          />
        </pattern>

        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)",fontSize:"2.25rem",fontWeight:'bold',color:'#fff',  }}
        >
          /*
           * Can add some text here in between page transitions <--
           * This needs to be centered in middle of page
          /*
          MW
        </text>
        
      </motion.svg> 
      */}
    </motion.div>
    </div>
  )
}



import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export const useCustomCursor = () => {
  const cursorRef = useRef();

  const followMouse = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    // console.log(cursor, mouseX, mouseY);
    cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', followMouse);
    return () => document.removeEventListener('mousemove', followMouse);
  }, []);

  const HeaderCursor = () => {
    cursorRef.current.style.backgroundColor = "red";
    cursorRef.current.textContent = "About Me";

    return (
      <motion.div
        ref={cursorRef}
        className="cursor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    );
  };

  const EmailCursor = () => {
    cursorRef.current.style.backgroundColor = "blue";
    cursorRef.current.textContent = "Email Me";

    return (
      <motion.div
        ref={cursorRef}
        className="cursor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    );
  };

  const ResumeCursor = () => {
    cursorRef.current.style.backgroundColor = "green";
    cursorRef.current.textContent = "Resume";

    return (
      <motion.div
        ref={cursorRef}
        className="cursor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    );
  };

  const CryptoCursor = () => {
    cursorRef.current.style.backgroundColor = "yellow";
    cursorRef.current.textContent = "Crypto";

    return (
      <motion.div
        ref={cursorRef}
        className="cursor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    );
  };


  const customCursorStyle = { height: '100px', width: '100px', borderRadius: '50px', backgroundColor: 'red', opacity: 0, padding: 30, textAlign: 'center' };
  const CustomCursor = () => (
    <motion.div 
      ref={cursorRef} 
      style={customCursorStyle}
      className="cursor"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography sx={{ margin: 'auto' }} variant="subtitle2">
        About Me
      </Typography>
    </motion.div>
  );

  return {
    CustomCursor,
    HeaderCursor,
    EmailCursor,
    ResumeCursor,
    CryptoCursor,
  };
}
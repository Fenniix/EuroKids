
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50 }}
          
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          
          whileHover={{ 
            scale: 1.2, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          
          whileTap={{ scale: 0.9 }}
          
          className='backtop-position'
          aria-label="Volver al inicio de la página"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000ff" className="backtop-icon"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"/></svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Backtop = () => {
  return (
    <>
      <BackToTop />
    </>
  );
}

export default Backtop;
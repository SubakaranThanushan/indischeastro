"use client"; // Si tu es sur Next.js 13+ (App Router)

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animated-element");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifier au chargement

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="animated-element"
      initial={{ opacity: 0, x: -100 }} // Départ invisible, décalé à gauche
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Animation vers la droite
      transition={{ duration: 0.5, ease: "easeOut" }} // Durée et effet
      className="p-6 bg-white shadow-lg rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;

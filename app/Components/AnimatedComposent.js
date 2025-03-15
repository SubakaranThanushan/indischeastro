"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedComponent = ({
  children,
  id = "animated-section",
  ariaLabel,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id={id}
      ref={elementRef}
      aria-label={ariaLabel || "Animierte Sektion"}
      aria-hidden={!isVisible}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-6 bg-white shadow-lg rounded-lg"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedComponent;

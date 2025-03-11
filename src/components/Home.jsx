import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";
import CustomCursor from "./CustomCursor";

const Home = () => {
  // Track visibility of sections for animation trigger
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="w-full text-white relative">
      <CustomCursor />

      {/* Background Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/videos/black_simbavid.mp4" type="video/mp4" />
        </video>

        {/* Hero Section with Animations */}
        <motion.div 
          className="relative flex flex-col h-full w-full items-center justify-center text-center px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-extrabold font-blackSimba text-orange-600 hover-effect"
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            BLACK SIMBA
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl mt-4 hover-effect"
            whileHover={{ scale: 1.1, color: "#FFA500" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Feel the Power, Taste the Energy
          </motion.p>
        </motion.div>
      </div>

      {/* Fullscreen Card Section with Scroll Animation */}
      <motion.div
        ref={ref}
        className="relative flex flex-col items-center justify-center bg-black w-full h-screen p-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/black_simba2.jpeg')" }}
        initial={{ y: 200, opacity: 0, scale: 0.8 }}
        animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="bg-black bg-opacity-80 p-16 rounded-lg shadow-2xl text-center w-full max-w-6xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-orange-500 hover-effect"
            whileHover={{ scale: 1.1, color: "#ff9800" }}
          >
            Black Simba - Your Source of Energy and Vitality!
          </motion.h2>
          <motion.p
            className="text-2xl mt-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            “Black Simba is more than just an energy drink – it’s a lifestyle. 
            Our premium energy booster drink is meticulously crafted to give you the 
            power and stamina you need to conquer your day.”
          </motion.p>
        </motion.div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        ref={aboutRef}
        className="relative flex flex-col items-center justify-center bg-black w-full h-screen p-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about.png')" }}
        initial={{ y: 200, opacity: -1, scale: 0.8 }}
        animate={aboutInView ? { y: 0, opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="bg-black bg-opacity-70 p-16 rounded-lg shadow-2xl text-center w-full max-w-6xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-orange-500 hover-effect"
            whileHover={{ scale: 1.1, color: "#ff9800" }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-2xl mt-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We believe in the power of nature to rejuvenate and empower. Inspired by the untamed spirit of the African wilderness, our energy booster drink is a fusion of premium ingredients carefully selected for their energizing properties.
            <br /><br />
            Each can of Black Simba contains Water, Carbon dioxide (E290), Sugar, Acidity Regulator (Citric Acid (F331), & Sodium Citrate (E331), Ascorbic Acid (E300), Taurine, Caffeine, Vitamins (B3, B2, B6, B12), Class 11 Preservatives – Sodium Benzoate (E211), Natural & Nature Identical Flavouring Substances Mixed Fruit Flavour. (Permitted Natural Food Colours (E150D)).
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
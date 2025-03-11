import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full px-10 py-5 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Logo */}
        <NavLink to="/" className="relative z-10">
          <img src="/images/Black-simba-Logo.png" alt="Black Simba Logo" className="h-16 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium tracking-wide">
          {["Home", "About", "Contact"].map((text, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={`/${text.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "text-white/80 hover:text-white transition-all"
                }
              >
                {text}
              </NavLink>
              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-10" onClick={toggleMenu}>
          {isOpen ? (
            <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown (Glassmorphism Effect) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 left-0 w-full bg-black/50 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 flex flex-col items-center p-6 text-lg"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {["Home", "About", "Contact"].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="my-3 w-full text-center"
              >
                <NavLink
                  to={`/${text.toLowerCase()}`}
                  className="text-white/80 hover:text-orange-500 transition-all block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
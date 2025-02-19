import close from '/ui/closeWhite.webp'
import github from '/github.webp'
import insta from '/insta.png'
import linkedin from '/linkedin.png'

import React from "react";
import { motion } from "framer-motion";

export function Menu({ menuOpen, setMenuOpen }){

  // Animation variants for menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  function toSection (section) {
    const contactSection = document.getElementById(section);
    contactSection?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(!menuOpen)
  };

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        className="fixed inset-0 bg-[#222222] bg-opacity-50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={setMenuOpen} // Close menu when clicking outside
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      />

      {/* Animated Menu */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#222222]"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* CLOSE BTN */}
        <img src={close} onClick={() => setMenuOpen(false)} className="absolute top-10 right-10 text-2xl w-5" />

        {/* Links */}
        <nav className="flex flex-col space-y-4 text-lg text-white font-poppins items-center">
          <a onClick={()=>{toSection('#')}}  className="hover:underline">Home</a>
          <a onClick={()=>{toSection('about')}}  className="hover:underline">About Me</a>
          <a onClick={()=>{toSection('contact')}} className="hover:underline">Contact Me</a>
          <a onClick={()=>{toSection('projects')}}  className="hover:underline">View Projects</a>

        </nav>

        {/* CHANGE BACKGROUND OF IMAGES */}
        <div className="flex space-x-4 mt-16 gap-5">
          <a target='_blank' href="https://github.com/softwareNinja-888"  className="w-10">
            <img src={github} alt="github logo" className="" />
          </a>
          {/* <a target='_blank' href="#" className="w-10">
            <img src={linkedin} alt="github logo" className="w-20" />          
          </a>
          <a target='_blank' href="#" className="w-10">
            <img src={insta} alt="github logo" className="" />          
          </a> */}
        </div>
      </motion.div>
    </>
  );
};

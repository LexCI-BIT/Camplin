import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center font-bold text-white">
          C
        </div>
        <span className="text-xl font-bold tracking-tight">Camplin</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Courses</a>
        <a href="#" className="hover:text-white transition-colors">Programs</a>
        <a href="#" className="hover:text-white transition-colors">Instructors</a>
        <a href="#" className="hover:text-white transition-colors">About Us</a>
      </div>

      <div>
        <button className="px-5 py-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

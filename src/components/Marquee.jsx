import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const marqueeItems = [
  "Learn • Create • Inspire",
  "For The Next Generation Of Filmmakers",
  "Turn Imagination Into Reality",
  "Master The Art Of Visual Storytelling",
];

const Marquee = () => {
  return (
    <div className="w-full py-4 border-y border-white/5 bg-surface/30 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex items-center gap-12 pl-12"
      >
        {/* Duplicate the items to create an infinite loop effect */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="text-gray-400 font-medium tracking-wide uppercase text-sm">{item}</span>
            <Sparkles className="w-4 h-4 text-primary-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

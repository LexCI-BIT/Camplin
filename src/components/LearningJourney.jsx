import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { 
    number: "01", 
    title: "Understand The\nFundamentals", 
    desc: "Master the language of cinema,\nnarrative and frame composition." 
  },
  { 
    number: "02", 
    title: "Practice Through Projects", 
    desc: "Apply everything on real briefs —\nalone and in collaborative crews." 
  },
  { 
    number: "03", 
    title: "Create Professional\nContent", 
    desc: "Produce festival-ready short films,\nreels and brand work." 
  },
  { 
    number: "04", 
    title: "Build Your Industry\nPortfolio", 
    desc: "Graduate with a body of work and a\nnetwork that opens doors." 
  },
];

const LearningJourney = () => {
  return (
    <section className="py-24 px-6 relative bg-[#030108] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="text-[10px] font-mono text-primary-600 font-bold tracking-[0.2em] uppercase">
              07 — The Process
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-bold mb-4 tracking-tight"
          >
            Your <span className="text-primary-500">Learning Journey</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting line (hidden on mobile) perfectly aligned with circle centers */}
          {/* Circle is w-14 (56px) + p-8 (32px top) = center is at 32 + 28 = 60px from top of card. */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] w-[80%] h-[1px] bg-primary-900/50 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 bg-[#0a0614] rounded-3xl p-8 border border-white/5 hover:border-primary-500/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(124,58,237,0.4)] relative z-10">
                  <span className="text-white font-bold text-sm tracking-wider">{step.number}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 whitespace-pre-line leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 whitespace-pre-line leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;

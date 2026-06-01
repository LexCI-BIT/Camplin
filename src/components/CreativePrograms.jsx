import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, PenTool, Camera, Scissors, Sparkles, Mic, ArrowRight } from 'lucide-react';

const programs = [
  { 
    icon: Clapperboard, 
    title: "Filmmaking Masterclass", 
    desc: "End-to-end production from concept to final cut on a real set." 
  },
  { 
    icon: PenTool, 
    title: "Story Writing & Screenplay", 
    desc: "Build worlds, characters and arcs that stay with audiences." 
  },
  { 
    icon: Camera, 
    title: "Direction & Visual Storytelling", 
    desc: "Compose frames, lead actors and craft cinematic intent." 
  },
  { 
    icon: Scissors, 
    title: "Professional Video Editing", 
    desc: "Master pacing, color and rhythm with industry-grade tools." 
  },
  { 
    icon: Sparkles, 
    title: "Content Creation & Digital Media", 
    desc: "Design viral, brand-grade content built for modern platforms." 
  },
  { 
    icon: Mic, 
    title: "Narration & Creative Presentation", 
    desc: "Voice, presence and storytelling for camera and stage." 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CreativePrograms = () => {
  return (
    <section className="py-24 px-6 relative bg-[#030108]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-mono text-primary-600 font-bold tracking-widest uppercase">
              04 — Programs
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Creative Programs</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed"
          >
            Six immersive tracks engineered to take you from curiosity to a working filmmaker.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((prog, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#0a0614] rounded-2xl p-8 border border-white/5 hover:border-primary-500/30 transition-all duration-300 group flex flex-col h-full cursor-pointer hover:bg-[#0c071a]"
            >
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform duration-300">
                <prog.icon className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{prog.title}</h3>
              
              <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed">
                {prog.desc}
              </p>
              
              <div className="flex items-center gap-2 text-primary-500 text-sm font-semibold group-hover:text-primary-400 transition-colors mt-auto">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreativePrograms;

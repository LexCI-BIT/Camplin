import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Camera, Mic, PenTool, Scissors, Clapperboard, Lightbulb, Sparkles } from 'lucide-react';

const features = [
  { icon: LayoutTemplate, title: "Short Films" },
  { icon: Camera, title: "Cinematic Reels" },
  { icon: Mic, title: "Story Narratives" },
  { icon: PenTool, title: "Screenplay Development" },
  { icon: Scissors, title: "Video Editing" },
  { icon: Clapperboard, title: "Direction Exercises" },
  { icon: Lightbulb, title: "Camera Understanding" },
  { icon: Sparkles, title: "Social Media Content" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TraditionalEducation = () => {
  return (
    <section className="py-24 px-6 relative bg-[#05020a]">
      {/* Subtle top glow to match design */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-900/10 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="text-xs font-mono text-primary-600 font-bold tracking-widest uppercase">
              01 — Beyond Classrooms
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-bold mb-8 leading-[1.2]"
          >
            Learn Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Traditional</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Education</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Real filmmaking experiences. Practical editing workflows. Story-driven content creation. Industry-standard production methods — taught the way they're actually used on set.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-[#0a0614] rounded-2xl p-6 border border-white/5 hover:border-primary-500/30 hover:bg-[#0c071a] transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-primary-900/20 flex items-center justify-center mb-5">
                <item.icon className="w-4 h-4 text-primary-500" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Hands-on modules taught through real creative briefs.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TraditionalEducation;

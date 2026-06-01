import React from 'react';
import { motion } from 'framer-motion';

const instructors = [
  {
    name: "Aarav Mehta",
    role: "Film Director",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    tags: ["Direction", "Cinematography"]
  },
  {
    name: "Lena Vasquez",
    role: "Screenwriter",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    tags: ["Screenplay", "Story"]
  },
  {
    name: "Marcus Reid",
    role: "Lead Editor",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    tags: ["Editing", "Color"]
  }
];

const globalTags = [
  "Film Direction", "Screenplay Writing", "Cinematic Editing", 
  "Creative Branding", "Youtube Strategy", "Production Planning"
];

const Professionals = () => {
  return (
    <section className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="text-xs font-mono text-primary-600 font-bold tracking-widest uppercase">
              06 — Faculty
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Learn From <span className="text-primary-500">Industry</span> <br />
            <span className="text-primary-500">Professionals</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Working directors, writers and editors guiding your craft through every frame.
          </motion.p>
        </div>

        {/* Instructor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {instructors.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#0a0614] rounded-3xl overflow-hidden border border-white/5 flex flex-col hover:border-primary-500/30 transition-colors"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/5] w-full">
                {/* Purple overlay to match design lighting */}
                <div className="absolute inset-0 bg-primary-900/20 mix-blend-overlay z-10" />
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0614] via-[#0a0614]/40 to-transparent z-20" />
                
                {/* Text Content over image bottom */}
                <div className="absolute bottom-6 left-6 z-30">
                  <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                  <p className="text-primary-500 text-sm font-semibold mb-4">{person.role}</p>
                  
                  {/* Card Tags */}
                  <div className="flex gap-2">
                    {person.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium backdrop-blur-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Tags Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {globalTags.map((tag, idx) => (
            <div key={idx} className="px-5 py-2.5 rounded-full bg-[#0a0614] text-gray-300 text-xs font-medium border border-white/5 hover:bg-white/5 transition-colors cursor-default">
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Professionals;

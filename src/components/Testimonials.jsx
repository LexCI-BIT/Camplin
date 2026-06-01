import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: '"Camplain gave me practical filmmaking exposure that completely changed the way I approach storytelling."',
    name: "Riya Sharma",
    role: "Independent Filmmaker",
  },
  {
    quote: '"The editing and direction sessions felt highly professional and industry-oriented."',
    name: "Daniel Cruz",
    role: "Video Editor",
  },
  {
    quote: '"Working on real creative projects helped me build confidence as a filmmaker."',
    name: "Aisha Khan",
    role: "Content Director",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative bg-background">
      {/* Background glow behind testimonials */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-900/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="text-xs font-mono text-primary-600 font-bold tracking-widest uppercase">
              08 — Voices
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Stories From <span className="text-primary-500">Our</span> <br />
            <span className="text-primary-500">Creators</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0a0614] rounded-3xl p-8 border border-white/5 relative shadow-lg flex flex-col hover:border-primary-500/20 transition-all duration-300 group"
            >
              {/* Giant Quote Icon */}
              <Quote className="w-20 h-20 text-primary-600/10 absolute top-6 right-6 group-hover:scale-110 group-hover:text-primary-600/20 transition-all duration-500" strokeWidth={1} />
              
              <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 relative z-10 font-medium">
                {test.quote}
              </p>
              
              {/* Divider Line */}
              <div className="w-full h-[1px] bg-white/5 mb-6 mt-auto" />

              <div className="flex items-center gap-4 relative z-10">
                {/* Purple Circle instead of image */}
                <div className="w-10 h-10 rounded-full bg-primary-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">{test.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

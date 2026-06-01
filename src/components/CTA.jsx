import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-6 relative bg-background flex justify-center">
      <div className="w-full max-w-[1400px]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#0a0614] border border-white/5 shadow-2xl min-h-[500px] flex items-center"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80" 
              alt="Film Set" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity object-right"
            />
            {/* Gradient matching the screenshot: heavy solid dark/purple on left, fading to transparent on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-primary-900/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 py-20 px-10 md:px-20 max-w-3xl">
            {/* Pre-title */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-[10px] font-mono text-primary-500 font-bold tracking-[0.2em] uppercase">
                Your Next Frame
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Your Story <br />
              Deserves <br />
              A <span className="text-primary-500">Bigger Screen</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base md:text-lg mb-10 max-w-xl leading-relaxed"
            >
              Join Camplain and start your journey into filmmaking, storytelling, cinematic editing and digital content creation.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="px-8 py-3.5 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center gap-2 text-sm">
                Join Camplain <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/5 text-white font-semibold transition-all backdrop-blur-md text-sm">
                Explore Programs
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

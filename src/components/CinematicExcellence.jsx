import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const categories = [
  "Filmmakers", "Storytellers", 
  "Editors", "Directors", 
  "Content Creators", "Visual Artists"
];

const CinematicExcellence = () => {
  return (
    <section className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image with Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:pr-10"
        >
          <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden">
            <img 
              src="/studio_editor_1780060079788.png" 
              alt="Editor working on screens" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
            />
            {/* Purple Overlay to match the image's lighting */}
            <div className="absolute inset-0 bg-primary-900/30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          {/* Top Left Badge */}
          <div className="absolute top-8 -left-4 md:-left-8 glass-panel bg-black/60 px-4 py-2 rounded-full border border-white/5 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-primary-500" />
            <span className="text-xs font-semibold text-white">Award-winning faculty</span>
          </div>

          {/* Bottom Right Badge */}
          <div className="absolute -bottom-6 -right-4 md:-right-6 glass-panel bg-[#130a2a]/90 p-5 rounded-2xl border border-white/5 w-48 shadow-2xl">
            <div className="text-3xl font-bold text-white mb-1">12k<span className="text-primary-500">+</span></div>
            <div className="text-xs text-gray-400">Creators trained globally</div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Section Subtitle */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono text-gray-500">02</span>
            <span className="text-xs font-bold tracking-widest text-primary-500 uppercase">The Studio</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Turn Creativity Into <br />
            <span className="text-primary-500">
              Cinematic Excellence
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 mb-10 text-base md:text-lg leading-relaxed max-w-lg">
            Camplin is a creative ecosystem built for the next generation of visual storytellers — a home for those who refuse to create the ordinary.
          </p>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-black/40 border border-white/5 rounded-full px-5 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-sm bg-primary-500" />
                <span className="text-sm font-medium text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CinematicExcellence;

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, MonitorPlay, Scissors, BookOpen, Users, Circle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80" 
          alt="Cinematic Camera Setup" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        {/* Dark to Purple Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-primary-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
        
        {/* Left Content (Takes up 7 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center pt-10"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 w-max">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">Where Stories Become Cinema</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] mb-6 tracking-tight">
            Master The Art <br />
            Of <br />
            <span className="text-primary-500">Filmmaking</span> & <br /> 
            Content Creation
          </h1>
          
          {/* Paragraphs */}
          <div className="space-y-4 mb-10 max-w-2xl">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Learn filmmaking, storytelling, direction, screenwriting, editing, and cinematic content creation through immersive practical experiences guided by industry professionals.
            </p>
            <p className="italic text-gray-400 text-sm md:text-base">
              Transform your imagination into powerful visual stories that inspire audiences.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button className="px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Play className="w-5 h-5 fill-current" />
              Explore Programs
            </button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2 bg-black/20 backdrop-blur-sm">
              Start Your Creative Journey <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Feature Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              { icon: MonitorPlay, text: "Hands-On Projects" },
              { icon: Scissors, text: "Pro Editing" },
              { icon: BookOpen, text: "Storytelling" },
              { icon: Users, text: "Industry Mentors" },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/40 border border-white/5 backdrop-blur-md">
                <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <badge.icon className="w-3.5 h-3.5 text-primary-400" />
                </div>
                <span className="text-sm font-medium text-gray-300">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content / Floating Cards (Takes up 5 columns) */}
        <div className="lg:col-span-5 relative h-[500px] hidden md:block">
          
          {/* Card 1: New Filming */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-0 right-0 w-80 glass-panel p-4 border-white/10 bg-[#130a2a]/80"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500" />
              <div>
                <p className="text-xs text-gray-400">New Filming</p>
                <p className="text-sm font-bold">Scene 04 - Take 12</p>
              </div>
            </div>
            <div className="w-full h-24 rounded-lg bg-primary-900/50 border border-white/5 mb-3" />
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>00:12</span>
              <div className="flex items-center gap-1 text-red-500 font-bold">
                <Circle className="w-2 h-2 fill-current text-red-500" /> REC
              </div>
              <span>04:32</span>
            </div>
          </motion.div>

          {/* Card 2: Editing Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-64 glass-panel p-4 border-white/10 bg-[#130a2a]/80"
          >
            <p className="text-xs text-gray-400 mb-3">Editing Timeline</p>
            <div className="space-y-2 mb-3">
              <div className="h-2 rounded-full bg-primary-500/30 w-full">
                <div className="h-full rounded-full bg-primary-500 w-3/4" />
              </div>
              <div className="h-2 rounded-full bg-primary-500/30 w-full">
                <div className="h-full rounded-full bg-primary-400 w-1/2" />
              </div>
              <div className="h-2 rounded-full bg-primary-500/30 w-full">
                <div className="h-full rounded-full bg-primary-600 w-5/6" />
              </div>
            </div>
            <p className="text-xs text-primary-400 font-medium">+12 new track added</p>
          </motion.div>

          {/* Card 3: Masterclass */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-0 right-10 w-72 glass-panel p-5 border-white/10 bg-[#130a2a]/80"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-1">Masterclass</p>
                <p className="text-base font-bold text-white mb-1">Direction Workshop</p>
                <p className="text-xs text-gray-500">120 students • Tonight</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-primary-400" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

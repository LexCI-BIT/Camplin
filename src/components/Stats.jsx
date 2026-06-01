import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Clapperboard, Camera, Trophy, Users, Network } from 'lucide-react';

const stats = [
  { value: "12K+", label: "ACTIVE CREATORS" },
  { value: "94%", label: "PROJECT COMPLETION" },
  { value: "60+", label: "INDUSTRY MENTORS" },
  { value: "240+", label: "FILMS PRODUCED" },
];

const features = [
  { 
    icon: Building2, 
    title: "Industry-Focused Training", 
    desc: "Curriculum built with working filmmakers." 
  },
  { 
    icon: Clapperboard, 
    title: "Real Project Experience", 
    desc: "Ship short films, reels and screenplays." 
  },
  { 
    icon: Camera, 
    title: "Professional Tool Exposure", 
    desc: "Train on the gear and software studios use." 
  },
  { 
    icon: Trophy, 
    title: "Portfolio Building", 
    desc: "Leave with a body of work that lands you jobs." 
  },
  { 
    icon: Users, 
    title: "Creator Mentorship", 
    desc: "1:1 sessions with directors, editors, writers." 
  },
  { 
    icon: Network, 
    title: "Creative Networking", 
    desc: "Join a growing community of collaborators." 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Stats = () => {
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
              05 — Why Camplain
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Designed For Future <br />
            <span className="text-primary-500">Filmmakers & Creators</span>
          </motion.h2>
        </div>

        {/* Top Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-[#0a0614] rounded-2xl py-12 px-6 text-center border border-white/5 hover:border-primary-500/30 transition-colors cursor-default"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary-500 mb-4">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-gray-500 tracking-widest font-bold uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#0a0614] rounded-2xl p-6 flex items-start gap-5 border border-white/5 hover:border-primary-500/30 transition-colors cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary-900/20 flex items-center justify-center shrink-0">
                <feat.icon className="w-5 h-5 text-primary-500" />
              </div>
              <div className="pt-1">
                <h4 className="text-base font-bold text-white mb-1.5">{feat.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;

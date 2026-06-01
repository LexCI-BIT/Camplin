import React from 'react';
import { Film } from 'lucide-react';

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background pt-20 pb-8 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-4 lg:col-span-5 pr-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center shadow-lg">
              <Film className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Camplain</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Where stories become cinema. Train with industry professionals and turn imagination into visual stories.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-bold text-white mb-6 text-xs tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-primary-500 transition-colors">Programs</a></li>
            <li><a href="#" className="hover:text-primary-500 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-primary-500 transition-colors">Mentors</a></li>
            <li><a href="#" className="hover:text-primary-500 transition-colors">Process</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="col-span-1 md:col-span-3">
          <h4 className="font-bold text-white mb-6 text-xs tracking-widest uppercase">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="mailto:hello@camplain.studio" className="hover:text-primary-500 transition-colors">hello@camplain.studio</a></li>
            <li><a href="tel:+15550182025" className="hover:text-primary-500 transition-colors">+ 1 (555) 018 2025</a></li>
            <li className="text-gray-500">Los Angeles · Mumbai · Berlin</li>
          </ul>
        </div>

        {/* Follow Column */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <h4 className="font-bold text-white mb-6 text-xs tracking-widest uppercase">Follow</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-[#110a1f] border border-white/5 flex items-center justify-center hover:bg-primary-600 hover:border-primary-500 transition-colors text-gray-400 hover:text-white">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#110a1f] border border-white/5 flex items-center justify-center hover:bg-primary-600 hover:border-primary-500 transition-colors text-gray-400 hover:text-white">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#110a1f] border border-white/5 flex items-center justify-center hover:bg-primary-600 hover:border-primary-500 transition-colors text-gray-400 hover:text-white">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#110a1f] border border-white/5 flex items-center justify-center hover:bg-primary-600 hover:border-primary-500 transition-colors text-gray-400 hover:text-white">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 tracking-wider">
        <p>© 2026 Camplain Academy. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

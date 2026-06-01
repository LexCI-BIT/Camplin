import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import CinematicExcellence from './components/CinematicExcellence';
import TraditionalEducation from './components/TraditionalEducation';
import CreativePrograms from './components/CreativePrograms';
import Stats from './components/Stats';
import Professionals from './components/Professionals';
import LearningJourney from './components/LearningJourney';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden selection:bg-primary-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CinematicExcellence />
        <TraditionalEducation />
        <CreativePrograms />
        <Stats />
        <Professionals />
        <LearningJourney />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

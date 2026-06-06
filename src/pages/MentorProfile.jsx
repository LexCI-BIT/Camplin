import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const filmographyMovies = [
  { id: 1, title: 'Nice 2 Meet U', desc: 'FEATURE FILM', img: '/mentor/nicetomeetyou.jpeg' },
  { id: 2, title: 'London Life', desc: 'FEATURE FILM', img: '/mentor/Londonlife.png' },
  { id: 3, title: 'Babu Baga Busy', desc: 'FEATURE FILM', img: '/mentor/Babubagabusy.png' },
  { id: 4, title: 'SIN', desc: 'WEB SERIES', img: '/mentor/sin.png' },
  { id: 5, title: "90's", desc: 'WEB SERIES', img: "/mentor/90's-amiddleclassbiopic.png" },
  { id: 6, title: 'Hometown', desc: 'FEATURE FILM', img: '/mentor/hometown.png' },
];

const MentorProfile = () => {
  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % filmographyMovies.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0514] text-white font-sans overflow-x-hidden selection:bg-[#8b5cf6]/30 selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-16">
        {/* HERO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#8b5cf6]"></div>
              <span className="text-[#8b5cf6] text-xs font-bold tracking-[0.25em] uppercase">Mentor Profile</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-serif font-bold leading-[0.85] mb-6 tracking-tight">
              <span className="text-white block">Naveen</span>
              <span className="text-[#8b5cf6] block">Medaram</span>
            </h1>
            
            <p className="text-gray-400 text-[11px] tracking-[0.3em] font-medium mb-10 uppercase">
              Director &nbsp;&middot;&nbsp; Producer &nbsp;&middot;&nbsp; Writer
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mb-16 font-light">
              From Hollywood visual effects pipelines to directing films and web series, Naveen Medaram's journey bridges international filmmaking and Indian storytelling.
            </p>

            <div className="w-full h-32 bg-gradient-to-r from-[#130a2a]/20 to-transparent border border-white/5 rounded-sm mb-12"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#8b5cf6]/50"></div>
              <span className="text-gray-500 text-xs font-bold tracking-[0.25em] uppercase">Scroll</span>
            </div>
          </div>
          
          <div className="relative h-[85vh] w-full mt-10 md:mt-0">
            <img 
              src="/mentor/herosectionpic.png" 
              alt="Naveen Medaram"
              className="w-full h-full object-cover rounded-sm shadow-2xl"
            />
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="w-full mb-40 overflow-hidden bg-[#0a0514]">
          <style>{`
            @keyframes marqueeLoop {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marqueeLoop 25s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="marquee-track h-[75vh] min-h-[600px]">
            {[
              { id: '01', title: 'ON SET', img: '/mentor/horizontalanimation/1.png' },
              { id: '02', title: 'DIRECTION', img: '/mentor/horizontalanimation/2.png' },
              { id: '03', title: 'LONDON', img: '/mentor/horizontalanimation/3.png' },
              { id: '04', title: 'HOLLYWOOD', img: '/mentor/horizontalanimation/4.png' },
              { id: '05', title: 'CREATION', img: '/mentor/horizontalanimation/5.png' },
              { id: '01', title: 'ON SET', img: '/mentor/horizontalanimation/1.png' },
              { id: '02', title: 'DIRECTION', img: '/mentor/horizontalanimation/2.png' },
              { id: '03', title: 'LONDON', img: '/mentor/horizontalanimation/3.png' },
              { id: '04', title: 'HOLLYWOOD', img: '/mentor/horizontalanimation/4.png' },
              { id: '05', title: 'CREATION', img: '/mentor/horizontalanimation/5.png' }
            ].map((item, idx) => (
              <div key={idx} className="relative w-[100vw] md:w-[25vw] flex-shrink-0 h-full group overflow-hidden border-r-4 border-[#0a0514]">
                <img src={item.img} alt={item.title} className={`w-full h-full object-cover transition-transform duration-1000 ${item.id === '05' ? 'scale-[1.7] origin-[50%_25%] group-hover:scale-[1.8]' : 'group-hover:scale-110'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[#8b5cf6]/5 mix-blend-overlay group-hover:bg-[#8b5cf6]/0 transition-all duration-700"></div>
                
                <div className="absolute top-8 right-8">
                  <span className="text-[#8b5cf6]/20 text-7xl font-bold font-sans tracking-tighter">{item.id}</span>
                </div>
                
                <div className="absolute bottom-8 left-8">
                  <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase">{item.title}</span>
                  <div className="flex gap-1.5 mt-4 opacity-50">
                    <div className="w-3 h-1.5 bg-[#8b5cf6]"></div>
                    <div className="w-3 h-1.5 bg-white/20"></div>
                    <div className="w-3 h-1.5 bg-white/20"></div>
                    <div className="w-3 h-1.5 bg-white/20"></div>
                    <div className="w-3 h-1.5 bg-white/20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT THE FILMMAKER */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
              <span className="text-[#8b5cf6] text-xs font-bold tracking-[0.25em] uppercase">About The Filmmaker</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-10 tracking-tight">
              A Vision Born <br />
              Across Continents
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-light">
              Naveen Medaram is an Indian filmmaker, producer, and writer whose career spans Hollywood visual effects, British independent cinema, Telugu feature films, and digital storytelling.
            </p>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-16 font-light">
              He began his creative journey through Fine Arts and filmmaking education before working on major international productions. His work reflects a unique blend of technical mastery and the art of powerful human stories — a perspective shaped by living, learning, and creating across multiple film cultures.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-[#8b5cf6]/50"></div>
              <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.25em] uppercase">Naveen Medaram &mdash; Filmmaker & Mentor</span>
            </div>
          </div>
          
          <div className="relative pl-0 md:pl-10">
            <div className="absolute inset-0 bg-[#8b5cf6]/10 -translate-x-4 translate-y-4 md:-translate-x-8 md:translate-y-8 rounded-sm"></div>
            <img 
              src="/mentor/about.png" 
              alt="Naveen Medaram BW"
              className="w-full h-[700px] object-cover relative z-10 rounded-sm border border-white/5"
            />
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-[#0a0514] border border-[#8b5cf6]/30 p-10 flex flex-col items-center justify-center z-20 shadow-2xl">
              <span className="text-5xl font-serif font-bold text-[#8b5cf6] mb-2">20<span className="text-white">+</span></span>
              <span className="text-[10px] tracking-[0.25em] text-gray-400 font-bold">YEARS OF CINEMA</span>
            </div>
          </div>
        </section>

        {/* THE HOLLYWOOD YEARS */}
        <section className="bg-[#0f081c] py-32 mb-40 border-y border-white/5 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b5cf6]/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col items-center text-center mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
                <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase">International Productions</span>
                <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight">
                The Hollywood <br />
                <span className="text-[#8b5cf6] italic pr-4">Years</span>
              </h2>
              
              <p className="text-gray-400 text-lg font-light tracking-wide">
                Visual effects work on some of cinema's most iconic productions
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
              {[
                { title: 'The Dark Knight', desc: 'VISUAL EFFECTS', year: '2008', img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg' },
                { title: 'Pirates of the Caribbean: On Stranger Tides', desc: 'VISUAL EFFECTS', year: '2011', img: 'https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_FMjpg_UX1000_.jpg' },
                { title: 'Prince of Persia: The Sands of Time', desc: 'VISUAL EFFECTS', year: '2010', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQhgwick8emwSpj08NF-ufqOqhtx8_Gj4NA&s' },
                { title: 'Les Misérables', desc: 'VISUAL EFFECTS', year: '2012', img: 'https://m.media-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_FMjpg_UX1000_.jpg' }
              ].map((movie, idx) => (
                <div key={idx} className="group bg-[#0a0514] border border-white/5 overflow-hidden relative shadow-xl hover:border-[#8b5cf6]/30 transition-colors duration-500 rounded-sm">
                  <div className="aspect-[2/3] overflow-hidden relative">
                    <img src={movie.img} alt={movie.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-[#0a0514]/90 backdrop-blur-md border border-[#8b5cf6]/30 px-3 py-1.5 text-xs text-[#8b5cf6] font-mono tracking-widest rounded-sm">
                      {movie.year}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-serif font-bold mb-3 leading-tight text-white/90">{movie.title}</h3>
                    <p className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.25em] uppercase">{movie.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-400 max-w-4xl mx-auto text-xl leading-relaxed font-light">
              Before becoming a director, Naveen Medaram worked in Hollywood visual effects, contributing to major international productions and gaining invaluable experience in cinematic storytelling, production workflows, and large-scale filmmaking at the highest level.
            </p>
          </div>
        </section>

        {/* CREATIVE EVOLUTION */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-40">
          <div className="flex flex-col items-center text-center mb-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
              <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase">Creative Evolution</span>
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
              From Hollywood <br />
              to Hyderabad
            </h2>
            
            <p className="text-gray-400 text-lg font-light tracking-wide">
              A rare journey spanning two film industries, two continents, and one vision
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 md:gap-20 mb-32 relative">
            {/* Background connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent -translate-y-1/2 z-0"></div>

            {/* WEST */}
            <div className="flex-1 bg-gradient-to-br from-[#130a2a]/60 to-[#0a0514] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors duration-500 rounded-sm p-12 md:p-16 z-10 shadow-2xl relative">
              <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase block mb-8">West</span>
              <h3 className="text-4xl font-serif font-bold mb-10">Hollywood Productions</h3>
              <ul className="space-y-5">
                {['The Dark Knight', 'Pirates of the Caribbean', 'Prince of Persia', 'Les Misérables', 'British Independent Films'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-5 text-gray-300 font-light">
                    <span className="w-4 h-[1px] bg-[#8b5cf6]"></span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CENTER DIVIDER */}
            <div className="flex flex-col items-center justify-center py-12 md:py-0 relative z-20">
              <div className="w-32 h-32 rounded-full border border-[#8b5cf6]/30 flex flex-col items-center justify-center relative bg-[#0a0514] shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                <span className="text-sm font-serif text-center leading-relaxed">Naveen<br/>Medaram</span>
              </div>
              <div className="h-24 w-[1px] bg-gradient-to-b from-[#8b5cf6]/50 to-transparent mt-6 hidden md:block"></div>
              <div className="mt-4 text-[#8b5cf6]/50 animate-bounce">↓</div>
            </div>

            {/* EAST */}
            <div className="flex-1 bg-gradient-to-bl from-[#130a2a]/60 to-[#0a0514] border border-white/5 hover:border-[#8b5cf6]/30 transition-colors duration-500 rounded-sm p-12 md:p-16 z-10 shadow-2xl relative">
              <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase block mb-8 text-right md:text-left">East</span>
              <h3 className="text-4xl font-serif font-bold mb-10 text-right md:text-left">Indian Cinema</h3>
              <ul className="space-y-5">
                {['Babu Baga Busy (2017)', 'SIN Web Series (2020)', "90's — A Middle Class Biopic", 'Hometown (2025)', 'Mentoring New Voices'].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-end md:justify-start gap-5 text-gray-300 font-light">
                    <span className="md:hidden text-lg">{item}</span>
                    <span className="w-4 h-[1px] bg-[#8b5cf6]"></span>
                    <span className="hidden md:inline text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <p className="text-center text-gray-400 max-w-4xl mx-auto text-xl leading-relaxed font-light">
            From contributing to global blockbuster productions to directing films and web series in India, Naveen Medaram's career reflects a rare blend of international exposure and the depth of regional storytelling — a bridge between two great film traditions.
          </p>
        </section>

        {/* MY JOURNEY (Footer intro) */}
        <section className="bg-[#0a0514] pt-32 pb-40 border-t border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-[#8b5cf6]/5 to-transparent pointer-events-none"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col items-center text-center mb-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
                <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase">Career Chapters</span>
                <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-serif font-bold mb-8 tracking-tight">
                My Journey
              </h2>
              
              <p className="text-gray-400 text-lg font-light tracking-wide">
                Six chapters of a filmmaker's life
              </p>
            </div>
            
            <div className="max-w-[1200px] mx-auto relative px-6 md:px-0">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#8b5cf6]/50 via-[#8b5cf6]/20 to-transparent -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-20 md:space-y-32">
                
                {/* Chapter 1 - Left */}
                <div className="flex flex-col md:flex-row items-center justify-between relative w-full">
                  <div className="md:w-5/12 flex justify-end text-right pr-0 md:pr-16 w-full">
                    <div className="max-w-md w-full ml-auto">
                      <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3 text-left md:text-right">Chapter 01</span>
                      <h3 className="text-3xl font-serif font-bold mb-6 text-white text-left md:text-right">Education & Creative Foundations</h3>
                      <ul className="space-y-3 text-gray-400 font-light text-sm md:text-base inline-block text-left md:text-right">
                        <li>Bachelor of Fine Arts — JNTU</li>
                        <li>Filmmaking Diploma — Raindance Film School</li>
                        <li>Master's Degree — Bournemouth University</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#130a2a] border border-[#8b5cf6]/50 items-center justify-center text-[#8b5cf6] font-bold text-xs shadow-[0_0_20px_rgba(139,92,246,0.2)] z-10 hidden md:flex">
                    01
                  </div>
                  
                  <div className="md:w-5/12 hidden md:block"></div>
                </div>

                {/* Chapter 2 - Right */}
                <div className="flex flex-col md:flex-row items-center justify-between relative w-full mt-16 md:mt-0">
                  <div className="md:w-5/12 hidden md:block"></div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#130a2a] border border-[#8b5cf6]/50 items-center justify-center text-[#8b5cf6] font-bold text-xs shadow-[0_0_20px_rgba(139,92,246,0.2)] z-10 hidden md:flex">
                    02
                  </div>
                  
                  <div className="md:w-5/12 flex justify-start text-left pl-0 md:pl-16 w-full">
                    <div className="max-w-md w-full">
                      <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Chapter 02</span>
                      <h3 className="text-3xl font-serif font-bold mb-6 text-white">Hollywood Visual Effects Career</h3>
                      <ul className="space-y-3 text-gray-400 font-light text-sm md:text-base">
                        <li>Major international productions</li>
                        <li>Large-scale cinematic workflows</li>
                        <li>World-class production pipelines</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Chapter 3 - Left */}
                <div className="flex flex-col md:flex-row items-center justify-between relative w-full mt-16 md:mt-0">
                  <div className="md:w-5/12 flex justify-end text-right pr-0 md:pr-16 w-full">
                    <div className="max-w-md w-full ml-auto">
                      <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3 text-left md:text-right">Chapter 03</span>
                      <h3 className="text-3xl font-serif font-bold mb-6 text-white text-left md:text-right">British Independent Filmmaking</h3>
                      <ul className="space-y-3 text-gray-400 font-light text-sm md:text-base inline-block text-left md:text-right">
                        <li>Nice 2 Meet U (2014)</li>
                        <li>London Life (2016)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#130a2a] border border-[#8b5cf6]/50 items-center justify-center text-[#8b5cf6] font-bold text-xs shadow-[0_0_20px_rgba(139,92,246,0.2)] z-10 hidden md:flex">
                    03
                  </div>
                  
                  <div className="md:w-5/12 hidden md:block"></div>
                </div>

                {/* Chapter 4 - Right */}
                <div className="flex flex-col md:flex-row items-center justify-between relative w-full mt-16 md:mt-0">
                  <div className="md:w-5/12 hidden md:block"></div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#130a2a] border border-[#8b5cf6]/50 items-center justify-center text-[#8b5cf6] font-bold text-xs shadow-[0_0_20px_rgba(139,92,246,0.2)] z-10 hidden md:flex">
                    04
                  </div>
                  
                  <div className="md:w-5/12 flex justify-start text-left pl-0 md:pl-16 w-full">
                    <div className="max-w-md w-full">
                      <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Chapter 04</span>
                      <h3 className="text-3xl font-serif font-bold mb-6 text-white">Telugu Cinema Debut</h3>
                      <ul className="space-y-3 text-gray-400 font-light text-sm md:text-base">
                        <li>Babu Baga Busy (2017)</li>
                        <li>Telugu feature film direction</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Chapter 5 - Left */}
                <div className="flex flex-col md:flex-row items-center justify-between relative w-full mt-16 md:mt-0">
                  <div className="md:w-5/12 flex justify-end text-right pr-0 md:pr-16 w-full">
                    <div className="max-w-md w-full ml-auto">
                      <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3 text-left md:text-right">Chapter 05</span>
                      <h3 className="text-3xl font-serif font-bold mb-6 text-white text-left md:text-right">Digital Storytelling</h3>
                      <ul className="space-y-3 text-gray-400 font-light text-sm md:text-base inline-block text-left md:text-right">
                        <li>SIN (2020) — Web Series</li>
                        <li>OTT narrative exploration</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#130a2a] border border-[#8b5cf6]/50 items-center justify-center text-[#8b5cf6] font-bold text-xs shadow-[0_0_20px_rgba(139,92,246,0.2)] z-10 hidden md:flex">
                    05
                  </div>
                  
                  <div className="md:w-5/12 hidden md:block"></div>
                </div>

                {/* Chapter 6 - Right */}
                <div className="flex flex-col md:flex-row items-center justify-between relative w-full mt-16 md:mt-0">
                  <div className="md:w-5/12 hidden md:block"></div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#130a2a] border border-[#8b5cf6]/50 items-center justify-center text-[#8b5cf6] font-bold text-xs shadow-[0_0_20px_rgba(139,92,246,0.2)] z-10 hidden md:flex">
                    06
                  </div>
                  
                  <div className="md:w-5/12 flex justify-start text-left pl-0 md:pl-16 w-full">
                    <div className="max-w-md w-full">
                      <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Chapter 06</span>
                      <h3 className="text-3xl font-serif font-bold mb-6 text-white">Producer & Mentor</h3>
                      <ul className="space-y-3 text-gray-400 font-light text-sm md:text-base">
                        <li>90's — A Middle Class Biopic (2024)</li>
                        <li>Hometown (2025)</li>
                        <li>Camplain — Mentoring Next Generation</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FILMOGRAPHY */}
        <section className="bg-black pt-20 relative border-t border-white/5 overflow-hidden">
          <div className="flex flex-col items-center text-center mb-16 relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
              <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase">Complete Works</span>
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-serif font-bold mb-4 tracking-tight uppercase">
              Filmography
            </h2>
            
            <p className="text-gray-400 text-lg font-light tracking-wide italic">
              Stories brought to life through cinema
            </p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto relative pb-24 mt-16">
            {/* The static 3D film reel background image */}
            <img 
              src="/mentor/filography.png" 
              alt="Film Reel Strip" 
              className="w-full h-auto object-contain relative z-10"
            />

            {/* The animated poster square */}
            <div className="absolute top-[12%] left-[8%] md:top-[10%] md:left-[12%] z-30 w-[35%] md:w-[19%] flex flex-col items-center">
              <div className="w-full aspect-[2/3] relative overflow-hidden rounded shadow-2xl shadow-black/80 mb-4 bg-black">
                {filmographyMovies.map((movie, idx) => (
                  <img 
                    key={movie.id}
                    src={movie.img} 
                    alt={movie.title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      idx === currentMovie ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
              </div>
              
              <div className="h-16 flex flex-col items-center justify-start text-center mt-3">
                <h3 className="text-lg md:text-xl font-serif font-bold mb-2 transition-all duration-500">
                  {filmographyMovies[currentMovie].title}
                </h3>
                <p className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500">
                  {filmographyMovies[currentMovie].desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS OF EXPERTISE */}
        <section className="bg-[#0a0514] pt-32 pb-32 border-t border-white/5 relative">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
              <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase">Core Disciplines</span>
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
            </div>
            <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight text-white">
              Areas of <br />
              Expertise
            </h2>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🎬', title: 'Film Direction', desc: 'Narrative-driven direction across feature films, shorts, and digital formats with a deeply human touch.' },
                { icon: '✍️', title: 'Screenwriting', desc: 'Crafting compelling scripts that translate lived emotion into cinematic language.' },
                { icon: '📖', title: 'Storytelling', desc: 'Finding universal truth in personal and cultural narratives across genres and media.' },
                { icon: '🎥', title: 'Film Production', desc: 'End-to-end production expertise developed across Hollywood and Indian cinema.' },
                { icon: '🌍', title: 'International Filmmaking', desc: 'Cross-cultural production experience spanning the UK, USA, and India.' },
                { icon: '💡', title: 'Creative Development', desc: 'From concept to screen — developing original ideas with commercial and artistic vision.' },
                { icon: '📱', title: 'Digital Storytelling', desc: 'OTT formats, web series, and digital-first narrative structures for modern audiences.' },
                { icon: '🎓', title: 'Mentorship', desc: 'Guiding emerging filmmakers with industry-tested knowledge and genuine investment in their growth.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#130a2a]/40 border border-white/5 p-10 rounded-lg hover:border-[#8b5cf6]/30 transition-all duration-500 flex flex-col items-start text-left">
                  <div className="text-3xl mb-8 opacity-80 drop-shadow-md grayscale">{item.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BY THE NUMBERS */}
        <section className="bg-[#0a0514] pt-32 pb-32 border-t border-white/5 relative">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
              <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase">Industry Standing</span>
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
            </div>
            <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-tight text-white">
              By the Numbers
            </h2>
          </div>

          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '20+', desc: 'Years of filmmaking experience spanning three countries and multiple formats' },
                { number: '4', desc: 'Major Hollywood productions contributed to as visual effects professional' },
                { number: '3', desc: 'Roles mastered — Director, Producer, and Screenwriter' },
                { number: '3', desc: 'Internationally accredited academic degrees in film and fine arts' },
                { number: '7+', desc: 'Films and series brought from script to screen across two film industries' },
                { number: '∞', desc: 'Stories still waiting to be told — and a new generation of filmmakers to guide' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#130a2a]/40 border border-white/5 p-12 rounded-lg hover:border-[#8b5cf6]/30 transition-all duration-500 flex flex-col items-start text-left h-full">
                  <h3 className="text-6xl font-serif font-bold text-white mb-6">{item.number}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE CAMPLAIN ADVANTAGE */}
        <section className="bg-[#0a0514] pt-32 pb-32 border-t border-white/5 relative">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
              <span className="text-[#8b5cf6] text-[10px] font-bold tracking-[0.3em] uppercase">The Camplain Advantage</span>
              <div className="w-10 h-[1px] bg-[#8b5cf6]"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight">
              Why Learn From <br />
              Naveen Medaram
            </h2>
            <p className="text-gray-400 text-lg font-light tracking-wide">
              A mentor who has truly lived the filmmaker's journey
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🏆', title: 'Real Industry Experience', desc: 'Naveen brings genuine Hollywood and Indian film industry experience — not theory, but hard-won knowledge from actual productions at scale.' },
                { icon: '🌐', title: 'International Exposure', desc: 'Having worked across the UK, USA, and India, Naveen offers a globally informed perspective on filmmaking that few mentors can match.' },
                { icon: '🎬', title: 'Practical Knowledge', desc: 'Every lesson is grounded in real production experience — from VFX pipelines to independent shoots to OTT digital storytelling.' },
                { icon: '📖', title: 'Storytelling Expertise', desc: 'From fine arts foundations to screenwriting and direction, Naveen\'s approach to story is both technical and deeply humane.' },
                { icon: '🧭', title: 'Creative Leadership', desc: 'As a director and producer, Naveen understands both the creative and logistical dimensions of leading a film from vision to final cut.' },
                { icon: '🚀', title: 'Career Guidance', desc: 'Whether you\'re starting out or looking to break into a new market, Naveen provides direction that\'s grounded in real career experience.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#130a2a]/40 border border-white/5 p-12 rounded-lg hover:border-[#8b5cf6]/30 transition-all duration-500 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-full bg-[#130a2a] border border-[#8b5cf6]/20 flex items-center justify-center text-xl mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                    <span className="drop-shadow-lg">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="bg-[#0a0514] pt-32 pb-32 border-t border-white/5 relative flex flex-col items-center text-center px-6">
          <div className="text-[#8b5cf6] text-7xl font-serif font-bold opacity-60 mb-8 leading-none">"</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-4xl mx-auto leading-tight mb-12">
            Great stories connect people beyond <span className="text-[#8b5cf6] italic font-serif">language</span>, culture, and geography.
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">- Naveen Medaram</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/50"></div>
            <span className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">Director & Mentor</span>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0514] pt-40 pb-40 border-t border-white/5 relative flex flex-col items-center text-center px-6 overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b5cf6]/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-[#8b5cf6]"></div>
              <span className="text-[#8b5cf6] text-xs font-bold tracking-[0.3em] uppercase">Begin Your Journey</span>
              <div className="w-12 h-[1px] bg-[#8b5cf6]"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              Learn Filmmaking From <br />
              Industry Professional <br />
              <span className="text-[#8b5cf6]">Naveen Medaram</span>
            </h2>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorProfile;

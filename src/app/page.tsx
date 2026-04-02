'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow" />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Scanline */}
      <div className="scanline" />

      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo Mark */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center relative">
              <div className="w-6 h-6 border border-white/60" />
              <div className="absolute w-1.5 h-1.5 bg-white/80 top-1 right-1" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xs text-white/40 tracking-[0.3em] uppercase">Ngentech</div>
              <div className="text-[10px] text-white/20 tracking-[0.2em] uppercase">Research Division</div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full blink" />
            <span className="tracking-widest uppercase hidden sm:inline">System Active</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        
        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12">
          
          {/* Company Tagline */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1.5 border border-white/10 text-[10px] tracking-[0.4em] uppercase text-white/50">
                Establishment 2026
              </span>
            </div>
            
            <p className="text-center mb-6 sm:mb-8 text-xs sm:text-sm md:text-base font-light tracking-[0.25em] text-white/60 uppercase">
              Pioneering the frontier of <span className="text-white/80">computational intelligence</span>
            </p>
          </div>

          {/* Main Title */}
          <div className={`relative transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Glitch Effect Layer */}
              <h1 
                className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-black text-center leading-[0.85] tracking-[-0.03em] holographic select-none"
                data-text="COMING"
              >
                COMING
              </h1>
              <h1 
                className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-black text-center leading-[0.85] tracking-[-0.03em] holographic select-none"
                data-text="SOON"
              >
                SOON
              </h1>
            </div>

            {/* Decorative Lines */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-12 tech-line mb-2" />
              <div className="w-8 tech-line mb-2 ml-4" />
              <div className="w-4 tech-line ml-8" />
            </div>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-4 tech-line mb-2 ml-auto" />
              <div className="w-8 tech-line mb-2 ml-auto" />
              <div className="w-12 tech-line ml-auto" />
            </div>
          </div>

          {/* Subtitle / Countdown Label */}
          <div className={`mt-8 sm:mt-12 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <p className="text-[11px] sm:text-xs tracking-[0.5em] text-white/30 uppercase mb-3">
                Initiating Launch Sequence
              </p>
              
              {/* Progress Bar */}
              <div className="w-64 sm:w-80 mx-auto">
                <div className="h-[1px] bg-white/10 relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-white/60 data-scroll"
                    style={{ width: '200%' }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[9px] tracking-[0.3em] text-white/20 uppercase">
                  <span>Phase I</span>
                  <span>Phase II</span>
                  <span>Phase III</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className={`mt-16 sm:mt-24 max-w-2xl mx-auto text-center transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="corner-bracket inline-block px-8 py-6">
              <p className="text-sm sm:text-base font-light leading-relaxed text-white/50 tracking-wide">
                We are architecting the next generation of <span className="text-white/70">autonomous systems</span> and 
                <span className="text-white/70"> quantum computing infrastructure</span>. Our mission: solve humanity&apos;s 
                most complex computational challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`relative z-10 px-6 py-8 border-t border-white/5 transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Tech Specs */}
            <div className="flex items-center gap-8 text-[10px] tracking-[0.2em] text-white/25">
              <div>
                <span className="text-white/40 block mb-1">PROCESSORS</span>
                <span className="font-mono">QUANTUM-7 CORE</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-white/40 block mb-1">CAPACITY</span>
                <span className="font-mono">∞ EXABYTES</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-white/40 block mb-1">STATUS</span>
                <span className="font-mono">INITIALIZING</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/ngentechco"
                className="group relative w-10 h-10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-white/30"
                title="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/40 group-hover:text-white transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a
                href="https://github.com/ngentechco"
                className="group relative w-10 h-10 border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-white/30"
                title="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/40 group-hover:text-white transition-colors">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.25em] text-white/20">
              <span className="uppercase">© 2026 Ngentech Research Laboratories</span>
              <span className="uppercase">All Rights Reserved</span>
            </div>
          </div>
        </div>
      </main>

      {/* Ambient Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent floating-element"
          style={{ left: '10%', top: '20%', animationDelay: '0s' }}
        />
        <div 
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent floating-element"
          style={{ left: '25%', top: '60%', animationDelay: '2s' }}
        />
        <div 
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent floating-element"
          style={{ left: '75%', top: '30%', animationDelay: '4s' }}
        />
        <div 
          className="absolute w-px h-28 bg-gradient-to-b from-transparent via-white/10 to-transparent floating-element"
          style={{ left: '85%', top: '70%', animationDelay: '1s' }}
        />
      </div>
    </div>
  );
}
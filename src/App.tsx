import { motion } from 'motion/react';
import { Sparkles, Cpu, GraduationCap } from 'lucide-react';
import Lightfall from './components/Lightfall';

export default function App() {
  return (
    <div id="landing-root" className="relative w-full h-screen overflow-hidden bg-black font-sans text-neutral-100 flex items-center justify-center">
      
      {/* 
        Magical, Slow-drifting, Clean Lightfall Background
        Adjusted parameters for an ultra-sophisticated, peaceful environment:
        - extremely slow speed (0.15)
        - low density (0.2) and streak count (2) to prevent clutter
        - thin, precise streak width (0.6) for elegant laser-like precision
      */}
      <div id="background-canvas" className="absolute inset-0 z-0">
        <Lightfall
          colors={['#C3DAFF', '#703AFA', '#FF9FFC', '#4F46E5']}
          backgroundColor="#020008"
          speed={0.15}
          streakCount={2}
          streakWidth={0.6}
          streakLength={1.2}
          glow={1.4}
          density={0.2}
          twinkle={1.2}
          zoom={2.4}
          backgroundGlow={0.6}
          opacity={0.9}
          mouseInteraction={true}
          mouseStrength={0.6}
          mouseRadius={0.7}
          mouseDampening={0.2}
        />
      </div>

      {/* Subtle vignettes to keep focus centered and text high-contrast */}
      <div id="vignette-overlay" className="absolute inset-0 pointer-events-none bg-radial-[circle_at_center,transparent_20%,rgba(0,0,0,0.65)_100%] z-5" />
      <div id="glow-bottom" className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-5" />
      <div id="glow-top" className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-5" />

      {/* Tiny top left logo watermark */}
      <div id="top-bar" className="absolute top-8 left-8 right-8 flex justify-between items-center z-15 pointer-events-none select-none">
        <div className="flex items-center gap-2 bg-neutral-900/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-800/60 shadow-lg">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-300 font-semibold">OACRG</span>
        </div>
        <div className="flex items-center gap-2 bg-neutral-900/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-800/60 shadow-lg">
          <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-300 font-semibold">Kolling institute</span>
        </div>
      </div>

      {/* Main sophisticated message in the absolute center */}
      <div id="hero-content" className="relative z-10 max-w-xl text-center px-6 flex flex-col items-center">
        
        {/* Under active construction status badge */}
        <motion.div
          id="badge-under-dev"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-lg border border-white/[0.08] shadow-[0_0_20px_rgba(139,92,246,0.05)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-purple-300">
            Deciphering the Unseen
          </span>
        </motion.div>

        {/* Brand Name "OA CRG" with stunning cinematic letter-spacing & gradient */}
        <motion.h1
          id="brand-title"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl font-light tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400/80 mr-[-0.22em] leading-none"
        >
          OACRG
        </motion.h1>

        {/* Minimal separation bar */}
        <motion.div
          id="sep-bar"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '60px', opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
          className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-8"
        />

        {/* Simple, descriptive copy with sophisticated layout */}
        <motion.p
          id="brand-description"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="text-neutral-300 font-light text-sm md:text-base leading-relaxed tracking-wide"
        >
          A silent paradigm is shifting. Beneath the stream of falling light, a new realm of discovery begins to crystallize.
        </motion.p>

      </div>

      {/* Floating minimalist footer info */}
      <div id="footer-branding" className="absolute bottom-8 left-8 right-8 flex justify-center items-center z-15 pointer-events-none select-none text-[10px] text-neutral-600 font-mono tracking-wider">
        <div id="footer-copyright">
          &copy; {new Date().getFullYear()} OACRG. ALL RIGHTS RESERVED.
        </div>
      </div>

    </div>
  );
}

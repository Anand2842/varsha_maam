import React from 'react';
import { motion } from 'framer-motion';
import { PAPER_METADATA } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <motion.circle 
            cx="50%" cy="50%" r="20%" 
            fill="url(#grid)" 
            className="text-emerald-400"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-mono tracking-widest text-emerald-300 border border-emerald-800 rounded-full bg-emerald-900/30 uppercase">
            Interactive Research Artifact
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 font-sans tracking-tight">
            {PAPER_METADATA.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl text-slate-300 font-serif italic">
            {PAPER_METADATA.authors}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm text-slate-400 font-mono">
            <span>{PAPER_METADATA.journal}</span>
            <span className="hidden md:inline">•</span>
            <span>{PAPER_METADATA.year}</span>
            <span className="hidden md:inline">•</span>
            <a 
              href={`https://doi.org/${PAPER_METADATA.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/30"
            >
              DOI: {PAPER_METADATA.doi}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown size={20} />
        </div>
      </motion.div>
    </div>
  );
};
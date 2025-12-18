
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { AbstractOverview } from './components/AbstractOverview';
import { Context } from './components/Context';
import { Methodology } from './components/Methodology';
import { Results } from './components/Results';
import { KeyFindings } from './components/KeyFindings';
import { Discussion } from './components/Discussion';
import { Applications } from './components/Applications';
import { Limitations } from './components/Limitations';
import { Footer } from './components/Footer';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    'Abstract', 'Context', 'Methodology', 'Results', 'Findings', 'Discussion', 'Limitations', 'Impact'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-accent z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 right-0 p-4 z-40" aria-label="Main navigation">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-white/90 backdrop-blur shadow-md rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-4 w-48 bg-white/95 backdrop-blur shadow-xl rounded-lg overflow-hidden border border-slate-100">
            <div className="flex flex-col py-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="px-4 py-2 text-left hover:bg-slate-50 text-sm font-medium text-slate-700"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <AbstractOverview id="abstract" />
        <Context id="context" />
        <Methodology id="methodology" />
        <Results id="results" />
        <KeyFindings id="findings" />
        <Discussion id="discussion" />
        <Limitations id="limitations" />
        <Applications id="impact" />
        <Footer />
      </main>
    </div>
  );
}

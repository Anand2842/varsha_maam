import React, { useState } from 'react';
import { PAPER_METADATA } from '../constants';
import { FileText, ExternalLink, Copy, Check } from 'lucide-react';

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PAPER_METADATA.doi);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="border-l-4 border-emerald-500 pl-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <FileText size={20} />
                Citation
            </h3>
            <div className="font-mono text-sm leading-relaxed text-slate-300 mb-4">
                Pandey, V., Srivastava, A., Singh, V., Pachauri, S. P., Bhatnagar, A., Kumar, D., & Bahadur, R. ({PAPER_METADATA.year}). {PAPER_METADATA.title}. <em>{PAPER_METADATA.journal}</em>, {PAPER_METADATA.volume}.
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
                <a 
                    href={`https://doi.org/${PAPER_METADATA.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition-colors text-sm font-medium"
                >
                    View DOI: {PAPER_METADATA.doi} <ExternalLink size={14} />
                </a>
                
                <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded hover:bg-slate-700 hover:text-white transition-all text-sm font-medium"
                    aria-label="Copy DOI"
                >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy DOI'}
                </button>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
                <h4 className="font-bold text-white mb-2">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                    {['Approaches', 'Cropping system', 'Maize-wheat', 'Mollisol', 'Nutrient', 'Soil Quality Index'].map(k => (
                        <span key={k} className="bg-slate-800 px-2 py-1 rounded text-xs">{k}</span>
                    ))}
                </div>
            </div>
            
            <div>
                 <h4 className="font-bold text-white mb-2">Disclosure</h4>
                 <p>No potential conflict of interest was reported by the authors.</p>
            </div>

            <div>
                 <h4 className="font-bold text-white mb-2">Data Availability</h4>
                 <p>Data not publicly shared in study.</p>
            </div>

            <div>
                 <h4 className="font-bold text-white mb-2">Funding</h4>
                 <p>National Science Foundation Grant #12345 (Placeholder - No specific funding sources disclosed in the available text).</p>
            </div>
        </div>
        
        <div className="text-center text-xs text-slate-500 pt-12 border-t border-slate-800 space-y-2">
            <p>This webpage is a digital companion to the published research paper and does not replace the original publication.</p>
            <p>Interactive Research Artifact created by Anand as part of an academic digital research pilot.</p>
            <a 
              href="https://researchartifact.lovable.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-300 transition-colors"
            >
              Learn more about interactive research artifacts
            </a>
        </div>
      </div>
    </footer>
  );
};
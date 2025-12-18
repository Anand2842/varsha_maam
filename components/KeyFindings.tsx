import React from 'react';
import { Section } from './Section';
import { KEY_FINDINGS } from '../constants';
import { CheckCircle2, ArrowRight, FileText } from 'lucide-react';

export const KeyFindings = ({ id }: { id: string }) => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id={id} className="bg-white rounded-3xl my-12 shadow-sm border border-slate-100">
      <div className="px-4 py-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Key Findings Spotlight</h2>
        
        <div className="space-y-8">
          {KEY_FINDINGS.map((finding, index) => (
            <div 
              key={finding.id}
              className={`relative pl-8 border-l-4 ${
                finding.type === 'primary' ? 'border-emerald-500' : 'border-slate-300'
              }`}
            >
              <h3 className={`font-bold mb-3 ${
                finding.type === 'primary' ? 'text-xl md:text-2xl text-slate-900' : 'text-lg text-slate-700'
              }`}>
                {finding.statement}
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm mt-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium border border-slate-200">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  {finding.highlight}
                </span>

                {finding.targetId && (
                  <button 
                    onClick={() => finding.targetId && scrollToId(finding.targetId)}
                    className="group flex items-center gap-2 text-slate-500 hover:text-emerald-700 transition-colors ml-0 sm:ml-auto"
                    aria-label={`Jump to evidence: ${finding.evidence}`}
                  >
                    <span className="flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-slate-400 group-hover:text-emerald-600">
                       <FileText size={12} />
                       Source
                    </span>
                    <span className="font-medium underline decoration-slate-300 underline-offset-4 group-hover:decoration-emerald-500 decoration-1">
                        {finding.evidence}
                    </span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-500" />
                  </button>
                )}
                {!finding.targetId && (
                    <span className="text-slate-400 text-xs font-mono ml-auto">
                        Source: {finding.evidence}
                    </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
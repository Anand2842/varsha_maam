import React from 'react';
import { Section } from './Section';
import { Sprout, BarChart, BookOpen } from 'lucide-react';

export const Applications = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <h2 className="text-3xl font-bold mb-8">Applications & Impact</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-slate-200 rounded-lg">
            <Sprout className="text-emerald-600 mb-4" size={32} />
            <h3 className="font-bold mb-2">Integrated Management</h3>
            <p className="text-sm text-slate-600">
                Farmers in the Tarai region can adopt <strong>STCR-based fertilization with FYM</strong> to reduce chemical dependency while maintaining yield targets.
            </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-lg">
            <BarChart className="text-blue-600 mb-4" size={32} />
            <h3 className="font-bold mb-2">Policy Framework</h3>
            <p className="text-sm text-slate-600">
                The study provides a framework for soil quality estimation using MDS, advocating for policies that promote <strong>site-specific nutrient management</strong>.
            </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-lg">
            <BookOpen className="text-purple-600 mb-4" size={32} />
            <h3 className="font-bold mb-2">Future Research</h3>
            <p className="text-sm text-slate-600">
                Continued research in soil testing and nutrient recommendation is essential. "Future work should investigate..." (implied: long-term monitoring).
            </p>
        </div>
      </div>
    </Section>
  );
};
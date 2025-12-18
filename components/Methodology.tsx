import React from 'react';
import { Section } from './Section';
import { ArrowRight, Beaker, Database, Calculator, FileText } from 'lucide-react';
import { TREATMENTS } from '../constants';

const Step = ({ icon: Icon, title, children }: { icon: any, title: string, children?: React.ReactNode }) => (
  <div className="flex-1 min-w-[250px] p-6 bg-white border border-slate-200 rounded-lg relative group hover:border-emerald-300 transition-colors">
    <div className="absolute top-6 right-6 text-slate-200 group-hover:text-emerald-100 transition-colors">
      <Icon size={48} />
    </div>
    <h3 className="font-bold text-slate-900 mb-3">{title}</h3>
    <div className="text-sm text-slate-600 space-y-2">{children}</div>
  </div>
);

export const Methodology = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Methodology Pipeline</h2>
        <p className="text-slate-600 max-w-2xl">
          A randomized block design field experiment conducted at GBPUA&T, Pantnagar (2019-2021).
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Pipeline Visual */}
        <div className="flex flex-col lg:flex-row gap-4 relative">
            <Step icon={Database} title="1. Field Experiment">
                <p><strong>Location:</strong> Pantnagar (Humid Subtropical)</p>
                <p><strong>Design:</strong> RBD, 3 Replications</p>
                <p><strong>Crops:</strong> Maize (Kharif) - Wheat (Rabi)</p>
                <p><strong>Treatments:</strong> 9 Variations (T1-T9)</p>
            </Step>
            
            <div className="hidden lg:flex items-center justify-center text-slate-300">
                <ArrowRight size={24} />
            </div>

            <Step icon={Beaker} title="2. Laboratory Analysis">
                <p><strong>Physical:</strong> WHC, Texture</p>
                <p><strong>Chemical:</strong> pH, EC, OC, N, P, K, Ca, Mg, S</p>
                <p><strong>Biological:</strong> DHA, MBC, Urease</p>
                <p><strong>Sample Depth:</strong> 0-15 cm</p>
            </Step>

            <div className="hidden lg:flex items-center justify-center text-slate-300">
                <ArrowRight size={24} />
            </div>

            <Step icon={Calculator} title="3. Statistical Analysis">
                <p><strong>PCA:</strong> Principal Component Analysis</p>
                <p><strong>MDS:</strong> Minimum Data Set Selection</p>
                <p><strong>Scoring:</strong> Linear Scoring Functions</p>
                <p><strong>SQI:</strong> Weighted Additive Index</p>
            </Step>
        </div>

        {/* Deep Dive: Treatments */}
        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <FileText size={20} className="text-emerald-600" />
                Experimental Treatments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {TREATMENTS.map((t) => (
                    <div key={t.id} className="bg-white p-3 rounded border border-slate-100 text-sm">
                        <span className="font-mono font-bold text-emerald-700 mr-2">{t.id}:</span>
                        <span className="text-slate-700" title={t.details}>{t.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};
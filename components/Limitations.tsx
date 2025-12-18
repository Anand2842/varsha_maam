import React from 'react';
import { Section } from './Section';
import { AlertTriangle } from 'lucide-react';

export const Limitations = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-lg">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-red-900">Limitations & Boundaries</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-red-800 text-lg mb-2 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600" />
                Geographic Specificity
            </h3>
            <p className="text-red-700 leading-relaxed pl-7">
              This study was conducted in the <strong>Mollisol region of Uttarakhand (Tarai plains)</strong>. Results, particularly the exact fertilizer responses, may not be directly generalizable to other soil orders or climatic zones without local validation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-red-800 text-lg mb-2 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600" />
                Temporal Scope
            </h3>
            <p className="text-red-700 leading-relaxed pl-7">
              The experiment analyzed data over <strong>two cropping years (2019-2021)</strong>. While significant short-term trends were observed, long-term stability of the SQI improvements requires multidecadal monitoring to fully assess sustainability.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-red-800 text-lg mb-2 flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600" />
                Indicator Selection
            </h3>
            <p className="text-red-700 leading-relaxed pl-7">
              The SQI was derived from a Minimum Data Set (MDS) selected via PCA. While statistically robust for this dataset, other potential indicators (e.g., aggregate stability, specific microbial communities) were not part of the final index construction.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

import React from 'react';
import { Section } from './Section';

export const Discussion = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <h2 className="text-3xl font-bold mb-12">Discussion & Interpretation</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-500 shadow-sm">
          <h3 className="font-bold text-lg mb-3">Interpretation of STCR Success</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            STCR-based treatments reported higher SQI due to judicious, balanced, and profitable fertilization. Combined application with FYM (T4) improved nutrient recovery and P solubilization via organic acids, coating sesquioxides and reducing fixation.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-500 shadow-sm">
          <h3 className="font-bold text-lg mb-3">Role of Soil Biology</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Treatments with higher organic carbon supported greater microbial activity (DHA, MBC). Organic residues act as a substrate for microbes, and green manuring stimulated microbial growth, enhancing mineralization.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border-l-4 border-slate-300 shadow-sm">
          <h3 className="font-bold text-lg mb-3">Comparison to Control</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Lowest SQI was reported under control (T1) due to continuous nutrient mining without replenishment. This confirms that relying solely on native soil fertility leads to degradation in the Mollisol region.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border-l-4 border-slate-300 shadow-sm">
          <h3 className="font-bold text-lg mb-3">Physical Property Enhancement</h3>
          <p className="text-slate-600 leading-relaxed text-sm">
             Highest WHC under T4 is ascribed to improved soil aggregation and porosity from manure addition. Organic matter acts as a binding agent, increasing the soil's capacity to hold water.
          </p>
        </div>
      </div>
    </Section>
  );
};
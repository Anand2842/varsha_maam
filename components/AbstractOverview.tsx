import React from 'react';
import { Section } from './Section';
import { Sprout, Search, TrendingUp, Globe } from 'lucide-react';

const InsightBlock = ({ icon: Icon, title, children }: { icon: any, title: string, children?: React.ReactNode }) => (
  <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-3 text-emerald-700">
      <div className="p-2 bg-emerald-50 rounded-lg">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-sm uppercase tracking-wider">{title}</h3>
    </div>
    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{children}</p>
  </div>
);

export const AbstractOverview = ({ id }: { id: string }) => {
  return (
    <Section id={id} className="space-y-12">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Executive Research Overview</h2>
        <p className="text-xl text-slate-500 font-serif italic">
          A study on sustaining soil quality in the "breadbasket" Mollisol region.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InsightBlock icon={Search} title="Research Problem">
          Intensive tillage and heavy machinery in the <em>Tarai</em> regions have led to accelerating soil degradation and loss of organic matter, diminishing soil fertility.
        </InsightBlock>

        <InsightBlock icon={Sprout} title="Methodology">
          Field experiment comparing 9 nutrient approaches (RDF, STCR, Organic combinations) under a maize-wheat cropping system. Soil Quality Index (SQI) developed using Principal Component Analysis (PCA).
        </InsightBlock>

        <InsightBlock icon={TrendingUp} title="Key Results">
          STCR-based fertilizers with Farm Yard Manure (T4) yielded the highest SQI (2.21-2.23). Key indicators identified: Water Holding Capacity, Organic Carbon, Available N, and Dehydrogenase Activity.
        </InsightBlock>

        <InsightBlock icon={Globe} title="Impact">
          Integration of organics with inorganic fertilizers reduces dependency on chemical fertilizers while maintaining soil quality and environmental health in the Mollisol region.
        </InsightBlock>
      </div>
    </Section>
  );
};
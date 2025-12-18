import React from 'react';
import { Section } from './Section';
import { Lightbulb, Target, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';

interface ObjectivePointProps {
  children: React.ReactNode;
}

const ObjectivePoint: React.FC<ObjectivePointProps> = ({ children }) => (
  <div className="flex items-start gap-3">
    <ArrowRight size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
    <span className="text-slate-700 text-sm leading-relaxed">{children}</span>
  </div>
);

const ContextCard = ({ number, title, label, icon: Icon, children }: any) => (
  <div className="group relative flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-emerald-200">
    <div className="flex items-center gap-4 sm:flex-col sm:gap-2 sm:w-16 sm:border-r border-slate-100 sm:pr-6">
      <span className="text-2xl font-bold text-slate-200 font-mono group-hover:text-emerald-500 transition-colors duration-300">{number}</span>
      <div className="h-px w-full bg-slate-100 sm:h-full sm:w-px group-hover:bg-emerald-100 transition-colors"></div>
    </div>
    
    <div className="flex-1">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs font-bold text-emerald-600 font-mono tracking-wider uppercase mb-1 block">{label}</span>
          <h3 className="font-bold text-xl text-slate-900">{title}</h3>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-emerald-50 text-slate-400 group-hover:text-emerald-600 transition-colors duration-300">
          <Icon size={20} />
        </div>
      </div>
      
      <div className="text-slate-600 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  </div>
);

export const Context = ({ id }: { id: string }) => {
  return (
    <Section id={id} className="relative">
      {/* Decorative background container - constrained to prevent overflow issues without breaking sticky */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start relative">
        
        {/* Left Column: Title & Research Gap (Sticky) */}
        <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-emerald-500"></span>
              <span className="text-emerald-700 font-mono text-xs tracking-widest uppercase font-bold">Scientific Context</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Context & <br/><span className="text-slate-400">Problem Space</span>
            </h2>
          </div>
          
          {/* Research Gap Card */}
          <div className="relative p-8 rounded-2xl bg-slate-900 text-slate-300 shadow-2xl overflow-hidden group border border-slate-800">
            <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg text-red-400 border border-red-500/20">
                  <AlertCircle size={20} />
                </div>
                <h3 className="font-bold uppercase tracking-widest text-xs text-white">Critical Research Gap</h3>
              </div>
              
              <blockquote className="text-xl leading-relaxed text-white font-medium mb-6 border-l-2 border-emerald-500 pl-4 italic">
                "While Mollisols are highly productive, continuous intensive agriculture is degrading them."
              </blockquote>
              
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Current practices lack precision. There is an urgent need to identify sensitive soil quality indicators and optimal nutrient strategies specific to the <strong>Tarai Maize-Wheat system</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Context Points */}
        <div className="lg:col-span-7 flex flex-col gap-6 pt-4">
          <ContextCard 
            number="01" 
            title="Background" 
            label="The Breadbasket Soil"
            icon={BookOpen}
          >
            Mollisol soil order constitutes about 7% of the world's soil resource base. In India, these are dominantly observed in the <em>Tarai</em> regions of Uttar Pradesh and Uttarakhand. However, production is limited by soil degradation due to intensive tillage and loss of organic matter.
          </ContextCard>

          <ContextCard 
            number="02" 
            title="The STCR Approach" 
            label="Methodology"
            icon={Lightbulb}
          >
            Soil Test Crop Response (STCR) methodology moves beyond blanket recommendations. It considers the initial fertility status of the soil, ensuring balanced fertilizer use, targets specific yields, and adjusts doses based on soil contribution and organic sources (STCR-INM).
          </ContextCard>

          <ContextCard 
            number="03" 
            title="Study Objectives" 
            label="Key Goals"
            icon={Target}
          >
            <div className="space-y-4">
              <ObjectivePoint>Analyze the impact of different nutrient approaches on soil fertility status.</ObjectivePoint>
              <ObjectivePoint>Identify key soil quality indicators under maize-wheat cropping system.</ObjectivePoint>
              <ObjectivePoint>Develop and evaluate the Soil Quality Index (SQI) using Principal Component Analysis.</ObjectivePoint>
            </div>
          </ContextCard>
        </div>
      </div>
    </Section>
  );
};
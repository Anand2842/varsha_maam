import React, { useState } from 'react';
import { Section } from './Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, LabelList } from 'recharts';
import { SQI_DATA, PCA_2019_DATA } from '../constants';
import { Calendar } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-xl rounded-lg text-sm max-w-[250px]">
        <p className="font-bold mb-2 text-slate-900 border-b border-slate-100 pb-2">{label}</p>
        <p className="text-emerald-700 font-medium mb-1">{payload[0].payload.description}</p>
        <p className="text-slate-600 flex justify-between gap-4">
          <span>SQI Value:</span>
          <span className="font-mono font-bold text-slate-900">{payload[0].value.toFixed(2)}</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomPCATooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-xl rounded-lg text-sm min-w-[220px]">
        <p className="font-bold mb-3 text-slate-900 border-b border-slate-100 pb-2">{label}</p>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
             <span className="text-slate-500 font-medium">Eigenvalue:</span>
             <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
               {data.eigenvalue.toFixed(3)}
             </span>
          </div>
          <div className="flex justify-between items-center">
             <span className="text-slate-500 font-medium">Variance Explained:</span>
             <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
               {data.variance}%
             </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const Results = ({ id }: { id: string }) => {
  const [year, setYear] = useState<'year2019' | 'year2020'>('year2020');

  const yearLabel = year === 'year2019' ? '2019-20' : '2020-21';

  return (
    <Section id={id}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Results & Data Visualization</h2>
        <p className="text-slate-600">
          The Soil Quality Index (SQI) varied significantly across treatments. T4 (STCR-INM) consistently outperformed others.
        </p>
      </div>

      {/* Main Chart */}
      <div id="sqi-chart" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-12 scroll-mt-24 transition-all duration-300 hover:shadow-md min-w-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-slate-900">Soil Quality Index (SQI)</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-mono font-medium border border-emerald-200">
                Data: {yearLabel}
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              Comparison of soil quality under different nutrient management approaches.
            </p>
          </div>

          <div className="flex bg-slate-100 p-1.5 rounded-xl self-start md:self-auto border border-slate-200">
            <button
              onClick={() => setYear('year2019')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                year === 'year2019' 
                  ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-black/5 scale-100' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 scale-95 opacity-70 hover:opacity-100 hover:scale-100'
              }`}
            >
              <Calendar size={16} />
              2019-20
            </button>
            <button
              onClick={() => setYear('year2020')}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                year === 'year2020' 
                  ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-black/5 scale-100' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 scale-95 opacity-70 hover:opacity-100 hover:scale-100'
              }`}
            >
              <Calendar size={16} />
              2020-21
            </button>
          </div>
        </div>

        <div className="h-[450px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SQI_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="treatment" 
                tick={{ fontSize: 11, fill: '#64748b' }} 
                angle={-45} 
                textAnchor="end"
                interval={0}
                height={70}
                tickMargin={10}
              />
              <YAxis 
                domain={[0, 3]} 
                tick={{ fontSize: 12, fill: '#64748b' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip cursor={{ fill: '#f1f5f9' }} content={<CustomTooltip />} />
              <ReferenceLine y={1.22} stroke="#94a3b8" strokeDasharray="3 3" label={{ position: 'right', value: 'Baseline', fontSize: 10, fill: '#94a3b8' }} />
              <Bar 
                dataKey={year} 
                fill="#10B981" 
                radius={[6, 6, 0, 0]} 
                animationDuration={800}
                barSize={50}
              >
                <LabelList dataKey={year} position="top" fontSize={11} fontWeight={600} fill="#065f46" formatter={(val: number) => val.toFixed(2)} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-400 mt-6 text-center italic border-t border-slate-100 pt-4">
            Figure 6: Effect of different nutrient management approaches on Soil Quality Index (SQI) during {yearLabel}.
        </p>
      </div>

      {/* PCA Scree Plot Reconstruction */}
      <div className="grid md:grid-cols-2 gap-8">
        <div id="pca-chart" className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm scroll-mt-24 flex flex-col min-w-0">
            <h3 className="text-lg font-bold mb-2">PCA Scree Plot (2019-20)</h3>
            <p className="text-sm text-slate-600 mb-6">
                Principal Component 1 (PC1) explained the majority of variance (72.85%), indicating a strong correlation among dominant soil properties.
            </p>
            <div className="h-[300px] w-full flex-none min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={PCA_2019_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="component" tick={{fontSize: 12}} />
                        <YAxis label={{ value: 'Eigenvalue', angle: -90, position: 'insideLeft', fontSize: 12 }} />
                        <Tooltip content={<CustomPCATooltip />} cursor={{ fill: '#eff6ff' }} />
                        <Bar dataKey="eigenvalue" fill="#3B82F6" radius={[4, 4, 0, 0]} animationDuration={1000} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="space-y-4">
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl">
                <h4 className="font-bold text-emerald-800 text-sm uppercase tracking-wider mb-3">Key MDS Indicators</h4>
                <p className="text-sm text-emerald-700 mb-4 leading-relaxed">
                    Based on Principal Component Analysis, the Minimum Data Set (MDS) identified the following critical indicators for soil quality:
                </p>
                <ul className="space-y-2">
                    {['Water Holding Capacity (WHC)', 'Organic Carbon (OC)', 'Available Nitrogen (N)', 'Dehydrogenase Activity (DHA)'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-emerald-800 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        {item}
                      </li>
                    ))}
                </ul>
            </div>
            
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-3">Equation for SQI</h4>
                <div className="bg-white p-4 rounded-lg border border-slate-200 font-mono text-sm text-center shadow-sm mb-3">
                   {'$$ SQI = \\sum_{i=1}^{n} (W_i \\times S_i) $$'}
                </div>
                <p className="text-xs text-slate-500 text-center">
                    Where $W_i$ is the weighting factor and $S_i$ is the indicator score.
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
};
import { SQIDataPoint, PCADataPoint, TreatmentInfo, Finding } from './types';

export const TREATMENTS: TreatmentInfo[] = [
  { id: 'T1', name: 'Control', details: 'No fertilizers' },
  { id: 'T2', name: 'RDF', details: 'Recommended Dose of Fertilizers' },
  { id: 'T3', name: 'STCR (Inorganic)', details: 'Soil Test Crop Response (Target Yield)' },
  { id: 'T4', name: 'STCR-INM', details: 'STCR + FYM (Farm Yard Manure)' },
  { id: 'T5', name: '75% STCR N + GM', details: '75% STCR N + Full P&K + Green Manure' },
  { id: 'T6', name: '50% STCR N + GM', details: '50% STCR N + Full P&K + Green Manure' },
  { id: 'T7', name: '75% RDN + GM', details: '75% Recommended Dose N + Full P&K + GM' },
  { id: 'T8', name: '50% RDN + GM', details: '50% Recommended Dose N + Full P&K + GM' },
  { id: 'T9', name: 'FYM + GM + Urd', details: 'FYM + Green Manure + Intercropping' },
];

// Data from Figure 6 Table (Page 13)
export const SQI_DATA: SQIDataPoint[] = [
  { treatment: 'T1', year2019: 1.22, year2020: 1.14, description: 'Control' },
  { treatment: 'T2', year2019: 1.65, year2020: 1.70, description: 'RDF' },
  { treatment: 'T3', year2019: 1.84, year2020: 1.89, description: 'STCR' },
  { treatment: 'T4', year2019: 2.21, year2020: 2.23, description: 'STCR-INM (Best)' },
  { treatment: 'T5', year2019: 1.98, year2020: 2.22, description: '75% STCR+GM' },
  { treatment: 'T6', year2019: 1.81, year2020: 1.92, description: '50% STCR+GM' },
  { treatment: 'T7', year2019: 1.81, year2020: 1.90, description: '75% RDN+GM' },
  { treatment: 'T8', year2019: 1.58, year2020: 1.68, description: '50% RDN+GM' },
  { treatment: 'T9', year2019: 1.67, year2020: 1.81, description: 'Organics Only' },
];

// Data from Figure 2 (Page 9) and Figure 4 (Page 11)
export const PCA_2019_DATA: PCADataPoint[] = [
  { component: 'PC1', eigenvalue: 7.285, variance: 72.85 },
  { component: 'PC2', eigenvalue: 1.409, variance: 14.09 },
  { component: 'PC3', eigenvalue: 0.575, variance: 5.75 },
  { component: 'PC4', eigenvalue: 0.483, variance: 4.83 }, // Below threshold
];

export const KEY_FINDINGS: Finding[] = [
  {
    id: 1,
    statement: 'STCR-based fertilizers with FYM (T4) achieved the highest Soil Quality Index (2.23).',
    evidence: 'Figure 6, Table 4',
    highlight: 'SQI: 2.23 vs 1.13 (Control)',
    type: 'primary',
    targetId: 'sqi-chart'
  },
  {
    id: 2,
    statement: 'Integration of organics with inorganic fertilizers maintained superior soil biological properties.',
    evidence: 'Table 4',
    highlight: 'DHA: 399.8 vs 145.5 µg TPF',
    type: 'primary',
    targetId: 'sqi-chart'
  },
  {
    id: 3,
    statement: 'Key soil quality indicators identified were WHC, Organic Carbon, Available N, and Dehydrogenase Activity.',
    evidence: 'PCA Analysis (Table 5 & 7)',
    highlight: 'Variance Explained: >90%',
    type: 'secondary',
    targetId: 'pca-chart'
  }
];

export const PAPER_METADATA = {
  title: 'Effect of Different Approaches of Nutrient Application on Soil Quality Index Under Maize-Wheat Cropping System in Mollisol Region of Uttarakhand',
  authors: 'Varsha Pandey, Ajaya Srivastava, Veer Singh, S. P. Pachauri, Amit Bhatnagar, Deepak Kumar & Raj Bahadur',
  journal: 'Communications in Soil Science and Plant Analysis',
  doi: '10.1080/00103624.2024.2380492',
  year: 2024,
  volume: '55', // Inferred or standard for 2024
};

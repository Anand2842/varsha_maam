export interface SQIDataPoint {
  treatment: string;
  year2019: number;
  year2020: number;
  description: string;
}

export interface PCADataPoint {
  component: string;
  eigenvalue: number;
  variance: number;
}

export interface TreatmentInfo {
  id: string;
  name: string;
  details: string;
}

export interface Finding {
  id: number;
  statement: string;
  evidence: string;
  highlight: string;
  type: 'primary' | 'secondary';
  targetId?: string;
}

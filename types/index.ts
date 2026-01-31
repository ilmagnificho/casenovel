export type CaseType = 'divorce' | 'inheritance' | 'criminal' | 'traffic' | 'realestate' | 'civil';

export type ToneStyle = 'dramatic' | 'cathartic' | 'informative' | 'dark-comedy';

export interface ScenarioData {
  [key: string]: string;
}

export interface GenerateRequest {
  caseType: CaseType;
  scenario: ScenarioData;
  tone: ToneStyle;
}

export interface GenerateResponse {
  posts: string[];
  totalLength: number;
}

export interface Question {
  id: string;
  label: string;
  type: 'select' | 'text';
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface CaseTypeInfo {
  id: CaseType;
  name: string;
  icon: string;
  description: string;
  questions: Question[];
}

export interface ToneStyleInfo {
  id: ToneStyle;
  name: string;
  icon: string;
  description: string;
  example: string;
}

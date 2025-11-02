export interface Term {
  term: string;
  definition: string;
}

export interface QuizQuestion {
  term: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export type QuizState = 'apikey' | 'welcome' | 'loading' | 'active' | 'results';

export type QuizTopic = 'telecom' | 'quantum' | 'qrl' | 'satellite' | 'sagin';
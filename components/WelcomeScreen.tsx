
import React from 'react';
import { TOTAL_QUESTIONS, TOPICS } from '../constants';
import type { QuizTopic } from '../types';

interface WelcomeScreenProps {
  onStart: () => void;
  onClearApiKey: () => void;
  isLoading: boolean;
  error: string | null;
  selectedTopic: QuizTopic;
  onTopicChange: (topic: QuizTopic) => void;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400" style={{ animationDelay: '0.2s' }}></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400" style={{ animationDelay: '0.4s' }}></div>
  </div>
);

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onClearApiKey, isLoading, error, selectedTopic, onTopicChange }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-2xl text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
        AI-Powered Quiz
      </h1>
      <p className="text-slate-300 mb-6 text-lg">
        Select a topic and test your knowledge with {TOTAL_QUESTIONS} AI-generated questions.
      </p>

      <div className="flex justify-center mb-8 border-b border-slate-600 flex-wrap">
        {(Object.keys(TOPICS) as QuizTopic[]).map((topicId) => (
          <button
            key={topicId}
            onClick={() => onTopicChange(topicId)}
            className={`px-3 sm:px-4 py-3 text-base sm:text-lg font-semibold transition-colors duration-200 focus:outline-none whitespace-nowrap ${
              selectedTopic === topicId
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {TOPICS[topicId].name}
          </button>
        ))}
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg mb-6 text-sm">
          {error}
        </div>
      )}
      <button
        onClick={onStart}
        disabled={isLoading}
        className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-slate-900 font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg w-full md:w-auto"
      >
        {isLoading ? <LoadingSpinner /> : 'Start Quiz'}
      </button>
       <button
        onClick={onClearApiKey}
        className="text-slate-400 hover:text-cyan-400 text-sm mt-6 transition-colors"
      >
        Change API Key
      </button>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import type { QuizQuestion } from '../types';

interface QuizScreenProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const OptionButton: React.FC<{
  optionText: string;
  onClick: () => void;
  disabled: boolean;
  isSelected: boolean;
  isCorrect: boolean;
}> = ({ optionText, onClick, disabled, isSelected, isCorrect }) => {
  const baseClasses = "w-full text-left p-4 my-2 rounded-lg transition-all duration-300 border-2 text-slate-200";
  
  let stateClasses = "bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-cyan-500 cursor-pointer";

  if (disabled) {
    if (isCorrect) {
      stateClasses = "bg-green-500/30 border-green-500";
    } else if (isSelected && !isCorrect) {
      stateClasses = "bg-red-500/30 border-red-500";
    } else {
      stateClasses = "bg-slate-700 border-slate-600 opacity-60 cursor-not-allowed";
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${stateClasses}`}
    >
      {optionText}
    </button>
  );
};

export const QuizScreen: React.FC<QuizScreenProps> = ({ question, questionNumber, totalQuestions, onAnswer, onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    
    const isCorrect = option === question.correctAnswer;
    setSelectedAnswer(option);
    setIsAnswered(true);
    onAnswer(isCorrect);
  };
  
  return (
    <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-2xl w-full animate-fade-in">
      <div className="mb-6">
        <p className="text-slate-400 text-sm font-medium">Question {questionNumber} of {totalQuestions}</p>
        <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2">
          <div className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}></div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">{question.term}</h2>

      <div>
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            optionText={option}
            onClick={() => handleOptionClick(option)}
            disabled={isAnswered}
            isSelected={selectedAnswer === option}
            isCorrect={option === question.correctAnswer}
          />
        ))}
      </div>
      
      {isAnswered && (
         <div className="mt-6 animate-fade-in">
            <div className="text-left p-4 bg-slate-700/50 border-l-4 border-cyan-400 rounded-r-lg mb-4">
              <h4 className="font-bold text-cyan-400 mb-1">Explanation</h4>
              <p className="text-slate-300">{question.explanation}</p>
            </div>
            <div className="text-right">
              <button 
                onClick={onNext}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
              >
                {questionNumber === totalQuestions ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
         </div>
      )}
    </div>
  );
};
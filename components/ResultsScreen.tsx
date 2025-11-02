import React from 'react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const getFeedback = (score: number, total: number): { message: string; color: string } => {
  const percentage = (score / total) * 100;
  if (percentage >= 80) return { message: "Excellent! You're an expert!", color: 'text-green-400' };
  if (percentage >= 50) return { message: "Good job! A solid performance.", color: 'text-yellow-400' };
  return { message: "Keep studying! You'll get there.", color: 'text-red-400' };
};

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const { message, color } = getFeedback(score, totalQuestions);

  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-2xl text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-cyan-400 mb-2">Quiz Complete!</h2>
      <p className="text-5xl font-bold my-6">
        You scored <span className={color}>{score}</span> / {totalQuestions}
      </p>
      <p className={`text-xl font-semibold mb-8 ${color}`}>{message}</p>
      <button
        onClick={onRestart}
        className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg"
      >
        Play Again
      </button>
    </div>
  );
};
import React, { useState } from 'react';

interface ApiKeyScreenProps {
  onApiKeySubmit: (apiKey: string) => void;
}

export const ApiKeyScreen: React.FC<ApiKeyScreenProps> = ({ onApiKeySubmit }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySubmit(apiKey.trim());
    }
  };

  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-2xl text-center animate-fade-in w-full max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">
        Enter Your Gemini API Key
      </h1>
      <p className="text-slate-300 mb-6">
        To generate quiz questions, this app needs a Google Gemini API key. Your key will be saved securely in your browser's local storage.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your API key here"
          className="w-full bg-slate-700 border-2 border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
          aria-label="Gemini API Key"
        />
        <button
          type="submit"
          disabled={!apiKey.trim()}
          className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-slate-900 font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
        >
          Save and Continue
        </button>
      </form>
       <p className="text-slate-400 mt-6 text-sm">
        You can get your API key from{" "}
        <a 
          href="https://aistudio.google.com/app/apikey" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 underline hover:text-cyan-300"
        >
          Google AI Studio
        </a>.
      </p>
    </div>
  );
};
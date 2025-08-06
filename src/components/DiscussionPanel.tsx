"use client";

import React from 'react';
import { Book, MessageCircle, Play } from 'lucide-react';
import { useTheme } from './ThemeContext';

const DiscussionPanel = () => {
  const { theme } = useTheme();

  return (
    <div className={`w-full max-w-5xl mx-auto p-4 min-h-screen transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900" : "bg-gray-50"
    }`}>
      {/* Meet Your Discussion Panel Section */}
      <div className="text-center mb-8">
        <h1 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}>
          Meet Your Discussion Panel
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Professor Wise */}
          <div className={`rounded-xl p-4 shadow-sm border transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2 transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-600" : "bg-purple-500"
            }`}>
              P
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}>
              Professor Wise
            </h3>
            <p className={`text-xs leading-relaxed mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              Knowledgeable, analytical, loves metaphors and deep insights
            </p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-600"
            }`}>
              thoughtful
            </span>
          </div>

          {/* Curious Charlie */}
          <div className={`rounded-xl p-4 shadow-sm border transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2 transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-600" : "bg-purple-500"
            }`}>
              C
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}>
              Curious Charlie
            </h3>
            <p className={`text-xs leading-relaxed mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              Inquisitive, skeptical, asks probing questions and challenges assumptions
            </p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-600"
            }`}>
              excited
            </span>
          </div>

          {/* Emotional Emma */}
          <div className={`rounded-xl p-4 shadow-sm border transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2 transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-600" : "bg-purple-500"
            }`}>
              E
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}>
              Emotional Emma
            </h3>
            <p className={`text-xs leading-relaxed mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              Empathetic, focuses on character relationships and emotional depth
            </p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-600"
            }`}>
              happy
            </span>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="text-center">
        <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}>
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 1 */}
          <div className={`rounded-xl p-4 shadow-sm border transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4 transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-600" : "bg-purple-500"
            }`}>
              1
            </div>
            <div className="w-10 h-10 mx-auto mb-2">
              <Book className={`w-full h-full transition-colors duration-300 ${
                theme === "dark" ? "text-purple-400" : "text-purple-500"
              }`} />
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}>
              Enter Book Details
            </h3>
            <p className={`text-xs leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              Provide the book title and author you'd like to explore
            </p>
          </div>

          {/* Step 2 */}
          <div className={`rounded-xl p-4 shadow-sm border transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4 transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-600" : "bg-purple-500"
            }`}>
              2
            </div>
            <div className="w-10 h-10 mx-auto mb-2">
              <MessageCircle className={`w-full h-full transition-colors duration-300 ${
                theme === "dark" ? "text-purple-400" : "text-purple-500"
              }`} />
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}>
              AI Generates Discussion
            </h3>
            <p className={`text-xs leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              Our AI creates engaging dialogue between unique characters
            </p>
          </div>

          {/* Step 3 */}
          <div className={`rounded-xl p-4 shadow-sm border transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4 transition-colors duration-300 ${
              theme === "dark" ? "bg-purple-600" : "bg-purple-500"
            }`}>
              3
            </div>
            <div className="w-10 h-10 mx-auto mb-2">
              <Play className={`w-full h-full transition-colors duration-300 ${
                theme === "dark" ? "text-purple-400" : "text-purple-500"
              }`} />
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}>
              Watch Animated Results
            </h3>
            <p className={`text-xs leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              Enjoy animated videos bringing the discussion to life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPanel;
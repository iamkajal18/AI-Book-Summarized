import React from 'react';
import { Book, MessageCircle, Play } from 'lucide-react';

const DiscussionPanel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Meet Your Discussion Panel Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Meet Your Discussion Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Professor Wise */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2">
              P
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Professor Wise</h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">
              Knowledgeable, analytical, loves metaphors and deep insights
            </p>
            <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
              thoughtful
            </span>
          </div>

          {/* Curious Charlie */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2">
              C
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Curious Charlie</h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">
              Inquisitive, skeptical, asks probing questions and challenges assumptions
            </p>
            <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
              excited
            </span>
          </div>

          {/* Emotional Emma */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2">
              E
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Emotional Emma</h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">
              Empathetic, focuses on character relationships and emotional depth
            </p>
            <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
              happy
            </span>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4">
              1
            </div>
            <div className="w-10 h-10 mx-auto mb-2">
              <Book className="w-full h-full text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Enter Book Details</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Provide the book title and author you'd like to explore
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4">
              2
            </div>
            <div className="w-10 h-10 mx-auto mb-2">
              <MessageCircle className="w-full h-full text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Generates Discussion</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Our AI creates engaging dialogue between unique characters
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4">
              3
            </div>
            <div className="w-10 h-10 mx-auto mb-2">
              <Play className="w-full h-full text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Watch Animated Results</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Enjoy animated videos bringing the discussion to life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionPanel;
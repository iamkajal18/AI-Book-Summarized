"use client";
import { useState } from 'react';
import { BookOpen, Sparkles, User } from 'lucide-react';

interface BookInputProps {
  onSubmit?: (title: string, author: string) => void;
  disabled?: boolean;
  theme: string;
}

export default function BookInput({ onSubmit, disabled = false, theme }: BookInputProps) {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(bookTitle, author);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}
    >
      <div className="w-full max-w-lg">
        {/* Header with animated elements */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div
              className={`absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 animate-pulse`}
            ></div>
            <div
              className={`relative rounded-full p-4 shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <BookOpen
                className={`w-8 h-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
              />
            </div>
          </div>
          <h1
            className={`text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2`}
          >
            Book Summarizer
          </h1>
          <p
            className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}
          >
            Discover animated insights from your favorite reads
          </p>
          <div className="flex items-center justify-center mt-3 text-amber-500">
            <Sparkles className="w-4 h-4 mr-1 animate-pulse" />
            <span
              className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
              }`}
            >
              AI-Powered Summaries
            </span>
            <Sparkles className="w-4 h-4 ml-1 animate-pulse" />
          </div>
        </div>

        {/* Main form card */}
        <div
          className={`rounded-2xl shadow-xl border p-8 transition-all duration-300 hover:shadow-2xl ${
            theme === 'dark'
              ? 'bg-gray-800/90 backdrop-blur-sm border-gray-600'
              : 'bg-white/70 backdrop-blur-sm border-white/20'
          }`}
        >
          <div className="space-y-6">
            {/* Book Title Input */}
            <div className="space-y-2">
              <label
                htmlFor="bookTitle"
                className={`flex items-center text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-700'
                } mb-2`}
              >
                <BookOpen
                  className={`w-4 h-4 mr-2 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                  }`}
                />
                Book Title
              </label>
              <div className="relative">
                <input
                  id="bookTitle"
                  type="text"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  onFocus={() => setFocusedField('title')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter the book title..."
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-gray-700/90 border-gray-600'
                      : 'bg-white/50 border-gray-200'
                  } ${
                    focusedField === 'title'
                      ? theme === 'dark'
                        ? 'border-blue-400 shadow-lg shadow-blue-900/50 scale-[1.02]'
                        : 'border-blue-400 shadow-lg shadow-blue-100 scale-[1.02]'
                      : theme === 'dark'
                      ? 'hover:border-gray-500'
                      : 'hover:border-gray-300'
                  } ${
                    disabled ? 'opacity-50 cursor-not-allowed' : 'focus:outline-none'
                  }`}
                  required
                  disabled={disabled}
                  suppressHydrationWarning
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${
                    theme === 'dark'
                      ? 'from-blue-400 to-purple-400'
                      : 'from-blue-500 to-purple-500'
                  } transition-all duration-300 ${
                    focusedField === 'title' ? 'w-full' : 'w-0'
                  }`}
                ></div>
              </div>
            </div>

            {/* Author Input */}
            <div className="space-y-2">
              <label
                htmlFor="author"
                className={`flex items-center text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-700'
                } mb-2`}
              >
                <User
                  className={`w-4 h-4 mr-2 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-500'
                  }`}
                />
                Author
              </label>
              <div className="relative">
                <input
                  id="author"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  onFocus={() => setFocusedField('author')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter the author's name..."
                  className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'bg-gray-700/90 border-gray-600'
                      : 'bg-white/50 border-gray-200'
                  } ${
                    focusedField === 'author'
                      ? theme === 'dark'
                        ? 'border-purple-400 shadow-lg shadow-purple-900/50 scale-[1.02]'
                        : 'border-purple-400 shadow-lg shadow-purple-100 scale-[1.02]'
                      : theme === 'dark'
                      ? 'hover:border-gray-500'
                      : 'hover:border-gray-300'
                  } ${
                    disabled ? 'opacity-50 cursor-not-allowed' : 'focus:outline-none'
                  }`}
                  required
                  disabled={disabled}
                  suppressHydrationWarning
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${
                    theme === 'dark'
                      ? 'from-purple-400 to-blue-400'
                      : 'from-purple-500 to-blue-500'
                  } transition-all duration-300 ${
                    focusedField === 'author' ? 'w-full' : 'w-0'
                  }`}
                ></div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (onSubmit && bookTitle.trim() && author.trim()) {
                  onSubmit(bookTitle, author);
                }
              }}
              disabled={disabled || !bookTitle.trim() || !author.trim()}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform ${
                disabled || !bookTitle.trim() || !author.trim()
                  ? 'bg-gray-300 cursor-not-allowed scale-100'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {disabled ? (
                <span className="flex items-center justify-center">
                  <div
                    className={`animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3`}
                  ></div>
                  Creating Summary...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate AI Summary
                </span>
              )}
            </button>

            {/* Progress indicator when processing */}
            {disabled && (
              <div className="mt-4">
                <div
                  className={`rounded-full h-2 overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                  }`}
                >
                  <div
                    className={`bg-gradient-to-r ${
                      theme === 'dark'
                        ? 'from-blue-400 to-purple-400'
                        : 'from-blue-500 to-purple-500'
                    } h-full rounded-full animate-pulse`}
                  ></div>
                </div>
                <p
                  className={`text-center text-sm ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
                  } mt-2`}
                >
                  Our AI is reading and analyzing your book...
                </p>
              </div>
            )}
          </div>

          {/* Decorative elements */}
          <div
            className={`mt-8 pt-6 border-t ${
              theme === 'dark' ? 'border-gray-600' : 'border-gray-100'
            }`}
          >
            <div
              className={`flex items-center justify-center space-x-4 text-xs ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-400'
              }`}
            >
              <span className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-1 animate-pulse ${
                    theme === 'dark' ? 'bg-green-300' : 'bg-green-400'
                  }`}
                ></div>
                AI Powered
              </span>
              <span className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-1 animate-pulse ${
                    theme === 'dark' ? 'bg-blue-300' : 'bg-blue-400'
                  }`}
                ></div>
                Instant Results
              </span>
              <span className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-1 animate-pulse ${
                    theme === 'dark' ? 'bg-purple-300' : 'bg-purple-400'
                  }`}
                ></div>
                Free to Use
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-6 text-sm ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-400'
          }`}
        >
          <p>✨ Transform any book into an engaging animated summary</p>
        </div>
      </div>
    </div>
  );
}
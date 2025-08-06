'use client';

import React from 'react';
import { Book, Sparkles, Users, Play, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

function HeroSection({ theme }: { theme: string }) {
  return (
    <div className="relative overflow-hidden py-5">
      <div className={`absolute inset-0 transition-colors duration-300 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50" 
          : "bg-gradient-to-br from-indigo-100/50 to-purple-100/50"
      }`}></div>
      <div className="relative container mx-auto px-6 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className={`absolute inset-0 rounded-full blur-xl opacity-30 scale-110 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-700 to-purple-700"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600"
              }`}></div>
              <div className={`relative p-4 rounded-full shadow-lg transition-colors duration-300 ${
                theme === "dark" 
                  ? "bg-gray-800" 
                  : "bg-white"
              }`}>
                <Book className={`w-12 h-12 transition-colors duration-300 ${
                  theme === "dark" 
                    ? "text-indigo-400" 
                    : "text-indigo-600"
                }`} />
              </div>
            </div>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
              : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent"
          }`}>
            SmartBriefs: Book Summaries
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed transition-colors duration-300 ${
            theme === "dark" 
              ? "text-gray-300" 
              : "text-gray-600"
          }`}>
            Transform any book into engaging discussions with AI characters
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className={`backdrop-blur-sm border rounded-full px-6 py-3 flex items-center gap-2 shadow-sm transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-800/80 border-gray-700"
                : "bg-white/80 border-indigo-100"
            }`}>
              <Sparkles className={`w-5 h-5 transition-colors duration-300 ${
                theme === "dark" 
                  ? "text-indigo-400" 
                  : "text-indigo-600"
              }`} />
              <span className={`font-medium transition-colors duration-300 ${
                theme === "dark" 
                  ? "text-gray-200" 
                  : "text-gray-700"
              }`}>
                AI-Powered Analysis
              </span>
            </div>
            <div className={`backdrop-blur-sm border rounded-full px-6 py-3 flex items-center gap-2 shadow-sm transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-800/80 border-gray-700"
                : "bg-white/80 border-purple-100"
            }`}>
              <Users className={`w-5 h-5 transition-colors duration-300 ${
                theme === "dark" 
                  ? "text-purple-400" 
                  : "text-purple-600"
              }`} />
              <span className={`font-medium transition-colors duration-300 ${
                theme === "dark" 
                  ? "text-gray-200" 
                  : "text-gray-700"
              }`}>
                Character Discussions
              </span>
            </div>
            <div className={`backdrop-blur-sm border rounded-full px-6 py-3 flex items-center gap-2 shadow-sm transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-800/80 border-gray-700"
                : "bg-white/80 border-indigo-100"
            }`}>
              <Play className={`w-5 h-5 transition-colors duration-300 ${
                theme === "dark" 
                  ? "text-indigo-400" 
                  : "text-indigo-600"
              }`} />
              <span className={`font-medium transition-colors duration-300 ${
                theme === "dark" 
                  ? "text-gray-200" 
                  : "text-gray-700"
              }`}>
                Animated Videos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogHeroSection() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const { theme } = useTheme();

  const words = [
    'Share Your Insights.',
    'Inspire Readers.',
    'Write Smart Briefs.',
    'Build Your Audience.',
  ];

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      setDisplayedText(currentWord.slice(0, charIndex));

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="relative bg-white dark:bg-gray-900 mb-4 mx-auto max-w-7xl rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-black opacity-80 dark:opacity-30"></div>
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          filter: theme === 'dark' ? 'invert(1)' : 'none',
          animation: 'float 20s ease-in-out infinite'
        }}>
      </div>
      <div className="absolute inset-0 opacity-10 dark:opacity-15">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-20 dark:opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600 to-blue-800 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 opacity-20 dark:opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 opacity-15 dark:opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-blue-50 dark:bg-blue-900/40 border-2 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-xs md:text-sm font-semibold mb-8 md:mb-10 shadow-lg backdrop-blur-sm">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 50,000+ readers
            </div>
          </div>
          <h1 className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 md:mb-6 transition-all duration-800 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 bg-clip-text text-transparent">
              Explore SmartBriefs
            </span>
            <br />
            <span className="text-black dark:text-white drop-shadow-lg">
              Book Insights
            </span>
          </h1>
          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 transition-all duration-800 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-blue-600 dark:text-blue-400 border-r-4 border-blue-500 pr-2 animate-pulse">
              {displayedText}
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 font-medium transition-all duration-800 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Discover concise book summaries, AI-powered insights, and engaging discussions to deepen your understanding.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-800 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="/create">
              <button className="group px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl text-lg sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform w-full sm:w-auto">
                <span className="flex items-center justify-center">
                  Start Exploring
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </a>
            <a href="/chat">
              <button className="group px-6 py-2 sm:px-8 sm:py-3 bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white border-2 sm:border-3 border-black dark:border-white hover:text-white dark:hover:text-black font-bold rounded-xl text-lg sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-black/25 dark:hover:shadow-white/25 hover:scale-105 transform w-full sm:w-auto">
                <span className="flex items-center justify-center">
                  AI ChatBox
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">SmartBriefs</h1>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {theme === 'dark' ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </header>
      <main className="pt-20">
        <HeroSection theme={theme || 'light'} />

      </main>
    </div>
  );
}
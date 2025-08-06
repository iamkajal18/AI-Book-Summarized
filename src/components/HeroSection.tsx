"use client";

import { Book, Sparkles, Users, Play } from "lucide-react";
import { useTheme } from "./ThemeContext";
import Link from "next/link";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden py-5">
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50"
            : "bg-gradient-to-br from-indigo-100/50 to-purple-100/50"
        }`}
      ></div>
      <div className="relative container mx-auto px-6 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-full blur-xl opacity-30 scale-110 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-700 to-purple-700"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600"
                }`}
              ></div>
              <div
                className={`relative p-4 rounded-full shadow-lg transition-colors duration-300 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <Book
                  className={`w-12 h-12 transition-colors duration-300 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
              </div>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent"
            }`}
          >
            Book Summaries
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Transform any book into engaging discussions with AI characters
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div
              className={`backdrop-blur-sm border rounded-full px-6 py-3 flex items-center gap-2 shadow-sm transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/80 border-gray-700"
                  : "bg-white/80 border-indigo-100"
              }`}
            >
              <Sparkles
                className={`w-5 h-5 transition-colors duration-300 ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
              <span
                className={`font-medium transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                AI-Powered Analysis
              </span>
            </div>
            <div
              className={`backdrop-blur-sm border rounded-full px-6 py-3 flex items-center gap-2 shadow-sm transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/80 border-gray-700"
                  : "bg-white/80 border-purple-100"
              }`}
            >
              <Users
                className={`w-5 h-5 transition-colors duration-300 ${
                  theme === "dark" ? "text-purple-400" : "text-purple-600"
                }`}
              />
              <span
                className={`font-medium transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Character Discussions
              </span>
            </div>
            <div
              className={`backdrop-blur-sm border rounded-full px-6 py-3 flex items-center gap-2 shadow-sm transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/80 border-gray-700"
                  : "bg-white/80 border-indigo-100"
              }`}
            >
              <Play
                className={`w-5 h-5 transition-colors duration-300 ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
              <span
                className={`font-medium transition-colors duration-300 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Animated Videos
              </span>
            </div>
          </div>
          <Link href="/chat">
            <button
              className={`group px-6 py-2 sm:px-8 sm:py-3 bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white border-2 sm:border-3 border-black dark:border-white hover:text-white dark:hover:text-black font-bold rounded-xl text-lg sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-black/25 dark:hover:shadow-white/25 hover:scale-105 transform w-full sm:w-auto`}
            >
              <span className="flex items-center justify-center">
                AI ChatBox
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
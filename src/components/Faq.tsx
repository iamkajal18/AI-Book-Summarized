"use client";
import React, { useState } from "react";
import { Book, MessageCircle, Play, Moon, Sun, Coffee } from "lucide-react";
import { useTheme } from "next-themes";

const faqs = [
  {
    id: 1,
    question: "What is SmartBriefs and who is it for?",
    answer:
      "SmartBriefs is a platform for AI-generated book summaries with animated discussions, ideal for learners and book enthusiasts.",
    icon: "🎓",
  },
  {
    id: 2,
    question: "How does the AI summary process work?",
    answer:
      "Enter a book title and author, and our AI generates engaging character-driven discussions and animated videos.",
    icon: "🏆",
  },
  {
    id: 3,
    question: "What types of books can I summarize?",
    answer:
      "You can summarize any book, from fiction to non-fiction, as long as you provide the title and author.",
    icon: "📚",
  },
  {
    id: 4,
    question: "Are the summaries free to use?",
    answer:
      "Yes, SmartBriefs offers free AI-powered summaries with instant results, no subscription required.",
    icon: "💸",
  },
  {
    id: 5,
    question: "Can I share my summary experience?",
    answer:
      "Absolutely! You can share your feedback and experiences via our testimonials section.",
    icon: "✍️",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();

  const toggleFAQ = (faqId: number) => {
    setOpenIndex((prevId) => (prevId === faqId ? null : faqId));
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-xs">
          Discover how SmartBriefs transforms your reading experience.
        </p>
      </div>
      <div className="space-y-2">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`bg-white dark:bg-gray-700 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-600 cursor-pointer transition-all duration-300 ${
              openIndex === faq.id ? "ring-1 ring-purple-500/30" : ""
            }`}
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === faq.id
                      ? "bg-purple-500 text-white"
                      : "bg-gray-100 dark:bg-gray-600 group-hover:bg-purple-500 group-hover:text-white"
                  }`}
                >
                  <span className="text-sm">{faq.icon}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {faq.question}
                </h3>
              </div>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === faq.id
                    ? "bg-purple-500 text-white rotate-45"
                    : "bg-gray-100 dark:bg-gray-600 group-hover:bg-purple-500 group-hover:text-white"
                }`}
              >
                <span className="text-xs font-bold">+</span>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                openIndex === faq.id
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-2 border-t border-gray-200/50 dark:border-gray-600/50">
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a
          href="/contact"
          className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
        >
          More Questions? Contact Support →
        </a>
      </div>
    </div>
  );
};

const HomePage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      {/* Header */}
      <header className="w-full max-w-5xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">SmartBriefs</span>
        </div>
        <nav className="flex space-x-4 items-center">
          <a href="#" className="text-sm hover:text-purple-500">
            Home
          </a>
          <a href="#" className="text-sm hover:text-purple-500">
            Some Book Summaries
          </a>
          <a href="#" className="text-sm hover:text-purple-500">
            Any Book Summary
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1 rounded-full bg-gray-100 dark:bg-gray-700"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-2">Book Summaries</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Transform any book into engaging discussions with AI characters
        </p>
        <div className="flex justify-center space-x-4">
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            AI-Powered Analysis
          </span>
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            Character Discussions
          </span>
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            Animated Videos
          </span>
        </div>
      </section>

      {/* Discussion Panel */}
      <section className="w-full max-w-5xl mx-auto p-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Meet Your Discussion Panel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2">
                P
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Professor Wise
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-2">
                Knowledgeable, analytical, loves metaphors and deep insights
              </p>
              <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                thoughtful
              </span>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2">
                C
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Curious Charlie
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-2">
                Inquisitive, skeptical, asks probing questions and challenges
                assumptions
              </p>
              <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                excited
              </span>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2">
                E
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Emotional Emma
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-2">
                Empathetic, focuses on character relationships and emotional
                depth
              </p>
              <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                happy
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4">
                1
              </div>
              <div className="w-10 h-10 mx-auto mb-2">
                <Book className="w-full h-full text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Enter Book Details
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                Provide the book title and author you'd like to explore
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4">
                2
              </div>
              <div className="w-10 h-10 mx-auto mb-2">
                <MessageCircle className="w-full h-full text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                AI Generates Discussion
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                Our AI creates engaging dialogue between unique characters
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-base font-bold mx-auto mb-4">
                3
              </div>
              <div className="w-10 h-10 mx-auto mb-2">
                <Play className="w-full h-full text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Watch Animated Results
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                Enjoy animated videos bringing the discussion to life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Summarizer */}
      <section className="w-full max-w-5xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Book Summarizer
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Discover animated insights from your favorite reads
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            AI-Powered Summaries
          </span>
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            Instant Results
          </span>
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            Free to Use
          </span>
        </div>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
          <input
            type="text"
            placeholder="Enter the book title..."
            className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-transparent text-gray-800 dark:text-gray-200"
          />
          <input
            type="text"
            placeholder="Enter the author's name..."
            className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-transparent text-gray-800 dark:text-gray-200"
          />
          <button className="w-full p-2 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors">
            Generate AI Summary
          </button>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
          ✨ Transform any book into an engaging animated summary
        </p>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          What Our Learners Say
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Join thousands of satisfied learners who transformed their skills with
          us
        </p>
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            No testimonials yet. Be the first to share your experience!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto p-4 border-t border-gray-200 dark:border-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
              SmartBriefs
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Discover concise, actionable summaries of the world's best books
              to fuel your personal and professional growth.
            </p>
            <div className="flex space-x-2 mt-2">
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                10K+ Learners
              </span>
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                500+ Courses
              </span>
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                50+ Countries
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
              Explore
            </h3>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <a href="#" className="hover:text-purple-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
              Get in Touch
            </h3>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>Email: kasaudhankajal51@gmail.com</li>
              <li>Phone: 6387486751</li>
              <li>Location: Near BBD</li>
            </ul>
            <div className="mt-2">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Stay Connected
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg text-sm bg-transparent text-gray-800 dark:text-gray-200"
                />
                <button className="p-2 bg-purple-500 text-white rounded-r-lg text-xs hover:bg-purple-600">
                  Subscribe Now ✨
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 text-xs text-gray-600 dark:text-gray-400">
          <p>© 2025 SmartBriefs • All Rights Reserved</p>
          <p>Designed with ❤️ by Kajal Kasaudhan</p>
          <div className="flex justify-center space-x-2">
            <a href="#" className="hover:text-purple-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-500 flex items-center">
              <Coffee className="w-4 h-4 mr-1" /> Buy Me a Coffee
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Faq;

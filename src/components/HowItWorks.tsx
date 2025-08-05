import { BookOpen, MessageCircle, Video } from "lucide-react";

interface HowItWorksProps {
  theme: string;
}

export default function HowItWorks({ theme }: HowItWorksProps) {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2
        className={`text-2xl font-semibold text-center mb-8 ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div
            className={`w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mx-auto mb-4`}
          >
            1
          </div>
          <BookOpen
            className={`w-8 h-8 mx-auto mb-3 ${
              theme === "dark" ? "text-indigo-400" : "text-indigo-600"
            }`}
          />
          <h3
            className={`font-semibold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Enter Book Details
          </h3>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-200" : "text-gray-600"
            }`}
          >
            Provide the book title and author you'd like to explore
          </p>
        </div>
        <div className="text-center">
          <div
            className={`w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mx-auto mb-4`}
          >
            2
          </div>
          <MessageCircle
            className={`w-8 h-8 mx-auto mb-3 ${
              theme === "dark" ? "text-indigo-400" : "text-indigo-600"
            }`}
          />
          <h3
            className={`font-semibold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            AI Generates Discussion
          </h3>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-200" : "text-gray-600"
            }`}
          >
            Our AI creates engaging dialogue between unique characters
          </p>
        </div>
        <div className="text-center">
          <div
            className={`w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mx-auto mb-4`}
          >
            3
          </div>
          <Video
            className={`w-8 h-8 mx-auto mb-3 ${
              theme === "dark" ? "text-indigo-400" : "text-indigo-600"
            }`}
          />
          <h3
            className={`font-semibold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Watch Animated Results
          </h3>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-200" : "text-gray-600"
            }`}
          >
            Enjoy animated videos bringing the discussion to life
          </p>
        </div>
      </div>
    </div>
  );
}
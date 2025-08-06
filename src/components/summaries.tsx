"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Sparkles, Users } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  summary: string;
}

interface DialogueLine {
  character: string;
  text: string;
  emotion: string;
  videoId?: string;
  avatarUrl?: string;
  voiceId?: string;
}

interface CharacterDef {
  name: string;
  traits: string;
  defaultEmotion: string;
  avatarUrl: string;
  voiceId: string;
}

type AppStep = "input" | "summary" | "dialogue" | "video";

const books: Book[] = [
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen", category: "Fiction", summary: "A classic novel exploring love, social classes, and family pressures in 19th-century England." },
  { id: 2, title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", summary: "A compelling history of humankind, from ancient origins to the modern era." },
  { id: 3, title: "1984", author: "George Orwell", category: "Fiction", summary: "A dystopian novel about totalitarianism, surveillance, and the loss of personal freedom." },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", summary: "A tale of wealth, love, and the American Dream in the Roaring Twenties." },
  { id: 5, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Non-Fiction", summary: "An exploration of human decision-making and cognitive biases." },
  { id: 6, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", summary: "A story of racial injustice and the loss of innocence in a small Southern town." },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fiction", summary: "A fantasy adventure about Bilbo Baggins and his quest with dwarves and a wizard." },
  { id: 8, title: "Educated", author: "Tara Westover", category: "Non-Fiction", summary: "A memoir of a woman’s journey from a restrictive upbringing to academic success." },
  { id: 9, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", summary: "A science fiction epic about politics, religion, and survival on a desert planet." },
  { id: 10, title: "Becoming", author: "Michelle Obama", category: "Non-Fiction", summary: "A memoir of the former First Lady’s life, from childhood to the White House." },
  { id: 11, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", summary: "A coming-of-age story about teenage rebellion and alienation." },
  { id: 12, title: "Atomic Habits", author: "James Clear", category: "Non-Fiction", summary: "A guide to building good habits and breaking bad ones through small changes." },
  { id: 13, title: "The Da Vinci Code", author: "Dan Brown", category: "Mystery", summary: "A fast-paced thriller involving cryptic codes and hidden secrets." },
  { id: 14, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", summary: "A philosophical tale of a young man’s journey to follow his dreams." },
  { id: 15, title: "Steve Jobs", author: "Walter Isaacson", category: "Biography", summary: "A biography of the Apple co-founder, detailing his life and innovations." },
];

const characters: CharacterDef[] = [
  {
    name: "Professor Wise",
    traits: "Knowledgeable, analytical, loves metaphors and deep insights",
    defaultEmotion: "thoughtful",
    avatarUrl: "https://cdn.d-id.com/avatars/uk_professor_1.png",
    voiceId: "Paul",
  },
  {
    name: "Curious Charlie",
    traits: "Inquisitive, skeptical, asks probing questions and challenges assumptions",
    defaultEmotion: "excited",
    avatarUrl: "https://cdn.d-id.com/avatars/uk_teen_1.png",
    voiceId: "Drew",
  },
  {
    name: "Emotional Emma",
    traits: "Empathetic, focuses on character relationships and emotional depth",
    defaultEmotion: "happy",
    avatarUrl: "https://cdn.d-id.com/avatars/uk_woman_1.png",
    voiceId: "Rachel",
  },
];

export default function Summaries() {
  const [sortBy, setSortBy] = useState("title");
  const [filterCategory, setFilterCategory] = useState("all");
  const [summary, setSummary] = useState<string>("");
  const [dialogue, setDialogue] = useState<DialogueLine[]>([]);
  const [videoIds, setVideoIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<AppStep>("input");
  const [bookTitle, setBookTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "author") return a.author.localeCompare(b.author);
    return 0;
  });

  const filteredBooks = filterCategory === "all"
    ? sortedBooks
    : sortedBooks.filter((book) => book.category === filterCategory);

  const handleBookSubmit = async (title: string, author: string) => {
    setIsLoading(true);
    setError(null);
    setWarnings([]);
    setBookTitle(title);

    try {
      if (title.trim().length < 3) {
        throw new Error("Book title must be at least 3 characters long");
      }
      if (author.trim().length < 2) {
        throw new Error("Author name must be at least 2 characters long");
      }

      const summaryResponse = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookTitle: title, author }),
      });

      if (!summaryResponse.ok) {
        const errorData = await summaryResponse.json();
        throw new Error(errorData.error || `Failed to generate summary (HTTP ${summaryResponse.status})`);
      }

      const summaryData = await summaryResponse.json();
      if (!summaryData.summary) {
        throw new Error("No summary returned from API");
      }

      setSummary(summaryData.summary);
      setCurrentStep("summary");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message === "No summary returned from API"
            ? "Could not find a summary for this book. Please check the title and author."
            : error.message
          : "An unexpected error occurred while generating the summary"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const generateDialogue = async () => {
    setIsLoading(true);
    setError(null);
    setWarnings([]);

    try {
      if (!summary || summary.trim().length < 10) {
        throw new Error("A valid book summary (minimum 10 characters) is required to generate dialogue");
      }

      const dialogueResponse = await fetch("/api/generate-dialogue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          summary,
          characters: characters.map((c) => ({
            name: c.name,
            traits: c.traits,
          })),
        }),
      });

      if (!dialogueResponse.ok) {
        const errorData = await dialogueResponse.json();
        throw new Error(
          errorData.error?.includes("GoogleGenerativeAI")
            ? "Failed to generate dialogue due to an issue with the AI service. Please try again later."
            : errorData.error || `Failed to generate dialogue: ${dialogueResponse.statusText} (HTTP ${dialogueResponse.status})`
        );
      }

      const dialogueData = await dialogueResponse.json();
      if (!dialogueData.dialogue?.length) {
        throw new Error("No dialogue returned from API");
      }

      const processedDialogue = dialogueData.dialogue.map((line: DialogueLine) => ({
        ...line,
        emotion: line.emotion || characters.find((c) => c.name === line.character)?.defaultEmotion || "neutral",
      }));

      setDialogue(processedDialogue);
      setCurrentStep("dialogue");

      const videoResponse = await fetch("/api/create-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dialogue: processedDialogue.map((line: DialogueLine) => {
            const character = characters.find((c) => c.name === line.character);
            return {
              ...line,
              avatarUrl: character?.avatarUrl || "https://cdn.d-id.com/avatars/uk_professor_1.png",
              voiceId: character?.voiceId || "Rachel",
            };
          }),
        }),
      });

      const videoData = await videoResponse.json();
      if (!videoResponse.ok) {
        if (videoData.videoIds && videoData.videoIds.length > 0) {
          setVideoIds(videoData.videoIds);
          setWarnings(videoData.errors || []);
          setCurrentStep("video");
          if (videoData.message) {
            setWarnings((prev) => [...prev, videoData.message]);
          }
        } else {
          throw new Error(videoData.error || `Failed to create videos: ${videoResponse.statusText}`);
        }
      } else {
        setVideoIds(videoData.videoIds);
        setCurrentStep("video");
        if (videoData.errors && videoData.errors.length > 0) {
          setWarnings(videoData.errors);
        }
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message === "No dialogue returned from API"
            ? "Could not generate dialogue for this summary. Please try again or modify the summary."
            : error.message
          : "Failed to generate content"
      );
      setCurrentStep("summary");
    } finally {
      setIsLoading(false);
    }
  };

  const resetApp = () => {
    setSummary("");
    setDialogue([]);
    setVideoIds([]);
    setError(null);
    setWarnings([]);
    setCurrentStep("input");
    setBookTitle("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Book Summaries</h1>

      {currentStep === "input" && (
        <>
          {/* Filter and Sort Controls */}
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div>
              <label className="mr-2">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
              </select>
            </div>
            <div>
              <label className="mr-2">Filter by category:</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="all">All</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Mystery">Mystery</option>
                <option value="Biography">Biography</option>
              </select>
            </div>
          </div>

          {/* Book Summaries List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-gray-600">by {book.author}</p>
                <p className="text-gray-500 mt-2">{book.summary}</p>
                <button
                  onClick={() => handleBookSubmit(book.title, book.author)}
                  className="text-blue-600 hover:underline mt-2 inline-block"
                  disabled={isLoading}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {currentStep === "summary" && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Summary of "{bookTitle}"</h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{summary}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetApp}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
              disabled={isLoading}
            >
              Start Over
            </button>
            <button
              onClick={generateDialogue}
              disabled={isLoading}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Bring Characters to Life!
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {(currentStep === "dialogue" || currentStep === "video") && (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Character Discussion: "{bookTitle}"</h2>
          </div>

          {/* Note: DialogueViewer component is not included in the provided code, so it will need to be imported or implemented */}
          {/* <DialogueViewer
            dialogue={dialogue.map((line, index) => ({
              ...line,
              videoId: videoIds[index],
              avatarUrl: characters.find((c) => c.name === line.character)?.avatarUrl,
            }))}
            characters={characters.reduce(
              (acc, char) => {
                acc[char.name] = { traits: char.traits, avatarUrl: char.avatarUrl };
                return acc;
              },
              {} as Record<string, { traits: string; avatarUrl: string }>
            )}
          /> */}

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <button
              onClick={() => setCurrentStep("summary")}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
            >
              Back to Summary
            </button>
            <button
              onClick={resetApp}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-medium"
            >
              Start New Book
            </button>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center gap-4">
            <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
            <span>Loading {currentStep}...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
          <p>{error}</p>
          <button onClick={() => setError(null)} className="text-red-600 hover:underline mt-2">
            Dismiss
          </button>
        </div>
      )}

      {warnings.length > 0 && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mt-4">
          {warnings.map((warning, index) => (
            <p key={index}>{warning}</p>
          ))}
          <button onClick={() => setWarnings([])} className="text-yellow-600 hover:underline mt-2">
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
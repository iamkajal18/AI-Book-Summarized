"use client";

import { useState } from "react";
import { Book, Users, Sparkles, BookOpen } from "lucide-react";
import { useTheme } from "./ThemeContext";
import BookInput from "@/app/components/BookInput";
import DialogueViewer from "@/app/components/DialogueViewer";
import LoadingOverlay from "@/components/LoadingOverlay";
import ErrorDisplay from "@/components/ErrorDisplay";
import WarningDisplay from "@/components/WarningDisplay";

interface CharacterDef {
  name: string;
  traits: string;
  defaultEmotion: string;
  avatarUrl: string;
  voiceId: string;
}

interface DialogueLine {
  character: string;
  text: string;
  emotion: string;
  videoId?: string;
  avatarUrl?: string;
  voiceId?: string;
}

type AppStep = "input" | "summary" | "dialogue" | "video";

export default function AnimatedBookSummaries() {
  const { theme } = useTheme();
  const [summary, setSummary] = useState<string>("");
  const [dialogue, setDialogue] = useState<DialogueLine[]>([]);
  const [videoIds, setVideoIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<AppStep>("input");
  const [bookTitle, setBookTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);

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
      console.error("Error generating summary:", error);
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
          errorData.error?.includes('GoogleGenerativeAI')
            ? "Failed to generate dialogue due to AI service issue. Please try again later."
            : errorData.error || `Failed to generate dialogue (HTTP ${dialogueResponse.status})`
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
      console.error("Error generating dialogue:", error);
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
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark"
        ? "bg-gradient-to-br from-gray-900/50 to-gray-800/50"
        : "bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    }`}>
      <div className="relative container mx-auto px-6 pt-16 pb-24">
        {/* Placeholder for any additional content */}
      </div>
      <main className="container mx-auto px-6 pb-16 max-w-4xl">
        {error && <ErrorDisplay error={error} onDismiss={() => setError(null)} />}
        {warnings.length > 0 && <WarningDisplay warnings={warnings} onDismiss={() => setWarnings([])} />}
        
        {currentStep === "input" && (
          <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-colors duration-300 ${
            theme === "dark" ? "border-gray-700" : "border-gray-100"
          } p-8`}>
            <BookInput onSubmit={handleBookSubmit} disabled={isLoading} theme={theme} />
          </div>
        )}
        
        {currentStep === "summary" && (
          <SummaryStep
            bookTitle={bookTitle}
            summary={summary}
            onBack={resetApp}
            onGenerate={generateDialogue}
            isLoading={isLoading}
          />
        )}
        
        {(currentStep === "dialogue" || currentStep === "video") && (
          <DialogueStep
            bookTitle={bookTitle}
            dialogue={dialogue}
            videoIds={videoIds}
            characters={characters}
            onBack={() => setCurrentStep("summary")}
            onReset={resetApp}
          />
        )}
        
        {isLoading && <LoadingOverlay currentStep={currentStep} theme={theme} />}
      </main>
    </div>
  );
}

function SummaryStep({
  bookTitle,
  summary,
  onBack,
  onGenerate,
  isLoading,
}: {
  bookTitle: string;
  summary: string;
  onBack: () => void;
  onGenerate: () => void;
  isLoading: boolean;
}) {
  const { theme } = useTheme();

  return (
    <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-colors duration-300 ${
      theme === "dark" ? "border-gray-700" : "border-gray-100"
    } p-8`}>
      <div className="text-center mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-3 transition-colors duration-300 ${
          theme === "dark" ? "bg-gradient-to-br from-green-600 to-blue-700" : "bg-gradient-to-br from-green-500 to-blue-600"
        }`}>
          <BookOpen className="w-6 h-6" />
        </div>
        <h2 className={`text-2xl font-semibold transition-colors duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}>
          Summary of "{bookTitle}"
        </h2>
      </div>
      <div className={`rounded-xl p-6 mb-8 border transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"
      }`}>
        <p className={`whitespace-pre-line leading-relaxed transition-colors duration-300 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          {summary}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onBack}
          className={`px-6 py-3 rounded-xl transition-all font-medium transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          disabled={isLoading}
        >
          Start Over
        </button>
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className={`px-8 py-3 rounded-xl transform transition-all duration-200 font-medium flex items-center justify-center gap-2 ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          }`}
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
  );
}

function DialogueStep({
  bookTitle,
  dialogue,
  videoIds,
  characters,
  onBack,
  onReset,
}: {
  bookTitle: string;
  dialogue: DialogueLine[];
  videoIds: string[];
  characters: CharacterDef[];
  onBack: () => void;
  onReset: () => void;
}) {
  const { theme } = useTheme();

  return (
    <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-colors duration-300 ${
      theme === "dark" ? "border-gray-700" : "border-gray-100"
    } p-8`}>
      <div className="text-center mb-8">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-3 transition-colors duration-300 ${
          theme === "dark" ? "bg-gradient-to-br from-purple-600 to-indigo-700" : "bg-gradient-to-br from-purple-500 to-indigo-600"
        }`}>
          <Users className="w-6 h-6" />
        </div>
        <h2 className={`text-2xl font-semibold transition-colors duration-300 ${
          theme === "dark" ? "text-gray-200" : "text-gray-800"
        }`}>
          Character Discussion: "{bookTitle}"
        </h2>
      </div>
      <DialogueViewer
        dialogue={dialogue.map((line, index) => ({
          ...line,
          videoId: videoIds[index],
          avatarUrl: characters.find((c) => c.name === line.character)?.avatarUrl,
        }))}
        characters={characters.reduce(
          (acc, char) => {
            acc[char.name] = {
              traits: char.traits,
              avatarUrl: char.avatarUrl,
            };
            return acc;
          },
          {} as Record<string, { traits: string; avatarUrl: string }>
        )}
      />
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
        <button
          onClick={onBack}
          className={`px-6 py-3 rounded-xl transition-all font-medium transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Back to Summary
        </button>
        <button
          onClick={onReset}
          className={`px-6 py-3 rounded-xl transition-all font-medium transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
          }`}
        >
          Start New Book
        </button>
      </div>
    </div>
  );
}
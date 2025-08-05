import { Sparkles } from "lucide-react";

export default function LoadingOverlay({ currentStep }: { currentStep: string }) {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4 border border-gray-100">
        <div className="relative mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-100 border-t-indigo-600 mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-indigo-600 animate-pulse" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {currentStep === "input" && "Analyzing Your Book..."}
          {currentStep === "summary" && "Creating Character Dialogue..."}
          {currentStep === "dialogue" && "Animating Characters..."}
        </h3>
        <p className="text-gray-600">This may take a few moments</p>
      </div>
    </div>
  );
}
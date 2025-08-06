// src/components/LoadingOverlay.tsx
interface LoadingOverlayProps {
  currentStep: "input" | "summary" | "dialogue" | "video";
  theme: string;
}

export default function LoadingOverlay({ currentStep, theme }: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`p-6 rounded-lg shadow-lg text-center text-white ${
          theme === "dark" ? "bg-gray-800" : "bg-indigo-600"
        }`}
      >
        <div className="loader mb-4" />
        <p className="text-lg font-medium">
          {currentStep === "input" && "Processing your request..."}
          {currentStep === "summary" && "Summarizing the book..."}
          {currentStep === "dialogue" && "Creating character dialogue..."}
          {currentStep === "video" && "Generating video scenes..."}
        </p>
      </div>
    </div>
  );
}

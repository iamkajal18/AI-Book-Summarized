export default function ErrorDisplay({ error, onDismiss }: { error: string, onDismiss: () => void }) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl mb-8 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-red-600 text-sm font-bold">!</span>
        </div>
        <div className="flex-1">
          <p className="font-medium">
            {error === "No summary returned from API"
              ? "Could not find a summary for this book. Please check the title and author."
              : error === "No dialogue returned from API"
              ? "Could not generate dialogue for this summary. Please try again or modify the summary."
              : error.includes("GoogleGenerativeAI")
              ? "Unable to connect to the AI service. Please try again later or contact support."
              : error}
          </p>
          <button 
            onClick={onDismiss} 
            className="text-sm underline hover:text-red-900 mt-2 font-medium"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
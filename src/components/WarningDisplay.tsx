export default function WarningDisplay({ warnings, onDismiss }: { warnings: string[], onDismiss: () => void }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-4 rounded-2xl mb-8 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-yellow-600 text-sm font-bold">⚠</span>
        </div>
        <div className="flex-1">
          <p className="font-medium mb-2">Some videos couldn't be generated:</p>
          <ul className="text-sm space-y-1">
            {warnings.map((warning, index) => (
              <li key={index}>• {warning}</li>
            ))}
          </ul>
          <button 
            onClick={onDismiss} 
            className="text-sm underline hover:text-yellow-900 mt-2 font-medium"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
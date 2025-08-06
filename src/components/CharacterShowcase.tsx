import type { CharacterDef } from "@/components/AnimatedBookSummaries";


interface CharacterShowcaseProps {
  characters: CharacterDef[];
  theme: string;
}

export default function CharacterShowcase({ characters, theme }: CharacterShowcaseProps) {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h2
        className={`text-2xl font-semibold text-center mb-8 ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        Meet Your Discussion Panel
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {characters.map((character, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              theme === "dark"
                ? "bg-gray-800/90 backdrop-blur-sm border-gray-600"
                : "bg-white/80 backdrop-blur-sm border-gray-100"
            }`}
          >
            <div className="text-center">
              <div
                className={`w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}
              >
                {character.name.charAt(0)}
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {character.name}
              </h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {character.traits}
              </p>
              <div className="mt-3">
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full ${
                    theme === "dark"
                      ? "bg-indigo-900 text-indigo-200"
                      : "bg-indigo-50 text-indigo-700"
                  }`}
                >
                  {character.defaultEmotion}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
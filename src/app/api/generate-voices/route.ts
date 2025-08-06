import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API!);

interface Character {
  name: string;
  traits: string;
}

// Test GET endpoint
export async function GET() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent('Generate a simple sentence.');
    const response = await result.response;
    return NextResponse.json({ result: response.text() });
  } catch (error: any) {
    console.error('Test API error:', {
      message: error.message,
      code: error.code,
      status: error.status,
      details: error.details,
    });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Main POST handler
export async function POST(request: Request) {
  try {
    const { summary, characters } = await request.json();

    if (!summary || typeof summary !== 'string' || summary.trim().length < 10) {
      return NextResponse.json(
        { error: 'A valid book summary (minimum 10 characters) is required' },
        { status: 400 }
      );
    }

    if (!Array.isArray(characters) || characters.length === 0) {
      return NextResponse.json(
        { error: 'A non-empty array of characters is required' },
        { status: 400 }
      );
    }

    for (const char of characters) {
      if (
        !char.name ||
        typeof char.name !== 'string' ||
        !char.traits ||
        typeof char.traits !== 'string'
      ) {
        return NextResponse.json(
          { error: 'Each character must have a valid name and traits' },
          { status: 400 }
        );
      }
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const characterDescriptions = characters
      .map((char: Character) => `${char.name}: ${char.traits}`)
      .join('\n');

    const prompt = `Based on the following book summary, create an engaging dialogue between these characters discussing the book:

BOOK SUMMARY:
${summary}

CHARACTERS:
${characterDescriptions}

Create a natural, flowing conversation where each character speaks 3-4 times, staying true to their personality traits. The dialogue should:
1. Cover the main themes and plot points from the summary
2. Show different perspectives and insights
3. Include some disagreement or debate to make it interesting
4. Be educational and engaging
5. Feel like a real discussion between people with different viewpoints

Format the response as a JSON array with objects containing:
- character: the character name (exactly as provided)
- text: what they say
- emotion: one of (happy, sad, excited, thoughtful, surprised, concerned, neutral)

Example format:
[
  {"character": "Professor Wise", "text": "This book presents fascinating themes about...", "emotion": "thoughtful"},
  {"character": "Curious Charlie", "text": "But wait, don't you think the author...", "emotion": "excited"}
]`;

    // ⏱ Timeout helper
    const timeout = (ms: number) =>
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('API call timed out')), ms)
      );

    const result = await Promise.race([
      model.generateContent(prompt),
      timeout(5000),
    ]);

    if (
      typeof result === 'object' &&
      result !== null &&
      'response' in result
    ) {
      const response = await (result as any).response;
      let dialogueText = response.text();

      // Cleanup code block formatting
      dialogueText = dialogueText
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();

      let dialogue;
      try {
        dialogue = JSON.parse(dialogueText);
      } catch {
        const jsonMatch = dialogueText.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          dialogue = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error('Failed to parse dialogue JSON');
        }
      }

      if (!Array.isArray(dialogue)) {
        throw new Error('Generated dialogue is not an array');
      }

      // Ensure dialogue lines are valid
      const validatedDialogue = dialogue.map((line: any, index: number) => {
        const character =
          characters.find((c: Character) => c.name === line.character) ||
          characters[index % characters.length];
        return {
          character: line.character || character.name,
          text: line.text || `Let's talk about the book.`,
          emotion:
            line.emotion ||
            ['thoughtful', 'excited', 'happy'][index % 3] ||
            'neutral',
        };
      });

      return NextResponse.json({ dialogue: validatedDialogue });
    } else {
      throw new Error('Google AI did not return a valid response.');
    }
  } catch (error: any) {
    console.error('Generate Dialogue API Error:', {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      {
        error: 'Failed to generate dialogue',
        details: error.message,
        suggestion: 'Check the API key, model availability, or input format.',
      },
      { status: 500 }
    );
  }
}

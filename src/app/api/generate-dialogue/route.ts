// src/app/api/generate-dialogue/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API!);

interface Character {
  name: string;
  traits: string;
}

export async function POST(request: Request) {
  try {
    const { summary, characters } = await request.json();

    if (!summary || typeof summary !== 'string' || summary.trim().length < 10) {
      return NextResponse.json(
        { error: 'A valid book summary (minimum 10 characters) is required' },
        { status: 400 }
      );
    }

    if (!characters || !Array.isArray(characters) || characters.length === 0) {
      return NextResponse.json(
        { error: 'A non-empty array of characters is required' },
        { status: 400 }
      );
    }

    for (const char of characters) {
      if (!char.name || typeof char.name !== 'string' || !char.traits || typeof char.traits !== 'string') {
        return NextResponse.json(
          { error: 'Each character must have a valid name and traits' },
          { status: 400 }
        );
      }
    }

    console.log('Generating dialogue for characters:', characters);

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' }); // Updated model

    const characterDescriptions = characters.map((char: Character) => 
      `${char.name}: ${char.traits}`
    ).join('\n');

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

    let dialogueText;
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      dialogueText = response.text();
      console.log('Raw dialogue response:', dialogueText);
    } catch (error: any) {
      console.error('Google AI error:', error);
      throw new Error(`Failed to generate content from Google AI: ${error.message}`);
    }

    // Clean up the response
    dialogueText = dialogueText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Try to find JSON array
    let dialogue;
    try {
      const jsonMatch = dialogueText.match(/\[[\s\S]*\]/);
      dialogue = JSON.parse(jsonMatch ? jsonMatch[0] : dialogueText);
    } catch (parseError) {
      console.error('Failed to parse dialogue JSON:', parseError);
      console.error('Dialogue text:', dialogueText);
      
      // Fallback dialogue
      dialogue = characters.map((char: Character, index: number) => ({
        character: char.name,
        text: `Let's discuss the key themes of this book from my perspective as ${char.name}.`,
        emotion: ['thoughtful', 'excited', 'happy'][index % 3] || 'neutral',
      }));
    }

    if (!Array.isArray(dialogue) || dialogue.length === 0) {
      throw new Error('Invalid dialogue format generated');
    }

    // Validate dialogue structure
    const validatedDialogue = dialogue.map((line: any, index: number) => {
      const character = characters.find((c: Character) => c.name === line.character) || characters[index % characters.length];
      return {
        character: line.character || character?.name || "Unknown",
        text: line.text || "I find this book quite interesting to discuss.",
        emotion: line.emotion || ['thoughtful', 'excited', 'happy'][index % 3] || "neutral",
      };
    });

    console.log('Generated dialogue:', validatedDialogue);

    return NextResponse.json({ dialogue: validatedDialogue });
  } catch (error: any) {
    console.error('Generate Dialogue API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate dialogue',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
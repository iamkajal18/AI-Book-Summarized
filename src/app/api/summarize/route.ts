import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { bookTitle, author } = await req.json();
    
    if (!bookTitle) {
      return NextResponse.json({ error: "Book title is required" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
    
    const prompt = `Create a summary of the book in 600-700 words"${bookTitle}"${
      author ? ` by ${author}` : ''
    }. Focus on the main themes, plot, and key characters.`;
    
    const result = await model.generateContent(prompt);
    const summary = result.response.text();

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Summary generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}

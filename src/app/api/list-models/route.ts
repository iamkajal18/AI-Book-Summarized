// src/app/api/list-models/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API!);

export async function GET() {
  try {
    const models = await genAI.listModels();
    console.log('Available models:', models);
    return NextResponse.json({ models });
  } catch (error: any) {
    console.error('List models error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
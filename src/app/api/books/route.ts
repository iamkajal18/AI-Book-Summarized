import { NextRequest, NextResponse } from "next/server";

let books: { id: string; title: string; author: string; progress: number; category: string }[] = [];

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  const book = await request.json();
  books.push(book);
  return NextResponse.json({ message: "Book added" }, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const updatedBook = await request.json();
  books = books.map((book) => (book.id === updatedBook.id ? updatedBook : book));
  return NextResponse.json({ message: "Book updated" });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  books = books.filter((book) => book.id !== id);
  return NextResponse.json({ message: "Book deleted" });
}

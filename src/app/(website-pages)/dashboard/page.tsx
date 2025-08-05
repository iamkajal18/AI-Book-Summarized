"use client";
import React, { useState, useEffect } from "react";
import { Book, Trash2, Moon, Sun, Search, Edit2, SortAsc, SortDesc } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

interface Book {
  id: string;
  title: string;
  author: string;
  progress: number;
  category: string;
  addedDate: string;
}

const ReadingListDashboard = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [progress, setProgress] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"title" | "progress" | "addedDate">("addedDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const { theme, setTheme } = useTheme();

  const categories = ["All", "Fiction", "Non-Fiction", "Business", "Psychology", "Science", "History"];

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/books");
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const saveBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author || !progress || !category) return;

    const bookData: Book = {
      id: editingBook ? editingBook.id : Math.random().toString(36).substr(2, 9),
      title,
      author,
      progress: Math.min(100, Math.max(0, parseInt(progress))),
      category,
      addedDate: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/books", {
        method: editingBook ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData),
      });
      if (response.ok) {
        await fetchBooks();
        setTitle("");
        setAuthor("");
        setProgress("");
        setCategory("");
        setEditingBook(null);
      }
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const removeBook = async (id: string) => {
    try {
      const response = await fetch(`/api/books?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        await fetchBooks();
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const editBook = (book: Book) => {
    setEditingBook(book);
    setTitle(book.title);
    setAuthor(book.author);
    setProgress(book.progress.toString());
    setCategory(book.category);
  };

  const sortedBooks = [...books]
    .filter((book) =>
      filterCategory === "All" ? true : book.category === filterCategory
    )
    .filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "title") {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortBy === "progress") {
        return sortOrder === "asc"
          ? a.progress - b.progress
          : b.progress - a.progress;
      } else {
        return sortOrder === "asc"
          ? a.addedDate.localeCompare(b.addedDate)
          : b.addedDate.localeCompare(a.addedDate);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <header className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <Book className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <span className="text-2xl font-extrabold tracking-tight">Literary Haven</span>
        </motion.div>
        <nav className="flex items-center space-x-6">
          <a href="/" className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Home
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      <main className="w-full max-w-6xl mx-auto p-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            {editingBook ? "Edit Your Book" : "Add a New Book"}
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <form onSubmit={saveBook} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-transparent focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
              />
              <input
                type="text"
                placeholder="Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-transparent focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
              />
              <input
                type="number"
                placeholder="Progress (%)"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                min="0"
                max="100"
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-transparent focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-transparent focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
              >
                <option value="" disabled>Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat !== "All" ? cat : ""}>{cat}</option>
                ))}
              </select>
              <div className="col-span-1 md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 p-3 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors"
                >
                  {editingBook ? "Update Book" : "Add Book"}
                </button>
                {editingBook && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingBook(null);
                      setTitle("");
                      setAuthor("");
                      setProgress("");
                      setCategory("");
                    }}
                    className="p-3 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </motion.section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Your Reading Collection</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-transparent focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-transparent focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-transparent focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
              >
                <option value="title">Sort by Title</option>
                <option value="progress">Sort by Progress</option>
                <option value="addedDate">Sort by Date Added</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {sortOrder === "asc" ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {sortedBooks.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {searchQuery || filterCategory !== "All"
                    ? "No books match your search or filter."
                    : "Your collection is empty. Add a book to get started!"}
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 truncate">{book.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">by {book.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Category: {book.category}</p>
                    <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full mb-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${book.progress}%` }}
                        transition={{ duration: 0.5 }}
                        className="absolute h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      ></motion.div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{book.progress}% Complete</p>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => editBook(book)}
                        className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                      >
                        <Edit2 className="w-4 h-4 mr-1" /> Edit
                      </button>
                      <button
                        onClick={() => removeBook(book.id)}
                        className="flex items-center text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 mr-1" /> Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export default ReadingListDashboard;
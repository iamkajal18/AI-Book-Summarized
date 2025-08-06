import mongoose from "mongoose";

const bookSummarySchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Number,
      required: false,
    },
    isbn: {
      type: String,
      required: false,
    },
    summary: {
      type: String,
      required: true,
    },
    plainTextSummary: {
      type: String,
    },
    contentType: {
      type: String,
      enum: ["html", "markdown"],
      default: "html",
    },
    coverImageUrl: {
      type: String,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        "Fiction",
        "Non-Fiction",
        "Biography",
        "Self-Help",
        "Business",
        "Science",
        "History",
        "Other",
      ],
    },
    keyTakeaways: {
      type: [String],
      default: [],
    },
    createdBy: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
    },
    authorEmail: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

bookSummarySchema.index({ createdBy: 1, bookTitle: 1 });

const BookSummary = mongoose.models.BookSummary || mongoose.model("BookSummary", bookSummarySchema);

export default BookSummary;
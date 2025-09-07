import React from "react";
import { useParams } from "react-router-dom";
import { ALL_BOOKS } from "../data/books";

export default function Reader() {
  const { bookId } = useParams();
  const book = ALL_BOOKS.find((b) => b.id === bookId);

  if (!book) return <p>Book not found!</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <img
        src={book.cover}
        alt={book.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
      />
      <hr style={{ margin: "20px 0" }} />
      <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>{book.content}</p>
    </div>
  );
}

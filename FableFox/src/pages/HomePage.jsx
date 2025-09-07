import React, { useEffect, useState } from "react";
import { ALL_BOOKS } from "../data/books";

export default function Home({ likedBooks, onLike }) {
  const [randomBooks, setRandomBooks] = useState([]);

  useEffect(() => {
    const shuffled = [...ALL_BOOKS].sort(() => 0.5 - Math.random());
    setRandomBooks(shuffled.slice(0, 3));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Random Textbooks</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {randomBooks.map((book) => {
          const liked = likedBooks.some((b) => b.id === book.id);
          return (
            <div
              key={book.id}
              style={{
                width: "200px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: liked ? "#d1fae5" : "white",
                boxShadow: "0 2px 5px rgb(0 0 0 / 0.1)",
              }}
            >
              <img
                src={book.cover}
                alt={book.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <button
                onClick={() => onLike(book)}
                disabled={liked}
                style={{
                  marginTop: "8px",
                  padding: "6px 10px",
                  backgroundColor: liked ? "#10b981" : "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: liked ? "default" : "pointer",
                }}
              >
                {liked ? "Added" : "Add to My Books"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

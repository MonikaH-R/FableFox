import React from "react";
import { Link } from "react-router-dom";

export default function MyBooks({ likedBooks }) {
  const grouped = likedBooks.reduce((acc, book) => {
    acc[book.genre] = acc[book.genre] || [];
    acc[book.genre].push(book);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Books</h1>
      {Object.keys(grouped).length === 0 && <p>No books added yet.</p>}
      {Object.entries(grouped).map(([genre, books]) => (
        <section key={genre} style={{ marginBottom: "30px" }}>
          <h2>{genre}</h2>
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {books.map((book) => (
              <Link
                key={book.id}
                to={`/read/${book.id}`}
                style={{
                  width: "160px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

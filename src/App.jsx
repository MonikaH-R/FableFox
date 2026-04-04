import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyBooks from "./pages/MyBooks";
import Reader from "./pages/Reader";

export default function App() {
  const [likedBooks, setLikedBooks] = useState(() => {
    const saved = localStorage.getItem("likedBooks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedBooks", JSON.stringify(likedBooks));
  }, [likedBooks]);

  function handleLike(book) {
    if (!likedBooks.some((b) => b.id === book.id)) {
      setLikedBooks((prev) => [...prev, book]);
    }
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home likedBooks={likedBooks} onLike={handleLike} />}
        />
        <Route path="/mybooks" element={<MyBooks likedBooks={likedBooks} />} />
        <Route path="/read/:bookId" element={<Reader />} />
      </Routes>
    </Router>
  );
}

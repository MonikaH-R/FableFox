import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        background: "#1f2937",
        color: "white",
        padding: "10px 30px",
        gap: "20px",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "24px", cursor: "default" }}>
        Fablefox
      </div>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/mybooks" style={{ color: "white", textDecoration: "none" }}>
        My Books
      </Link>
    </nav>
  );
}

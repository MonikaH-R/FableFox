import React from 'react';

export default function BookCard({ book, onClick }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/180x240?text=No+Cover';

  return (
    <div className="book-card" onClick={() => onClick(book)} style={{ cursor: 'pointer' }}>
      <img src={coverUrl} alt={book.title} style={{ width: '100%', borderRadius: '8px' }} />
      <h4>{book.title}</h4>
      <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
    </div>
  );
}

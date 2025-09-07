import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', textAlign: 'center' }}>
      <input
        type="text"
        value={query}
        placeholder="Search for books..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '70%', maxWidth: '400px' }}
      />
      <button type="submit" style={{ padding: '10px 15px', marginLeft: '10px' }}>
        Search
      </button>
    </form>
  );
}

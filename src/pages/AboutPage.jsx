import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', color: '#eee' }}>
      <h2>About Book Finder</h2>
      <p>This project is a full-stack web application for searching books and previewing them inline using the OpenLibrary API.</p>
      <p>Phase 1 focuses on foundation and frontend design including React SPA, routing, local state, and basic API integration.</p>
      <p>Future phases will add backend integration, authentication, and more advanced features.</p>
    </div>
  );
}

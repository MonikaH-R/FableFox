import React from 'react';

export default function PreviewModal({ book, onClose }) {
  if (!book) return null;

  const olid = book.edition_key && book.edition_key[0];
  const embedUrl = olid ? `https://openlibrary.org/books/${olid}/embed` : null;
  const fallbackUrl = book.key ? `https://openlibrary.org${book.key}` : null;

  return (
    <div className="modal" style={{ display: 'flex' }} onClick={e => { if(e.target.className === 'modal') onClose(); }}>
      <div className="modal-body" style={{ position: 'relative', width: '90%', maxWidth: '900px', height: '80vh', background: '#19333b', borderRadius: '12px' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', right: '12px', top: '12px', background: '#ff5e78', border: 'none',
            color: '#fff', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer',
          }}
          aria-label="Close preview"
        >
          ✕
        </button>
        <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
          <strong>{book.title}</strong> &mdash; {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </div>
        {embedUrl ? (
          <iframe
            title="Book Preview"
            src={embedUrl}
            style={{ border: 'none', width: '100%', height: 'calc(100% - 64px)', backgroundColor: '#fff' }}
          />
        ) : fallbackUrl ? (
          <div style={{ padding: '20px', color: '#ddd' }}>
            Preview unavailable. <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#ff5e78' }}>Open book page</a>
          </div>
        ) : (
          <div style={{ padding: '20px', color: '#ddd' }}>No preview available.</div>
        )}
      </div>
    </div>
  );
}

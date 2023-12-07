import React, { useState } from 'react';
import './AddNotePage.css';

function AddNotePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Note added:', data);
      setTitle('');
      setContent('');
      // Optionally redirect or update UI
    })
    .catch(error => {
      console.error('Error adding note:', error);
    });
  };

  return (
    <div className="add-note-page">
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="note-input"
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Content"
          className="note-textarea"
        />
        <button type="submit" className="note-submit-btn">Add Note</button>
      </form>
    </div>
  );
}

export default AddNotes;

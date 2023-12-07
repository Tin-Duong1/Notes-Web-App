import React from 'react';
import './NoteItem.css';

function NoteItem({ note }) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
}

export default NoteItem;

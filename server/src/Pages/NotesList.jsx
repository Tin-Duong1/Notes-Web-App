import React, { useEffect, useState } from 'react';
import NoteItem from './NoteItem';
import './NotesList.css';

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/notes')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  return (
    <div className="note-list-page">
      <h2>All Notes</h2>
      <div className="notes-container">
        {notes.map(note => <NoteItem key={note.id} note={note} />)}
      </div>
    </div>
  );
}

export default NotesList;


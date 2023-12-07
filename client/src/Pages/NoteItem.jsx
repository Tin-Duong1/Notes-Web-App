import React from 'react';
import {Link} from 'react-router-dom';
import './NoteItem.css';

function NoteItem({note}) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <Link to={`/edit/${note.id}`} className="edit-link">Edit</Link>
    </div>
  );
}

export default NoteItem;


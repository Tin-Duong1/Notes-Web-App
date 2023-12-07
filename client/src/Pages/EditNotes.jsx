import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './EditNotes.css';

function EditNotes() {
    const { noteId } = useParams();
    const [note, setNote] = useState({ title: '', content: '' });
    useEffect(() => {
        fetch(`http://localhost:4000/notes/${noteId}`)
        .then(response => response.json())
        .then(data => setNote(data))
        .catch(error => console.error('Error fetching note:', error));
 }, [noteId]);

    const handleUpdate = () => {
        fetch(`http://localhost:4000/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
      },
        body: JSON.stringify(note)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Note updated:', data);
    })
    .catch(error => {
      console.error('Error updating note:', error);
    });
  };

    const handleDelete = () => {
        fetch(`http://localhost:4000/notes/${noteId}`, {
        method: 'DELETE'
        })
    .then(response => response.json())
    .then(data => {
        console.log('Note deleted:', data);
    })
    .catch(error => {
        console.error('Error deleting note:', error);
    });
  };

  return (
    <div className="edit-note-page">
      <h2>Edit Note</h2>
      <input
        type="text"
        value={note.title}
        onChange={e => setNote({ ...note, title: e.target.value })}
        className="note-input"
      />
      <textarea
        value={note.content}
        onChange={e => setNote({ ...note, content: e.target.value })}
        className="note-textarea"
      />
      <button onClick={handleUpdate} className="note-update-btn">Update Note</button>
      <button onClick={handleDelete} className="note-delete-btn">Delete Note</button>
    </div>
  );
}

export default EditNotes;




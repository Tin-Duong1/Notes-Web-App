import React, { useState } from 'react';
import './AddNotes.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'

function AddNotes() {
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
    })
    .catch(error => {
      console.error('Error adding note:', error);
    });
  };

  return (
    <div className="add-note-page">
      <h2>Add Note</h2>
      <Form onSubmit={handleSubmit} className="note-form">
        <Form.Group className="mb-3">
          <Form.Control size="lg" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)} placeholder='Content'></Form.Control>
        </Form.Group>
        <Button type="submit" className="note-submit-btn" variant="outline-dark" size="lg">Add Note</Button>
      </Form>
    </div>
  );
}

export default AddNotes;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import NotesList from './Pages/NotesList.jsx';
import AddNotes from './Pages/AddNotes.jsx';
import EditNotes from './Pages/EditNotes.jsx';
import Header from './Components/Header.jsx';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<NotesList />} />
          <Route path="/write" element={<AddNotes />} />
          <Route path="/edit/:noteId" element={<EditNotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


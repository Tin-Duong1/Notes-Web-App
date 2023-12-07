import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import NoteListPage from './Pages/NoteListPage';
import AddNotePage from './Pages/AddNotePage';
import EditNotePage from './Pages/EditNotePage';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<NoteListPage />} />
          <Route path="/write" element={<AddNotePage />} />
          <Route path="/edit/:noteId" element={<EditNotePage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;


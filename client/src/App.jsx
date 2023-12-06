import { useState } from 'react'
import './App.css'


import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom"

import AddNote from './Pages/AddNote';
import Delete from './Pages/Delete';
import Read from './Pages/Read';
import Login from './Pages/login';
import Register from './Pages/register';

import Header from './Components/Header';

function App() {
  
  return (
    <Router>
      <Header />
      <div>
      <Routes>
        <Route exact path="/" element={
          <>
          <Read />
          </>
        }></Route>
        <Route path='/delete' element={<Delete />}></Route>
        <Route path='/write' element={<AddNote />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      </div>
      </Router>
    
  )
}



export default App

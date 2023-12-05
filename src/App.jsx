import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      
        <Navbar.Brand href="index.html">Note Taking</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="index.html">Read</Nav.Link>
            <Nav.Link href="AddPage.html">Write</Nav.Link>
            <Nav.Link href="DeletePage.html">Delete</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
       
    </Navbar>

    

    <br></br>

    <h1>Note Title goes here</h1>
    
      <div className="center-container">
      <p id="noteText">Large block of note</p>
      <Button variant="outline-primary" className="ReadNote" >Previous Note</Button>
      <Button variant="outline-primary" className="ReadNote" >Next Notes</Button>
        </div>
    </>
  )
}



export default App

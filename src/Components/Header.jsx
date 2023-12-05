import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pathConstants from '../routes/pathConstants';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      
      <Navbar.Brand href={pathConstants.READ}>Note Taking</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={pathConstants.READ}>Read</Nav.Link>
          <Nav.Link href={pathConstants.WRITE}>Write</Nav.Link>
          <Nav.Link href={pathConstants.DELETE}>Delete</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
        </Nav>
     
  </Navbar>
    </>
  )
}

export default Header
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Comp.css'
function Header() {
  return (
    <>
    <Navbar fixed="top" expand="xxl" className="bg-body-tertiary" data-bs-theme="dark" >
      <Navbar.Brand href="/"><h3>Notes</h3></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/"><h5>Read</h5></Nav.Link>
          <Nav.Link href="/write"><h5>Write</h5></Nav.Link>
          
        </Nav>
  </Navbar>
  
    </>
  )
}

export default Header

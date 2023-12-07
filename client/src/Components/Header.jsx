import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar expand="xxl" className="bg-body-tertiary" data-bs-theme="dark" >
      
      <Navbar.Brand href="/">Notes</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Read</Nav.Link>
          <Nav.Link href="/write">Write</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
  </Navbar>
    </>
  )
}

export default Header
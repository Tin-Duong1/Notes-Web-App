import React from 'react'
import { Button } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'
import './Comp.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Delete() {
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

        <h1>Title of Note</h1>

      <div className="center-container">
      <Button variant="outline-primary" className="" OnClick>Next Note</Button>
      <Button variant="outline-primary" className="" OnClick>Delete Current Note</Button>
        </div>
    </>
  )
}

export default Delete
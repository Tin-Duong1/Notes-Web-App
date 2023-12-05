import React from 'react'
import { Button } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'
import './Comp.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function AddNote() {
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


    <br />
    <br />
   
    

      <div className="center-container">
        <form>
        <InputGroup size="lg">
          <InputGroup.Text data-bs-theme="dark">Note Title: </InputGroup.Text>
          <Form.Control
          placeholder="Note Title"
          aria-label="Note Title"
          aria-describedby="basic-addon2"
        />
          </InputGroup>
            <br></br>
            <InputGroup>
          <InputGroup.Text data-bs-theme="dark">Note: </InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
            <br></br>
            <Button variant="outline-primary" className="" OnClick>Submit Note</Button>
        </form>
        </div>
    </>
  )
}



export default AddNote
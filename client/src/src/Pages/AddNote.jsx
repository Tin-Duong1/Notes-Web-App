import React from 'react'
import { Button } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'
import './Comp.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddNote() {
  return (
    <>
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
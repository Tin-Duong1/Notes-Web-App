import React from 'react'
import { Button } from 'react-bootstrap'

import './Comp.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Login() {
    return (
        <>
        <br />
        <br />
       
          <div className="center-container">
            <form>
            <InputGroup size="lg">
              <InputGroup.Text data-bs-theme="dark">Username: </InputGroup.Text>
              <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon2"
            />
              </InputGroup>
                <br></br>
                <InputGroup size="lg">
              <InputGroup.Text data-bs-theme="dark">Password: </InputGroup.Text>
              <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
            />
              </InputGroup>
                <br></br>
                <Button variant="outline-primary" className="" OnClick>Login</Button>
            </form>
            </div>
            </>
    )
}

export default Login
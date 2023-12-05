import React from 'react'
import { Button } from 'react-bootstrap'
 'react-bootstrap'
 import './Comp.css'

function Delete() {
  return (
    <>

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
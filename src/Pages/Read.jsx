import React from 'react'
import { Button } from 'react-bootstrap'
import './Comp.css'

function Read() {
  return (
    <>
    <h1>Note Title goes here</h1>
    
    <div className="center-container">
    <p id="noteText">Large block of note</p>
    <Button variant="outline-primary" className="ReadNote" >Previous Note</Button>
    <Button variant="outline-primary" className="ReadNote" >Next Notes</Button>
      </div>
    </>
  )
}

export default Read
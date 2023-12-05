import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to the page! Taking a note?</h1>
      <Breadcrumb variant="contained" style={{float: 'left'}}>
        <Breadcrumb.Item variant="contained" href="#">Login</Breadcrumb.Item>
        <Breadcrumb.Item href="">Register</Breadcrumb.Item>
      </Breadcrumb>
      <Button variant="contained" style={{float: 'right'}} className="AddNote" onClick="">Add Note</Button>
      <Button variant="contained" style={{float: 'right'}} className="DeleteNote" onClick="">Delete Note</Button>
    </>
  )
}

export default App

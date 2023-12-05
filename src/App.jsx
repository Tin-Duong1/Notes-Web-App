import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="header"><h1>Welcome to the page! Taking a note?</h1>
      <Breadcrumb variant="contained" style={{float: 'left'}}>
        <Breadcrumb.Item variant="contained" href="#">Login</Breadcrumb.Item>
        <Breadcrumb.Item href="">Register</Breadcrumb.Item>
      </Breadcrumb>
      <Button variant="contained" style={{float: 'right'}} className="AddNote" href="AddPage.html">Add Note</Button>
      <Button variant="contained" style={{float: 'right'}} className="DeleteNote" href="DeletePage.html">Delete Note</Button>
      <Button variant="contained" style={{float: 'right'}} className="ReadNote" href="index.html">Read Notes</Button>
      </div>

    <br></br>

      <div id="notes">
        
        </div>
    </>
  )
}



export default App

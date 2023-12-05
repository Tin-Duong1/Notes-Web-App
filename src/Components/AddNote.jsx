
import { Button } from 'react-bootstrap'
import { Breadcrumb } from 'react-bootstrap'
import './Comp.css'


function AddNote() {
  return (
    <>
    <div id="header"><h1>Add Notes</h1>
      <Breadcrumb variant="contained" style={{float: 'left'}}>
        <Breadcrumb.Item variant="contained" href="#">Login</Breadcrumb.Item>
        <Breadcrumb.Item href="">Register</Breadcrumb.Item>
      </Breadcrumb>
      <Button variant="contained" style={{float: 'right'}} className="AddNote" href="AddPage.html">Add Note</Button>
      <Button variant="contained" style={{float: 'right'}} className="DeleteNote" href="DeletePage.html">Delete Note</Button>
      <Button variant="contained" style={{float: 'right'}} className="ReadNote" href="index.html">Read Notes</Button>
      </div>

    <br></br>

      <div class="center-container">
        <form>
            <label>
                Title:
            </label>
            <br></br>
            <input type="text"></input>
            <br></br>
            <label>
                Message:
            </label>
            <br></br>
            <textarea></textarea>
            <br></br>
            <Button variant="contained" className="" OnClick>Submit Note</Button>
        </form>
        </div>
    </>
  )
}



export default AddNote
import React from "react"
import swal from 'sweetalert';

const CreateInput = (props) => {
 const onFormSubmit=(event)=>{
  swal("Your File Has been Uploaded Successfully..");
  }
  return (
    props.values.map((el, i)=> {
     
      return (
        <div key={i}>
           
     <form onSubmit={onFormSubmit}>
       <br></br>
        <b>Please Upload Document</b>
        <br></br>
        <input type="file" id="file" onChange={this.onChange} />
        <button  id="btn4" className="btn btn-outline-primary" type="submit" value="import">Upload</button>
      </form></div>
      )
    })
  )
}
export default CreateInput
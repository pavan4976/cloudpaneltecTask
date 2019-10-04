import React from 'react';
import CreateInput from './createinput'
import './dynamicform.css'
import axios from 'axios';

export default class DynamicForm  extends React.Component {
    constructor(props) {
      super(props);

      this.state = {values: [],
       
          list: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
      this.getData().then((response)=> {
          console.log(response);
      
          this.setState({list: response})
      });
  }
  getData = () => {
      return new Promise((resolve, reject) => {
          axios.get('http://localhost:3001/users').then(reponse=> {
              resolve(reponse.data)
          }).catch(error=> {
              reject(error)
          })
      })
  }
 
   
      addClick=()=>{
      this.setState(prevState => ({ values: [...prevState.values, '']}))
    }
    
    handleSubmit=(event)=> {
      event.preventDefault()
     }
  
    render() {
      return (
        <div className="conatiner">
        <div className="box col-md-6 col-sm-12">
            <h3 text-align="center" className="h1">Register Form</h3>
         
        <form onSubmit={this.handleSubmit}>
               <table align="center" className="table table- striped">
                  <tbody>
              <tr>
                    <td> Student Id:</td>
                    <td><input type="number" name="sapid" value={this.state.list.studentid} id="sapid" placeholder="Please Enter ID" /></td>
                </tr>
                <tr>
                    <td>Zip Code:</td>
                    <td><input type="number" name="zipcode" value={this.state.list.zipcode} id="zipcode" placeholder="Please Enter ZipCode" /></td>
                </tr>
               
              
                <tr>
                    
                    <td>Mobile Number :</td>
                    <td><input type="number" value={this.state.list.mobileNumber}  placeholder="Please Enter Mobile"  id="mobilenumber" name="mobilenumber"  pattern="[7-9]{1}[0-9]{9}"/></td>
                </tr>
               <tr>

                   <td>
                       Plase Select Gender
                       </td>
                       <td>
                       <div className="radio-inline" >
                    
                  <td>  <label><input type="radio" name="radio" checked={this.state.list.gender==='male'} value="Male"></input>Male</label></td>
                  <td>  <label><input type="radio" name="radio" checked={this.state.list.gender==='female'} value="Female"></input>Female</label></td>
                   
                    </div>
                    </td>
                    </tr>
              <tr>
              <td>
                       Plase Select Course
                       </td>
                    <div className="checkbox-inline">
                   
                   <td> <label>
                          <input type="checkbox" 
                          checked={this.state.list.course==="ReactJs"}
                          name="chckreact">
                          </input>
                           React JS
                          </label></td>
                   <td> 
                          <label>
                            <input type="checkbox"
                             name="chckangular"  
                             checked={this.state.list.course==="ReactJs"}
                             value="angularjs">
                             </input>
                             Angular JS
                             </label>
                           </td>
                    </div>
                    </tr>
                </tbody>
              </table>
               <table>
                  <tbody>
              <tr>
                    <td><button    className="btn btn-primary bbb" id="btn1" onClick={this.addClick }>Click to Upload</button></td>
                    <td><button   className="btn btn-primary"  id="btn2"   onClick={this.handleSubmit} value="submit" >Submit</button></td>
                </tr>
               </tbody>
                  </table>
                        <CreateInput values={this.state.values}/>
            
        </form>
        </div>
        </div>
      );
    }
  }
  
  
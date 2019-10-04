import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';
import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap'
import DynamicForm from '../DynamicForm/dynamicform'

class Header extends Component {
    render() {
        return (
            <div>
    
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">College Application</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Cotact us</Nav.Link>
     </Nav>
    <Form inline>
     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>

        <Switch>
            <Route exact path="/" component={DynamicForm} />
        </Switch>
             
</div>
                        );
    }
}



export default Header;
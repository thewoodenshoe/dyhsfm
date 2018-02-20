import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
class Login extends Component {
    constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
 handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    alert(this.state.password);    
  }
      render() {
        return (
           <div>
              <center>
              <h2>Login</h2>
              <form onSubmit={this.handleSubmit}>
                 <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email: </ControlLabel>
                    <FormControl
                         autoFocus
                         type="email"
                         value={this.state.email}
                         onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                       <ControlLabel>Password: </ControlLabel>
                       <FormControl
                          value={this.state.password}
                          onChange={this.handleChange}
                          type="password"
                       />
                 </FormGroup>
                 <Button block bsSize="large" disabled={!this.validateForm()} type="submit"> Login </Button>
              </form>
              </center>
           </div>
        )
    }
}

// <form action="http://localhost:8080/api/login" method="post"> 
// <input type="text" name="email" /> <br />
// <input type="text" name="password" /> <br />
// </form>

export default Login;
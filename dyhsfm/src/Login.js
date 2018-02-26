import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Panel } from "react-bootstrap";
import "./Login.css";
var Alert = require('react-bootstrap/lib/Alert');
class Login extends Component {
    constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      RegisterOpen: false,
    };
  }
  validateLogin() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  validateRegister() {
    return this.state.email.length > 0;
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
              <Panel className="Login-form">
                <Panel.Heading>
                  Login
                </Panel.Heading>
                <Panel.Body>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>
                      Email: 
                    </ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>
                      Password:
                    </ControlLabel>
                    <FormControl
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </FormGroup>
                  <Button bsStyle="success" block bsSize="large" disabled={!this.validateLogin()} type="submit"> 
                    Login
                  </Button>      
                </form>
                </Panel.Body>
                <Panel.Footer>
                <Button onClick={() => this.setState({ RegisterOpen: !this.state.RegisterOpen })}>
                  Don't have an account yet? Register here
                </Button>
                <br />
                <Panel id="collapsible-register-panel" expanded={this.state.RegisterOpen}>
                <Panel.Collapse>
                <Panel.Body>
                  <form onSubmit={this.handleRegister}>
                    <FormGroup controlId="email" bsSize="large">
                      <ControlLabel>
                        Email: 
                      </ControlLabel>
                      <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button bsStyle="success" block bsSize="large" disabled={!this.validateRegister()} type="submit"> 
                      Register
                    </Button>      
                  </form>
                </Panel.Body>
                </Panel.Collapse>
                </Panel> 
                </Panel.Footer>
              </Panel>
           </div>
        )
    }
}

// <form action="http://localhost:8080/api/login" method="post"> 
// <input type="text" name="email" /> <br />
// <input type="text" name="password" /> <br />
// </form>

export default Login;
import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Panel } from "react-bootstrap"
import "./Login.css"
const axios = require("axios")
class Login extends Component {
    constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      RegisterOpen: false,
      LostPasswordOpen: false
    };
  }
  validateLogin() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  validateEmail() {
    return this.state.email.length > 0;
  }
 handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  handleSubmit = event => {
    // curl -x POST http://localhost:8080/mytest
    // the above works and i will get the messages from /mytest 
    const url = 'http://localhost:8080/mytest'
    const formData = { login:'Paul', password:'Password' }
    alert(`Going to url ${url} with username ${formData.login}`) // alert shows. We ARE being executed

    // I notice the page loads/ refreshes, does something?!. I don't understand devtools/network/XHR. I dont see 8080/mytest in there?!
    axios.post(url, formData, { headers: {'Accept': 'application/json'} })
    .then(function (response) {
      console.log('response: ' +response);
    })
    .catch(function (error) {
      console.log('error: ' +error);
    });
  }
      render() {
        return (
           <div>
               <Panel className="Login-form">
                <form onSubmit={this.handleSubmit}>
                   <Button bsStyle="success" block type="submit"> Login </Button>
                </form>
              {/*
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
                  <FormGroup controlId="rememberMe">
                    <ControlLabel>
                      Remember me
                    </ControlLabel>
                    <FormControl
                      value={this.state.rememberMe}
                      type="checkbox"
                    />
                  </FormGroup>
                  <Button bsStyle="success" block bsSize="large" disabled={ !this.validateLogin()} type="submit">  
                    Login
                  </Button>      
                </form>
                </Panel.Body>

                <Panel.Footer>

                <Button className="Login" onClick={() => this.setState({ RegisterOpen: !this.state.RegisterOpen })}>
                  Register account
                </Button>
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
                    <Button bsStyle="success" block bsSize="large" disabled={!this.validateEmail()} type="submit"> 
                      Register
                    </Button>      
                  </form>
                </Panel.Body>
                </Panel.Collapse>
                </Panel> 

                <Button className="Login" onClick={() => this.setState({ LostPasswordOpen: !this.state.LostPasswordOpen })}>
                  Lost password
                </Button>
                <Panel id="collapsible-lostPassword-panel" expanded={this.state.LostPasswordOpen}>
                <Panel.Collapse>
                <Panel.Body>
                  <form onSubmit={this.LostPassword}>
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
                    <Button bsStyle="success" block bsSize="large" disabled={!this.validateEmail()} type="submit"> 
                      Reset password
                    </Button>      
                  </form>
                </Panel.Body>
                </Panel.Collapse>
                </Panel> 
                </Panel.Footer>
        */}                
              </Panel>
           </div>
        )
    }
}

export default Login;
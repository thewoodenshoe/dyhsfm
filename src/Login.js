import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Panel } from "react-bootstrap"
import "./Style.css"
const axios = require("axios")
class Login extends Component {
    constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
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
    
  handleLogin = event => {
    const url = 'http://localhost:8080/login'
    let params = new URLSearchParams()
    params.append('email', this.state.email)
    params.append('password', this.state.password)

    axios.post(url, params)
    .then(res => {
      alert(+res)
    })
    .catch(err => {
      alert(err)
    });
  }
  handleRegister = event => {
    const url = 'http://localhost:8080/register'
    let params = new URLSearchParams()
    params.append('email', this.state.email)
    params.append('firstName', this.state.firstName)
    params.append('lastName', this.state.lastName)

    axios.post(url, params)
    .then(function (response) {
      console.log('handleLogin: back in frontend axios.post.then')
    })
    .catch(function (error) {
      console.log('handleLogin error: ' +error);
    });
  } 


render() {
  return (
    <div>
      <Panel className="Login-form">
        <Panel.Heading>
          Login
        </Panel.Heading>
        <Panel.Body>
          <form onSubmit={this.handleLogin}>
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
            <Button bsStyle="success" block bsSize="large" disabled={!this.validateLogin()} type="submit">  
              Login
            </Button>      
        </form>
       </Panel.Body>
       <Panel.Footer>
          <a href="signup"> signup </a>
        </Panel.Footer>
     </Panel>
  </div>
        )
    }
}

export default Login;
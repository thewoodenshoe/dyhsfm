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
        <FormGroup controlId="firstName" bsSize="large">
          <ControlLabel>
            First name: 
          </ControlLabel>
          <FormControl
            autoFocus
            type="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="lastName" bsSize="large">
          <ControlLabel>
            First name: 
          </ControlLabel>
          <FormControl
            autoFocus
            type="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </FormGroup>
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
  </Panel>
  </div>
        )
    }
}

export default Login;
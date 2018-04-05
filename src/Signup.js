import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Panel } from "react-bootstrap"
import "./Style.css"
const axios = require("axios")
class Signup extends Component {
    constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  }
  validateFields() {
    return this.state.firstName.length > 0 &&
           this.state.lastName.length > 0 &&
           this.state.email.length > 0 &&
           this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSignup = event => {
    const url = 'http://localhost:8080/signup'
    let params = new URLSearchParams()
    params.append('email', this.state.email)
    params.append('firstName', this.state.firstName)
    params.append('lastName', this.state.lastName)
    params.append('password', this.state.password)

    axios.post(url, params)
    .then(function (response) {
      console.log('handleSignup: after the post I got back into the frontend axios.post.then')
    })
    .catch(function (error) {
      console.log('signup.js: handleSignup error: ' +error);
    });
  } 

render() {
  return (
    <div>
        <Panel className="Signup-form">
            <Panel.Heading>
                Signup
            </Panel.Heading>
            <Panel.Body>
{/*            <form onSubmit={this.handleSignup}> 
               <form onSubmit="signup" method="POST">
*/}
            <form onSubmit="signup" action="POST">
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
                        Last name: 
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
{/*}                <Button bsStyle="success" block bsSize="large" disabled={ !this.validateFields()} type="submit">  */}
                <Button bsStyle="success" block bsSize="large" type="submit">  
                    Register
                </Button>      
            </form>
         </Panel.Body>
     </Panel>
  </div>
        )
    }
}

export default Signup;
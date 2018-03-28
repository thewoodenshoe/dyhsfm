import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button} from "react-bootstrap";
import LoginPage from './Login';
import LoginOldPage from './LoginOld';
import HomePage from './Home';
import './App.css';
//                 
const App = () => (
  <Router>
    <div className="App-layoutStyle">
      <Navbar fluid inverse collapseOnSelect>
         <Navbar.Header>
            <Navbar.Brand>
               <Link to="/">
               <img alt="home" src ="./favicon.ico" />
               </Link> 
            </Navbar.Brand>
            <Navbar.Form pullLeft>
            <FormGroup>
               <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
            <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
            <Nav pullRight>
               <NavItem eventKey={1} href="Login">
                Login
               </NavItem>
               <NavItem eventKey={2} href="LoginOld">
                Old Login
               </NavItem>
            </Nav>
         </Navbar.Collapse>
      </Navbar>     
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/loginOld" component={LoginOld} />
    </div>
  </Router>
);

const Home = () => (
  <div>
     <HomePage />
  </div>
);

const Login = () => (
  <div>
    <LoginPage />
  </div>
);

const LoginOld = () => (
  <div>
    <LoginOldPage />
  </div>
);

export default App;
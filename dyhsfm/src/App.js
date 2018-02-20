import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Form, FormGroup, FormControl, Button} from "react-bootstrap";
import LoginPage from './Login';
import HomePage from './Home';
import './App.css';

const App = () => (
  <Router>
    <div className="App-layoutStyle">
      <Navbar fluid inverse collapseOnSelect>
         <Navbar.Header>
            <Navbar.Brand>
               <Link to="/">Home</Link> 
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
               <NavItem eventKey={2} href="Topics">
                Topics
               </NavItem>
            </Nav>
         </Navbar.Collapse>
      </Navbar>     
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/topics" component={Topics} />
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

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    The url: {match.params.topicId}
  </div>
);

export default App;
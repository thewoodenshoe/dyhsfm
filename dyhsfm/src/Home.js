import React, { Component } from 'react';
import { Panel } from "react-bootstrap";
import "./Home.css";
class Home extends Component {
    render() {
        return (
            <div>
                <Panel className="Home-panel">
                    <Panel.Heading>
                      Heading
                    </Panel.Heading>
                    <Panel.Body>
                      Hello, this is the main page <br />
                    </Panel.Body>
                    <Panel.Footer>
                      Footer
                     </Panel.Footer>
                </Panel>
            </div>
        )
    }
}

export default Home;
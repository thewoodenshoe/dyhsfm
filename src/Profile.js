import React, { Component } from 'react';
import { Panel } from "react-bootstrap";
import "./Style.css";
class Profile extends Component {
    render() {
        return (
            <div>
                <Panel className="Home-panel">
                    <Panel.Heading>
                      Profile of
                    </Panel.Heading>
                    <Panel.Body>
                      age: <br />
                    </Panel.Body>
                    <Panel.Footer>
                      Footer
                     </Panel.Footer>
                </Panel>
            </div>
        )
    }
}

export default Profile;
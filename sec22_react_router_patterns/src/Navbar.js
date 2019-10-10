import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleLog = this.handleLog.bind(this);
    }
    handleLog() {
        alert("Login");
        //redirect
        this.props.history.push("/food/apple");
    }
    render() {
        return (
            <div className="Navbar">
                <button onClick={this.handleLog}>Login</button>

            </div>
        )
    }
}
export default withRouter(Navbar);
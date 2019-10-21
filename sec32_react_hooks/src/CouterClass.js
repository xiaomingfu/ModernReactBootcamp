import React, { Component } from 'react';

class CouterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        this.count = this.count.bind(this);
    }
    count() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.count}>Click</button>
            </div>
        )
    }
}

export default CouterClass;

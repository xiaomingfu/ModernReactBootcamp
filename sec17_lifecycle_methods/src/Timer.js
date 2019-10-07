import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() }
        console.log("In comstructor")
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
        console.log("in component did mount")
    }

    render() {
        console.log("In render")
        return (
            <h1>{this.state.time.getSeconds()}</h1>)
    }
}
export default Timer;
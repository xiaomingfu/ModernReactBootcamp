import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() }
        console.log(this.state.time)
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
    }
    render() {
        console.log("In render")
        return (
            <h1>{this.state.time.getSeconds()}</h1>)
    }
}
export default Timer;
import React, { Component } from 'react';
import axios from 'axios';

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '' };
    }
    componentDidMount() {
        //load data
        axios.get("https://api.github.com/zen").then(response => {
            this.setState({ quote: response.data })
        })
    }
    render() {
        return <p>{this.state.quote}</p>
    }
}

export default ZenQuote;
import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '', loaded: false };
    }
    componentDidMount() {
        //load data
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function () {
                    this.setState({ quote: response.data, loaded: true })
                }.bind(this), 3000)
        })
    }
    render() {
        return (
            <div>
                {this.state.loaded
                    ? <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                    : <div className="loading"></div>
                }
            </div>
        )

    }
}

export default ZenQuote;
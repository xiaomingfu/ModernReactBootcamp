import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { img: "", name: "" };
    }
    async componentDidMount() {
        let url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({ img: data.avatar_url, name: data.name })
    }
    render() {
        return (
            <div>
                <h1>Github User: {this.state.name}</h1>
                <img src={this.state.img} />
            </div>
        )
    }
}

export default GithubUserInfo;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ query: e.target.value })
    }
    render() {
        return (
            <div>
                <h1>Search for a food</h1>
                <input
                    type="text"
                    placeholder="search for something"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                {/* Take to another route */}
                <Link to={`/food/${this.state.query}`} >Go</Link>
            </div>
        )
    }
}
export default Search;
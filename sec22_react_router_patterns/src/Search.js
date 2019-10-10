import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { query: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({ query: e.target.value })
    }
    handleClick() {
        //do something
        console.log("SAVE YOUR FOOD TO DB!");
        //redirect to somewhere else
        this.props.history.push(`/food/${this.state.query}`)
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
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
export default Search;
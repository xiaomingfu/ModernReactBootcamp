import React, { Component } from 'react';

class Food extends Component {

    render() {
        const foodName = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${foodName}`;
        return (
            <div>
                <h1>I like eating {foodName}</h1>
                <img src={url} alt={foodName} />
            </div>
        )
    }
}

export default Food;
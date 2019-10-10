import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Food extends Component {

    render() {
        const foodName = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${foodName}`;
        return (
            <div>
                {/* regular expression to check if params has number or not  */}
                {/\d/.test(foodName) ? <Redirect to="/notfound" /> :
                    <div>
                        <h1>I like eating {foodName}</h1>
                        <img src={url} alt={foodName} />
                    </div>
                }
            </div>


        )
    }
}

export default Food;
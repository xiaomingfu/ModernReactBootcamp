import React, {Component} from 'react';

class NumGame extends Component{
    constructor(props){
        super(props);
        this.state = {num: 0};
        this.click = this.click.bind(this);
    }
    click(e){
        let rand = Math.floor(Math.random() * 10);
        this.setState({num: rand});
    }
    render(){
        return (
            <div>
                <h1>Number is: {this.state.num} </h1>
                <div>
                    <button onClick={this.click}>Random Number</button>
                    <h1>{this.state.num === 7 ? "You win!" : <button></button> }</h1>
                </div>
            </div>
        )
    }
}

export default NumGame;
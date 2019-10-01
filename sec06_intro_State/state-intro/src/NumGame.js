import React, {Component} from 'react';

class NumGame extends Component{
    constructor(props){
        super(props);
        this.state = {num: 1};
        this.click = this.click.bind(this);
    }
    click(e){
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand});
    }
    render(){
        return (
            <div>
                <h1>Number is: {this.state.num} </h1>
                <div>
                    {this.state.num === 7 
                        ? <h2>You Win!</h2> 
                        : <button onClick={this.click}>Random Number</button> }
                </div>
            </div>
        )
    }
}

export default NumGame;
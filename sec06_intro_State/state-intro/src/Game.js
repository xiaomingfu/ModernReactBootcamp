import React, {Component} from 'react';
import Rando from './Rando';
class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            gameOver: false,
        }
    }
    render(){
        return(
            <h1>{this.state.score}</h1>
        )
    }
}

export default Game;

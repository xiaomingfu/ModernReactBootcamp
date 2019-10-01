import React, {Component} from 'react';

class AddNum extends Component{
    constructor(props){
        super(props);
        this.state = {num: 1};
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }
    singleKill(e){
        this.setState({num: this.state.num + 1});
    }

    // react batch balls to setState together into one
    // tripleKill(e){
    //     this.setState({num: this.state.num + 1});
    //     this.setState({num: this.state.num + 1});
    //     this.setState({num: this.state.num + 1});
    // }

    // callback function
    // tripleKill(e){
    //     this.setState((curState) => {
    //         return ({num: curState.num + 1})
    //     });
    //     this.setState((curState) => {
    //         return ({num: curState.num + 1})
    //     });
    //     this.setState((curState) => {
    //         return ({num: curState.num + 1})
    //     });
    // }

    //refactory 
    incrementNum(curState){
        return {num: curState.num + 1};
    }
    tripleKill(){
        this.setState(this.incrementNum);
        this.setState(this.incrementNum);
        this.setState(this.incrementNum);
    }
    render(){
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
            </div>
        )
    }
}

export default AddNum;
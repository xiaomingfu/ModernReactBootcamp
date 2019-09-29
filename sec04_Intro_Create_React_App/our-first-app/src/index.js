import foods from "./foods";
import {choice, remove} from "./helper";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    render(){
        let fruit = choice(foods);
        console.log(`I'd like one ${fruit}, please`);
        console.log(`Here you go: ${fruit}`);
        let fruitleft = remove(foods, fruit);
        console.log(`I'm sorry, we're all out. We have ${fruitleft.length} others left.`)
        return (
            <div>
                <p>I'd like one {fruit}, please</p>
                <p>Here you go: {fruit}</p>
                <p>Delicious! May I have another?</p>
                <p>I'm sorry, we're all out. We have {fruitleft.length} others left.</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
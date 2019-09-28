function getNumber() {
    return Math.floor(Math.random() * 10 + 1);
}
class NumberPicker extends React.Component {
    render() {
        const number = getNumber();
        let msg;
        if(number === 7){
            msg = 
            <div>
                <h2>Congrats</h2>
                <img src="https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            </div>
        }else{
            msg = <p>Sorry You Lose!</p>
        }
        return (
            <div>
                 <h1>Your number is...{number}</h1>
                 {msg}
                 {/* <p>{number === 7 ? "Congrats" : "Sorry, you lost."}</p>
                {number === 7 &&  <img src="https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>}  */}  
            </div>
        );
    }
}

ReactDOM.render(<NumberPicker />, document.getElementById('root'));
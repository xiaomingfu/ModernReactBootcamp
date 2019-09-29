class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Slot Machine!</h1>
                <Machine arr = {["O", "X", "O"]} />
                <Machine arr = {["O", "O", "O"]} />
                <Machine arr = {["X", "X", "O"]} />
            </div>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
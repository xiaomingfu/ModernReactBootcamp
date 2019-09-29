class App extends React.Component {
    render() {
        return (
            <div>
                <Friend 
                    name = "Marry"
                    hobbies = {["swimming", "running", "reading"]}
                />
                 <Friend 
                    name = "Herry"
                    hobbies = {["dancing", "reading"]}
                />
            </div>
            
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
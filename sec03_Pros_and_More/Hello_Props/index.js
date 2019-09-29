class App extends React.Component{
    render(){
        return(
            <div>
                <Hello 
                    from = "Carle"  
                    to = "Dawn" 
                    bangs = {4}
                    img = "https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    data = {[1,2,3,4,5]}
                    isFunny />
                <Hello from = "Tom"  to = "John" />
            </div>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('root'));
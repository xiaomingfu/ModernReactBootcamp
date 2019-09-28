function getMood(){
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random()*moods.length)];
}

class JSXDemo extends React.Component {
    render(){
        return (
            <div>
                <h1>My Image!</h1>
                <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                <h1>My mood is: {getMood()}</h1>
            </div>
        );
    }
};

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
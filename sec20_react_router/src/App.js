import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

const Hater = () => <h1>I HATE DOGS!</h1>

class App extends Component {
  render() {
    return (
      <div className="App" >

        <Route path="/" component={About} />
        <Route path="/dog" component={Dog} />
        <Route path="/dog/hater" component={Hater} />
        <Route path="/contact" component={Contact} />

      </div>


    );
  }

}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Food from './Food';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* Render prop can take more props and more explict */}
          {/* <Route exact path="/:name"
            render={(routeProps) => <Food name={routeProps} />} /> */}
          {/* component prop is simplier */}
          <Route exact path="/:name"
            component={Food} />
          {/* <Route exact path="/food/:name/drink/:name"
            component={Food} /> */}

        </Switch>


      </div>
    );
  }
}


export default App;

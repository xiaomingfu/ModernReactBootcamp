import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Food from './Food';
import Meal from './Meal';
import Search from './Search';
import { Route, Switch, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Switch> */}
        {/* Render can take more props and more explict */}
        {/* <Route exact path="/food/:name"
            render={(routeProps) => <Food name={routeProps} />} /> */}

        {/* component is simplier but it will not work for more than one props */}
        <Route exact path="/food/:name"
          component={Food} />

        <Route exact path="/food/:foodName/drink/:drinkName"
          component={Meal} />
        <Route exact path="/" render={() => <Search />} />

        {/* 404 page */}
        {/* <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
        </Switch> */}

      </div>
    );
  }
}


export default App;

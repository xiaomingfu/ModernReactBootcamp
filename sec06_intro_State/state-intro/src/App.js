import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Rando from './Rando';

function App() {
  return (
    <div className="App">
      <Rando maxNum = {7}/>
    </div>
  );
}

export default App;

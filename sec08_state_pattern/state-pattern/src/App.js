import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddNum from './AddNum';
import RunLottery from './RunLottery';

function App() {
  return (
    <div className="App">
      <RunLottery />
      <RunLottery title='Mini Daily' maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;

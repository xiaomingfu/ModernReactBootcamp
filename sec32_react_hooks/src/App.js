import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CouterClass from "./CouterClass";
import CouterHook from "./CouterHook";
import Toggler from "./Toggler";

function App() {
  return (
    <div className="App">
      <CouterClass />
      <CouterHook />
      <Toggler />
    </div>
  );
}

export default App;

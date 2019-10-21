import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CouterClass from "./CouterClass";
import CouterHook from "./CouterHook";
import Toggler from "./Toggler";
import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHook from "./SimpleFormHook";
function App() {
  return (
    <div className="App">
      <CouterClass />
      <CouterHook />
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHook />
    </div>
  );
}

export default App;

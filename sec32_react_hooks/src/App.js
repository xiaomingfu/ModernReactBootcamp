import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CouterClass from "./CouterClass";
import CouterHook from "./CouterHook";
import Toggler from "./Toggler";
import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHook from "./SimpleFormHook";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";
function App() {
  return (
    <div className="App">
      {/* <CouterClass />
      <CouterHook />
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHook />
      <Clicker /> */}
      <SWMovies />
    </div>
  );
}

export default App;

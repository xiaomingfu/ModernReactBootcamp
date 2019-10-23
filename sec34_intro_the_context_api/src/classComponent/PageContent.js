import React, { Component } from "react";
import { ThemeContext } from "./context/ThemeContext";
export default class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const style = {
      backgroundColor: isDarkMode ? "black" : "white",
      width: "100vw",
      height: "100vh"
    };
    return <div style={style}>{this.props.children}</div>;
  }
}

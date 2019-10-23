import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };
  }
  render() {
    return (
      <ThemeContext.Provider vaule={{ ...this.state, tasteLikeChicken: true }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

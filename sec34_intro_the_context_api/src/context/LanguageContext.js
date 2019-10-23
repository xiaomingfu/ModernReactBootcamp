import React, { createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: "chinese" };
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(e) {
    this.setState({ language: e.target.value });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

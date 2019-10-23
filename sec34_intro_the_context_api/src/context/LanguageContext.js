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

export const withLanguageContext = function(Component) {
  const innerFunction = function(props) {
    return (
      <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
      </LanguageContext.Consumer>
    );
  };

  return innerFunction;
};

import React, { Component } from "react";

export default class PageContent extends Component {
  render() {
    const style = { backgroundColor: "azure", width: "100vw", height: "100vh" };
    return <div style={style}>{this.props.children}</div>;
  }
}

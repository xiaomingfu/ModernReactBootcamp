import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const style = {
    backgroundColor: isDarkMode ? "black" : "white",
    width: "100vw",
    height: "100vh"
  };
  return <div style={style}>{props.children}</div>;
}

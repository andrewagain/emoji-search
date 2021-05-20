import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <center><img src="https://www.chalkface.pro/cdn/react/search-title.png" /></center>
      </header>
    );
  }
}

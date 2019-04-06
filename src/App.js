import React, { PureComponent } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact"
import Footer from "./Footer"
import Popups from "./Popups"
import "./App.css";
import filterEmoji from "./filterEmoji";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Gallery />
        <About />
        <Contact />
        <Footer />
        <Popups />
      </div>
    );
  }
}
export default App;

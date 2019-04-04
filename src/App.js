import React, { PureComponent } from "react";
import Header from "./Header";
import Image from "./Image";
import Gallery from "./Gallery";
import Footer from "./Footer";
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
        <Header />
        <Image />
        <Gallery />
        <Footer />
        {/*<SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />*/}
      </div>
    );
  }
}
export default App;

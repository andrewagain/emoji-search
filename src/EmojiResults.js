import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import { NotificationContainer, NotificationManager } from "react-notifications";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

import "react-notifications/lib/notifications.css";

// import "react-toastify/dist/ReactToastify.css";

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array,
  };

  state = {
    emojisSelected: null,
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
    this.clipboard.on("success", (e) => {
      this.setState({ emojisSelected: e.text });
      NotificationManager.success(`Emoji ${e.text} copied!`, null, 900);
    });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <>
        <div className="component-emoji-results">
          {this.props.emojiData.map((emojiData) => (
            <EmojiResultRow selected={this.state.emojisSelected} key={emojiData.title} symbol={emojiData.symbol} title={emojiData.title} />
          ))}
        </div>
        <NotificationContainer />
      </>
    );
  }
}

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
    selected: PropTypes.any,
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div className="component-emoji-result-row copy-to-clipboard relative" data-clipboard-text={this.props.symbol}>
        <img alt={this.props.title} src={src} />
        {this.props.selected === this.props.symbol && <img alt={this.props.title} className="placeholder" src={src} />}
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
      </div>
    );
  }
}

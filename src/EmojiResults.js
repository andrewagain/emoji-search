import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

class EmojiResults extends PureComponent {
  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map((emojiData) =>
              <EmojiResultRow
                key={emojiData.title}
                symbol={emojiData.symbol}
                title={emojiData.title}
              />
          )}
      </div>
    );
  }
}
EmojiResults.propTypes = {
  emojiData: PropTypes.array,
};
export default EmojiResults;

import React from 'react';
import PropTypes from 'prop-types';

import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

class EmojiResults extends React.Component {
  render() {
    return (
      <div className="component-emoji-results">
        {
          this.props.emojiData.map((emojiData) => {
            return (
              <EmojiResultRow
                key={emojiData.symbol}
                symbol={emojiData.symbol}
                title={emojiData.title}
              />
            );
          })
        }
      </div>
    );
  }
}
EmojiResults.propTypes = {
  emojiData: PropTypes.array,
};
export default EmojiResults;

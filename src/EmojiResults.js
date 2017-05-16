import React from 'react';
import PropTypes from 'prop-types';
import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

export default function EmojiResults (props) {
  return (
    <div className="component-emoji-results">
      {props.emojiData.map((emojiData) => {
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

EmojiResults.propTypes = {
  emojiData: PropTypes.array,
};
import React, { memo } from "react";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

function EmojiResults({emojiData = []}) {

  return (
    <div className="component-emoji-results">
      {emojiData.map(emojiData => (
        <EmojiResultRow
          key={emojiData.title}
          {...emojiData}
        />
      ))}
    </div>
  );
}

export default memo(EmojiResults)
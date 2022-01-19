import React, { useState, memo } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";


function App (){
  const [filter, setFilter] = useState(filterEmoji("", 20))
  
  const handleSearchChange = event => {
    setFilter( filterEmoji(event.target.value, 20) );
  };
  return (
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filter} />
    </div>
  );  
}

export default memo(App)
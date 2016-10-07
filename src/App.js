import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import emojiList from './emojiList.json';

class App extends React.Component {
  handleSearchChange = (event) => {
    console.log('search input changed to:', event.target.value);
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchInput
          textChange={this.handleSearchChange}
        />
        <EmojiResults
          emojiData={emojiList}
        />
      </div>
    );
  }
}
export default App;

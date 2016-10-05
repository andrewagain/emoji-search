import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';

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
          emojiData={[
            {
              title: 'Fire',
              symbol: '🔥',
            },
            {
              title: 'Grinning',
              symbol: '😀',
            },
            {
              title: 'Smile Cat',
              symbol: '😺',
            }
          ]}
        />
      </div>
    );
  }
}
export default App;

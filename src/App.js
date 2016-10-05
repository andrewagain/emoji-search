import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchInput/>
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

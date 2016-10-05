import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';

class App extends React.Component {
  render() {
    return (
      <div>
        Welcome to App
        <Header/>
        <SearchInput/>
        <EmojiResults/>
      </div>
    );
  }
}
export default App;

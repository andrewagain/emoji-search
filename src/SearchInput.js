import React from 'react';

class SearchInput extends React.Component {
  handleChange = () => {
    console.log('You changed the search input.');
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default SearchInput;

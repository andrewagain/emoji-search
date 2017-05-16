import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

export default function SearchInput (props) {
  return (
    <div className="component-search-input">
      <div>
        <input
          onChange={props.textChange}
        />
      </div>
    </div>
  )
}

SearchInput.propTypes = {
  textChange: PropTypes.func,
};
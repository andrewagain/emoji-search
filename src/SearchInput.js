import React, { memo } from "react";

import "./SearchInput.css";

function SearchInput ({textChange = f => f}){

  const handleChange = event => {
    textChange(event);
  };

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  );
}

export default memo(SearchInput);
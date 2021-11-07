import React, { useState } from "react";

import "./SearchInput.css"

function SearchInput( {handleOnChange} ) 
  {

  return (
    <div className="search-input">
      <input type="text" placeholder="Find User..."
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
      />
    </div>
  )
}

export default SearchInput;
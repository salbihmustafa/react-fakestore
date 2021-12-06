import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.onSearchSubmit(searchTerm); //move searchTerm to App.js
  }

  return (
    <React.Fragment>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Search;

import React, { useState, useEffect } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
      setSearchTerm(e.target.value);
  }

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm])

  return (
    <div className="ui icon input">
      <input type="text" placeholder="Search..." value={searchTerm} onChange={searchHandler}/>
      <i className="search icon"></i>
    </div>
  );
};

export default Search;

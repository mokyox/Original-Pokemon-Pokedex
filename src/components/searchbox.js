import React, { Component } from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center">
      <input
        type="search"
        placeholder="Search Pokemon"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

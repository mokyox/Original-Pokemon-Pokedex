import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center p-2 m-2">
      <form>
        <div className="form-group col-sm-4 col-xs-1 col-lg-5 mx-auto">
          <input
            className="form-control"
            type="search"
            placeholder="Search Pokemon"
            onChange={searchChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;

import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center p-2 m-2">
      <form>
        <div className="form-group col-lg-4 col-sm-5 col-xs-2 mx-auto">
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

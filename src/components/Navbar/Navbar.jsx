import React from "react";
import { handleSubmit } from "../utils";
import { PageNavbar } from "./styles";

const Navbar = ({ searchChange }) => {
  return (
    <>
      <PageNavbar className="navbar navbar-dark bg-dark fixed-top justify-content-between">
        <p>Pokedex</p>
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Pokemon"
            aria-label="search"
            onChange={searchChange}
          />
        </form>
      </PageNavbar>
    </>
  );
};

export default Navbar;

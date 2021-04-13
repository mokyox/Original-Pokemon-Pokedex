import React from "react";
import { handleSubmit } from "../utils";
import { PageNavbar, StyledInput } from "./styles";

const Navbar = ({ searchChange }) => {
  return (
    <>
      <PageNavbar>
        <p>Pokedex</p>
        <form onSubmit={handleSubmit}>
          <StyledInput
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

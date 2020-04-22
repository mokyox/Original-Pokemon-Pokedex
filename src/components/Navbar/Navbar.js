import React from "react";
import { handleSubmit } from "../utils";

const Navbar = ({ searchChange }) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <h1>Pokedex</h1>
                <form className="form-inline" onSubmit={handleSubmit}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search Pokemon"
                        aria-label="search"
                        onChange={searchChange}
                    />
                </form>
            </nav>
        </div>
    );
};

export default Navbar;

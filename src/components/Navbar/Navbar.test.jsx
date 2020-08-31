import React from "react";
import Navbar from "./Navbar";
import renderer from "react-test-renderer";

describe("<Navbar/>", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<Navbar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

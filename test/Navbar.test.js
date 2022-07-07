import Navbar from "../partials/Navbar";
import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
test('should navbar render', () => { 
    render(<Navbar />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeVisible();
});
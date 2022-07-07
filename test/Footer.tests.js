import Footer from "../partials/Navbar";
import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
test('should render footer', () => { 
    render(<Footer />);
    const navbarElement = screen.getByTestId("footer");
    expect(navbarElement).toBeInTheDocument();
});
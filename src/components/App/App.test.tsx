import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

const text = {
    sample: "Welcome to React Spectrum!",
};

// TODO: add proper tests for App component
test("App renders properly", () => {
    render(<App />);
    expect(screen.getByText(text.sample)).toBeInTheDocument();
});

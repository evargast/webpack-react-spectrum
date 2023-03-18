import React from "react";
import { render, screen } from "test-utils";

import { App } from "./App";

const text = {
    sample: "Welcome to React Spectrum!",
};

// TODO: add proper tests for App component
test("App renders properly", () => {
    render(<App />);
    expect(screen.getByText(text.sample)).toBeInTheDocument();
});

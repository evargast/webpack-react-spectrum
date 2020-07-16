import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

const text = {
    sample: "Hello world",
};

test("renders", () => {
    render(<App text={text.sample} />);
    expect(screen.getByText(text.sample)).toBeInTheDocument();
});

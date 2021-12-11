import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
      const div = document.createElement("div");
      render(<App />, div);
});

it("emoji list rendered succes", () => {
      render(<App />);
      const items = screen.getAllByText(/Click to copy emoji/i);
      expect(items.length).toEqual(20);
});

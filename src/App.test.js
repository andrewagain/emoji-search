import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("renders without crashing", () => {
      const div = document.createElement("div");
      render(<App />, div);
});

it("emoji list rendered success", () => {
      render(<App />);
      const items = screen.getAllByText(/Click to copy emoji/i);
      expect(items.length).toEqual(20);
});

it(" emoji list should be rendered correctly ", () => {
      render(<App />);
      let input = screen.getByPlaceholderText("Search");

      //write something in the input
      const name = "grin";
      userEvent.type(input, name);

      //assertion
      const items = screen.getAllByText(/Click to copy emoji/i);
      expect(items.length).toEqual(3);
});

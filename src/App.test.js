import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe('The app loads with 20 emojis', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
  
  it('renders 20 emoji objects', () => {
    const div = document.createElement("div");
    const DOM = ReactDOM.render(<App />, div);
    expect(DOM.state.filteredEmoji.length).toBe(20)
  })
});

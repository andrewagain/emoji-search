// aim is to test my react component. I want to test:
// 1. that the full project loads (<App />)
// 2. if I give the search an input, that the emoji I want is returned
// import React from "react";
import { render } from "react-testing-library";
import App from "../App";

describe("<App />", () => {
  it("should render the full app", () => {
    const { getByText } = render(App);
    console.log("hi");
    // expect(myApp).toBeDefined();
  });
});

function sum(num) {
  return (num += 1);
}

describe("testing", () => {
  it("should add one to my number", () => {
    expect(sum(1)).toBe(2);
  });
});

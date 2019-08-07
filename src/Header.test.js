import React from "react"
import { shallow } from "enzyme"
import Header from "./Header"

describe('Header component', () => {
  it("renders title", () => {
    const wrapper = shallow(<Header />)
    const title   = "Emoji Search"
    expect(wrapper.contains(title)).toEqual(true)
  })

  it("renders header tag", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.exists('.component-header')).toEqual(true)
  })
});


import React from "react"
import { shallow } from "enzyme"
import Header from "./Header"

describe('Header component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it("renders title", () => {
    const title = "Emoji Search"
    expect(wrapper.contains(title)).toEqual(true)
  })

  it("renders header tag", () => {
    expect(wrapper.exists('.component-header')).toEqual(true)
  })
});


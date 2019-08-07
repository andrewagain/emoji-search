import React from "react"
import { shallow } from "enzyme"
import EmojiResultRow from "./EmojiResultRow"

describe('EmojiResultRow component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<EmojiResultRow
      key={"100"} symbol={"💯"} title={"100"} />)
  })

  it("should has props", () => {
    const neededProps = { title: "100", symbol: "💯" }
    expect(wrapper.instance().props).toEqual(neededProps)
  })
})

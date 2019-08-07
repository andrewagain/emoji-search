import React from "react"
import { shallow, mount } from "enzyme"
import App from "./App"
import Header from "./Header"
import SearchInput from "./SearchInput"
import EmojiResults from "./EmojiResults"

describe('App component', () => {
  it("renders without crashing", () => {
    shallow(<App />)
  })

  it('renders 20 initial emojis', () => {
    const wrapper = mount(<App />)
    expect(wrapper.state('filteredEmoji')).toHaveLength(20)
  })

  describe('should has one', () => {
    it('Header component', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find(Header)).toHaveLength(1)
    })

    it('SearchInput component', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find(SearchInput)).toHaveLength(1)
    })

    it('EmojiResults component', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find(EmojiResults)).toHaveLength(1)
    })
  })
})


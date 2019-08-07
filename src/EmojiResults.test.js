import React from "react"
import { shallow } from "enzyme"
import EmojiResults from "./EmojiResults"
import EmojiResultRow from "./EmojiResultRow"

describe('EmojiResults component', () => {

  let wrapper
  describe('with empty emojiData', () => {
    beforeEach(() => wrapper = shallow(<EmojiResults emojiData={[]}/>))

    it('renders without crashing', () => { wrapper })

    it('should not shows EmojiResultRow component', () => {
      expect(wrapper.find(EmojiResultRow)).toHaveLength(0)
    })
  })

  describe('with emojiData', () => {
    let data = [{
      "title": "100",
      "symbol": "💯",
      "keywords": "hundred points symbol symbol wow wow win win perfect perfect parties parties"
    }]

    beforeEach(() => wrapper = shallow(<EmojiResults emojiData={data}/>))

    it('renders without crashing', () => { wrapper })

    it('should shows EmojiResultRow component', () => {
      expect(wrapper.find(EmojiResultRow)).toHaveLength(1)
    })
  })
})

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import EmojiResultsRow from './EmojiResultRow.js';
configure({adapter: new Adapter()});


describe("EmojiResultRow tests", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <EmojiResultsRow
      symbol = '💯'
      title = '100'
      />
    )
  })

  it("Should correctly provide the src for a 100 emoji", () => {
    expect(wrapper.find("img").prop("src")).toEqual("//cdn.jsdelivr.net/emojione/assets/png/1f4af.png");
  })

  it("Should provide the name of the emoji as 100", () => {
    expect(wrapper.text().includes('100')).toBe(true)
  })
  
})
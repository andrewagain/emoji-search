import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import EmojiResults from './EmojiResults';
configure({adapter: new Adapter()});

import EmojiResultRow from "./EmojiResultRow";

describe('EmojiResults test', () => {
  let wrapper

  let exampleEmojiData = [
    {
      title: '100',
      symbol: 'one hundred symbol',
      keywords: 'hundred points symbol symbol wow wow win win perfect perfect parties parties'
    }
  ]

  beforeEach(() => {
    wrapper = mount(
      <EmojiResults
      emojiData = {exampleEmojiData}
      />
    )
  })

  it('Passes in the correct title', () => {
    expect(wrapper.find(EmojiResultRow).props().title).toBe('100');
  });

  it('Passes in the correct title', () => {
    expect(wrapper.find(EmojiResultRow).props().symbol).toBe('one hundred symbol');
  });
})
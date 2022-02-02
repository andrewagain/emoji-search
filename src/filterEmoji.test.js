import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import filterEmoji from './filterEmoji.js'
configure({adapter: new Adapter()});

describe('filterEmoji test', () => {
const inputText = 'smile'
const results = filterEmoji('smile', 20)

  it('Should show a grinning face emoji', () => {
    expect(results[0].title).toBe("Grinning");
    expect(results[0].keywords).toBe("grinning face happy smiley emotion emotion");
  });

});
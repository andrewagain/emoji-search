import React, { PureComponent } from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import EmojiResults from '../EmojiResults';

configure({adapter: new Adapter()});

const results = shallow(<EmojiResults />);

describe('Shows a new set of emojis', () => {
  it("Shows happy emojis", () => {   
  });
});


// Running into a similar issue as with the SearchInput.test.js file
// It errors out, not being able to define this.props.emojiData
// Unsure how to load in props to a componenet in a test, if that's necessary
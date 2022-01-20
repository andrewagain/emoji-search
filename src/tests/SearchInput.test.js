import React, { PureComponent } from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SearchInput from '../SearchInput';
import PropTypes from "prop-types";

configure({adapter: new Adapter()});

const search = shallow(<SearchInput />);

describe('Allows a user to fill out input box', () => {
  it("Saves user input", () => {   
    let emojiInput = search.find('input').first()
    emojiInput.simulate('change', {
      target: { value: 'smile'},
    });
    emojiInput = search.find('input').first()
    expect(emojiInput.props().value).toEqual('smile')
  });
});

// Getting error '.textChange' is not a function
// Maybe an import issue?
// Having a hard time understanding where .textChange(event) is coming from below:

// export default class SearchInput extends PureComponent {
//   static propTypes = {
//     textChange: PropTypes.func
//   };
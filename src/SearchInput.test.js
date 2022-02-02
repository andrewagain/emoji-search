import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import SearchInput from './SearchInput';
configure({adapter: new Adapter()});

describe("SearchInput tests", () => {
  let wrapper, onChangeMock

  beforeEach(() => {
    onChangeMock = jest.fn()
    wrapper = mount(
      <SearchInput
      textChange = {onChangeMock}
      />
    )
  })

  it('example test', () => {
    expect(true).toBe(true)
  })

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.find("input").simulate('change', { target: { value: 'smile' } });
    expect(onChangeMock).toHaveBeenCalled()
  })

})
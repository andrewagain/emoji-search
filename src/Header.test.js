import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from './Header';

configure({adapter: new Adapter()});

const header = shallow(<Header />);

describe('Test header images', () => {
    it("renders the grinning cat image", () => {   
        expect(header.find("img.grin-cat").prop("src")).toEqual("//cdn.jsdelivr.net/emojione/assets/png/1f638.png");
     });

     it("renders the smiling cat image", () => { 
      expect(header.find("img.smile-cat").prop("src")).toEqual("//cdn.jsdelivr.net/emojione/assets/png/1f63a.png");
    });
 });

 describe('Test header text', () => {
   it("displays the text 'Emoji Search'", () => {
     expect(header.text().includes('Emoji Search')).toBe(true);
   })
 }) 
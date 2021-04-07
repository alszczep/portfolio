import React from 'react';
import { shallow } from 'enzyme';
import Home from './../src/components/Home';

describe("Home component", () => {
    it("should render main element with class mainPage", () => {
        const wrapper = shallow(<Home/>);
        const mainElement = wrapper.find('main.mainPage');
        expect(mainElement.exists()).toBe(true);
    })
    it("should contain h1, h2, h6 elements", () => {
        const wrapper = shallow(<Home/>);
        const h1 = wrapper.find('h1');
        expect(h1.exists()).toBe(true);
        const h2 = wrapper.find('h2');
        expect(h2.exists()).toBe(true);
        const h6 = wrapper.find('h6');
        expect(h6.exists()).toBe(true);
    })
})

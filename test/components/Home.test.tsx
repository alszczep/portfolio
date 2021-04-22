import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/components/Home';

describe("Home component", () => {
    it("should render main element with classes main and home", () => {
        const wrapper = shallow(<Home/>);
        const mainElement = wrapper.find('main.main.home');
        expect(mainElement.exists()).toBe(true);
    })
    it("should contain h1, h2, h6 elements with classes", () => {
        const wrapper = shallow(<Home/>);
        const h1 = wrapper.find('h1.home__header.home__header--first');
        expect(h1.exists()).toBe(true);
        const h2 = wrapper.find('h2.home__header.home__header--second');
        expect(h2.exists()).toBe(true);
        const h6 = wrapper.find('h6.home__header.home__header--mobile');
        expect(h6.exists()).toBe(true);
    })
})

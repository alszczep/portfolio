import React from 'react';
import { shallow } from 'enzyme';
import Skills from './../src/components/Skills';

describe("Skills component", () => {
    it("should render main element with class skillsPage", () => {
        const wrapper = shallow(<Skills/>);
        const mainElement = wrapper.find('main.skillsPage');
        expect(mainElement.exists()).toBe(true);
    })
})
import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../src/components/Skills';
import { skillsData } from '../../src/data/skillsData';

describe("Skills component", () => {
    it("should render main element with class skillsPage", () => {
        const wrapper = shallow(<Skills/>);
        const mainElement = wrapper.find('main.skillsPage');
        expect(mainElement.exists()).toBe(true);
    })
    it("should render main element with class skillsPage", () => {
        const wrapper = shallow(<Skills/>);
        const iconBoxes = wrapper.find('IconBox');
        expect(iconBoxes.length).toBe(skillsData.length);
    })
})
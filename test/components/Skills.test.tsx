import React from 'react';
import { shallow } from 'enzyme';
import Skills from '../../src/components/Skills';
import { skillsData } from '../../src/data/skillsData';

describe("Skills component", () => {
    it("should render main element with classes main and skills", () => {
        const wrapper = shallow(<Skills/>);
        const mainElement = wrapper.find('main.main.skills');
        expect(mainElement.exists()).toBe(true);
    })
    it("should render correct amount of icon boxes", () => {
        const wrapper = shallow(<Skills/>);
        const iconBoxes = wrapper.find('IconBox');
        expect(iconBoxes.length).toBe(skillsData.length);
    })
})
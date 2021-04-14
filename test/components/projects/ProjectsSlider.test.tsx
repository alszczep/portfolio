import React from 'react';
import { shallow } from 'enzyme';
import ProjectsSlider from '../../../src/components/projects/ProjectsSlider';

describe("ProjectsSlider component", () => {
    it("should render section with class projectsSlider", () => {
        const wrapper = shallow(<ProjectsSlider/>);
        const section = wrapper.find('section.projectsSlider');
        expect(section.exists()).toBe(true);
    })
    it("should render chevrons", () => {
        const wrapper = shallow(<ProjectsSlider/>);
        const chevronLeft = wrapper.find('VscChevronLeft');
        const chevronRight = wrapper.find('VscChevronRight');
        expect(chevronLeft.exists()).toBe(true);
        expect(chevronRight.exists()).toBe(true);
    })
    it("should render section with class projectsList", () => {
        const wrapper = shallow(<ProjectsSlider/>);
        const section = wrapper.find('section.projectsList');
        expect(section.exists()).toBe(true);
    })
})
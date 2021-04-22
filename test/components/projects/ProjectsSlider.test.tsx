import React from 'react';
import { shallow } from 'enzyme';
import ProjectsSlider from '../../../src/components/projects/ProjectsSlider';

describe("ProjectsSlider component", () => {
    it("should render section with class slider", () => {
        const wrapper = shallow(<ProjectsSlider/>);
        const section = wrapper.find('section.slider');
        expect(section.exists()).toBe(true);
    })
    it("should render chevrons", () => {
        const wrapper = shallow(<ProjectsSlider/>);
        const chevronLeft = wrapper.find('VscChevronLeft.slider__chevron.slider__chevron--left');
        const chevronRight = wrapper.find('VscChevronRight.slider__chevron.slider__chevron--right');
        expect(chevronLeft.exists()).toBe(true);
        expect(chevronRight.exists()).toBe(true);
    })
    it("should render section with class slider__list", () => {
        const wrapper = shallow(<ProjectsSlider/>);
        const section = wrapper.find('section.slider__list');
        expect(section.exists()).toBe(true);
    })
})
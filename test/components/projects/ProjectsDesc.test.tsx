import React from 'react';
import { shallow } from 'enzyme';
import ProjectsDesc from '../../../src/components/projects/ProjectsDesc';

describe("ProjectsDesc component", () => {
    it("should render section with class description", () => {
        const wrapper = shallow(<ProjectsDesc/>);
        const section = wrapper.find('section.description');
        expect(section.exists()).toBe(true);
    })
    it("should render header 1 with class description__name", () => {
        const wrapper = shallow(<ProjectsDesc/>);
        const header = wrapper.find('h1.description__name');
        expect(header.exists()).toBe(true);
    })
    describe("Left section", () => {
        it("should render section with classes description__section and description__section--left", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.description__section.description__section--left');
            expect(section.exists()).toBe(true);
        })
    })
    describe("Right section", () => {
        it("should render section with classes description__section and description__section--right", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.description__section.description__section--right');
            expect(section.exists()).toBe(true);
        })
        it("should render image with class description__image", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.description__section--right');
            const image = section.find('img.description__image');
            expect(image.exists()).toBe(true);
        })
        it("should render section with class description__tech", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.description__section--right');
            const childSection = section.find('section.description__tech');
            expect(childSection.exists()).toBe(true);
        })
        it("should render section with class description__links", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.description__section--right');
            const childSection = section.find('section.description__links');
            expect(childSection.exists()).toBe(true);
        })
    })
})
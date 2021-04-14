import React from 'react';
import { shallow } from 'enzyme';
import ProjectsDesc from '../../../src/components/projects/ProjectsDesc';

describe("ProjectsDesc component", () => {
    it("should render section with class projectsDesc", () => {
        const wrapper = shallow(<ProjectsDesc/>);
        const section = wrapper.find('section.projectsDesc');
        expect(section.exists()).toBe(true);
    })
    it("should render header 1 with class projectName", () => {
        const wrapper = shallow(<ProjectsDesc/>);
        const header = wrapper.find('h1.projectName');
        expect(header.exists()).toBe(true);
    })
    describe("Left section", () => {
        it("should render section with class projectLeft", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.projectLeft');
            expect(section.exists()).toBe(true);
        })
    })
    describe("Right section", () => {
        it("should render section with class projectRight", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.projectRight');
            expect(section.exists()).toBe(true);
        })
        it("should render image", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.projectRight');
            const image = section.find('img');
            expect(image.exists()).toBe(true);
        })
        it("should render section with class projectTech", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.projectRight');
            const childSection = section.find('section.projectTech');
            expect(childSection.exists()).toBe(true);
        })
        it("should render section with class gitAndDemo", () => {
            const wrapper = shallow(<ProjectsDesc/>);
            const section = wrapper.find('section.projectRight');
            const childSection = section.find('section.gitAndDemo');
            expect(childSection.exists()).toBe(true);
        })
    })
})
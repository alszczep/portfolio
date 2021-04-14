import React from 'react';
import { shallow } from 'enzyme';
import ProjectLink from '../../../src/components/projects/ProjectLink';

describe("ProjectLink component", () => {
    it("should render anchor with class projectLink", () => {
        const wrapper = shallow(<ProjectLink/>);
        const anchor = wrapper.find('a.projectLink');
        expect(anchor.exists()).toBe(true);
    })
    it("should render header 1", () => {
        const wrapper = shallow(<ProjectLink/>);
        const header = wrapper.find('h1');
        expect(header.exists()).toBe(true);
    })
})
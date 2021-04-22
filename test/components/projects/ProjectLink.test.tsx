import React from 'react';
import { shallow } from 'enzyme';
import ProjectLink from '../../../src/components/projects/ProjectLink';

describe("ProjectLink component", () => {
    it("should render anchor with class description__link", () => {
        const wrapper = shallow(<ProjectLink/>);
        const anchor = wrapper.find('a.description__link');
        expect(anchor.exists()).toBe(true);
    })
    it("should render header 1 with class description__link-name", () => {
        const wrapper = shallow(<ProjectLink/>);
        const header = wrapper.find('h1.description__link-name');
        expect(header.exists()).toBe(true);
    })
})
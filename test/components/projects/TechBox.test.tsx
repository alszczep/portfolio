import React from 'react';
import { shallow } from 'enzyme';
import TechBox from '../../../src/components/projects/TechBox';

describe("TechBox component", () => {
    it("should render section with class tech-box", () => {
        const wrapper = shallow(<TechBox/>);
        const section = wrapper.find('section.tech-box');
        expect(section.exists()).toBe(true);
    })
    it("should render header 5 with class tech-box__name", () => {
        const wrapper = shallow(<TechBox/>);
        const section = wrapper.find('section.tech-box');
        const header = section.find('h5.tech-box__name');
        expect(header.exists()).toBe(true);
    })
})
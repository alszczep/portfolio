import React from 'react';
import { shallow } from 'enzyme';
import TechBox from '../../../src/components/projects/TechBox';

describe("TechBox component", () => {
    it("should render section with class techBox", () => {
        const wrapper = shallow(<TechBox/>);
        const section = wrapper.find('section.techBox');
        expect(section.exists()).toBe(true);
    })
    it("should render header 5", () => {
        const wrapper = shallow(<TechBox/>);
        const section = wrapper.find('section.techBox');
        const header = section.find('h5');
        expect(header.exists()).toBe(true);
    })
})
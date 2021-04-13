import React from 'react';
import { shallow } from 'enzyme';
import ExternalLinks from '../../../src/components/footer/ExternalLinks';

describe("ExternalLinks component", () => {
    it("should render section with class externalLinks", () => {
        const wrapper = shallow(<ExternalLinks/>);
        const section = wrapper.find('section.externalLinks');
        expect(section.exists()).toBe(true);
    })
})
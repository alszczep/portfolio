import React from 'react';
import { shallow } from 'enzyme';
import ExternalLinks from '../../../src/components/footer/ExternalLinks';

describe("ExternalLinks component", () => {
    it("should render section with class external-links", () => {
        const wrapper = shallow(<ExternalLinks/>);
        const section = wrapper.find('section.external-links');
        expect(section.exists()).toBe(true);
    })
})
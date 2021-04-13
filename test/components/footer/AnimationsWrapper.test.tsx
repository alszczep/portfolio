import React from 'react';
import { shallow } from 'enzyme';
import AnimationsWrapper from './../../../src/components/footer/AnimationsWrapper';

describe("AnimationsWrapper component", () => {
    it("should render section with class animationsWrapper", () => {
        const wrapper = shallow(<AnimationsWrapper/>);
        const section = wrapper.find('section.animationsWrapper');
        expect(section.exists()).toBe(true);
    })
    it("should render label with class animationsLabel", () => {
        const wrapper = shallow(<AnimationsWrapper/>);
        const label = wrapper.find('label.animationsLabel');
        expect(label.exists()).toBe(true);
    })
    it("should render checkbox with class animationsCheckBox", () => {
        const wrapper = shallow(<AnimationsWrapper/>);
        const input = wrapper.find('input.animationsCheckBox');
        expect(input.exists()).toBe(true);
        expect(input.props().type).toStrictEqual('checkbox');
    })
})
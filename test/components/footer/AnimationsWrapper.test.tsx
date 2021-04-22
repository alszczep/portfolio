import React from 'react';
import { shallow } from 'enzyme';
import AnimationsWrapper from './../../../src/components/footer/AnimationsWrapper';

describe("AnimationsWrapper component", () => {
    it("should render section with animations-wrapper", () => {
        const wrapper = shallow(<AnimationsWrapper/>);
        const section = wrapper.find('section.animations-wrapper');
        expect(section.exists()).toBe(true);
    })
    it("should render label with class animations-wrapper__animations-label", () => {
        const wrapper = shallow(<AnimationsWrapper/>);
        const label = wrapper.find('label.animations-wrapper__animations-label');
        expect(label.exists()).toBe(true);
    })
    it("should render checkbox with class animations-wrapper__animations-check-box", () => {
        const wrapper = shallow(<AnimationsWrapper/>);
        const input = wrapper.find('input.animations-wrapper__animations-check-box');
        expect(input.exists()).toBe(true);
        expect(input.props().type).toStrictEqual('checkbox');
    })
})
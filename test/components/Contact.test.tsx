import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../src/components/Contact';

describe("Contact component", () => {
    it("should render main element with class contactPage", () => {
        const wrapper = shallow(<Contact/>);
        const mainElement = wrapper.find('main.contactPage');
        expect(mainElement.exists()).toBe(true);
    })
    it("should render form with name contact", () => {
        const wrapper = shallow(<Contact/>);
        const form = wrapper.find('form');
        expect(form.exists()).toBe(true);
        expect(form.props().name).toBe('contact');
    })
    it("should render hidden elements for netlify forms", () => {
        const wrapper = shallow(<Contact/>);
        const input1 = wrapper.find('input').at(0);
        expect(input1.exists()).toBe(true);
        expect(input1.props().type).toBe('hidden');
        expect(input1.props().name).toBe('form-name');
        expect(input1.props().value).toBe('contact');
        const input2 = wrapper.find('input').at(1);
        expect(input2.exists()).toBe(true);
        expect(input2.props().name).toBe('bot-field');
        const div = wrapper.find('div');
        expect(div.exists()).toBe(true);
        expect(div.props().hidden).toBe(true);
    })
    it("should render inputs (first name, last name, email), textarea and button", () => {
        const wrapper = shallow(<Contact/>);
        const input1 = wrapper.find('input').at(2);
        expect(input1.exists()).toBe(true);
        expect(input1.props().type).toBe('text');
        expect(input1.props().name).toBe('firstName');
        const input2 = wrapper.find('input').at(3);
        expect(input2.exists()).toBe(true);
        expect(input2.props().type).toBe('text');
        expect(input2.props().name).toBe('lastName');
        const input3 = wrapper.find('input').at(4);
        expect(input3.exists()).toBe(true);
        expect(input3.props().type).toBe('email');
        expect(input3.props().name).toBe('email');
        const textarea = wrapper.find('textarea');
        expect(textarea.exists()).toBe(true);
        expect(textarea.props().name).toBe('message');
        const button = wrapper.find('button');
        expect(button.exists()).toBe(true);
        expect(button.props().type).toBe('submit');
    })
})
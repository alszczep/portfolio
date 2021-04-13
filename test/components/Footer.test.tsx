import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/components/Footer';

describe("Footer component", () => {
    it("should render navigation", () => {
        const wrapper = shallow(<Footer/>);
        const footer = wrapper.find('footer.footer');
        expect(footer.exists()).toBe(true);
    })
    it("should render AnimationsWrapper component", () => {
        const wrapper = shallow(<Footer/>);
        const component = wrapper.find('AnimationsWrapper');
        expect(component.exists()).toBe(true);
    })
    it("should render ExternalLinks component", () => {
        const wrapper = shallow(<Footer/>);
        const component = wrapper.find('ExternalLinks');
        expect(component.exists()).toBe(true);
    })
    it("should render LangImages component", () => {
        const wrapper = shallow(<Footer/>);
        const component = wrapper.find('LangImages');
        expect(component.exists()).toBe(true);
    })
})

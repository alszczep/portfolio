import React from 'react';
import { shallow } from 'enzyme';
import LangImages from './../../../src/components/footer/LangImages';

describe("LangImages component", () => {
    it("should render section with class langImages", () => {
        const wrapper = shallow(<LangImages/>);
        const section = wrapper.find('section.langImages');
        expect(section.exists()).toBe(true);
    })
    it("should render two images", () => {
        const wrapper = shallow(<LangImages/>);
        const images = wrapper.find('img');
        expect(images.length).toBe(2);
    })
})
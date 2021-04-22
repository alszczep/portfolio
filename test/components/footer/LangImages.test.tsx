import React from 'react';
import { shallow } from 'enzyme';
import LangImages from './../../../src/components/footer/LangImages';

describe("LangImages component", () => {
    it("should render section with class lang-images", () => {
        const wrapper = shallow(<LangImages/>);
        const section = wrapper.find('section.lang-images');
        expect(section.exists()).toBe(true);
    })
    it("should render two images", () => {
        const wrapper = shallow(<LangImages/>);
        const images = wrapper.find('img.lang-images__lang-image');
        expect(images.length).toBe(2);
        expect(images.at(0).hasClass('lang-images__lang-image--pl')).toBe(true);
        expect(images.at(1).hasClass('lang-images__lang-image--eng')).toBe(true);
    })
})
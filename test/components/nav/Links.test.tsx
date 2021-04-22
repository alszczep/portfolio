import React from 'react';
import { shallow } from 'enzyme';
import Links from './../../../src/components/nav/Links';
import { engData } from '../../../src/data/lang/eng';

describe("Links component", () => {
    it("should render links for desktop", () => {
        const wrapper = shallow(<Links device={'desktop'}/>);
        const links = wrapper.find('Link.navigation__link.desktop-navigation__link');
        expect(links.length).toBe(Object.keys(engData.nav).length);
    })
    it("should render links for mobile", () => {
        const wrapper = shallow(<Links device={'mobile'}/>);
        const links = wrapper.find('Link.navigation__link.mobile-navigation__link');
        expect(links.length).toBe(Object.keys(engData.nav).length);
    })
})
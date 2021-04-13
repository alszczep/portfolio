import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../src/components/Nav';

describe("Nav component", () => {
    it("should render navigation for desktop", () => {
        const wrapper = shallow(<Nav/>);
        const nav = wrapper.find('nav.navigation');
        expect(nav.exists()).toBe(true);
    })
})

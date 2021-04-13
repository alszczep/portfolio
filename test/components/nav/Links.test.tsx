import React from 'react';
import { shallow } from 'enzyme';
import Links from './../../../src/components/nav/Links';
import { engData } from '../../../src/data/lang/eng';

describe("Links component", () => {
    it("should render links", () => {
        const wrapper = shallow(<Links/>);
        const links = wrapper.find('Link');
        expect(links.length).toBe(Object.keys(engData.nav).length);
    })
})
import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../../src/components/Projects';

describe("Projects component", () => {
    it("should render main element with classes main and projects", () => {
        const wrapper = shallow(<Projects/>);
        const mainElement = wrapper.find('main.main.projects');
        expect(mainElement.exists()).toBe(true);
    })
})
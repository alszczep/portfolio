import React from 'react';
import { shallow } from 'enzyme';
import Projects from './../src/components/Projects';

describe("Projects component", () => {
    it("should render main element with class projectsPage", () => {
        const wrapper = shallow(<Projects/>);
        const mainElement = wrapper.find('main.projectsPage');
        expect(mainElement.exists()).toBe(true);
    })
})
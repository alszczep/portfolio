import React from 'react';
import { shallow } from 'enzyme';
import IconBox from './../../../src/components/skills/IconBox';
import { FaSass } from 'react-icons/fa';
import { AnimationsContext } from '../../../src/App';
import { fireEvent } from '@testing-library/dom';

const testIconCustom = {
    name: 'HTML5',
    icon: '',
    iconColor: 'rgb(240,100,40)',
    iconType: 'custom',
    style: {}
}

const testIconReact = {
    name: 'SASS',
    icon: FaSass,
    iconColor: 'rgb(206,103,154)',
    iconType: 'react-icon',
    style: {}
}

describe("IconBox component", () => {
    it("should render section with class skillIcon", () => {
        const wrapper = shallow(<IconBox item={testIconCustom}/>);
        const section = wrapper.find('section.skillIcon');
        expect(section.exists()).toBe(true);
    })
    describe("Custom icon", () => {
        it("should render image ", () => {
            const wrapper = shallow(<IconBox item={testIconCustom}/>);
            const image = wrapper.find('img');
            expect(image.exists()).toBe(true);
        })
    })
    describe("React icons", () => {
        it("should render react icon component", () => {
            const wrapper = shallow(<IconBox item={testIconReact}/>);
            const image = wrapper.find(testIconReact.icon);
            expect(image.exists()).toBe(true);
        })
    })
})
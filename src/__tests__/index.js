import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import { MyComponent, MyComponent2 } from '../index';


// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {
    //var MyComponent = index.MyComponent
    it('calls componentDidMount', () => {
        sinon.spy(MyComponent.prototype, 'componentDidMount');
        const wrapper = mount(<MyComponent />);
        expect(MyComponent.prototype.componentDidMount.calledOnce).to.be.true;
       // MyComponent.prototype.componentDidMount.restore();
    });

    it('calls componentDidMount', () => {
        sinon.spy(MyComponent2.prototype, 'componentDidMount');
        const wrapper = mount(<MyComponent2 />);
        expect(MyComponent2.prototype.componentDidMount.calledOnce).to.be.true;
       // MyComponent.prototype.componentDidMount.restore();
    });

});


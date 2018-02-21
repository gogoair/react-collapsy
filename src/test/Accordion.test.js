import React from 'react';
import Accordion from '../index';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

describe('Accordion component', () => {
    beforeEach(() => {
        sinon.spy(Accordion.prototype, 'render');
    });

    afterEach(() => {
        Accordion.prototype.render.restore();
    });

    it('should mount', () => {
        shallow(<Accordion />);
        expect(Accordion.prototype.render.calledOnce).to.be.true;
    });

    it('should mount by default in "collapsed" mode', () => {
        const accordion = shallow(<Accordion />);
        expect(accordion.find('.Accordion__header--collapsed').length).to.equal(1);
    });

    it('should render children when passed in', () => {
        const accordion = shallow(
            <Accordion>
                <div className="testUnique" />
            </Accordion>
        );
        expect(accordion.contains(<div className="testUnique" />)).to.be.true;
    });

    it('should render header children when render prop is passed', () => {
        const accordion = shallow(
            <Accordion headerChildren={() => {
                return <div className="testUnique" />
            }} />
        );
        expect(accordion.contains(<div className="testUnique" />)).to.be.true;
    });

    it('should render in "expanded" mode when isOpen prop is passed', () => {
        const accordion = shallow(
            <Accordion isOpen>
                <div className="testUnique" />
            </Accordion>
        );
        expect(accordion.find('.Accordion__header').length).to.equal(1);
        expect(accordion.find('.Accordion__body--collapsed').length).to.equal(0);
    });

    it('should expand body on header click', () => {
        const accordion = shallow(<Accordion />);
        expect(accordion.find('.Accordion__header--collapsed').length).to.equal(1);
        accordion.find('.Accordion__header').simulate('click');
        expect(accordion.find('.Accordion__body--collapsed').length).to.equal(0);
    });

    it('should run onToggleAccordion function when passed as a prop when collapsed or expanded', () => {
        const spy = sinon.spy();
        const accordion = mount(<Accordion onToggle={spy} />);
        accordion.find('.Accordion__header').simulate('click');
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(true)).to.be.true;
    });

    it('should set custom classes if passed as props', () => {
        const accordion = shallow(<Accordion headerClass="someTestClass1" contentWrapperClass="someTestClass2" isOpen />);
        expect(accordion.find('.someTestClass1').length).to.equal(1);
        expect(accordion.find('.someTestClass2').length).to.equal(1);
    });
});

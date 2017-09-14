import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import MenuCloseButton from '../index';
import sinon from 'sinon';

describe('MenuCloseButton', () => {
  // snapshot test
  it('renders correctly', () => {
    const tree = renderer.create(
      <MenuCloseButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/*
describe('MenuCloseButton', () => {
  let state = 'open';
  const closeFunction= () => {
    state = 'close';
  }
  it('runs function on click', () => {
    expect(state).toEqual('open');
    const wrapper = shallow(<MenuCloseButton />)
    wrapper.find('div').simulate('click', {
      closeFunction(){}
    });
    expect(state).toEqual('close'); // fail
  });
});
*/

describe('MenuCloseButton', () => {
  it('triggersClickEvent on click', () => {
    const handleOnClickEvent = sinon.spy();
    const wrapper = shallow(<MenuCloseButton handleOnClick={handleOnClickEvent}/>)
    wrapper.find('div').simulate('click');
    expect(handleOnClickEvent.calledOnce).toEqual(true);
  });
});

/* https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md */

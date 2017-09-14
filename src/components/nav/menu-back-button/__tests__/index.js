import React from 'react';
import renderer from 'react-test-renderer';
import MenuBackButton from '../index';

describe('MenuBackButton', () => {
  it ('renders correctly', () => {
    const tree = renderer.create(
      <MenuBackButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

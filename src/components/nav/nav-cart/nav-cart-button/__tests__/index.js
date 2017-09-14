import React from 'react';
import renderer from 'react-test-renderer';
import NavCartButton from '../index';

describe('NavCartButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <NavCartButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

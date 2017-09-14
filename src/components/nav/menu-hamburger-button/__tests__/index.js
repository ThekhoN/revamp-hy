import React from 'react';
import renderer from 'react-test-renderer';
import MenuHamburgerButton from '../index';

describe('MenuHamburgerButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MenuHamburgerButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

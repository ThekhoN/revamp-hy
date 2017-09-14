import React from 'react';
import renderer from 'react-test-renderer';
import BrandLogoText from '../index';

describe('BrandLogoText', () => {
  it('renders correct snapshot', () => {
    const tree = renderer.create(
      <BrandLogoText />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import BackToTopFromFooter from '../index';
import renderer from 'react-test-renderer';

describe('BackToTopFromFooter', () => {
	it('renders correct snapshot', () => {
		const tree = renderer.create(<BackToTopFromFooter />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

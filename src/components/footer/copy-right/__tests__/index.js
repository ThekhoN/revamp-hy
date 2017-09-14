import React from 'react';
import CopyRight from '../index';
import renderer from 'react-test-renderer';

describe('CopyRight', () => {
	const dummyTitle = 'title';
	it('renders correct snapshot', () => {
		const tree = renderer.create(<CopyRight title={dummyTitle} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const CopyRight = ({ title }) => <div className="copy-right">{title}</div>;

CopyRight.propTypes = {
	title: PropTypes.string.isRequired
};

export default CopyRight;

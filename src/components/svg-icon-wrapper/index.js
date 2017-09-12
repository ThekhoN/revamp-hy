import React from 'react';
import './style.css';

const SvgIconWrapper = ({
  width,
  height,
  viewBox,
  title,
  childPath,
  iconLabel = ''
}) => {
  return (
    <span className='svg-icon-wrapper' >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        aria-labelledby="title">
        <title id='title'>{title}</title>
        {childPath}
      </svg>
      <span className='web-nav-icon-label'>
        {iconLabel}
      </span>
    </span>
  )
};

export default SvgIconWrapper;

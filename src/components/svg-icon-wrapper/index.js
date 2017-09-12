import React from 'react';
import './style.css';

const SvgIconWrapper = ({
  width,
  height,
  viewBox,
  title,
  childPath
}) => {

  const wrapperStyles = {
    width: `${width}px`,
    height: `${height}px`,
  }
  return (
    <span className='svg-icon-wrapper' style={wrapperStyles} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        aria-labelledby="title">
        <title id='title'>{title}</title>
        {childPath}
      </svg>
    </span>
  )
};

export default SvgIconWrapper;

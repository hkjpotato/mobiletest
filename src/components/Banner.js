import React, { PropTypes } from 'react';

const Banner = ({ children, isTransparent = true }) =>
(
  <div className={ isTransparent ? 'has-bg' : null }>
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.object,
  isTransparent: PropTypes.bool
};

export default Banner;

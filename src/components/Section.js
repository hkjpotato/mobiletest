import React, { PropTypes } from 'react';

const Section = ({ children }) =>
(
  <div>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.object.isRequired
};

export default Section;

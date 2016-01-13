import React, { PropTypes } from 'react';

const PageHeader = ({
  title
}) => (
  <header>
    <h1>{title}</h1>
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;

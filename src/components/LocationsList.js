import React, { PropTypes } from 'react';

const LocationsList = ({
  title,
  children
}) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

LocationsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default LocationsList;

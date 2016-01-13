import React, { PropTypes } from 'react';

const LocationItem = ({
  location
}) => (
  <li>
    {location.name}
  </li>
);

LocationItem.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
  // onLocationItemClicked: PropTypes.func
};

export default LocationItem;

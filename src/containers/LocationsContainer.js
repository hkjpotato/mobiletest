import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LocationItem from '../components/LocationItem';
import LocationsList from '../components/LocationsList';
import t from 'counterpart';

class LocationsContainer extends Component {
  static propTypes = {
    locations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  };

  render() {
    const { locations } = this.props;
    let LocationsListOutput = null;
    if (locations.length > 0) {
      LocationsListOutput = locations.map(location =>
        <LocationItem
          key={location.id}
          location={location}
        />
      );
      LocationsListOutput = (<ul>{LocationsListOutput}</ul>);
    }

    return (
      <LocationsList title={t('_my_map')}>
        {LocationsListOutput}
      </LocationsList>
    );
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations
  };
}

export default connect(
  mapStateToProps
)(LocationsContainer);

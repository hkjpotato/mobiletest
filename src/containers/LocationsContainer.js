import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import VenueList from '../components/VenueList';

class VenueListContainer extends Component {
  static propTypes = {
    venueList: PropTypes.instanceOf(List)
  };

  render() {
    const { venueList } = this.props;
    if (venueList.size > 0) {
      return <VenueList venueList={venueList} />;
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    venueList: state.venues
  };
}

export default connect(
  mapStateToProps
)(VenueListContainer);

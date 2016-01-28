import React, { PropTypes } from 'react';
import { List } from 'immutable';
import VenueCard from '../components/VenueCard';
import styles from './VenueList.less';

const VenueList = ({
  venueList
}) => (
  <ul className={styles.list}>
    {
      venueList.map(venue =>
        <li
          key={venue.get('id')}
          className={styles.listItem}
        >
          <VenueCard venue={venue} />
        </li>
      )
    }
  </ul>
);

VenueList.propTypes = {
  venueList: PropTypes.instanceOf(List)
};

export default VenueList;

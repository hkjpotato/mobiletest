import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import classNames from 'classnames';
import { translate } from '../translate';
import Image from './Image';
import Rating from './Rating';
import getVenueLocation from '../utils/getVenueLocation';
import styles from './VenueCard.less';

const VenueCard = ({
  venue
}) => (
  <div className="hc-u-grid-row">
    <div className="hc-u-column-sm-4">
      <Image source={venue.get('ofrgImage')} ratioOfHeightToWidth={0.65} />
    </div>
    <div className={`hc-u-column-sm-8 ${styles.venueInfoWrapper}`}>
      <h3 className={styles.venueName}>{venue.get('name')}</h3>
      <div className="hc-u-grid-row">
        <div className="hc-u-column-sm-6">
          <div className={styles.venueLocation}>
            {getVenueLocation(venue.get('city'),
                            venue.get('stateProvinceCode'),
                            venue.get('countryCode'))}
          </div>
          <Rating rating={venue.get('starRatingId')} />
        </div>
        {venue.get('promotedVenue') &&
          <div className="hc-u-column-sm-6 hc-u-text-right-aligned">
            <span className="hc-u-icon-checkmark"></span>
            <span className={styles.promotedVenue}>{translate('_promoted_venue')}</span>
          </div>}
      </div>
      <div className={classNames('hc-u-grid-row', styles.detailsWrapper)}>
        <ul className={classNames('hc-u-column-sm-6', styles.detailList)}>
          {venue.get('totalSleepingRoom') &&
            <li>
              {translate('_number_of_sleeping_rooms', { number: venue.get('totalSleepingRoom') })}
            </li>
          }
          {venue.get('totalMeetingRoom') &&
            <li>
              {translate('_number_of_meeting_rooms', { number: venue.get('totalMeetingRoom') })}
            </li>
          }
        </ul>
        <ul className={classNames('hc-u-column-sm-6', styles.detailList)}>
          {venue.get('totalMeetingSpace') &&
            <li>
              {`${translate('_meeting_space')}:
                ${venue.get('totalMeetingSpace')} ${venue.get('unit')}`}
            </li>
          }
          {venue.get('largestMeetingSpace') &&
            <li>
              {`${translate('_largest_room')}:
                ${venue.get('largestMeetingSpace')} ${venue.get('unit')}`}
            </li>
          }
        </ul>
      </div>
      <ul className={classNames('hc-u-grid-row', styles.additionalInfo)}>
        {venue.get('greenFriendly') &&
          <li className="hc-u-column-sm-6"> {translate('_environmentally_friendly')} </li>}
        {venue.get('cancelledSpaceAvailable') &&
          <li className="hc-u-column-sm-6"> {translate('_cancelled_space_available')} </li>}
        {venue.get('promotionsAvailable') &&
          <li className="hc-u-column-sm-6"> {translate('_current_promotion')} </li>}
      </ul>
    </div>
  </div>
);

VenueCard.propTypes = {
  location: PropTypes.instanceOf(Map)
};

export default VenueCard;

import { fromJS } from 'immutable';

// dummy data
const venueList = fromJS([
  {
    id: '1',
    name: 'Lansdowne Resort & Conference Center',
    city: 'Leesburg',
    stateProvinceCode: 'VA',
    countryCode: 'US',
    latitude: 37.295904,
    longitude: -121.853499,
    totalSleepingRoom: 57,
    totalMeetingRoom: 3,
    largestMeetingSpace: 1000,
    totalMeetingSpace: 3000,
    totalRoomSpaceArea: 'LESS_THAN_ONE_THOUSAND_SQ_FT',
    starRatingId: 'THREE_STAR_AND_HALF',
    venueMinCapacity: 10,
    ofrgImage: '1',
    greenFriendly: true,
    venueAwards: 'Best Cvent Supplier EVER',
    promotionsAvailable: true,
    metroAreaName: 'DC - Washington',
    // Properties below don't exist
    type: 'HOTEL',
    promotedVenue: true,
    unit: 'sq ft',
    cancelledSpaceAvailable: true
  }
]);

export default function locations(state = venueList, action) {
  switch (action.type) {
  case 'RECEIVE_VENUES':
    return state;
  default:
    return state;
  }
}

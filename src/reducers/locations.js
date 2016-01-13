// dummy data
const locationsData = [
  {
    id: '1',
    name: 'Hilton Garden Inn Washington DC'
  },
  {
    id: '2',
    name: 'Washington Monument'
  },
  {
    id: '3',
    name: 'Westin Georgetown, Washington DC'
  }
];

export default function locations(state = [], action) {
  switch (action.type) {
  case 'RECEIVE_LOCATIONS':
    return state;
  default:
    return locationsData;
  }
}

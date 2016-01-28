export default (city, stateCode, countryCode) => {
  let location = city;

  if (countryCode === 'US' || countryCode === 'CA') {
    if (stateCode !== 'BLANK') {
      location = `${location}, ${stateCode.toUpperCase()}`;
    }
  } else if (countryCode !== 'BLANK') {
    location = `${location}, ${countryCode.toUpperCase()}`;
  }

  return location;
};

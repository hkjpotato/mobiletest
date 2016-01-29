import React, { PropTypes } from 'react';

const GuestRoomsSummary = ({ roomNightData }) => (
  <div>
    <div>Yes, my event needs guest rooms.</div>
    <div>{`${roomNightData.length} nights`}</div>
    <div>Some sorcery to calculate the number of rooms per night</div>
    { roomNightData ?
      roomNightData.forEach((roomNight) => (
        <div>{roomNight}</div>
      ))
      : null
    }
  </div>
);

GuestRoomsSummary.propTypes = {
  roomNightData: PropTypes.array.isRequired
};

export default GuestRoomsSummary;

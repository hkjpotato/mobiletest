import React, { PropTypes } from 'react';
import CollapsibleSection from './CollapsibleSection';

const GuestRooms = ({ roomNights }) => {
  let index = 1;
  return (
    <div>
      <div>Number of Room Nights</div>
      {
        roomNights.forEach(() => {
          index++;
          return (
            <CollapsibleSection title={`Night ${index}`}>
              <div>Room night contents</div>
            </CollapsibleSection>
          );
        })
      }
      <div>Add / Copy </div>
      <button>Save and Close</button>
    </div>
  );
};

GuestRooms.props = {
  roomNights: PropTypes.array.isRequired
};

export default GuestRooms;

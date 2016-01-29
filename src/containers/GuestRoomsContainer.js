import React from 'react';
import GuestRooms from '../components/GuestRooms';
import PageHeader from '../components/PageHeader';

const GuestRoomsContainer = () => (
  <div>
    <PageHeader pageTitle="Rooms" returnPage="EventDetails" />
    <GuestRooms roomNights={[]} />
  </div>
);

export default GuestRoomsContainer;

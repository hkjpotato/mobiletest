import React from 'react';
import EventDetails from '../components/EventDetails';
import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';

const EventDetailsContainer = () => (
  <div>
    <PageHeader pageTitle="Event Details" />
    <Navigation />
    <EventDetails />
  </div>
);

export default EventDetailsContainer;

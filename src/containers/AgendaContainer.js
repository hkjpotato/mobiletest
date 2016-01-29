import React from 'react';
import Agenda from '../components/Agenda';
import PageHeader from '../components/PageHeader';

const AgendaContainer = () => (
  <div>
    <PageHeader pageTitle="Agenda" returnPage="EventDetails" />
    <Agenda agendaDays={[]} />
  </div>
);

export default AgendaContainer;

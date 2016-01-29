import React from 'react';
import PageHeader from '../components/PageHeader';

const AgendaItemContainer = () => (
  <div>
    <PageHeader pageTitle="Add Agenda Item" returnPage="Agenda" />
    <div>This is the form</div>
    <button>Save</button>
    <button>Cancel</button>
  </div>
);

export default AgendaItemContainer;

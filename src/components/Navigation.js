import React from 'react';
import Banner from '../components/Banner';
import NestedList from '../components/NestedList';
import PageHeader from '../components/PageHeader';
import SelectionSummary from '../components/SelectionSummary';

// Render the login component separately since it has a conditional render
const Navigation = () => (
  <div>
    <PageHeader pageTitle="Conditional based on RFP Type" />
    <SelectionSummary selectedCount={4} />
    <NestedList items={[]} />
    <Banner />
    <Banner />
  </div>
);

export default Navigation;

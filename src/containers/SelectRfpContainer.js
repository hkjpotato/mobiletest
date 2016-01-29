import React from 'react';
import Filter from '../components/Filter';
import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import SelectionList from '../components/SelectionList';

const SelectRfpContainer = () => (
  <div>
    <PageHeader pageTitle="Selected Venues" />
    <Navigation />
    <div>Select an existing RFP to add your selected venues to.</div>
    <Filter />
    <SelectionList type="navigation">
      <div>RFP 1</div>
      <div>RFP 2</div>
      <div>RFP 3</div>
    </SelectionList>
  </div>
  );

export default SelectRfpContainer;

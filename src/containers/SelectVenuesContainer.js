import React from 'react';
import Banner from '../components/Banner';
import PageHeader from '../components/PageHeader';
import SelectionList from '../components/SelectionList';

const SelectVenuesContainer = () => (
  <div>
    <PageHeader pageTitle="Selected Venues" />
    <div>You Are sending this RFP to:</div>
    <SelectionList type="delete">
      <div>Venue 1</div>
      <div>Venue 2</div>
      <div>Venue 3</div>
    </SelectionList>
    <Banner />
  </div>
  );

export default SelectVenuesContainer;

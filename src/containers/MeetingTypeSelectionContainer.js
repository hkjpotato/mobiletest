import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import SelectionList from '../components/SelectionList';

const MeetingTypeSelectionContainer = () => (
  <div>
    <PageHeader pageTitle="Request for Proposal (RFP)" />
    <Banner />
    <SelectionList type="navigation">
      <div>Choose your new RFP type</div>
    </SelectionList>
    <SelectionList type="navigation">
      <div>Add to an existing RFP</div>
    </SelectionList>
    <Footer />
    <Banner />
  </div>
  );

export default MeetingTypeSelectionContainer;

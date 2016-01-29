import React from 'react';
import Banner from '../components/Banner';
import PageHeader from '../components/PageHeader';

const ConfirmationContainer = () => (
  <div>
    <PageHeader pageTitle="Confirmation" />
    <div>
      This is where the confirmation message will go!
    </div>
    <Banner>
      <div>Need help?</div>
    </Banner>
  </div>
);

export default ConfirmationContainer;

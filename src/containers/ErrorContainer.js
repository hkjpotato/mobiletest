import React from 'react';
import PageHeader from '../components/PageHeader';
import Banner from '../components/Banner';
import ErrorInfo from '../components/ErrorInfo';

// Render the login component separately since it has a conditional render
const ErrorContainer = () => (
  <div>
    <PageHeader pageTitle="Error" />
    <ErrorInfo />
    <Banner isTransparent={false}>
      <div>Need help? +1(805)879-4479</div>
    </Banner>
  </div>
);

export default ErrorContainer;

import React from 'react';
import PageHeader from '../components/PageHeader';

// Render the login component separately since it has a conditional render
const LoginContainer = () => (
  <div>
    <PageHeader pageTitle="Error" />
    <div>Oops, there&apos;s been some kind of error!</div>
  </div>
);

export default LoginContainer;

import React from 'react';
import Banner from '../components/Banner';
import Login from '../components/Login';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

// Render the login component separately since it has a conditional render
const LoginContainer = () => (
  <div>
    <PageHeader pageTitle="Sign Into Your Account" />
    "I'm the login form!"
    <Banner />
    <Login buttonText="Next" isFoundAccount={false} />
    <Footer />
  </div>
);

export default LoginContainer;

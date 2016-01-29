import React from 'react';
import ContactDetails from '../components/ContactDetails';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const ContactDetailsContainer = () => (
  <div>
    <PageHeader pageTitle="Contact Details" />
    <ContactDetails formDisplay="enterEmail" />
    <Footer />
  </div>
);

export default ContactDetailsContainer;

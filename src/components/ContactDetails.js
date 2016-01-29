import React, { PropTypes } from 'react';
// import Button, TextInput from nucleus?

const ContactDetails = ({ formDisplay }) => {
  switch (formDisplay) {
  case 'enterEmail':
    return (<div></div>);
  case 'foundAccount':
    return (<div></div>);
  case 'accountNotFound':
    return (<div></div>);
  default:
    return (<div></div>);
  }
};

ContactDetails.propTypes = {
  formDisplay: PropTypes.oneOf(['enterEmail', 'foundAccount', 'accountNotFound']).isRequired
};

export default ContactDetails;

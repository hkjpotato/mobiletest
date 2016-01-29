import React, { PropTypes } from 'react';
// import Button, TextInput from nucleus?

const Login = ({ buttonText, isFoundAccount = false }) =>
  (
    <div>
      { isFoundAccount ? 'password field goes here' : null }
      <button>{buttonText}</button>
    </div>
  );

Login.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isFoundAccount: PropTypes.bool.isRequired
};

export default Login;

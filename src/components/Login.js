import React, { PropTypes } from 'react';
import Button from 'nucleus-core/buttons/Button';

const Login = ({ buttonText, isFoundAccount = false }) =>
  (
    <div>
      { isFoundAccount ? 'password field goes here' : null }
      <Button
        title={buttonText}
        kind="primary"
        type="button"
      />
    </div>
  );

Login.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isFoundAccount: PropTypes.bool.isRequired
};

export default Login;

import React, { PropTypes } from 'react';
// import Button, TextInput from nucleus?

const SelectionList = ({ buttonText, children, toggleHeight = false, type = 'navigation' }) =>
  (
    <div className={toggleHeight ? 'collapsible' : null}>
      {type === 'navigation' ? <em className="button">{buttonText ? buttonText : null}</em> : null }
      {children}
    </div>
  );

SelectionList.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.array.isRequired,
  toggleHeight: PropTypes.bool,
  type: PropTypes.string
};

export default SelectionList;

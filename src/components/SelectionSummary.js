import React, { PropTypes } from 'react';
// import Button, TextInput from nucleus?

const SelectionSummary = ({ selectedCount }) =>
  (
    <div>
      <span>{selectedCount} venues selected</span>
    </div>
  );

SelectionSummary.propTypes = {
  selectedCount: PropTypes.number.isRequired
};

export default SelectionSummary;

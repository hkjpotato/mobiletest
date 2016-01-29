import React, { PropTypes } from 'react';
// import Button, TextInput from nucleus?

const NestedList = ({ items }) => (
  <div>
  {
    items.forEach((item) => (
      <div>{item}</div>
    ))
  }
  </div>
);

NestedList.propTypes = {
  items: PropTypes.array.isRequired
};

export default NestedList;

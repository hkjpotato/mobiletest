import React, { PropTypes } from 'react';

const AdditionalInformationSummary = ({ dueDate, description }) =>
(
  <div>
    {dueDate ? <div>{`Proposal Due Date:   ${dueDate}`}</div> : null}
    {description ? <div>{description}</div> : null}
  </div>
);

AdditionalInformationSummary.propTypes = {
  dueDate: PropTypes.number,
  description: PropTypes.string
};

export default AdditionalInformationSummary;

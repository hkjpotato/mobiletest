import React, { PropTypes } from 'react';

const CollapsibleSection = ({ title, children }) => (
    <div className="collapsible-section">
      <div className="collapsible-section-header">
        {title}
      </div>
      <div className="collapsible-section-body">
        {children}
      </div>
    </div>
);

CollapsibleSection.props = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default CollapsibleSection;

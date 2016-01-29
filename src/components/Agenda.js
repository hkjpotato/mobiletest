import React, { PropTypes } from 'react';
import CollapsibleSection from './CollapsibleSection';

const Agenda = ({ agendaDays }) => {
  let index = 1;
  return (
    <div>
      {
        agendaDays.forEach(() => {
          index++;
          return (
            <CollapsibleSection title={`Day ${index}`}>
              <div>Agenda Item contents</div>
            </CollapsibleSection>
          );
        })
      }
      <div>Add Day</div>
      <button>Save and Close</button>
    </div>
  );
};

Agenda.props = {
  agendaDays: PropTypes.array.isRequired
};

export default Agenda;

import React, { PropTypes } from 'react';

const AgendaSummary = ({ agendaDayData }) => (
  <div>
    <div>Yes, my event needs meeting space.</div>
    <div>Some sorcery to calculate the number of attendees per day</div>
    <div>{`Some sorcery to calculate total number of agenda items over
      ${agendaDayData.length} days`}</div>
    { agendaDayData ?
      agendaDayData.forEach((agendaDay) => (
        <div>{agendaDay}</div>
      ))
      : null
    }
  </div>
);

AgendaSummary.propTypes = {
  agendaDayData: PropTypes.array.isRequired
};

export default AgendaSummary;

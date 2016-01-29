import React from 'react';
import AdditionalInformationSummary from '../components/AdditionalInformationSummary';
import AgendaSummary from '../components/AgendaSummary';
import Banner from '../components/Banner';
import SelectionList from '../components/SelectionList';
import GuestRoomsSummary from '../components/GuestRoomsSummary';
import Navigation from '../components/Navigation';
import PageHeader from '../components/PageHeader';
import SelectionSummary from '../components/SelectionSummary';

const EventDetailsContainer = () => (
  <div>
    <PageHeader pageTitle="Event Details" />
    <Navigation />
    <SelectionSummary selectedCount={4} />
    <button>Submit RFP</button>
    <SelectionList title="Event Details" link="EventDetails">
      <h2>
        RFP Title
      </h2>
      <em>RFP Type</em>
      <h2>RFP Start Date &ndash; RFP End Date</h2>
      <em>Are event dates firm?</em>
    </SelectionList>
    <SelectionList title="Guest Rooms" link="GuestRooms">
      <GuestRoomsSummary roomNightData={[1, 2, 3]} />
    </SelectionList>
    <SelectionList title="Meeting Space" link="Agenda">
      <AgendaSummary agendaDayData={[1, 2, 3]} />
    </SelectionList>
    <SelectionList title="Additional Information" link="AdditionalInformationSummary">
      <AdditionalInformationSummary
        proposalDueDate={12}
        description="This is some super long text!"
      />
    </SelectionList>
    <SelectionList title="Contact Details" link="ContactDetails">
      <h2>Planner Name</h2>
      <div><em>Phone Number</em></div>
      <div><em>City</em></div>
      <div><em>Country</em></div>
      <h2>Company Name</h2>
      <div><em>Phone Number</em></div>
      <div>Are you planning this event for another organization?</div>
      <div>Optional: Other organization&apos;s details</div>
    </SelectionList>
    <button>Submit RFP</button>
    <Banner>
      <div>Accept the Privacy Policy and Terms & Conditions</div>
    </Banner>
  </div>
);

export default EventDetailsContainer;

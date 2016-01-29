import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import LoginContainer from './containers/LoginContainer';
import MeetingTypeSelectionContainer from './containers/MeetingTypeSelectionContainer';
import ContactDetailsContainer from './containers/ContactDetailsContainer';
import EventDetailsContainer from './containers/EventDetailsContainer';
import GuestRoomsContainer from './containers/GuestRoomsContainer';
import AgendaContainer from './containers/AgendaContainer';
import AgendaItemContainer from './containers/AgendaItemContainer';
import ReviewRfpContainer from './containers/ReviewRfpContainer';
import ConfirmationContainer from './containers/ConfirmationContainer';
import SelectRfpContainer from './containers/SelectRfpContainer';
import SelectVenuesContainer from './containers/SelectVenuesContainer';
import ErrorContainer from './containers/ErrorContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path="login" component={LoginContainer} />
    <Route path="meeting-type-selection" component={MeetingTypeSelectionContainer} />
    <Route path="contact-details" component={ContactDetailsContainer} />
    <Route path="event-details" component={EventDetailsContainer} />
    <Route path="guest-rooms" component={GuestRoomsContainer} />
    <Route path="agenda" component={AgendaContainer} />
    <Route path="agenda-item" component={AgendaItemContainer} />
    <Route path="review-rfp" component={ReviewRfpContainer} />
    <Route path="confirmation" component={ConfirmationContainer} />
    <Route path="select-rfp" component={SelectRfpContainer} />
    <Route path="select-venues" component={SelectVenuesContainer} />
    <Route path="error" component={ErrorContainer} />
    <Route path="*" component={ErrorContainer} />
  </Route>
);

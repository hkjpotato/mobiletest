import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import SearchResultsContainer from './containers/SearchResultsContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchResultsContainer} />
    <Route path="venues" component={SearchResultsContainer}/>
    <Route path="promotions" component={SearchResultsContainer}/>
    <Route path="city-guides" component={SearchResultsContainer}/>
    <Route path="*" component={SearchResultsContainer} />
  </Route>
);

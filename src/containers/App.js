import React from 'react';
import LocationsContainer from './LocationsContainer';
import PageHeader from '../components/PageHeader';

import '../../resources/less/global.less';
import './App.less';

const App = () => (
  <div className="poi-u-grid-container">
    <PageHeader title="page title" />
    <LocationsContainer />
  </div>
);

export default App;

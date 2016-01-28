import React, { PropTypes } from 'react';
import PageHeaderContainer from './PageHeaderContainer';

import '../../resources/less/global.less';
import './App.less';

const App = ({
  children
}) => (
  <div className="poi-u-grid-container">
    <PageHeaderContainer />
    <main>
      {children}
    </main>
  </div>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;

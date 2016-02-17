import React, { PropTypes } from 'react';

import '../../resources/less/global.less';
import './App.less';

const App = ({
  children
}) => (
  <div className="emi-u-grid-container">
    <main>
      {children}
    </main>
  </div>
);

App.propTypes = {
  children: PropTypes.element
};

export default App;

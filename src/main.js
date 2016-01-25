import React from 'react';
import t from 'counterpart';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';

const middleware = process.env.NODE_ENV === 'production' ?
  [thunk] :
  [thunk, logger()];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducer);

// This is the simplest way to bring in the English locale file
// TODO: implement multilingual support
t.registerTranslations('en', require('../resources/locales/en.json'));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-mount')
);

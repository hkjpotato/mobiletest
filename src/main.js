import React from 'react';
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

// Registering translations.
import englishText from '../resources/locales/en.json';
import spanishText from '../resources/locales/es.json';
import { registerTranslations } from 'nucleus-text/translate/Translator';
registerTranslations('en', englishText);
registerTranslations('es', spanishText);

// Set locale
import translator from './translate';
translator.locale = 'en';

/**
 * The normal Intl polyfill case, asyncronously load the Intl package
 * and any necessary initial locale data on application load. The package
 * is very large, so we dont want to bundle it into our vendor javascript.
 */
function loadIntl(cb) {
  require.ensure(['intl',
      'intl/locale-data/jsonp/en.js',
      'intl/locale-data/jsonp/es.js'], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/es.js');
    cb();
  });
}

function startApp() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('react-mount')
  );
}

if (!global.Intl) {
  // Dont have Intl, so normal polyfill case.
  loadIntl(startApp);
} else {
  // Modern browser that already has Intl implemented.
  startApp();
}

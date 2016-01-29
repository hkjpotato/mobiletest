import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import { syncHistory, routeReducer } from 'react-router-redux';
import reducers from './reducers';
import { createHistory } from 'history';

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

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// Sync dispatched route actions to the history
const history = createHistory();
const reduxRouterMiddleware = syncHistory(history);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

function startApp() {
  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
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

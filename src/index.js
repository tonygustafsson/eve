import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { LocalStorageMiddleware } from './middleware/LocalStorageMiddleware.js';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const myCompose = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? compose(applyMiddleware(thunk, LocalStorageMiddleware), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    : compose(applyMiddleware(thunk, LocalStorageMiddleware));

const store = createStore(
    reducers,
    {},
    myCompose
);

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

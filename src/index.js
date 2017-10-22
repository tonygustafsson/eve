import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import persistState from 'redux-localstorage';

const myCompose = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? compose(applyMiddleware(), persistState(), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    : compose(applyMiddleware(), persistState());

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

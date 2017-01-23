import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from 'components/app';
import reducers from 'reducers';

const initialState = window.INITIAL_STATE;
const store = createStore(reducers(initialState));
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));
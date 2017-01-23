import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
    createStore
}
from 'redux';
import {
    Provider
}
from 'react-redux';
import App from './generated/app';

const app = express();
var PORT = process.env.PORT || 3000;

// View templates
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

// Routes
app.get('/', (request, response) => {
    const initialState = {
        currentMessage: '',
        messages: []
    };
    const store = createStore((state = initialState) => state);
    const appContent = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    response.render('app', {
        app: appContent,
        initialState: JSON.stringify(initialState)
    });
});

app.listen(PORT, () => console.log('Server running'));

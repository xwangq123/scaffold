import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from 'react-error-boundary';
import App from './App';

import './index.css';

ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('root')
);

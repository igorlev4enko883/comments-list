import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App'

export default (store) => (
    <Route path="/" component={App}>
    </Route>
);
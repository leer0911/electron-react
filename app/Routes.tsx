import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './pages/Home';
import Login from './pages/Login';
import { PrivateRoute } from './containers';

export default function Routes() {
  return (
    <App>
      <Switch>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="/login" component={Login} />
      </Switch>
    </App>
  );
}

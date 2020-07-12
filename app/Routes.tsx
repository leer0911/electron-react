import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import App from './containers/App';
import Home from './pages/Home';
import Login from './pages/Login';
import { PrivateRoute } from './containers';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <PrivateRoute path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </App>
  );
}

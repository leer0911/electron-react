/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router';

export const fakeAuth = {
  isAuthenticated: false,
  authenticate() {
    fakeAuth.isAuthenticated = true;
  },
  signOut() {
    fakeAuth.isAuthenticated = false;
  },
};

export default function PrivateRoute(props: any) {
  const { children, ...rest } = props;
  const renderRoute = ({ location }: any) => {
    if (fakeAuth.isAuthenticated) {
      return children;
    }
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  };

  return <Route {...rest} render={renderRoute} />;
}

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router';

const Window: any = window;

Window.isAuthenticated = false;

export const fakeAuth = {
  authenticate() {
    Window.isAuthenticated = true;
  },
  signOut() {
    Window.isAuthenticated = false;
  },
};

export default function PrivateRoute(props: any) {
  const { children, component, ...rest } = props;
  const renderRoute = ({ location }: any) => {
    if (Window.isAuthenticated) {
      if (component && !children) {
        return React.createElement(component, props);
      }
      return children;
    }
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  };

  return <Route {...rest} render={renderRoute} />;
}

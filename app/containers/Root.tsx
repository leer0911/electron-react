import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { History } from 'history';
import { Store } from '../store';
import Routes from '../Routes';

type Props = {
  store: Store;
  history: History;
};

const defaultTheme = createMuiTheme();

const Root = ({ store, history }: Props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <CssBaseline />
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default Root;

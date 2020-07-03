import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CssBaseline, Box, Avatar, Divider } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { History } from 'history';
import { WindowsControl } from '../features';
import Navigation from './Navigation';
import { Store } from '../store';
import Routes from '../Routes';
import { Draggable } from '../components';

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
        <Box display="flex" width="100vw" height="100vh">
          <Draggable
            display="flex"
            flexDirection="column"
            alignItems="center"
            flexShrink={0}
            pt={2}
            pb={2}
            width={60}
            height="100vh"
            bgcolor={defaultTheme.palette.primary.main}
          >
            <Avatar />
            <Box mb={2} />
            <Navigation />
          </Draggable>

          <Box display="flex" flexDirection="column" flex={1} height="100vh">
            <Draggable display="flex" justifyContent="flex-end" alignItems="center" height={30}>
              <WindowsControl />
            </Draggable>
            <Divider />
            <ConnectedRouter history={history}>
              <Routes />
            </ConnectedRouter>
          </Box>
        </Box>
      </Provider>
    </ThemeProvider>
  );
};

export default Root;

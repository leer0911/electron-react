import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { history, configuredStore } from './store';

const store = configuredStore();

document.addEventListener('DOMContentLoaded', () =>
  render(<Root store={store} history={history} />, document.getElementById('root'))
);

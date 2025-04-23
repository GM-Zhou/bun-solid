import './global.css';

import { Route, Router } from '@solidjs/router';
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  return (
    <Router root={lazy(() => import('./layouts/root'))}>
      <Route path='/user/:id' component={lazy(() => import('./pages/user'))} />
      <Route path='/todo/:id' component={lazy(() => import('./pages/todo'))} />
      <Route path='/' component={lazy(() => import('./pages/home'))} />
    </Router>
  );
};

const container = document.getElementById('root');
if (container) {
  render(() => <App />, container);
}

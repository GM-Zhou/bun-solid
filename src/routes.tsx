import { Route, Router } from '@solidjs/router';
import { lazy } from 'solid-js';

export default function Routes() {
  return (
    <Router>
      <Route path='/' component={lazy(() => import('@/components/layouts/main'))}>
        <Route path='/' component={lazy(() => import('@/pages/home'))} />
        <Route path='/avatar' component={lazy(() => import('@/pages/avatar'))} />
      </Route>
    </Router>
  );
}

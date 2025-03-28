import { Route, Router } from '@solidjs/router';

import AvatarUpload from './pages/avatar';
import Home from './pages/home';

export default function Routes() {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/avatar' component={AvatarUpload} />
    </Router>
  );
}

/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';

import Routes from './routes';

const App = () => {
  return <Routes />;
};

const root = document.getElementById('root')!;

render(() => <App />, root);

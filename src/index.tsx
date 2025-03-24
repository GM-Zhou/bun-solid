/* @refresh reload */
import './index.css';

import { createEffect,createResource, createSignal } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [count, setCount] = createSignal(0);
  const [todo] = createResource(() =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json())
  );

  createEffect(() => {
    console.log(todo());
  });

  return (
    <main class='md:w-md lg:w-lg xl:w-xl mx-auto bg-amber-100'>
      <div class='text-amber-300'>increment: {count()}</div>
      <div class='text-amber-300'>todo: {todo()?.title}</div>
      <button onClick={() => setCount(count() + 1)}>increment</button>
      <button onClick={() => setCount(0)}>reset</button>
    </main>
  );
};

const root = document.getElementById('root');

render(() => <App />, root!);

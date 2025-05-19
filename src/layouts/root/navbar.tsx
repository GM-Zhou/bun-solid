import { A } from '@solidjs/router';
import { For } from 'solid-js';

const navList = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/user/123123qwe',
    label: 'User'
  },
  {
    href: '/todo/1',
    label: 'Todo'
  }
];

const Navbar = () => {
  return (
    <nav>
      <h1 class='p-4 font-semibold text-white'>My Application</h1>
      <ul class='flex flex-col'>
        <For each={navList}>
          {(item) => (
            <li class='flex transition-colors duration-300 hover:bg-gray-700 hover:text-white'>
              <A href={item.href} class='flex-1 p-2'>
                {item.label}
              </A>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

export default Navbar;

import type { RouteSectionProps } from '@solidjs/router';

import Content from './content';
import Navbar from './navbar';

const RootLayout = (props: RouteSectionProps) => {
  return (
    <main class='flex h-full w-full bg-lime-800'>
      <Navbar />
      <Content>{props.children}</Content>
    </main>
  );
};

export default RootLayout;

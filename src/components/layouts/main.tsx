import type { RouteSectionProps } from '@solidjs/router';

const MainLayout = (props: RouteSectionProps) => {
  console.log('props :>> ', props);
  return (
    <main class='flex flex-col items-center gap-4 p-8 bg-gray-100 rounded-lg'>
      {props.children}
    </main>
  );
};

export default MainLayout;

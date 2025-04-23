import type { JSX } from 'solid-js';

interface Props {
  children: JSX.Element;
}

const Content = ({ children }: Props) => {
  return (
    <section class='flex flex-1 overflow-hidden p-3 pl-0'>
      <div class='flex-1 overflow-auto rounded-[0.36rem] bg-white p-3'>{children}</div>
    </section>
  );
};

export default Content;

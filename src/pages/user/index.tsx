import type { RouteSectionProps } from '@solidjs/router';

const User = (props: RouteSectionProps<{ id: string }>) => {
  const id = () => props.params.id;
  return (
    <div class='flex-1'>
      <h1>用户页面</h1>
      <p>这是用户页面</p>
      <p>User ID: {id()}</p>
      <p>Additional information can be displayed here.</p>
      <p>More details about the user can be added here.</p>
      <div class='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex laborum numquam excepturi
        sed, expedita facere, consequuntur voluptates est tempora error itaque corrupti cupiditate,
        cum soluta veniam nihil repellat animi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Blanditiis dicta magnam laborum eveniet nesciunt cupiditate repellat? Doloribus ut nam
        soluta ratione rerum a quia eligendi mollitia placeat blanditiis. Vero, amet?
      </div>
      <div class='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex laborum numquam excepturi
        sed, expedita facere, consequuntur voluptates est tempora error itaque corrupti cupiditate,
        cum soluta veniam nihil repellat animi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Blanditiis dicta magnam laborum eveniet nesciunt cupiditate repellat? Doloribus ut nam
        soluta ratione rerum a quia eligendi mollitia placeat blanditiis. Vero, amet?
      </div>
      <div class='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex laborum numquam excepturi
        sed, expedita facere, consequuntur voluptates est tempora error itaque corrupti cupiditate,
        cum soluta veniam nihil repellat animi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Blanditiis dicta magnam laborum eveniet nesciunt cupiditate repellat? Doloribus ut nam
        soluta ratione rerum a quia eligendi mollitia placeat blanditiis. Vero, amet?
      </div>
      <div class='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex laborum numquam excepturi
        sed, expedita facere, consequuntur voluptates est tempora error itaque corrupti cupiditate,
        cum soluta veniam nihil repellat animi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Blanditiis dicta magnam laborum eveniet nesciunt cupiditate repellat? Doloribus ut nam
        soluta ratione rerum a quia eligendi mollitia placeat blanditiis. Vero, amet?
      </div>
      <div class='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex laborum numquam excepturi
        sed, expedita facere, consequuntur voluptates est tempora error itaque corrupti cupiditate,
        cum soluta veniam nihil repellat animi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Blanditiis dicta magnam laborum eveniet nesciunt cupiditate repellat? Doloribus ut nam
        soluta ratione rerum a quia eligendi mollitia placeat blanditiis. Vero, amet?
      </div>
      <div class='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex laborum numquam excepturi
        sed, expedita facere, consequuntur voluptates est tempora error itaque corrupti cupiditate,
        cum soluta veniam nihil repellat animi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Blanditiis dicta magnam laborum eveniet nesciunt cupiditate repellat? Doloribus ut nam
        soluta ratione rerum a quia eligendi mollitia placeat blanditiis. Vero, amet?
      </div>
      <div class='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex laborum numquam excepturi
        sed, expedita facere, consequuntur voluptates est tempora error itaque corrupti cupiditate,
        cum soluta veniam nihil repellat animi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Blanditiis dicta magnam laborum eveniet nesciunt cupiditate repellat? Doloribus ut nam
        soluta ratione rerum a quia eligendi mollitia placeat blanditiis. Vero, amet?
      </div>
      <div class='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex laborum numquam excepturi
        sed, expedita facere, consequuntur voluptates est tempora error itaque corrupti cupiditate,
        cum soluta veniam nihil repellat animi. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Blanditiis dicta magnam laborum eveniet nesciunt cupiditate repellat? Doloribus ut nam
        soluta ratione rerum a quia eligendi mollitia placeat blanditiis. Vero, amet?
      </div>
      <div class='w-full overflow-x-auto bg-amber-900'>
        <div class='w-[100vw] bg-amber-50'>hheheh</div>
      </div>
    </div>
  );
};

export default User;

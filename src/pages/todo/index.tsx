import type { RouteSectionProps } from '@solidjs/router';
import { createResource, ErrorBoundary, Show, Suspense } from 'solid-js';

interface ToDoProps {
  id: string;
}

// 优化的数据获取函数
const fetchTodo = async (id: string) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    signal: controller.signal,
    headers: {
      Accept: 'application/json'
    }
  });
  clearTimeout(timeoutId);

  if (!response.ok) {
    throw new Error('Failed to fetch todo');
  }

  return response.json();
};

// 加载骨架屏组件
const Skeleton = () => (
  <div class='animate-pulse'>
    <div class='mb-4 h-6 w-1/4 rounded bg-gray-200' />
    <div class='h-32 w-full rounded bg-gray-200' />
  </div>
);

const ToDo = (props: RouteSectionProps<ToDoProps>) => {
  const id = () => props.params.id;
  const [data] = createResource(id, fetchTodo);

  return (
    <ErrorBoundary fallback={(err) => <div class='text-red-500'>Error: {err.message}</div>}>
      <div class='p-4'>
        <h1 class='mb-4 text-2xl font-bold'>ToDo - {id()}</h1>
        <Suspense fallback={<Skeleton />}>
          <Show when={data()} fallback={<div>Loading...</div>}>
            {(todo) => <pre class='rounded bg-gray-100 p-4'>{JSON.stringify(todo(), null, 2)}</pre>}
          </Show>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default ToDo;

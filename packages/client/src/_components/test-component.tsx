'use client';
import { trpc } from '@/_trpc/client';
import { serverClient } from '@/_trpc/serverClient';
const TestComponent = ({
  initialTodos,
}: {
  initialTodos: Awaited<ReturnType<(typeof serverClient)['getNumbersArray']>>;
}) => {
  const { data, isPending, isLoading, isFetching } = trpc.getNumbersArray.useQuery(
    undefined,
    {
      initialData: initialTodos,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );
  console.log(data, isPending, isLoading, isFetching);
  return <></>;
};

export default TestComponent;

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/_server';

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });
};

export { handler as GET };

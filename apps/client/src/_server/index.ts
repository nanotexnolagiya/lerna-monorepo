import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getNumbersArray: publicProcedure.query(async () => {
    return [1, 2, 3, 4];
  }),
});

export type AppRouter = typeof appRouter;

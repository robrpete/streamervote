import { streamRouter } from "~/server/api/routers/stream";
import { createTRPCRouter } from "~/server/api/trpc";
import { tokenRouter } from "./routers/token";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  stream: streamRouter,
  token: tokenRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

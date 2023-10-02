import { z } from "zod";
import { token } from "~/lib/schema";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tokenRouter = createTRPCRouter({
  getToken: publicProcedure.query(({ ctx }) => {
    return ctx.db.select().from(token);
  }),
  saveToken: publicProcedure
    .input(z.object({ token: z.string() }))
    .mutation(({ ctx, input }) => {
      console.log("save token");
      return ctx.db.insert(token).values({
        token: input.token,
      });
    }),
});

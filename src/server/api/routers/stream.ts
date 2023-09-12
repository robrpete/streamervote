import { z } from "zod";
import { todo } from "~/lib/schema";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const streamRouter = createTRPCRouter({
  hello: publicProcedure.query(({ ctx }) => {
    console.log("ran");
    return ctx.db.select().from(todo);
  }),
});

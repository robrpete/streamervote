import { createId } from "@paralleldrive/cuid2";

import { pgTable, bigint, text, varchar } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: varchar("id", { length: 191 })
    .$defaultFn(() => createId())
    .primaryKey(),
  streamerName: text("streamerName"),
  votes: bigint("bigint", { mode: "number" }),
});

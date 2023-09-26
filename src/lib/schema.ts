import { createId } from "@paralleldrive/cuid2";

import {
  pgTable,
  bigint,
  text,
  varchar,
  timestamp,
  json,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: varchar("id", { length: 191 })
    .$defaultFn(() => createId())
    .primaryKey(),
  clerkId: text("clerkId"),
  followed: json("followed").default({ followed: "none" }),
  searched: json("searched").default({ searched: "none" }),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const streamer = pgTable("streamer", {
  id: varchar("id", { length: 191 })
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text("name"),
  avatar: text("avatar"),
  color: text("color").default("white"),
  emojis: json("emojis").default({ emojis: "none" }),
  followers: json("followers").default({ followers: "none" }),
  votes: bigint("bigint", { mode: "number" }).default(0),
});

export const token = pgTable("token", {
  id: varchar("id", { length: 191 })
    .$defaultFn(() => createId())
    .primaryKey(),
  token: text("token"),
  createdAt: timestamp("createdAt").defaultNow(),
});

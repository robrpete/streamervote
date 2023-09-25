CREATE TABLE IF NOT EXISTS "token" (
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"token" text,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"clerkId" text,
	"followed" json,
	"searched" json,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "todo" RENAME TO "streamer";--> statement-breakpoint
ALTER TABLE "streamer" RENAME COLUMN "streamerName" TO "name";--> statement-breakpoint
ALTER TABLE "streamer" ADD COLUMN "avatar" text;--> statement-breakpoint
ALTER TABLE "streamer" ADD COLUMN "color" text;--> statement-breakpoint
ALTER TABLE "streamer" ADD COLUMN "emojis" json;--> statement-breakpoint
ALTER TABLE "streamer" ADD COLUMN "followers" text;
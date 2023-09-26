ALTER TABLE "streamer" ALTER COLUMN "color" SET DEFAULT 'white';--> statement-breakpoint
ALTER TABLE "streamer" ALTER COLUMN "emojis" SET DEFAULT '{"emojis":"none"}'::json;--> statement-breakpoint
ALTER TABLE "streamer" ALTER COLUMN "followers" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "streamer" ALTER COLUMN "followers" SET DEFAULT '{"follwers":"none"}'::json;--> statement-breakpoint
ALTER TABLE "streamer" ALTER COLUMN "bigint" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "followed" SET DEFAULT '{"followers":"none"}'::json;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "searched" SET DEFAULT '{"searched":"none"}'::json;
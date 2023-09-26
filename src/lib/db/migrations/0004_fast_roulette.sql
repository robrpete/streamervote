ALTER TABLE "streamer" ALTER COLUMN "followers" SET DEFAULT '{"followers":"none"}'::json;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "followed" SET DEFAULT '{"followed":"none"}'::json;
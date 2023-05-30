
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user_presets" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user"("id") NOT NULL,
	"user_delay.json" TEXT,
	"name" VARCHAR (100),
	"description" VARCHAR (1000),
	"created_at" TIMESTAMP DEFAULT NOW(),
	"updated_at" TIMESTAMP DEFAULT NOW(),
	"public" BOOLEAN NOT NULL,
	"remixed_from" INT REFERENCES "user_presets"("id") NOT NULL
);

ALTER TABLE "user_presets" 
ALTER COLUMN "remixed_from" DROP NOT NULL;
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

ALTER TABLE "user_presets"
RENAME "user_delay.json" TO "user_preset_values";

    
CREATE  FUNCTION update_updated_at_user_presets()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_presets_updated_at
    BEFORE UPDATE
    ON
        user_presets
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_user_presets();

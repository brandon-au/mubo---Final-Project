set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."users" (
    "userId" serial NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."moodboards" (
    "moodboardId" serial NOT NULL,
    "userId" integer NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    CONSTRAINT "moodboards_pk" PRIMARY KEY ("moodboardId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."entries" (
    "entryId" serial NOT NULL,
    "moodboardId" integer NOT NULL,
    "dateAdded" TIMESTAMPTZ NOT NULL default now(),
    CONSTRAINT "entries_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."notes" (
    "noteId" serial NOT NULL,
    "moodboardId" integer NOT NULL,
    "content" TEXT NOT NULL,
    "dateCreated" TIMESTAMPTZ NOT NULL default now(),
    CONSTRAINT "notes_pk" PRIMARY KEY ("noteId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "moodboards" ADD CONSTRAINT "moodboards_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "entries" ADD CONSTRAINT "entries_fk0" FOREIGN KEY ("moodboardId") REFERENCES "moodboards"("moodboardId");
ALTER TABLE "notes" ADD CONSTRAINT "notes_fk0" FOREIGN KEY ("moodboardId") REFERENCES "moodboards"("moodboardId");

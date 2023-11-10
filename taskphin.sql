-- Adminer 4.8.1 PostgreSQL 14.5 (Debian 14.5-2.pgdg110+2) dump

DROP TABLE IF EXISTS "movie";
DROP SEQUENCE IF EXISTS movie_id_seq;
CREATE SEQUENCE movie_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."movie" (
    "id" integer DEFAULT nextval('movie_id_seq') NOT NULL,
    "name" character(255) NOT NULL,
    "rating" integer NOT NULL,
    "cast" json NOT NULL,
    "genre" character(255) NOT NULL,
    "releaseDate" date NOT NULL,
    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "movie" ("id", "name", "rating", "cast", "genre", "releaseDate") VALUES
(3,	'Don                                                                                                                                                                                                                                                            ',	5,	'["SRK "," Kareena"]',	'action                                                                                                                                                                                                                                                         ',	'2023-11-28'),
(4,	'China Thambi                                                                                                                                                                                                                                                   ',	4,	'["DD"," MM"]',	'hor                                                                                                                                                                                                                                                            ',	'2023-11-24'),
(5,	'Rocky                                                                                                                                                                                                                                                          ',	5,	'["Silverster"]',	'action                                                                                                                                                                                                                                                         ',	'2023-11-30');

DROP TABLE IF EXISTS "user";
DROP SEQUENCE IF EXISTS user_id_seq;
CREATE SEQUENCE user_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."user" (
    "id" integer DEFAULT nextval('user_id_seq') NOT NULL,
    "name" character(255),
    "email" character(255),
    "password" character(255),
    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "user" ("id", "name", "email", "password") VALUES
(1,	'Thomas                                                                                                                                                                                                                                                         ',	'thomas@gmail.com                                                                                                                                                                                                                                               ',	'thomas@gmail.com                                                                                                                                                                                                                                               '),
(2,	'john                                                                                                                                                                                                                                                           ',	'john@gmail.com                                                                                                                                                                                                                                                 ',	'john@gmail.com                                                                                                                                                                                                                                                 '),
(3,	'mary                                                                                                                                                                                                                                                           ',	'mary@gmail.com                                                                                                                                                                                                                                                 ',	'mary@gmail.com                                                                                                                                                                                                                                                 ');

-- 2023-11-10 14:19:50.065973+00

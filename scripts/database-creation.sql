create schema public;
create schema discord;

create domain discord.id varchar(25);
create domain discord.message varchar(2000);
create domain public.nanoid varchar(21);
create type public.bibleversion as enum ('acf', 'apee', 'bbe', 'kjv', 'nvi', 'ra', 'rvr');

create table discord.user_settings (
	user_id discord.id not null primary key,
	default_bible_version public.bibleversion
);

create table discord.prayer_petitions (
	prayer_id public.nanoid not null primary key,
	petition_date_time timestamp not null,
	user_id discord.id,
	approved bit,
	message discord.message not null
);
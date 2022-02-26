create schema public;
create schema discord;

create domain discord.id varchar(25);
create domain discord.message varchar(2000);
create domain public.nanoid varchar(21);

create type public.bible_version as enum (
	'acf', 'apee', 'bbe', 'kjv', 'nvi', 'ra', 'rvr'
);

create type public.culture_info as enum (
	'pt-BR', 'en-US'
);

create type discord.prayer_petition_setting as (
	approval_channel_id discord.id,
	petition_channel_id discord.id
);

create table discord.user_settings (
	user_id discord.id not null primary key,
	default_bible_version public.bible_version
);

create table discord.server_settings (
	server_id discord.id not null primary key,
	default_bible_version public.bible_version,
	prayer_petition_setting discord.prayer_petition_setting,
	culture public.culture_info not null default 'pt-BR'
);

create table discord.prayer_petitions (
	prayer_id public.nanoid not null primary key,
	petition_date date not null,
	user_id discord.id,
	message discord.message not null
);
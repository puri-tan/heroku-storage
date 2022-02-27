create schema public;
create schema discord;

create domain discord.id varchar(25);
create domain discord.message varchar(2000);
create domain public.nanoid varchar(21);

create type public.bible_version as enum (
	'acf', 'apee', 'bbe', 'kjv', 'nvi', 'ra', 'rvr'
);

create table discord.user_settings (
	user_id discord.id not null primary key,
	default_bible_version public.bible_version
);

create table discord.server_settings (
	server_id discord.id not null primary key,
	default_bible_version public.bible_version,
	prayer_approval_channel_id discord.id,
	prayer_petition_channel_id discord.id,
	accept_all_prayer_petitions bool not null default false
);

create table discord.prayer_petitions (
	prayer_id public.nanoid not null primary key,
	server_id discord.id,
	petition_date date not null,
	user_id discord.id,
	message discord.message not null
);

create table discord.prayer_approvals (
	server_id discord.id not null,
	prayer_id discord.id not null,
	primary key (server_id, prayer_id),
	constraint fk_prayer_petition
		foreign key (prayer_id)
		references discord.prayer_petitions (prayer_id)
		on delete cascade
);

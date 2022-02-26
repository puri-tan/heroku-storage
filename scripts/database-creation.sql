create table discord.user_settings (
	user_id varchar(25) primary key,
	default_bible_version varchar(10),
	constraint bible_version check (default_bible_version in ('acf', 'apee', 'bbe', 'kjv', 'nvi', 'ra', 'rvr'))
)

create table discord.user_prayers (
	prayer_id varchar(21) primary key,
	user_id varchar(25) not null,
	approved bit,
	message varchar(2000) not null
)
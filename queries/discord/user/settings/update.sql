update discord.user_settings
set default_bible_version = ${defaultBibleVersion}
where user_id = ${userId}
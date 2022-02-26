select user_id,	default_bible_version
from discord.user_settings
where user_id = ${userId}
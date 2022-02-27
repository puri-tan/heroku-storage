select
  server_id,
  default_bible_version,
  (prayer_petition_setting).approval_channel_id,
  (prayer_petition_setting).petition_channel_id
from discord.server_settings

update discord.server_settings
set
  default_bible_version = ${defaultBibleVersion},
  prayer_approval_channel_id = ${prayerApprovalChannelId},
  prayer_petition_channel_id = ${prayerPetitionChannelId},
  accept_all_prayer_petitions = ${acceptAllPrayerPetitions}
where server_id = ${serverId}

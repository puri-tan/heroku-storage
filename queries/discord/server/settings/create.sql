insert into discord.server_settings (
  server_id,
  default_bible_version,
  prayer_approval_channel_id,
  prayer_petition_channel_id,
  accept_all_prayer_petitions
) values (
  ${serverId},
  ${defaultBibleVersion},
  ${prayerApprovalChannelId},
  ${prayerPetitionChannelId},
  ${acceptAllPrayerPetitions}
)

insert into discord.server_settings
(
  server_id,
  default_bible_version,
  prayer_petition_setting
)
values
(
  ${serverId},
  ${defaultBibleVersion},
  (
    ${prayerPetitionSetting.approvalChannelId},
    ${prayerPetitionSetting.petitionChannelId}
  )
)

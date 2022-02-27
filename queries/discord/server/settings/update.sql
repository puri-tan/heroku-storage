update discord.server_settings
set
  default_bible_version = ${defaultBibleVersion},
	prayer_petition_setting = (
    ${prayerPetitionSetting.approvalChannelId},
    ${prayerPetitionSetting.petitionChannelId}
  )
where server_id = ${serverId}

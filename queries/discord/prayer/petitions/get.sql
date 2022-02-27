select
  prayer_id,
  petition_date,
  user_id,
  message
from discord.prayer_petitions
where prayer_id = ${prayerId}

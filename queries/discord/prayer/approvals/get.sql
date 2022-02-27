select
	prayer_id,
	server_id
from discord.prayer_approvals
where prayer_id = ${prayerId}
and server_id = ${serverId}

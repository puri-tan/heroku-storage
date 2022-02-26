const { QueryFile } = require('pg-promise');
const { join: joinPath } = require('path');

function sql(file) {
  const fullPath = joinPath(__dirname, 'queries/', file);
  return new QueryFile(fullPath, { minify: true });
}

module.exports = {
  discord: {
    user: {
      settings: {
        check: sql('discord/user/settings/check.sql'),
        get: sql('discord/user/settings/get.sql'),
        create: sql('discord/user/settings/create.sql'),
        update: sql('discord/user/settings/update.sql'),
        delete: sql('discord/user/settings/delete.sql')
      }
    }
  }
};
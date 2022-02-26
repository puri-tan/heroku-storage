const camelcaseKeysDeep = require('camelcase-keys-deep')

function data(res) {
  return (data) => {
    if (data) {
      res.json(camelcaseKeysDeep(data))
    } else {
      res.statusCode = 404
      res.end()
    }
  }
}

function error(res) {
  return (error) => {
    res.statusCode = 500
    console.log(error)
    res.json({ error: error })
  }
}

function noContent(res) {
  return () => {
    res.statusCode = 204
    res.end()
  }
}

function created(res) {
  return () => {
    res.statusCode = 201
    res.end()
  }
}

const getRes = (db, sql, params, res) => {
  db.oneOrNone(sql, params).then(data(res)).catch(error(res))
}

const putRes = (db, checkSql, createSql, updateSql, body, res) => {
  db.oneOrNone(checkSql, body).then((data) => {
    if (data)
      db.none(updateSql, body).then(noContent(res)).catch(error(res))
    else
      db.none(createSql, body).then(created(res)).catch(error(res))
  }).catch(error(res))
}

const deleteRes = (db, checkSql, deleteSql, params, res) => {
  db.oneOrNone(checkSql, params).then((data) => {
    if (data) {
      db.none(deleteSql, params).then(noContent(res)).catch(error(res))
    } else {
      res.statusCode = 404
      res.end()
    }
  }).catch(error(res))
}

module.exports = {
  getRes, putRes, deleteRes
}

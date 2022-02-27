const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const pgp = require('pg-promise')()
const queries = require('./queries')
const { getRes, putRes, deleteRes, postRes } = require('./responses')
const basicAuth = require('express-basic-auth')

dotenv.config()

const port = process.env.PORT
const databaseUrl = process.env.DATABASE_URL

const app = express()
const db = pgp(databaseUrl)

app.use(bodyParser.json())

app.use(basicAuth({
  users: {
    'admin': process.env.ADMIN_PASSWORD,
    'puri-tan': process.env.PURI_TAN_PASSWORD
  }
}))

// User Settings

app.get('/discord/user/settings/:userId', (req, res) => {
  getRes(db, queries.discord.user.settings.get, req.params, res)
})

app.put('/discord/user/settings', (req, res) => {
  putRes(db,
    queries.discord.user.settings.check,
    queries.discord.user.settings.create,
    queries.discord.user.settings.update,
    req.body,
    res)
})

app.delete('/discord/user/settings/:userId', (req, res) => {
  deleteRes(db,
    queries.discord.user.settings.check,
    queries.discord.user.settings.delete,
    req.params,
    res)
})

// Server Settings

app.get('/discord/server/settings/:serverId', (req, res) => {
  getRes(db, queries.discord.server.settings.get, req.params, res)
})

app.put('/discord/server/settings', (req, res) => {
  putRes(db,
    queries.discord.server.settings.check,
    queries.discord.server.settings.create,
    queries.discord.server.settings.update,
    req.body,
    res)
})

app.delete('/discord/server/settings/:serverId', (req, res) => {
  deleteRes(db,
    queries.discord.server.settings.check,
    queries.discord.server.settings.delete,
    req.params,
    res)
})

// Prayer petitions

app.get('/discord/prayer/petitions/:prayerId', (req, res) => {
  getRes(db, queries.discord.prayer.petitions.get, req.params, res)
})

app.post('/discord/prayer/petitions', (req, res) => {
  postRes(db,
    queries.discord.prayer.petitions.check,
    queries.discord.prayer.petitions.create,
    req.body,
    res)
})

app.delete('/discord/prayer/petitions/:prayerId', (req, res) => {
  deleteRes(db,
    queries.discord.prayer.petitions.check,
    queries.discord.prayer.petitions.delete,
    req.params,
    res)
})

app.listen(port, () => {
  console.log(`API running on port ${port}.`)
})

const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const pgp = require('pg-promise')()
const queries = require('./queries')
const { getRes, putRes, deleteRes } = require('./responses')

dotenv.config()

const port = process.env.PORT
const databaseUrl = process.env.DATABASE_URL

const app = express()
const db = pgp(databaseUrl)

app.use(bodyParser.json())

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

app.listen(port, () => {
  console.log(`API running on port ${port}.`)
})

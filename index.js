const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT
const databaseUrl = process.env.DATABASE_URL

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
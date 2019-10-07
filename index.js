const express = require('express')
const app = express()
const port = 15084

app.get('/', (req, res) =>
  res.send('Greetings from Besteb...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)

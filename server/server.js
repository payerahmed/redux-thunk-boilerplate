const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/link', (req, res) =>
  res.send('https://jsonplaceholder.typicode.com/todos/')
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

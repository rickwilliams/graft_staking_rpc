
const express = require('express')
const app = express()
const port = 18691

app.get('/test', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

'run strict'
const express = require('express')
const app = express()
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.sendFile('src/index.html',{root:"."}))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
'run strict'
const express = require('express')
const app = express()
app.get('/', (req, res) => res.sendFile('src/index.html',{root:"."}))
app.get('/bundle', (req, res) => res.sendFile('src/output/bundle.js',{root:"."}))
app.listen(3005, () => console.log('Example app listening on port 3005!'))
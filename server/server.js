const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 8082
const app = express()
app.use(cors())

const survive = require('./library/survive')
const maths = require('./library/maths')

app.get('/', function(request, response) {
    response.json('yo')
})

app.get('/survive', survive)

app.get('/maths', maths)

app.listen(PORT, ()=> console.log(`app  is running on port ${PORT}`))
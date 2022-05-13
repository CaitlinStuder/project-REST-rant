require('dotenv').config()

const express = require('express')
const app = express()

// importing router from places.js file
// first argument '/places' sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)

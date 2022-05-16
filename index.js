require('dotenv').config()

const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// importing router from places.js file
// first argument '/places' sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

// wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)

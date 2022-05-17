require('dotenv').config()

const express = require('express')
const app = express()

// Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// importing router from places.js file
// first argument '/places' sets all routes in the places controller relative to /places. This means that /places will be added in front of any other path we define in the controller
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('home')
})

// wildcard route
app.get('*', (req, res) => {
    res.render('error404')
})  

app.use('/places', require('./controllers/places'))

app.listen(process.env.PORT)

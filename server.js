// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our clothing data from models folder
const blouses = require('./models/blouses')
const capris = require('./models/capris')
const dresses = require('./models/dresses')
const earings = require('./models/earings')
const hats = require('./models/hats')
const pants = require('./models/pants')
const robes = require('./models/robes')
const shirts = require('./models/shirts')
const shoes = require('./models/shoes')
const socks = require('./models/socks')

// Load our blouse routes

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})
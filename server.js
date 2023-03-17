// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load our clothing data from models folder
const blouses = require('./models/blouses')
// const capris = require('./models/capris')
// const dresses = require('./models/dresses')
// const earings = require('./models/earings')
// const hats = require('./models/hats')
// const pants = require('./models/pants')
// const robes = require('./models/robes')
// const shirts = require('./models/shirts')
// const shoes = require('./models/shoes')
// const socks = require('./models/socks')

// Load our routes
const blouseRoutes = require('./routes/blouseRoutes')
const capriRoutes = require('./routes/capriRoutes')
const dressRoutes = require('./routes/dressRoutes')
const earingRoutes = require('./routes/earingRoutes')
const hatRoutes = require('./routes/hatRoutes')
const pantRoutes = require('./routes/pantRoutes')
const robeRoutes = require('./routes/robeRoutes')
const shirtRoutes = require('./routes/shirtRoutes')
const shoeRoutes = require('./routes/shoeRoutes')
const sockRoutes = require('./routes/sockRoutes')

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// Connect our routes to our express app
app.use('/blouse', blouseRoutes)
app.use('/capri', capriRoutes)
app.use('/dress', dressRoutes)
app.use('/earing', earingRoutes)
app.use('/hat', hatRoutes)
app.use('/pant', pantRoutes)
app.use('/robe', robeRoutes)
app.use('/shirt', shirtRoutes)
app.use('/shoe', shoeRoutes)
app.use('/sock', sockRoutes)

// Setup an "index" route for blouses and then move to blouseRoutes.js
app.get('/blouses', (req, res) => {
    console.log('/blouses')
    res.send(blouses)
})

// // Setup a "show" route for blouses and then move to blouseRoutes.js
// app.get('/blouses/:index', (req, res) => {
//     res.send(blouses[req.params.index])
// })


// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})
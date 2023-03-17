const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our shirt data from models folder 
// const shirt = require ()

// // Setup an "index" route for shirts and attach it to router 
// router.get('/', (req, res) => {
//     res.send(shirts)
// })

// Load our controller and its route logic
const shirtController = require('../controllers/shirtController')

// Setup an "index" route for shirts, attach it to router along with the controller logic
router.get('/', shirtController.index)

module.exports = router 
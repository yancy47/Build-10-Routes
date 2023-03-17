const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our earing data from models folder 
// const earing = require ()

// // Setup an "index" route for earings and attach it to router 
// router.get('/', (req, res) => {
//     res.send(earings)
// })

// Load our controller and its route logic
const eaController = require('../controllers/earingController')

// Setup an "index" route for earings, attach it to router along with the controller logic
router.get('/', earingController.index)

module.exports = router 
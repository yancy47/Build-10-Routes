const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our pant data from models folder 
// const pant = require ()

// // Setup an "index" route for pants and attach it to router 
// router.get('/', (req, res) => {
//     res.send(pants)
// })

// Load our controller and its route logic
const pantController = require('../controllers/pantController')

// Setup an "index" route for pants, attach it to router along with the controller logic
router.get('/', pantController.index)

module.exports = router 
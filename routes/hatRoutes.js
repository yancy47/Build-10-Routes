const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our hat data from models folder 
// const hat = require ()

// // Setup an "index" route for hats and attach it to router 
// router.get('/', (req, res) => {
//     res.send(hats)
// })

// Load our controller and its route logic
const hatController = require('../controllers/hatController')

// Setup an "index" route for hats, attach it to router along with the controller logic
router.get('/', hatController.index)

module.exports = router 
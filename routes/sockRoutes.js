const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our sock data from models folder 
// const sock = require ()

// // Setup an "index" route for socks and attach it to router 
// router.get('/', (req, res) => {
//     res.send(socks)
// })

// Load our controller and its route logic
const sockController = require('../controllers/sockController')

// Setup an "index" route for socks, attach it to router along with the controller logic
router.get('/', sockController.index)

module.exports = router 
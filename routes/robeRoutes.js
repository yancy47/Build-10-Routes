const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our robe data from models folder 
// const robe = require ()

// // Setup an "index" route for robes and attach it to router 
// router.get('/', (req, res) => {
//     res.send(robes)
// })

// Load our controller and its route logic
const robeController = require('../controllers/robeController')

// Setup an "index" route for robes, attach it to router along with the controller logic
router.get('/', robeController.index)

module.exports = router 
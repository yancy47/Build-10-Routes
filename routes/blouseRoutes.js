const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our blouse data from models folder 
// const blouse = require ()

// // Setup an "index" route for blouses and attach it to router 
// router.get('/', (req, res) => {
//     res.send(blouses)
// })

// // Setup a "show" route for blouses, attach it to router
// router.get('/:index', (req, res) => { 
//     res.send(blouses[req.params.index])
// })

// Load our controller and its route logic
const blouseController = require('../controllers/blouseController')

// Setup an "index" route for blouses, attach it to router along with the controller logic
router.get('/', blouseController.index)

// Setup an "show" route for blouses, attach it to router along with the controller logic
router.get('/:index', blouseController.show)

module.exports = router 
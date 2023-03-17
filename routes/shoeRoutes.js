const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our shoe data from models folder 
// const shoe = require ()

// // Setup an "index" route for shoes and attach it to router 
// router.get('/', (req, res) => {
//     res.send(shoes)
// })

// Load our controller and its route logic
const shoeController = require('../controllers/shoeController')

// Setup an "index" route for shoes, attach it to router along with the controller logic
router.get('/', shoeController.index)

module.exports = router 
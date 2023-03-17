const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our dress data from models folder 
// const dress = require ()

// // Setup an "index" route for dresses and attach it to router 
// router.get('/', (req, res) => {
//     res.send(dresses)
// })

// Load our controller and its route logic
const dressController = require('../controllers/dressController')

// Setup an "index" route for dresses, attach it to router along with the controller logic
router.get('/', dressController.index)

module.exports = router 
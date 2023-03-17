const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our capri data from models folder 
// const capri = require ()

// // Setup an "index" route for capri and attach it to router 
// router.get('/', (req, res) => { // this goes form this router.get('/capris', (req, res) to this router.get('/', (req, res)
//     res.send(capris)
// })

// Load our controller and its route logic
const capriController = require('../controllers/capriController')

// Setup an "index" route for capris, attach it to router along with the controller logic
router.get('/', capriController.index)

module.exports = router
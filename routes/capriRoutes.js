const express = require('express')

// Creates our router
const router = express.Router()

// // Loads our capri data from models folder 
// const capri = require ()

// // Setup an "index" route for fruits and attach it to router 
// router.get('/', (req, res) => { // this goes form this router.get('/fruits', (req, res) to this router.get('/', (req, res)
//     res.send(fruits)
// })

// // Setup a "show" route for fruits, attach it to router
// router.get('/:index', (req, res) => { // this goes form this router.get('/fruits/:index', (req, res) to this router.get('/:index', (req, res)
//     res.send(fruits[req.params.index])
// })


// Load our controller and its route logic
const fruitController = require('../controllers/fruitController')


// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', fruitController.index)

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:index', fruitController.show)

module.exports = router
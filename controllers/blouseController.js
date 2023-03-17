const blouses = require('../models/blouses')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(blouses)
    // res.render('blouses/Index',)
    // Looks in the views folder for "blouses/Index" and passes { blouses } data to the view (kind of like a server props object)
    res.render('blouses/Index', { blouses })
}

// Those anonymous callback functions now have names: "index" and "show"
function show(req, res) {
    // res.send(blouses[req.params.index])
    // res.render('blouses/Show')
    res.render('blouses/Show', { blouse: blouses[req.params.index] }) // passing props down 
}

module.exports = { index, show }
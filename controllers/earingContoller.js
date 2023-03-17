const earings = require('../models/earings')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(earings)
    // res.render('earings/Index',)
    // Looks in the views folder for "earings/Index" and passes { earings } data to the view (kind of like a server props object)
    res.render('earings/Index', { earings })
}

module.exports = { index }
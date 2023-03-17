const hats = require('../models/fruits')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(hats)
    // res.render('hats/Index',)
    // Looks in the views folder for "hats/Index" and passes { hats } data to the view (kind of like a server props object)
    res.render('hats/Index', { hats })
}

module.exports = { index }
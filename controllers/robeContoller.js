const robes = require('../models/fruits')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(robes)
    // res.render('robes/Index',)
    // Looks in the views folder for "robes/Index" and passes { robes } data to the view (kind of like a server props object)
    res.render('robes/Index', { robes })
}

module.exports = { index }
const capris = require('../models/capris')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(capris)
    // res.render('capris/Index',)
    // Looks in the views folder for "capris/Index" and passes { capris } data to the view (kind of like a server props object)
    res.render('capris/Index', { capris })
}

module.exports = { index }
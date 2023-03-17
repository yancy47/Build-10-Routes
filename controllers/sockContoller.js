const socks = require('../models/socks')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(socks)
    // res.render('socks/Index',)
    // Looks in the views folder for "socks/Index" and passes { socks } data to the view (kind of like a server props object)
    res.render('socks/Index', { socks })
}

module.exports = { index }
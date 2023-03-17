const shirts = require('../models/shirts')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(shirts)
    // res.render('shirts/Index',)
    // Looks in the views folder for "shirts/Index" and passes { shirts } data to the view (kind of like a server props object)
    res.render('shirts/Index', { shirts })
}

module.exports = { index }
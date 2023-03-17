const dresses = require('../models/dresses')

// The callback functions originally the second argument from -> app.get('/', () => {})
function index(req, res) {
    // res.send(dresses)
    // res.render('dresses/Index',)
    // Looks in the views folder for "dresses/Index" and passes { dresses } data to the view (kind of like a server props object)
    res.render('dresses/Index', { dresses })
}

module.exports = { index }